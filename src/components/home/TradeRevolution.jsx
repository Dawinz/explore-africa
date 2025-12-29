import React from 'react';
import { motion } from 'framer-motion';

const TradeRevolution = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Continental Integration
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Africa's Trade Revolution
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The African Continental Free Trade Area (AfCFTA) is reshaping commerce across the continent, creating unprecedented opportunities for businesses and investors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl h-64 md:h-80 overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
              alt="African Trade Port"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="text-2xl font-bold mb-1">African Trade Port</div>
                <div className="text-sm opacity-90">World's Largest Free Trade Area</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-6">
              World's Largest Free Trade Area
            </h4>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Connecting 1.3 billion people across 55 countries, the AfCFTA creates a single market for goods and services, facilitating the free movement of business travelers and investments.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$3.4T</div>
                <div className="text-sm text-gray-600">Continental Trade Network</div>
                <div className="text-xs text-gray-500 mt-1">Projected AfCFTA market value by 2025</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-gray-600">Reduced Trade Barriers</div>
                <div className="text-xs text-gray-500 mt-1">Tariff elimination on intra-African trade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">52%</div>
                <div className="text-sm text-gray-600">Economic Integration</div>
                <div className="text-xs text-gray-500 mt-1">Increase in intra-African trade potential</div>
              </div>
            </div>

            <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradeRevolution;

