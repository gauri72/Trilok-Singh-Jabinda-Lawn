import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-brand">
            <h3 className="footer-company-name">Trilok Singh Jabinda Lawn</h3>
            <p className="footer-description">
              Your premier destination for exceptional lawn services and outdoor event management. 
              We create beautiful, memorable experiences for all your special occasions.
            </p>
            <p className="footer-copyright">
              © 2024 Trilok Singh Jabinda Lawn. All rights reserved.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About Us</a></li>
            <li><a href="#lawn" className="footer-link">Lawn</a></li>
            <li><a href="#gallery" className="footer-link">Gallery</a></li>
            <li><a href="#contact" className="footer-link">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Contact Information</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <div className="contact-details">
                <p>Gut No, 26, Chh, Shahnoorwadi</p>
                <p>Chhatrapati Sambhajinagar, Maharashtra 431009</p>
              </div>
            </div>
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <div className="contact-details">
                <p>+91-9975334445</p>
                <p>+91-9876543210</p>
              </div>
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <div className="contact-details">
                <p>info@triloklawn.com</p>
                <p>bookings@triloklawn.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
