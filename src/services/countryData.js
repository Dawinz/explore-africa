import { REGION_MAPPING } from '../utils/constants';

/**
 * Format population number for display
 * @param {number} population - Population number
 * @returns {string} Formatted population string
 */
export const formatPopulation = (population) => {
  if (!population || population === 0) return 'Unknown';
  
  if (population >= 1000000000) {
    return `${(population / 1000000000).toFixed(1)}B+`;
  } else if (population >= 1000000) {
    return `${(population / 1000000).toFixed(1)}M+`;
  } else if (population >= 1000) {
    return `${(population / 1000).toFixed(1)}K+`;
  }
  
  return population.toLocaleString();
};

/**
 * Format area number for display
 * @param {number} area - Area in square kilometers
 * @returns {string} Formatted area string
 */
export const formatArea = (area) => {
  if (!area || area === 0) return 'Unknown';
  
  if (area >= 1000000) {
    return `${(area / 1000000).toFixed(1)}M km²`;
  } else if (area >= 1000) {
    return `${(area / 1000).toFixed(1)}K km²`;
  }
  
  return `${area.toLocaleString()} km²`;
};

/**
 * Get countries by region
 * @param {Array} countries - Array of all countries
 * @param {string} region - Region name
 * @returns {Array} Filtered countries
 */
export const getRegionCountries = (countries, region) => {
  if (!countries || !Array.isArray(countries)) return [];
  if (region === 'All' || !region) return countries;

  const apiRegion = REGION_MAPPING[region];
  if (!apiRegion) return countries;

  // Filter by subregion (e.g., "Northern Africa", "Western Africa")
  return countries.filter(country => country.subregion === apiRegion);
};

/**
 * Search countries by name
 * @param {Array} countries - Array of all countries
 * @param {string} searchTerm - Search term
 * @returns {Array} Filtered countries
 */
export const searchCountries = (countries, searchTerm) => {
  if (!countries || !Array.isArray(countries)) return [];
  if (!searchTerm || searchTerm.trim() === '') return countries;
  
  const term = searchTerm.toLowerCase().trim();
  
  return countries.filter(country => {
    const name = country.name?.toLowerCase() || '';
    const officialName = country.officialName?.toLowerCase() || '';
    const capital = country.capital?.join(' ').toLowerCase() || '';
    
    return name.includes(term) || 
           officialName.includes(term) || 
           capital.includes(term);
  });
};

/**
 * Sort countries by different criteria
 * @param {Array} countries - Array of countries
 * @param {string} sortBy - Sort criteria ('name', 'population', 'area')
 * @returns {Array} Sorted countries
 */
export const sortCountries = (countries, sortBy = 'name') => {
  if (!countries || !Array.isArray(countries)) return [];
  
  const sorted = [...countries];
  
  switch (sortBy) {
    case 'population':
      return sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
    case 'area':
      return sorted.sort((a, b) => (b.area || 0) - (a.area || 0));
    case 'name':
    default:
      return sorted.sort((a, b) => {
        const nameA = a.name?.toLowerCase() || '';
        const nameB = b.name?.toLowerCase() || '';
        return nameA.localeCompare(nameB);
      });
  }
};

/**
 * Get region color for styling
 * @param {string} region - Region name
 * @returns {string} Color class
 */
export const getRegionColor = (region) => {
  const colors = {
    'Northern Africa': 'bg-blue-100 text-blue-800',
    'Western Africa': 'bg-green-100 text-green-800',
    'Eastern Africa': 'bg-orange-100 text-orange-800',
    'Middle Africa': 'bg-purple-100 text-purple-800',
    'Southern Africa': 'bg-red-100 text-red-800'
  };
  
  return colors[region] || 'bg-gray-100 text-gray-800';
};

/**
 * Format currency information
 * @param {Object} currencyObj - Currency object from API
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (currencyObj) => {
  if (!currencyObj || typeof currencyObj !== 'object') return 'Unknown';
  
  const currencies = Object.values(currencyObj);
  if (currencies.length === 0) return 'Unknown';
  
  const currency = currencies[0];
  const name = currency.name || 'Unknown';
  const symbol = currency.symbol || '';
  
  return symbol ? `${name} (${symbol})` : name;
};

/**
 * Create URL slug from country name
 * @param {string} countryName - Country name
 * @returns {string} URL slug
 */
export const createSlug = (countryName) => {
  if (!countryName) return '';
  
  return countryName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * Extract and format capital cities
 * @param {Object} country - Country object
 * @returns {string} Formatted capital string
 */
export const extractCapitals = (country) => {
  if (!country || !country.capital) return 'No capital';
  
  const capitals = Array.isArray(country.capital) ? country.capital : [country.capital];
  
  if (capitals.length === 1) {
    return capitals[0];
  } else if (capitals.length === 2) {
    return `${capitals[0]} & ${capitals[1]}`;
  } else {
    return `${capitals.slice(0, -1).join(', ')} & ${capitals[capitals.length - 1]}`;
  }
};

/**
 * Get language names from language codes
 * @param {Object} languages - Languages object from API
 * @returns {string} Formatted languages string
 */
export const formatLanguages = (languages) => {
  if (!languages || typeof languages !== 'object') return 'Unknown';
  
  const languageNames = Object.values(languages);
  if (languageNames.length === 0) return 'Unknown';
  
  return languageNames.join(', ');
};

/**
 * Calculate total population for a list of countries
 * @param {Array} countries - Array of countries
 * @returns {number} Total population
 */
export const calculateTotalPopulation = (countries) => {
  if (!countries || !Array.isArray(countries)) return 0;
  
  return countries.reduce((total, country) => {
    return total + (country.population || 0);
  }, 0);
};

/**
 * Calculate total area for a list of countries
 * @param {Array} countries - Array of countries
 * @returns {number} Total area in km²
 */
export const calculateTotalArea = (countries) => {
  if (!countries || !Array.isArray(countries)) return 0;
  
  return countries.reduce((total, country) => {
    return total + (country.area || 0);
  }, 0);
};

/**
 * Get countries count by region
 * @param {Array} countries - Array of all countries
 * @returns {Object} Count by region
 */
export const getCountriesCountByRegion = (countries) => {
  if (!countries || !Array.isArray(countries)) return {};
  
  const counts = {};
  
  countries.forEach(country => {
    const region = country.region;
    if (region) {
      counts[region] = (counts[region] || 0) + 1;
    }
  });
  
  return counts;
};

export default {
  formatPopulation,
  formatArea,
  getRegionCountries,
  searchCountries,
  sortCountries,
  getRegionColor,
  formatCurrency,
  createSlug,
  extractCapitals,
  formatLanguages,
  calculateTotalPopulation,
  calculateTotalArea,
  getCountriesCountByRegion
};
