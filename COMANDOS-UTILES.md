# 🔧 COMANDOS ÚTILES - DALE FLOW

## 🚀 INICIO RÁPIDO

### Backend
```bash
cd backend
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 📦 BACKEND (Laravel)

### Instalación y Configuración
```bash
# Instalar dependencias
composer install

# Actualizar dependencias
composer update

# Copiar archivo de entorno
copy .env.example .env

# Generar clave de aplicación
php artisan key:generate

# Crear enlace simbólico de storage
php artisan storage:link
```

### Base de Datos
```bash
# Ejecutar migraciones
php artisan migrate

# Ejecutar migraciones en producción
php artisan migrate --force

# Revertir última migración
php artisan migrate:rollback

# Revertir todas las migraciones
php artisan migrate:reset

# Refrescar base de datos (drop + migrate)
php artisan migrate:fresh

# Ver estado de migraciones
php artisan migrate:status
```

### Servidor
```bash
# Iniciar servidor de desarrollo
php artisan serve

# Iniciar en puerto específico
php artisan serve --port=8080

# Iniciar en host específico
php artisan serve --host=0.0.0.0
```

### Cache
```bash
# Limpiar cache de aplicación
php artisan cache:clear

# Limpiar cache de configuración
php artisan config:clear

# Limpiar cache de rutas
php artisan route:clear

# Limpiar cache de vistas
php artisan view:clear

# Limpiar todo
php artisan optimize:clear

# Cachear configuración (producción)
php artisan config:cache

# Cachear rutas (producción)
php artisan route:cache
```

### Información
```bash
# Ver todas las rutas
php artisan route:list

# Ver rutas de API
php artisan route:list --path=api

# Ver información de Laravel
php artisan about

# Ver versión de Laravel
php artisan --version
```

### Mantenimiento
```bash
# Poner en modo mantenimiento
php artisan down

# Salir de modo mantenimiento
php artisan up

# Modo mantenimiento con secreto
php artisan down --secret="mi-secreto-123"
# Acceder: http://tudominio.com/mi-secreto-123
```

---

## 🎨 FRONTEND (React + Vite)

### Instalación
```bash
# Instalar dependencias
npm install

# Instalar con legacy peer deps (si hay conflictos)
npm install --legacy-peer-deps

# Instalar dependencia específica
npm install axios

# Instalar dependencia de desarrollo
npm install -D @types/react
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

# Iniciar en puerto específico
npm run dev -- --port 3000

# Iniciar y abrir navegador
npm run dev -- --open
```

### Producción
```bash
# Compilar para producción
npm run build

# Preview de build de producción
npm run preview

# Preview en puerto específico
npm run preview -- --port 4173
```

### Mantenimiento
```bash
# Limpiar node_modules y reinstalar
rmdir /s /q node_modules
npm install

# Limpiar cache de npm
npm cache clean --force

# Actualizar dependencias
npm update

# Ver dependencias desactualizadas
npm outdated

# Auditar seguridad
npm audit

# Arreglar vulnerabilidades
npm audit fix
```

---

## 🗄️ POSTGRESQL

### Conexión
```bash
# Conectar a PostgreSQL
psql -U postgres

# Conectar a base de datos específica
psql -U postgres -d daleflow
```

### Base de Datos
```sql
-- Crear base de datos
CREATE DATABASE daleflow;

-- Listar bases de datos
\l

-- Conectar a base de datos
\c daleflow

-- Eliminar base de datos
DROP DATABASE daleflow;
```

### Tablas
```sql
-- Listar tablas
\dt

-- Describir tabla
\d inscripciones

-- Ver todas las inscripciones
SELECT * FROM inscripciones;

-- Ver inscripciones recientes
SELECT * FROM inscripciones ORDER BY created_at DESC LIMIT 10;

-- Contar inscripciones
SELECT COUNT(*) FROM inscripciones;

-- Contar por estado de pago
SELECT estado_pago, COUNT(*) as total 
FROM inscripciones 
GROUP BY estado_pago;

-- Ver inscripciones de hoy
SELECT * FROM inscripciones 
WHERE DATE(created_at) = CURRENT_DATE;

-- Estadísticas de captación
SELECT como_se_entero, COUNT(*) as total 
FROM inscripciones 
GROUP BY como_se_entero 
ORDER BY total DESC;

-- Necesidades más comunes
SELECT necesidad, COUNT(*) as total 
FROM inscripciones 
GROUP BY necesidad 
ORDER BY total DESC;

-- Exportar a CSV
\copy (SELECT * FROM inscripciones) TO 'inscripciones.csv' CSV HEADER;
```

### Backup
```bash
# Hacer backup
pg_dump -U postgres daleflow > backup.sql

# Restaurar backup
psql -U postgres daleflow < backup.sql

# Backup con fecha
pg_dump -U postgres daleflow > backup_%date:~-4,4%%date:~-7,2%%date:~-10,2%.sql
```

---

## 🔍 TESTING

### Backend
```bash
# Ejecutar tests
php artisan test

# Ejecutar tests con coverage
php artisan test --coverage

# Ejecutar test específico
php artisan test --filter=InscripcionTest
```

### Frontend
```bash
# Si tienes tests configurados
npm run test

# Tests en modo watch
npm run test:watch

# Coverage
npm run test:coverage
```

---

## 🐛 DEBUGGING

### Backend
```bash
# Ver logs en tiempo real
tail -f storage/logs/laravel.log

# Ver últimas 50 líneas del log
tail -n 50 storage/logs/laravel.log

# Limpiar logs
echo "" > storage/logs/laravel.log
```

### Frontend
```bash
# Ver errores de compilación
npm run dev

# Verificar sintaxis
npm run lint
```

---

## 📊 MONITOREO

### Ver inscripciones en tiempo real
```sql
-- En PostgreSQL, ejecutar cada 5 segundos
SELECT COUNT(*) as total, 
       MAX(created_at) as ultima_inscripcion 
FROM inscripciones;
```

### Ver logs de API
```bash
# Backend
tail -f storage/logs/laravel.log | grep "inscripciones"
```

---

## 🚀 DESPLIEGUE

### Backend (Producción)
```bash
# Instalar dependencias optimizadas
composer install --optimize-autoloader --no-dev

# Cachear todo
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Ejecutar migraciones
php artisan migrate --force

# Optimizar
php artisan optimize
```

### Frontend (Producción)
```bash
# Compilar
npm run build

# Los archivos estarán en dist/
# Subir contenido de dist/ a tu hosting
```

---

## 🔧 SOLUCIÓN DE PROBLEMAS

### Limpiar todo (Backend)
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
composer dump-autoload
```

### Limpiar todo (Frontend)
```bash
rmdir /s /q node_modules
rmdir /s /q dist
npm cache clean --force
npm install
```

### Reiniciar base de datos
```bash
php artisan migrate:fresh
```

### Verificar conexión a base de datos
```bash
php artisan tinker
# Luego ejecutar:
DB::connection()->getPdo();
```

---

## 📝 GIT

### Comandos básicos
```bash
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Commit
git commit -m "Initial commit"

# Ver estado
git status

# Ver historial
git log --oneline

# Crear rama
git checkout -b develop

# Cambiar de rama
git checkout main

# Merge
git merge develop

# Push
git push origin main

# Pull
git pull origin main
```

### .gitignore ya configurado
El archivo `.gitignore` ya está creado con las exclusiones necesarias.

---

## 🔐 SEGURIDAD

### Generar nueva APP_KEY
```bash
php artisan key:generate
```

### Verificar permisos (Linux/Mac)
```bash
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

---

## 📦 ACTUALIZACIÓN

### Actualizar Laravel
```bash
composer update laravel/framework
```

### Actualizar React
```bash
npm update react react-dom
```

---

## 💡 TIPS

### Ver todas las variables de entorno
```bash
php artisan tinker
# Luego:
env()->all()
```

### Probar endpoint desde terminal
```bash
# Windows (PowerShell)
Invoke-WebRequest -Uri "http://localhost:8000/api/health" -Method GET

# Con curl (si está instalado)
curl http://localhost:8000/api/health
```

### Ver tamaño de base de datos
```sql
SELECT pg_size_pretty(pg_database_size('daleflow'));
```

---

## 🎯 COMANDOS PERSONALIZADOS

### Script de inicio completo (crear archivo start.bat)
```batch
@echo off
echo Iniciando Dale Flow...
echo.
echo [1/2] Iniciando Backend...
start cmd /k "cd backend && php artisan serve"
timeout /t 3
echo [2/2] Iniciando Frontend...
start cmd /k "cd frontend && npm run dev"
echo.
echo ¡Dale Flow iniciado!
echo Backend: http://localhost:8000
echo Frontend: http://localhost:5173
```

### Script de backup (crear archivo backup.bat)
```batch
@echo off
set fecha=%date:~-4,4%%date:~-7,2%%date:~-10,2%
pg_dump -U postgres daleflow > backup_%fecha%.sql
echo Backup creado: backup_%fecha%.sql
```

---

**¡Comandos listos para usar! 🚀**
