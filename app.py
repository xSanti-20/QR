from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    """Ruta principal que muestra la página de redes sociales"""
    return render_template('index.html')

@app.route('/health')
def health():
    """Endpoint de salud para verificar que el servidor está funcionando"""
    return {'status': 'ok', 'message': 'Servidor funcionando correctamente'}

if __name__ == '__main__':
    # Configuración del servidor
    port = int(os.environ.get('PORT', 5000))
    debug_mode = os.environ.get('FLASK_ENV') == 'development'
    
    print("=" * 60)
    print("🏗️  M&M CONSTRUCTORA - Servidor de Redes Sociales")
    print("=" * 60)
    print(f"📱 Accede a la página en: http://localhost:{port}")
    print(f"🔗 URL para el código QR: http://localhost:{port}")
    print("=" * 60)
    
    app.run(host='0.0.0.0', port=port, debug=debug_mode)