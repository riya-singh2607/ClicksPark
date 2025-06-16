import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'India (+91)',
    company: '',
    website: '',
    revenue: '',
    message: '',
    agree: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm((f) => ({ ...f, [name]: e.target.checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.company ||
      !form.website ||
      !form.revenue ||
      !form.message ||
      !form.agree
    ) {
      setError('Please complete all required fields.');
      return;
    }
    setError('');
    console.log('Form submitted:', form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-4 sm:py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-1">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Let's connect and kickstart your digital transformation today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg sm:rounded-xl shadow-md border border-gray-200 w-full"
        >
          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              <div>
                <label htmlFor="firstName" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                  First Name<span className="text-yellow-400">*</span>
                </label>
                <motion.input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01, borderColor: "#FACC15", boxShadow: "0 0 8px rgba(250, 204, 21, 0.4)" }}
                  transition={{ duration: 0.2 }}
                  className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm sm:text-base"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                  Last Name<span className="text-yellow-400">*</span>
                </label>
                <motion.input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01, borderColor: "#FACC15", boxShadow: "0 0 8px rgba(250, 204, 21, 0.4)" }}
                  transition={{ duration: 0.2 }}
                  className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm sm:text-base"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                Email<span className="text-yellow-400">*</span>
              </label>
              <motion.input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.01, borderColor: "#FACC15", boxShadow: "0 0 8px rgba(250, 204, 21, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm sm:text-base"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                Phone Number<span className="text-yellow-400">*</span>
              </label>
              <div className="flex gap-1 sm:gap-2">
                <motion.select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01, borderColor: "#FACC15", boxShadow: "0 0 8px rgba(250, 204, 21, 0.4)" }}
                  transition={{ duration: 0.2 }}
                  className="border border-gray-300 rounded-md sm:rounded-lg px-1 sm:px-2 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm sm:text-base w-1/3 sm:w-1/4"
                  aria-label="Country code"
                >
                  <option>India (+91)</option>
                  <option>USA (+1)</option>
                  <option>UK (+44)</option>
                  <option>Canada (+1)</option>
                  <option>Australia (+61)</option>
                </motion.select>
                <motion.input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01, borderColor: "#FACC15", boxShadow: "0 0 8px rgba(250, 204, 21, 0.4)" }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm sm:text-base"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                Company<span className="text-yellow-400">*</span>
              </label>
              <motion.input
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                whileFocus={{ scale: 1.01, borderColor: "#FACC15", boxShadow: "0 0 8px rgba(250, 204, 21, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm sm:text-base"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                Website<span className="text-yellow-400">*</span>
              </label>
              <motion.input
                id="website"
                name="website"
                value={form.website}
                onChange={handleChange}
                whileFocus={{ scale: 1.01, borderColor: "#FACC15", boxShadow: "0 0 8px rgba(250, 204, 21, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm sm:text-base"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="revenue" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                Annual Revenue<span className="text-yellow-400">*</span>
              </label>
              <motion.input
                id="revenue"
                name="revenue"
                value={form.revenue}
                onChange={handleChange}
                whileFocus={{ scale: 1.01, borderColor: "#FACC15", boxShadow: "0 0 8px rgba(250, 204, 21, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm sm:text-base"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                Message<span className="text-yellow-400">*</span>
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="3"
                whileFocus={{ scale: 1.01, borderColor: "#FACC15", boxShadow: "0 0 8px rgba(250, 204, 21, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm sm:text-base"
                required
                aria-required="true"
              ></motion.textarea>
            </div>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm sm:text-base text-center"
              >
                {error}
              </motion.div>
            )}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={form.agree}
                onChange={handleChange}
                className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
                required
                aria-required="true"
              />
              <label htmlFor="agree" className="text-sm sm:text-base text-gray-700">
                I agree to the privacy policy<span className="text-yellow-400">*</span>
              </label>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-yellow-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-yellow-600 transition-all text-sm sm:text-base font-semibold"
            >
              Send Message
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 text-center"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3">
              Or reach us directly:
            </p>
            <div className="space-y-2">
              <motion.a
                href="mailto:info@example.com"
                whileHover={{ x: 5, color: "#FACC15" }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" /> info@example.com
              </motion.a>
              <motion.a
                href="tel:+917082101534"
                whileHover={{ x: 5, color: "#FACC15" }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" /> +91 7082101534
              </motion.a>
              <motion.a
                href="https://www.google.com/maps/search/1280-A%2F29+Model+Town+Opposite+Power+House+Rohtak+Pin+code+-+124001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: "#FACC15" }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" /> 1280-A/29 Model Town Opposite Power House Rohtak Pin code - 124001
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;