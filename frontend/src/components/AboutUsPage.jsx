import React from 'react'
import { FaArrowRight, FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype } from 'react-icons/fa'
import '../styles/about-us.css'

export default function AboutUsPage() {
  const teamMembers = [
    { id: 1, name: 'Joshua Bevan', role: 'Gardner', image: '/images/gallery/gallery-1.jpg' },
    { id: 2, name: 'Victoria Hyde', role: 'Senior Farmer', image: '/images/gallery/gallery-2.jpg' },
    { id: 3, name: 'Louis Clayton', role: 'Gardner', image: '/images/gallery/gallery-3.jpg' },
    { id: 4, name: 'Emily Greenwood', role: 'Senior Farmer', image: '/images/gallery/gallery-4.jpg' },
    { id: 5, name: 'Daniel Hart', role: 'Gardner', image: '/images/gallery/gallery-5.jpg' },
    { id: 6, name: 'Ava Patel', role: 'Senior Farmer', image: '/images/gallery/gallery-6.jpg' }
  ]

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

      {/* Mission & Values Section */}
      <section className="about-values-section">
        <div className="container">
          <div className="values-header">
            <span className="values-label">What drives us</span>
            <h2 className="values-title">Our Mission & Values</h2>
            <p className="values-sub">
              We create memorable events by blending natural beauty with dependable planning.
              Our team focuses on care, commitment, and consistency in every celebration.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3 className="value-title">Care for Nature</h3>
              <p className="value-text">Sustainable grounds care, seasonal curation, and detail-first setups.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Client-first</h3>
              <p className="value-text">Clear communication, flexible layouts, and on-site coordination.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏱️</div>
              <h3 className="value-title">On-time Delivery</h3>
              <p className="value-text">Reliable schedules, vendor alignment, and smooth event flow.</p>
            </div>
          </div>

          <div className="values-stats">
            <div className="stat-item">
              <div className="stat-num">10+<span>yrs</span></div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">800+</div>
              <div className="stat-label">Events Hosted</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">4.8★</div>
              <div className="stat-label">Guest Rating</div>
            </div>
          </div>
        </div>
      </section>


      {/* Introduction Section removed as per request */}

      {/* Team Slider removed as per request */}
    </div>
  )
}
