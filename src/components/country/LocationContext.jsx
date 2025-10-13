import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGlobe, FaCompass } from 'react-icons/fa';

const LocationContext = ({ country }) => {
  const getLocationInfo = () => {
    const info = [];

    if (country.region && country.subregion) {
      info.push({
        icon: FaGlobe,
        label: 'Regional Location',
        value: `${country.subregion}, ${country.region}`,
      });
    }

    if (country.latlng && country.latlng.length === 2) {
      info.push({
        icon: FaMapMarkerAlt,
        label: 'Coordinates',
        value: `${country.latlng[0].toFixed(2)}°N, ${country.latlng[1].toFixed(2)}°E`,
      });
    }

    if (country.borders && country.borders.length > 0) {
      info.push({
        icon: FaCompass,
        label: 'Bordering Countries',
        value: `${country.borders.length} neighbors`,
      });
    }

    return info;
  };

  const locationInfo = getLocationInfo();

  // Strategic position description
  const getStrategicPosition = () => {
    if (country.landlocked) {
      return `${country.name} is a landlocked nation in ${country.subregion || country.region}, bordered by ${country.borders?.length || 0} countries. Its strategic inland position offers unique opportunities for regional trade and commerce.`;
    }
    return `${country.name} is strategically located in ${country.subregion || country.region} with access to maritime trade routes. This coastal position provides significant advantages for international trade and economic development.`;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Location & Regional Context
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {locationInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="text-xl text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">{info.label}</p>
                    <p className="text-base font-semibold text-gray-800">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Position</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{getStrategicPosition()}</p>

            {/* Map placeholder */}
            <div className="relative h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg overflow-hidden border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-6xl text-primary/30 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">
                    {country.name} - {country.subregion || country.region}
                  </p>
                  {country.latlng && country.latlng.length === 2 && (
                    <p className="text-sm text-gray-400 mt-2">
                      {country.latlng[0].toFixed(4)}°, {country.latlng[1].toFixed(4)}°
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationContext;
