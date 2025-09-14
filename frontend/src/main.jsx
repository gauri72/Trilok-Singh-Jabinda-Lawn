import React from 'react'
import { createRoot } from 'react-dom/client'
import LandshaperNavbar from './components/LandshaperNavbar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <LandshaperNavbar />
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <main style={{paddingTop: 0}}>
        {/* Additional sections will go here */}
      </main>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
