import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaAward, FaGlobeAmericas, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward className="text-3xl" />,
      title: "AWS Advanced Tier Partner",
      description: "Highest level of AWS partnership with proven expertise",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Exclusive MENA Coverage",
      description: "Sole AWS IoT partner across Middle East & North Africa",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "50+ AWS Certifications",
      description: "Highly certified team ensuring best practices",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 Premium Support",
      description: "Round-the-clock expert support for your infrastructure",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose vcloudmaster?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another cloud provider. We're your strategic technology partner 
            in digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* AWS Competencies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AWS Competencies & Certifications
              </h3>
              <p className="text-gray-700 mb-6">
                As an AWS Advanced Tier Partner, we maintain the highest standards 
                with multiple AWS competencies and a team of certified professionals.
              </p>
              <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center">
                View All Certifications <FaAward className="ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {['Migration', 'Security', 'Data & Analytics', 'IoT', 'AI/ML', 'DevOps'].map((comp, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="font-bold text-primary-600">{comp}</div>
                  <div className="text-sm text-gray-600">AWS Competency</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;