import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPassport, FaBriefcase, FaFileAlt } from 'react-icons/fa';

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 font-semibold text-sm md:text-base rounded-lg transition-all duration-200 ${
      active
        ? 'bg-primary text-white shadow-md'
        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
    }`}
  >
    {children}
  </button>
);

const InfoCard = ({ icon: Icon, title, items }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
        <Icon className="text-primary text-lg" />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600 leading-relaxed flex items-start">
          <span className="text-primary mr-2">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const VisaBusinessInfo = ({ country }) => {
  const [activeTab, setActiveTab] = useState('visa');

  const visaInfo = [
    {
      icon: FaPassport,
      title: 'Visa Entry',
      items: [
        'Valid passport required (minimum 6 months validity)',
        'Visa requirements vary by nationality',
        'Check with embassy for specific requirements',
        'Tourist and business visa options available',
      ],
    },
    {
      icon: FaBriefcase,
      title: 'Business Visa',
      items: [
        'Letter of invitation from local company',
        'Proof of business registration',
        'Return flight ticket and accommodation proof',
        'Processing time: 5-15 business days',
      ],
    },
  ];

  const businessInfo = [
    {
      icon: FaFileAlt,
      title: 'Safety & Health',
      items: [
        'Travel insurance recommended',
        'Check required vaccinations',
        'Emergency services: Contact local authorities',
        'Register with your embassy upon arrival',
      ],
    },
    {
      icon: FaBriefcase,
      title: 'Visa on Arrival',
      items: [
        country.visaOnArrival ? 'Visa on arrival available for eligible countries' : 'Visa on arrival not available',
        'Fees vary by visa type and duration',
        'Cash payment may be required',
        'Keep all documentation ready',
      ],
    },
  ];

  const currentInfo = activeTab === 'visa' ? visaInfo : businessInfo;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Visa & Business Info Requirements
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              <TabButton active={activeTab === 'visa'} onClick={() => setActiveTab('visa')}>
                Visa Entry
              </TabButton>
              <TabButton active={activeTab === 'business'} onClick={() => setActiveTab('business')}>
                Business Info
              </TabButton>
              <TabButton active={activeTab === 'safety'} onClick={() => setActiveTab('safety')}>
                Safety & Health
              </TabButton>
            </div>
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentInfo.map((info, index) => (
              <InfoCard key={index} {...info} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg"
          >
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This information is general guidance. Always verify current requirements
              with the {country.name} embassy or consulate in your country before traveling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisaBusinessInfo;
