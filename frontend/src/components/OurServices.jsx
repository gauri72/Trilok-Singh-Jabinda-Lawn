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
  FaChevronUp
} from 'react-icons/fa'
import '../styles/our-services.css'

export default function OurServices() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

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
    }
  ]

  const cardsPerView = 3
  const totalSlides = Math.ceil(services.length / cardsPerView)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getVisibleServices = () => {
    const start = currentSlide * cardsPerView
    return services.slice(start, start + cardsPerView)
  }

  return (
    <section className="our-services" id="services">
      <div className="services-container">
        {/* Header */}
        <div className={`services-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="services-label">Services of Trilok Singh Jabinda Lawn</span>
          <h2 className="services-title">Explore Our Best Offer For Events</h2>
        </div>

        {/* Services Grid */}
        <div className={`services-grid ${isVisible ? 'animate-in' : ''}`}>
          {getVisibleServices().map((service) => (
            <div key={service.id} className="service-card">
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
            aria-label="Previous services"
          >
            <FaArrowLeft />
          </button>
          <button 
            className="nav-arrow next" 
            onClick={nextSlide}
            aria-label="Next services"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Decorative Plants */}
        <div className="decorative-plants">
          <div className="plant plant-1">🌱</div>
          <div className="plant plant-2">🌿</div>
          <div className="plant plant-3">🌱</div>
          <div className="plant plant-4">🌿</div>
          <div className="plant plant-5">🌱</div>
          <div className="plant plant-6">🌿</div>
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