import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
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
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-80 h-80 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-40 h-40 text-yellow-400"
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
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-400 rounded-full opacity-30"></div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="relative inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black">
                About <span className="text-yellow-400">Us</span>
              </h2>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-yellow-400 rounded-full w-32" />
            </div>
            <div className="space-y-6 max-w-2xl mx-auto md:mx-0">
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a <span className="text-yellow-400 font-semibold">forward-thinking organization</span>, established on 7 August 2024, dedicated to promoting digital marketing excellence and innovative educational initiatives. With a strong foundation in both technology and strategy, we help brands grow online while supporting learning platforms that prepare individuals for the future.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our dual focus on marketing and education allows us to create <span className="text-yellow-400 font-semibold">impactful campaigns</span> and projects that not only drive engagement but also foster knowledge and skill development. From startups to institutions, we partner with clients to deliver customized solutions that make a measurable difference.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Specializing in brand promotion, brand building, and strategic marketing growth, we leverage cutting-edge digital marketing platforms and social media to maximize visibility and audience connection. Whether it's enhancing brand identity or driving user acquisition, we bring results-driven innovation to every project.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a team of <span className="text-yellow-400 font-semibold">passionate professionals</span>, we combine creativity, data-driven insights, and a deep understanding of digital trends to fuel growth and transformation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At the heart of everything we do is a commitment to <span className="text-yellow-400 font-semibold">innovation, integrity, and results</span>—empowering our partners to thrive in a digital-first world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection; 