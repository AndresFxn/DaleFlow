# 🔧 SOLUCIÓN RÁPIDA - DALE FLOW

## ❌ PROBLEMA: "vite no se reconoce" o "artisan no se reconoce"

Esto significa que **las dependencias no están instaladas**.

---

## ✅ SOLUCIÓN PASO A PASO

### 1️⃣ VERIFICAR REQUISITOS

Abre una terminal (CMD o PowerShell) y verifica que tengas instalado:

```bash
# Verificar PHP
php --version
# Debe mostrar: PHP 8.1 o superior

# Verificar Composer
composer --version
# Debe mostrar: Composer version...

# Verificar Node.js
node --version
# Debe mostrar: v18.0.0 o superior

# Verificar npm
npm --version
# Debe mostrar: 9.0.0 o superior
```

### ❌ Si alguno NO está instalado:

#### Instalar PHP
1. Descargar: https://windows.php.net/download/
2. Descargar la versión "Thread Safe" (ZIP)
3. Extraer en `C:\php`
4. Agregar `C:\php` al PATH del sistema

#### Instalar Composer
1. Descargar: https://getcomposer.org/download/
2. Ejecutar el instalador
3. Seguir las instrucciones

#### Instalar Node.js
1. Descargar: https://nodejs.org/
2. Descargar la versión LTS
3. Ejecutar el instalador
4. Reiniciar la terminal

---

### 2️⃣ INSTALAR DEPENDENCIAS

Una vez que tengas PHP, Composer y Node.js instalados:

#### Opción A: Automática (Recomendada)
```bash
# Ejecutar el instalador
install.bat
```

#### Opción B: Manual

**Backend:**
```bash
cd C:\Users\Pc\Desktop\DaleFlow\backend
composer install
copy .env.example .env
php artisan key:generate
```

**Frontend:**
```bash
cd C:\Users\Pc\Desktop\DaleFlow\frontend
npm install
copy .env.example .env
```

---

### 3️⃣ CONFIGURAR BASE DE DATOS

1. Abrir `backend\.env` con un editor de texto
2. Configurar PostgreSQL:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=daleflow
DB_USERNAME=postgres
DB_PASSWORD=TU_PASSWORD_AQUI
```

3. Crear la base de datos en PostgreSQL:
```sql
CREATE DATABASE daleflow;
```

4. Ejecutar migraciones:
```bash
cd C:\Users\Pc\Desktop\DaleFlow\backend
php artisan migrate
```

---

### 4️⃣ INICIAR EL PROYECTO

#### Opción A: Automática
```bash
start.bat
```

#### Opción B: Manual

**Terminal 1 - Backend:**
```bash
cd C:\Users\Pc\Desktop\DaleFlow\backend
php artisan serve
```

**Terminal 2 - Frontend:**
```bash
cd C:\Users\Pc\Desktop\DaleFlow\frontend
npm run dev
```

---

## 🚨 ERRORES COMUNES

### Error: "composer: command not found"
**Solución:** Composer no está instalado o no está en el PATH
- Instalar desde: https://getcomposer.org/download/
- Reiniciar la terminal después de instalar

### Error: "php: command not found"
**Solución:** PHP no está instalado o no está en el PATH
- Instalar desde: https://windows.php.net/download/
- Agregar PHP al PATH del sistema
- Reiniciar la terminal

### Error: "node: command not found"
**Solución:** Node.js no está instalado
- Instalar desde: https://nodejs.org/
- Reiniciar la terminal después de instalar

### Error: "npm ERR! code ENOENT"
**Solución:** Estás en la carpeta incorrecta
```bash
cd C:\Users\Pc\Desktop\DaleFlow\frontend
npm install
```

### Error: "Class 'PDO' not found"
**Solución:** Extensión PDO de PHP no está habilitada
1. Abrir `php.ini`
2. Descomentar (quitar `;`):
   ```ini
   extension=pdo_pgsql
   extension=pgsql
   ```
3. Reiniciar

### Error: "SQLSTATE[08006] connection failed"
**Solución:** PostgreSQL no está corriendo o credenciales incorrectas
- Verificar que PostgreSQL esté corriendo
- Verificar credenciales en `backend\.env`

---

## 📋 CHECKLIST DE INSTALACIÓN

- [ ] PHP 8.1+ instalado y en PATH
- [ ] Composer instalado y en PATH
- [ ] Node.js 18+ instalado y en PATH
- [ ] PostgreSQL instalado y corriendo
- [ ] Base de datos `daleflow` creada
- [ ] Dependencias del backend instaladas (`backend\vendor\` existe)
- [ ] Dependencias del frontend instaladas (`frontend\node_modules\` existe)
- [ ] Archivo `backend\.env` configurado
- [ ] Migraciones ejecutadas
- [ ] Link de Wompi configurado

---

## 🎯 COMANDOS RÁPIDOS

### Verificar instalación
```bash
# Backend
cd C:\Users\Pc\Desktop\DaleFlow\backend
php artisan --version

# Frontend
cd C:\Users\Pc\Desktop\DaleFlow\frontend
npm --version
```

### Reinstalar todo
```bash
# Backend
cd C:\Users\Pc\Desktop\DaleFlow\backend
rmdir /s /q vendor
composer install

# Frontend
cd C:\Users\Pc\Desktop\DaleFlow\frontend
rmdir /s /q node_modules
npm install
```

### Limpiar cache
```bash
# Backend
cd C:\Users\Pc\Desktop\DaleFlow\backend
php artisan cache:clear
php artisan config:clear

# Frontend
cd C:\Users\Pc\Desktop\DaleFlow\frontend
npm cache clean --force
```

---

## 💡 TIPS

### Usar rutas absolutas
Si los scripts no funcionan, usa rutas absolutas:

```bash
cd C:\Users\Pc\Desktop\DaleFlow\backend
C:\php\php.exe artisan serve
```

### Verificar PATH
Para verificar que PHP, Composer y Node estén en el PATH:

```bash
echo %PATH%
```

Debe incluir las rutas de PHP, Composer y Node.js

### Reiniciar terminal
Después de instalar cualquier programa, **siempre reinicia la terminal**.

---

## 📞 AYUDA ADICIONAL

Si sigues teniendo problemas:

1. Verifica que todos los requisitos estén instalados
2. Reinicia la terminal
3. Ejecuta `install.bat` nuevamente
4. Revisa los mensajes de error específicos
5. Consulta `COMANDOS-UTILES.md` para más ayuda

---

## ✅ VERIFICACIÓN FINAL

Después de instalar todo, verifica:

```bash
# 1. Backend
cd C:\Users\Pc\Desktop\DaleFlow\backend
php artisan --version
# Debe mostrar: Laravel Framework 10.x.x

# 2. Frontend
cd C:\Users\Pc\Desktop\DaleFlow\frontend
npm run dev
# Debe iniciar el servidor en http://localhost:5173
```

---

**¡Problema resuelto! 🎉**

*Si necesitas más ayuda, revisa INSTRUCCIONES.md*
