import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import LandshaperNavbar from './components/LandshaperNavbar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import ContactPage from './components/ContactPage'
import ContactHome from './components/ContactHome'
import AboutUsPage from './components/AboutUsPage'
import LawnPage from './components/LawnPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'gallery':
        return <Gallery />
      case 'contact':
        return <ContactPage />
      case 'about':
        return <AboutUsPage />
      case 'lawn':
        return <LawnPage />
      default:
        return (
          <>
            <HeroSection onNavigate={handleNavigation} />
            <OurServices />
            <WhyChooseUs />
            <Testimonials />
            <ContactHome />
          </>
        )
    }
  }

  return (
    <>
      <LandshaperNavbar onNavigate={handleNavigation} />
      {renderPage()}
      <Footer />
      <main style={{paddingTop: 0}}>
        {/* Additional sections will go here */}
      </main>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
