import React from "react";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Legacy App to AWS Migration",
      description:
        "Migrated a 12-year-old monolithic application into scalable AWS microservices, reducing downtime by 87% and improving performance by 3x.",
      icon: "☁️",
    },
    {
      title: "On-Prem to Azure Cloud Shift",
      description:
        "Helped an enterprise move 60+ servers from on-prem datacenter to Azure Cloud with zero data loss, achieving 45% cost optimization.",
      icon: "🚀",
    },
    {
      title: "Google Cloud Hybrid Migration",
      description:
        "Built a hybrid cloud model integrating GCP and on-prem VMs enabling secure CI/CD pipelines and real-time data streaming.",
      icon: "🔐",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Cloud Migration Case Studies
        </h2>
        <p className="text-gray-600 mt-3">
          Real business transformations powered by modern cloud technologies.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {caseStudies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-7 rounded-2xl shadow-lg bg-white border border-gray-200 
                       hover:shadow-2xl cursor-pointer backdrop-blur-xl 
                       transition-all duration-300"
          >
            {/* Icon Animation */}
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl mb-4"
            >
              {item.icon}
            </motion.div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              {item.description}
            </p>

            <motion.button
              whileHover={{ x: 5 }}
              className="text-blue-600 font-semibold"
            >
              Read More →
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
