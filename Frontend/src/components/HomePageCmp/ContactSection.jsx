import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

export default function ContactSection() {
  return (
    <section className="w-full py-16 px-5 bg-white/10 backdrop-blur-3xl border border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={assets.contact}
            alt="Contact Illustration"
            className="w-60 sm:w-72 md:w-80 lg:w-[350px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-lg w-full"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            Contact Us
          </h2>

          <p className="text-gray-700 text-center mb-6 text-sm sm:text-base">
            We would love to hear from you!
          </p>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none text-gray-800 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none text-gray-800 w-full"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none text-gray-800 w-full"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gray-900 text-white rounded-xl shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
