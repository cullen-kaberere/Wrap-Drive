"use client"

export default function WhatsAppFloat() {
  const handleClick = () => {
    const message = "Hi! I'd like to inquire about your automotive services."
    const phoneNumber = "254700000000" // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <div className="whatsapp-icon">💬</div>
    </div>
  )
}
