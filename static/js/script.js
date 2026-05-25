// Menu Toggle
const menuToggle = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Close menu when clicking outside
if (menuToggle && navMenu) {
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Search functionality
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            // Redirigir a la página de proyectos con búsqueda
            const currentPath = window.location.pathname;
            const basePath = currentPath.includes('/pages/') ? './' : './pages/';
            window.location.href = basePath + 'projects.html?search=' + encodeURIComponent(query);
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (data.nombre && data.email && data.telefono && data.mensaje) {
            // Here you would normally send the data to a server
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            contactForm.reset();
        } else {
            alert('Por favor completa todos los campos.');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Instagram Carousel
document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!carouselTrack || !prevBtn || !nextBtn) return;

    const posts = document.querySelectorAll('.instagram-post');
    const postWidth = posts[0].offsetWidth + 15; // include gap
    let currentPosition = 0;

    // Scroll carousel
    function scrollCarousel(direction) {
        const maxScroll = postWidth * (posts.length - 1);
        
        if (direction === 'next') {
            currentPosition = Math.min(currentPosition + postWidth, maxScroll);
        } else {
            currentPosition = Math.max(currentPosition - postWidth, 0);
        }
        
        carouselTrack.scrollLeft = currentPosition;
    }

    prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    nextBtn.addEventListener('click', () => scrollCarousel('next'));

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    carouselTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            scrollCarousel('next');
        }
        if (touchEndX - touchStartX > 50) {
            scrollCarousel('prev');
        }
    }
});
