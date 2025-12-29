import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaUsers, FaPalette } from 'react-icons/fa';

const CulturalRichness = () => {
  const features = [
    {
      icon: FaHistory,
      title: "Rich Heritage",
      description: "Thousands of years of history, art, and tradition creating a vibrant cultural tapestry"
    },
    {
      icon: FaUsers,
      title: "Diverse Communities",
      description: "Over 3,000 ethnic groups speaking more than 2,000 languages across the continent"
    },
    {
      icon: FaPalette,
      title: "Creative Excellence",
      description: "Leading global trends in music, fashion, art, and entertainment"
    }
  ];

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
            Cultural Richness
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            A Continent of Stories
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond economics and trade, Africa's greatest asset is its people. A young, dynamic population driving innovation while honoring traditions that have shaped human civilization for millennia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-3xl text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 italic">
              "The future isn't coming to Africa… it's being built here."
            </div>
            <div className="text-lg text-gray-600">
              — The Heritage Exchange
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="relative rounded-2xl h-64 md:h-96 overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
              alt="African Landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CulturalRichness;

