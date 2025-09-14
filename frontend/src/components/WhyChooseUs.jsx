import React, { useState, useEffect } from 'react'
import { FaSeedling, FaHandsHelping, FaLeaf } from 'react-icons/fa'
import '../styles/why-choose-us.css'

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)

  const features = [
    {
      id: 1,
      icon: FaSeedling,
      title: "We Are Professional and Experts"
    },
    {
      id: 2,
      icon: FaHandsHelping,
      title: "We Love Taking Your Challenges"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="why-choose-us" id="why-choose-us">
      {/* Background Image with Parallax */}
      <div className="background-image"></div>
      
      {/* Dark Green Overlay */}
      <div className="overlay"></div>
      
      <div className="why-choose-container">
        {/* Main Content Section */}
        <div className={`main-content ${isVisible ? 'animate-in' : ''}`}>
          {/* Left Side - Image */}
          <div className="image-section">
            <div className="image-wrapper">
              <img 
                src="/images/why-choose-us/hero-image.jpg" 
                alt="Professional event management team at Trilok Singh Jabinda Lawn"
                className="hero-image"
              />
            </div>
            {/* Decorative Leaves - Now outside the image wrapper */}
            <div className="decorative-leaves">
              <FaLeaf className="leaf leaf-1" />
              <FaLeaf className="leaf leaf-2" />
              <FaLeaf className="leaf leaf-3" />
            </div>
          </div>

          {/* Right Side - Text Content and Features */}
          <div className="text-section">
            <span className="section-label">Why Choose Us</span>
            <h2 className="main-title">We Are Different From Other Event Venues</h2>
            <p className="main-description">
              Experience the unparalleled difference with our premium outdoor venue, where every celebration becomes 
              a masterpiece. Our commitment to excellence, combined with our natural setting and professional expertise, 
              ensures that your special moments are transformed into unforgettable memories that last a lifetime.
            </p>

            {/* Feature Cards Section - Now inside text section */}
            <div className={`features-section ${isVisible ? 'animate-in' : ''}`}>
              {features.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className="feature-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 