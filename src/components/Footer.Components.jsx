// src/Footer.js

import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full rounded-lg my-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          {/* Follow Us Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Follow Us:</h3>
            <div className="flex space-x-4">
              <NavLink to="#" className="hover:text-blue-400">
                <FaFacebook size={20} />
              </NavLink>
              <NavLink to="#" className="hover:text-blue-400">
                <FaTwitter size={20} />
              </NavLink>
              <NavLink to="#" className="hover:text-blue-400">
                <FaInstagram size={20} />
              </NavLink>
              <NavLink to="#" className="hover:text-blue-400">
                <FaLinkedin size={20} />
              </NavLink>
            </div>
          </div>

          {/* Other Links Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Other Links:</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-blue-400">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-blue-400">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="hover:text-blue-400">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/committee" className="hover:text-blue-400">
                  Committee
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="hover:text-blue-400">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-blue-400">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us:</h3>
            <p>
              Shouvik Datta:{" "}
              <a href="tel:7003219254" className="hover:text-blue-400">
                7003219254
              </a>
            </p>
            <p>
              Gairik Chakraborty:{" "}
              <a href="tel:8240562981" className="hover:text-blue-400">
                8240562981
              </a>
            </p>
            <p>
              Mail us:{" "}
              <a
                href="mailto:lensified.nsec@gmail.com"
                className="hover:text-blue-400"
              >
                lensified.nsec@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-600 pt-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />{" "}
          {/* Replace with your logo path */}
          <p className="text-sm">
            © {new Date().getFullYear()} Lensified. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
