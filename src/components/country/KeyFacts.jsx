import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaMapMarked, FaLanguage, FaMoneyBillWave, FaPhone } from 'react-icons/fa';
import { formatPopulation, formatArea, formatLanguages, formatCurrency } from '../../services/countryData';

const FactCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-100">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <Icon className="text-xl text-primary" />
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm text-gray-500 font-medium">
        {label}
      </p>
      <p className="text-base font-semibold text-gray-800 truncate">
        {value}
      </p>
    </div>
  </div>
);

const KeyFacts = ({ country }) => {
  const population = formatPopulation(country.population);
  const area = formatArea(country.area);
  const languages = formatLanguages(country.languages);
  const currency = formatCurrency(country.currencies);

  // Get calling code
  const callingCode = country.callingCodes?.[0]
    ? `+${country.callingCodes[0]}`
    : country.idd?.root && country.idd?.suffixes?.[0]
    ? `${country.idd.root}${country.idd.suffixes[0]}`
    : 'N/A';

  const facts = [
    { icon: FaUsers, label: 'Population', value: population },
    { icon: FaMapMarked, label: 'Area (Land)', value: area },
    { icon: FaLanguage, label: 'Languages', value: languages },
    { icon: FaMoneyBillWave, label: 'Currency', value: currency },
    { icon: FaPhone, label: 'Calling Code', value: callingCode },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Key Facts
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {facts.map((fact) => (
              <FactCard key={fact.label} {...fact} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyFacts;
