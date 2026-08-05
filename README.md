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

Este proyecto incluye un pequeño backend Node.js que obtiene las miniaturas de Instagram a partir de la URL pública de cada reel o publicación.

### Archivos importantes

- `server.js` — servidor Express que sirve el sitio y los endpoints `/thumbnail`, `/reels`, `/api/thumbnail` y `/api/reels`
- `package.json` — dependencias necesarias para ejecutar el backend
- `static/js/script.js` — consume `/api/reels?url=...` y actualiza las imágenes del carrusel

### Uso local

1. Instala las dependencias:
   ```powershell
   cd C:\PaginaWeb\QR
   "C:\Program Files\nodejs\npm.cmd" install
   ```
2. Si quieres usar el scraper directo de Instagram, instala también:
   ```powershell
   "C:\Program Files\nodejs\npm.cmd" install instagram-url-direct
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
2. Actualiza `static/js/script.js` cambiando `BACKEND_BASE_URL` a la URL de tu backend desplegado.
3. Asegúrate de que el backend soporte CORS si la página estática y el backend y la web quedan en dominios distintos.

### Cómo funciona el backend

Este backend obtiene miniaturas públicas de Instagram leyendo las meta-tags públicas de la página de la publicación o reel. No necesita un token de la Graph API.

#### Endpoints disponibles

- `GET /thumbnail?url=https://www.instagram.com/reel/REEL_ID/`
- `GET /reels?url=https://www.instagram.com/reel/REEL_ID/`

#### Respuesta de `/thumbnail`

```json
{
  "image": "https://...",
  "url": "https://www.instagram.com/reel/DXfdno7jx4n/",
  "caption": "Texto del reel"
}
```

#### Respuesta de `/reels`

```json
{
  "thumbnail": "https://...",
  "url": "https://www.instagram.com/reel/DXfdno7jx4n/",
  "caption": "Texto del reel"
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
