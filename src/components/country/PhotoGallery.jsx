import React from 'react';
import { motion } from 'framer-motion';
import { FaMountain, FaPaw, FaCity, FaUsers, FaLandmark, FaTree, FaStore, FaUmbrellaBeach, FaDrum } from 'react-icons/fa';

const PhotoGallery = ({ country }) => {
  // Generate diverse gallery themes with icons and gradients
  const galleryThemes = [
    { theme: 'Landscape', icon: FaMountain, gradient: 'from-green-600 to-teal-700' },
    { theme: 'Wildlife', icon: FaPaw, gradient: 'from-amber-600 to-orange-700' },
    { theme: 'City Skyline', icon: FaCity, gradient: 'from-blue-600 to-indigo-700' },
    { theme: 'Culture & People', icon: FaUsers, gradient: 'from-purple-600 to-pink-700' },
    { theme: 'Architecture', icon: FaLandmark, gradient: 'from-red-600 to-rose-700' },
    { theme: 'Nature', icon: FaTree, gradient: 'from-emerald-600 to-green-700' },
    { theme: 'Markets', icon: FaStore, gradient: 'from-yellow-600 to-amber-700' },
    { theme: 'Beaches', icon: FaUmbrellaBeach, gradient: 'from-cyan-600 to-blue-700' },
    { theme: 'Traditional', icon: FaDrum, gradient: 'from-orange-600 to-red-700' }
  ];

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
            {galleryThemes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <item.icon className="text-white text-7xl" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{item.theme}</p>
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
              Gallery showcasing the beauty and diversity of {country.name}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
