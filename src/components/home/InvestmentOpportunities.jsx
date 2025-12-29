import React from 'react';
import { motion } from 'framer-motion';
import { FaCity, FaLaptopCode, FaLeaf } from 'react-icons/fa';

const InvestmentOpportunities = () => {
  const opportunities = [
    {
      icon: FaCity,
      title: "Urban Development",
      description: "Modern infrastructure projects transforming cityscapes across the continent, creating hubs of commerce and innovation."
    },
    {
      icon: FaLaptopCode,
      title: "Tech Innovation",
      description: "Leading the global digital revolution with fintech, agritech, and mobile solutions reaching millions."
    },
    {
      icon: FaLeaf,
      title: "Sustainable Growth",
      description: "Green energy initiatives and sustainable practices positioning Africa as a leader in climate solutions."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Economic Opportunities
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Invest in Africa's Future
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From infrastructure to technology, Africa offers unparalleled investment opportunities in the world's fastest-growing markets. Join the transformation of a continent poised for exponential growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            const images = [
              'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop', // Urban
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop', // Tech
              'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop' // Sustainable
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={images[index]}
                    alt={opportunity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="text-2xl text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    {opportunity.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;

