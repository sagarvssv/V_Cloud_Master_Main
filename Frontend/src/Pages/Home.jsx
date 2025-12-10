import React from 'react'
import Hero from '../components/HomePageCmp/Hero'
import Features from '../components/HomePageCmp/Features'
import Vcloud from '../components/HomePageCmp/Vcloud'
import Partner from '../components/HomePageCmp/Partner'
import AwsCertifications from '../components/HomePageCmp/AwsCertifications'
import Ai from '../components/HomePageCmp/Ai'
import NumbersAchievements from '../components/HomePageCmp/NumbersAchievements'
import ContactSection from '../components/HomePageCmp/ContactSection'
import VerticalLine from '../components/HomePageCmp/VerticalLine'
import CaseStudies from '../components/HomePageCmp/CaseStudies'

const Home = () => {
  return (
    <div>   
      
        <Hero/>   
        <Features/>   
        <Vcloud/> 
        <Partner/>
        <AwsCertifications/>
        <VerticalLine/>
        <NumbersAchievements/>
        <CaseStudies/>
        <Ai/>
        <ContactSection/>
   
    </div>
  )
}

export default Home