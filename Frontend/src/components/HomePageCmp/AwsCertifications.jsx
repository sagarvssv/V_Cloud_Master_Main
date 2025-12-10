import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
  { img: "https://www.vcloudmaster.com/images/AWS-Certified-AI-Practitioner_badge_150x150.bb2bb1cae960f5ee8b93d3e2ccc9dd64bff29180.webp" },
  { img: "https://www.vcloudmaster.com/images/AWS-Certified-Solutions-Architect-Associate_badge_150x150.e359ae4a6d4d82c3e31d4f9104c8d389b56a2.webp" },
  { img: "https://www.vcloudmaster.com/images/cloudfront.png" },
  { img: "https://www.vcloudmaster.com/images/AWS-Certified-Data-Engineer-Associate_badge_150x150.c957987af8e4ecddaf04e6ab06eb92241c439c9e.webp" },
  { img: "https://www.vcloudmaster.com/images/advanced.png" },

  { img: "https://www.vcloudmaster.com/images/AWS-Certified-AI-Practitioner_badge_150x150.bb2bb1cae960f5ee8b93d3e2ccc9dd64bff29180.webp" },
  { img: "https://www.vcloudmaster.com/images/AWS-Certified-Solutions-Architect-Associate_badge_150x150.e359ae4a6d4d82c3e31d4f9104c8d389b56a2.webp" },
  { img: "https://www.vcloudmaster.com/images/cloudfront.png" },
  { img: "https://www.vcloudmaster.com/images/AWS-Certified-Data-Engineer-Associate_badge_150x150.c957987af8e4ecddaf04e6ab06eb92241c439c9e.webp" },
  { img: "https://www.vcloudmaster.com/images/advanced.png" },
   { img: "https://www.vcloudmaster.com/images/AWS-Certified-AI-Practitioner_badge_150x150.bb2bb1cae960f5ee8b93d3e2ccc9dd64bff29180.webp" },
  { img: "https://www.vcloudmaster.com/images/AWS-Certified-Solutions-Architect-Associate_badge_150x150.e359ae4a6d4d82c3e31d4f9104c8d389b56a2.webp" },
  { img: "https://www.vcloudmaster.com/images/cloudfront.png" },
  { img: "https://www.vcloudmaster.com/images/AWS-Certified-Data-Engineer-Associate_badge_150x150.c957987af8e4ecddaf04e6ab06eb92241c439c9e.webp" },
  { img: "https://www.vcloudmaster.com/images/advanced.png" },
   { img: "https://www.vcloudmaster.com/images/AWS-Certified-AI-Practitioner_badge_150x150.bb2bb1cae960f5ee8b93d3e2ccc9dd64bff29180.webp" },
  { img: "https://www.vcloudmaster.com/images/AWS-Certified-Solutions-Architect-Associate_badge_150x150.e359ae4a6d4d82c3e31d4f9104c8d389b56a2.webp" },
  { img: "https://www.vcloudmaster.com/images/cloudfront.png" },
  { img: "https://www.vcloudmaster.com/images/AWS-Certified-Data-Engineer-Associate_badge_150x150.c957987af8e4ecddaf04e6ab06eb92241c439c9e.webp" },
  { img: "https://www.vcloudmaster.com/images/advanced.png" },
];

const ITEMS_PER_SLIDE = 5;

const AwsCertifications = () => {
  const [index, setIndex] = useState(0);

  // Generate slides (each slide contains 5 items)
  const slides = [];
  for (let i = 0; i < certifications.length; i += ITEMS_PER_SLIDE) {
    slides.push(certifications.slice(i, i + ITEMS_PER_SLIDE));
  }

  // Auto Slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full py-16 bg-[#f9fafb] flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
        Our AWS Competencies & Certifications
      </h2>

      <p className="text-gray-600 text-center mt-3 max-w-2xl">
        We work with top industry leaders to deliver exceptional cloud solutions.
      </p>

      {/* Slider */}
      <div className="w-full max-w-6xl mt-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-4 place-items-center"
          >
            {slides[index].map((item, i) => (
              <motion.img
                key={i}
                src={item.img}
                className="w-24 md:w-28 object-contain"
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === index ? "bg-orange-600" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AwsCertifications;
