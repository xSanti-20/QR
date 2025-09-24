import qrcode
from PIL import Image, ImageDraw, ImageFont
import os

def create_github_pages_qr():
    """
    Crea un código QR único para el dominio de GitHub Pages
    """
    # URL de tu GitHub Pages
    github_url = "https://mymsoftcom.me"
    
    print("🔗 Creando QR para GitHub Pages...")
    print(f"📱 URL: {github_url}")
    
    # Configuración del QR
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,  # Alta corrección
        box_size=12,  # Tamaño más grande para mejor lectura
        border=4,
    )
    
    # Añadir la URL
    qr.add_data(github_url)
    qr.make(fit=True)
    
    # Crear imagen del QR
    qr_image = qr.make_image(
        fill_color="#2c3e50",  # Azul oscuro profesional
        back_color="white"
    ).convert('RGB')
    
    # Crear imagen final con título
    final_width = qr_image.width + 120
    final_height = qr_image.height + 160
    final_image = Image.new('RGB', (final_width, final_height), 'white')
    
    # Posicionar QR
    qr_x = (final_width - qr_image.width) // 2
    qr_y = 80
    final_image.paste(qr_image, (qr_x, qr_y))
    
    # Añadir texto
    draw = ImageDraw.Draw(final_image)
    
    # Intentar usar una fuente del sistema
    try:
        title_font = ImageFont.truetype("arial.ttf", 24)
        subtitle_font = ImageFont.truetype("arial.ttf", 16)
        url_font = ImageFont.truetype("arial.ttf", 14)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        url_font = ImageFont.load_default()
    
    # Título principal
    title = "M&M CONSTRUCTORA"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (final_width - title_width) // 2
    draw.text((title_x, 20), title, fill="#2c3e50", font=title_font)
    
    # Subtítulo
    subtitle = "Escanea para visitarnos"
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (final_width - subtitle_width) // 2
    draw.text((subtitle_x, 50), subtitle, fill="#7f8c8d", font=subtitle_font)
    
    # URL en la parte inferior
    url_text = "mymsoftcom.me"
    url_bbox = draw.textbbox((0, 0), url_text, font=url_font)
    url_width = url_bbox[2] - url_bbox[0]
    url_x = (final_width - url_width) // 2
    draw.text((url_x, final_height - 30), url_text, fill="#3498db", font=url_font)
    
    # Guardar imagen
    output_file = "qr_github_pages.png"
    final_image.save(output_file, quality=95)
    
    print(f"✅ QR creado exitosamente: {output_file}")
    print(f"📐 Tamaño: {final_width}x{final_height}")
    print(f"🔗 Apunta a: {github_url}")
    
    return output_file

if __name__ == "__main__":
    create_github_pages_qr()