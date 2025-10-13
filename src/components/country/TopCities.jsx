import React from 'react';
import { motion } from 'framer-motion';
import { extractCapitals } from '../../services/countryData';
import { FaCity } from 'react-icons/fa';

const CityCard = ({ city, countryName, index }) => {
  // Use gradient backgrounds as placeholders
  const gradients = [
    'from-orange-500 to-red-600',
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-yellow-500 to-orange-600',
    'from-pink-500 to-rose-600',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:scale-110 transition-transform duration-500`} />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <FaCity className="text-white text-8xl" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{city}</h3>
          <p className="text-white/90 text-sm">Major city in {countryName}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TopCities = ({ country }) => {
  // Get capital(s) and create a list of major cities
  const capitals = extractCapitals(country);
  const capitalsList = capitals.split(', ');

  // For demonstration, we'll show capital(s) and add some generic city names
  const getMajorCities = () => {
    const cities = [...capitalsList];

    // Add other major cities (you can enhance this with real data later)
    if (cities.length < 5) {
      // These are placeholders - in a real app, you'd have actual city data
      const additionalCities = [
        'Second largest city',
        'Port city',
        'Industrial hub',
        'Cultural center'
      ];

      while (cities.length < Math.min(5, capitalsList.length + 4)) {
        cities.push(additionalCities[cities.length - capitalsList.length]);
      }
    }

    return cities.slice(0, 5);
  };

  const cities = getMajorCities();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Top Business Cities
            </h2>
            <p className="text-gray-600">
              Major cities and economic centers in {country.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <CityCard
                key={index}
                city={city}
                countryName={country.name}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCities;
