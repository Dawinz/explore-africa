import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { createSlug } from '../../services/countryData';

const SearchBar = ({ onSearch, placeholder = "Search countries...", allCountries = [] }) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate();

  // Filter suggestions based on search value
  useEffect(() => {
    if (searchValue.trim() && allCountries.length > 0) {
      const term = searchValue.toLowerCase().trim();
      const filtered = allCountries
        .filter(country => {
          const name = country.name?.toLowerCase() || '';
          const capital = country.capital?.join(' ').toLowerCase() || '';
          return name.includes(term) || capital.includes(term);
        })
        .slice(0, 8); // Limit to 8 suggestions
      
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setSelectedIndex(-1);
  }, [searchValue, allCountries]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, onSearch]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSelectCountry(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
      default:
        break;
    }
  };

  // Handle country selection
  const handleSelectCountry = (country) => {
    setSearchValue(country.name);
    setShowSuggestions(false);
    onSearch(country.name);
    // Navigate to country page
    const slug = createSlug(country.name);
    navigate(`/country/${slug}`);
  };

  const handleClear = () => {
    setSearchValue('');
    onSearch('');
    setShowSuggestions(false);
    searchRef.current?.focus();
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto w-full">
      <div className="relative" ref={searchRef}>
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <FaSearch className="text-gray-400 text-lg" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary transition-colors duration-200 bg-white shadow-lg"
        />

        {/* Clear Button */}
        {searchValue && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10"
            aria-label="Clear search"
          >
            <FaTimes className="text-lg" />
          </button>
        )}

        {/* Autocomplete Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div
            ref={suggestionsRef}
            className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50"
          >
            {suggestions.map((country, index) => {
              const capital = country.capital?.join(', ') || 'N/A';
              const isSelected = index === selectedIndex;
              
              return (
                <button
                  key={country.cca3 || country.name}
                  onClick={() => handleSelectCountry(country)}
                  className={`w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0 ${
                    isSelected ? 'bg-primary/10' : ''
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-center space-x-4">
                    {/* Flag */}
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-10 h-7 object-cover rounded border border-gray-200"
                    />
                    {/* Country Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-800 text-base truncate">
                        {country.name}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <FaMapMarkerAlt className="mr-1 text-xs" />
                        <span className="truncate">{capital}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
