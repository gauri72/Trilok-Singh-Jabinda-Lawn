import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaHome, FaChevronRight as FaChevronRightSmall, FaLink, FaExpand } from 'react-icons/fa'
import LandshaperNavbar from './LandshaperNavbar'
import Footer from './Footer'
import '../styles/gallery.css'

export default function Gallery({ onNavigate, currentPage: activePage }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Gallery images data using 18 images from gallery folder
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/gallery-1.jpg',
      alt: 'Modern lawn design with clean lines',
      category: 'Lawn Designs / Landscaping Styles',
      title: 'Lawn Designs / Landscaping Styles'
    },
    {
      id: 2,
      src: '/images/gallery/gallery-2.jpg',
      alt: 'Traditional garden pathway design',
      category: 'Lawn Designs / Landscaping Styles',
      title: 'Lawn Designs / Landscaping Styles'
    },
    {
      id: 3,
      src: '/images/gallery/gallery-3.jpg',
      alt: 'Rustic natural landscaping style',
      category: 'Lawn Designs / Landscaping Styles',
      title: 'Lawn Designs / Landscaping Styles'
    },
    {
      id: 4,
      src: '/images/gallery/gallery-4.jpg',
      alt: 'Minimalist lawn design approach',
      category: 'Lawn Designs / Landscaping Styles',
      title: 'Lawn Designs / Landscaping Styles'
    },
    {
      id: 5,
      src: '/images/gallery/gallery-5.jpg',
      alt: 'Wedding ceremony setup on lawn',
      category: 'Events & Functions',
      title: 'Events & Functions'
    },
    {
      id: 6,
      src: '/images/gallery/gallery-6.jpg',
      alt: 'Colorful flower arrangements for events',
      category: 'Events & Functions',
      title: 'Events & Functions'
    },
    {
      id: 7,
      src: '/images/gallery/gallery-7.jpg',
      alt: 'Corporate event setup',
      category: 'Events & Functions',
      title: 'Events & Functions'
    },
    {
      id: 8,
      src: '/images/gallery/gallery-8.jpg',
      alt: 'Party reception area',
      category: 'Events & Functions',
      title: 'Events & Functions'
    },
    {
      id: 9,
      src: '/images/gallery/gallery-9.jpg',
      alt: 'Hedge trimming for event preparation',
      category: 'Facilities & Features',
      title: 'Facilities & Features'
    },
    {
      id: 10,
      src: '/images/gallery/gallery-10.jpg',
      alt: 'Garden planting for venue enhancement',
      category: 'Facilities & Features',
      title: 'Facilities & Features'
    },
    {
      id: 11,
      src: '/images/gallery/gallery-11.jpg',
      alt: 'Winter event preparation',
      category: 'Events & Functions',
      title: 'Events & Functions'
    },
    {
      id: 12,
      src: '/images/gallery/gallery-12.jpg',
      alt: 'Lawn aeration for venue maintenance',
      category: 'Facilities & Features',
      title: 'Facilities & Features'
    },
    {
      id: 13,
      src: '/images/gallery/gallery-13.jpg',
      alt: 'Professional landscape design',
      category: 'Lawn Designs / Landscaping Styles',
      title: 'Lawn Designs / Landscaping Styles'
    },
    {
      id: 14,
      src: '/images/gallery/gallery-14.jpg',
      alt: 'Lawn maintenance for events',
      category: 'Facilities & Features',
      title: 'Facilities & Features'
    },
    {
      id: 15,
      src: '/images/gallery/gallery-15.jpg',
      alt: 'Garden installation for venue',
      category: 'Facilities & Features',
      title: 'Facilities & Features'
    },
    {
      id: 16,
      src: '/images/gallery/gallery-16.jpg',
      alt: 'Tree care for venue landscaping',
      category: 'Facilities & Features',
      title: 'Facilities & Features'
    },
    {
      id: 17,
      src: '/images/gallery/gallery-17.jpg',
      alt: 'Lawn restoration for events',
      category: 'Facilities & Features',
      title: 'Facilities & Features'
    },
    {
      id: 18,
      src: '/images/gallery/gallery-18.jpg',
      alt: 'Irrigation system for venue',
      category: 'Facilities & Features',
      title: 'Facilities & Features'
    }
  ]

  // Pagination logic
  const imagesPerPage = 6
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage)
  const startIndex = (currentPage - 1) * imagesPerPage
  const endIndex = startIndex + imagesPerPage
  const currentImages = galleryImages.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsLightboxOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox()
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="gallery-page">
      <LandshaperNavbar onNavigate={onNavigate} currentPage={activePage} />
      {/* Hero Banner */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <div className="gallery-hero-text">
            <h1>Gallery</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="gallery-breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <a href="#home" className="breadcrumb-item">
              <FaHome className="breadcrumb-icon" />
              Home
            </a>
            <FaChevronRightSmall className="breadcrumb-separator" />
            <span className="breadcrumb-item active">Gallery</span>
          </nav>
        </div>
      </section>


      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-masonry">
            {currentImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-gallery.jpg'
                    }}
                  />
                  <div className="gallery-overlay">
                    <div 
                      className="gallery-icon gallery-icon-zoom" 
                      title="Zoom Image"
                      onClick={() => handleImageClick(image)}
                    >
                      <FaExpand />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="gallery-pagination">
        <div className="container">
          <div className="pagination-controls">
            <button
              className={`pagination-btn prev ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              className={`pagination-btn next ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div 
          className="lightbox-overlay" 
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}
