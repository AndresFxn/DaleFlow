# 📁 ESTRUCTURA COMPLETA DEL PROYECTO

## 🎯 Resumen

Proyecto completo de landing page para inscripción al evento "DALE FLOW - mover. soltar. brillar."

**Stack Tecnológico:**
- Backend: Laravel 10 + PostgreSQL
- Frontend: React 18 + Vite
- Pagos: Wompi

---

## 📂 Estructura de Archivos

```
DaleFlow/
│
├── 📄 README.md                    # Documentación principal
├── 📄 INSTRUCCIONES.md             # Guía de instalación paso a paso
├── 📄 ESTRUCTURA-PROYECTO.md       # Este archivo
├── 📄 .gitignore                   # Archivos ignorados por Git
├── 📄 database-setup.sql           # Script SQL para crear BD
├── 📄 test-api.http                # Tests de API (REST Client)
│
├── 📁 imagenes-diseños/            # Imágenes de referencia del diseño
│   ├── 1 diseño admin.png
│   ├── 1 diseño clientes.png
│   ├── 2 diseño formulario.png
│   ├── paleta colores.jpeg
│   ├── version formulario paleta colores.png
│   └── version formulario-pasarela de pagos.png
│
├── 📁 backend/                     # API Laravel
│   ├── 📁 app/
│   │   ├── 📁 Http/
│   │   │   ├── 📁 Controllers/
│   │   │   │   └── InscripcionController.php    # Controlador principal
│   │   │   └── Kernel.php                       # Middleware HTTP
│   │   │
│   │   └── 📁 Models/
│   │       └── Inscripcion.php                  # Modelo de inscripción
│   │
│   ├── 📁 config/
│   │   ├── cors.php                             # Configuración CORS
│   │   └── database.php                         # Configuración BD
│   │
│   ├── 📁 database/
│   │   └── 📁 migrations/
│   │       └── 2024_01_01_000000_create_inscripciones_table.php
│   │
│   ├── 📁 routes/
│   │   └── api.php                              # Rutas de API
│   │
│   ├── .env.example                             # Variables de entorno
│   └── composer.json                            # Dependencias PHP
│
└── 📁 frontend/                    # Aplicación React
    ├── 📁 src/
    │   ├── 📁 components/
    │   │   ├── Hero.jsx                         # Sección hero
    │   │   ├── Hero.css
    │   │   ├── EventInfo.jsx                    # Información del evento
    │   │   ├── EventInfo.css
    │   │   ├── InscriptionForm.jsx              # Formulario principal
    │   │   ├── InscriptionForm.css
    │   │   ├── Pricing.jsx                      # Sección de precios
    │   │   ├── Pricing.css
    │   │   ├── Footer.jsx                       # Footer
    │   │   └── Footer.css
    │   │
    │   ├── App.jsx                              # Componente principal
    │   ├── App.css
    │   ├── main.jsx                             # Punto de entrada
    │   └── index.css                            # Estilos globales
    │
    ├── index.html                               # HTML principal
    ├── package.json                             # Dependencias Node
    └── vite.config.js                           # Configuración Vite
```

---

## 🔧 BACKEND - Archivos Clave

### 1. **InscripcionController.php**
- Maneja el endpoint POST `/api/inscripciones`
- Valida datos del formulario
- Guarda en base de datos
- Retorna link de pago de Wompi

### 2. **Inscripcion.php** (Modelo)
- Define la estructura de datos
- Campos fillable
- Casts de tipos de datos

### 3. **Migration**
- Crea tabla `inscripciones` con todos los campos
- Ejecutar con: `php artisan migrate`

### 4. **api.php** (Rutas)
- Define endpoint POST `/api/inscripciones`
- Endpoint GET `/api/health` para verificar estado

### 5. **cors.php**
- Permite peticiones desde `http://localhost:5173`
- Configurar para producción con dominio real

---

## 🎨 FRONTEND - Componentes

### 1. **Hero.jsx**
- Sección principal con título y CTA
- Botón que hace scroll al formulario
- Diseño elegante con gradientes

### 2. **EventInfo.jsx**
- Muestra lugar, fecha y hora del evento
- Cards con iconos
- Nota informativa sobre el proceso

### 3. **InscriptionForm.jsx** ⭐ (Componente Principal)
- Formulario completo con validaciones
- Maneja estado con useState
- Envía datos a API con axios
- Redirige a Wompi después de éxito
- Manejo de errores

**Campos del formulario:**
- Datos personales (nombre, edad, fecha nacimiento, whatsapp, correo)
- Captación (¿cómo se enteró?)
- Experiencia (motivación, necesidad)
- Salud (condiciones médicas)
- Autorizaciones (fotos, recibir info)

### 4. **Pricing.jsx**
- Muestra precios de preventa y final
- Cards elegantes con features
- Información de pago seguro
- Botones que llevan al formulario

### 5. **Footer.jsx**
- Información de contacto
- Detalles del evento
- Links sociales
- Copyright

---

## 🎨 DISEÑO Y ESTILOS

### Paleta de Colores

```css
--color-beige: #F5EDE4        /* Fondo principal */
--color-beige-dark: #E8DDD0   /* Fondo secundario */
--color-terracota: #D4A59A    /* Color principal */
--color-terracota-dark: #C89080
--color-dorado: #D4AF37       /* Acentos especiales */
--color-text-dark: #5A4A42    /* Texto principal */
--color-text-light: #8B7B73   /* Texto secundario */
```

### Tipografías

- **Headings:** Cormorant Garamond (serif, elegante)
- **Body:** Montserrat (sans-serif, moderna)

### Características de Diseño

- ✅ Bordes redondeados (border-radius: 20-30px)
- ✅ Sombras suaves
- ✅ Transiciones smooth
- ✅ Hover effects
- ✅ Responsive design
- ✅ Mobile-first approach

---

## 🔄 FLUJO DE LA APLICACIÓN

```
1. Usuario llega a la landing page
   ↓
2. Ve Hero + Información del evento
   ↓
3. Hace clic en "Inscríbete ahora"
   ↓
4. Scroll automático al formulario
   ↓
5. Completa el formulario
   ↓
6. Click en "Confirmar y ir a selección de entrada"
   ↓
7. Frontend valida datos
   ↓
8. Envía POST a /api/inscripciones
   ↓
9. Backend valida y guarda en PostgreSQL
   ↓
10. Backend retorna success + payment_link
    ↓
11. Frontend muestra mensaje de éxito
    ↓
12. Después de 2 segundos, redirige a Wompi
    ↓
13. Usuario completa el pago en Wompi
```

---

## 🗄️ BASE DE DATOS

### Tabla: inscripciones

| Campo | Tipo | Null | Default | Descripción |
|-------|------|------|---------|-------------|
| id | bigint | NO | AUTO | ID único |
| nombre | varchar(255) | NO | - | Nombre completo |
| edad | integer | NO | - | Edad |
| fecha_nacimiento | date | YES | NULL | Fecha de nacimiento |
| whatsapp | varchar(255) | NO | - | Número WhatsApp |
| correo | varchar(255) | NO | - | Email |
| como_se_entero | varchar(255) | NO | - | Canal de captación |
| motivacion | text | YES | NULL | Motivación |
| necesidad | varchar(255) | NO | - | Necesidad principal |
| condicion_salud | text | YES | NULL | Condiciones de salud |
| autoriza_fotos | boolean | NO | false | Autorización fotos |
| recibir_info | boolean | NO | false | Recibir información |
| estado_pago | varchar(255) | NO | 'pendiente' | Estado del pago |
| created_at | timestamp | YES | NOW() | Fecha creación |
| updated_at | timestamp | YES | NOW() | Fecha actualización |

---

## 🚀 COMANDOS ÚTILES

### Backend

```bash
# Instalar dependencias
composer install

# Generar key
php artisan key:generate

# Ejecutar migraciones
php artisan migrate

# Iniciar servidor
php artisan serve

# Ver rutas
php artisan route:list

# Limpiar cache
php artisan cache:clear
php artisan config:clear
```

### Frontend

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de producción
npm run preview
```

---

## 📊 ENDPOINTS DE API

### POST /api/inscripciones

**Request:**
```json
{
  "nombre": "string",
  "edad": number,
  "fecha_nacimiento": "YYYY-MM-DD" | null,
  "whatsapp": "string",
  "correo": "string",
  "como_se_entero": "string",
  "motivacion": "string" | null,
  "necesidad": "string",
  "condicion_salud": "string" | null,
  "autoriza_fotos": boolean,
  "recibir_info": boolean
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Inscripción registrada exitosamente",
  "data": { ... },
  "payment_link": "https://checkout.wompi.co/l/..."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error de validación",
  "errors": { ... }
}
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### Backend
- [x] Modelo Inscripcion
- [x] Migración de base de datos
- [x] Controlador con validaciones
- [x] Rutas de API
- [x] Configuración CORS
- [x] Variables de entorno

### Frontend
- [x] Componente Hero
- [x] Componente EventInfo
- [x] Componente InscriptionForm
- [x] Componente Pricing
- [x] Componente Footer
- [x] Estilos responsive
- [x] Validaciones de formulario
- [x] Integración con API
- [x] Redirección a Wompi

### Documentación
- [x] README.md
- [x] INSTRUCCIONES.md
- [x] ESTRUCTURA-PROYECTO.md
- [x] test-api.http
- [x] database-setup.sql

---

## 🎯 PRÓXIMOS PASOS

1. ✅ Instalar dependencias (backend y frontend)
2. ✅ Configurar base de datos PostgreSQL
3. ✅ Ejecutar migraciones
4. ✅ Configurar link de Wompi
5. ✅ Probar formulario completo
6. ✅ Verificar redirección a pago
7. ✅ Ajustar información de contacto
8. ✅ Desplegar a producción

---

**¡Proyecto listo para usar! 🚀**
