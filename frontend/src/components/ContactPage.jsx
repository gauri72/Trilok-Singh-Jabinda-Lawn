import React from 'react'
import Contact from './Contact'
import ContactInfoSection from './ContactInfoSection'

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <h1>Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="contact-breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <a href="#" className="breadcrumb-item" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              Home
            </a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item active">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Contact Section */}
      <ContactInfoSection />
      <Contact />
    </div>
  )
}


