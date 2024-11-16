import React from 'react'
import Header from './MainComponents/Header'
import Hero from './MainComponents/Hero'
import About from './MainComponents/About'
import Skills from './MainComponents/Skills'
import Services from './MainComponents/Service'
import Projects from './MainComponents/Project'
import Testimonials from './MainComponents/Feedback'
import Contact from './MainComponents/Contact'
import Footer from './MainComponents/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
