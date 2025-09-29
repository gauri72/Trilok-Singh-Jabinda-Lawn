import React, { useEffect } from 'react'
import '../styles/about-us.css'
import WorkingProcess from './WorkingProcess'
import TeamSection from './TeamSection'
import GrowthSupportSection from './GrowthSupportSection'

export default function AboutUsPage() {
  useEffect(() => {
    document.body.classList.add('about-page-active')
    return () => {
      document.body.classList.remove('about-page-active')
    }
  }, [])

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="about-breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <a href="#" className="breadcrumb-item" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              Home
            </a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item active">About Us</span>
          </nav>
        </div>
      </section>

      <WorkingProcess />
      <GrowthSupportSection />
      <TeamSection />
    </div>
  )
}


