# Guía para el Carrusel de Imágenes

## 📁 Ubicación de las imágenes

Las imágenes del carrusel deben guardarse en la carpeta:
```
static/images/carousel/
```

## 🖼️ Nombres recomendados para las imágenes:

1. `logo.jpg` - **Logo de M&M Constructora (primera imagen que aparece)**
2. `proyecto1.jpg` - Primera obra/proyecto
3. `proyecto2.jpg` - Segunda obra/proyecto
4. `proyecto3.jpg` - Tercera obra/proyecto
5. `proyecto4.jpg` - Cuarta obra/proyecto
6. `proyecto5.jpg` - Quinta obra/proyecto

## 📏 Especificaciones técnicas:

- **Formato**: JPG, PNG o WebP
- **Tamaño recomendado**: 800x600 píxeles (proporción 4:3)
- **Peso máximo**: 500KB por imagen para carga rápida
- **Resolución**: 72-150 DPI

## 🔄 Cómo cambiar las imágenes:

1. **Preparar las nuevas imágenes**:
   - Renombra tus fotos como: proyecto1.jpg, proyecto2.jpg, proyecto3.jpg
   - Asegúrate de que tengan buen tamaño y calidad

2. **Reemplazar imágenes**:
   - Ve a la carpeta `static/images/carousel/`
   - Elimina las imágenes anteriores
   - Copia las nuevas imágenes con estos nombres exactos:
     - `logo.jpg` (tu logo de empresa)
     - `proyecto1.jpg` hasta `proyecto5.jpg` (tus obras)

3. **Sin necesidad de reiniciar**:
   - Los cambios se verán inmediatamente al recargar la página
   - No necesitas modificar código

## ➕ Para agregar más imágenes:

El carrusel está configurado para 6 imágenes (1 logo + 5 proyectos). Si quieres más:

1. Añade más imágenes en la carpeta (proyecto6.jpg, proyecto7.jpg, etc.)
2. Modifica el archivo `templates/index.html` 
3. Añade más elementos `<div class="slide">` 
4. Añade más indicadores `<span class="dot">`

## 🎨 Consejos para mejores resultados:

- Usa imágenes de alta calidad de tus proyectos
- Mantén un estilo visual consistente
- Incluye fotos de diferentes ángulos y etapas de construcción
- Considera usar un editor para optimizar el tamaño sin perder calidad