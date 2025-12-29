import React from 'react';
import { motion } from 'framer-motion';
import { getCountryGalleryImages } from '../../services/countryImages';

const PhotoGallery = ({ country }) => {
  const galleryThemes = getCountryGalleryImages(country.name);

  const images = galleryThemes.map((theme, index) => ({
    url: theme.url,
    alt: `${country.name} - ${theme.name}`,
    theme: theme.name,
    index: index
  }));

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Photo Gallery
            </h2>
            <p className="text-gray-600">
              Visual tour showcasing the beauty and diversity of {country.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <motion.div
                key={image.index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: image.index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{image.theme}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500">
              Images powered by Unsplash - showcasing the beauty of {country.name}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
