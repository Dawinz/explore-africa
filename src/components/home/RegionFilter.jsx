import React from 'react';
import { motion } from 'framer-motion';
import { REGIONS } from '../../utils/constants';

const RegionFilter = ({ selectedRegion, onRegionChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4">
      {REGIONS.map((region, index) => {
        const isActive = selectedRegion === region;

        return (
          <motion.button
            key={region}
            onClick={() => onRegionChange(region)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-200
              ${isActive
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md border border-gray-200'
              }
            `}
          >
            {region}
          </motion.button>
        );
      })}
    </div>
  );
};

export default RegionFilter;
