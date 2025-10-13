import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaBriefcase, FaInfoCircle } from 'react-icons/fa';

const CTACard = ({ icon: Icon, title, description, buttonText, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 text-center"
  >
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="text-3xl text-primary" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
    <button className="btn-primary px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200">
      {buttonText}
    </button>
  </motion.div>
);

const CTASections = ({ country }) => {
  const ctaItems = [
    {
      icon: FaPlane,
      title: 'Visit The Website',
      description: `Discover more about traveling to ${country.name}. Find detailed guides, travel tips, and essential information.`,
      buttonText: 'Visit Website',
    },
    {
      icon: FaBriefcase,
      title: 'Visit Development Page',
      description: `Explore business opportunities, investment prospects, and economic development initiatives in ${country.name}.`,
      buttonText: 'Visit Development',
    },
    {
      icon: FaInfoCircle,
      title: 'Visit The Website',
      description: `Get comprehensive information about living, working, and doing business in ${country.name}.`,
      buttonText: 'Visit Website',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Explore {country.name}?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with your journey to discover opportunities and experiences in {country.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {ctaItems.map((item, index) => (
              <CTACard key={index} {...item} index={index} />
            ))}
          </div>

          {/* Heritage Exchange CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-heritage-orange to-heritage-green rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Your Travel & Investment Resource
            </h3>
            <p className="text-lg mb-2 text-white/95">
              January-March & July-September
            </p>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join business discovery tours and investment missions. Find your next business opportunity in {country.name} today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://theheritageexchange.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Visit The Heritage Exchange
              </a>
              <button className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASections;
