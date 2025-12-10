import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaAws, FaCloud, FaRobot } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar background
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'AWS Cloud Services', icon: <FaCloud className="mr-2" /> },
    { name: 'AWS IoT Solutions', icon: <HiLightningBolt className="mr-2" /> },
    { name: 'Generative AI', icon: <FaRobot className="mr-2" /> },
    { name: 'AWS Advanced Tier', icon: <FaAws className="mr-2" /> },
    { name: 'Cloud Migration', icon: <FaCloud className="mr-2" /> },
    { name: 'Cloud Security', icon: <FaCloud className="mr-2" /> },
  ];

  const moreItems = [
    'Blog',
    'Case Studies',
    'Testimonials',
    'Careers',
    'Partners',
    'Events',
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="flex items-center">
              <a href='/'>
                <img 
                  src="https://www.vcloudmaster.com/images/vcloud-logo-3-2048x926-removebg-preview.png.webp" 
                  alt="vcloudmaster logo" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.parentNode;
                    fallback.innerHTML = `
                      <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-xl">V</span>
                      </div>
                      <span class="text-2xl font-bold text-gray-900 font-heading ml-2">vcloudmaster</span>
                    `;
                  }}
                />
              </a>
            </div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              <a href="#" className={`font-medium font-body transition-colors duration-200 ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
              }`}>
                Home
              </a>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`font-medium flex items-center font-body transition-colors duration-200 ${
                    scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  Services <FaChevronDown className="ml-1 text-sm" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-50"
                    >
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          {service.icon}
                          {service.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#" className={`font-medium font-body transition-colors duration-200 ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
              }`}>
                About
              </a>
              <a href="#" className={`font-medium font-body transition-colors duration-200 ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
              }`}>
                Contact
              </a>
              
              {/* More Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setMoreOpen(true)}
                  onMouseLeave={() => setMoreOpen(false)}
                  className={`font-medium flex items-center font-body transition-colors duration-200 ${
                    scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  More <FaChevronDown className="ml-1 text-sm" />
                </button>
                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseEnter={() => setMoreOpen(true)}
                      onMouseLeave={() => setMoreOpen(false)}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 z-50"
                    >
                      {moreItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* CTA Button - Right Side */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2.5 rounded-full font-semibold font-body hover:shadow-lg transition-all duration-300 shadow-md"
            >
              Get Free Consultation
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-lg font-body">Home</a>
                
                <div className="px-3 py-2">
                  <div className="font-medium text-gray-700 mb-2 font-body">Services</div>
                  <div className="pl-4 space-y-2">
                    {services.map((service, index) => (
                      <a key={index} href="#" className="block text-gray-600 py-2 hover:text-primary-600 font-body">
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-lg font-body">About</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-lg font-body">Contact</a>
                
                <div className="px-3 py-2">
                  <div className="font-medium text-gray-700 mb-2 font-body">More</div>
                  <div className="pl-4 space-y-2">
                    {moreItems.map((item, index) => (
                      <a key={index} href="#" className="block text-gray-600 py-2 hover:text-primary-600 font-body">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold font-body shadow-md"
                >
                  Get Free Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;