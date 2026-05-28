# 🚀 INSTRUCCIONES DE INSTALACIÓN Y USO

## ⚡ Inicio Rápido

### 1️⃣ BACKEND (Laravel)

```bash
# Navegar a la carpeta backend
cd backend

# Instalar dependencias de PHP
composer install

# Copiar archivo de configuración
copy .env.example .env

# Generar clave de aplicación
php artisan key:generate
```

**Configurar base de datos:**

Editar el archivo `.env` y configurar PostgreSQL:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=daleflow
DB_USERNAME=postgres
DB_PASSWORD=TU_PASSWORD_AQUI
```

**Crear base de datos en PostgreSQL:**

```sql
CREATE DATABASE daleflow;
```

**Ejecutar migraciones:**

```bash
php artisan migrate
```

**Configurar link de pago de Wompi:**

En el archivo `.env`, agregar:

```env
WOMPI_PAYMENT_LINK=https://checkout.wompi.co/l/TU_LINK_DE_WOMPI
```

**Iniciar servidor:**

```bash
php artisan serve
```

✅ Backend corriendo en: `http://localhost:8000`

---

### 2️⃣ FRONTEND (React + Vite)

Abrir una **nueva terminal** y ejecutar:

```bash
# Navegar a la carpeta frontend
cd frontend

# Instalar dependencias de Node
npm install

# Iniciar servidor de desarrollo
npm run dev
```

✅ Frontend corriendo en: `http://localhost:5173`

---

## 🧪 PROBAR LA APLICACIÓN

1. Abrir navegador en `http://localhost:5173`
2. Completar el formulario de inscripción
3. Al enviar, se guardará en la base de datos
4. Automáticamente redirige al link de pago de Wompi

---

## 🔧 CONFIGURACIÓN ADICIONAL

### Cambiar Link de Wompi

Editar `backend/.env`:

```env
WOMPI_PAYMENT_LINK=https://checkout.wompi.co/l/TU_NUEVO_LINK
```

### Cambiar Información de Contacto

Editar `frontend/src/components/Footer.jsx`:

```jsx
<a href="https://wa.me/573001234567" ...>
  +57 300 123 4567
</a>
<a href="mailto:daleflow@experiencia.co" ...>
  daleflow@experiencia.co
</a>
```

### Cambiar Fechas del Evento

Editar `frontend/src/components/EventInfo.jsx` y `Pricing.jsx`

---

## 📦 COMPILAR PARA PRODUCCIÓN

### Backend

1. Configurar servidor con PHP 8.1+
2. Subir archivos del backend
3. Configurar `.env` con datos de producción
4. Ejecutar: `php artisan migrate --force`
5. Configurar CORS en `config/cors.php` con dominio real

### Frontend

```bash
cd frontend
npm run build
```

Los archivos compilados estarán en `frontend/dist/`

Subir estos archivos a tu hosting (Netlify, Vercel, etc.)

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error de CORS

Si el frontend no puede conectarse al backend:

1. Verificar que el backend esté corriendo en `http://localhost:8000`
2. Verificar `backend/config/cors.php` incluya `http://localhost:5173`

### Error de Base de Datos

1. Verificar que PostgreSQL esté corriendo
2. Verificar credenciales en `.env`
3. Verificar que la base de datos `daleflow` exista

### Error al Instalar Dependencias

**Backend:**
```bash
composer update
```

**Frontend:**
```bash
npm install --legacy-peer-deps
```

---

## 📊 VERIFICAR INSCRIPCIONES

Conectarse a PostgreSQL y ejecutar:

```sql
SELECT * FROM inscripciones ORDER BY created_at DESC;
```

O crear un endpoint adicional en Laravel para ver las inscripciones desde el navegador.

---

## 🎨 PERSONALIZACIÓN

### Cambiar Colores

Editar `frontend/src/index.css`:

```css
:root {
  --color-beige: #F5EDE4;
  --color-terracota: #D4A59A;
  --color-dorado: #D4AF37;
}
```

### Cambiar Tipografías

Editar `frontend/index.html` y cambiar los links de Google Fonts.

---

## ✅ CHECKLIST ANTES DE LANZAR

- [ ] Configurar link real de Wompi
- [ ] Actualizar información de contacto
- [ ] Verificar fechas del evento
- [ ] Probar formulario completo
- [ ] Verificar que el pago redirija correctamente
- [ ] Probar en móvil
- [ ] Configurar CORS para producción
- [ ] Hacer backup de base de datos

---

## 📞 CONTACTO

Si necesitas ayuda adicional, contacta al desarrollador.

**¡Éxito con Dale Flow! ✨**
