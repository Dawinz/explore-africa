import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAfrica, FaGithub, FaExternalLinkAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaGlobeAfrica className="text-3xl text-primary" />
              <h3 className="text-xl font-bold">African Explorer</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Discover the rich diversity, culture, and beauty of all 54 African nations.
              Powered by The Heritage Exchange.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#countries-section"
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  All Countries
                </a>
              </li>
              <li>
                <a
                  href="https://theheritageexchange.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  The Heritage Exchange
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://restcountries.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  REST Countries API
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              </li>
              <li>
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Unsplash Photos
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              </li>
              <li>
                <a
                  href="https://flagcdn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Flag CDN
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} African Countries Explorer. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Built with <FaHeart className="text-red-500 mx-2" /> for Africa and{' '}
            <a
              href="https://theheritageexchange.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors duration-200 ml-1"
            >
              The Heritage Exchange
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
