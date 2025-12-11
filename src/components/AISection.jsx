import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaChartLine, FaCogs, FaMagic, FaArrowRight, FaPlay } from 'react-icons/fa';

const AISection = () => {
  const aiServices = [
    {
      icon: <FaBrain />,
      title: "AI Strategy",
      description: "Custom AI roadmap and planning",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaChartLine />,
      title: "Predictive Analytics",
      description: "Data insights and forecasting",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <FaCogs />,
      title: "Automation",
      description: "Intelligent process automation",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: <FaMagic />,
      title: "Generative AI",
      description: "Content creation and innovation",
      color: "from-pink-600 to-pink-700"
    }
  ];

  // YouTube video ID
  const youtubeVideoId = "usFIb9aEd1U";
  const videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <section className="section-padding bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 mb-6 border border-purple-200">
            <FaRobot className="mr-2" />
            <span className="font-semibold text-sm tracking-wide">GENERATIVE AI SOLUTIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Transform Your Business with AI
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Leverage cutting-edge AI and Generative AI to automate processes, 
            enhance customer experiences, and drive innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content - Clean Icons Layout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading">
                  Our AI Expertise
                </h3>
                
                {/* Cleaner Icons Grid */}
                <div className="space-y-8">
                  {aiServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-purple-50 transition-all duration-200"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1 font-heading">{service.title}</h4>
                        <p className="text-gray-600 text-sm font-body">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Text Content Below Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-gray-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 font-heading">Why Choose Our AI Solutions?</h4>
                  <div className="space-y-3">
                    {[
                      "50+ successful AI implementations",
                      "AWS Machine Learning Competency",
                      "Custom AI model development",
                      "End-to-end AI integration",
                      "24/7 AI model monitoring",
                      "Continuous optimization"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="font-body text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Button in Left Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg">
                  Explore AI Services
                  <FaArrowRight className="ml-2" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - YouTube Video with Content Below */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col overflow-hidden">
              {/* YouTube Video */}
              <div className="relative">
                <div className="relative rounded-t-2xl overflow-hidden">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={`${videoUrl}?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0`}
                      title="Generative AI Solutions by vcloudmaster"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center text-white">
                    <FaPlay className="mr-2" />
                    <span className="font-medium">Generative AI in Action</span>
                  </div>
                </div>
              </div>

              {/* Content Below Video */}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  See Our AI Solutions in Action
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 font-body">
                    Watch how vcloudmaster implements cutting-edge Generative AI solutions 
                    to transform businesses across various industries.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                      What You'll Learn From This Video:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="font-body">Real-world AI implementation examples</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="font-body">Business transformation case studies</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="font-body">AI-powered automation workflows</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="font-body">ROI and business impact analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 font-heading">40%</div>
                      <div className="text-sm text-gray-600 font-body">Cost Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-pink-50 rounded-lg">
                      <div className="text-2xl font-bold text-pink-600 font-heading">3x</div>
                      <div className="text-sm text-gray-600 font-body">Productivity Gain</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button in Right Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="px-8 pb-8"
              >
                <button className="w-full border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300">
                  Schedule AI Demo
                  <FaArrowRight className="ml-2" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
