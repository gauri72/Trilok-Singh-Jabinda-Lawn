import React from 'react'
import LandshaperNavbar from './LandshaperNavbar'
import Footer from './Footer'
import '../styles/lawn-page.css'
import '../styles/about-us.css'
import { FaArrowsAlt, FaTheaterMasks, FaUmbrellaBeach, FaBuilding, FaUtensils, FaBed, FaThermometerFull, FaThermometerEmpty, FaTint, FaWheelchair, FaParking, FaSolarPanel } from 'react-icons/fa'

export default function LawnPage({ onNavigate, currentPage }) {
  return (
    <div className="lawn-page">
      <LandshaperNavbar onNavigate={onNavigate} currentPage={currentPage} />
      {/* Hero Banner (match About Us) */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1>Lawn Details</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="lawn-breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <a href="#" className="breadcrumb-item" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              Home
            </a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item active">Lawn Details</span>
          </nav>
        </div>
      </section>

      {/* Section 1: Basic Lawn Information */}
      <section className="lawn-section basic-info">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Venue Overview</span>
            <h2 className="section-title">Basic Lawn Information</h2>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon"><FaArrowsAlt aria-hidden /></div>
              <h3>Lawn Area</h3>
              <p className="info-value">2 Acre</p>
              <p className="info-description">Expansive open space ideal for large weddings, receptions, and corporate galas.</p>
              <p className="info-description">Flexible seating zones, photo spots, and décor-ready pathways for smooth guest flow.</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><FaTheaterMasks aria-hidden /></div>
              <h3>Stage</h3>
              <p className="info-value">20 ft × 13 ft</p>
              <p className="info-description">Professional stage for ceremonies, performances, and themed events.</p>
              <p className="info-description">Optimized access for artists and anchors with spotlight-friendly layout.</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><FaUmbrellaBeach aria-hidden /></div>
              <h3>Roof Coverage</h3>
              <p className="info-value">Lawn Covered By Roof</p>
              <p className="info-description">All-weather comfort with protective roofing for sunny days and light drizzle.</p>
              <p className="info-description">Décor-friendly truss points for florals, lighting, and thematic hangings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Facilities & Amenities */}
      <section className="lawn-section facilities">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Premium Facilities</span>
            <h2 className="section-title">Facilities & Amenities</h2>
          </div>
          
          <div className="facilities-grid">
            <div className="facility-category">
              <h3 className="category-title">Indoor Spaces</h3>
              <div className="facility-items">
                <div className="facility-item">
                  <div className="facility-icon"><FaBuilding aria-hidden /></div>
                  <div className="facility-content">
                    <h4>AC Hall</h4>
                    <p>Air-conditioned main hall for ceremonies</p>
                  </div>
                </div>
                
                <div className="facility-item">
                  <div className="facility-icon"><FaUtensils aria-hidden /></div>
                  <div className="facility-content">
                    <h4>AC Kitchen</h4>
                    <p>Fully equipped air-conditioned kitchen</p>
                  </div>
                </div>
                
                <div className="facility-item">
                  <div className="facility-icon"><FaBed aria-hidden /></div>
                  <div className="facility-content">
                    <h4>8 AC Rooms</h4>
                    <p>Comfortable air-conditioned accommodation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="facility-category">
              <h3 className="category-title">Water Systems</h3>
              <div className="facility-items">
                <div className="facility-item">
                  <div className="facility-icon"><FaThermometerFull aria-hidden /></div>
                  <div className="facility-content">
                    <h4>Hot Water</h4>
                    <p>24/7 hot water supply available</p>
                  </div>
                </div>
                
                <div className="facility-item">
                  <div className="facility-icon"><FaThermometerEmpty aria-hidden /></div>
                  <div className="facility-content">
                    <h4>Cool Water</h4>
                    <p>Refreshing cool water for all needs</p>
                  </div>
                </div>
                
                <div className="facility-item">
                  <div className="facility-icon"><FaTint aria-hidden /></div>
                  <div className="facility-content">
                    <h4>RO Water</h4>
                    <p>Pure RO water for drinking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Accessibility & Utilities */}
      <section className="lawn-section accessibility">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Accessibility & Utilities</span>
            <h2 className="section-title">Guest Comfort & Access</h2>
          </div>
          
          <div className="accessibility-grid">
            <div className="accessibility-card">
              <div className="accessibility-icon"><FaWheelchair aria-hidden /></div>
              <h3>Wheelchair Access</h3>
              <p>Wheelchair for handicapped guests available</p>
              <p>Convenient ramps and pathways across key areas ensure effortless movement and safety.</p>
            </div>
            
            <div className="accessibility-card">
              <div className="accessibility-icon"><FaParking aria-hidden /></div>
              <h3>Parking Facility</h3>
              <p>Parking facility available inside lawn</p>
              <p>Ample on-site parking with easy drop-off zones for senior citizens and VIP entries.</p>
            </div>
            
            <div className="accessibility-card">
              <div className="accessibility-icon"><FaSolarPanel aria-hidden /></div>
              <h3>Solar System</h3>
              <p>Eco-friendly solar power system</p>
              <p>Reliable power backup to keep lighting and essential services uninterrupted during events.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
