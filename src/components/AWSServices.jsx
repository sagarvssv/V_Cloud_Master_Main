import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaDatabase, FaLock, FaSync, FaChartLine, FaShieldAlt, FaCogs, FaExpand } from 'react-icons/fa';

const AWSServices = () => {
  const services = [
    {
      icon: <FaCloud className="text-3xl" />,
      title: "Cloud Migration",
      description: "Seamless migration to AWS with zero downtime strategies",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Infrastructure",
      description: "Scalable and secure cloud infrastructure setup",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: "Database Solutions",
      description: "Managed database services and optimization",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaLock className="text-3xl" />,
      title: "Cloud Security",
      description: "End-to-end security and compliance solutions",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaSync className="text-3xl" />,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and DevOps",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Cost Optimization",
      description: "AWS cost management and optimization",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Compliance",
      description: "Industry compliance and governance",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaExpand className="text-3xl" />,
      title: "Cloud Adoption",
      description: "Enterprise cloud adoption strategies",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6 border border-blue-200">
            <FaCloud className="mr-2" />
            <span className="font-semibold text-sm tracking-wide">AWS ADVANCED TIER SERVICES</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Comprehensive AWS Cloud Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            As an AWS Advanced Tier Partner, we provide end-to-end cloud solutions 
            for migration, infrastructure, security, and optimization.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{service.title}</h3>
                <p className="text-gray-600 text-sm font-body">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">
              Why Choose vcloudmaster for AWS?
            </h3>
            
            <ul className="space-y-4">
              {[
                "50+ AWS Certified Professionals",
                "AWS Migration Competency Partner",
                "24/7 Managed Services & Support",
                "Proven Migration Methodology",
                "Cost Optimization Guarantee",
                "Security & Compliance Expertise"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <FaCogs className="text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-body">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 shadow-md"
            >
              View Our AWS Portfolio
            </motion.button>
          </motion.div>

          {/* Right Content - AWS Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-6 font-heading">AWS Competencies</h4>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Migration", level: "Advanced" },
                { name: "Security", level: "Expert" },
                { name: "Data & Analytics", level: "Advanced" },
                { name: "IoT", level: "Expert" },
                { name: "Machine Learning", level: "Advanced" },
                { name: "DevOps", level: "Advanced" }
              ].map((competency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm border border-blue-100"
                >
                  <div className="font-bold text-blue-600 mb-1 font-heading">{competency.name}</div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className={`h-2 rounded-full ${
                          competency.level === 'Expert' 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-full' 
                            : 'bg-gradient-to-r from-blue-400 to-blue-500 w-3/4'
                        }`}
                      ></div>
                    </div>
                    <span className="text-xs font-semibold text-blue-600">{competency.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-blue-600 font-heading">50+</div>
                  <div className="text-sm text-gray-600 font-body">AWS Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 font-heading">200+</div>
                  <div className="text-sm text-gray-600 font-body">AWS Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 font-heading">24/7</div>
                  <div className="text-sm text-gray-600 font-body">Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AWSServices;