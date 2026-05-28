# 🔄 FLUJO DEL SISTEMA - DALE FLOW

## 📊 DIAGRAMA DE FLUJO COMPLETO

```
┌─────────────────────────────────────────────────────────────────┐
│                         USUARIO                                  │
│                            ↓                                     │
│                  Abre http://localhost:5173                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    LANDING PAGE (React)                          │
│                                                                  │
│  ┌──────────────┐                                               │
│  │   HERO       │  "DALE FLOW - mover. soltar. brillar."       │
│  │              │  Botón: "Inscríbete ahora"                   │
│  └──────────────┘                                               │
│         ↓                                                        │
│  ┌──────────────┐                                               │
│  │  EVENT INFO  │  Lugar, Fecha, Hora                          │
│  └──────────────┘                                               │
│         ↓                                                        │
│  ┌──────────────┐                                               │
│  │  FORMULARIO  │  ← Usuario completa datos                    │
│  │              │                                               │
│  │  • Nombre    │                                               │
│  │  • Edad      │                                               │
│  │  • WhatsApp  │                                               │
│  │  • Email     │                                               │
│  │  • Captación │                                               │
│  │  • Necesidad │                                               │
│  │  • Salud     │                                               │
│  │  • Permisos  │                                               │
│  └──────────────┘                                               │
│         ↓                                                        │
│  [Confirmar y ir a selección de entrada]                       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    Validación Frontend
                              ↓
                         ¿Válido?
                              ↓
                    ┌─────────┴─────────┐
                    │                   │
                   NO                  SÍ
                    │                   │
                    ↓                   ↓
            Mostrar errores    POST /api/inscripciones
            en formulario              ↓
                                       │
┌──────────────────────────────────────┼──────────────────────────┐
│                    BACKEND (Laravel)  ↓                          │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  InscripcionController::store()                          │  │
│  │                                                           │  │
│  │  1. Recibe datos del formulario                         │  │
│  │  2. Valida datos (Validator)                            │  │
│  │  3. ¿Válido?                                             │  │
│  │     ├─ NO → Retorna errores (422)                       │  │
│  │     └─ SÍ → Continúa                                     │  │
│  │  4. Guarda en PostgreSQL                                 │  │
│  │  5. Retorna success + payment_link                       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              ↓                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  PostgreSQL - Tabla: inscripciones                       │  │
│  │                                                           │  │
│  │  INSERT INTO inscripciones (                             │  │
│  │    nombre, edad, whatsapp, correo,                       │  │
│  │    como_se_entero, necesidad,                            │  │
│  │    autoriza_fotos, recibir_info,                         │  │
│  │    estado_pago, ...                                      │  │
│  │  ) VALUES (...)                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
                              ↓
                    Response JSON:
                    {
                      "success": true,
                      "message": "Inscripción exitosa",
                      "data": {...},
                      "payment_link": "https://..."
                    }
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                              │
│                                                                  │
│  1. Recibe respuesta exitosa                                    │
│  2. Muestra mensaje: "¡Inscripción exitosa!"                   │
│  3. Espera 2 segundos                                           │
│  4. Ejecuta: window.location.href = payment_link               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    WOMPI (Pasarela de Pago)                      │
│                                                                  │
│  Usuario completa el pago:                                      │
│  • Selecciona método de pago                                    │
│  • Ingresa datos de tarjeta                                     │
│  • Confirma pago                                                │
│                                                                  │
│  Wompi procesa el pago                                          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    ¡Inscripción Completada! ✅
```

---

## 🔄 FLUJO DETALLADO POR COMPONENTE

### 1️⃣ HERO COMPONENT

```
Usuario llega a la página
    ↓
Ve título: "DALE FLOW"
    ↓
Lee descripción de bienvenida
    ↓
Click en "Inscríbete ahora"
    ↓
Scroll suave al formulario
```

### 2️⃣ EVENT INFO COMPONENT

```
Muestra información del evento:
    ↓
📍 Lugar: Hotel Casa de los Virreyes
📅 Fecha: Sábado 20 de junio
🕐 Hora: 9:00 a.m. - 12:00 m.
    ↓
Nota informativa sobre el proceso
```

### 3️⃣ INSCRIPTION FORM COMPONENT (Principal)

```
Usuario ve formulario
    ↓
Completa campos:
    ├─ Datos personales
    ├─ ¿Cómo se enteró?
    ├─ Motivación y necesidad
    ├─ Condiciones de salud
    └─ Autorizaciones
    ↓
Click en "Confirmar y ir a selección de entrada"
    ↓
Validación Frontend (React)
    ├─ Campos requeridos
    ├─ Formato de email
    ├─ Edad válida
    └─ Checkboxes
    ↓
¿Válido?
    ├─ NO → Mostrar errores en rojo
    └─ SÍ → Enviar a API
         ↓
    axios.post('/api/inscripciones', data)
         ↓
    Mostrar "Procesando..."
         ↓
    Esperar respuesta
         ↓
    ¿Éxito?
         ├─ NO → Mostrar error
         └─ SÍ → Mostrar éxito
              ↓
         Esperar 2 segundos
              ↓
         Redirigir a Wompi
```

### 4️⃣ BACKEND API

```
Recibe POST /api/inscripciones
    ↓
InscripcionController::store()
    ↓
Validar datos con Validator
    ├─ nombre: required|string
    ├─ edad: required|integer
    ├─ whatsapp: required|string
    ├─ correo: required|email
    ├─ como_se_entero: required
    ├─ necesidad: required
    ├─ autoriza_fotos: required|boolean
    └─ recibir_info: required|boolean
    ↓
¿Válido?
    ├─ NO → Return 422 con errores
    └─ SÍ → Continuar
         ↓
    Inscripcion::create($data)
         ↓
    Guardar en PostgreSQL
         ↓
    Return 201 con:
         ├─ success: true
         ├─ message: "Inscripción exitosa"
         ├─ data: {...}
         └─ payment_link: "https://..."
```

### 5️⃣ BASE DE DATOS

```
INSERT INTO inscripciones
    ↓
Campos guardados:
    ├─ id (auto)
    ├─ nombre
    ├─ edad
    ├─ fecha_nacimiento
    ├─ whatsapp
    ├─ correo
    ├─ como_se_entero
    ├─ motivacion
    ├─ necesidad
    ├─ condicion_salud
    ├─ autoriza_fotos
    ├─ recibir_info
    ├─ estado_pago = 'pendiente'
    ├─ created_at (auto)
    └─ updated_at (auto)
    ↓
Registro guardado ✅
```

### 6️⃣ REDIRECCIÓN A WOMPI

```
Frontend recibe payment_link
    ↓
Muestra mensaje de éxito
    ↓
setTimeout(2000)
    ↓
window.location.href = payment_link
    ↓
Usuario es redirigido a Wompi
    ↓
Completa el pago
    ↓
¡Inscripción finalizada! 🎉
```

---

## 🔀 FLUJOS ALTERNATIVOS

### ❌ Error de Validación Frontend

```
Usuario envía formulario
    ↓
Validación Frontend
    ↓
Encuentra errores
    ↓
Muestra errores en rojo debajo de cada campo
    ↓
Usuario corrige errores
    ↓
Intenta nuevamente
```

### ❌ Error de Validación Backend

```
Frontend envía datos
    ↓
Backend valida
    ↓
Encuentra errores
    ↓
Return 422 con errores
    ↓
Frontend muestra errores
    ↓
Usuario corrige
    ↓
Intenta nuevamente
```

### ❌ Error de Conexión

```
Frontend envía datos
    ↓
No puede conectar con backend
    ↓
Catch error
    ↓
Muestra: "Error al procesar. Intenta nuevamente."
    ↓
Usuario intenta nuevamente
```

### ❌ Error de Base de Datos

```
Backend intenta guardar
    ↓
PostgreSQL retorna error
    ↓
Catch exception
    ↓
Return 500 con mensaje de error
    ↓
Frontend muestra error
    ↓
Usuario contacta soporte
```

---

## 📊 ESTADOS DEL SISTEMA

### Estado Inicial
```
Landing Page cargada
Formulario vacío
Sin errores
Botón habilitado
```

### Estado de Llenado
```
Usuario escribiendo
Validación en tiempo real
Errores se limpian al escribir
Botón habilitado
```

### Estado de Envío
```
Botón muestra "Procesando..."
Botón deshabilitado
Formulario bloqueado
Esperando respuesta
```

### Estado de Éxito
```
Mensaje verde: "¡Inscripción exitosa!"
Botón deshabilitado
Contador: "Redirigiendo en 2..."
Preparando redirección
```

### Estado de Error
```
Mensaje rojo con error
Botón habilitado
Formulario editable
Usuario puede reintentar
```

---

## 🔄 CICLO DE VIDA DE UNA INSCRIPCIÓN

```
1. CREACIÓN
   └─ Usuario completa formulario
   └─ Estado: pendiente

2. VALIDACIÓN
   └─ Frontend valida
   └─ Backend valida

3. GUARDADO
   └─ Se guarda en PostgreSQL
   └─ Estado: pendiente

4. REDIRECCIÓN
   └─ Usuario va a Wompi
   └─ Estado: pendiente

5. PAGO
   └─ Usuario paga en Wompi
   └─ Estado: pendiente (se actualiza manualmente)

6. CONFIRMACIÓN
   └─ Admin verifica pago
   └─ Estado: completado
```

---

## 🎯 PUNTOS DE INTEGRACIÓN

### Frontend ↔ Backend
```
Endpoint: POST /api/inscripciones
URL: http://localhost:8000/api/inscripciones
Content-Type: application/json
Body: { nombre, edad, whatsapp, ... }
Response: { success, message, data, payment_link }
```

### Backend ↔ Base de Datos
```
Driver: pgsql
Host: 127.0.0.1
Port: 5432
Database: daleflow
Table: inscripciones
```

### Frontend ↔ Wompi
```
Method: Redirect
URL: payment_link (desde backend)
Type: window.location.href
```

---

## 🔒 VALIDACIONES EN CADA CAPA

### Frontend (React)
- ✅ Campos requeridos no vacíos
- ✅ Email con formato válido
- ✅ Edad entre 1 y 120
- ✅ Fecha de nacimiento en el pasado

### Backend (Laravel)
- ✅ Tipos de datos correctos
- ✅ Longitud de strings
- ✅ Formato de email
- ✅ Valores booleanos
- ✅ Rangos numéricos

### Base de Datos (PostgreSQL)
- ✅ Constraints de NOT NULL
- ✅ Tipos de datos
- ✅ Valores por defecto

---

## 📈 MÉTRICAS DEL FLUJO

### Tiempo Estimado por Paso

```
1. Cargar landing page: 1-2 segundos
2. Leer información: 30-60 segundos
3. Completar formulario: 2-3 minutos
4. Validación y envío: 1-2 segundos
5. Redirección a Wompi: 2 segundos
6. Completar pago: 1-2 minutos

TOTAL: ~5-8 minutos
```

### Puntos de Abandono Posibles

```
1. Landing page (no convence)
2. Formulario muy largo
3. Error de validación
4. Error de conexión
5. Precio en Wompi
```

---

## 🎨 FLUJO VISUAL

```
┌─────────────┐
│   USUARIO   │
└──────┬──────┘
       │
       ↓
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│    HERO     │ →   │ EVENT INFO  │ →   │  FORMULARIO │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
                                               ↓
                                        ┌─────────────┐
                                        │   BACKEND   │
                                        └──────┬──────┘
                                               │
                                               ↓
                                        ┌─────────────┐
                                        │  POSTGRES   │
                                        └──────┬──────┘
                                               │
                                               ↓
                                        ┌─────────────┐
                                        │    WOMPI    │
                                        └─────────────┘
```

---

**¡Flujo completo documentado! 🔄**

*Entiende cómo funciona cada parte del sistema*
