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

      {/* Our Trained Staff (Team Slider) */}
      <section className="team-slider-section">
        <div className="container">
          <div className="team-slider-header">
            <span className="team-small">Meet our Team</span>
            <h2 className="team-big">Our Trained Staff</h2>
          </div>

          <div className="team-slider-wrap">
            <button className="team-nav prev" aria-label="Previous" onClick={() => {
              const scroller = document.querySelector('.team-cards');
              if (scroller) scroller.scrollBy({ left: -320, behavior: 'smooth' })
            }}>◀</button>

            <div className="team-cards" role="list">
              {teamMembers.map((m) => (
                <div key={m.id} className="team-card-v2" role="listitem">
                  <div className="team-card-photo">
                    <img src={m.image} alt={m.name} />
                  </div>
                  <div className="team-card-social">
                    <a href="#" aria-label="Facebook">f</a>
                    <a href="#" aria-label="Twitter">t</a>
                    <a href="#" aria-label="LinkedIn">in</a>
                  </div>
                  <div className="team-card-info">
                    <div className="team-card-name">{m.name}</div>
                    <div className="team-card-role">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="team-nav next" aria-label="Next" onClick={() => {
              const scroller = document.querySelector('.team-cards');
              if (scroller) scroller.scrollBy({ left: 320, behavior: 'smooth' })
            }}>▶</button>
          </div>

          <div className="team-dots">
            <button className="dot" aria-label="slide" />
            <button className="dot active" aria-label="slide" />
          </div>
        </div>

        <button className="scroll-to-top" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      </section>
    </div>
  )
}
