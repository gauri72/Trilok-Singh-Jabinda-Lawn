import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export default function ContactInfoSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)
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
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
            </div>
            <div className="form-row">
              <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
              <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
            </div>
            <textarea name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Message" required />
            <button type="submit" className="submit-now" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Now'}</button>
          </form>
        </div>
      </div>
    </section>
  )
}


