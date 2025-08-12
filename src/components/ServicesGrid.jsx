import React from 'react'

const items = [
  { title: 'Atención al cliente personalizada', text: 'Acompañamiento dedicado a cada cliente, adaptando soluciones a sus necesidades específicas.' },
  { title: 'Soporte técnico 24/7', text: 'Asistencia permanente, vía remota o en sitio, para resolver cualquier incidencia a toda hora.' },
  { title: 'Implementación llave en mano', text: 'Gestionamos todo el ciclo: diseño, instalación y puesta en marcha de tu sistema.' },
  { title: 'Mantenimiento preventivo y correctivo', text: 'Revisiones periódicas y reparaciones rápidas para maximizar la vida útil de tus equipos.' },
  { title: 'Capacitación y entrenamiento', text: 'Formación a tu personal para que aproveche al máximo las herramientas y sistemas.' },
  { title: 'Actualizaciones y upgrades', text: 'Modernizamos tus sistemas con las últimas versiones y mejoras de rendimiento.' },
  { title: 'Consultoría energética', text: 'Identificamos oportunidades de ahorro y optimización de recursos en tus procesos.' },
  { title: 'Planes de servicio personalizados', text: 'Contratos a medida, ajustados a tus necesidades y presupuesto.' }
]

export default function ServicesGrid() {
  return (
    <div className="services-grid">
      {items.map((it, i) => (
        <div className="service-item" key={i}>
          <h4>{it.title}</h4>
          <p>{it.text}</p>
        </div>
      ))}
    </div>
  )
}
