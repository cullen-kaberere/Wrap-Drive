import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppFloat from "../../components/WhatsAppFloat"

export default function Gallery() {
  const galleryItems = [
    {
      title: "Matte Black BMW Wrap",
      category: "Vinyl Wrap",
      before: "/placeholder.svg?height=300&width=400",
      after: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Mercedes PPF Installation",
      category: "Paint Protection",
      before: "/placeholder.svg?height=300&width=400",
      after: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Audi Ceramic Coating",
      category: "Ceramic Coating",
      before: "/placeholder.svg?height=300&width=400",
      after: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Range Rover Custom Wrap",
      category: "Custom Design",
      before: "/placeholder.svg?height=300&width=400",
      after: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Porsche Window Tinting",
      category: "Window Tinting",
      before: "/placeholder.svg?height=300&width=400",
      after: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Toyota Complete Detailing",
      category: "Auto Detailing",
      before: "/placeholder.svg?height=300&width=400",
      after: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <>
      <Header />
      <main className="gallery-page">
        <section className="page-hero">
          <div className="container">
            <h1>Our Work</h1>
            <p>See the transformations we've created for our clients</p>
          </div>
        </section>

        <section className="gallery-section">
          <div className="container">
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-header">
                    <h3>{item.title}</h3>
                    <span className="category-tag">{item.category}</span>
                  </div>
                  <div className="before-after">
                    <div className="before">
                      <h4>Before</h4>
                      <img src={item.before || "/placeholder.svg"} alt={`${item.title} before`} />
                    </div>
                    <div className="after">
                      <h4>After</h4>
                      <img src={item.after || "/placeholder.svg"} alt={`${item.title} after`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial">
                <p>"Exceptional work on my BMW wrap. The attention to detail is incredible!"</p>
                <div className="testimonial-author">- John M.</div>
              </div>
              <div className="testimonial">
                <p>"Professional service and amazing results. Highly recommend Wrap & Drive."</p>
                <div className="testimonial-author">- Sarah K.</div>
              </div>
              <div className="testimonial">
                <p>"The ceramic coating has kept my car looking brand new for over a year."</p>
                <div className="testimonial-author">- Mike R.</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
