# 🌟 DALE FLOW - Landing Page de Inscripción

> **mover. soltar. brillar.**

Landing page completa para el evento "DALE FLOW - mover. soltar. brillar."

---

## 🚀 INICIO RÁPIDO

### ¿Primera vez aquí?

1. **Lee primero:** [RESUMEN-EJECUTIVO.md](RESUMEN-EJECUTIVO.md)
2. **Instala:** Ejecuta `install.bat`
3. **Configura:** Sigue [INSTRUCCIONES.md](INSTRUCCIONES.md)
4. **Inicia:** Ejecuta `start.bat`

### ¿Buscas algo específico?

Consulta el [INDICE.md](INDICE.md) para encontrar la documentación que necesitas.

---

## 🎯 Características

- ✅ Backend Laravel con API REST
- ✅ Frontend React + Vite
- ✅ Base de datos PostgreSQL
- ✅ Formulario de inscripción completo
- ✅ Integración con Wompi para pagos
- ✅ Diseño responsive y elegante
- ✅ Validaciones frontend y backend

## 📁 Estructura del Proyecto

```
DaleFlow/
├── backend/          # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/
│   │   │       └── InscripcionController.php
│   │   └── Models/
│   │       └── Inscripcion.php
│   ├── database/
│   │   └── migrations/
│   ├── routes/
│   │   └── api.php
│   └── config/
│       └── cors.php
│
└── frontend/         # React + Vite
    ├── src/
    │   ├── components/
    │   │   ├── Hero.jsx
    │   │   ├── EventInfo.jsx
    │   │   ├── InscriptionForm.jsx
    │   │   ├── Pricing.jsx
    │   │   └── Footer.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## 🚀 Instalación

### Requisitos Previos

- PHP >= 8.1
- Composer
- Node.js >= 18
- PostgreSQL >= 13

### 1. Backend (Laravel)

```bash
cd backend

# Instalar dependencias
composer install

# Copiar archivo de entorno
copy .env.example .env

# Generar key de aplicación
php artisan key:generate

# Configurar base de datos en .env
# DB_CONNECTION=pgsql
# DB_HOST=127.0.0.1
# DB_PORT=5432
# DB_DATABASE=daleflow
# DB_USERNAME=postgres
# DB_PASSWORD=tu_password

# Crear base de datos
# En PostgreSQL: CREATE DATABASE daleflow;

# Ejecutar migraciones
php artisan migrate

# Configurar link de pago de Wompi en .env
# WOMPI_PAYMENT_LINK=https://checkout.wompi.co/l/TU_LINK

# Iniciar servidor
php artisan serve
```

El backend estará disponible en: `http://localhost:8000`

### 2. Frontend (React)

```bash
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

## 🔧 Configuración

### Backend (.env)

```env
APP_NAME="Dale Flow"
APP_URL=http://localhost:8000

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=daleflow
DB_USERNAME=postgres
DB_PASSWORD=tu_password

WOMPI_PAYMENT_LINK=https://checkout.wompi.co/l/TU_LINK
FRONTEND_URL=http://localhost:5173
```

### Configurar CORS

El archivo `config/cors.php` ya está configurado para permitir peticiones desde `http://localhost:5173`

## 📡 API Endpoints

### POST /api/inscripciones

Registra una nueva inscripción.

**Request Body:**
```json
{
  "nombre": "María García",
  "edad": 28,
  "fecha_nacimiento": "1998-05-15",
  "whatsapp": "+57 300 123 4567",
  "correo": "maria@ejemplo.com",
  "como_se_entero": "Instagram",
  "motivacion": "Quiero reconectarme conmigo misma",
  "necesidad": "Desconectar de estrés",
  "condicion_salud": "Ninguna",
  "autoriza_fotos": true,
  "recibir_info": true
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Inscripción registrada exitosamente",
  "data": { ... },
  "payment_link": "https://checkout.wompi.co/l/TU_LINK"
}
```

## 🎨 Diseño

El diseño está basado en la imagen de referencia con:

- **Colores:**
  - Beige: `#F5EDE4`
  - Terracota: `#D4A59A`
  - Dorado: `#D4AF37`
  
- **Tipografías:**
  - Headings: Cormorant Garamond
  - Body: Montserrat

- **Estilo:** Femenino, elegante, minimalista

## 💳 Integración de Pagos (Wompi)

Después de completar el formulario, el usuario es redirigido automáticamente al link de pago de Wompi configurado en el `.env`:

```javascript
window.location.href = response.data.payment_link
```

## 📱 Responsive

El diseño es completamente responsive y se adapta a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔒 Validaciones

### Frontend
- Campos requeridos
- Formato de email
- Edad mínima/máxima
- Fecha de nacimiento válida

### Backend
- Validación de tipos de datos
- Validación de formato de email
- Validación de rangos numéricos
- Sanitización de inputs

## 📊 Base de Datos

### Tabla: inscripciones

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | bigint | ID autoincremental |
| nombre | string | Nombre completo |
| edad | integer | Edad |
| fecha_nacimiento | date | Fecha de nacimiento (opcional) |
| whatsapp | string | Número de WhatsApp |
| correo | string | Correo electrónico |
| como_se_entero | string | Canal de captación |
| motivacion | text | Motivación (opcional) |
| necesidad | string | Necesidad principal |
| condicion_salud | text | Condiciones de salud (opcional) |
| autoriza_fotos | boolean | Autorización de uso de imagen |
| recibir_info | boolean | Recibir información futura |
| estado_pago | string | Estado del pago (default: pendiente) |
| created_at | timestamp | Fecha de creación |
| updated_at | timestamp | Fecha de actualización |

## 🚀 Despliegue a Producción

### Backend

1. Configurar servidor con PHP 8.1+
2. Instalar PostgreSQL
3. Configurar variables de entorno
4. Ejecutar migraciones
5. Configurar CORS para dominio de producción

### Frontend

```bash
npm run build
```

Los archivos compilados estarán en `dist/` listos para desplegar en cualquier hosting estático.

## 📝 Notas Importantes

- Cambiar `WOMPI_PAYMENT_LINK` en `.env` por tu link real de Wompi
- Actualizar información de contacto en el Footer
- Configurar CORS para dominios de producción
- Revisar límites de cupos si es necesario

## 🤝 Soporte

Para cualquier duda o problema, contactar a través de:
- WhatsApp: +57 300 123 4567
- Email: daleflow@experiencia.co

---

**Hecho con ♡ para Dale Flow**
