import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('inscription-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">

      {/* ── COL IZQUIERDA: arco iluminado + pedestal + pampas ── */}
      <div className="hero-left">
        <div className="hero-arch-wrap">
          {/* Pampas izquierdo */}
          <div className="pampas pampas-l">
            <svg viewBox="0 0 50 130" fill="none">
              <line x1="25" y1="130" x2="18" y2="20" stroke="#C9A96E" strokeWidth="1.5"/>
              <line x1="25" y1="130" x2="32" y2="25" stroke="#C9A96E" strokeWidth="1.5"/>
              <line x1="25" y1="130" x2="25" y2="30" stroke="#C9A96E" strokeWidth="1.2"/>
              {[0,1,2,3,4,5,6,7,8].map(i => (
                <ellipse key={i}
                  cx={18 + i * 0.8} cy={20 + i * 8}
                  rx="5" ry="2.5"
                  fill="#C9A96E" opacity={0.25 + i * 0.06}
                  transform={`rotate(${-40 + i * 8} ${18 + i * 0.8} ${20 + i * 8})`}
                />
              ))}
              {[0,1,2,3,4,5,6,7,8].map(i => (
                <ellipse key={i + 10}
                  cx={32 - i * 0.8} cy={25 + i * 8}
                  rx="5" ry="2.5"
                  fill="#C9A96E" opacity={0.25 + i * 0.06}
                  transform={`rotate(${40 - i * 8} ${32 - i * 0.8} ${25 + i * 8})`}
                />
              ))}
            </svg>
          </div>

          {/* Arco */}
          <div className="arch">
            <div className="arch-glow" />
            <div className="arch-content">
              <p className="arch-brand">DALE FLOW</p>
              <p className="arch-tagline">mover. soltar. brillar.</p>
              <span className="arch-heart">♡</span>
            </div>
            <div className="arch-pedestal" />
          </div>

          {/* Pampas derecho del arco */}
          <div className="pampas pampas-r">
            <svg viewBox="0 0 50 130" fill="none">
              <line x1="25" y1="130" x2="18" y2="20" stroke="#C9A96E" strokeWidth="1.5"/>
              <line x1="25" y1="130" x2="32" y2="25" stroke="#C9A96E" strokeWidth="1.5"/>
              {[0,1,2,3,4,5,6,7,8].map(i => (
                <ellipse key={i}
                  cx={18 + i * 0.8} cy={20 + i * 8}
                  rx="5" ry="2.5"
                  fill="#C9A96E" opacity={0.25 + i * 0.06}
                  transform={`rotate(${-40 + i * 8} ${18 + i * 0.8} ${20 + i * 8})`}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* ── COL CENTRAL: texto + info evento ── */}
      <div className="hero-center">
        <span className="hero-badge">EXPERIENCIA</span>
        <h1 className="hero-title">DALE FLOW</h1>
        <p className="hero-subtitle">mover. soltar. brillar.</p>
        <div className="hero-heart-icon">♡</div>

        <div className="hero-welcome">
          <span>✨</span>
          <strong>Bienvenida</strong>
          <span>✨</span>
        </div>

        <p className="hero-desc">
          Nos emociona muchísimo que quieras ser parte de esta primera experiencia Dale Flow.
        </p>
        <p className="hero-desc">
          Una noche diseñada para mujeres que desean regalarse un momento para moverse, respirar, conectar, soltar y volver a sí mismas.
        </p>

        {/* Info del evento */}
        <div className="hero-event-row">
          <div className="event-pill">
            <span className="event-pill-icon">📍</span>
            <div>
              <p className="event-pill-main">Hotel Casa de los Virreyes</p>
              <p className="event-pill-sub">Calle 2 # 4-03, Barrio La Ermita</p>
            </div>
          </div>
          <div className="event-pill">
            <span className="event-pill-icon">📅</span>
            <div>
              <p className="event-pill-main">Sábado 20 de junio</p>
            </div>
          </div>
          <div className="event-pill">
            <span className="event-pill-icon">🕐</span>
            <div>
              <p className="event-pill-main">5:00 p.m.</p>
            </div>
          </div>
        </div>

        <p className="hero-cupos">Los cupos son limitados.</p>
      </div>

      {/* ── COL DERECHA: bailarina + nota ── */}
      <div className="hero-right">
        {/* Rama dorada */}
        <svg className="branch-deco" viewBox="0 0 100 200" fill="none">
          <path d="M50 200 Q48 160 44 120 Q40 90 36 55" stroke="#C9A96E" strokeWidth="2" fill="none"/>
          <path d="M44 120 Q28 108 14 100" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
          <path d="M46 140 Q30 132 16 128" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
          <path d="M42 100 Q56 86 66 72" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
          <path d="M40 80  Q54 68 62 55" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
          {[[14,100],[16,128],[66,72],[62,55],[28,108],[30,132]].map(([x,y],i) => (
            <ellipse key={i} cx={x} cy={y} rx="9" ry="4.5" fill="#C9A96E" opacity="0.55"
              transform={`rotate(${-35 + i * 14} ${x} ${y})`}/>
          ))}
        </svg>

        {/* Bailarina */}
        <div className="dancer-container">
          {/* Aura circular */}
          <div className="dancer-aura" />

          {/* SVG bailarina */}
          <svg className="dancer-svg" viewBox="0 0 180 340" fill="none">
            {/* Trazo de movimiento */}
            <path d="M30 310 Q70 230 110 160 Q135 115 155 60"
              stroke="rgba(212,144,122,0.18)" strokeWidth="55" strokeLinecap="round" fill="none"/>
            {/* Cabeza */}
            <circle cx="108" cy="52" r="19" fill="#D4907A"/>
            {/* Cabello */}
            <path d="M92 42 Q82 26 98 20 Q114 14 122 30 Q130 46 120 58 Q108 38 92 42Z" fill="#4A2C1A"/>
            <path d="M120 52 Q136 42 140 58 Q130 72 120 67Z" fill="#4A2C1A"/>
            {/* Cuello */}
            <rect x="103" y="68" width="10" height="10" rx="3" fill="#D4907A"/>
            {/* Torso */}
            <path d="M93 78 Q82 96 80 122 Q90 128 108 126 Q122 124 126 117 Q122 94 112 78Z" fill="#C8705A"/>
            {/* Brazo izq arriba */}
            <path d="M93 82 Q72 68 52 46 Q46 40 43 34"
              stroke="#D4907A" strokeWidth="9" strokeLinecap="round" fill="none"/>
            <circle cx="42" cy="32" r="5.5" fill="#D4907A"/>
            {/* Brazo der lateral */}
            <path d="M112 84 Q132 94 152 100 Q160 102 165 105"
              stroke="#D4907A" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <circle cx="166" cy="106" r="4.5" fill="#D4907A"/>
            {/* Falda fluyendo */}
            <path d="M80 122 Q56 158 44 212 Q66 200 88 178 Q94 194 100 220 Q108 194 116 178 Q138 204 152 214 Q140 160 126 117Z"
              fill="#C8705A" opacity="0.92"/>
            <path d="M83 136 Q52 178 38 240 Q64 218 87 192" fill="#D4907A" opacity="0.45"/>
            <path d="M120 130 Q150 172 162 232 Q136 208 113 182" fill="#D4907A" opacity="0.45"/>
            {/* Pierna izq */}
            <path d="M88 210 Q78 252 73 295"
              stroke="#D4907A" strokeWidth="10" strokeLinecap="round" fill="none"/>
            {/* Pierna der levantada */}
            <path d="M112 210 Q134 242 156 264 Q164 272 168 278"
              stroke="#D4907A" strokeWidth="10" strokeLinecap="round" fill="none"/>
            {/* Destellos */}
            <circle cx="168" cy="46" r="3.5" fill="#C9A96E" opacity="0.85"/>
            <circle cx="28"  cy="96" r="2.5" fill="#C9A96E" opacity="0.65"/>
            <circle cx="172" cy="148" r="3"  fill="#C9A96E" opacity="0.75"/>
            <path d="M158 36 L161 30 L164 36 L161 42Z" fill="#C9A96E" opacity="0.8"/>
            <path d="M22 126 L24 120 L26 126 L24 132Z" fill="#C9A96E" opacity="0.6"/>
          </svg>
        </div>

        {/* Nota de pago */}
        <div className="hero-payment-note">
          <div className="note-i-icon">i</div>
          <p>Una vez completes este formulario serás dirigida al enlace de pago para confirmar tu inscripción ✨</p>
        </div>
      </div>

    </section>
  )
}

export default Hero
