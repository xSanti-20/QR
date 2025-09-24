# Script para crear imágenes de ejemplo para el carrusel
from PIL import Image, ImageDraw, ImageFont
import os

def create_example_images():
    """Crea imágenes de ejemplo para el carrusel"""
    
    # Crear directorio si no existe
    os.makedirs("static/images/carousel", exist_ok=True)
    
    # Configuración de las imágenes
    width, height = 800, 600
    colors = [
        ("#2c3e50", "#3498db", "Proyecto de Casa"),
        ("#27ae60", "#2ecc71", "Construcción Comercial"), 
        ("#e74c3c", "#c0392b", "Obra de Remodelación")
    ]
    
    for i, (color1, color2, text) in enumerate(colors, 1):
        # Crear imagen con gradiente
        img = Image.new('RGB', (width, height), color1)
        draw = ImageDraw.Draw(img)
        
        # Crear un patrón simple
        for y in range(0, height, 40):
            draw.rectangle([0, y, width, y+20], fill=color2, width=0)
        
        # Añadir texto
        try:
            font = ImageFont.truetype("arial.ttf", 48)
        except:
            font = ImageFont.load_default()
        
        # Calcular posición del texto
        text_bbox = draw.textbbox((0, 0), text, font=font)
        text_width = text_bbox[2] - text_bbox[0]
        text_height = text_bbox[3] - text_bbox[1]
        
        x = (width - text_width) // 2
        y = (height - text_height) // 2
        
        # Dibujar texto con sombra
        draw.text((x+2, y+2), text, fill="black", font=font)
        draw.text((x, y), text, fill="white", font=font)
        
        # Añadir "M&M CONSTRUCTORA" en la esquina
        company = "M&M CONSTRUCTORA"
        try:
            small_font = ImageFont.truetype("arial.ttf", 24)
        except:
            small_font = ImageFont.load_default()
            
        draw.text((20, height-50), company, fill="white", font=small_font)
        
        # Guardar imagen
        filename = f"static/images/carousel/proyecto{i}.jpg"
        img.save(filename, "JPEG", quality=85)
        print(f"✅ Creada imagen de ejemplo: {filename}")

if __name__ == "__main__":
    create_example_images()
    print("\n🎨 Imágenes de ejemplo creadas!")
    print("📝 Reemplázalas con tus propias fotos de proyectos")
    print("📏 Mantén el tamaño 800x600 para mejor calidad")