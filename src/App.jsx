import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 👇 importa el módulo Tooltip
import Tooltip from 'bootstrap/js/dist/tooltip'

import InfoBar from './components/InfoBar.jsx'
import Navbar from './components/Navbar.jsx'
import ServicesGrid from './components/ServicesGrid.jsx'
import ContactForm from './components/ContactForm.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import IaFloat from './components/IaFloat.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, offset: 120 })

    // Inicializar tooltips usando el módulo importado
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList.forEach((el) => {
      // crea un tooltip por elemento
      new Tooltip(el)
    })
  }, [])

  return (
    <>
      <header className="top-header">
        <InfoBar />
        <Navbar />
      </header>

      <div className="contact-container">
        <aside className="contact-left" data-aos="fade-right">
          <h3 className="contact-title">¿Cómo podemos ayudarte?</h3>
          <p className="contact-intro">
            En STB nos enfocamos en ofrecer soluciones integrales y personalizadas para impulsar la eficiencia y seguridad de tus operaciones;
            a continuación, algunos de los servicios que ponemos a tu disposición:
          </p>
          <ServicesGrid />
        </aside>

        <section className="contact-right" data-aos="fade-left">
          <ContactForm />
        </section>
      </div>

      <Footer />
      <WhatsAppFloat />
      <IaFloat />
    </>
  )
}
