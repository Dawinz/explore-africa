import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">The Heritage Exchange</h3>
            <p className="text-gray-400 leading-relaxed">
              The Heritage Exchange is your gateway to exploring, connecting, and doing business across Africa and around the world. Whether you're a traveler, entrepreneur, or community member, we help you discover trusted contacts, experiences, and opportunities.
            </p>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Helpful Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://theheritageexchange.com/explore-africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Explore Africa
                </a>
              </li>
              <li>
                <a
                  href="https://theheritageexchange.com/investors-corner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Investors corner
                </a>
              </li>
              <li>
                <a
                  href="https://theheritageexchange.com/blogs-and-news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Blogs and News
                </a>
              </li>
              <li>
                <a
                  href="https://theheritageexchange.com/events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="https://theheritageexchange.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://theheritageexchange.com/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  2 Wasira Street (near Mlimani Mall),<br />
                  Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-gray-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+255749297281"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +255 749-297-281
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@TheHeritageExchange.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  info@TheHeritageExchange.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Connecting People, Businesses, and Communities Across Africa and Beyond. © {currentYear} The Heritage Exchange. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
