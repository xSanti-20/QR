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

## 🚀 Uso Rápido

### Para usar en PANCARTA DE LA CALLE (recomendado):
1. **Ejecutar el menú principal:**
   ```
   C:/Proyecto/qr/.venv/Scripts/python.exe start.py
   ```
2. **Selecciona la opción 5** - Generar QR para servicios online
3. **Sigue la guía** `GUIA_SUBIR_ONLINE.md` para subir a internet
4. **¡Listo!** Tu QR funcionará desde cualquier lugar del mundo

### Para usar LOCALMENTE (solo en tu computadora):
1. **Ejecutar el menú principal:**
   ```
   C:/Proyecto/qr/.venv/Scripts/python.exe start.py
   ```
2. **Selecciona la opción 3** para generar QR e iniciar servidor local
3. **Escanear el QR** con tu teléfono (debe estar en la misma red WiFi)

## 📁 Estructura del Proyecto

```
qr/
├── app.py                 # Servidor web Flask
├── generate_qr.py         # Generador de códigos QR
├── start.py              # Script de inicio fácil
├── templates/
│   └── index.html        # Página web principal
├── static/
│   └── css/
│       └── styles.css    # Estilos CSS
└── .venv/               # Entorno virtual Python
```

## 🛠️ Comandos Individuales

### Generar solo el código QR:
```
C:/Proyecto/qr/.venv/Scripts/python.exe generate_qr.py
```

### Iniciar solo el servidor web:
```
C:/Proyecto/qr/.venv/Scripts/python.exe app.py
```

## 🎨 Personalización

### Colores utilizados:
- **Dorado principal**: #947c4c
- **Fondo**: Negro (#000000)
- **Texto**: Blanco (#ffffff)

### Modificar contenido:
- **Imágenes del carrusel**: Edita `templates/index.html`
- **Estilos**: Modifica `static/css/styles.css`
- **Redes sociales**: Actualiza los enlaces en `templates/index.html`

## 📱 URLs de Redes Sociales

- **WhatsApp**: https://wa.me/3015892768
- **Sitio Web**: https://mymconstructora.com.co/
- **TikTok**: https://www.tiktok.com/@mymconstructora.espinal
- **Instagram**: https://www.instagram.com/mymconstructora.espinal/
- **Facebook**: https://www.facebook.com/mymconstructora.espinal

## 🔧 Requisitos Técnicos

- Python 3.7+
- Flask
- qrcode[pil]
- Navegador web moderno

## 💡 Consejos de Uso

1. **Para pruebas locales**: Usa el QR generado para `localhost:5000`
2. **Para producción**: Sube los archivos a un servidor web y genera un nuevo QR con la URL real
3. **Personalización**: Reemplaza las imágenes placeholder del carrusel con fotos reales de proyectos

## 🆘 Resolución de Problemas

- **Error "Puerto en uso"**: Cambia el puerto en `app.py` (línea 15)
- **QR no funciona**: Verifica que el servidor esté ejecutándose
- **Página no carga**: Comprueba la conexión a internet y que no haya firewall bloqueando

---

**M&M CONSTRUCTORA** - 14 años de experiencia en construcción