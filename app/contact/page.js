"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppFloat from "../../components/WhatsAppFloat"

export default function Contact() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to get in touch regarding your automotive services."
    const phoneNumber = "254703201556" // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="page-hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Get in touch for a consultation or quote</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>Ready to transform your vehicle? Contact us today for a consultation.</p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">📱</div>
                    <div>
                      <h3>Phone</h3>
                      <p>+254 700 000 000</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">📧</div>
                    <div>
                      <h3>Email</h3>
                      <p>info@wrapanddrive.co.ke</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">📍</div>
                    <div>
                      <h3>Location</h3>
                      <p>
                        Nairobi, Kenya
                        <br />
                        Industrial Area
                      </p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">🕒</div>
                    <div>
                      <h3>Hours</h3>
                      <p>
                        Mon - Sat: 8:00 AM - 6:00 PM
                        <br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                <button className="whatsapp-contact-btn" onClick={handleWhatsAppClick}>
                  Chat on WhatsApp
                </button>
              </div>

              <div className="map-section">
                <h3>Find Us</h3>
                <div className="map-placeholder">
                  <img src="/placeholder.svg?height=400&width=500" alt="Map location of Wrap & Drive" />
                  <div className="map-overlay">
                    <p>📍 Wrap & Drive Location</p>
                    <small>Click to open in Google Maps</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Vehicle?</h2>
              <p>Contact us today for a free consultation and quote</p>
              <button className="cta-button" onClick={handleWhatsAppClick}>
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
