import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ onSearch, placeholder = "Search countries..." }) => {
  const [searchValue, setSearchValue] = useState('');

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, onSearch]);

  const handleClear = () => {
    setSearchValue('');
    onSearch('');
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400 text-lg" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary transition-colors duration-200 bg-white shadow-sm"
        />

        {/* Clear Button */}
        {searchValue && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Clear search"
          >
            <FaTimes className="text-lg" />
          </button>
        )}
      </div>

      {/* Search hint */}
      {searchValue && (
        <div className="absolute top-full mt-2 left-0 right-0 text-center text-sm text-gray-500">
          Searching for "{searchValue}"...
        </div>
      )}
    </div>
  );
};

export default SearchBar;
