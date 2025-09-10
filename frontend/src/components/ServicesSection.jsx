import React from "react"
import { FaHeart, FaUsers, FaBriefcase, FaBirthdayCake, FaGraduationCap, FaMusic, FaCamera, FaUtensils, FaLeaf } from "react-icons/fa"
import "../styles/services-section.css"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Weddings",
      description: "Create your perfect wedding day in our beautiful outdoor setting with elegant decorations and romantic ambiance.",
      icon: FaHeart,
      features: ["Outdoor Ceremony", "Reception Space", "Photography Spots", "Catering Setup"]
    },
    {
      id: 2,
      title: "Receptions",
      description: "Host memorable receptions with our spacious lawn area perfect for large gatherings and celebrations.",
      icon: FaUsers,
      features: ["Large Capacity", "Dance Floor", "Lighting Setup", "Sound System"]
    },
    {
      id: 3,
      title: "Corporate Events",
      description: "Professional business events, conferences, and team building activities in a serene outdoor environment.",
      icon: FaBriefcase,
      features: ["Conference Setup", "AV Equipment", "Networking Space", "Catering Options"]
    },
    {
      id: 4,
      title: "Birthday Parties",
      description: "Celebrate special birthdays with our festive party setup and entertainment facilities for all ages.",
      icon: FaBirthdayCake,
      features: ["Party Decorations", "Entertainment", "Food & Drinks", "Photo Booth"]
    },
    {
      id: 5,
      title: "Graduation Ceremonies",
      description: "Honor academic achievements with our dignified outdoor ceremony space perfect for graduation celebrations.",
      icon: FaGraduationCap,
      features: ["Ceremony Setup", "Stage Area", "Seating Arrangement", "Photography"]
    },
    {
      id: 6,
      title: "Music Concerts",
      description: "Host live music events and concerts with our excellent acoustics and spacious outdoor venue.",
      icon: FaMusic,
      features: ["Stage Setup", "Sound System", "Lighting", "Seating Options"]
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-logo">
            <FaLeaf className="logo-icon" />
            <span className="logo-text">Trilok Singh Jabinda Lawn</span>
          </div>
          <h2 className="services-title">Our Main Services</h2>
          <p className="services-description">
            We provide premium event hosting services for all occasions. From intimate gatherings to grand celebrations, 
            our beautifully maintained lawn offers the perfect setting for your special moments.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card ${index === 2 ? "featured" : ""}`}>
              {index === 2 ? (
                // Featured card with text content
                <div className="featured-content">
                  <div className="featured-icon">
                    <service.icon />
                  </div>
                  <h3 className="featured-title">{service.title}</h3>
                  <p className="featured-description">
                    Professional business events, conferences, and team building activities in a serene outdoor environment. 
                    Perfect for corporate gatherings with modern amenities and professional setup.
                  </p>
                  <button className="read-more-btn">READ MORE</button>
                </div>
              ) : (
                // Regular service cards
                <div className="service-content">
                  <div className="service-image">
                    <div className="service-icon-placeholder">
                      <service.icon />
                    </div>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Card */}
        <div className="contact-card">
          <div className="contact-content">
            <h3 className="contact-title">For More Services</h3>
            <p className="contact-text">Contact us for custom event packages and special requirements</p>
            <div className="contact-icon">
              <FaHeart />
            </div>
            <div className="contact-info">
              <p className="contact-email">info@triloksinghjabindalawn.com</p>
              <p className="contact-phone">+91-9975334445</p>
            </div>
            <button className="contact-btn">GET QUOTE</button>
          </div>
        </div>
      </div>
    </section>
  )
}
