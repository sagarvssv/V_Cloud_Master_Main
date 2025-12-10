import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { 
  FaStar, 
  FaQuoteLeft,
  FaBuilding,
  FaIndustry,
  FaGlobeAmericas
} from 'react-icons/fa';

// Import Swiper styles - scoped to this component
import 'swiper/css';
import 'swiper/css/effect-cards';

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechVision Inc.",
      company: "FinTech",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvTbL5WSUuKYddpZI-SXU6JbudFjCtFCGuw&s",
      quote: "Their AWS expertise transformed our infrastructure. We reduced costs by 40% while improving performance. The team's certified professionals delivered beyond expectations.",
      rating: 5,
      project: "Cloud Migration & Optimization"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Director of Engineering, GlobalRetail",
      company: "E-commerce",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      quote: "The AWS Solutions Architect Professional certification held by their lead consultant gave us confidence in their ability to design our scalable e-commerce platform.",
      rating: 5,
      project: "Scalable E-commerce Platform"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Head of Data Science, HealthAnalytics",
      company: "Healthcare",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      quote: "Their AWS Data Engineer certified team built a robust data pipeline that handles millions of healthcare records securely and efficiently.",
      rating: 4,
      project: "Healthcare Data Lake"
    },
    {
      id: 4,
      name: "David Park",
      role: "VP Operations, MediaStream",
      company: "Media & Entertainment",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      quote: "Leveraging their AWS CloudFront competency, we improved our global content delivery speeds by 300%. Exceptional work by certified experts.",
      rating: 5,
      project: "Global CDN Implementation"
    }
  ];

  const industries = [
    { icon: <FaBuilding />, name: "Finance", count: 15 },
    { icon: <FaIndustry />, name: "Manufacturing", count: 12 },
    { icon: <FaGlobeAmericas />, name: "E-commerce", count: 22 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Scoped Swiper styles container */}
      <style jsx>{`
        /* Scoped Swiper styles to prevent affecting other sections */
        .testimonials-swiper .swiper {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 50px;
          overflow: visible !important;
        }
        
        .testimonials-swiper .swiper-slide {
          width: 300px;
          height: auto;
          background: transparent;
          border-radius: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible !important;
        }
        
        /* Ensure Swiper doesn't affect layout */
        .testimonials-swiper .swiper-wrapper {
          box-sizing: border-box;
          display: flex;
          align-items: stretch;
          height: auto;
        }
        
        /* Prevent Swiper from creating global overflow */
        .testimonials-swiper {
          contain: layout style paint;
          isolation: isolate;
        }
        
        /* Reset any global Swiper styles that might affect other sections */
        .swiper-button-next,
        .swiper-button-prev,
        .swiper-pagination {
          display: none !important;
        }
      `}</style>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry leaders who trust our AWS-certified expertise to drive their digital transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industries We Serve</h3>
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600 text-xl">
                        {industry.icon}
                      </div>
                      <span className="font-medium text-gray-700">{industry.name}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {industry.count}+ Clients
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Trust & Recognition</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Client Satisfaction</span>
                  <span className="font-bold">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Projects Delivered</span>
                  <span className="font-bold">200+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Retention Rate</span>
                  <span className="font-bold">95%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle Column - Testimonial Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative testimonials-swiper">
              {/* Card Swiper - Now properly scoped */}
              <Swiper
                modules={[Autoplay, EffectCards]}
                effect="cards"
                grabCursor={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="testimonials-swiper"
                style={{
                  overflow: 'visible',
                  width: '100%',
                  height: 'auto',
                  margin: '0 auto'
                }}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="!flex !items-stretch">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full flex flex-col"
                      style={{ minHeight: '400px' }}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full">
                              <FaQuoteLeft className="text-xs" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                            <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                              {testimonial.company}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-lg ${
                                i < testimonial.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 text-lg italic mb-6 leading-relaxed flex-grow">
                        "{testimonial.quote}"
                      </p>

                      <div className="border-t pt-6">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-sm">Project:</span>
                          <span className="font-semibold text-blue-600">{testimonial.project}</span>
                        </div>
                        <div className="mt-4 flex gap-2 flex-wrap">
                          {['AWS Certified', '24/7 Support', 'Cost Optimized'].map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Dots - Custom, not Swiper's */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;