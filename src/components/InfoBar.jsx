import React from 'react'

export default function InfoBar() {
  return (
    <div className="info-bar">
      <p><span role="img" aria-label="pin">📍</span> <a href="https://www.google.com/maps/place/Av.+Manquehue+Sur+520,+Edificio+Apufrente,+Santiago,+Las+Condes,+Regi%C3%B3n+Metropolitana/@-33.4112383,-70.568667,17z/data=!3m1!4b1!4m6!3m5!1s0x9662cee77160bdfd:0x9d2b0163beb703f8!8m2!3d-33.4112383!4d-70.5660867!16s%2Fg%2F11bzzpx6cr?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Av. Manquehue Sur 520, Las Condes</a></p>
      <p><span role="img" aria-label="phone">📞</span> <a href="https://wa.me/56959263983" target="_blank" rel="noopener noreferrer">+569 59263983</a></p>
      <p><span role="img" aria-label="instagram"></span> <a href="https://www.instagram.com/soluciones_tecnicas_b" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{ width: '20px', height: '20px', marginRight: '-90px'}} /></a></p>
      <p><span role="img" aria-label="email">| ✉️</span> <a href="mailto:info@stbrito.cl">info@stbrito.cl</a></p>
    </div>
  )
}
