import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { createSlug, extractCapitals } from '../../services/countryData';

const RelatedCountries = ({ countries, currentCountry }) => {
  // Filter countries from same subregion and exclude current country
  const relatedCountries = countries
    .filter(c =>
      c.subregion === currentCountry.subregion &&
      c.name !== currentCountry.name
    )
    .slice(0, 4);

  if (relatedCountries.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Explore More in {currentCountry.subregion}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {relatedCountries.map((country, index) => (
            <motion.div
              key={country.cca3}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <Link
                to={`/country/${createSlug(country.name)}`}
                className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-200">
                    {country.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {extractCapitals(country)}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>View Details</span>
                    <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All Countries
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedCountries;
