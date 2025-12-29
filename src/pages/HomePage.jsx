import React from 'react';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import InvestmentOpportunities from '../components/home/InvestmentOpportunities';
import InteractiveMap from '../components/home/InteractiveMap';
import TradeRevolution from '../components/home/TradeRevolution';
import CulturalRichness from '../components/home/CulturalRichness';
import SearchBar from '../components/common/SearchBar';
import RegionFilter from '../components/home/RegionFilter';
import CountryGrid from '../components/home/CountryGrid';
import { useCountries } from '../hooks/useCountries';

const HomePage = () => {
  const {
    countries,
    allCountries,
    loading,
    searchCountriesByName,
    filterByRegion,
    selectedRegion,
    searchTerm,
  } = useCountries();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Explore All Countries Section */}
      <section id="countries-section" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore All Countries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the rich diversity, culture, and beauty of every African nation. Search and filter to find the countries that interest you most.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <SearchBar 
              onSearch={searchCountriesByName} 
              placeholder="Search countries by name, capital..." 
              allCountries={allCountries}
            />
          </div>

          {/* Region Filter */}
          <div className="mb-12">
            <RegionFilter
              selectedRegion={selectedRegion}
              onRegionChange={filterByRegion}
            />
          </div>

          {/* Results Count */}
          {!loading && countries.length > 0 && (
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg">
                {searchTerm || selectedRegion !== 'All' ? (
                  <>
                    Found <span className="font-bold text-primary text-xl">{countries.length}</span> {countries.length === 1 ? 'country' : 'countries'}
                    {searchTerm && (
                      <span className="text-gray-500"> matching "{searchTerm}"</span>
                    )}
                    {selectedRegion !== 'All' && (
                      <span className="text-gray-500"> in {selectedRegion}</span>
                    )}
                  </>
                ) : (
                  <>
                    Showing <span className="font-bold text-primary text-xl">{countries.length}</span> of{' '}
                    <span className="font-bold text-gray-800 text-xl">{allCountries.length}</span> countries
                  </>
                )}
              </p>
            </div>
          )}

          {/* Country Grid */}
          <CountryGrid countries={countries} loading={loading} />
        </div>
      </section>

      {/* Africa By The Numbers */}
      <StatsSection />

      {/* Invest in Africa's Future */}
      <InvestmentOpportunities />

      {/* Interactive Map */}
      <InteractiveMap />

      {/* Africa's Trade Revolution */}
      <TradeRevolution />

      {/* A Continent of Stories */}
      <CulturalRichness />
    </div>
  );
};

export default HomePage;
