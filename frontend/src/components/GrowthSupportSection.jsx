import React from 'react'
import { FaHeadset, FaArrowUp } from 'react-icons/fa'
import '../styles/growth-support.css'

export default function GrowthSupportSection() {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <section className="growth-support">
      <div className="growth-overlay" />
      <div className="container growth-wrap">
        {/* Left: Text Content */}
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

        {/* Right: Circular Image with Play Overlay */}
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

      {/* Removed bottom-right floating button as requested */}
    </section>
  )
}


