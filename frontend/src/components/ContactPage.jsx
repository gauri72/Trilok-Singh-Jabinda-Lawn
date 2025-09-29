import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import LandshaperNavbar from './LandshaperNavbar'
import Footer from './Footer'
import '../styles/home-page.css'
import '../styles/about-us.css'
import '../styles/contact-page.css'

export default function ContactPage({ onNavigate, currentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long'
    } else if (formData.name.trim().length > 100) {
      errors.name = 'Name must be less than 100 characters'
    } else if (!/^[a-zA-Z\s\-']+$/.test(formData.name.trim())) {
      errors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes'
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required'
    } else {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)\.]{10,20}$/
      if (!phoneRegex.test(formData.phoneNumber.trim())) {
        errors.phoneNumber = 'Please enter a valid phone number'
      }
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    } else if (formData.message.trim().length > 1000) {
      errors.message = 'Message must be less than 1000 characters'
    }
    
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFieldErrors({})
    setSubmitStatus(null)
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const composedMessage = `${formData.subject ? `[${formData.subject}] ` : ''}${formData.message}`

      const response = await fetch('http://localhost:8000/api/contact/submit/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          message: composedMessage,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const result = await response.json()
      if (response.ok && result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'An error occurred. Please try again.' })
      }
    } catch (error) {
      let errorMessage = 'Network error. Please check your connection and try again.'
      if (error.name === 'AbortError') {
        errorMessage = 'Request timeout. Please try again.'
      } else if (error.name === 'TypeError' && error.message && error.message.includes('fetch')) {
        errorMessage = 'Unable to connect to server. Please check if the backend is running.'
      } else if (error.name === 'TypeError' && error.message && error.message.includes('Failed to fetch')) {
        errorMessage = 'Connection failed. Please check your internet connection.'
      } else if (error.message && error.message.includes('CORS')) {
        errorMessage = 'CORS error. Please check server configuration.'
      }
      setSubmitStatus({ type: 'error', message: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <LandshaperNavbar onNavigate={onNavigate} currentPage={currentPage} />
      {/* Hero Banner (match About Us hero) */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
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

      {/* Contact Information & Form Section (v3) */}
      <section className="contact-v3">
        <div className="contact-v3-wrap">
          <div className="contact-v3-info">
            <h2 className="contact-v3-title">We’d love to hear from you</h2>
            <p className="contact-v3-sub">Our team will get back within 1 business day.</p>
            <ul className="contact-v3-list">
              <li>
                <span className="contact-v3-icon"><FaMapMarkerAlt /></span>
                <div>
                  <strong>Address</strong>
                  <span>Gut No. 26, Shahnoorwadi, Chh. Sambhajinagar, 431005</span>
                </div>
              </li>
              <li>
                <span className="contact-v3-icon"><FaEnvelope /></span>
                <div>
                  <strong>Email</strong>
                  <span>triloksinghjabindalawn@gmail.com</span>
                </div>
              </li>
              <li>
                <span className="contact-v3-icon"><FaPhoneAlt /></span>
                <div>
                  <strong>Phone</strong>
                  <span>+91 9975334445</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="contact-v3-form">
            <h3 className="contact-v3-form-title">Send us a message</h3>
            <form onSubmit={handleSubmit} className="contact-v3-fields">
              {submitStatus && (
                <div className={`status-message ${submitStatus.type}`}>{submitStatus.message}</div>
              )}
              <div className="contact-v3-row">
                <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} disabled={isSubmitting} required className={`contact-v3-input ${fieldErrors.name ? 'error' : ''}`} />
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} disabled={isSubmitting} className={`contact-v3-input ${fieldErrors.email ? 'error' : ''}`} />
              </div>
              <div className="contact-v3-row">
                <input name="phoneNumber" placeholder="Phone" value={formData.phoneNumber} onChange={handleChange} disabled={isSubmitting} required className={`contact-v3-input ${fieldErrors.phoneNumber ? 'error' : ''}`} />
                <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} disabled={isSubmitting} className="contact-v3-input" />
              </div>
              <textarea name="message" rows="6" placeholder="Message" value={formData.message} onChange={handleChange} disabled={isSubmitting} required className={`contact-v3-textarea ${fieldErrors.message ? 'error' : ''}`} />
              <div className="contact-v3-actions">
                <button type="submit" className="contact-v3-submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Now'}</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="map-embed">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.700797190404!2d75.33239937549989!3d19.852608981518532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99ba59535a9d%3A0xa4a6ceac9ea7b16f!2sTrilok%20Singh%20Jabinda%20Lawn!5e0!3m2!1sen!2sin!4v1757588864767!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Trilok Singh Jabinda Lawn Location"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  )
}


