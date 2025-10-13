import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobeAfrica, FaBars, FaTimes, FaHome, FaInfoCircle } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <FaGlobeAfrica className={`text-3xl transition-colors duration-200 ${
              isScrolled ? 'text-primary' : 'text-white'
            } group-hover:text-secondary`} />
            <span className={`text-xl font-bold transition-colors duration-200 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            } group-hover:text-primary`}>
              African Explorer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <button
              onClick={() => scrollToSection('countries-section')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Countries
            </button>
            <a
              href="https://theheritageexchange.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              <FaInfoCircle className="mr-2" />
              Heritage Exchange
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? 'text-gray-800 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2"
              >
                <FaHome className="mr-3" />
                Home
              </Link>
              <button
                onClick={() => scrollToSection('countries-section')}
                className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2 text-left"
              >
                Countries
              </button>
              <a
                href="https://theheritageexchange.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2"
              >
                <FaInfoCircle className="mr-3" />
                Heritage Exchange
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
