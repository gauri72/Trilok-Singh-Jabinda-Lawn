import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-map-section">
      <div className="map-embed">
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
    </section>
  );
};

export default Contact;
