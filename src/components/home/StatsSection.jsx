import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      value: "$3.1 Trillion",
      label: "Combined GDP (2024)",
      description: "Fastest-growing economies globally"
    },
    {
      value: "1.4 Billion",
      label: "Population",
      description: "Youngest demographic worldwide"
    },
    {
      value: "55 Nations",
      label: "African Union Members",
      description: "United in growth and prosperity"
    },
    {
      value: "AfCFTA",
      label: "Continental Free Trade Area",
      description: "World's largest free trade zone"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dive Into
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Africa By The Numbers
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the scale and momentum of Africa's economic transformation through key metrics that tell the story of a continent on the rise.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-2xl font-semibold text-gray-800 mb-2">
              Modern African Business District
            </div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              2.5%
            </div>
            <div className="text-lg text-gray-600">
              Annual GDP growth projected through 2030
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
