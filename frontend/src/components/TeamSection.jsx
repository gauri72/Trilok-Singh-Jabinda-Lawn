import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import '../styles/team-section.css'

export default function TeamSection() {
  const members = [
    { id: 1, name: 'Joshua Bevan', role: 'Gardner', image: '/images/gallery/gallery-7.jpg' },
    { id: 2, name: 'Victoria Hyde', role: 'Senior Farmer', image: '/images/gallery/gallery-8.jpg' },
    { id: 3, name: 'Louis Clayton', role: 'Gardner', image: '/images/gallery/gallery-9.jpg' },
    { id: 4, name: 'Emily Greenwood', role: 'Senior Farmer', image: '/images/gallery/gallery-10.jpg' },
  ]

  const scroll = (dir) => {
    const list = document.querySelector('.team-row')
    if (!list) return
    const delta = dir === 'left' ? -320 : 320
    list.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-head">
          <span className="team-label">Meet our Team</span>
          <h2 className="team-title">Our Trained Staff</h2>
        </div>

        <div className="team-row" role="list">
          {members.slice(0, 3).map(m => (
            <article key={m.id} className="team-card" role="listitem">
              <div className="team-photo-wrap">
                <img src={m.image} alt={m.name} className="team-photo" />
                <div className="team-social">
                  <a href="#" aria-label="facebook"><FaFacebookF /></a>
                  <a href="#" aria-label="twitter"><FaTwitter /></a>
                  <a href="#" aria-label="linkedin"><FaLinkedinIn /></a>
                </div>
              </div>
              <div className="team-info">
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="team-nav">
          <button className="nav-btn" aria-label="Previous" onClick={() => scroll('left')}>◀</button>
          <button className="nav-btn" aria-label="Next" onClick={() => scroll('right')}>▶</button>
        </div>
      </div>
    </section>
  )
}


