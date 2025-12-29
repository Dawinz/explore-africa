import axios from 'axios';

const WIKIMEDIA_API_BASE = 'https://en.wikipedia.org/w/api.php';
const WIKIMEDIA_COMMONS_API = 'https://commons.wikimedia.org/w/api.php';

// Cache for country images
const imageCache = new Map();
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Get Wikipedia page title for a country
 * Handles special cases and name variations
 */
const getWikipediaTitle = (countryName) => {
  const nameMap = {
    'ivory coast': 'Ivory Coast',
    'côte d\'ivoire': 'Ivory Coast',
    'cote divoire': 'Ivory Coast',
    'democratic republic of the congo': 'Democratic Republic of the Congo',
    'dr congo': 'Democratic Republic of the Congo',
    'republic of the congo': 'Republic of the Congo',
    'congo': 'Republic of the Congo',
    'são tomé and príncipe': 'São Tomé and Príncipe',
    'sao tome and principe': 'São Tomé and Príncipe',
    'south sudan': 'South Sudan',
    'cape verde': 'Cape Verde',
    'guinea-bissau': 'Guinea-Bissau',
    'guinea bissau': 'Guinea-Bissau',
    'burkina faso': 'Burkina Faso',
    'central african republic': 'Central African Republic',
    'equatorial guinea': 'Equatorial Guinea',
    'sierra leone': 'Sierra Leone',
    'south africa': 'South Africa',
  };

  const normalized = countryName.toLowerCase().trim();
  return nameMap[normalized] || countryName;
};

/**
 * Fetch images from Wikipedia page using MediaWiki API
 */
export const getWikipediaImages = async (countryName) => {
  try {
    const pageTitle = getWikipediaTitle(countryName);
    
    // First, get images from the Wikipedia page
    const response = await axios.get(WIKIMEDIA_API_BASE, {
      params: {
        action: 'query',
        titles: pageTitle,
        prop: 'images',
        imlimit: 20,
        format: 'json',
        origin: '*',
      },
    });

    const pages = response.data.query?.pages;
    if (!pages) return [];

    const pageId = Object.keys(pages)[0];
    const images = pages[pageId]?.images || [];
    
    // Filter for relevant images (exclude flags, maps, small images)
    const relevantImages = images
      .map(img => img.title)
      .filter(title => {
        const lower = title.toLowerCase();
        // Exclude flags, maps, and small images
        return !lower.includes('flag') && 
               !lower.includes('map') && 
               !lower.includes('coat of arms') &&
               !lower.includes('emblem') &&
               !lower.includes('icon') &&
               !lower.includes('logo');
      })
      .slice(0, 10);

    return relevantImages;
  } catch (error) {
    console.error(`Error fetching Wikipedia images for ${countryName}:`, error);
    return [];
  }
};

/**
 * Get image URL from Wikimedia Commons
 */
export const getImageUrl = async (imageTitle) => {
  try {
    // Remove "File:" prefix if present
    const cleanTitle = imageTitle.replace(/^File:/, '');
    
    const response = await axios.get(WIKIMEDIA_COMMONS_API, {
      params: {
        action: 'query',
        titles: `File:${cleanTitle}`,
        prop: 'imageinfo',
        iiprop: 'url',
        iiurlwidth: 1920,
        format: 'json',
        origin: '*',
      },
    });

    const pages = response.data.query?.pages;
    if (!pages) return null;

    const pageId = Object.keys(pages)[0];
    const imageInfo = pages[pageId]?.imageinfo?.[0];
    
    return imageInfo?.url || imageInfo?.thumburl || null;
  } catch (error) {
    console.error(`Error fetching image URL for ${imageTitle}:`, error);
    return null;
  }
};


/**
 * Get hero image for a country from Wikimedia
 * Uses caching to avoid repeated API calls
 * Searches Wikimedia Commons for country-specific images
 */
export const getCountryHeroImageFromWikimedia = async (countryName) => {
  if (!countryName) {
    return null;
  }

  const cacheKey = countryName.toLowerCase().trim();
  
  // Check cache
  const cached = imageCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.url;
  }

  try {
    // Search Wikimedia Commons for country-specific images
    // Try multiple search terms to find the best image
    const searchTerms = [
      `${countryName} landscape`,
      `${countryName} city skyline`,
      `${countryName} capital city`,
      `${countryName} view`,
      `${countryName} scenery`,
    ];

    for (const searchTerm of searchTerms) {
      try {
        const searchResponse = await axios.get(WIKIMEDIA_COMMONS_API, {
          params: {
            action: 'query',
            list: 'search',
            srsearch: searchTerm,
            srnamespace: 6, // File namespace
            srlimit: 10,
            format: 'json',
            origin: '*',
          },
        });

        const searchResults = searchResponse.data.query?.search || [];
        
        // Filter out flags, maps, and small images
        const relevantResults = searchResults.filter(result => {
          const title = result.title.toLowerCase();
          return !title.includes('flag') && 
                 !title.includes('map') && 
                 !title.includes('coat of arms') &&
                 !title.includes('emblem') &&
                 !title.includes('icon') &&
                 !title.includes('logo') &&
                 !title.includes('stamp');
        });

        // Try to get URL for relevant images
        for (const result of relevantResults.slice(0, 5)) {
          const imageUrl = await getImageUrl(result.title);
          if (imageUrl) {
            // Cache the result
            imageCache.set(cacheKey, { url: imageUrl, timestamp: Date.now() });
            return imageUrl;
          }
        }
      } catch (error) {
        console.warn(`Error searching for "${searchTerm}":`, error);
        continue;
      }
    }

    // Fallback: Try getting images from Wikipedia page
    const images = await getWikipediaImages(countryName);
    for (const imageTitle of images.slice(0, 3)) {
      const imageUrl = await getImageUrl(imageTitle);
      if (imageUrl) {
        imageCache.set(cacheKey, { url: imageUrl, timestamp: Date.now() });
        return imageUrl;
      }
    }

    return null;
  } catch (error) {
    console.error(`Error fetching hero image for ${countryName}:`, error);
    return null;
  }
};

/**
 * Get city image from Wikimedia Commons
 * Searches for real images of specific cities
 */
export const getCityImageFromWikimedia = async (cityName, countryName) => {
  if (!cityName) return null;

  const cacheKey = `city_${cityName.toLowerCase().trim()}_${countryName?.toLowerCase().trim() || ''}`;
  
  // Check cache
  const cached = imageCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.url;
  }

  try {
    // Search Wikimedia Commons for city-specific images
    // Use more specific search terms to get actual city photos
    const searchTerms = [
      `${cityName} ${countryName || ''} city skyline`,
      `${cityName} ${countryName || ''} cityscape`,
      `${cityName} ${countryName || ''} urban`,
      `${cityName} ${countryName || ''} downtown`,
      `${cityName} city ${countryName || ''}`,
      `${cityName} skyline`,
      `${cityName} city center`,
      `${cityName} ${countryName || ''}`,
    ].filter(term => term.trim());

    for (const searchTerm of searchTerms) {
      try {
        const searchResponse = await axios.get(WIKIMEDIA_COMMONS_API, {
          params: {
            action: 'query',
            list: 'search',
            srsearch: searchTerm,
            srnamespace: 6, // File namespace
            srlimit: 10,
            format: 'json',
            origin: '*',
          },
        });

        const searchResults = searchResponse.data.query?.search || [];
        
        // Filter out flags, maps, and prioritize city/urban images
        const relevantResults = searchResults.filter(result => {
          const title = result.title.toLowerCase();
          const snippet = (result.snippet || '').toLowerCase();
          
          // Exclude non-city images
          if (title.includes('flag') || 
              title.includes('map') || 
              title.includes('coat of arms') ||
              title.includes('emblem') ||
              title.includes('icon') ||
              title.includes('logo') ||
              title.includes('stamp') ||
              title.includes('seal') ||
              title.includes('airport') ||
              title.includes('station') ||
              snippet.includes('flag') ||
              snippet.includes('map')) {
            return false;
          }
          
          // Prioritize city/urban/skyline images
          if (title.includes('skyline') ||
              title.includes('cityscape') ||
              title.includes('urban') ||
              title.includes('downtown') ||
              title.includes('city') ||
              title.includes('street') ||
              title.includes('building')) {
            return true;
          }
          
          // Include other images that might be city-related
          return true;
        });
        
        // Sort to prioritize city images
        relevantResults.sort((a, b) => {
          const aTitle = a.title.toLowerCase();
          const bTitle = b.title.toLowerCase();
          
          const aScore = (aTitle.includes('skyline') ? 3 : 0) +
                        (aTitle.includes('cityscape') ? 3 : 0) +
                        (aTitle.includes('urban') ? 2 : 0) +
                        (aTitle.includes('downtown') ? 2 : 0) +
                        (aTitle.includes('city') ? 1 : 0);
          
          const bScore = (bTitle.includes('skyline') ? 3 : 0) +
                        (bTitle.includes('cityscape') ? 3 : 0) +
                        (bTitle.includes('urban') ? 2 : 0) +
                        (bTitle.includes('downtown') ? 2 : 0) +
                        (bTitle.includes('city') ? 1 : 0);
          
          return bScore - aScore;
        });

        // Try to get URL for relevant images
        for (const result of relevantResults.slice(0, 3)) {
          const imageUrl = await getImageUrl(result.title);
          if (imageUrl) {
            // Cache the result
            imageCache.set(cacheKey, { url: imageUrl, timestamp: Date.now() });
            return imageUrl;
          }
        }
      } catch (error) {
        console.warn(`Error searching for "${searchTerm}":`, error);
        continue;
      }
    }

    return null;
  } catch (error) {
    console.error(`Error fetching city image for ${cityName}:`, error);
    return null;
  }
};

export default {
  getWikipediaImages,
  getImageUrl,
  getCountryHeroImageFromWikimedia,
  getCityImageFromWikimedia,
};

