import React from 'react'
import { FaArrowRight, FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype } from 'react-icons/fa'
import '../styles/about-us.css'

export default function AboutUsPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Wanda Mckouen",
      role: "CEO & Founder",
      description: "The master-builders off human happiness no one rejects, ours avoids pleasure itself.",
      image: "/images/hero/gallery-secondary.jpg",
      socialIcons: []
    },
    {
      id: 2,
      name: "Mervin Sill",
      role: "Senior Manager",
      description: "Anyone who loves or pursues or desires to obtain pain of itself, our because it is pain",
      image: "/images/hero/gallery-tertiary.jpg",
      socialIcons: [
        { icon: FaFacebookF, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: FaLinkedinIn, link: "#" },
        { icon: FaSkype, link: "#" }
      ]
    },
    {
      id: 3,
      name: "Missy Quiring",
      role: "CEO & Founder",
      description: "How all this mistaken idea of denouncing pleasure and praising pain was born and replace.",
      image: "/images/hero/gallery-secondary.jpg",
      socialIcons: []
    },
    {
      id: 4,
      name: "Johnsie Filak",
      role: "CEO & Founder",
      description: "I will give you a complete account of the system, and expound the actual teachings the great ...",
      image: "/images/hero/gallery-tertiary.jpg",
      socialIcons: []
    }
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

      {/* Introduction Section */}
      <section className="introduction-section">
        <div className="container">
          <div className="introduction-grid">
            <div className="introduction-content">
              <div className="intro-header">
                <div className="intro-accent"></div>
                <div className="intro-text">
                  <span className="intro-label">Welcome to our Company</span>
                  <h2 className="intro-title">Know About Us</h2>
                </div>
              </div>
              
              <div className="intro-paragraphs">
                <p>
                  We provide ongoing property maintenance which includes lawn mowing, fertilizing, spring and fall cleanups, de-thatching, aerating, seeding, mulching, edging, herbicide application, plant health care, snow plowing, pruning, and tree care and removal.
                </p>
                <p>
                  We also provide the design and installation of many landscape construction projects including walkways, steps, retaining walls, patios, veneer stone, planting, trans-planting, drainage systems, lawn renovation and installation, paver driveways, cobblestone edging, and excavation.
                </p>
              </div>

              <button className="intro-cta">
                GO TO ALL SERVICES
                <FaArrowRight className="cta-icon" />
              </button>
            </div>

            <div className="introduction-image">
              <img 
                src="/images/hero/gallery-secondary.jpg" 
                alt="Our professional gardening team" 
                className="team-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team-section">
        <div className="container">
          <div className="team-header">
            <h2 className="team-title">
              <span className="team-title-black">Our</span>
              <span className="team-title-green">Landshapers</span>
            </h2>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-member-image"
                  />
                  <div className="role-badge">
                    {member.role}
                  </div>
                </div>
                
                <div className="team-member-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-description">{member.description}</p>
                  
                  {member.socialIcons.length > 0 && (
                    <div className="team-social-icons">
                      {member.socialIcons.map((social, index) => (
                        <a 
                          key={index}
                          href={social.link} 
                          className="social-icon"
                          aria-label={`${member.name} social media`}
                        >
                          <social.icon />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
