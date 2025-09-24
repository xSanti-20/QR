import qrcode
from PIL import Image, ImageDraw, ImageFont
import os

class QRGeneratorOnline:
    def __init__(self):
        self.company_name = "M&M CONSTRUCTORA"
        self.golden_color = "#947c4c"
        
    def create_qr_code(self, url, filename):
        """
        Genera un código QR personalizado para M&M CONSTRUCTORA
        """
        
        # Configuración del QR
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_H,
            box_size=10,
            border=4,
        )
        
        qr.add_data(url)
        qr.make(fit=True)
        
        # Crear la imagen del QR
        qr_image = qr.make_image(fill_color="black", back_color="white")
        
        if qr_image.mode != 'RGB':
            qr_image = qr_image.convert('RGB')
        
        # Crear imagen final con texto
        final_width = qr_image.width + 100
        final_height = qr_image.height + 120
        
        final_image = Image.new('RGB', (final_width, final_height), 'white')
        
        qr_x = (final_width - qr_image.width) // 2
        qr_y = 60
        final_image.paste(qr_image, (qr_x, qr_y))
        
        # Añadir texto
        draw = ImageDraw.Draw(final_image)
        
        try:
            title_font = ImageFont.truetype("arial.ttf", 24)
            subtitle_font = ImageFont.truetype("arial.ttf", 16)
        except:
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
        
        # Título
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
        
        # Guardar
        output_path = os.path.join(os.path.dirname(__file__), filename)
        final_image.save(output_path, 'PNG', quality=95)
        
        return output_path

def main():
    print("🏗️  M&M CONSTRUCTORA - Generador QR para Servicios Online")
    print("=" * 70)
    
    generator = QRGeneratorOnline()
    
    # Opciones de servicios gratuitos
    servicios = {
        "1": {
            "nombre": "GitHub Pages (Recomendado - GRATIS)",
            "url_ejemplo": "https://tu-usuario.github.io/mym-constructora",
            "descripcion": "Hosting gratuito de GitHub, muy confiable"
        },
        "2": {
            "nombre": "Netlify (GRATIS)",
            "url_ejemplo": "https://mym-constructora.netlify.app",
            "descripcion": "Muy fácil de usar, solo arrastra y suelta archivos"
        },
        "3": {
            "nombre": "Vercel (GRATIS)",
            "url_ejemplo": "https://mym-constructora.vercel.app",
            "descripcion": "Excelente velocidad y uptime"
        },
        "4": {
            "nombre": "Firebase Hosting (GRATIS)",
            "url_ejemplo": "https://mym-constructora.web.app",
            "descripcion": "De Google, muy estable"
        },
        "5": {
            "nombre": "Surge.sh (GRATIS)",
            "url_ejemplo": "https://mym-constructora.surge.sh",
            "descripcion": "Súper simple desde línea de comandos"
        }
    }
    
    print("🌐 Selecciona el servicio donde subirás tu página:")
    print()
    for key, servicio in servicios.items():
        print(f"{key}. {servicio['nombre']}")
        print(f"   URL ejemplo: {servicio['url_ejemplo']}")
        print(f"   {servicio['descripcion']}")
        print()
    
    while True:
        opcion = input("Selecciona una opción (1-5) o 'custom' para URL personalizada: ").strip().lower()
        
        if opcion in servicios:
            servicio_elegido = servicios[opcion]
            print(f"\n✅ Seleccionaste: {servicio_elegido['nombre']}")
            
            if opcion == "1":  # GitHub Pages
                usuario = input("📝 Ingresa tu usuario de GitHub: ").strip()
                repo = input("📝 Ingresa el nombre del repositorio (ej: mym-constructora): ").strip()
                url = f"https://{usuario}.github.io/{repo}"
            else:
                url = input(f"📝 Ingresa la URL completa de tu sitio: ").strip()
            
            break
            
        elif opcion == "custom":
            url = input("📝 Ingresa tu URL personalizada: ").strip()
            break
            
        else:
            print("❌ Opción no válida. Intenta de nuevo.")
    
    if url:
        # Generar QR
        filename = f"qr_mym_online.png"
        qr_path = generator.create_qr_code(url, filename)
        
        print("\n" + "=" * 70)
        print("🎉 ¡Código QR generado exitosamente!")
        print(f"📁 Archivo: {qr_path}")
        print(f"🔗 URL: {url}")
        print("=" * 70)
        
        print("\n📋 PRÓXIMOS PASOS:")
        print("1. Sube el archivo 'index.html' al servicio elegido")
        print("2. Verifica que la página funcione en la URL")
        print("3. Usa el código QR generado en tu pancarta")
        print("4. ¡Listo! Funcionará desde cualquier lugar del mundo")

if __name__ == "__main__":
    main()