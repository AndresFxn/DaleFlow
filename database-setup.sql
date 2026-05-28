-- ============================================
-- DALE FLOW - Setup de Base de Datos
-- ============================================

-- Crear base de datos
CREATE DATABASE daleflow
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Conectar a la base de datos
\c daleflow

-- Verificar conexión
SELECT current_database();

-- La tabla será creada automáticamente por las migraciones de Laravel
-- Ejecutar: php artisan migrate

-- ============================================
-- CONSULTAS ÚTILES
-- ============================================

-- Ver todas las inscripciones
-- SELECT * FROM inscripciones ORDER BY created_at DESC;

-- Contar inscripciones por estado de pago
-- SELECT estado_pago, COUNT(*) as total 
-- FROM inscripciones 
-- GROUP BY estado_pago;

-- Ver inscripciones del día
-- SELECT * FROM inscripciones 
-- WHERE DATE(created_at) = CURRENT_DATE;

-- Ver cómo se enteraron las personas
-- SELECT como_se_entero, COUNT(*) as total 
-- FROM inscripciones 
-- GROUP BY como_se_entero 
-- ORDER BY total DESC;

-- Ver necesidades más comunes
-- SELECT necesidad, COUNT(*) as total 
-- FROM inscripciones 
-- GROUP BY necesidad 
-- ORDER BY total DESC;
