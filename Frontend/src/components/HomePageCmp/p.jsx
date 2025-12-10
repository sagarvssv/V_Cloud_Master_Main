import React from "react";
import { Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function AutoScalingSection() {
  return (
    <section className="w-full min-h-screen bg-black/20 text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20">

      {/* LEFT CONTENT */}
      <motion.div 
        className="max-w-xl space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-4xl text-slate-800 lg:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          AI Auto-Scaling
        </motion.h2>

        <motion.p
          className="text-gray-500 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Experience next-gen AI-powered auto-scaling that predicts demand,
          optimizes resources, and keeps your infrastructure lightning-fast with
          zero downtime.
        </motion.p>

        <motion.ul 
          className="space-y-4 mt-6"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: { opacity: 0, x: -20 },
            show: { 
              opacity: 1, 
              x: 0,
              transition: {
                staggerChildren: 0.25
              }
            }
          }}
        >
          {[
            "Cost optimization up to 40%",
            "Zero manual intervention",
            "Predictive AI scaling algorithms",
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="flex items-start gap-3"
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-500">✔</span>
              <p className="text-gray-600">{item}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="mt-8 px-6 py-3 bg-slate-600 hover:bg-slate-700 rounded-full font-medium flex items-center gap-2 w-fit transition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Learn More →
        </motion.button>
      </motion.div>

      {/* RIGHT ANIMATION */}
      <motion.div 
        className="relative w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-[420px] h-[420px] flex items-center justify-center">

          {/* SOFT GLOW BACKGROUND */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-3xl animate-pulse"></div>

          {/* OUTER RING */}
          <div className="absolute inset-0 rounded-full border-[3px] border-dotted border-cyan-400/40 animate-spin-slow"></div>

          {/* MID RING */}
          <div className="absolute inset-8 rounded-full border-[3px] border-dotted border-purple-500/40 animate-spin-reverse"></div>

          {/* INNER RING */}
          <div className="absolute inset-14 rounded-full border border-cyan-300/30 blur-[1px] animate-spin-slower"></div>

          {/* ROTATING ARC */}
          <div className="absolute w-[260px] h-[260px] rounded-full border-4 border-transparent border-t-cyan-400/80 animate-spin-fast"></div>

          {/* PULSE WAVES */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-cyan-400/20 animate-pulse-wave"></div>
          <div className="absolute w-[310px] h-[310px] rounded-full border border-purple-400/10 animate-pulse-wave delay-300"></div>

          {/* CENTER AI NODE WITH MOTION */}
          <motion.div
            className="w-48 h-48 rounded-full bg-slate-900 backdrop-blur-md shadow-3xl shadow-cyan-300/40 flex flex-col items-center justify-center text-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <span className="text-4xl font-bold text-cyan-300">AI</span>
            <Brain size={38} className="text-cyan-300 mt-2" />
            <p className="text-sm text-slate-900 mt-1 tracking-wide">
              Auto-Scaling Active
            </p>
          </motion.div>

          {/* FLOATING PARTICLES */}
          <span className="absolute -right-6 top-1/3 w-4 h-4 rounded-full bg-cyan-900 animate-float"></span>
          <span className="absolute left-6 bottom-12 w-3 h-3 rounded-full bg-purple-900 animate-float delay-200"></span>
          <span className="absolute right-10 bottom-20 w-2 h-2 rounded-full bg-cyan-900 animate-float delay-500"></span>

          {/* ANIMATION KEYFRAMES */}
          <style jsx>{`
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes spin-reverse {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
            @keyframes spin-slower {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            @keyframes spin-fast {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes pulse-wave {
              0% { transform: scale(1); opacity: 0.3; }
              50% { transform: scale(1.1); opacity: 0.5; }
              100% { transform: scale(1); opacity: 0.3; }
            }
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
            .animate-spin-slow { animation: spin-slow 18s linear infinite; }
            .animate-spin-reverse { animation: spin-reverse 20s linear infinite; }
            .animate-spin-slower { animation: spin-slower 26s linear infinite; }
            .animate-spin-fast { animation: spin-fast 3s linear infinite; }
            .animate-pulse-wave { animation: pulse-wave 4s ease-in-out infinite; }
            .animate-float { animation: float 4s ease-in-out infinite; }
          `}</style>
        </div>
      </motion.div>

    </section>
  );
}
