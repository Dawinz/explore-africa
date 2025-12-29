import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCitiesForCountry } from '../../services/cityData';
import { getCityImages } from '../../services/countryImages';

const CityCard = ({ city, countryName, imageUrl, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const defaultImage = 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=800&h=600&fit=crop';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}
        <img
          src={imageUrl || defaultImage}
          alt={`${city}, ${countryName}`}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
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
  const [cities, setCities] = useState([]);
  const [cityImages, setCityImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCitiesAndImages = async () => {
      if (!country) return;

      // Get real cities for the country
      const realCities = getCitiesForCountry(country);
      setCities(realCities);

      // Fetch real images for each city
      try {
        const images = await getCityImages(realCities, country.name);
        setCityImages(images);
      } catch (error) {
        console.error('Error loading city images:', error);
        // Set default images as fallback
        setCityImages(realCities.map(() => 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=800&h=600&fit=crop'));
      } finally {
        setLoading(false);
      }
    };

    loadCitiesAndImages();
  }, [country]);

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

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <CityCard
                  key={`${city}-${index}`}
                  city={city}
                  countryName={country.name}
                  imageUrl={cityImages[index]}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopCities;
