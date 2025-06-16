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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-4 sm:py-8 md:py-12">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-1">Contact Us</h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Let's connect and kickstart your digital transformation today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md border border-gray-200 w-full"
        >
          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
              <div>
                <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  First Name<span className="text-yellow-400">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs sm:text-sm"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Last Name<span className="text-yellow-400">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs sm:text-sm"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Email<span className="text-yellow-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs sm:text-sm"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Phone Number<span className="text-yellow-400">*</span>
              </label>
              <div className="flex gap-1 sm:gap-2">
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md sm:rounded-lg px-1 sm:px-2 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs sm:text-sm w-1/3 sm:w-1/4"
                  aria-label="Country code"
                >
                  <option>India (+91)</option>
                  <option>USA (+1)</option>
                  <option>UK (+44)</option>
                  <option>Canada (+1)</option>
                  <option>Australia (+61)</option>
                </select>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs sm:text-sm"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Company<span className="text-yellow-400">*</span>
              </label>
              <input
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs sm:text-sm"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Website<span className="text-yellow-400">*</span>
              </label>
              <input
                id="website"
                name="website"
                value={form.website}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs sm:text-sm"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="revenue" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Annual Revenue<span className="text-yellow-400">*</span>
              </label>
              <input
                id="revenue"
                name="revenue"
                value={form.revenue}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs sm:text-sm"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Message<span className="text-yellow-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs sm:text-sm"
                required
                aria-required="true"
              ></textarea>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={form.agree}
                onChange={handleChange}
                className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-yellow-400"
                required
                aria-required="true"
              />
              <label htmlFor="agree" className="text-xs sm:text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="underline text-yellow-400 hover:text-yellow-500">
                  Privacy Policy
                </a>
                <span className="text-yellow-400">*</span>
              </label>
            </div>
            {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}
            <div className="text-center pt-1 sm:pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-yellow-400 text-black px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-base font-medium shadow hover:bg-yellow-500 w-full sm:w-auto"
                aria-label="Submit contact form"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;