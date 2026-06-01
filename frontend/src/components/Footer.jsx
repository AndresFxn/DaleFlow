import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo y descripción */}
          <div className="footer-section">
            <h3 className="footer-logo">DALE FLOW</h3>
            <p className="footer-tagline">mover. soltar. brillar.</p>
            <div className="footer-heart">♡</div>
            <p className="footer-description">
              Una experiencia para ti
            </p>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4 className="footer-title">Conecta con nosotros</h4>
            <div className="footer-links">
              <a href="https://wa.me/573212846687" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span className="link-icon">📱</span>
                +57 321 284 6687
              </a>
              <a href="mailto:daleflowexperiencia@gmail.com" className="footer-link">
                <span className="link-icon">✉️</span>
                daleflowexperiencia@gmail.com
              </a>
            </div>
          </div>

          {/* Información del evento */}
          <div className="footer-section">
            <h4 className="footer-title">Información del evento</h4>
            <div className="footer-info">
              <p>
                <strong>Hotel Casa de los Virreyes</strong><br />
                Barrio La Ermita
              </p>
              <p>
                <strong>Sábado 20 de junio</strong><br />
                9:00 a.m. - 12:00 m.
              </p>
            </div>
          </div>

          {/* Más que un evento */}
          <div className="footer-section">
            <h4 className="footer-title">Más que un evento</h4>
            <p className="footer-text">
              Una experiencia para ti
            </p>
            <div className="footer-heart-small">♡</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Dale Flow. Todos los derechos reservados.
          </p>
          <p className="footer-made">
            Hecho con amor para mujeres que brillan ✨
          </p>
          <a href="/admin" className="admin-link">⚙</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
