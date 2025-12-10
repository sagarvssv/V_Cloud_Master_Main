import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaAws, FaCloud, FaUsers, FaGlobe } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { icon: <FaCloud />, value: 500, suffix: '+', label: 'Projects Delivered' },
    { icon: <FaAws />, value: 50, suffix: '+', label: 'AWS Certifications' },
    { icon: <FaUsers />, value: 100, suffix: '%', label: 'Client Satisfaction' },
    { icon: <FaGlobe />, value: 15, suffix: '+', label: 'MENA Countries' }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            vcloudmaster in Numbers
          </h2>
          <p className="text-xl opacity-90">
            Delivering excellence across the MENA region
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4 opacity-90">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Stats;