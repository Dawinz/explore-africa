import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import CountryCard from './CountryCard';

const ITEMS_PER_PAGE = 12;

const CountryGrid = ({ countries, loading }) => {
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const displayedCountries = countries?.slice(0, displayedCount) || [];
  const hasMore = countries && countries.length > displayedCount;

  // Reset displayed count when countries change (search/filter)
  useEffect(() => {
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [countries?.length]);

  const handleLoadMore = () => {
    setDisplayedCount(prev => Math.min(prev + ITEMS_PER_PAGE, countries.length));
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-20">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-primary mb-4"></div>
        <span className="text-xl text-gray-600">Loading countries...</span>
      </div>
    );
  }

  if (!countries || countries.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="text-6xl mb-6">🔍</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">No countries found</h3>
        <p className="text-gray-600 mb-6">Try adjusting your search or filter</p>
      </motion.div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {displayedCountries.map((country, index) => (
          <CountryCard
            key={country.cca3 || country.name || index}
            country={country}
            index={index}
          />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={handleLoadMore}
            className="group flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Load More Countries</span>
            <FaChevronDown className="text-sm group-hover:translate-y-1 transition-transform duration-300" />
            <span className="text-sm opacity-75">
              ({countries.length - displayedCount} remaining)
            </span>
          </button>
        </motion.div>
      )}

      {/* Show All Loaded Message */}
      {!hasMore && countries.length > ITEMS_PER_PAGE && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8 text-gray-500"
        >
          <p>All {countries.length} countries displayed</p>
        </motion.div>
      )}
    </>
  );
};

export default CountryGrid;
