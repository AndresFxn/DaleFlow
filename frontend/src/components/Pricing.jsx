import React, { useState, useEffect } from 'react'
import './Pricing.css'

const LINK_PREVENTA = 'https://checkout.wompi.co/l/pcJ317'
const LINK_FINAL    = 'https://checkout.wompi.co/l/wP7Wda'

// Precio final disponible desde el 13 de junio de 2026 (medianoche Colombia UTC-5)
const FECHA_PRECIO_FINAL = new Date('2026-06-13T05:00:00.000Z')

const Pricing = () => {
  const [inscrito, setInscrito]         = useState(false)
  const [finalDisponible, setFinal]     = useState(false)
  const [hoy, setHoy]                   = useState('')

  useEffect(() => {
    // Verificar si ya completó el formulario
    setInscrito(localStorage.getItem('daleflow_inscrito') === 'true')

    // Verificar fecha para precio final
    const ahora = new Date()
    setFinal(ahora >= FECHA_PRECIO_FINAL)
    setHoy(ahora.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' }))

    // Escuchar el evento cuando se completa el formulario en la misma sesión
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
            <p className="pricing-date">Disponible hasta el 12 de junio</p>
            <ul className="pricing-features">
              <li>✓ Acceso a la experiencia Dale Flow</li>
              <li>✓ Espacio de movimiento y conexión</li>
              <li>✓ Refrigerio saludable</li>
              <li>✓ Cupos limitados</li>
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
            <p className="pricing-date">Disponible desde el 13 de junio</p>
            <ul className="pricing-features">
              <li>✓ Acceso a la experiencia Dale Flow</li>
              <li>✓ Espacio de movimiento y conexión</li>
              <li>✓ Refrigerio saludable</li>
              <li>✓ Cupos limitados</li>
            </ul>

            {!inscrito ? (
              <button className="pricing-button locked-button" onClick={scrollToForm}>
                🔒 Completa el formulario primero
              </button>
            ) : !finalDisponible ? (
              <div className="locked-final">
                <span className="locked-icon">🔒</span>
                <p className="locked-text">Disponible desde el<br/><strong>13 de junio</strong></p>
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
