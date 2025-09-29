import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage'
import Gallery from './components/Gallery'
import ContactPage from './components/ContactPage'
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
        return <Gallery onNavigate={handleNavigation} currentPage={currentPage} />
      case 'contact':
        return <ContactPage onNavigate={handleNavigation} currentPage={currentPage} />
      case 'about':
        return <AboutUsPage onNavigate={handleNavigation} currentPage={currentPage} />
      case 'lawn':
        return <LawnPage onNavigate={handleNavigation} currentPage={currentPage} />
      default:
        return <HomePage onNavigate={handleNavigation} currentPage={currentPage} />
    }
  }

  return (
    <>
      {renderPage()}
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
