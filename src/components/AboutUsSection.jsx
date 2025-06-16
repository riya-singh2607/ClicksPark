import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-6 sm:py-8 md:py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFD700"
            fillOpacity="0.2"
            d="M0,192L60,202.7C120,213,240,235,360,213.3C480,192,600,128,720,112C840,96,960,128,1080,149.3C1200,171,1320,181,1380,186.7L1440,192V320H0V192Z"
          />
        </svg>
      </div>
      <motion.div
        className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
          <motion.div
            className="hidden md:block"
            variants={imageVariants}
          >
            <div className="relative">
              <div className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 bg-yellow-100 rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 bg-yellow-400 rounded-full opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-400 rounded-full opacity-30"></div>
            </div>
          </motion.div>
          <div className="text-center md:text-left">
            <motion.div variants={itemVariants} className="relative inline-block mb-2 sm:mb-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
                About <span className="text-yellow-400">Us</span>
              </h2>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 sm:h-1 bg-yellow-400 rounded-full w-12 sm:w-16" />
            </motion.div>
            <motion.div variants={containerVariants} className="space-y-2 sm:space-y-3 max-w-xs sm:max-w-md md:max-w-xl mx-auto md:mx-0">
              <motion.p variants={itemVariants} className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We are a <span className="text-yellow-400 font-medium">forward-thinking organization</span>, established on 7 August 2024, dedicated to promoting digital marketing excellence and innovative educational initiatives. With a strong foundation in both technology and strategy, we help brands grow online while supporting learning platforms that prepare individuals for the future.
              </motion.p>
              <motion.p variants={itemVariants} className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our dual focus on marketing and education allows us to create <span className="text-yellow-400 font-medium">impactful campaigns</span> and projects that not only drive engagement but also foster knowledge and skill development. From startups to institutions, we partner with clients to deliver customized solutions that make a measurable difference.
              </motion.p>
              <motion.p variants={itemVariants} className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Specializing in brand promotion, brand building, and strategic marketing growth, we leverage cutting-edge digital marketing platforms and social media to maximize visibility and audience connection. Whether it's enhancing brand identity or driving user acquisition, we bring results-driven innovation to every project.
              </motion.p>
              <motion.p variants={itemVariants} className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                With a team of <span className="text-yellow-400 font-medium">passionate professionals</span>, we combine creativity, data-driven insights, and a deep understanding of digital trends to fuel growth and transformation.
              </motion.p>
              <motion.p variants={itemVariants} className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                At the heart of everything we do is a commitment to <span className="text-yellow-400 font-medium">innovation, integrity, and results</span>—empowering our partners to thrive in a digital-first world.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;