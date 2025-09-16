import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import LandshaperNavbar from './components/LandshaperNavbar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import ContactHome from './components/ContactHome'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import ContactPage from './components/ContactPage'

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
      default:
        return (
          <>
            <HeroSection />
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
