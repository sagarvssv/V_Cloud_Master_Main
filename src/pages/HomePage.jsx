
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import AWSServices from '../components/AWSServices';
import IOTSection from '../components/IOTSection';
import AISection from '../components/AISection';
import Stats from '../components/Stats';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import AWSCertifications from '../components/AWSCertifications';
import ClientTestimonials from '../components/ClientTestimonials';

const HomePage = () => {
  return (
    <div>
     <Hero />
      <WhyChooseUs />
      <AWSServices />
      <IOTSection />
      <AISection />
      <AWSCertifications />
      <Stats />
      <ClientTestimonials /> 
      <Newsletter />
      <Footer /> 
    </div>
  )
}

export default HomePage
