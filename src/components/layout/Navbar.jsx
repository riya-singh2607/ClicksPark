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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3C2F2F] text-[#D1C4E9] shadow-md">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 sm:gap-2">
          <motion.img
            src="/new.png"
            alt="ClickSpark Company Logo"
            className="w-12 sm:w-16 h-12 sm:h-16 object-contain p-1 border border-[#FACC15] rounded-full shadow-md bg-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.span
            className="text-lg sm:text-xl md:text-2xl font-bold text-white"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            CLICKSPARK
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-medium font-sans">
          <Link to="/" className="relative text-white hover:text-yellow-400 transition-colors">
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link to="/about" className="relative text-white hover:text-yellow-400 transition-colors">
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link to="/services" className="relative text-white hover:text-yellow-400 transition-colors">
            Services
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link to="/contact" className="relative text-white hover:text-yellow-400 transition-colors">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <motion.button
            onClick={onLetsTalk}
            className="ml-2 sm:ml-4 bg-[#FACC15] text-[#3C2F2F] px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-[#EAB308] transition-all text-xs sm:text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk
          </motion.button>
        </div>

        {/* Mobile menu button and Let's Talk button */}
        <div className="flex items-center md:hidden">
          {!isOpen && (
            <motion.button
              onClick={onLetsTalk}
              className="bg-[#FACC15] text-[#3C2F2F] px-2 py-1 rounded hover:bg-[#EAB308] transition-all text-xs mr-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Let\'s Talk"
            >
              Let's Talk
            </motion.button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-yellow-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#3C2F2F] text-white px-2 sm:px-4 py-2 sm:py-4 space-y-2 font-medium font-sans"
          initial="hidden"
          animate="visible"
          variants={mobileMenuVariants}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 text-xs">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 text-xs">
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 text-xs">
            Services
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 text-xs">
            Contact
          </Link>
          <motion.button
            onClick={() => { onLetsTalk(); setIsOpen(false); }}
            className="block w-full bg-[#FACC15] text-[#3C2F2F] px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-[#EAB308] text-xs"
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