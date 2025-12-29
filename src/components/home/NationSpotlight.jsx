import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createSlug } from '../../services/countryData';

const NationSpotlight = ({ countries = [] }) => {
  // Organize countries by region
  const regions = {
    'North Africa': ['Egypt', 'Morocco', 'Algeria'],
    'West Africa': ['Nigeria', 'Ghana', 'Senegal', 'Côte d\'Ivoire'],
    'East Africa': ['Kenya', 'Ethiopia', 'Tanzania', 'Rwanda'],
    'Central Africa': ['DR Congo', 'Angola'],
    'Southern Africa': ['South Africa', 'Namibia', 'Botswana']
  };

  // Helper function to find country by name
  const findCountry = (name) => {
    // Handle special cases
    const nameMapping = {
      'DR Congo': 'Democratic Republic of the Congo',
      'Côte d\'Ivoire': 'Ivory Coast'
    };
    
    const searchName = nameMapping[name] || name;
    
    return countries.find(c => {
      const countryName = c.name || '';
      const lowerCountryName = countryName.toLowerCase();
      const lowerSearchName = searchName.toLowerCase();
      
      return countryName === searchName ||
             countryName === name ||
             lowerCountryName.includes(lowerSearchName) ||
             lowerSearchName.includes(lowerCountryName);
    });
  };

  // Country data from reference site
  const countryData = {
    'Egypt': { flag: '🇪🇬', population: '104M', gdp: '$476B', growth: '6.3%' },
    'Morocco': { flag: '🇲🇦', population: '37M', gdp: '$134B', growth: '3.4%' },
    'Algeria': { flag: '🇩🇿', population: '45M', gdp: '$191B', growth: '2.9%' },
    'Nigeria': { flag: '🇳🇬', population: '223M', gdp: '$574B', growth: '3.3%' },
    'Ghana': { flag: '🇬🇭', population: '33M', gdp: '$77B', growth: '4.7%' },
    'Senegal': { flag: '🇸🇳', population: '17M', gdp: '$28B', growth: '5.3%' },
    'Côte d\'Ivoire': { flag: '🇨🇮', population: '28M', gdp: '$70B', growth: '6.8%' },
    'Kenya': { flag: '🇰🇪', population: '55M', gdp: '$113B', growth: '5.4%' },
    'Ethiopia': { flag: '🇪🇹', population: '123M', gdp: '$126B', growth: '6.1%' },
    'Tanzania': { flag: '🇹🇿', population: '65M', gdp: '$75B', growth: '5.1%' },
    'Rwanda': { flag: '🇷🇼', population: '13M', gdp: '$13B', growth: '8.2%' },
    'DR Congo': { flag: '🇨🇩', population: '99M', gdp: '$58B', growth: '4.9%' },
    'Angola': { flag: '🇦🇴', population: '35M', gdp: '$94B', growth: '2.7%' },
    'South Africa': { flag: '🇿🇦', population: '60M', gdp: '$405B', growth: '2.1%' },
    'Namibia': { flag: '🇳🇦', population: '2.6M', gdp: '$12B', growth: '3.8%' },
    'Botswana': { flag: '🇧🇼', population: '2.6M', gdp: '$18B', growth: '4.2%' }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nation Spotlight
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Discover African Nations
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the diverse nations driving Africa's growth story, organized by region from North to South, East to West.
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(regions).map(([regionName, countryNames], regionIndex) => (
            <motion.div
              key={regionName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: regionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                {regionName}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {countryNames.map((countryName, countryIndex) => {
                  const data = countryData[countryName];
                  const country = findCountry(countryName);
                  const countryNameForSlug = country ? (country.name || countryName) : countryName;
                  const slug = createSlug(countryNameForSlug);
                  
                  return (
                    <motion.div
                      key={countryName}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: countryIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <Link
                        to={`/country/${slug}`}
                        className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        {/* Flag Image */}
                        <div className="relative h-32 bg-gray-100 overflow-hidden">
                          {country?.flag ? (
                            <img
                              src={country.flag}
                              alt={`${countryName} flag`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-4xl">
                              {data?.flag || '🏳️'}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h5 className="text-xl font-bold text-gray-800 mb-4">
                            {countryName}
                          </h5>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-semibold text-gray-700">Population</span>
                            <div className="text-gray-600">{data?.population || 'N/A'}</div>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700">GDP</span>
                            <div className="text-gray-600">{data?.gdp || 'N/A'}</div>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700">Growth Rate</span>
                            <div className="text-primary font-semibold">{data?.growth || 'N/A'}</div>
                          </div>
                        </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationSpotlight;

