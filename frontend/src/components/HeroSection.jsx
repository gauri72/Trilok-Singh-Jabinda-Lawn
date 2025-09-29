import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft, FaStar, FaLeaf, FaCalendarAlt, FaUsers, FaAward, FaHeart } from 'react-icons/fa'
import '../styles/hero-section.css'

export default function HeroSection({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const slides = [
    {
      id: 1,
      title: "Your Perfect Event Venue Awaits",
      subtitle: "Perfect setting for weddings, parties, and celebrations. Book your dream event today.",
      image: "/images/hero/background-1.jpg",
      cta: "Explore Lawn Details",
      ctaSecondary: "View Gallery",
      ctaLink: "lawn",
      ctaSecondaryLink: "gallery"
    },
    {
      id: 2,
      title: "Where Memories Come to Life",
      subtitle: "Experience elegance and nature at our premium venue. Creating special moments for every celebration.",
      image: "/images/hero/background-2.jpg",
      cta: "About Us",
      ctaSecondary: "Contact Us",
      ctaLink: "about",
      ctaSecondaryLink: "contact"
    },
    {
      id: 3,
      title: "Where Dreams Come to Life",
      subtitle: "Transform your special day into an unforgettable experience. Our beautifully maintained lawn and professional services ensure perfection.",
      image: "/images/hero/background-3.jpg",
      cta: "Contact Us",
      ctaSecondary: "View Gallery",
      ctaLink: "contact",
      ctaSecondaryLink: "gallery"
    }
  ]

  // Benefit-driven cards without badges
  const stats = [
    {
      icon: FaCalendarAlt,
      title: "Tailored Event Experiences",
      description: "Crafting unique celebrations to match your dream vision."
    },
    {
      icon: FaUsers,
      title: "Dedicated Planning Support",
      description: "Experienced team ensures a seamless, stress-free event."
    },
    {
      icon: FaLeaf,
      title: "Spacious & Scenic Lawns",
      description: "Accommodating events of all sizes with picturesque backdrops."
    },
    {
      icon: FaHeart,
      title: "Exceptional Guest Experience",
      description: "Creating cherished moments with unparalleled service and ambiance."
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  // Animation trigger
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleCTAClick = (link) => {
    if (!link) return
    if (onNavigate) {
      onNavigate(link)
    }
  }

  return (
    <section className="hero-section">
      {/* Background Slides */}
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Floating Elements */}
      <div className="floating-elements">
        <FaLeaf className="floating-leaf leaf-1" />
        <FaLeaf className="floating-leaf leaf-2" />
        <FaLeaf className="floating-leaf leaf-3" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-container">
          {/* Text Content */}
          <div className="hero-text">
            {/* Badge */}
            <div className={`hero-badge ${isVisible ? 'animate-in' : ''}`}>
              <FaStar className="badge-icon" />
              Premium Event Venue
            </div>

            {/* Title */}
            <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`}>
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className={`hero-subtitle ${isVisible ? 'animate-in' : ''}`}>
              {slides[currentSlide].subtitle}
            </p>

            {/* Buttons */}
            <div className={`hero-buttons ${isVisible ? 'animate-in' : ''}`}>
              <button 
                className="ls-cta hero-cta"
                onClick={() => handleCTAClick(slides[currentSlide].ctaLink)}
              >
                {slides[currentSlide].cta}
                <FaArrowRight className="btn-icon" />
              </button>
              <button 
                className="ls-cta hero-cta outline"
                onClick={() => handleCTAClick(slides[currentSlide].ctaSecondaryLink)}
              >
                {slides[currentSlide].ctaSecondary}
                <FaArrowRight className="btn-icon" />
              </button>
            </div>

            {/* Benefit Cards */}
            <div className={`hero-stats ${isVisible ? 'animate-in' : ''}`}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <div className="stat-content">
                    <span className="stat-title">{stat.title}</span>
                    <span className="stat-desc">{stat.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className={`hero-gallery ${isVisible ? 'animate-in' : ''}`}>
            <div className="gallery-images">
              <div className="gallery-image main">
                <video 
                  src="/images/hero/gallery-main.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="gallery-video"
                />
              </div>
              <div className="gallery-image secondary">
                <img 
                  src="/images/hero/gallery-secondary.jpg" 
                  alt="Beautiful outdoor event setup"
                />
              </div>
              <div className="gallery-image tertiary">
                <img 
                  src="/images/hero/gallery-tertiary.jpg" 
                  alt="Elegant party decorations and table setting"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="hero-navigation">
        <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
          <FaArrowLeft />
        </button>
        <button className="nav-btn next" onClick={nextSlide} aria-label="Next slide">
          <FaArrowRight />
        </button>
      </div>

      {/* Indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
