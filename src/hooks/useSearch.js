import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for search functionality with debouncing
 * @param {Array} items - Array of items to search through
 * @param {Function} searchFunction - Function to perform the search
 * @param {number} delay - Debounce delay in milliseconds
 * @returns {Object} Search state and functions
 */
export const useSearch = (items = [], searchFunction, delay = 300) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(items);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchTerm, delay]);

  // Perform search when debounced term changes
  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setSearchResults(items);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Use provided search function or default search
    const performSearch = async () => {
      try {
        let results;
        
        if (searchFunction && typeof searchFunction === 'function') {
          results = await searchFunction(items, debouncedSearchTerm);
        } else {
          // Default search implementation
          results = items.filter(item => {
            if (typeof item === 'string') {
              return item.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
            }
            
            if (typeof item === 'object' && item !== null) {
              return Object.values(item).some(value => {
                if (typeof value === 'string') {
                  return value.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
                }
                if (Array.isArray(value)) {
                  return value.some(v => 
                    typeof v === 'string' && 
                    v.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
                  );
                }
                return false;
              });
            }
            
            return false;
          });
        }
        
        setSearchResults(results);
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    performSearch();
  }, [debouncedSearchTerm, items, searchFunction]);

  // Update results when items change
  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setSearchResults(items);
    }
  }, [items, debouncedSearchTerm]);

  // Search function
  const search = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setSearchResults(items);
    setIsSearching(false);
  }, [items]);

  // Check if search is active
  const hasSearchTerm = searchTerm.trim().length > 0;
  const hasResults = searchResults.length > 0;

  return {
    // State
    searchTerm,
    debouncedSearchTerm,
    searchResults,
    isSearching,
    
    // Computed
    hasSearchTerm,
    hasResults,
    resultCount: searchResults.length,
    
    // Actions
    search,
    clearSearch,
    setSearchTerm
  };
};

/**
 * Custom hook for country-specific search
 * @param {Array} countries - Array of country objects
 * @param {number} delay - Debounce delay in milliseconds
 * @returns {Object} Country search state and functions
 */
export const useCountrySearch = (countries = [], delay = 300) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(countries);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchTerm, delay]);

  // Perform country search
  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setSearchResults(countries);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    const performSearch = () => {
      const term = debouncedSearchTerm.toLowerCase().trim();
      
      const results = countries.filter(country => {
        // Search in country name
        const name = country.name?.toLowerCase() || '';
        const officialName = country.officialName?.toLowerCase() || '';
        
        // Search in capital cities
        const capitals = Array.isArray(country.capital) 
          ? country.capital.join(' ').toLowerCase()
          : (country.capital || '').toLowerCase();
        
        // Search in region
        const region = country.region?.toLowerCase() || '';
        const subregion = country.subregion?.toLowerCase() || '';
        
        // Search in languages
        const languages = Object.values(country.languages || {})
          .join(' ').toLowerCase();
        
        return name.includes(term) || 
               officialName.includes(term) || 
               capitals.includes(term) ||
               region.includes(term) ||
               subregion.includes(term) ||
               languages.includes(term);
      });
      
      setSearchResults(results);
      setIsSearching(false);
    };

    performSearch();
  }, [debouncedSearchTerm, countries]);

  // Update results when countries change
  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setSearchResults(countries);
    }
  }, [countries, debouncedSearchTerm]);

  // Search function
  const search = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setSearchResults(countries);
    setIsSearching(false);
  }, [countries]);

  // Check if search is active
  const hasSearchTerm = searchTerm.trim().length > 0;
  const hasResults = searchResults.length > 0;

  return {
    // State
    searchTerm,
    debouncedSearchTerm,
    searchResults,
    isSearching,
    
    // Computed
    hasSearchTerm,
    hasResults,
    resultCount: searchResults.length,
    
    // Actions
    search,
    clearSearch,
    setSearchTerm
  };
};

export default useSearch;
