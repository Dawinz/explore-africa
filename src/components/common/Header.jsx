import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
      className="fixed top-0 left-0 right-0 z-40 bg-[#1e3a5f] shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            {/* Heritage Exchange Logo - Four squares with winding line */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Top-left square - Green */}
                <rect x="0" y="0" width="50" height="50" fill="#6B7F5E" />
                {/* Top-right square - Orange */}
                <rect x="50" y="0" width="50" height="50" fill="#F28C38" />
                {/* Bottom-left square - Orange */}
                <rect x="0" y="50" width="50" height="50" fill="#F28C38" />
                {/* Bottom-right square - Green */}
                <rect x="50" y="50" width="50" height="50" fill="#6B7F5E" />
                {/* Winding line/path */}
                <path
                  d="M10 20 Q30 10, 50 20 T90 20 Q80 30, 70 40 T50 60 Q30 70, 20 80 T10 90"
                  stroke="#1a1a1a"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xs md:text-sm font-bold leading-tight">
                THE HERITAGE
              </span>
              <span className="text-white text-xs md:text-sm font-bold leading-tight">
                EXCHANGE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm xl:text-base"
            >
              Explore Africa
            </Link>
            <a
              href="https://theheritageexchange.com/investors-corner/"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm xl:text-base"
            >
              Investors corner
            </a>
            <a
              href="https://theheritageexchange.com/blog/"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm xl:text-base"
            >
              Blogs and News
            </a>
            <a
              href="https://theheritageexchange.com/events/"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm xl:text-base"
            >
              Events
            </a>
            <a
              href="https://theheritageexchange.com/about/"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm xl:text-base"
            >
              About Us
            </a>
            <a
              href="https://theheritageexchange.com/contact-us/"
              className="text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm xl:text-base"
            >
              Contact Us
            </a>
          </nav>

          {/* Sign In Button */}
          <div className="hidden lg:flex items-center">
            <button className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition-all duration-200 border border-gray-300">
              <FaSignInAlt className="text-sm" />
              <span className="text-sm">Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 text-white hover:bg-white/10"
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
            className="lg:hidden bg-[#1e3a5f] border-t border-blue-800 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <Link
                to="/"
                className="text-white hover:text-gray-200 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Africa
              </Link>
              <a
                href="https://theheritageexchange.com/investors-corner/"
                className="text-white hover:text-gray-200 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Investors corner
              </a>
              <a
                href="https://theheritageexchange.com/blog/"
                className="text-white hover:text-gray-200 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs and News
              </a>
              <a
                href="https://theheritageexchange.com/events/"
                className="text-white hover:text-gray-200 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="https://theheritageexchange.com/about/"
                className="text-white hover:text-gray-200 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="https://theheritageexchange.com/contact-us/"
                className="text-white hover:text-gray-200 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              <button
                className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition-all duration-200 border border-gray-300 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaSignInAlt className="text-sm" />
                <span className="text-sm">Sign In</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
