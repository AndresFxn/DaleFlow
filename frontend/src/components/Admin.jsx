import React, { useState } from 'react'
import './Admin.css'

const API = 'https://web-production-21875.up.railway.app/api'

const Admin = () => {
  const [key, setKey]               = useState('')
  const [authed, setAuthed]         = useState(false)
  const [data, setData]             = useState(null)
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState('')
  const [filtro, setFiltro]         = useState('todos')

  const login = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/admin/inscripciones`, {
        headers: { 'X-Admin-Key': key, 'Accept': 'application/json' }
      })
      if (res.status === 401) { setError('Clave incorrecta'); setLoading(false); return }
      const json = await res.json()
      setData(json)
      setAuthed(true)
    } catch {
      setError('No se pudo conectar con el servidor')
    }
    setLoading(false)
  }

  const refresh = async () => {
    setLoading(true)
    const url = filtro === 'todos'
      ? `${API}/admin/inscripciones`
      : `${API}/admin/inscripciones?estado=${filtro}`
    const res = await fetch(url, { headers: { 'X-Admin-Key': key, 'Accept': 'application/json' } })
    const json = await res.json()
    setData(json)
    setLoading(false)
  }

  const estadoBadge = (estado) => {
    const map = {
      pagado:    { label: 'Pagado ✓',   cls: 'badge-pagado' },
      pendiente: { label: 'Pendiente',  cls: 'badge-pendiente' },
      rechazado: { label: 'Rechazado',  cls: 'badge-rechazado' },
      anulado:   { label: 'Anulado',    cls: 'badge-anulado' },
    }
    const b = map[estado] || { label: estado, cls: '' }
    return <span className={`badge ${b.cls}`}>{b.label}</span>
  }

  // ── LOGIN ──
  if (!authed) return (
    <div className="admin-login">
      <div className="admin-login-card">
        <h1 className="admin-logo">DALE FLOW</h1>
        <p className="admin-login-sub">Panel de administración</p>
        <form onSubmit={login}>
          <input
            type="password"
            placeholder="Clave de acceso"
            value={key}
            onChange={e => setKey(e.target.value)}
            className="admin-input"
          />
          {error && <p className="admin-error">{error}</p>}
          <button type="submit" className="admin-btn" disabled={loading}>
            {loading ? 'Verificando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )

  const inscritas = data?.inscripciones || []
  const r = data?.resumen || {}

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1 className="admin-logo">DALE FLOW — Admin</h1>
        <button className="admin-btn-sm" onClick={refresh} disabled={loading}>
          {loading ? '...' : '↻ Actualizar'}
        </button>
      </div>

      {/* Resumen */}
      <div className="admin-stats">
        <div className="stat-card">
          <p className="stat-num">{r.total_inscritos}</p>
          <p className="stat-label">Total inscritas</p>
        </div>
        <div className="stat-card stat-green">
          <p className="stat-num">{r.total_pagados}</p>
          <p className="stat-label">Pagos confirmados</p>
        </div>
        <div className="stat-card stat-yellow">
          <p className="stat-num">{r.total_pendientes}</p>
          <p className="stat-label">Pendientes de pago</p>
        </div>
        <div className="stat-card">
          <p className="stat-num">{r.preventa}</p>
          <p className="stat-label">Preventa ($69k)</p>
        </div>
        <div className="stat-card">
          <p className="stat-num">{r.precio_final}</p>
          <p className="stat-label">Precio final ($79k)</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="admin-filters">
        {['todos','pagado','pendiente','rechazado'].map(f => (
          <button key={f}
            className={`filter-btn ${filtro === f ? 'active' : ''}`}
            onClick={() => { setFiltro(f); setTimeout(refresh, 100) }}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Tabla */}
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>WhatsApp</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cómo se enteró</th>
              <th>Estado</th>
              <th>Entrada</th>
              <th>Monto</th>
              <th>Pagado el</th>
              <th>Inscrita el</th>
            </tr>
          </thead>
          <tbody>
            {inscritas.length === 0 ? (
              <tr><td colSpan="11" className="empty">No hay registros</td></tr>
            ) : inscritas.map(i => (
              <tr key={i.id} className={i.estado_pago === 'pagado' ? 'row-pagado' : ''}>
                <td>{i.id}</td>
                <td className="td-nombre">{i.nombre}</td>
                <td><a href={`https://wa.me/57${i.whatsapp}`} target="_blank" rel="noreferrer">{i.whatsapp}</a></td>
                <td>{i.correo}</td>
                <td>{i.edad}</td>
                <td>{i.como_se_entero}</td>
                <td>{estadoBadge(i.estado_pago)}</td>
                <td>{i.tipo_entrada || '—'}</td>
                <td>{i.monto_pagado || '—'}</td>
                <td>{i.pagado_en || '—'}</td>
                <td>{i.inscrito_en}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin
