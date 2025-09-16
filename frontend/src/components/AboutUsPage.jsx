import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../styles/about-us.css'

export default function AboutUsPage() {
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

      {/* Introduction Section */}
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
                  We provide ongoing property maintenance which includes lawn mowing, fertilizing, spring and fall cleanups, de-thatching, aerating, seeding, mulching, edging, herbicide application, plant health care, snow plowing, pruning, and tree care and removal.
                </p>
                <p>
                  We also provide the design and installation of many landscape construction projects including walkways, steps, retaining walls, patios, veneer stone, planting, trans-planting, drainage systems, lawn renovation and installation, paver driveways, cobblestone edging, and excavation.
                </p>
              </div>

              <button className="intro-cta">
                GO TO ALL SERVICES
                <FaArrowRight className="cta-icon" />
              </button>
            </div>

            <div className="introduction-image">
              <img 
                src="/images/hero/gallery-secondary.jpg" 
                alt="Our professional gardening team" 
                className="team-photo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
