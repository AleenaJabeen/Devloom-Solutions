import React from 'react'
import MainSection from './MainSection'
import ContactForm from './ContactForm'
import GetInTouch from './GetInTouch'
import ContactUs from './ContactUs'
import InnovateStrip from './InnovateStrip'
// import Services from './Services'

function Contact() {
  return (
    <>
      <MainSection />
      <ContactForm />
      <ContactUs/>
      {/* <Services/> */}
      <GetInTouch/>
      <InnovateStrip/>
    </>
  )
}

export default Contact