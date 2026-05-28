@echo off
title Dale Flow - Instalacion
color 0B

echo.
echo ========================================
echo   DALE FLOW - Instalacion Completa
echo ========================================
echo.

echo Verificando requisitos...
echo.

REM Verificar PHP
php --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] PHP no esta instalado o no esta en el PATH
    echo Por favor instala PHP 8.1 o superior
    echo Descarga: https://windows.php.net/download/
    pause
    exit /b 1
)
echo [OK] PHP instalado

REM Verificar Composer
composer --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Composer no esta instalado o no esta en el PATH
    echo Por favor instala Composer
    echo Descarga: https://getcomposer.org/download/
    pause
    exit /b 1
)
echo [OK] Composer instalado

REM Verificar Node
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js no esta instalado o no esta en el PATH
    echo Por favor instala Node.js 18 o superior
    echo Descarga: https://nodejs.org/
    pause
    exit /b 1
)
echo [OK] Node.js instalado

REM Verificar npm
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm no esta instalado
    pause
    exit /b 1
)
echo [OK] npm instalado

echo.
echo Todos los requisitos estan instalados!
echo.
echo ========================================
echo.

echo [1/4] Instalando dependencias del Backend...
cd backend
call composer install
if errorlevel 1 (
    echo ERROR: No se pudo instalar las dependencias del backend
    pause
    exit /b 1
)

echo.
echo [2/4] Configurando Backend...
if not exist .env (
    copy .env.example .env
    echo Archivo .env creado.
)
call php artisan key:generate

echo.
echo [3/4] Instalando dependencias del Frontend...
cd ..\frontend
call npm install
if errorlevel 1 (
    echo ERROR: No se pudo instalar las dependencias del frontend
    pause
    exit /b 1
)

echo.
echo [4/4] Configurando Frontend...
if not exist .env (
    copy .env.example .env
)

cd ..

echo.
echo ========================================
echo   INSTALACION COMPLETADA
echo ========================================
echo.
echo PROXIMOS PASOS:
echo.
echo 1. Configurar PostgreSQL en backend\.env
echo 2. Abrir nueva terminal y ejecutar:
echo    cd backend
echo    php artisan migrate
echo 3. Configurar WOMPI_PAYMENT_LINK en backend\.env
echo 4. Ejecutar: start.bat
echo.
echo ========================================
echo.
pause
