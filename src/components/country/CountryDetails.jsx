import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaUsers, FaChartLine, FaLandmark, FaMapMarkerAlt } from 'react-icons/fa';
import { COUNTRY_DESCRIPTIONS } from '../../utils/constants';

const Tab = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200
      ${isActive
        ? 'bg-primary text-white shadow-lg'
        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
      }
    `}
  >
    <Icon className="mr-2" />
    <span className="hidden sm:inline">{label}</span>
  </button>
);

const CountryDetails = ({ country }) => {
  const [activeTab, setActiveTab] = useState('geography');

  const tabs = [
    { id: 'geography', label: 'Geography', icon: FaGlobe },
    { id: 'culture', label: 'Culture', icon: FaUsers },
    { id: 'economy', label: 'Economy', icon: FaChartLine },
    { id: 'tourism', label: 'Tourism', icon: FaLandmark },
  ];

  const content = {
    geography: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
          <p className="text-gray-600">
            {country.region} - {country.subregion}
          </p>
        </div>
        {country.coordinates && country.coordinates.length === 2 && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Coordinates</h4>
            <p className="text-gray-600">
              <FaMapMarkerAlt className="inline mr-2 text-primary" />
              {country.coordinates[0].toFixed(2)}°, {country.coordinates[1].toFixed(2)}°
            </p>
          </div>
        )}
        {country.borders && country.borders.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Bordering Countries</h4>
            <p className="text-gray-600">{country.borders.join(', ')}</p>
          </div>
        )}
        {country.timezones && country.timezones.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Timezones</h4>
            <p className="text-gray-600">{country.timezones.join(', ')}</p>
          </div>
        )}
        {country.landlocked !== undefined && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Landlocked</h4>
            <p className="text-gray-600">{country.landlocked ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    ),
    culture: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">About {country.name}</h4>
          <p className="text-gray-600 leading-relaxed">
            {COUNTRY_DESCRIPTIONS[country.name] || `${country.name} is a diverse nation with a rich cultural heritage and vibrant traditions.`}
          </p>
        </div>
        {Object.keys(country.languages || {}).length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Languages Spoken</h4>
            <p className="text-gray-600">
              {Object.values(country.languages).join(', ')}
            </p>
          </div>
        )}
        {country.demonyms && country.demonyms.eng && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Demonym</h4>
            <p className="text-gray-600">{country.demonyms.eng.m || country.demonyms.eng.f}</p>
          </div>
        )}
      </div>
    ),
    economy: (
      <div className="space-y-4">
        {Object.keys(country.currencies || {}).length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Currency</h4>
            {Object.entries(country.currencies).map(([code, curr]) => (
              <p key={code} className="text-gray-600">
                {curr.name} ({curr.symbol || code})
              </p>
            ))}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">UN Member</h4>
          <p className="text-gray-600">{country.unMember ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Independent</h4>
          <p className="text-gray-600">{country.independent ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Economic Information</h4>
          <p className="text-gray-600 leading-relaxed">
            {country.name} has a diverse economy with significant contributions from various sectors including agriculture, mining, and services.
          </p>
        </div>
      </div>
    ),
    tourism: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Discover {country.name}</h4>
          <p className="text-gray-600 leading-relaxed">
            {country.name} offers unique experiences for travelers, from stunning landscapes to rich cultural heritage sites. Explore the beauty and diversity of this amazing nation.
          </p>
        </div>
        {country.maps && country.maps.googleMaps && (
          <div>
            <a
              href={country.maps.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              <FaMapMarkerAlt className="mr-2" />
              View on Google Maps
            </a>
          </div>
        )}
      </div>
    ),
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                {...tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              {content[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
