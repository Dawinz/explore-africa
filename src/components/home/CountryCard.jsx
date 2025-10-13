import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { formatPopulation, getRegionColor, extractCapitals, createSlug } from '../../services/countryData';

const CountryCard = React.memo(({ country, index = 0 }) => {
  const capital = extractCapitals(country);
  const population = formatPopulation(country.population);
  const regionColor = getRegionColor(country.subregion || country.region);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link
        to={`/country/${createSlug(country.name)}`}
        className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
      >
        {/* Flag Image */}
        <div className="relative overflow-hidden bg-gray-100 aspect-[3/2]">
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />

          {/* Region Badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${regionColor} shadow-sm`}>
              {country.subregion || country.region}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Country Name */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-200">
            {country.name}
          </h3>

          {/* Capital */}
          <div className="flex items-center text-gray-600 mb-3">
            <FaMapMarkerAlt className="mr-2 text-sm text-primary" />
            <span className="text-sm">{capital}</span>
          </div>

          {/* Population */}
          <div className="flex items-center text-gray-600">
            <FaUsers className="mr-2 text-sm text-secondary" />
            <span className="text-sm font-medium">{population}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

CountryCard.displayName = 'CountryCard';

export default CountryCard;
