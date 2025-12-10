import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated with Cloud Innovation
              </h3>
              <p className="text-gray-700">
                Subscribe to our newsletter for the latest in AWS, IoT, and AI trends, 
                case studies, and exclusive insights.
              </p>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all ${
                    submitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg'
                  }`}
                >
                  {submitted ? (
                    <>
                      <FaCheck />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Subscribe Now</span>
                    </>
                  )}
                </motion.button>
                
                <p className="text-sm text-gray-600 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;