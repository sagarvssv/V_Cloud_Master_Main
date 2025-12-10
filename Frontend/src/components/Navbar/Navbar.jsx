import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },

  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Web Development", path: "/services/cloudAdptation" },
      { name: "App Development", path: "/services/app-development" },
      { name: "UI/UX Design", path: "/services/Ai" },
      { name: "SEO Optimization", path: "/services/cloudMigration" },
    ],
  },

  { name: "Case Studies", path: "/case-studies" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];


  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 
      ${scrolled ? "bg-white/15 text-white shadow-md py-3 backdrop-blur-2xl" : "bg-transparent py-3"}`}
    >
      <div className="flex items-center justify-between px-6">

        {/* Logo */}
        <NavLink to="/">
          <img src={assets.logo} alt="logo" className="w-30 sm:w-28 md:w-32" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 relative">
  {navLinks.map((item) => (
    <div key={item.name} className="relative">

      {/* Parent Link */}
      <NavLink
        to={item.path}
        onMouseEnter={() => item.dropdown && setShowServices(true)}
        onMouseLeave={() => item.dropdown && setShowServices(false)}
        className={({ isActive }) =>
          `relative text-sm uppercase pb-1 duration-300
          ${scrolled ? "text-orange-400 hover:text-orange-500" : "text-white hover:text-orange-400"}
          ${isActive ? "text-orange-600 font-medium" : ""}`
        }
      >
        {item.name}
      </NavLink>

      {/* Dropdown */}
      {item.dropdown && showServices && (
        <motion.div
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute left-0 mt-2 bg-white text-gray-700 
                     shadow-lg rounded-lg w-48 z-50 p-3 space-y-3"
        >
          {item.dropdown.map((sub) => (
            <NavLink
              key={sub.name}
              to={sub.path}
              className="block hover:text-blue-600 duration-200"
            >
              {sub.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </div>
  ))}
</div>




        <button className="px-4 py-2 hidden md:block bg-gradient-to-bl from-[#86efac] via-[#fcd34d] to-[#f9a8d4] text-white rounded-md hover:bg-blue-700 duration-300">
          Book Demo
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(true)}>
          <RiMenu3Fill className="text-4xl text-white" />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl p-6 z-50"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl ">Menu</h2>

              <button className="text-4xl" onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>

           <div className="flex flex-col gap-6">
  {navLinks.map((item) => (
    <div key={item.name}>
      <div className="flex justify-between items-center">
        <NavLink
          to={item.path}
          onClick={() => {
            if (!item.dropdown) setOpen(false);
          }}
          className="text-gray-700 text-lg hover:text-blue-600 duration-300"
        >
          {item.name}
        </NavLink>

        {/* Toggle arrow for dropdown items */}
        {item.dropdown && (
          <button 
            onClick={() => setShowServices((prev) => !prev)}
            className="text-xl"
          >
            {showServices ? "−" : "+"}
          </button>
        )}
      </div>

      {/* Dropdown items */}
      {item.dropdown && showServices && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="ml-4 mt-2 flex flex-col gap-3"
        >
          {item.dropdown.map((sub) => (
            <NavLink
              key={sub.name}
              to={sub.path}
              onClick={() => setOpen(false)}
              className="text-gray-600 text-md hover:text-blue-600 duration-200"
            >
              {sub.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </div>
  ))}
</div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
