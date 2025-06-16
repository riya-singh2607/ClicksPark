import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Solutions: [
    { text: "Search Engine Optimization", path: "/services" },
    { text: "Content Marketing", path: "/services" },
    { text: "Website Designing", path: "/services" },
    { text: "Social Media Marketing", path: "/services" },
    { text: "Email Marketing", path: "/services" },
    { text: "Strategic Planning", path: "/services" },
  ],
  Company: [
    { text: "About Us", path: "/about" },
    { text: "Careers", path: "/careers" },
    { text: "Blog", path: "/blog" },
    { text: "Get Started", path: "/get-started" },
  ],
  Contact: [
    { icon: <Mail size={14} />, text: "info@example.com" },
    { icon: <Phone size={14} />, text: "+91 7082101534" },
    { icon: <MapPin size={14} />, text: "1280-A/29 Model Town Opposite Power House Rohtak Pin code - 124001" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 sm:py-6">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pb-2 sm:pb-4 md:pb-6 border-b border-gray-700">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <Link to="/" className="flex items-center mb-1 sm:mb-2">
              <img
                src="/new.png"
                alt="ClickSpark Logo"
                className="w-16 h-16 object-contain p-1 border border-yellow-500 rounded-full shadow-md bg-white"
              />
            </Link>
            <p className="text-xs sm:text-sm font-medium text-white leading-relaxed mb-1 sm:mb-2">
              Empowering brands with innovative digital solutions to thrive in a digital-first world.
            </p>
          </motion.div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([title, items], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="text-center sm:text-left"
            >
              <h3 className="text-xs sm:text-base font-semibold text-white mb-1 sm:mb-2">{title}</h3>
              <ul className="space-y-1 sm:space-y-2">
                {items.map((item, i) => (
                  <li key={i}>
                    {'path' in item ? (
                      <Link to={item.path} className="text-gray-400 hover:text-orange-400 transition-colors text-xs">
                        {item.text}
                      </Link>
                    ) : (
                      <div className="flex items-center justify-center sm:justify-start space-x-1 text-gray-400 text-xs">
                        {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                        <span>{item.text}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-2 sm:mt-4 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} ClickSpark. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;