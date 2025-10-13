import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaIndustry, FaChartLine, FaHandshake } from 'react-icons/fa';

const OpportunityCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="flex flex-col h-full">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-2xl text-primary" />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const BusinessOpportunities = ({ country }) => {
  const opportunities = [
    {
      icon: FaBriefcase,
      title: 'Trade & Commerce',
      description: `Explore trade opportunities and commercial partnerships in ${country.name}. Strong potential in import/export sectors and regional trade agreements.`,
    },
    {
      icon: FaIndustry,
      title: 'Manufacturing',
      description: `Growing manufacturing sector with investment incentives. Infrastructure development and industrial zones offer expansion opportunities.`,
    },
    {
      icon: FaChartLine,
      title: 'Agriculture',
      description: `Rich agricultural resources and favorable climate. Investment potential in agribusiness, food processing, and agricultural technology.`,
    },
    {
      icon: FaHandshake,
      title: 'Services & Innovation',
      description: `Emerging tech sector and digital economy. Opportunities in telecommunications, fintech, tourism, and business services.`,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Business & Investment Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover potential business sectors and investment opportunities in {country.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => (
              <OpportunityCard key={opportunity.title} {...opportunity} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunities;
