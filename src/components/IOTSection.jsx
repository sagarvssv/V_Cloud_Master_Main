import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaWifi, FaDatabase, FaShieldAlt, FaChartBar, FaCogs } from 'react-icons/fa';

const IOTSection = () => {
  const features = [
    { icon: <FaWifi />, title: "Device Connectivity" },
    { icon: <FaDatabase />, title: "Data Management" },
    { icon: <FaShieldAlt />, title: "Security" },
    { icon: <FaChartBar />, title: "Analytics" },
    { icon: <FaCogs />, title: "Automation" },
    { icon: <FaWifi />, title: "Real-time Monitoring" }
  ];

  // YouTube video ID from the link: https://youtu.be/o4Rr_lDFWfA
  const youtubeVideoId = "o4Rr_lDFWfA";
  const videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Video Container with Shadow and Border */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              {/* 16:9 Aspect Ratio Container */}
              <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  src={`${videoUrl}?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0`}
                  title="AWS IoT Core Solutions Demo"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Optional: Video Overlay for better appearance */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm font-medium font-body">
                AWS IoT Core Solutions Demonstration
              </p>
              <p className="text-gray-500 text-xs mt-1 font-body">
                Exclusive MENA partner implementation
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-accent-500 rounded-full opacity-20"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 text-accent-700 mb-6 border border-accent-200">
              <span className="font-semibold text-sm tracking-wide font-body">
                EXCLUSIVE AWS IOT PARTNER IN MENA
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading leading-tight">
              Complete AWS IoT Core Solutions
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 font-body leading-relaxed">
                As the exclusive AWS IoT partner across the Middle East and North Africa, 
                we provide end-to-end IoT infrastructure for smart cities, industrial 
                automation, and enterprise-scale connected solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
                    className="flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 font-heading">{feature.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-accent-500 to-purple-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 shadow-md font-body"
              >
                Explore IoT Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent-500 text-accent-600 hover:bg-accent-50 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 font-body"
              >
                Request Consultation
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-heading">AWS IoT Competency Partner</h4>
                  <p className="text-gray-600 text-sm font-body">
                    Certified expertise in IoT device management, data processing, and security
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IOTSection;
