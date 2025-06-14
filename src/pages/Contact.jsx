// src/pages/Contact.jsx
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
    // Submit logic here (e.g., API call)
    console.log('Form submitted:', form);
  };

  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Let's connect and kickstart your digital transformation today.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name<span className="text-yellow-400">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name<span className="text-yellow-400">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email<span className="text-yellow-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number<span className="text-yellow-400">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-2 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
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
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company<span className="text-yellow-400">*</span>
              </label>
              <input
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website<span className="text-yellow-400">*</span>
              </label>
              <input
                id="website"
                name="website"
                value={form.website}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-1">
                Annual Revenue<span className="text-yellow-400">*</span>
              </label>
              <select
                id="revenue"
                name="revenue"
                value={form.revenue}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                required
                aria-required="true"
              >
                <option value="">Select Revenue</option>
                <option value="<1M">Less than $1M</option>
                <option value="1M-10M">$1M - $10M</option>
                <option value=">10M">More than $10M</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message<span className="text-yellow-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                rows={4}
                required
                aria-required="true"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={form.agree}
                onChange={handleChange}
                className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                required
                aria-required="true"
              />
              <label htmlFor="agree" className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="underline text-yellow-400 hover:text-yellow-500">
                  Privacy Policy
                </a>
                <span className="text-yellow-400">*</span>
              </label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-yellow-500 transition-all w-full sm:w-auto"
                aria-label="Submit contact form"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;