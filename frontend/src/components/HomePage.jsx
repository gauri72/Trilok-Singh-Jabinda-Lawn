import React, { useEffect, useState } from 'react'
import { 
  FaArrowRight, 
  FaArrowLeft, 
  FaStar, 
  FaLeaf, 
  FaCalendarAlt, 
  FaUsers, 
  FaAward, 
  FaHeart,
  FaGlassCheers, 
  FaBirthdayCake, 
  FaBriefcase, 
  FaGraduationCap, 
  FaMusic,
  FaChevronUp,
  FaUtensils,
  FaCamera,
  FaGift,
  FaSeedling, 
  FaHandsHelping
} from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'

// Import CSS files
import '../styles/home-page.css'
import '../styles/landshaper-navbar.css'
import '../styles/footer.css'

// Import testimonial images
import rajeshKumarImg from '/images/testimonials/rajesh-kumar.jpg'
import priyaSharmaImg from '/images/testimonials/priya-sharma.jpg'
import amitPatelImg from '/images/testimonials/amit-patel.jpg'

export default function HomePage({ onNavigate }) {
  // Hero Section State
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Our Services State
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Testimonials State
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})

  // Navbar State
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  // Hero Section Data
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

  // Our Services Data
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

  // Why Choose Us Data
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

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai",
      title: "Perfect Wedding Venue - Exceeded All Expectations",
      text: "Trilok Singh's lawn venue made our wedding day absolutely magical! The lush green surroundings, professional setup, and attention to detail were beyond our dreams. Our guests are still talking about how beautiful everything looked. Highly recommended for any special occasion!",
      image: rajeshKumarImg
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Delhi",
      title: "Outstanding Corporate Event Management",
      text: "We hosted our company's annual function at this stunning lawn venue and it was a complete success! The team handled everything from setup to cleanup with such professionalism. The natural ambiance created the perfect atmosphere for our corporate gathering. Will definitely book again!",
      image: priyaSharmaImg
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Ahmedabad",
      title: "Exceptional Birthday Party Experience",
      text: "My daughter's birthday party at this beautiful lawn venue was absolutely perfect! The spacious grounds, clean facilities, and excellent service made it a memorable celebration. The kids had a blast and the parents were equally impressed. Thank you for making our special day so wonderful!",
      image: amitPatelImg
    }
  ]

  // Navigation Links
  const LINKS = [
    { name: 'Home', href: '#', page: 'home' },
    { name: 'About Us', href: '#about', page: 'about' },
    { name: 'Lawn Details', href: '#lawn', page: 'lawn' },
    { name: 'Gallery', href: '#gallery', page: 'gallery' },
    { name: 'Contact Us', href: '#contact', page: 'contact' },
  ]

  // Services Configuration
  const cardsPerView = 4
  const totalServices = services.length
  const maxIndex = totalServices - cardsPerView

  // Effects
  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { 
    document.body.style.overflow = open ? 'hidden' : '' 
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Hero Section Handlers
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

  // Our Services Handlers
  const nextServiceSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev < maxIndex ? prev + 1 : 0)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevServiceSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev > 0 ? prev - 1 : maxIndex)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const getVisibleServices = () => {
    return services.slice(currentIndex, currentIndex + cardsPerView)
  }

  // Testimonials Handlers
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  // Contact Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long'
    } else if (formData.name.trim().length > 100) {
      errors.name = 'Name must be less than 100 characters'
    } else if (!/^[a-zA-Z\s\-']+$/.test(formData.name.trim())) {
      errors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes'
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required'
    } else {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)\.]{10,20}$/
      if (!phoneRegex.test(formData.phoneNumber.trim())) {
        errors.phoneNumber = 'Please enter a valid phone number'
      }
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    } else if (formData.message.trim().length > 1000) {
      errors.message = 'Message must be less than 1000 characters'
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setFieldErrors({})
    setSubmitStatus(null)
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)
      
      const response = await fetch('http://192.168.1.34:8000/api/contact/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })
      
      clearTimeout(timeoutId)

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({ name: '', phoneNumber: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'An error occurred. Please try again.' })
      }
    } catch (error) {
      let errorMessage = 'Network error. Please check your connection and try again.'
      
      if (error.name === 'AbortError') {
        errorMessage = 'Request timeout. Please try again.'
      } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage = 'Unable to connect to server. Please check if the backend is running.'
      } else if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        errorMessage = 'Connection failed. Please check your internet connection.'
      } else if (error.message.includes('CORS')) {
        errorMessage = 'CORS error. Please check server configuration.'
      }
      
      setSubmitStatus({ type: 'error', message: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Navigation Handlers
  const handleLinkClick = (linkName, page) => {
    setActive(linkName)
    setOpen(false)
    if (onNavigate) {
      onNavigate(page)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Fallback avatar generator
  const getFallbackAvatar = (name) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#8bc34a"/>
        <circle cx="150" cy="120" r="50" fill="white"/>
        <path d="M100 200C100 165.8 125.8 140 160 140S220 165.8 220 200V220H100V200Z" fill="white"/>
        <text x="150" y="130" text-anchor="middle" fill="#8bc34a" font-family="Arial, sans-serif" font-size="24" font-weight="bold">${initials}</text>
      </svg>
    `)}`
  }

  return (
    <>
      {/* Header */}
      <header className={`ls-root ${scrolled ? 'ls-scrolled' : ''}`}>
        <div className="ls-topbar">
          <div className="ls-topwrap">
            <span className="ls-topmsg">Welcome to Trilok Singh Jabinda Lawn</span>
            <div className="ls-topinfo">
              <span><MdLocationOn size={16} /> Gut No. 26, Shahnoorwadi, Chh. Sambhajinagar</span>
              <span>•</span>
              <span><MdPhone size={16} /> +91-9975334445</span>
              <span>•</span>
              <span><FaCalendarAlt size={16} /> Mon - Sat : 10:00 am : 06:00 pm</span>
            </div>
          </div>
        </div>

        <nav className="ls-bar">
          <div className="ls-wrap">
            <a href="#" className="ls-brand" aria-label="Trilok Singh Jabinda Lawn home" onClick={() => handleLinkClick('Home')}>
              <span className="ls-logo" aria-hidden>
                <FaLeaf color="#8bc34a" size={40} />
              </span>
              <div className="ls-brand-text">
                <span className="ls-name">Trilok Singh Jabinda Lawn</span>
                <span className="ls-tagline">Best Event Venue</span>
              </div>
            </a>

            <button 
              className={`ls-burger ${open ? 'open' : ''}`} 
              aria-label="Toggle menu" 
              aria-expanded={open} 
              onClick={() => setOpen(!open)}
            >
              <span className="ls-b-line" />
              <span className="ls-b-line" />
              <span className="ls-b-line" />
            </button>

            <ul className="ls-links">
              {LINKS.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`ls-link ${active === link.name ? 'active' : ''}`} 
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.name, link.page)
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="ls-actions">
              <a href="#lawn" className="ls-cta" onClick={() => handleLinkClick('Lawn Details', 'lawn')}>
                Explore Lawn Details
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`ls-mobile ${open ? 'open' : ''}`}>
          <div className="ls-mobile-header">
            <a href="#" className="ls-mobile-brand" onClick={() => handleLinkClick('Home')}>
              <span className="ls-mobile-logo">
                <FaLeaf color="#8bc34a" size={24} />
              </span>
              <div className="ls-mobile-brand-text">
                <span className="ls-mobile-name">Trilok Singh Jabinda Lawn</span>
                <span className="ls-mobile-tagline">Best Event Venue</span>
              </div>
            </a>
            <button 
              className="ls-mobile-close" 
              aria-label="Close menu" 
              onClick={() => setOpen(false)}
            >
              <FaArrowLeft size={20} />
            </button>
          </div>
          
          <ul className="ls-m-links">
            {LINKS.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="ls-m-link" 
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.name, link.page)
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="#lawn" 
            className="ls-m-cta" 
            onClick={() => handleLinkClick('Lawn Details', 'lawn')}
          >
            Explore Lawn Details
          </a>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Our Services Section */}
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
              onClick={prevServiceSlide}
              disabled={isAnimating}
              aria-label="Previous services"
            >
              <FaArrowLeft />
            </button>
            <button 
              className="nav-arrow next" 
              onClick={nextServiceSlide}
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

      {/* Why Choose Us Section */}
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          {/* Header - Matching Our Services structure */}
          <div className="testimonials-header">
            <span className="testimonials-label">Client Testimonials</span>
            <h2 className="testimonials-title">Hear What Our Valued Clients Say About Their Exceptional Experiences</h2>
          </div>

          <div className="testimonials-content">
            <div className="testimonial-card">
              <div className="testimonial-image-container">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="testimonial-image"
                  loading="lazy"
                  onError={(e) => {
                    console.log('Image failed to load:', testimonials[currentTestimonial].image);
                    e.target.src = getFallbackAvatar(testimonials[currentTestimonial].name);
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', testimonials[currentTestimonial].image);
                  }}
                />
              </div>
              
              <div className="testimonial-content">
                <h3 className="testimonial-title">
                  {testimonials[currentTestimonial].title}
                </h3>
                <p className="testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="testimonial-author">
                  <span className="testimonial-name">
                    {testimonials[currentTestimonial].name}
                  </span>
                  <span className="testimonial-location">
                    {testimonials[currentTestimonial].location}
                  </span>
                </div>
              </div>
            </div>

            <div className="testimonials-navigation">
              <button 
                className="nav-arrow prev"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FaArrowLeft />
              </button>

              <div className="testimonials-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                className="nav-arrow next"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="map-background">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.700797190404!2d75.33239937549989!3d19.852608981518532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99ba59535a9d%3A0xa4a6ceac9ea7b16f!2sTrilok%20Singh%20Jabinda%20Lawn!5e0!3m2!1sen!2sin!4v1757588864767!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Trilok Singh Jabinda Lawn Location"
          />
        </div>

        <div className="contact-overlay"></div>

        <div className="contact-container">
          <div className="contact-header"></div>

          <div className="contact-content">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Contact Us</h3>
                <p className="form-subtitle">Send us a message and we'll get back to you soon</p>

                {submitStatus && (
                  <div className={`status-message ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${fieldErrors.name ? 'error' : ''}`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {fieldErrors.name && (
                    <span className="field-error">{fieldErrors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number *</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className={`form-input ${fieldErrors.phoneNumber ? 'error' : ''}`}
                    placeholder="Enter your phone number (e.g., +91 98765 43210)"
                    disabled={isSubmitting}
                  />
                  {fieldErrors.phoneNumber && (
                    <span className="field-error">{fieldErrors.phoneNumber}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className={`form-textarea ${fieldErrors.message ? 'error' : ''}`}
                    placeholder="Tell us about your event requirements... (minimum 10 characters)"
                    rows="5"
                    disabled={isSubmitting}
                  />
                  {fieldErrors.message && (
                    <span className="field-error">{fieldErrors.message}</span>
                  )}
                  <div className="character-count">
                    {formData.message.length}/1000 characters
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </>
  )
}
