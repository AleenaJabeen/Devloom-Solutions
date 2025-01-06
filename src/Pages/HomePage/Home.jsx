import React from 'react'
import HeroSection from './HeroSection'
import FieldStripSection from './FieldStripSection'
import LatestProjects from './LatestProjects'
import Testimonials from './Testimonials';
import About from './About';
import DesignProcess from './DesignProcess';
import ServicesHome from './ServicesHome';
import SignUp from './SignUp';
import NewsUpdates from './NewsUpdates';

function Home() {
  return (
    <>
    <HeroSection/>
    <FieldStripSection/>
    <About/>
    <ServicesHome/>
    <DesignProcess/>
    <LatestProjects/>
    <Testimonials/>
    <SignUp/>
    <NewsUpdates/>

      
    </>
  )
}

export default Home
