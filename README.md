# 🏗️ M&M CONSTRUCTORA - Sistema de Código QR

Sistema completo de código QR que dirige a una página web personalizada con todas las redes sociales de M&M CONSTRUCTORA.

## 📋 Características

- **Código QR personalizado** que dirige a una página web moderna
- **Página web responsive** con diseño atractivo en colores negro y dorado
- **Carrusel de imágenes** con navegación automática
- **Enlaces a todas las redes sociales**:
  - WhatsApp: https://wa.me/3015892768
  - Facebook: https://www.facebook.com/mymconstructora.espinal
  - Instagram: https://www.instagram.com/mymconstructora.espinal/
  - TikTok: https://www.tiktok.com/@mymconstructora.espinal
  - Sitio Web: https://mymconstructora.com.co/

## Backend para miniaturas de Instagram

Este proyecto incluye un servidor Node.js básico para entregar la página estática y servir los recursos locales.

### Archivos importantes

- `server.js` — servidor Express que sirve el sitio estático y el endpoint de salud `/health`
- `package.json` — dependencias necesarias para ejecutar el backend
- `static/js/script.js` — controla el carrusel y usa imágenes locales definidas en `index.html`

### Uso local

1. Instala las dependencias:
   ```powershell
   cd C:\PaginaWeb\QR
   "C:\Program Files\nodejs\npm.cmd" install
   ```
2. Inicia el servidor:
   ```powershell
   & "C:\Program Files\nodejs\npm.cmd" start
   ```
3. Abre en el navegador:
   ```text
   http://localhost:3000
   ```

### Despliegue en producción

1. Despliega `server.js` en un hosting que soporte Node.js (Vercel, Railway, Render, DigitalOcean, etc.).
2. El sitio estático usa imágenes locales en `static/images/...` y no requiere acceso a Instagram.

### Cómo funciona el backend

Este backend solo sirve el contenido estático y un endpoint de salud.

#### Endpoint disponible

- `GET /health`

#### Respuesta

```json
{
  "status": "ok",
  "service": "static-assets"
}
```

### Notas

- El backend funciona con URLs públicas de Instagram.
- Si no se puede extraer la miniatura, el servidor devuelve una URL de imagen de fallback.
- No se requiere `.env` ni credenciales para el scraping básico.

### Notas

- El backend no necesita usuario ni contraseña para cargar miniaturas públicas.
- Solo funciona con URLs públicas de Instagram (`/reel/...` o `/p/...`).
- Si el backend no está disponible, el carrusel mostrará una imagen de fallback.
