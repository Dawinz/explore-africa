import React from 'react';
import { motion } from 'framer-motion';
import CountryCard from './CountryCard';

const CountryGrid = ({ countries, loading }) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3 || country.name}
          country={country}
          index={0}
        />
      ))}
    </div>
  );
};

export default CountryGrid;
