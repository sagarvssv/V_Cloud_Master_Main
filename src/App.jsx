import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import AWSServices from './components/AWSServices';
import IOTSection from './components/IOTSection';
import AISection from './components/AISection';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[var(--primary-500)]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* <Hero />
      <WhyChooseUs />
      <AWSServices />
      <IOTSection />
      <AISection />
      <Stats />
      <Newsletter />
      <Footer /> */}
      <HomePage />
    </div>
  );
}

export default App;