// src/components/Navbar.jsx
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src="/Img/STB BLACK.jpg" alt="STB" className="brand-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          {/* 👇 centrado */}
          <ul className="navbar-nav ms-5 mb-4 mb-lg-0">
            <li className="nav-item"><NavLink end className="nav-link nav-anim" to="/">Inicio</NavLink></li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle nav-anim" role="button" data-bs-toggle="dropdown">
                Servicios
              </span>
              <ul className="dropdown-menu dropdown-anim">
                <li><a className="dropdown-item" href="#">Instalación equipamiento</a></li>
                <li><a className="dropdown-item" href="#">Servicio técnico</a></li>
                <li><a className="dropdown-item" href="#">Servicios eléctricos</a></li>
                <li><a className="dropdown-item" href="#">Fugas de agua</a></li>
                <li><a className="dropdown-item" href="#">Redes de gas</a></li>
                <li><a className="dropdown-item" href="#">Sistema de extracción vapores</a></li>
                <li><a className="dropdown-item" href="#">Obras civiles</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link nav-anim" href="#">Proyectos</a></li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle nav-anim" role="button" data-bs-toggle="dropdown">
                Acerca de
              </span>
              <ul className="dropdown-menu dropdown-anim">
                <li><a className="dropdown-item" href="#">Nosotros</a></li>
                <li><a className="dropdown-item" href="#">Equipo</a></li>
                <li><a className="dropdown-item" href="#">Certificaciones</a></li>
              </ul>
            </li>

            <li className="nav-item"><NavLink className="nav-link nav-anim" to="/contacto">Contacto</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link nav-anim" to="/login">Área Técnica</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

