import React from 'react';
import { motion } from 'framer-motion';
import { extractCapitals } from '../../services/countryData';

const CountryHero = ({ country }) => {
  const capitals = extractCapitals(country);

  // Use a generic Africa landscape as background
  const defaultHeroImage = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&h=900&fit=crop';

  return (
    <section className="relative h-[450px] md:h-[550px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${defaultHeroImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          {/* Flag */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-2xl mx-auto border-4 border-white"
              />
            </div>
          </motion.div>

          {/* Country Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-shadow-lg"
          >
            {country.name}
          </motion.h1>

          {/* Official Name */}
          {country.officialName && country.officialName !== country.name && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-3 text-shadow"
            >
              {country.officialName}
            </motion.p>
          )}

          {/* Capital */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base md:text-lg text-white/90 text-shadow"
          >
            Capital: <span className="font-semibold">{capitals}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountryHero;
