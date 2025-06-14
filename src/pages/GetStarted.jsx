import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    goal: '',
    needs: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add API call or navigation logic here
    }
  };

  // Animation variants for section elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotate: -5 },
    visible: (i) => ({
      opacity: 1,
      rotate: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, rotate: 2, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0 0 15px rgba(250, 204, 21, 0.5)' },
    tap: { scale: 0.95 },
  };

  const { scrollY } = useScroll();
  const yWave = useTransform(scrollY, [0, 300], [0, -20]);

  return (
    <section className="relative min-h-screen py-20 px-6 bg-gradient-to-br from-yellow-50 to-white overflow-hidden">
      {/* Animated Wave Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yWave }}
      >
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#facc15"
            fillOpacity="0.2"
            d="M0,192L60,202.7C120,213,240,235,360,213.3C480,192,600,128,720,112C840,96,960,128,1080,149.3C1200,171,1320,181,1380,186.7L1440,192V320H0V192Z"
          />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4"
          >
            Launch Your Digital Adventure
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Connect with our experts to unlock a tailored strategy that skyrockets your brand online!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-5 gap-8"
        >
          {/* Left: What You'll Get */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 relative"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Growth Toolkit</h2>
            <div className="space-y-4">
              {[
                'Free Website Audit & Report',
                'Custom Digital Marketing Plan',
                '30-Minute Strategy Call',
                'Expert Recommendations',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="bg-white p-4 rounded-lg shadow-lg border border-yellow-100 transform"
                  style={{ zIndex: 4 - i }}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 animate-pulse" />
                    <span className="text-gray-700 text-base">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <img
                src="/digital-marketing-illustration.svg" // Replace with your custom SVG or asset
                alt="Digital Marketing Illustration"
                className="w-full h-auto rounded-xl shadow-xl"
                onError={(e) => (e.target.src = 'https://source.unsplash.com/featured/?digitalmarketing')} // Fallback
              />
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let’s Make Magic Happen</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-4 border-2 rounded-lg focus:outline-none focus:border-yellow-400 transition-all ${
                    errors.name ? 'border-red-400 animate-shake' : 'border-gray-200'
                  }`}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full p-4 border-2 rounded-lg focus:outline-none focus:border-yellow-400 transition-all ${
                    errors.email ? 'border-red-400 animate-shake' : 'border-gray-200'
                  }`}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Business Name Input */}
              <motion.input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Your Business Name"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition-all"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Goal Select */}
              <motion.select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition-all"
                whileFocus={{ scale: 1.02 }}
              >
                <option value="">What’s Your Big Goal?</option>
                <option value="leads">Get More Leads</option>
                <option value="branding">Improve Branding</option>
                <option value="product">Launch New Product</option>
                <option value="website">Website Development</option>
              </motion.select>

              {/* Needs Textarea */}
              <motion.textarea
                name="needs"
                value={formData.needs}
                onChange={handleChange}
                placeholder="Tell us your big idea!"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition-all h-32 resize-none"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 transition-all"
              >
                <span>Book Your Free Call</span>
                <ArrowRight className="w-5 h-5 animate-bounce-right" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;