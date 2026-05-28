import React from 'react'
import './EventInfo.css'

const EventInfo = () => {
  return (
    <section className="event-info section">
      <div className="container">
        <div className="event-info-grid">
          <div className="event-info-card">
            <div className="event-icon">📍</div>
            <h3 className="event-label">Lugar</h3>
            <p className="event-value">Hotel Casa de<br />los Virreyes</p>
            <p className="event-detail">Barrio La Ermita </p>
          </div>

          <div className="event-info-card">
            <div className="event-icon">📅</div>
            <h3 className="event-label">Fecha</h3>
            <p className="event-value">Sábado 20</p>
            <p className="event-detail">de junio</p>
          </div>

          <div className="event-info-card">
            <div className="event-icon">🕐</div>
            <h3 className="event-label">Hora</h3>
            <p className="event-value">9:00 a.m.</p>
            <p className="event-detail">a 12:00 m.</p>
          </div>
        </div>

        <div className="event-note">
          <div className="note-icon">💡</div>
          <p className="note-text">
            Una vez completes este formulario serás dirigida al enlace de pago para confirmar tu inscripción ✨
          </p>
        </div>
      </div>
    </section>
  )
}

export default EventInfo
