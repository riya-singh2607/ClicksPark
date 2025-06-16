import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, GraduationCap, Building2, Heart, Sparkles, Target, Mail, Search, Edit, Globe, Handshake } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Contact from './pages/Contact.jsx';
import ChatBotPopup from './components/ChatBotPopup.jsx';
import GetStarted from './pages/GetStarted.jsx';
import { Tilt } from 'react-tilt';
import DateTimePickerModal from './components/DateTimePickerModal.jsx';
import AboutUsSection from './components/AboutUsSection.jsx';
import { AnimatePresence } from 'framer-motion';

// Global Carousel Data
const carouselSentences = [
  "Unlock the power of digital marketing to skyrocket your brand's growth! Engage your audience with targeted campaigns and compelling content. Boost your ROI with data-driven marketing strategies today! Transform leads into loyal customers with innovative marketing solutions.",
];

// Global Work Projects Data
const workProjects = [
  {
    image: '/gyansetu.jpg',
    title: 'GyanSetu',
    desc: 'A next-gen e-learning platform empowering students and educators with interactive digital tools.',
    tag: 'EdTech',
  },
  {
    image: '/swasthya-setu.jpg',
    title: 'Swasthya-Setu',
    desc: 'A comprehensive health and wellness portal connecting users to trusted medical resources.',
    tag: 'Healthcare', 
  },
  {
    image: '/landtolavish.jpg',
    title: 'Land To Lavish',
    desc: 'A luxury real estate showcase with immersive virtual tours and high-conversion landing pages.',
    tag: 'Real Estate',
  },
  {
    image: '/school-management.jpg',
    title: 'School Management',
    desc: 'A smart school management system streamlining operations for institutions and parents.',
    tag: 'Education',
  },
];

// Services Data
const servicesData = [
  {
    icon: <Target className="w-8 h-8 text-yellow-500" />,
    title: "Search Engine Optimization",
    description: "Boost your website's ranking with tailored SEO strategies.",
    color: "bg-white",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
    title: "Content Marketing",
    description: "Engage your audience with compelling, story-driven content.",
    color: "bg-white",
  },
  {
    icon: <Building2 className="w-8 h-8 text-yellow-500" />,
    title: "Website Designing",
    description: "Create stunning, responsive websites that convert.",
    color: "bg-white",
  },
  {
    icon: <Heart className="w-8 h-8 text-yellow-500" />,
    title: "Social Media Marketing",
    description: "Amplify your brand with engaging social campaigns.",
    color: "bg-white",
  },
  {
    icon: <Mail className="w-8 h-8 text-yellow-500" />,
    title: "Email Marketing",
    description: "Drive loyalty with personalized email campaigns.",
    color: "bg-white",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-yellow-500" />,
    title: "Strategic Planning",
    description: "Custom strategies to dominate your industry.",
    color: "bg-white",
  },
];

function WorkSection({ workProjects }) {
  const headerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  return (
    <section id="work" className="py-10 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Our Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            Explore our portfolio of innovative projects that drive digital success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {workProjects.map((work, i) => (
            <Tilt
              key={i}
              options={{ max: 10, scale: 1.05, speed: 400 }}
              className="relative"
            >
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)' }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full"
              >
                <div className="relative w-full h-32 sm:h-40 md:h-48">
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      className="text-white text-xs sm:text-sm md:text-base font-semibold"
                    >
                      View Details
                    </motion.span>
                  </motion.div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-1 sm:px-2 py-1 rounded-full mb-1 sm:mb-2">
                    {work.tag}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-tight flex-1">
                    {work.desc}
                  </p>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="mt-1 sm:mt-2 text-yellow-500 font-bold text-xs hover:underline"
                  >
                    View Project →
                  </motion.a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppContent() {
  const [showPopup, setShowPopup] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [showLeadCapturePopup, setShowLeadCapturePopup] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hasShownNewsletter = localStorage.getItem('newsletterShown');
    if (!hasShownNewsletter) {
      const timer = setTimeout(() => {
        setShowSubscriptionPopup(true);
        localStorage.setItem('newsletterShown', 'true');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar onLetsTalk={() => setShowPopup(true)} />
      </motion.div>
      <div className="pt-4 sm:pt-6 md:pt-16">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <HomePage
                    services={servicesData}
                    showDateModal={showDateModal}
                    setShowDateModal={setShowDateModal}
                    showSubscriptionPopup={showSubscriptionPopup}
                    setShowSubscriptionPopup={setShowSubscriptionPopup}
                    showDiscountPopup={showDiscountPopup}
                    setShowDiscountPopup={setShowDiscountPopup}
                    showLeadCapturePopup={showLeadCapturePopup}
                    setShowLeadCapturePopup={setShowLeadCapturePopup}
                  />
                </motion.div>
              }
            />
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <AboutUsSection />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ServicesPage services={servicesData} />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Contact />
              </motion.div>
            } />
            <Route path="/get-started" element={
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <GetStarted />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Footer />
      </motion.div>
      {showPopup && <ChatBotPopup onClose={() => setShowPopup(false)} />}
      <DateTimePickerModal isOpen={showDateModal} onRequestClose={() => setShowDateModal(false)} />

      {showSubscriptionPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.7 }}
            className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-2xl max-w-xs sm:max-w-md w-full mx-2 sm:mx-4"
          >
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">Get the latest marketing tips and offers delivered to your inbox!</p>
            <form className="space-y-2 sm:space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-1 sm:p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-xs sm:text-sm"
                aria-label="Email for subscription"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-yellow-600 transition-all text-xs sm:text-sm"
                onClick={() => setShowSubscriptionPopup(false)}
              >
                Subscribe
              </button>
            </form>
            <button
              className="mt-2 sm:mt-3 text-gray-500 hover:text-gray-700 text-xs sm:text-sm"
              onClick={() => setShowSubscriptionPopup(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      {showDiscountPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.7 }}
            className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-2xl max-w-xs sm:max-w-md w-full mx-2 sm:mx-4"
          >
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Special Offer!</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">Get 20% off your first marketing campaign. Offer ends soon!</p>
            <button
              className="w-full bg-yellow-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-yellow-600 transition-all text-xs sm:text-sm"
              onClick={() => {
                setShowDiscountPopup(false);
                navigate('/get-started');
              }}
            >
              Claim Offer
            </button>
            <button
              className="mt-2 sm:mt-3 text-gray-500 hover:text-gray-700 text-xs sm:text-sm"
              onClick={() => setShowDiscountPopup(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      {showLeadCapturePopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.7 }}
            className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-2xl max-w-xs sm:max-w-md w-full mx-2 sm:mx-4"
          >
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Get a Free Consultation</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">Fill out the form to schedule a free marketing consultation.</p>
            <form className="space-y-2 sm:space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-1 sm:p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-xs sm:text-sm"
                aria-label="Your name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-1 sm:p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-xs sm:text-sm"
                aria-label="Your email"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-yellow-600 transition-all text-xs sm:text-sm"
                onClick={() => setShowLeadCapturePopup(false)}
              >
                Submit
              </button>
            </form>
            <button
              className="mt-2 sm:mt-3 text-gray-500 hover:text-gray-700 text-xs sm:text-sm"
              onClick={() => setShowLeadCapturePopup(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function HomePage({ services, showDateModal, setShowDateModal, showSubscriptionPopup, setShowSubscriptionPopup, showDiscountPopup, setShowDiscountPopup, showLeadCapturePopup, setShowLeadCapturePopup }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -20]);
  const y2 = useTransform(scrollY, [0, 300], [0, 20]);

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Hero Section with Video Background */}
      <header
        id="home"
        className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            style={{ filter: 'brightness(0.7)' }}
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10 text-center"
          style={{ y: y2 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-4 leading-tight"
          >
            Amplify Your <span className="text-yellow-400">Digital Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-3 sm:mb-6 max-w-xs sm:max-w-md md:max-w-xl mx-auto"
          >
            Bold digital solutions to make your brand unstoppable.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            className="bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-base sm:text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 flex items-center mx-auto"
            aria-label="Get started with our services"
            onClick={() => navigate('/get-started')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/get-started')}
          >
            Get Started <ArrowRight className="ml-1 sm:ml-2 w-4 sm:w-5 h-4 sm:h-5" />
          </motion.button>
        </motion.div>
      </header>

      {/* Carousel Section with Overlay */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-10 bg-gradient-to-br from-yellow-50 to-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="whitespace-nowrap inline-block"
              animate={{
                x: ['0%', '-100%'],
                transition: {
                  x: { duration: 45, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
                },
              }}
              style={{ marginTop: '-20px' }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500 inline-block pr-4 sm:pr-8">
                {carouselSentences[0]}
              </h2>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500 inline-block pr-4 sm:pr-8">
                {carouselSentences[0]}
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutUsSection />

      {/* Services Section */}
      <section id="services" className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Our Expertise</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-md mx-auto">
              Tailored digital solutions for your brand.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                className="bg-white p-2 sm:p-3 md:p-4 lg:p-6 rounded-xl shadow-md border border-gray-100 hover:border-yellow-200 transition-all duration-300 transform hover:scale-105"
                role="article"
                aria-labelledby={`service-title-${index}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-2 sm:mb-3 shadow-md transform hover:rotate-6"
                >
                  {service.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.1, duration: 0.5, ease: "easeOut" }}
                  id={`service-title-${index}`} className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5, ease: "easeOut" }}
                  className="text-gray-600 text-xs sm:text-sm md:text-base"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <WorkSection workProjects={workProjects} />

      {/* How We Generate Leads Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            How We Generate Leads
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-xl mx-auto mb-4 sm:mb-6">
            We use data-driven LinkedIn campaigns to connect you with decision-makers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: <Search className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600" />, title: "Find Prospects", desc: "Targeted lists of ideal prospects on LinkedIn." },
              { icon: <Edit className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600" />, title: "Write Messages", desc: "Personalized messages that get responses." },
              { icon: <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600" />, title: "Execute Outreach", desc: "Send custom messages to thousands." },
              { icon: <Handshake className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600" />, title: "Close Deals", desc: "Get notified when leads respond." },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: index * 0.1 }}
                  className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 flex items-center justify-center rounded-full bg-yellow-100 mb-2 sm:mb-3 md:mb-4 shadow-md"
                >
                  {step.icon}
                </motion.span>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            className="mt-4 sm:mt-6 bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-yellow-700 transition-all duration-300"
            onClick={() => setShowDateModal(true)}
            onKeyDown={(e) => e.key === 'Enter' && setShowDateModal(true)}
            aria-label="Schedule a free consultation"
          >
            Free Consultation
          </motion.button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xs sm:max-w-md md:max-w-lg mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
              Start your digital journey today.
            </p>
            <form className="space-y-3 sm:space-y-4">
              <motion.input
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                type="email"
                placeholder="Your Email"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                aria-label="Email address"
              />
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                type="submit"
                className="w-full bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-yellow-700 transition-all duration-300"
                aria-label="Submit contact form"
                onClick={() => navigate('/contact')}
                onKeyDown={(e) => e.key === 'Enter' && navigate('/contact')}
              >
                Connect Now
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

function AboutPage() {
  return null; // Placeholder for About Page content
}

function ServicesPage({ services }) {
  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-4 sm:mb-6"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Our Services</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-md mx-auto">
          Explore our innovative digital solutions.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            className="bg-white p-2 sm:p-3 md:p-4 rounded-xl shadow-md border border-gray-100 hover:border-yellow-200 transition-all duration-300"
            role="article"
            aria-labelledby={`service-title-${index}`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-2 sm:mb-3"
            >
              {service.icon}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: index * 0.1 + 0.1, duration: 0.5, ease: "easeOut" }}
              id={`service-title-${index}`} className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2"
            >
              {service.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5, ease: "easeOut" }}
              className="text-gray-600 text-xs sm:text-sm md:text-base"
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;