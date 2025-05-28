"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppFloat from "../components/WhatsAppFloat"

export default function Home() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your automotive services. Can you provide more information?"
    const phoneNumber = "254700000000" // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <Header />
      <main className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Transform Your Ride</h1>
              <h2>Premium Automotive Customization</h2>
              <p>
                At Wrap & Drive, we specialize in premium vinyl wraps, paint protection, ceramic coating, and complete
                automotive transformations. Your vision, our expertise.
              </p>
              <button className="cta-button" onClick={handleWhatsAppClick}>
                Book Your Service
              </button>
            </div>
            <div className="hero-image">
              <img src="/placeholder.svg?height=500&width=800" alt="Customized luxury car with vinyl wrap" />
            </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="unique-section">
          <div className="container">
            <h2>Why Choose Wrap & Drive?</h2>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon">🎨</div>
                <h3>Premium Materials</h3>
                <p>We use only the highest quality vinyl, PPF, and ceramic coating products</p>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <h3>Expert Craftsmanship</h3>
                <p>Years of experience in automotive customization and detailing</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🛡️</div>
                <h3>Protection & Style</h3>
                <p>Enhance your vehicle's appearance while protecting its value</p>
              </div>
              <div className="feature">
                <div className="feature-icon">📱</div>
                <h3>Easy Booking</h3>
                <p>Quick consultation and booking through WhatsApp</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="services-preview">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <img src="/placeholder.svg?height=200&width=300" alt="Vinyl Wrap" />
                <h3>Vinyl Wraps</h3>
                <p>Complete color changes and custom designs</p>
              </div>
              <div className="service-card">
                <img src="/placeholder.svg?height=200&width=300" alt="Paint Protection Film" />
                <h3>Paint Protection Film</h3>
                <p>Invisible protection for your vehicle's paint</p>
              </div>
              <div className="service-card">
                <img src="/placeholder.svg?height=200&width=300" alt="Ceramic Coating" />
                <h3>Ceramic Coating</h3>
                <p>Long-lasting shine and protection</p>
              </div>
            </div>
            <div className="services-cta">
              <a href="/services" className="view-all-btn">
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
