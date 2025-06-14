import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, GraduationCap, Building2, Heart, Sparkles, Target, Mail, Search, Edit, Globe, Handshake } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Contact from './pages/Contact.jsx';
import ChatBotPopup from './components/ChatBotPopup.jsx';
import GetStarted from './pages/GetStarted.jsx';
import { Tilt } from 'react-tilt';
import DateTimePickerModal from './components/DateTimePickerModal.jsx';
import AboutUsSection from './components/AboutUsSection.jsx';

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="work" className="py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative projects that drive digital success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="relative w-full h-64">
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {work.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{work.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {work.desc}
                  </p>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="mt-4 text-yellow-500 font-semibold text-sm hover:underline"
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

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [showLeadCapturePopup, setShowLeadCapturePopup] = useState(false);

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
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar onLetsTalk={() => setShowPopup(true)} />
        <div className="pt-20">
          <Routes>
            <Route
              path="/"
              element={
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
              }
            />
            <Route path="/about" element={<AboutUsSection />} />
            <Route path="/services" element={<ServicesPage services={servicesData} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </div>
        <Footer />
        {showPopup && <ChatBotPopup onClose={() => setShowPopup(false)} />}
        <DateTimePickerModal isOpen={showDateModal} onRequestClose={() => setShowDateModal(false)} />

        {showSubscriptionPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-4">Get the latest marketing tips and offers delivered to your inbox!</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  aria-label="Email for subscription"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                  onClick={() => setShowSubscriptionPopup(false)}
                >
                  Subscribe
                </button>
              </form>
              <button
                className="mt-4 text-gray-500 hover:text-gray-700"
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Special Offer!</h3>
              <p className="text-gray-600 mb-4">Get 20% off your first marketing campaign. Offer ends soon!</p>
              <button
                className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                onClick={() => {
                  setShowDiscountPopup(false);
                  navigate('/get-started');
                }}
              >
                Claim Offer
              </button>
              <button
                className="mt-4 text-gray-500 hover:text-gray-700"
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get a Free Consultation</h3>
              <p className="text-gray-600 mb-4">Fill out the form to schedule a free marketing consultation.</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  aria-label="Your email"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                  onClick={() => setShowLeadCapturePopup(false)}
                >
                  Submit
                </button>
              </form>
              <button
                className="mt-4 text-gray-500 hover:text-gray-700"
                onClick={() => setShowLeadCapturePopup(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Router>
  );
}

function HomePage({ services, showDateModal, setShowDateModal, showSubscriptionPopup, setShowSubscriptionPopup, showDiscountPopup, setShowDiscountPopup, showLeadCapturePopup, setShowLeadCapturePopup }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -20]);
  const y2 = useTransform(scrollY, [0, 300], [0, 20]);

  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section with Enhanced Gradient and Pattern */}
      <header
        id="home"
        className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-50 to-white"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <svg
            className="absolute inset-0 w-full h-full opacity-15"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#facc15"
              d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,154.7C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256V320H0V160Z"
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="container mx-auto px-4 md:px-6 relative z-10 text-center"
          style={{ y: y2 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Amplify Your <span className="text-yellow-600">Digital Impact</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Bold digital solutions to make your brand unstoppable.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 flex items-center mx-auto"
            aria-label="Get started with our services"
            onClick={() => navigate('/get-started')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/get-started')}
          >
            Get Started <ArrowRight className="ml-2 w-6 h-6" />
          </motion.button>
        </motion.div>
      </header>

      {/* Carousel Section with Overlay */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
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
                  x: { duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
                },
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500 inline-block pr-12">
                {carouselSentences[0]}
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-500 inline-block pr-12">
                {carouselSentences[0]}
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutUsSection />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Tailored digital solutions for your brand.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-yellow-200 transition-all duration-300"
                role="article"
                aria-labelledby={`service-title-${index}`}
              >
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 id={`service-title-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <WorkSection workProjects={workProjects} />

      {/* How We Generate Leads Section */}
      <section className="py-24 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">How We Generate Leads</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We use data-driven LinkedIn campaigns to connect you with decision-makers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Search className="w-10 h-10 text-yellow-600" />, title: "Find Prospects", desc: "Targeted lists of ideal prospects on LinkedIn." },
              { icon: <Edit className="w-10 h-10 text-yellow-600" />, title: "Write Messages", desc: "Personalized messages that get responses." },
              { icon: <Globe className="w-10 h-10 text-yellow-600" />, title: "Execute Outreach", desc: "Send custom messages to thousands." },
              { icon: <Handshake className="w-10 h-10 text-yellow-600" />, title: "Close Deals", desc: "Get notified when leads respond." },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <span className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-100 mb-6">
                  {step.icon}
                </span>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-yellow-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-700 transition-all duration-300"
            onClick={() => setShowDateModal(true)}
            onKeyDown={(e) => e.key === 'Enter' && setShowDateModal(true)}
            aria-label="Schedule a free consultation"
          >
            Free Consultation
          </motion.button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-10">
              Start your digital journey today.
            </p>
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                aria-label="Email address"
              />
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-yellow-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-700 transition-all duration-300"
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
    </>
  );
}

function AboutPage() {
  return null; // Placeholder for About Page content
}

function ServicesPage({ services }) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Explore our innovative digital solutions.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-yellow-200 transition-all duration-300"
            role="article"
            aria-labelledby={`service-title-${index}`}
          >
            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-5">
              {service.icon}
            </div>
            <h3 id={`service-title-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;