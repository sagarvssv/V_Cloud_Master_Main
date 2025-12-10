import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import videoSource from '../assets/vcloudhomepagevideo.mp4';


const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Auto-play prevented:", e);
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Video with Strong Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSource} type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
            alt="Cloud technology background"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Centered Content - Vertically centered */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Heading - Simplified */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-5xl font-bold text-white mb-4 leading-tight font-heading">
              Cloud & AI Solutions
            </h1>
            <div className="text-4xl md:text-3xl text-blue-100 font-medium font-heading">
              Powered by AWS Excellence
            </div>
          </motion.div>

          {/* Description - Shortened */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-blue-100 mb-10 font-body max-w-xl mx-auto leading-relaxed"
          >
            vcloudmaster delivers AWS cloud, IoT, and AI solutions 
            for enterprise digital transformation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              Get Started
              <FaChevronRight className="ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg border border-white/30 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Simple Stats - Moved below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-3 gap-6 max-w-md mx-auto mt-8"
          >
            {[
              { value: "500+", label: "Projects" },
              { value: "50+", label: "AWS Certified" },
              { value: "100%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-white mb-1 font-heading">{stat.value}</div>
                <div className="text-xs text-blue-200 font-medium font-body tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-5 h-8 border border-blue-300/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-blue-300 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;