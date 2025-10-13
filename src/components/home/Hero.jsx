import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAfrica, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToCountries = () => {
    const countriesSection = document.getElementById('countries-section');
    if (countriesSection) {
      countriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay - Heritage Exchange colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-heritage-orange/20 via-heritage-green/20 to-heritage-orange/15">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <FaGlobeAfrica className="text-6xl md:text-8xl text-primary mx-auto" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 text-shadow"
          >
            Discover
            <span className="block bg-gradient-to-r from-heritage-orange to-heritage-green bg-clip-text text-transparent">
              Africa
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Explore 54 nations, diverse cultures, and breathtaking landscapes
            <br />
            <span className="text-lg md:text-xl text-gray-500 mt-2 block">
              Powered by <a 
                href="https://theheritageexchange.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors duration-200 font-semibold"
              >
                The Heritage Exchange
              </a>
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCountries}
            className="btn-primary text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Explore Countries
            <FaArrowDown className="ml-2 inline-block group-hover:translate-y-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-500 cursor-pointer"
            onClick={scrollToCountries}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <FaArrowDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
