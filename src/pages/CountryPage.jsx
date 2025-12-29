import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
import CountryHero from '../components/country/CountryHero';
import KeyFacts from '../components/country/KeyFacts';
import MainHighlights from '../components/country/MainHighlights';
import BusinessOpportunities from '../components/country/BusinessOpportunities';
import TopCities from '../components/country/TopCities';
import VisaBusinessInfo from '../components/country/VisaBusinessInfo';
import LocationContext from '../components/country/LocationContext';
import CTASections from '../components/country/CTASections';
import CountryDetails from '../components/country/CountryDetails';
import RelatedCountries from '../components/country/RelatedCountries';
import { useCountries } from '../hooks/useCountries';
import { createSlug } from '../services/countryData';

const CountryPage = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const { allCountries, loading } = useCountries();
  const [country, setCountry] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    if (!loading && allCountries.length > 0) {
      // Normalize the URL parameter (remove any leading/trailing slashes, decode)
      const normalizedParam = decodeURIComponent(countryName || '').toLowerCase().trim();
      
      // Find country by matching slug - try multiple matching strategies
      let foundCountry = allCountries.find(c => {
        if (!c || !c.name) return false;
        
        // Strategy 1: Exact slug match
        const slug = createSlug(c.name);
        if (slug === normalizedParam) return true;
        
        // Strategy 2: Direct name match (case insensitive)
        const countryNameLower = c.name.toLowerCase().trim();
        if (countryNameLower === normalizedParam) return true;
        
        // Strategy 3: Slug match with normalized param
        const normalizedSlug = createSlug(normalizedParam);
        if (slug === normalizedSlug) return true;
        
        // Strategy 4: Check if name contains the param or vice versa (for partial matches)
        if (countryNameLower.includes(normalizedParam) || normalizedParam.includes(countryNameLower)) {
          // Only match if they're very similar (to avoid false positives)
          const similarity = Math.min(countryNameLower.length, normalizedParam.length) / 
                            Math.max(countryNameLower.length, normalizedParam.length);
          if (similarity > 0.7) return true;
        }
        
        return false;
      });

      // If still not found, try matching by CCA3 code
      if (!foundCountry && normalizedParam.length === 3) {
        foundCountry = allCountries.find(c => 
          c.cca3 && c.cca3.toLowerCase() === normalizedParam
        );
      }

      if (foundCountry) {
        setCountry(foundCountry);
        setNotFound(false);
        // Update page title
        document.title = `${foundCountry.name} - African Countries Explorer`;
      } else {
        setNotFound(true);
        setCountry(null);
      }
    }
  }, [countryName, allCountries, loading]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-primary mb-4"></div>
          <p className="text-xl text-gray-600">Loading country data...</p>
        </div>
      </div>
    );
  }

  // Not found state
  if (notFound || !country) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-6xl mb-6">🌍</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Country Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The country you're looking for doesn't exist or couldn't be found.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:bg-white"
        >
          <FaArrowLeft className="mr-2" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Country Hero */}
      <CountryHero country={country} />

      {/* Key Facts */}
      <KeyFacts country={country} />

      {/* Main Highlights */}
      <MainHighlights country={country} />

      {/* Business Opportunities */}
      <BusinessOpportunities country={country} />

      {/* Top Cities */}
      <TopCities country={country} />

      {/* Visa & Business Info */}
      <VisaBusinessInfo country={country} />

      {/* Country Details (Additional Info) */}
      <CountryDetails country={country} />

      {/* Location Context */}
      <LocationContext country={country} />

      {/* Call-to-Action Sections */}
      <CTASections country={country} />

      {/* Related Countries */}
      <RelatedCountries countries={allCountries} currentCountry={country} />
    </div>
  );
};

export default CountryPage;
