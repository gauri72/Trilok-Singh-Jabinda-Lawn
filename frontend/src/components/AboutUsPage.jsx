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

      {/* Introduction (Overview) Section */}
      <section className="introduction-section">
        <div className="container">
          <div className="introduction-grid">
            <div className="introduction-content">
              <div className="intro-header">
                <div className="intro-accent"></div>
                <div className="intro-text">
                  <span className="intro-label">Welcome to our Company</span>
                  <h2 className="intro-title">Know About Us</h2>
                </div>
              </div>

              <div className="intro-paragraphs">
                <p>
                  We are a full-service events lawn and landscaping venue focused on delivering memorable experiences. From weddings and receptions to corporate functions, our dedicated team handles planning, setup, and on-site coordination while maintaining beautiful, guest-ready grounds year-round.
                </p>
                <p>
                  Our services include lawn care and seasonal maintenance, custom décor layouts, lighting, staging, and vendor coordination. We blend nature with hospitality so your occasion runs smoothly and looks stunning.
                </p>
              </div>

              <button className="intro-cta">
                EXPLORE SERVICES
                <FaArrowRight className="cta-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section removed as per request */}

      {/* Team Slider removed as per request */}
    </div>
  )
}
