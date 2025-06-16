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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 sm:gap-2">
          <motion.img
            src="/new.png"
            alt="ClickSpark Company Logo"
            className="w-12 sm:w-16 h-12 sm:h-16 object-contain p-1 border border-yellow-500 rounded-full shadow-md bg-white"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
          <motion.span
            className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            CLICKSPARK
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-medium font-sans">
          <Link to="/" className="relative text-gray-200 hover:text-orange-300 transition-colors">
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-300 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link to="/about" className="relative text-gray-200 hover:text-orange-300 transition-colors">
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-300 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link to="/services" className="relative text-gray-200 hover:text-orange-300 transition-colors">
            Services
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-300 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link to="/contact" className="relative text-gray-200 hover:text-orange-300 transition-colors">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-300 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <motion.button
            onClick={onLetsTalk}
            className="ml-2 sm:ml-4 bg-orange-300 text-gray-900 px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-orange-400 transition-all text-xs sm:text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
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
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-900 text-white px-2 sm:px-4 py-2 sm:py-4 space-y-2 font-medium font-sans"
          initial="hidden"
          animate="visible"
          variants={mobileMenuVariants}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-200 hover:text-orange-300 text-xs">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-200 hover:text-orange-300 text-xs">
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-gray-200 hover:text-orange-300 text-xs">
            Services
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-200 hover:text-orange-300 text-xs">
            Contact
          </Link>
          <motion.button
            onClick={() => { onLetsTalk(); setIsOpen(false); }}
            className="block w-full bg-orange-300 text-gray-900 px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-orange-400 text-xs"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;