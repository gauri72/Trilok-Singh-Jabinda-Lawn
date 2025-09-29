import React from 'react'
import '../styles/lawn-page.css'

export default function LawnPage() {
  return (
    <div className="lawn-page">
      {/* Hero Banner */}
      <section className="lawn-hero">
        <div className="lawn-hero-content">
          <div className="lawn-hero-text">
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
            <p className="section-description">
              Discover the fundamental details of our beautiful lawn venue
            </p>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <h3>Lawn Area</h3>
              <p className="info-value">2 Acre</p>
              <p className="info-description">Spacious outdoor area perfect for large gatherings</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-theater-masks"></i>
              </div>
              <h3>Stage</h3>
              <p className="info-value">20 ft × 13 ft</p>
              <p className="info-description">Professional stage for performances and ceremonies</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-umbrella"></i>
              </div>
              <h3>Roof Coverage</h3>
              <p className="info-value">Lawn Covered By Roof</p>
              <p className="info-description">Weather protection for your special events</p>
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
            <p className="section-description">
              Modern amenities and comfortable facilities for your guests
            </p>
          </div>
          
          <div className="facilities-grid">
            <div className="facility-category">
              <h3 className="category-title">Indoor Spaces</h3>
              <div className="facility-items">
                <div className="facility-item">
                  <div className="facility-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="facility-content">
                    <h4>AC Hall</h4>
                    <p>Air-conditioned main hall for ceremonies</p>
                  </div>
                </div>
                
                <div className="facility-item">
                  <div className="facility-icon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <div className="facility-content">
                    <h4>AC Kitchen</h4>
                    <p>Fully equipped air-conditioned kitchen</p>
                  </div>
                </div>
                
                <div className="facility-item">
                  <div className="facility-icon">
                    <i className="fas fa-bed"></i>
                  </div>
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
                  <div className="facility-icon">
                    <i className="fas fa-thermometer-full"></i>
                  </div>
                  <div className="facility-content">
                    <h4>Hot Water</h4>
                    <p>24/7 hot water supply available</p>
                  </div>
                </div>
                
                <div className="facility-item">
                  <div className="facility-icon">
                    <i className="fas fa-thermometer-empty"></i>
                  </div>
                  <div className="facility-content">
                    <h4>Cool Water</h4>
                    <p>Refreshing cool water for all needs</p>
                  </div>
                </div>
                
                <div className="facility-item">
                  <div className="facility-icon">
                    <i className="fas fa-tint"></i>
                  </div>
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
            <h2 className="section-title">Accessibility & Utilities</h2>
            <p className="section-description">
              Ensuring comfort and convenience for all guests
            </p>
          </div>
          
          <div className="accessibility-grid">
            <div className="accessibility-card">
              <div className="accessibility-icon">
                <i className="fas fa-wheelchair"></i>
              </div>
              <h3>Wheelchair Access</h3>
              <p>Wheelchair for handicapped guests available</p>
            </div>
            
            <div className="accessibility-card">
              <div className="accessibility-icon">
                <i className="fas fa-parking"></i>
              </div>
              <h3>Parking Facility</h3>
              <p>Parking facility available inside lawn</p>
            </div>
            
            <div className="accessibility-card">
              <div className="accessibility-icon">
                <i className="fas fa-solar-panel"></i>
              </div>
              <h3>Solar System</h3>
              <p>Eco-friendly solar power system</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
