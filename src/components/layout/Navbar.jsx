import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ onLetsTalk }) => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <motion.img
            src="/new.png"
            alt="ClickSpark Company Logo"
            className="w-24 h-24 object-contain p-2 border-2 border-yellow-500 rounded-full shadow-xl bg-white" // Changed to yellow-500
            whileHover={{
              scale: 1.1,
              rotate: 10,
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.7)', // Changed to yellow-500 glow
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
          <motion.span
            className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            CLICKSPARK
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-base font-medium font-sans">
          <Link
            to="/"
            className="relative text-gray-200 hover:text-orange-300 transition-colors duration-300 group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            to="/about"
            className="relative text-gray-200 hover:text-orange-300 transition-colors duration-300 group"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            to="/services"
            className="relative text-gray-200 hover:text-orange-300 transition-colors duration-300 group"
          >
            Services
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            to="/contact"
            className="relative text-gray-200 hover:text-orange-300 transition-colors duration-300 group"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <motion.button
            onClick={onLetsTalk}
            className="ml-6 bg-orange-300 text-gray-900 px-6 py-2.5 rounded-lg font-semibold shadow-md hover:bg-orange-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 hover:text-orange-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-900 text-white px-6 py-6 space-y-6 font-medium font-sans"
          initial="hidden"
          animate="visible"
          variants={mobileMenuVariants}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-orange-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-orange-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-orange-300 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-orange-300 transition-colors"
          >
            Contact
          </Link>
          <motion.button
            onClick={() => {
              onLetsTalk();
              setIsOpen(false);
            }}
            className="block w-full bg-orange-300 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;