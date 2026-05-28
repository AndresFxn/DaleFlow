@echo off
title Dale Flow - Verificacion de Requisitos
color 0E

echo.
echo ========================================
echo   DALE FLOW - Verificacion de Requisitos
echo ========================================
echo.

set TODOS_OK=1

REM Verificar PHP
echo Verificando PHP...
php --version >nul 2>&1
if errorlevel 1 (
    echo [X] PHP NO esta instalado o no esta en el PATH
    echo     Descarga: https://windows.php.net/download/
    set TODOS_OK=0
) else (
    php --version | findstr /C:"PHP"
    echo [OK] PHP instalado correctamente
)
echo.

REM Verificar Composer
echo Verificando Composer...
composer --version >nul 2>&1
if errorlevel 1 (
    echo [X] Composer NO esta instalado o no esta en el PATH
    echo     Descarga: https://getcomposer.org/download/
    set TODOS_OK=0
) else (
    composer --version | findstr /C:"Composer"
    echo [OK] Composer instalado correctamente
)
echo.

REM Verificar Node.js
echo Verificando Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo [X] Node.js NO esta instalado o no esta en el PATH
    echo     Descarga: https://nodejs.org/
    set TODOS_OK=0
) else (
    node --version
    echo [OK] Node.js instalado correctamente
)
echo.

REM Verificar npm
echo Verificando npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo [X] npm NO esta instalado
    set TODOS_OK=0
) else (
    npm --version
    echo [OK] npm instalado correctamente
)
echo.

REM Verificar PostgreSQL (opcional)
echo Verificando PostgreSQL...
psql --version >nul 2>&1
if errorlevel 1 (
    echo [!] PostgreSQL NO esta en el PATH (puede estar instalado)
    echo     Si esta instalado, no es necesario agregarlo al PATH
) else (
    psql --version
    echo [OK] PostgreSQL instalado y en PATH
)
echo.

echo ========================================
if %TODOS_OK%==1 (
    echo   TODOS LOS REQUISITOS ESTAN INSTALADOS
    echo.
    echo   Puedes ejecutar: install.bat
) else (
    echo   FALTAN ALGUNOS REQUISITOS
    echo.
    echo   Por favor instala los programas marcados con [X]
    echo   Luego ejecuta este script nuevamente
)
echo ========================================
echo.

REM Verificar si las dependencias ya estan instaladas
echo.
echo Verificando dependencias del proyecto...
echo.

if exist "backend\vendor\" (
    echo [OK] Dependencias del backend instaladas
) else (
    echo [!] Dependencias del backend NO instaladas
    echo     Ejecuta: install.bat
)

if exist "frontend\node_modules\" (
    echo [OK] Dependencias del frontend instaladas
) else (
    echo [!] Dependencias del frontend NO instaladas
    echo     Ejecuta: install.bat
)

echo.
pause
