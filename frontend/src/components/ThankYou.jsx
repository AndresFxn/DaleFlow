import React, { useEffect, useState } from 'react'
import './ThankYou.css'

const ThankYou = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Animación de entrada
    setTimeout(() => setShow(true), 100)
  }, [])

  return (
    <div className="ty-page">
      {/* Fondo decorativo */}
      <div className="ty-bg-circle ty-bg-circle-1" />
      <div className="ty-bg-circle ty-bg-circle-2" />

      <div className={`ty-card ${show ? 'ty-card--visible' : ''}`}>

        {/* Ícono de check animado */}
        <div className="ty-check-wrap">
          <svg className="ty-check-svg" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" stroke="#C8705A" strokeWidth="3" fill="rgba(200,112,90,0.08)" />
            <path className="ty-check-path" d="M22 40 L34 52 L58 28"
              stroke="#C8705A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>

        {/* Destellos dorados */}
        <div className="ty-sparkles">
          <span className="ty-spark ty-spark-1">✦</span>
          <span className="ty-spark ty-spark-2">✦</span>
          <span className="ty-spark ty-spark-3">✦</span>
        </div>

        <p className="ty-badge">DALE FLOW</p>
        <h1 className="ty-title">¡Gracias por<br/>tu inscripción!</h1>
        <p className="ty-tagline">mover. soltar. brillar.</p>
        <div className="ty-heart">♡</div>

        <p className="ty-message">
          Tu cupo ha sido confirmado. Estamos muy emocionadas de tenerte en esta primera experiencia Dale Flow.
        </p>

        <div className="ty-divider" />

        {/* Info del evento */}
        <div className="ty-event-info">
          <div className="ty-event-item">
            <span className="ty-event-icon">📍</span>
            <div>
              <p className="ty-event-label">Hotel Casa de los Virreyes</p>
              <p className="ty-event-sub">Calle 2 # 4-03, Barrio La Ermita</p>
            </div>
          </div>
          <div className="ty-event-item">
            <span className="ty-event-icon">📅</span>
            <div>
              <p className="ty-event-label">Sábado 20 de junio</p>
            </div>
          </div>
          <div className="ty-event-item">
            <span className="ty-event-icon">🕐</span>
            <div>
              <p className="ty-event-label">5:00 p.m.</p>
            </div>
          </div>
        </div>

        <div className="ty-divider" />

        <p className="ty-note">
          ✨ Pronto recibirás más información por WhatsApp y correo electrónico con todos los detalles del evento.
        </p>

        {/* Contacto */}
        <div className="ty-contact">
          <a href="https://wa.me/573239279990" target="_blank" rel="noreferrer" className="ty-contact-btn">
            💬 Escríbenos por WhatsApp
          </a>
        </div>

        <p className="ty-footer-text">
          Hecho con ♡ para mujeres que brillan
        </p>
      </div>
    </div>
  )
}

export default ThankYou
