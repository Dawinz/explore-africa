import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const MainHighlights = ({ country }) => {
  // Generate highlights based on available country data
  const generateHighlights = () => {
    const highlights = [];

    if (country.borders && country.borders.length > 0) {
      highlights.push(`Shares ${country.borders.length} land borders with neighboring countries`);
    }

    if (country.landlocked) {
      highlights.push('Landlocked country - No direct access to ocean');
    } else {
      highlights.push('Has coastline with direct ocean access');
    }

    if (country.independent !== undefined) {
      highlights.push(country.independent ? 'Independent sovereign nation' : 'Territory or dependency');
    }

    if (country.unMember) {
      highlights.push('Member of the United Nations');
    }

    if (country.region) {
      highlights.push(`Located in ${country.region} - ${country.subregion || ''} subregion`);
    }

    if (country.timezones && country.timezones.length > 0) {
      highlights.push(`Operates in ${country.timezones.length} timezone${country.timezones.length > 1 ? 's' : ''}`);
    }

    // Add at least 4 highlights
    if (highlights.length < 4) {
      highlights.push('Rich cultural heritage and diverse population');
      highlights.push('Part of the African continent\'s economic development');
    }

    return highlights.slice(0, 6);
  };

  const highlights = generateHighlights();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Main Highlights
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-100"
              >
                <FaCheckCircle className="text-primary text-xl mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainHighlights;
