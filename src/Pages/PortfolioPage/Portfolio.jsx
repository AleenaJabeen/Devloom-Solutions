import React from 'react'
import MainHeading from './MainHeading'
import AppFeature from './AppFeature'
import OurProjects from './OurProjects';
import AgendaBuilder from './AgendaBuilder'
import Features from './Features'
import NewsletterSignup from './NewsletterSignup'

function Portfolio() {
  return (
    <>
      <MainHeading />
      <AppFeature />
      <OurProjects/>
      <AgendaBuilder />
      <Features />
      <NewsletterSignup />
    </>
  )
}

export default Portfolio;