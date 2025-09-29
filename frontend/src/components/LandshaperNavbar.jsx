import React, { useEffect, useState } from 'react'
import { FaLeaf, FaPhoneAlt, FaClock, FaMapMarkerAlt, FaTimes } from 'react-icons/fa'
import '../styles/landshaper-navbar.css'

const LINKS = [
  { name: 'Home', href: '#', page: 'home' },
  { name: 'About Us', href: '#about', page: 'about' },
  { name: 'Lawn Details', href: '#lawn', page: 'lawn' },
  { name: 'Gallery', href: '#gallery', page: 'gallery' },
  { name: 'Contact Us', href: '#contact', page: 'contact' },
]

export default function LandshaperNavbar({ onNavigate, currentPage }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Dynamically expose header height via CSS variable for responsive offsetting
  useEffect(() => {
    const updateHeaderHeightVar = () => {
      const headerEl = document.querySelector('.ls-root')
      const height = headerEl ? headerEl.offsetHeight : 0
      document.documentElement.style.setProperty('--ls-header-height', height + 'px')
    }
    updateHeaderHeightVar()
    const onResize = () => updateHeaderHeightVar()
    window.addEventListener('resize', onResize, { passive: true })
    const obs = new MutationObserver(updateHeaderHeightVar)
    const headerEl = document.querySelector('.ls-root')
    if (headerEl) {
      obs.observe(headerEl, { attributes: true, childList: true, subtree: true })
    }
    return () => {
      window.removeEventListener('resize', onResize)
      obs.disconnect()
    }
  }, [])

  useEffect(() => { 
    document.body.style.overflow = open ? 'hidden' : '' 
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Sync active link with currentPage prop when provided
  useEffect(() => {
    if (!currentPage) return
    const pageToName = {
      home: 'Home',
      about: 'About Us',
      lawn: 'Lawn Details',
      gallery: 'Gallery',
      contact: 'Contact Us',
    }
    const name = pageToName[currentPage]
    if (name) setActive(name)
  }, [currentPage])

  const handleLinkClick = (linkName, page) => {
    setActive(linkName)
    setOpen(false)
    if (onNavigate) {
      onNavigate(page)
    }
  }


  return (
    <header className={`ls-root ${scrolled ? 'ls-scrolled' : ''}`}>
      <div className="ls-topbar">
        <div className="ls-topwrap">
          <span className="ls-topmsg">Welcome to Trilok Singh Jabinda Lawn</span>
          <div className="ls-topinfo">
            <span><FaMapMarkerAlt size={16} /> Gut No. 26, Shahnoorwadi, Chh. Sambhajinagar</span>
            <span>•</span>
            <span><FaPhoneAlt size={16} /> +91-9975334445</span>
            <span>•</span>
            <span><FaClock size={16} /> Mon - Sat : 10:00 am : 06:00 pm</span>
          </div>
        </div>
      </div>

      <nav className="ls-bar">
        <div className="ls-wrap">
          <a href="#" className="ls-brand" aria-label="Trilok Singh Jabinda Lawn home" onClick={() => handleLinkClick('Home', 'home')}>
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
            <FaTimes size={20} />
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
  )
}
