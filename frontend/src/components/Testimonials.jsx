import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles/testimonials.css';

// Import images directly
import rajeshKumarImg from '/images/testimonials/rajesh-kumar.jpg';
import priyaSharmaImg from '/images/testimonials/priya-sharma.jpg';
import amitPatelImg from '/images/testimonials/amit-patel.jpg';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
  ];

  // Fallback avatar generator
  const getFallbackAvatar = (name) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#8bc34a"/>
        <circle cx="150" cy="120" r="50" fill="white"/>
        <path d="M100 200C100 165.8 125.8 140 160 140S220 165.8 220 200V220H100V200Z" fill="white"/>
        <text x="150" y="130" text-anchor="middle" fill="#8bc34a" font-family="Arial, sans-serif" font-size="24" font-weight="bold">${initials}</text>
      </svg>
    `)}`;
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
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
  );
};

export default Testimonials;
