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

      {/* Introduction Section removed as per request */}

      {/* Team Slider removed as per request */}
    </div>
  )
}
