import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import CIrcle from "./CIrcle";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={assets.h_vc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* CIrcle placed in middle layer */}
      <div className="absolute inset-0 z-[10]  flex items-center justify-center pointer-events-none">
        <CIrcle />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-xl z-[1]"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "-20%", left: "-10%" }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl z-[1]"
        animate={{ x: [0, -120, 120, 0], y: [0, 60, -60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "-10%", right: "-10%" }}
      />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[5px] z-[3]"></div>

      {/* Content (TOP LAYER) */}
      <div className="relative z-[25] h-full flex flex-col items-center justify-center text-center text-white px-6">

        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Powering The Future With <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Cloud & Generative AI
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Build ultra-scalable cloud infrastructures and intelligent AI-powered
          experiences with next-gen technology.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-lg text-white hover:bg-white/10 transition">
            Learn More
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
