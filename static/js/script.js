// Menu Toggle
const menuToggle = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

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
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        if (data.nombre && data.email && data.telefono && data.mensaje) {
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

// Contadores animados del hero
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 1800;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, stepTime);
}

const counters = document.querySelectorAll('.hero-stat-number');
if (counters.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

// Instagram Carousel
document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!carouselTrack || !prevBtn || !nextBtn) return;

    const posts = document.querySelectorAll('.instagram-post');
    if (posts.length === 0) return;

    // Base URL del backend de miniaturas.
    // Si ejecutas localmente con file://, usa el servidor local en localhost:3000.
    // En producción usa el mismo origen (https://mymsoftcom.me).
    const BACKEND_BASE_URL = (() => {
        if (window.location.protocol === 'file:') {
            return 'http://localhost:3000';
        }
        return '';
    })();

    function getThumbnailEndpoint(instagramUrl) {
        const encodedUrl = encodeURIComponent(instagramUrl);
        return `${BACKEND_BASE_URL}/api/reels?url=${encodedUrl}`;
    }

    async function loadPostThumbnails() {
        posts.forEach((post, index) => {
            const instagramUrl = post.getAttribute('href');
            if (!instagramUrl || !instagramUrl.includes('instagram.com')) return;

            const cleanUrl = instagramUrl.split('?')[0].replace(/\/?$/, '');
            const endpoint = getThumbnailEndpoint(cleanUrl);
            console.log('Cargando miniatura de Instagram:', cleanUrl, endpoint);

            fetch(endpoint)
                .then(response => {
                    if (!response.ok) {
                        return response.json().then((data) => {
                            throw new Error(`${response.status} ${response.statusText}: ${data.error || 'Error al obtener thumbnail'}`);
                        }).catch(() => {
                            throw new Error(`${response.status} ${response.statusText}`);
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Respuesta del backend de Instagram:', data);
                    const imageUrl = data && (data.image || data.thumbnail);
                    if (imageUrl) {
                        setPostThumbnail(post, imageUrl);
                        console.log('Miniatura cargada para post', index + 1);
                    } else {
                        throw new Error('Respuesta inválida del servidor');
                    }
                })
                .catch(error => {
                    console.warn('No se pudo cargar la miniatura de Instagram:', error);
                    setPostThumbnail(post, fallbackImage);
                });
        });
    }

    loadPostThumbnails();

    // Calculate scroll distance
    const postStyle = window.getComputedStyle(posts[0]);
    const postWidth = posts[0].offsetWidth;
    const gap = parseInt(postStyle.marginRight) || 15;
    const scrollDistance = postWidth + gap;

    // Scroll carousel
    function scrollCarousel(direction) {
        const scrollAmount = scrollDistance;
        
        if (direction === 'next') {
            carouselTrack.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else {
            carouselTrack.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    nextBtn.addEventListener('click', () => scrollCarousel('next'));

    // Auto-scroll carousel every 3 seconds
    let autoScrollInterval = setInterval(() => {
        scrollCarousel('next');
    }, 3000);

    // Pause auto-scroll on hover
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    // Resume auto-scroll on mouse leave
    carouselTrack.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(() => {
            scrollCarousel('next');
        }, 3000);
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoScrollInterval);
    }, false);

    carouselTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        autoScrollInterval = setInterval(() => {
            scrollCarousel('next');
        }, 3000);
    }, false);

    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            scrollCarousel('next');
        }
        if (touchEndX - touchStartX > 50) {
            scrollCarousel('prev');
        }
    }

    // Add play icon overlay to each Instagram post
    posts.forEach((post) => {
        const playIcon = document.createElement('div');
        playIcon.className = 'instagram-play-icon';
        playIcon.innerHTML = '<i class="fas fa-play"></i>';
        post.appendChild(playIcon);
    });

    // Load Instagram reel thumbnails automatically using an HTML proxy.
    // Nota: Instagram bloquea peticiones directas desde el navegador. Si quieres miniaturas 100% fiables,
    // es mejor hacerlo desde un servidor con Instagram o un proxy propio.
    const fallbackImage = 'https://via.placeholder.com/300x400/000000/ffffff?text=Reel+no+disponible';

    function fetchInstagramThumbnail(instagramUrl) {
        const cleanUrl = instagramUrl.split('?')[0].replace(/\/$/, '');
        const endpoint = getThumbnailEndpoint(cleanUrl);

        return fetch(endpoint)
            .then(response => {
                if (!response.ok) {
                    return response.json().then((data) => {
                        throw new Error(data.error || 'Error al obtener thumbnail');
                    });
                }
                return response.json();
            })
            .then(data => {
                const imageUrl = data && (data.image || data.thumbnail);
                if (imageUrl) {
                    return imageUrl;
                }
                throw new Error('Respuesta inválida del servidor');
            });
    }

    function setPostThumbnail(post, imageUrl) {
        const img = post.querySelector('img');
        if (img) {
            img.src = imageUrl;
            img.style.objectFit = 'cover';
        }
    }
});
