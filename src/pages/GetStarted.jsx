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
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotate: -5 },
    visible: (i) => ({ opacity: 1, rotate: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
    hover: { scale: 1.03, rotate: 1, boxShadow: '0 5px 10px rgba(0,0,0,0.1)' },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 10px rgba(250, 204, 21, 0.3)' },
    tap: { scale: 0.95 },
  };

  const { scrollY } = useScroll();
  const yWave = useTransform(scrollY, [0, 200], [0, -10]);

  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] py-6 sm:py-8 md:py-12 px-2 sm:px-4">
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

      <div className="max-w-xs sm:max-w-lg md:max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-1 sm:mb-2"
          >
            Launch Your Digital Adventure
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs sm:max-w-md mx-auto"
          >
            Connect with our experts to unlock a tailored strategy that skyrockets your brand online!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-5 gap-2 sm:gap-4"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-2"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Your Growth Toolkit</h2>
            <div className="space-y-1 sm:space-y-2">
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
                  className="bg-white p-1 sm:p-2 rounded-md sm:rounded-lg shadow-md border border-yellow-100"
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400" />
                    <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-2 sm:mt-4"
            >
              <img
                src="/digital-marketing-illustration.svg"
                alt="Digital Marketing Illustration"
                className="w-full h-24 sm:h-32 rounded-md sm:rounded-lg shadow-md"
                onError={(e) => (e.target.src = 'https://source.unsplash.com/featured/?digitalmarketing')}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-3 bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md border border-gray-100"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Let’s Make Magic Happen</h3>
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-1 sm:p-2 border-2 rounded-md sm:rounded-lg focus:outline-none focus:border-yellow-400 transition-all ${
                    errors.name ? 'border-red-400 animate-shake' : 'border-gray-200'
                  } text-xs sm:text-sm`}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-xs mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full p-1 sm:p-2 border-2 rounded-md sm:rounded-lg focus:outline-none focus:border-yellow-400 transition-all ${
                    errors.email ? 'border-red-400 animate-shake' : 'border-gray-200'
                  } text-xs sm:text-sm`}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-xs mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
              <motion.input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Your Business Name"
                className="w-full p-1 sm:p-2 border-2 border-gray-200 rounded-md sm:rounded-lg focus:outline-none focus:border-yellow-400 transition-all text-xs sm:text-sm"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full p-1 sm:p-2 border-2 border-gray-200 rounded-md sm:rounded-lg focus:outline-none focus:border-yellow-400 transition-all text-xs sm:text-sm"
                whileFocus={{ scale: 1.01 }}
              >
                <option value="">What’s Your Big Goal?</option>
                <option value="leads">Get More Leads</option>
                <option value="branding">Improve Branding</option>
                <option value="product">Launch New Product</option>
                <option value="website">Website Development</option>
              </motion.select>
              <motion.textarea
                name="needs"
                value={formData.needs}
                onChange={handleChange}
                placeholder="Tell us your big idea!"
                className="w-full p-1 sm:p-2 border-2 border-gray-200 rounded-md sm:rounded-lg focus:outline-none focus:border-yellow-400 transition-all h-16 sm:h-20 resize-none text-xs sm:text-sm"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-medium py-1 sm:py-2 rounded-md sm:rounded-lg flex items-center justify-center space-x-1 text-xs sm:text-sm"
              >
                <span>Book Your Free Call</span>
                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;