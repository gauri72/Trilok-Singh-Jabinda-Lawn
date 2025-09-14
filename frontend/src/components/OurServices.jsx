import React, { useState, useEffect } from 'react'
import { 
  FaHeart, 
  FaGlassCheers, 
  FaBirthdayCake, 
  FaBriefcase, 
  FaGraduationCap, 
  FaMusic,
  FaArrowLeft,
  FaArrowRight,
  FaChevronUp,
  FaUtensils,
  FaCalendarAlt,
  FaCamera,
  FaGift
} from 'react-icons/fa'
import '../styles/our-services.css'

export default function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const services = [
    {
      id: 1,
      icon: FaHeart,
      title: "Weddings",
      description: "Create your perfect wedding day with our elegant outdoor venue and professional services."
    },
    {
      id: 2,
      icon: FaGlassCheers,
      title: "Receptions",
      description: "Host memorable receptions with our spacious lawn and premium amenities."
    },
    {
      id: 3,
      icon: FaBirthdayCake,
      title: "Birthday Parties",
      description: "Celebrate special moments with our beautiful outdoor party venue."
    },
    {
      id: 4,
      icon: FaBriefcase,
      title: "Corporate Events",
      description: "Professional corporate gatherings in a natural, inspiring environment."
    },
    {
      id: 5,
      icon: FaGraduationCap,
      title: "Graduation Parties",
      description: "Honor academic achievements with our celebratory event space."
    },
    {
      id: 6,
      icon: FaMusic,
      title: "Cultural Events",
      description: "Host festivals, concerts, and cultural celebrations in our venue."
    },
    {
      id: 7,
      icon: FaUtensils,
      title: "Catering Events",
      description: "Delicious food and beverage services for all your special occasions."
    },
    {
      id: 8,
      icon: FaCalendarAlt,
      title: "Anniversaries",
      description: "Celebrate milestones and special anniversaries in our beautiful venue."
    },
    {
      id: 9,
      icon: FaCamera,
      title: "Photo Shoots",
      description: "Perfect backdrop for professional photography and videography sessions."
    },
    {
      id: 10,
      icon: FaGift,
      title: "Special Occasions",
      description: "Any special event that deserves a beautiful and memorable setting."
    }
  ]

  const cardsPerView = 4
  const totalServices = services.length
  const maxIndex = totalServices - cardsPerView

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev < maxIndex ? prev + 1 : 0)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev > 0 ? prev - 1 : maxIndex)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getVisibleServices = () => {
    return services.slice(currentIndex, currentIndex + cardsPerView)
  }

  return (
    <section className="our-services" id="services">
      <div className="services-container">
        {/* Header */}
        <div className={`services-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="services-label">Our Services</span>
          <h2 className="services-title">Where Every Celebration Becomes Unforgettable</h2>
        </div>

        {/* Services Grid */}
        <div className={`services-grid ${isVisible ? 'animate-in' : ''} ${isAnimating ? 'animating' : ''}`}>
          {getVisibleServices().map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${isAnimating ? 'card-sliding' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <service.icon />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className={`services-navigation ${isVisible ? 'animate-in' : ''}`}>
          <button 
            className="nav-arrow prev" 
            onClick={prevSlide}
            disabled={isAnimating}
            aria-label="Previous services"
          >
            <FaArrowLeft />
          </button>
          <button 
            className="nav-arrow next" 
            onClick={nextSlide}
            disabled={isAnimating}
            aria-label="Next services"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>
    </section>
  )
} 