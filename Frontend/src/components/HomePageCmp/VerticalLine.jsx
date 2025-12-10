import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Cloud, Shield, Workflow, Rocket } from "lucide-react";

const VerticalLine = () => {
  const steps = [
    {
      icon: <Cpu size={26} />,
      title: "AI Processing",
      desc: "Real-time AI decision systems with predictive intelligence.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Cloud size={26} />,
      title: "Cloud Integration",
      desc: "Seamless orchestration across cloud environments.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Shield size={26} />,
      title: "Security Layer",
      desc: "Enterprise-grade encrypted and monitored frameworks.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Workflow size={26} />,
      title: "Automation Engine",
      desc: "Accelerated workflow automation with smart triggers.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Rocket size={26} />,
      title: "Deployment",
      desc: "Zero-downtime deployment pipelines.",
      color: "from-yellow-500 to-orange-400",
    },
  ];

  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setLineHeight(containerRef.current.scrollHeight);
    }
  }, []);

  return (
    <section className="w-full bg-[#f9fafb] flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold text-slate-800 text-center">
        Why Choose Us
      </h2>
      <p className="text-gray-500 text-center mt-3 max-w-xl">
        Premium AI-driven infrastructure built for enterprise cloud platforms.
      </p>

      <div ref={containerRef} className="relative w-full max-w-6xl mt-20">

        {/* FULL HEIGHT CENTER LINE — ALWAYS CONNECTS DOTS */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[4px]
          bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"
          style={{ height: lineHeight }}
        />

        {/* Steps */}
        <div className="flex flex-col gap-28 relative z-10 mt-5">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-start 
                  ${isLeft ? "md:justify-start justify-center" : "md:justify-end justify-center"}
                `}
              >
                {/* Node — ORIGINAL STYLE PRESERVED */}
                <div
                  className={`
                    w-16 h-16 rounded-full
                    bg-gradient-to-br ${step.color}
                    flex items-center justify-center shadow-xl
                    absolute top-0 left-1/2 -translate-x-1/2
                    md:${isLeft ? "left-[calc(50%-2rem)]" : "left-auto right-[calc(50%-2rem)]"}
                  `}
                >
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-ping"></div>
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
                  <div className="text-white z-10">{step.icon}</div>
                </div>

                {/* Text Box */}
                <div
                  className={`
                    bg-white p-5 rounded-xl shadow-md border border-gray-100
                    w-full md:w-[45%]
                    mt-20 md:mt-0
                    ${isLeft
                      ? "md:ml-[55%] text-left text-center md:text-left"
                      : "md:mr-[55%] text-right text-center md:text-right"
                    }
                  `}
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 mt-1">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VerticalLine;
