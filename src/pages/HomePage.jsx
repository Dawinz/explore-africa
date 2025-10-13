import React from 'react';
import Hero from '../components/home/Hero';
import AboutAfrica from '../components/home/AboutAfrica';
import StatsSection from '../components/home/StatsSection';
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

      {/* About Africa Section */}
      <AboutAfrica />

      {/* Stats Section */}
      <StatsSection countries={allCountries} />

      {/* Countries Section */}
      <section id="countries-section" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
            Explore All 54 Countries
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover the rich diversity, culture, and beauty of every African nation
          </p>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={searchCountriesByName} />
          </div>

          {/* Region Filter */}
          <div className="mb-12">
            <RegionFilter
              selectedRegion={selectedRegion}
              onRegionChange={filterByRegion}
            />
          </div>

          {/* Results Count */}
          {!loading && (
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing <span className="font-bold text-primary">{countries.length}</span> of{' '}
                <span className="font-bold">{allCountries.length}</span> countries
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
          )}

          {/* Country Grid */}
          <CountryGrid countries={countries} loading={loading} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
