import subprocess
import sys
import os
import time
import threading
import webbrowser

def run_server():
    """Ejecuta el servidor Flask"""
    try:
        subprocess.run([sys.executable, "app.py"], cwd=os.path.dirname(__file__))
    except KeyboardInterrupt:
        print("\n🛑 Servidor detenido por el usuario")

def open_browser():
    """Abre el navegador después de un pequeño delay"""
    time.sleep(2)
    webbrowser.open('http://localhost:5000')

def main():
    print("🏗️  M&M CONSTRUCTORA - Sistema de Código QR")
    print("=" * 60)
    print("PARA USAR LOCALMENTE (solo en tu computadora):")
    print("1. Generar código QR local")
    print("2. Iniciar servidor web local")
    print("3. Generar QR e iniciar servidor local")
    print("4. Solo abrir en navegador")
    print()
    print("PARA PANCARTA EN LA CALLE (funciona desde cualquier lugar):")
    print("5. Generar QR para servicios online (RECOMENDADO)")
    print("6. Ver guía completa para subir a internet")
    print("=" * 60)
    
    while True:
        try:
            opcion = input("Selecciona una opción (1-6): ").strip()
            
            if opcion == "1":
                print("\n📱 Generando código QR local...")
                subprocess.run([sys.executable, "generate_qr.py"])
                break
                
            elif opcion == "2":
                print("\n🌐 Iniciando servidor web local...")
                print("💡 Presiona Ctrl+C para detener el servidor")
                run_server()
                break
                
            elif opcion == "3":
                print("\n📱 Generando código QR local...")
                subprocess.run([sys.executable, "generate_qr.py"])
                
                print("\n🌐 Iniciando servidor web local...")
                print("🔗 La página se abrirá automáticamente en tu navegador")
                print("💡 Presiona Ctrl+C para detener el servidor")
                
                # Abrir navegador en un hilo separado
                browser_thread = threading.Thread(target=open_browser)
                browser_thread.daemon = True
                browser_thread.start()
                
                run_server()
                break
                
            elif opcion == "4":
                print("\n🌐 Abriendo navegador...")
                webbrowser.open('http://localhost:5000')
                print("✅ Navegador abierto. Asegúrate de que el servidor esté ejecutándose.")
                break
                
            elif opcion == "5":
                print("\n🌐 Generando QR para servicios online...")
                subprocess.run([sys.executable, "generate_qr_online.py"])
                break
                
            elif opcion == "6":
                print("\n📖 Abriendo guía completa...")
                guia_path = os.path.join(os.path.dirname(__file__), "GUIA_SUBIR_ONLINE.md")
                if os.path.exists(guia_path):
                    os.startfile(guia_path)
                print("✅ Guía abierta. Sigue los pasos para subir tu página a internet.")
                break
                
            else:
                print("❌ Opción no válida. Por favor, selecciona 1, 2, 3, 4, 5 o 6.")
                
        except KeyboardInterrupt:
            print("\n\n👋 ¡Hasta luego!")
            break
        except Exception as e:
            print(f"❌ Error: {e}")
            break

if __name__ == "__main__":
    main()