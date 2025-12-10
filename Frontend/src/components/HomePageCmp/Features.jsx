import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const features = [
  {
    img: assets.cloud_sever,
    title: "Amazon Web Services",
    desc: "Highly scalable cloud solutions to power your applications with unmatched reliability.",
  },
  {
    img: assets.ai_icon,
    title: "AWS Artificial Intelligence",
    desc: "Advanced automation and intelligent systems designed to enhance your business efficiency.",
  },
  {
    img: assets.iot,
    title: "AWS Internet of Things",
    desc: "Smart IoT integrations enabling seamless connectivity between devices and systems.",
  },
  {
    img: assets.cloud,
    title: "Cloud Migration",
    desc: "Transition your infrastructure to the cloud with minimal downtime and maximum efficiency.",
  },
  {
    img: assets.cost,
    title: "Cost Optimization",
    desc: "Reduce cloud expenditure while maintaining performance and scalability.",
  },
  {
    img: assets.devops,
    title: "DevOps Automation",
    desc: "Streamline development with automated CI/CD and infrastructure as code.",
  },
  {
    img: assets.customer,
    title: "Customer Support",
    desc: "Exceptional customer service and support for your cloud applications.",
  },
  {
    img: assets.analytics,
    title: "Data Analytics",
    desc: "Gain data insights using advanced analytics tools for better decision-making.",
  },
  {
    img: assets.app_development,
    title: "Application Development",
    desc: "Build scalable high-performance applications tailored to your business needs.",
  },
];

const Features = () => {
  const [showMore, setShowMore] = useState(false);

  const displayedItems = showMore ? features : features.slice(0, 6);

  return (
    <div className="w-full py-10 px-4 relative bg-gray-50">

      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center py-10">
        <h2 className="text-center text-3xl md:text-4xl w-full font-semibold text-gray-800 uppercase">
          Transform your business with our cloud expertise
        </h2>
        <p className="text-center text-xl md:text-lg w-full max-w-3xl text-gray-600">
          Transform your business with our cloud expertise and unlock scalable,
          secure, and high-performance solutions tailored to your growth.
          Modernize your infrastructure, reduce costs, and accelerate innovation
          with next-gen cloud technology.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {displayedItems.map((item, i) => (
          <motion.div
            key={i}
            className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4
                       transition-all duration-300 hover:shadow-2xl
                       bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Icon Wrapper */}
            <div className="relative w-20 h-20 flex items-center justify-center mx-auto">
              <div className="absolute inset-0 bg-blue-200 rounded-full transition-all duration-500 
                              group-hover:scale-130 group-hover:opacity-0" />
              <img src={item.img} alt={item.title} className="w-14 relative z-10" />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-center">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="w-full flex justify-center mt-10">
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="px-8 py-3 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%)] text-gray-500 font-semibold rounded-lg shadow-md 
                     hover:bg-[radial-gradient(70%_50%_at_50%_0%,rgba(0,163,255,0.7)_0,rgba(0,163,255,0)_20%)] cursor-pointer transition-all"
          whileTap={{ scale: 0.95 }}
        >
          {showMore ? "View Less" : "View More"}
        </motion.button>
      </div>

    </div>
  );
};

export default Features;
