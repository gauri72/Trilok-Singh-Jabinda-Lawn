import React from 'react'
import { FaSeedling, FaFlask, FaTint } from 'react-icons/fa'
import '../styles/working-process.css'

export default function WorkingProcess() {
  const steps = [
    {
      id: 1,
      icon: FaSeedling,
      title: 'Make Gardening',
      text: 'Planning, site prep and concept to match your event style.'
    },
    {
      id: 2,
      icon: FaFlask,
      title: 'Soil Test & Making',
      text: 'Care routines and seasonal treatment for lush, guest‑ready lawns.'
    },
    {
      id: 3,
      icon: FaTint,
      title: 'Garden Watering',
      text: 'Irrigation, watering and day‑of care to keep things fresh.'
    }
  ]

  return (
    <section className="process-section">
      <div className="container">
        <div className="process-header">
          <span className="process-label">Our Working Process</span>
          <h2 className="process-title">How Does We Works.</h2>
        </div>

        <div className="process-arrows" aria-hidden />

        <div className="process-grid">
          {steps.map((s) => (
            <div key={s.id} className="process-card">
              <div className="process-circle">
                <div className="process-icon" aria-hidden>
                  <s.icon />
                </div>
              </div>
              <div className="process-content">
                <h3 className="process-step-title">{s.title}</h3>
                <p className="process-text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="process-scrolltop"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </section>
  )
}


