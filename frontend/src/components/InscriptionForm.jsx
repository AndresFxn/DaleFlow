import React, { useState } from 'react'
import './InscriptionForm.css'

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    fecha_nacimiento: '',
    whatsapp: '',
    correo: '',
    como_se_entero: '',
    motivacion: '',
    necesidad: '',
    condicion_salud: '',
    autoriza_fotos: false,
    recibir_info: false,
  })

  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!formData.nombre.trim())  e.nombre  = 'El nombre es requerido'
    if (!formData.edad)           e.edad    = 'La edad es requerida'
    if (!formData.whatsapp.trim()) e.whatsapp = 'El WhatsApp es requerido'
    if (!formData.correo.trim())  e.correo  = 'El correo es requerido'
    else if (!/\S+@\S+\.\S+/.test(formData.correo)) e.correo = 'Correo inválido'
    if (!formData.como_se_entero) e.como_se_entero = 'Selecciona una opción'
    if (!formData.necesidad)      e.necesidad = 'Selecciona una opción'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      setMessage({ type: 'error', text: 'Por favor completa todos los campos requeridos' })
      return
    }

    setLoading(true)
    setMessage({ type: '', text: '' })

    const payload = {
      nombre:           formData.nombre.trim(),
      edad:             parseInt(formData.edad, 10),
      fecha_nacimiento: formData.fecha_nacimiento || null,
      whatsapp:         formData.whatsapp.trim(),
      correo:           formData.correo.trim(),
      como_se_entero:   formData.como_se_entero,
      motivacion:       formData.motivacion.trim() || null,
      necesidad:        formData.necesidad,
      condicion_salud:  formData.condicion_salud.trim() || null,
      autoriza_fotos:   formData.autoriza_fotos === true,
      recibir_info:     formData.recibir_info === true,
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

      const res = await fetch(`${apiUrl}/inscripciones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        // Marcar formulario como completado para desbloquear precios
        localStorage.setItem('daleflow_inscrito', 'true')
        // Disparar evento para que Pricing se actualice sin recargar
        window.dispatchEvent(new Event('daleflow_inscrito'))
        setMessage({ type: 'success', text: '¡Inscripción exitosa! Ve a la sección de precios para seleccionar tu entrada.' })
        // Scroll a la sección de precios
        setTimeout(() => {
          document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })
        }, 1500)
      } else {
        // Mostrar errores de validación del backend
        if (data.errors) setErrors(data.errors)
        setMessage({ type: 'error', text: data.message || 'Error al procesar la inscripción.' })
      }
    } catch (err) {
      console.error('Fetch error:', err)
      setMessage({ type: 'error', text: 'No se pudo conectar con el servidor. Verifica que el backend esté corriendo en http://localhost:8000' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="inscription-form" className="inscription-form section">
      <div className="container">
        <div className="form-header">
          <h2 className="form-title">INSCRIPCIÓN</h2>
          <p className="form-subtitle">Completa tus datos para reservar tu lugar</p>
        </div>

        <form onSubmit={handleSubmit} className="form" noValidate>

          {message.text && (
            <div className={`form-message ${message.type}`}>
              {message.text}
            </div>
          )}

          {/* ── Datos personales ── */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">👤</span>
              Datos personales
            </h3>

            <div className="form-group">
              <label className="field-label" htmlFor="nombre">Nombre completo *</label>
              <input type="text" id="nombre" name="nombre"
                value={formData.nombre} onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
                className={errors.nombre ? 'error' : ''} />
              {errors.nombre && <span className="error-text">{errors.nombre}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="field-label" htmlFor="edad">Edad *</label>
                <input type="number" id="edad" name="edad"
                  value={formData.edad} onChange={handleChange}
                  placeholder="Ej: 25" min="1" max="120"
                  className={errors.edad ? 'error' : ''} />
                {errors.edad && <span className="error-text">{errors.edad}</span>}
              </div>
              <div className="form-group">
                <label className="field-label" htmlFor="fecha_nacimiento">Fecha de nacimiento (opcional)</label>
                <input type="date" id="fecha_nacimiento" name="fecha_nacimiento"
                  value={formData.fecha_nacimiento} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label className="field-label" htmlFor="whatsapp">Número de WhatsApp *</label>
              <input type="tel" id="whatsapp" name="whatsapp"
                value={formData.whatsapp} onChange={handleChange}
                placeholder="+57 300 123 4567"
                className={errors.whatsapp ? 'error' : ''} />
              {errors.whatsapp && <span className="error-text">{errors.whatsapp}</span>}
            </div>

            <div className="form-group">
              <label className="field-label" htmlFor="correo">Correo electrónico *</label>
              <input type="email" id="correo" name="correo"
                value={formData.correo} onChange={handleChange}
                placeholder="ejemplo@correo.com"
                className={errors.correo ? 'error' : ''} />
              {errors.correo && <span className="error-text">{errors.correo}</span>}
            </div>
          </div>

          {/* ── Captación ── */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">💭</span>
              ¿Cómo te enteraste de Dale Flow? *
            </h3>
            <div className="radio-group">
              {['Instagram','Canal local','Recomendación','WhatsApp','Amiga','Otro'].map(opt => (
                <label key={opt} className="radio-label">
                  <input type="radio" name="como_se_entero" value={opt}
                    checked={formData.como_se_entero === opt} onChange={handleChange} />
                  <span className="radio-custom"></span>
                  {opt}
                </label>
              ))}
            </div>
            {errors.como_se_entero && <span className="error-text">{errors.como_se_entero}</span>}
          </div>

          {/* ── Necesidad ── */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">✨</span>
              En este momento de tu vida, ¿qué sientes que más necesitas? *
            </h3>
            <div className="radio-group">
              {['Desconectar de estrés','Sentirme más tranquila','Volver a conectar conmigo',
                'Divertirme','Conocer nuevas mujeres','Regalarme tiempo para mí','Otra'].map(opt => (
                <label key={opt} className="radio-label">
                  <input type="radio" name="necesidad" value={opt}
                    checked={formData.necesidad === opt} onChange={handleChange} />
                  <span className="radio-custom"></span>
                  {opt}
                </label>
              ))}
            </div>
            {errors.necesidad && <span className="error-text">{errors.necesidad}</span>}
          </div>

          {/* ── Motivación ── */}
          <div className="form-section">
            <div className="form-group">
              <label className="field-label" htmlFor="motivacion">
                ¿Qué te motivó a querer vivir esta experiencia? (opcional)
              </label>
              <textarea id="motivacion" name="motivacion"
                value={formData.motivacion} onChange={handleChange}
                placeholder="Cuéntanos brevemente..." rows="4" />
            </div>
          </div>

          {/* ── Salud ── */}
          <div className="form-section">
            <div className="form-group">
              <label className="field-label" htmlFor="condicion_salud">
                ¿Tienes alguna condición de salud o limitación física? (opcional)
              </label>
              <textarea id="condicion_salud" name="condicion_salud"
                value={formData.condicion_salud} onChange={handleChange}
                placeholder="Escribe aquí (opcional)" rows="3" />
            </div>
          </div>

          {/* ── Autorizaciones ── */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">📸</span>
              Autorizaciones
            </h3>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" name="autoriza_fotos"
                  checked={formData.autoriza_fotos} onChange={handleChange} />
                <span className="checkbox-custom"></span>
                <span>
                  Durante la experiencia se podrán tomar fotografías y videos para redes sociales
                  y contenido de marca Dale Flow.<br />
                  <strong>¿Autorizas el uso de tu imagen?</strong>
                </span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="recibir_info"
                  checked={formData.recibir_info} onChange={handleChange} />
                <span className="checkbox-custom"></span>
                <span>¿Te gustaría recibir información de futuros eventos?</span>
              </label>
            </div>
          </div>

          {/* ── Botón ── */}
          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Procesando...' : 'Confirmar y ir a selección de entrada →'}
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default InscriptionForm
