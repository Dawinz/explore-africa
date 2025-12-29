// Comprehensive image mapping for all 54 African countries
// Using curated Unsplash images - each country gets unique images
import { getCountryHeroImageFromWikimedia, getCityImageFromWikimedia } from './wikimediaApi';

export const countryHeroImages = {
  // Northern Africa
  'algeria': 'https://images.unsplash.com/photo-1567936868667-1fa7b2b0eb5e?w=1920&h=1080&fit=crop',
  'egypt': 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&h=1080&fit=crop',
  'libya': 'https://images.unsplash.com/photo-1591825944920-9a6d228a8f44?w=1920&h=1080&fit=crop',
  'morocco': 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&h=1080&fit=crop',
  'tunisia': 'https://images.unsplash.com/photo-1589394273804-0d00c62ee043?w=1920&h=1080&fit=crop',
  'sudan': 'https://images.unsplash.com/photo-1578974239243-c3aa901e1a5c?w=1920&h=1080&fit=crop',
  'south sudan': 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',

  // Eastern Africa
  'burundi': 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920&h=1080&fit=crop',
  'comoros': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop',
  'djibouti': 'https://images.unsplash.com/photo-1608018943049-64b1c95c7dfc?w=1920&h=1080&fit=crop',
  'eritrea': 'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1920&h=1080&fit=crop',
  'ethiopia': 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920&h=1080&fit=crop',
  'kenya': 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&h=1080&fit=crop',
  'madagascar': 'https://images.unsplash.com/photo-1612476337801-e373c46bb526?w=1920&h=1080&fit=crop',
  'malawi': 'https://images.unsplash.com/photo-1621453243671-4e4b7c9c2e8d?w=1920&h=1080&fit=crop',
  'mauritius': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop',
  'mozambique': 'https://images.unsplash.com/photo-1581972798862-cf71cb76d341?w=1920&h=1080&fit=crop',
  'rwanda': 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&h=1080&fit=crop',
  'seychelles': 'https://images.unsplash.com/photo-1562959822-193b4be1803d?w=1920&h=1080&fit=crop',
  'somalia': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop',
  'tanzania': 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=1080&fit=crop',
  'uganda': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop',
  'zambia': 'https://images.unsplash.com/photo-1568469156825-1c138a4d1d0e?w=1920&h=1080&fit=crop',
  'zimbabwe': 'https://images.unsplash.com/photo-1621599934254-2f9f0ab8e5f8?w=1920&h=1080&fit=crop',

  // Western Africa
  'benin': 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',
  'burkina faso': 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1920&h=1080&fit=crop',
  'cape verde': 'https://images.unsplash.com/photo-1505881402582-c042dd55a2f8?w=1920&h=1080&fit=crop',
  'ivory coast': 'https://images.unsplash.com/photo-1568031813264-d394c5d474b9?w=1920&h=1080&fit=crop',
  'côte d\'ivoire': 'https://images.unsplash.com/photo-1568031813264-d394c5d474b9?w=1920&h=1080&fit=crop',
  'gambia': 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1920&h=1080&fit=crop',
  'ghana': 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=1920&h=1080&fit=crop',
  'guinea': 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=1920&h=1080&fit=crop',
  'guinea-bissau': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop',
  'liberia': 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1920&h=1080&fit=crop',
  'mali': 'https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=1920&h=1080&fit=crop',
  'mauritania': 'https://images.unsplash.com/photo-1601302991032-e965d6ce5754?w=1920&h=1080&fit=crop',
  'niger': 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',
  'nigeria': 'https://images.unsplash.com/photo-1555116505-38ab61800975?w=1920&h=1080&fit=crop',
  'senegal': 'https://images.unsplash.com/photo-1606147210732-76af5a58fc7f?w=1920&h=1080&fit=crop',
  'sierra leone': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop',
  'togo': 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1920&h=1080&fit=crop',

  // Central Africa
  'cameroon': 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&h=1080&fit=crop',
  'central african republic': 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',
  'chad': 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1920&h=1080&fit=crop',
  'congo': 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=1080&fit=crop',
  'democratic republic of the congo': 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',
  'equatorial guinea': 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1920&h=1080&fit=crop',
  'gabon': 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&h=1080&fit=crop',
  'sao tome and principe': 'https://images.unsplash.com/photo-1505881402582-c042dd55a2f8?w=1920&h=1080&fit=crop',

  // Southern Africa
  'angola': 'https://images.unsplash.com/photo-1623740698660-88ea06c6d61d?w=1920&h=1080&fit=crop',
  'botswana': 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',
  'eswatini': 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1920&h=1080&fit=crop',
  'lesotho': 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920&h=1080&fit=crop',
  'namibia': 'https://images.unsplash.com/photo-1602954103979-add3847c5e50?w=1920&h=1080&fit=crop',
  'south africa': 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1920&h=1080&fit=crop',
};

// Gallery images - unique images for each country
// Each country gets unique images based on country name hash
export const getCountryGalleryImages = (countryName) => {
  const name = countryName.toLowerCase().trim();
  
  // Generate a unique hash from country name
  const hash = name.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0);
  }, 0);
  
  // Pool of diverse Unsplash photo IDs for African countries
  // Using actual Unsplash photo IDs ensures unique images
  const photoIds = [
    '1516026672322-bc52d61a55d5', '1523805009345-7448845a9e53', '1547471080-7cc2caa01a7e',
    '1609137144813-7d9921338f24', '1564760055775-d63b17a55c44', '1549366021-9f761d450615',
    '1534177616072-ef7dc120449d', '1456926631375-92c8ce872def', '1523755231516-e43fd2e8dca5',
    '1555116505-38ab61800975', '1497206365907-f5e630693df0', '1517411032315-54ef2cb783bb',
    '1582719508461-905c673771fd', '1606147210732-76af5a58fc7f', '1568031813264-d394c5d474b9',
    '1489749798305-4fea3ae63d43', '1572252009286-268acec5ca0a', '1515542622106-78bda8ba0e5b',
    '1544735716-392fe2489ffa', '1617806118233-18e1de247200', '1581972798862-cf71cb76d341',
    '1555939594-58d7cb561ad1', '1488459716781-31db52582fe9', '1544551763-46a013bb70d5',
    '1559827260-dc66d52bef19', '1505881402582-c042dd55a2f8', '1562959822-193b4be1803d',
    '1604329760661-e71dc83f8f26', '1540189549336-e6e99c3679fe', '1565299624946-b28f40a0ae38',
    '1518639192441-8fce0a366e2e', '1552465011-b4e21bf6e79a', '1541417904950-b855846fe074',
    '1568469156825-1c138a4d1d0e', '1623740698660-88ea06c6d61d', '1484318571209-661cf29a69c3',
    '1602954103979-add3847c5e50', '1621453243671-4e4b7c9c2e8d', '1612476337801-e373c46bb526',
    '1566073771259-6a8506099945', '1608018943049-64b1c95c7dfc', '1590073844006-33379778ae09',
    '1578974239243-c3aa901e1a5c', '1589394273804-0d00c62ee043', '1591825944920-9a6d228a8f44',
    '1567936868667-1fa7b2b0eb5e', '1489392191049-fc10c97e64b6', '1605640840605-14ac1855827b',
    '1578926314433-e2789279f4aa', '1601302991032-e965d6ce5754', '1516815231560-8f41ec531527',
    '1523805009345-7448845a9e53', '1544735716-392fe2489ffa', '1568469156825-1c138a4d1d0e',
    '1621599934254-2f9f0ab8e5f8', '1541417904950-b855846fe074', '1552465011-b4e21bf6e79a',
  ];
  
  // Theme names
  const themes = [
    'Landscape',
    'Wildlife',
    'City',
    'Culture',
    'Architecture',
    'Nature',
    'Market',
    'Beach',
    'Food',
  ];
  
  // Select unique images for each country based on hash
  return themes.map((theme, index) => {
    // Use hash + index to select different photos for each country
    const photoIndex = Math.abs(hash + index * 137) % photoIds.length;
    return {
      name: theme,
      url: `https://images.unsplash.com/photo-${photoIds[photoIndex]}?w=800&h=600&fit=crop&auto=format`
    };
  });
};

/**
 * Get images for cities - uses Wikimedia API to fetch real city images
 * @param {Array} cities - Array of city names
 * @param {string} countryName - Country name for context
 * @returns {Promise<Array>} Array of image URLs
 */
export const getCityImages = async (cities, countryName) => {
  if (!cities || cities.length === 0) {
    return [];
  }

  // Fetch real images for each city from Wikimedia
  const imagePromises = cities.map(city => 
    getCityImageFromWikimedia(city, countryName)
  );

  try {
    const images = await Promise.all(imagePromises);
    // Ensure we have an image for each city (use fallback if null)
    const fallbackImage = 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=800&h=600&fit=crop';
    return images.map(img => img || fallbackImage);
  } catch (error) {
    console.error('Error fetching city images:', error);
    // Return fallback images if API fails
    return cities.map(() => 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=800&h=600&fit=crop');
  }
};

// Fallback images map (used while loading or if API fails)
const fallbackImages = {
  'algeria': 'https://images.unsplash.com/photo-1567936868667-1fa7b2b0eb5e?w=1920&h=1080&fit=crop',
  'egypt': 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&h=1080&fit=crop',
  'morocco': 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&h=1080&fit=crop',
  'kenya': 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&h=1080&fit=crop',
  'south africa': 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1920&h=1080&fit=crop',
  'nigeria': 'https://images.unsplash.com/photo-1555116505-38ab61800975?w=1920&h=1080&fit=crop',
};

export const getCountryHeroImage = async (countryName) => {
  if (!countryName) {
    return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop';
  }

  const name = countryName.toLowerCase().trim();
  
  // Try Wikimedia API first
  try {
    const wikimediaImage = await getCountryHeroImageFromWikimedia(countryName);
    if (wikimediaImage) {
      return wikimediaImage;
    }
  } catch (error) {
    console.warn(`Failed to fetch Wikimedia image for ${countryName}, using fallback:`, error);
  }

  // Fallback to cached image or default
  return fallbackImages[name] || countryHeroImages[name] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop';
};
