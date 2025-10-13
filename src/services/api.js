import axios from 'axios';
import { API_BASE_URL, API_FIELDS } from '../utils/constants';

// Create axios instance for REST Countries API
const countriesAPI = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Request interceptor for logging
countriesAPI.interceptors.request.use(
  (config) => {
    console.log(`Making API request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
countriesAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

/**
 * Fetch all countries from REST Countries API
 * @returns {Promise<Array>} Array of country objects
 */
export const getAllCountries = async () => {
  try {
    // Use region endpoint to get all African countries
    const response = await axios.get(`${API_BASE_URL}/region/africa`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all countries:', error);
    throw new Error('Failed to fetch countries data');
  }
};

/**
 * Fetch a single country by name
 * @param {string} name - Country name
 * @returns {Promise<Object>} Country object
 */
export const getCountryByName = async (name) => {
  try {
    const response = await countriesAPI.get(`/name/${encodeURIComponent(name)}`);
    return response.data[0]; // API returns array, we want first result
  } catch (error) {
    console.error(`Error fetching country ${name}:`, error);
    throw new Error(`Failed to fetch data for ${name}`);
  }
};

/**
 * Fetch countries by region
 * @param {string} region - Region name
 * @returns {Promise<Array>} Array of country objects
 */
export const getCountriesByRegion = async (region) => {
  try {
    const response = await countriesAPI.get(`/region/${encodeURIComponent(region)}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching countries for region ${region}:`, error);
    throw new Error(`Failed to fetch countries for ${region}`);
  }
};

/**
 * Format country data for our application
 * @param {Object} country - Raw country data from API
 * @returns {Object} Formatted country object
 */
export const formatCountryData = (country) => {
  if (!country) return null;

  return {
    // Basic info
    name: country.name?.common || 'Unknown',
    officialName: country.name?.official || 'Unknown',
    commonName: country.name?.common || 'Unknown',
    
    // Location
    capital: country.capital || [],
    region: country.region || 'Unknown',
    subregion: country.subregion || 'Unknown',
    
    // Demographics
    population: country.population || 0,
    area: country.area || 0,
    
    // Languages and currency
    languages: country.languages || {},
    currencies: country.currencies || {},
    
    // Visual elements
    flag: country.flags?.png || country.flags?.svg || '',
    flagSvg: country.flags?.svg || '',
    coatOfArms: country.coatOfArms?.png || '',
    
    // Geography
    borders: country.borders || [],
    timezones: country.timezones || [],
    coordinates: country.latlng || [],
    
    // Additional info
    cca2: country.cca2 || '',
    cca3: country.cca3 || '',
    ccn3: country.ccn3 || '',
    independent: country.independent || false,
    unMember: country.unMember || false,
    landlocked: country.landlocked || false,
    
    // Demonyms
    demonyms: country.demonyms || {},
    
    // Maps
    maps: country.maps || {},
    
    // Car info
    car: country.car || {},
    
    // Postal code
    postalCode: country.postalCode || {},
    
    // Start of week
    startOfWeek: country.startOfWeek || 'monday',
    
    // Status
    status: country.status || 'officially-assigned'
  };
};

/**
 * Get hero image URL from Unsplash (optional)
 * @param {string} countryName - Country name
 * @param {string} accessKey - Unsplash access key
 * @returns {string} Image URL
 */
export const getHeroImageUrl = (countryName, accessKey = null) => {
  if (!accessKey) {
    // Return a placeholder or default image
    return `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&crop=center`;
  }
  
  const query = encodeURIComponent(`${countryName} landscape`);
  return `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&client_id=${accessKey}`;
};

/**
 * Get flag image URL
 * @param {string} countryCode - Country code (cca2)
 * @param {string} size - Flag size (w20, w40, w80, w160, w320, w640, w1280, w2560)
 * @returns {string} Flag image URL
 */
export const getFlagUrl = (countryCode, size = 'w320') => {
  if (!countryCode) return '';
  return `https://flagcdn.com/${size}/${countryCode.toLowerCase()}.png`;
};

/**
 * Get SVG flag URL
 * @param {string} countryCode - Country code (cca2)
 * @returns {string} SVG flag URL
 */
export const getSvgFlagUrl = (countryCode) => {
  if (!countryCode) return '';
  return `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
};

export default {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion,
  formatCountryData,
  getHeroImageUrl,
  getFlagUrl,
  getSvgFlagUrl
};
