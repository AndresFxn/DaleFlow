import React, { useState, useEffect } from 'react'
import './Pricing.css'

const LINK_PREVENTA = 'https://checkout.wompi.co/l/pcJ317'
const LINK_FINAL    = 'https://checkout.wompi.co/l/wP7Wda'

// Precio final disponible desde el 14 de junio (medianoche Colombia UTC-5)
const FECHA_PRECIO_FINAL = new Date('2026-06-14T05:00:00.000Z')

const INCLUYE = [
  { icon: '♡', text: 'Flow Experience by Dale Flow' },
  { icon: '🧘', text: 'Clase guiada de movimiento y energía femenina' },
  { icon: '🎵', text: 'Música y mezclas exclusivas Dale Flow' },
  { icon: '🥂', text: 'Bebida especial de bienvenida' },
  { icon: '🧘', text: 'Meditación guiada — Encuentra tu yo interior' },
  { icon: '📸', text: 'Photospots y contenido visual' },
  { icon: '👥', text: 'Espacios de conexión y bienestar' },
  { icon: '🎁', text: 'Sorpresas durante la experiencia' },
  { icon: '🌅', text: 'Atardecer + ambiente premium' },
]

const Pricing = () => {
  const [inscrito, setInscrito]     = useState(false)
  const [finalDisponible, setFinal] = useState(false)

  useEffect(() => {
    setInscrito(localStorage.getItem('daleflow_inscrito') === 'true')
    setFinal(new Date() >= FECHA_PRECIO_FINAL)

    const onInscrito = () => setInscrito(true)
    window.addEventListener('daleflow_inscrito', onInscrito)
    return () => window.removeEventListener('daleflow_inscrito', onInscrito)
  }, [])

  const scrollToForm = () =>
    document.getElementById('inscription-form')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="precios" className="pricing section">
      <div className="container">
        <div className="pricing-header">
          <h2 className="pricing-title">Selecciona tu entrada</h2>
          <p className="pricing-subtitle">Elige la opción que más se ajuste a ti</p>
          {!inscrito && (
            <p className="pricing-warning">
              ⚠️ Debes completar el formulario de inscripción primero para seleccionar tu entrada
            </p>
          )}
        </div>

        <div className="pricing-grid">

          {/* ── PREVENTA ── */}
          <div className={`pricing-card preventa ${!inscrito ? 'card-locked' : ''}`}>
            <div className="pricing-badge">MEJOR PRECIO</div>
            <h3 className="pricing-name">PREVENTA</h3>
            <div className="pricing-price">
              <span className="currency">$</span>
              <span className="amount">69.000</span>
              <span className="currency-code">COP</span>
            </div>
            <p className="pricing-date">Del 1 al 13 de junio</p>
            <ul className="pricing-features">
              {INCLUYE.map((item, i) => (
                <li key={i}><span className="feature-icon">{item.icon}</span> {item.text}</li>
              ))}
            </ul>
            {inscrito ? (
              <a href={LINK_PREVENTA} target="_blank" rel="noreferrer"
                className="pricing-button preventa-button">
                Seleccionar preventa
              </a>
            ) : (
              <button className="pricing-button locked-button" onClick={scrollToForm}>
                🔒 Completa el formulario primero
              </button>
            )}
          </div>

          {/* ── PRECIO FINAL ── */}
          <div className={`pricing-card final ${(!inscrito || !finalDisponible) ? 'card-locked' : ''}`}>
            <h3 className="pricing-name">PRECIO FINAL</h3>
            <div className="pricing-price">
              <span className="currency">$</span>
              <span className="amount">79.000</span>
              <span className="currency-code">COP</span>
            </div>
            <p className="pricing-date">Del 14 al 20 de junio</p>
            <ul className="pricing-features">
              {INCLUYE.map((item, i) => (
                <li key={i}><span className="feature-icon">{item.icon}</span> {item.text}</li>
              ))}
            </ul>
            {!inscrito ? (
              <button className="pricing-button locked-button" onClick={scrollToForm}>
                🔒 Completa el formulario primero
              </button>
            ) : !finalDisponible ? (
              <div className="locked-final">
                <span className="locked-icon">🔒</span>
                <p className="locked-text">Disponible desde el<br/><strong>14 de junio</strong></p>
              </div>
            ) : (
              <a href={LINK_FINAL} target="_blank" rel="noreferrer"
                className="pricing-button final-button">
                Seleccionar precio final
              </a>
            )}
          </div>
        </div>

        {/* ── PAGO SEGURO ── */}
        <div className="payment-info">
          <div className="payment-security">
            <div className="security-icon">🔒</div>
            <div>
              <h4>Pago 100% seguro</h4>
              <p>Procesado a través de</p>
            </div>
          </div>
          <div className="payment-methods">
            <div className="wompi-logo">
              <strong>Wompi</strong>
              <p>🔐 Encriptación SSL</p>
            </div>
            <div className="payment-icons">
              <span className="payment-icon">💳 VISA</span>
              <span className="payment-icon">💳 Mastercard</span>
              <span className="payment-icon">📱 Apple Pay</span>
            </div>
          </div>
        </div>

        {/* ── NOTA ── */}
        <div className="pricing-note">
          <p><strong>Gracias por hacer parte de esta primera experiencia Dale Flow.</strong></p>
          <p>Estamos muy emocionadas de recibirte 💛</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
