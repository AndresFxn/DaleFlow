@echo off
title Dale Flow - Iniciando...
color 0A

echo.
echo ========================================
echo   DALE FLOW - Iniciando Proyecto
echo ========================================
echo.

echo [1/2] Iniciando Backend (Laravel)...
start "Dale Flow - Backend" cmd /k "cd /d %~dp0backend && php artisan serve --host=0.0.0.0"
timeout /t 3 /nobreak >nul

echo [2/2] Iniciando Frontend (React + Vite)...
start "Dale Flow - Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ========================================
echo   DALE FLOW - Proyecto Iniciado
echo ========================================
echo.
echo Backend:  http://localhost:8000
echo Frontend: http://localhost:5173
echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause >nul
