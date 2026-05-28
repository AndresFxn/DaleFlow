# ✅ CHECKLIST DE DESPLIEGUE - DALE FLOW

## 📋 ANTES DE LANZAR

### 🔧 Configuración Backend

- [ ] Instalar dependencias: `composer install`
- [ ] Copiar `.env.example` a `.env`
- [ ] Generar key: `php artisan key:generate`
- [ ] Configurar base de datos PostgreSQL en `.env`
- [ ] Crear base de datos: `CREATE DATABASE daleflow;`
- [ ] Ejecutar migraciones: `php artisan migrate`
- [ ] Configurar link real de Wompi en `.env`
- [ ] Verificar CORS para dominio de producción
- [ ] Probar endpoint: `GET http://localhost:8000/api/health`

### 🎨 Configuración Frontend

- [ ] Instalar dependencias: `npm install`
- [ ] Copiar `.env.example` a `.env`
- [ ] Configurar `VITE_API_URL` con URL de producción
- [ ] Actualizar información de contacto en `Footer.jsx`
- [ ] Verificar fechas del evento en `EventInfo.jsx`
- [ ] Verificar precios en `Pricing.jsx`
- [ ] Probar en modo desarrollo: `npm run dev`

### 📝 Contenido

- [ ] Actualizar WhatsApp en Footer: `+57 300 123 4567`
- [ ] Actualizar email en Footer: `daleflow@experiencia.co`
- [ ] Verificar fecha del evento: `Sábado 20 de junio`
- [ ] Verificar lugar: `Hotel Casa de los Virreyes, Barrio La Ermita`
- [ ] Verificar horario: `9:00 a.m. - 12:00 m.`
- [ ] Verificar preventa: `$69.000 COP (1-12 Junio)`
- [ ] Verificar precio final: `$79.000 COP (13-20 Junio)`

### 💳 Wompi

- [ ] Crear cuenta en Wompi
- [ ] Crear link de pago
- [ ] Configurar precio correcto
- [ ] Probar link de pago
- [ ] Actualizar `WOMPI_PAYMENT_LINK` en `.env`
- [ ] Verificar redirección funciona correctamente

### 🧪 Pruebas

- [ ] Probar formulario con datos válidos
- [ ] Probar formulario con datos inválidos
- [ ] Verificar validaciones frontend
- [ ] Verificar validaciones backend
- [ ] Probar redirección a Wompi
- [ ] Verificar datos se guardan en PostgreSQL
- [ ] Probar en Chrome
- [ ] Probar en Firefox
- [ ] Probar en Safari
- [ ] Probar en Edge

### 📱 Responsive

- [ ] Probar en desktop (1920x1080)
- [ ] Probar en laptop (1366x768)
- [ ] Probar en tablet (768x1024)
- [ ] Probar en móvil (375x667)
- [ ] Probar en móvil grande (414x896)
- [ ] Verificar scroll suave
- [ ] Verificar botones táctiles

### 🔒 Seguridad

- [ ] Verificar validaciones de email
- [ ] Verificar sanitización de inputs
- [ ] Verificar CORS configurado correctamente
- [ ] Verificar HTTPS en producción
- [ ] Verificar variables de entorno no expuestas
- [ ] Verificar `.env` en `.gitignore`

### 🚀 Despliegue Backend

- [ ] Elegir hosting (DigitalOcean, AWS, Heroku, etc.)
- [ ] Configurar servidor PHP 8.1+
- [ ] Instalar PostgreSQL
- [ ] Subir archivos del backend
- [ ] Configurar `.env` de producción
- [ ] Ejecutar: `composer install --optimize-autoloader --no-dev`
- [ ] Ejecutar: `php artisan migrate --force`
- [ ] Ejecutar: `php artisan config:cache`
- [ ] Ejecutar: `php artisan route:cache`
- [ ] Configurar dominio/subdominio
- [ ] Configurar SSL (HTTPS)
- [ ] Probar endpoint de producción

### 🚀 Despliegue Frontend

- [ ] Compilar: `npm run build`
- [ ] Verificar carpeta `dist/` generada
- [ ] Elegir hosting (Netlify, Vercel, etc.)
- [ ] Subir archivos de `dist/`
- [ ] Configurar variables de entorno
- [ ] Configurar dominio
- [ ] Configurar SSL (HTTPS)
- [ ] Probar sitio en producción

### 📊 Monitoreo

- [ ] Configurar logs de errores
- [ ] Configurar alertas de errores
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar Facebook Pixel (opcional)
- [ ] Monitorear inscripciones en base de datos

### 📧 Comunicación

- [ ] Preparar email de confirmación (opcional)
- [ ] Preparar mensaje de WhatsApp de confirmación
- [ ] Preparar respuestas automáticas
- [ ] Informar al equipo sobre lanzamiento

### 🔄 Post-Lanzamiento

- [ ] Verificar primera inscripción
- [ ] Verificar pago funciona
- [ ] Monitorear errores
- [ ] Responder consultas
- [ ] Hacer backup de base de datos diariamente

---

## 🚨 PROBLEMAS COMUNES Y SOLUCIONES

### Error: "CORS policy"
**Solución:** Verificar `backend/config/cors.php` incluya el dominio de producción

### Error: "Connection refused"
**Solución:** Verificar que el backend esté corriendo y la URL sea correcta

### Error: "Validation failed"
**Solución:** Verificar que todos los campos requeridos estén llenos

### Error: "Database connection failed"
**Solución:** Verificar credenciales de PostgreSQL en `.env`

### Error: "Payment link not working"
**Solución:** Verificar `WOMPI_PAYMENT_LINK` en `.env`

---

## 📞 CONTACTOS DE EMERGENCIA

- **Desarrollador:** [Tu contacto]
- **Hosting Backend:** [Soporte del hosting]
- **Hosting Frontend:** [Soporte del hosting]
- **Wompi Soporte:** [Contacto de Wompi]
- **PostgreSQL:** [DBA o soporte]

---

## 📈 MÉTRICAS A MONITOREAR

- [ ] Número de inscripciones por día
- [ ] Tasa de conversión (visitas → inscripciones)
- [ ] Canales de captación más efectivos
- [ ] Necesidades más comunes
- [ ] Tasa de autorización de fotos
- [ ] Tasa de suscripción a información futura
- [ ] Errores en el formulario
- [ ] Tiempo promedio de llenado

---

## 🎯 OBJETIVOS DE LANZAMIENTO

- [ ] Landing page en vivo
- [ ] Formulario funcionando
- [ ] Pagos procesándose
- [ ] Base de datos guardando inscripciones
- [ ] Sin errores críticos
- [ ] Responsive en todos los dispositivos
- [ ] Velocidad de carga < 3 segundos

---

## ✅ LISTO PARA LANZAR

Cuando todos los checkboxes estén marcados, ¡estás lista para lanzar Dale Flow! 🚀

---

**Última revisión:** [Fecha]  
**Revisado por:** [Nombre]  
**Estado:** [ ] Pendiente [ ] En progreso [ ] Completado

---

*¡Éxito con el lanzamiento! ✨*
