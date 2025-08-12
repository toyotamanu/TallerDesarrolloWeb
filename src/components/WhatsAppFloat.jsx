import React from 'react'

export default function WhatsAppFloat() {
  return (
    <div className="whatsapp-float">
      <div className="whatsapp-message">
        <p className="msg-title">¿Necesitas asesoría?</p>
        <p className="msg-sub"><strong>Estamos disponibles</strong></p>
      </div>
      <a href="https://wa.me/56959263983" target="_blank" rel="noreferrer" aria-label="Chat en WhatsApp">
        <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" />
      </a>
    </div>
  )
}
