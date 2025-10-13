import { useState, useEffect, useMemo, useCallback } from 'react';
import { getAllCountries, formatCountryData } from '../services/api';
import { 
  getRegionCountries, 
  searchCountries, 
  sortCountries,
  calculateTotalPopulation,
  calculateTotalArea 
} from '../services/countryData';
import { CACHE_DURATION, COUNTRIES_STORAGE_KEY } from '../utils/constants';

/**
 * Custom hook for managing countries data
 * @returns {Object} Countries data and utility functions
 */
export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  // Load data from cache or fetch from API
  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        const cachedData = getCachedCountries();
        if (cachedData) {
          console.log('Loading countries from cache');
          setCountries(cachedData);
          setLoading(false);
          return;
        }

        // Fetch from API (already filtered to Africa region)
        console.log('Fetching countries from API');
        const rawCountries = await getAllCountries();

        // Format the country data
        const africanCountries = rawCountries
          .map(formatCountryData)
          .filter(Boolean);

        // Cache the data
        cacheCountries(africanCountries);
        
        setCountries(africanCountries);
      } catch (err) {
        console.error('Error loading countries:', err);
        setError(err.message || 'Failed to load countries data');
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  // Get cached countries data
  const getCachedCountries = () => {
    try {
      const cached = localStorage.getItem(COUNTRIES_STORAGE_KEY);
      if (!cached) return null;

      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();

      // Check if cache is still valid
      if (now - timestamp > CACHE_DURATION) {
        localStorage.removeItem(COUNTRIES_STORAGE_KEY);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error reading cache:', error);
      return null;
    }
  };

  // Cache countries data
  const cacheCountries = (data) => {
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      };
      localStorage.setItem(COUNTRIES_STORAGE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error caching data:', error);
    }
  };

  // Filter countries based on search and region
  const filteredCountries = useMemo(() => {
    let filtered = countries;

    // Apply region filter
    if (selectedRegion !== 'All') {
      filtered = getRegionCountries(filtered, selectedRegion);
    }

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = searchCountries(filtered, searchTerm);
    }

    // Apply sorting
    filtered = sortCountries(filtered, sortBy);

    return filtered;
  }, [countries, selectedRegion, searchTerm, sortBy]);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalCountries = countries.length;
    const totalPopulation = calculateTotalPopulation(countries);
    const totalArea = calculateTotalArea(countries);
    const regions = [...new Set(countries.map(c => c.region))].length;

    return {
      totalCountries,
      totalPopulation,
      totalArea,
      regions
    };
  }, [countries]);

  // Search countries function
  const searchCountriesByName = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  // Filter by region function
  const filterByRegion = useCallback((region) => {
    setSelectedRegion(region);
  }, []);

  // Sort countries function
  const sortCountriesBy = useCallback((criteria) => {
    setSortBy(criteria);
  }, []);

  // Clear filters
  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedRegion('All');
    setSortBy('name');
  }, []);

  // Refresh data
  const refreshData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Clear cache
      localStorage.removeItem(COUNTRIES_STORAGE_KEY);
      
      // Fetch fresh data
      const rawCountries = await getAllCountries();
      const africanCountries = rawCountries
        .map(formatCountryData)
        .filter(Boolean);

      cacheCountries(africanCountries);
      setCountries(africanCountries);
    } catch (err) {
      console.error('Error refreshing data:', err);
      setError(err.message || 'Failed to refresh countries data');
    } finally {
      setLoading(false);
    }
  };

  return {
    // Data
    countries: filteredCountries,
    allCountries: countries,
    loading,
    error,
    
    // Filters and search
    searchTerm,
    selectedRegion,
    sortBy,
    
    // Statistics
    stats,
    
    // Actions
    searchCountriesByName,
    filterByRegion,
    sortCountriesBy,
    clearFilters,
    refreshData
  };
};

export default useCountries;
