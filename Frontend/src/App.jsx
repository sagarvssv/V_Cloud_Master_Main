import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Careers from "./Pages/Careers";
import Blog from "./Pages/Blog";
import CaseStudies from "./Pages/CaseStudies";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/HomePageCmp/Footer";
import Loader from "./components/Loading/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // loader time (adjust as required)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {loading && <Loader />}
      <Navbar loading={loading} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
