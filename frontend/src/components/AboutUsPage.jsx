import React, { useEffect } from 'react'
import '../styles/about-us.css'
import LandshaperNavbar from './LandshaperNavbar'
import Footer from './Footer'
import { FaSeedling, FaFlask, FaTint } from 'react-icons/fa'
import { FaHeadset } from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function AboutUsPage({ onNavigate }) {
  useEffect(() => {
    document.body.classList.add('about-page-active')
    return () => {
      document.body.classList.remove('about-page-active')
    }
  }, [])

  return (
    <div className="about-page">
      <LandshaperNavbar onNavigate={onNavigate} />

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

      {/* Working Process (inlined) */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <span className="process-label">Our Working Process</span>
            <h2 className="process-title">How Does We Works.</h2>
          </div>

          <div className="process-arrows" aria-hidden />

          <div className="process-grid">
            {[{
              id: 1, icon: FaSeedling, title: 'Make Gardening', text: 'Planning, site prep and concept to match your event style.'
            }, {
              id: 2, icon: FaFlask, title: 'Soil Test & Making', text: 'Care routines and seasonal treatment for lush, guest‑ready lawns.'
            }, {
              id: 3, icon: FaTint, title: 'Garden Watering', text: 'Irrigation, watering and day‑of care to keep things fresh.'
            }].map((s) => (
              <div key={s.id} className="process-card">
                <div className="process-circle">
                  <div className="process-icon" aria-hidden>
                    <s.icon />
                  </div>
                </div>
                <div className="process-content">
                  <h3 className="process-step-title">{s.title}</h3>
                  <p className="process-text">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="process-scrolltop"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </section>

      {/* Growth Support (inlined) */}
      <section className="growth-support">
        <div className="growth-overlay" />
        <div className="container growth-wrap">
          <div className="growth-content">
            <span className="growth-tag">Trusted Venue & Lawn Specialists</span>
            <h2 className="growth-title">We Nurture Your Events With Nature.</h2>
            <p className="growth-text">
              At Trilok Singh Jabinda Lawn, we blend spacious green lawns with thoughtful
              planning to host weddings, receptions, and corporate celebrations. From décor
              to guest comfort, our team prepares a polished, picture‑ready ambiance for your day.
            </p>

            <div className="growth-contact">
              <div className="contact-icon"><FaHeadset /></div>
              <div className="contact-info">
                <span className="contact-label">Talk to Our Lawn Experts</span>
                <a className="contact-phone" href="tel:+123456789">+1 234 567 89</a>
              </div>
            </div>
          </div>

          <div className="growth-media">
            <div className="media-circle">
              <img
                src="/images/why-choose-us/hero-image.jpg"
                alt="Gardener at work"
                className="media-image"
              />
              <button className="media-play" aria-label="Play video" data-video="/images/why-choose-us/growth-support.mp4" onClick={(e) => e.preventDefault()}>
                <span className="play-triangle" />
              </button>
              <div className="ring ring-1" />
              <div className="ring ring-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (inlined) */}
      <section className="team-section">
        <div className="container">
          <div className="team-head">
            <span className="team-label">Meet our Team</span>
            <h2 className="team-title">Our Trained Staff</h2>
          </div>

          <div className="team-row" role="list">
            {[
              { id: 1, name: 'Joshua Bevan', role: 'Gardner', image: '/images/gallery/gallery-7.jpg' },
              { id: 2, name: 'Victoria Hyde', role: 'Senior Farmer', image: '/images/gallery/gallery-8.jpg' },
              { id: 3, name: 'Louis Clayton', role: 'Gardner', image: '/images/gallery/gallery-9.jpg' }
            ].map(m => (
              <article key={m.id} className="team-card" role="listitem">
                <div className="team-photo-wrap">
                  <img src={m.image} alt={m.name} className="team-photo" />
                  <div className="team-social">
                    <a href="#" aria-label="facebook"><FaFacebookF /></a>
                    <a href="#" aria-label="twitter"><FaTwitter /></a>
                    <a href="#" aria-label="linkedin"><FaLinkedinIn /></a>
                  </div>
                </div>
                <div className="team-info">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                </div>
              </article>
            ))}
          </div>

          {/* Retained nav structure for future extensibility */}
          <div className="team-nav">
            <button className="nav-btn" aria-label="Previous" onClick={() => {
              const list = document.querySelector('.team-row');
              if (list) list.scrollBy({ left: -320, behavior: 'smooth' });
            }}>◀</button>
            <button className="nav-btn" aria-label="Next" onClick={() => {
              const list = document.querySelector('.team-row');
              if (list) list.scrollBy({ left: 320, behavior: 'smooth' });
            }}>▶</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


