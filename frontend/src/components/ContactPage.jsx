import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import '../styles/home-page.css'

export default function ContactPage() {
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
      const response = await fetch('http://localhost:8000/api/contact/submit/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          message: `${formData.subject ? `[${formData.subject}] ` : ''}${formData.message}${formData.email ? `\n\nEmail: ${formData.email}` : ''}`,
        })
      })
      const result = await response.json()
      if (response.ok && result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'An error occurred. Please try again.' })
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

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

      {/* Contact Information & Form Section */}
      <section className="contact-info-section">
        <div className="container contact-info-grid">
          <div className="info-card">
            <h2 className="info-title">Contact Information</h2>
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-content">
                <div className="info-label">Office Location:</div>
                <div className="info-text">Gut No. 26, Shahnoorwadi, Chh. Sambhajinagar</div>
                <div className="info-text">431005, Maharashtra, India</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-content">
                <div className="info-label">Email Us:</div>
                <div className="info-text">triloksinghjabindalawn@gmail.com</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div className="info-content">
                <div className="info-label">Call For Help:</div>
                <div className="info-text">+91 9975334445</div>
              </div>
            </div>
          </div>

          <div className="message-card">
            <h2 className="message-title">Send us a Message</h2>
            <form className="message-form" onSubmit={handleSubmit}>
              {submitStatus && (
                <div className={`status-message ${submitStatus.type}`}>{submitStatus.message}</div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your Name" 
                    required 
                    className={`form-input ${fieldErrors.name ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {fieldErrors.name && (
                    <span className="field-error">{fieldErrors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Your Email" 
                    className={`form-input ${fieldErrors.email ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {fieldErrors.email && (
                    <span className="field-error">{fieldErrors.email}</span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                    placeholder="Phone Number" 
                    required 
                    className={`form-input ${fieldErrors.phoneNumber ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {fieldErrors.phoneNumber && (
                    <span className="field-error">{fieldErrors.phoneNumber}</span>
                  )}
                </div>
                <div className="form-group">
                  <input 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Subject" 
                    className="form-input"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  rows="6" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Message" 
                  required 
                  className={`form-textarea ${fieldErrors.message ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {fieldErrors.message && (
                  <span className="field-error">{fieldErrors.message}</span>
                )}
                <div className="character-count">
                  {formData.message.length}/1000 characters
                </div>
              </div>
              <button 
                type="submit" 
                className="submit-now" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Now'}
              </button>
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
    </div>
  )
}


