// Inicializar EmailJS y manejar el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    console.log('contact-form.js iniciado');
    
    // Inicializar EmailJS
    setTimeout(function() {
        console.log('window.emailjs:', window.emailjs);
        if (typeof emailjs !== 'undefined') {
            emailjs.init('f7zbEh6a9A2PtUA38');
            console.log('✓ EmailJS inicializado');
        } else if (window.emailjs) {
            window.emailjs.init('f7zbEh6a9A2PtUA38');
            console.log('✓ EmailJS inicializado');
        } else {
            console.error('✗ EmailJS no está disponible');
        }
    }, 500);
    
    // Obtener elementos del formulario
    const submitBtn = document.getElementById('submitBtn');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!submitBtn || !contactForm || !formMessage) {
        console.error('No se encontraron los elementos del formulario');
        return;
    }
    
    console.log('Elementos encontrados, agregando listener...');
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Click en enviar');
        
        // Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validar
        if (!nombre || !email || !telefono || !asunto || !mensaje) {
            console.log('Validación: campos faltantes');
            formMessage.style.display = 'block';
            formMessage.className = 'form-message error';
            formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Por favor rellena todos los campos.';
            return;
        }
        
        // Mostrar enviando
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        // Parámetros
        const templateParams = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            asunto: asunto,
            mensaje: mensaje,
            to_email: 'puentessantiago2003@gmail.com'
        };
        
        console.log('Parámetros a enviar:', templateParams);
        console.log('Usando EmailJS:', typeof window.emailjs);
        
        // Enviar
        window.emailjs.send('service_0nm1yui', 'template_0r0zkhl', templateParams)
            .then(function(response) {
                console.log('✓ Éxito:', response);
                
                formMessage.style.display = 'block';
                formMessage.className = 'form-message success';
                formMessage.innerHTML = '<i class="fas fa-check-circle"></i> ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.';
                
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensaje';
                
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            })
            .catch(function(error) {
                console.error('✗ Error:', error);
                
                formMessage.style.display = 'block';
                formMessage.className = 'form-message error';
                formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error al enviar. Intenta de nuevo.';
                
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensaje';
            });
    });
});
