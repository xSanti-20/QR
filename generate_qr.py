import qrcode
from PIL import Image, ImageDraw, ImageFont
import os

class QRGenerator:
    def __init__(self):
        self.company_name = "M&M CONSTRUCTORA"
        self.golden_color = "#947c4c"
        
    def create_qr_code(self, url, filename="qr_mym_constructora.png"):
        """
        Genera un código QR personalizado para M&M CONSTRUCTORA
        
        Args:
            url (str): URL a la que dirigirá el código QR
            filename (str): Nombre del archivo de salida
        """
        
        # Configuración del QR
        qr = qrcode.QRCode(
            version=1,  # Controla el tamaño del QR
            error_correction=qrcode.constants.ERROR_CORRECT_H,  # Alta corrección de errores
            box_size=10,  # Tamaño de cada "caja" del QR
            border=4,  # Borde alrededor del QR
        )
        
        # Añadir la URL al QR
        qr.add_data(url)
        qr.make(fit=True)
        
        # Crear la imagen del QR con colores personalizados
        qr_image = qr.make_image(
            fill_color="black",  # Color del QR
            back_color="white"   # Color de fondo
        )
        
        # Convertir a RGB si no lo está
        if qr_image.mode != 'RGB':
            qr_image = qr_image.convert('RGB')
        
        # Crear una imagen más grande para añadir texto
        final_width = qr_image.width + 100
        final_height = qr_image.height + 120
        
        final_image = Image.new('RGB', (final_width, final_height), 'white')
        
        # Pegar el QR en el centro de la imagen final
        qr_x = (final_width - qr_image.width) // 2
        qr_y = 60  # Dejar espacio arriba para el título
        final_image.paste(qr_image, (qr_x, qr_y))
        
        # Añadir texto
        draw = ImageDraw.Draw(final_image)
        
        try:
            # Intentar usar una fuente más grande
            title_font = ImageFont.truetype("arial.ttf", 24)
            subtitle_font = ImageFont.truetype("arial.ttf", 16)
        except:
            # Fuente por defecto si no encuentra arial
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
        
        # Título principal
        title_text = self.company_name
        title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
        title_width = title_bbox[2] - title_bbox[0]
        title_x = (final_width - title_width) // 2
        draw.text((title_x, 20), title_text, font=title_font, fill='black')
        
        # Subtítulo
        subtitle_text = "Escanea para ver nuestras redes sociales"
        subtitle_bbox = draw.textbbox((0, 0), subtitle_text, font=subtitle_font)
        subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
        subtitle_x = (final_width - subtitle_width) // 2
        draw.text((subtitle_x, qr_y + qr_image.height + 20), subtitle_text, font=subtitle_font, fill='gray')
        
        # Guardar la imagen
        output_path = os.path.join(os.path.dirname(__file__), filename)
        final_image.save(output_path, 'PNG', quality=95)
        
        return output_path
    
    def generate_qr_for_local_server(self, port=5000):
        """Genera QR para el servidor local"""
        local_url = f"http://localhost:{port}"
        return self.create_qr_code(local_url, "qr_local_server.png")
    
    def generate_qr_for_production(self, production_url):
        """Genera QR para URL de producción"""
        return self.create_qr_code(production_url, "qr_production.png")

def main():
    print("🏗️  Generador de Código QR - M&M CONSTRUCTORA")
    print("=" * 50)
    
    generator = QRGenerator()
    
    # Generar QR para servidor local
    print("📱 Generando QR para servidor local...")
    local_qr_path = generator.generate_qr_for_local_server()
    print(f"✅ QR local generado: {local_qr_path}")
    
    # Opción para generar QR para producción
    print("\n🌐 ¿Deseas generar un QR para una URL de producción? (s/n): ", end="")
    response = input().lower().strip()
    
    if response in ['s', 'si', 'sí', 'y', 'yes']:
        print("🔗 Ingresa la URL de producción: ", end="")
        prod_url = input().strip()
        if prod_url:
            prod_qr_path = generator.generate_qr_for_production(prod_url)
            print(f"✅ QR de producción generado: {prod_qr_path}")
    
    print("\n" + "=" * 50)
    print("🎉 ¡Códigos QR generados exitosamente!")
    print("💡 Para usar:")
    print("   1. Ejecuta 'python app.py' para iniciar el servidor")
    print("   2. Escanea el QR con tu teléfono")
    print("   3. ¡Disfruta de la página de redes sociales!")

if __name__ == "__main__":
    main()