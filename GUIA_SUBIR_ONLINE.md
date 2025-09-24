# 🌐 GUÍA COMPLETA: Subir M&M CONSTRUCTORA a Internet

## 🎯 OBJETIVO
Hacer que tu código QR funcione desde cualquier lugar del mundo sin necesidad de tu computadora.

---

## 📋 OPCIÓN 1: GITHUB PAGES (RECOMENDADO - 100% GRATIS)

### Paso 1: Crear cuenta en GitHub
1. Ve a https://github.com
2. Crea una cuenta gratuita
3. Confirma tu email

### Paso 2: Crear repositorio
1. Haz clic en "New repository" (botón verde)
2. Nombre: `mym-constructora` 
3. Marca "Public"
4. Marca "Add a README file"
5. Clic en "Create repository"

### Paso 3: Subir tu archivo
1. En tu repositorio, clic en "uploading an existing file"
2. Arrastra el archivo `index.html` desde tu computadora
3. En "Commit changes" escribe: "Página de redes sociales M&M"
4. Clic en "Commit changes"

### Paso 4: Activar GitHub Pages
1. Ve a "Settings" (en el menú del repositorio)
2. Scroll down hasta "Pages"
3. En "Source" selecciona "Deploy from a branch"
4. Branch: "main", Folder: "/ (root)"
5. Clic "Save"

### Paso 5: Obtener tu URL
Tu página estará en: `https://tu-usuario.github.io/mym-constructora`
(Reemplaza "tu-usuario" con tu nombre de usuario de GitHub)

⏱️ **Tiempo total: 10-15 minutos**

---

## 📋 OPCIÓN 2: NETLIFY (SÚPER FÁCIL - GRATIS)

### Paso 1: Ir a Netlify
1. Ve a https://www.netlify.com
2. Clic en "Sign up" 
3. Puedes registrarte con email o GitHub

### Paso 2: Subir tu sitio
1. En el dashboard, busca "Want to deploy a new site without connecting to Git?"
2. Clic en "Browse to upload"
3. Selecciona el archivo `index.html`
4. ¡Listo! Netlify te dará una URL automáticamente

### Paso 3: Personalizar URL (opcional)
1. Clic en "Site settings"
2. Clic en "Change site name"
3. Escribe: `mym-constructora-espinal`
4. Tu URL será: `https://mym-constructora-espinal.netlify.app`

⏱️ **Tiempo total: 5 minutos**

---

## 📋 OPCIÓN 3: VERCEL (RÁPIDO - GRATIS)

### Paso 1: Crear cuenta
1. Ve a https://vercel.com
2. "Sign up" con GitHub o email

### Paso 2: Desplegar
1. Clic en "New Project"
2. Si no tienes GitHub conectado: "Import Git Repository" > "Continue with GitHub"
3. O directamente arrastra tu archivo `index.html`

⏱️ **Tiempo total: 5-8 minutos**

---

## 🚀 PASOS FINALES (PARA CUALQUIER OPCIÓN)

### 1. Generar el QR para tu URL online
```
C:/Proyecto/qr/.venv/Scripts/python.exe generate_qr_online.py
```

### 2. Probar que funciona
- Abre la URL en tu teléfono
- Verifica que todos los enlaces funcionen
- Prueba el carrusel de imágenes

### 3. Usar en tu pancarta
- Imprime el QR generado
- Añade texto como: "Escanea para ver nuestras redes sociales"

---

## ✅ VENTAJAS DE CADA OPCIÓN

| Servicio | Velocidad | Facilidad | Personalización | Confiabilidad |
|----------|-----------|-----------|-----------------|---------------|
| GitHub Pages | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Vercel | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🔧 PERSONALIZACIÓN ADICIONAL

### Cambiar las imágenes del carrusel:
1. Sube fotos reales de tus proyectos a un servicio como imgur.com
2. En `index.html`, reemplaza las secciones `<div class="placeholder-image">` con:
```html
<img src="URL_DE_TU_IMAGEN" alt="Proyecto M&M" style="width:100%; height:100%; object-fit:cover;">
```

### Añadir más redes sociales:
Duplica cualquier bloque de `<a class="social-link">` y cambia:
- La URL del `href`
- El ícono de `<i class="fab fa-ICONO">`
- El texto y colores CSS

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### "Mi página no carga"
- Espera 5-10 minutos (los servicios tardan en procesar)
- Verifica que el archivo se llame exactamente `index.html`
- Revisa que no haya errores de escritura en las URLs

### "El QR no funciona"
- Asegúrate de usar la URL correcta y completa (con https://)
- Prueba la URL directamente en tu navegador primero
- Regenera el QR si es necesario

### "Quiero cambiar algo"
- Edita el archivo `index.html` 
- Vuelve a subirlo al servicio
- La página se actualizará automáticamente

---

## 💡 RECOMENDACIÓN FINAL

**Para máxima simplicidad:** Usa Netlify
**Para máximo control:** Usa GitHub Pages
**Para máxima velocidad:** Usa Vercel

Todos son 100% gratuitos y confiables. ¡Tu QR funcionará desde cualquier lugar del mundo!