

// Datos de los proyectos
const projectsData = {
    1: {
        name: "Reservas del Poblado",
        category: "Residencial",
        location: "El Poblado, Medellín - Colombia",
        description: "Proyecto residencial de lujo ubicado en una de las zonas más exclusivas de El Poblado. Cuenta con apartamentos modelos de 1 a 4 habitaciones, con acabados premium y vistas privilegiadas hacia la ciudad. Un proyecto que combina modernidad, seguridad y la mejor ubicación de la ciudad.",
        priceFrom: "$350.000.000",
        priceTo: "$1.800.000.000",
        image: "../static/images/detalles/detallesreservas.png",
        video: "../static/images/detalles/Invierte mym Constructura.mp4",
        videoTitle: "Conoce Reservas del Poblado",
        gallery: [
            "../static/images/detalles/detallesreservas.png",
            "../static/images/detalles/vistareareservas.png",
            "../static/images/carousel/proyecto1.jpeg",
            "../static/images/carousel/proyecto2.jpeg"
        ],
        planos: [
            { src: "../static/images/detalles/detallesreservas.png", label: "Vista General" },
            { src: "../static/images/detalles/vistareareservas.jpeg", label: "Vista Aérea" },
            { src: "../static/images/detalles/planoreservas.jpg", label: "Plano Arquitectónico" }
        ],
        area: "90 m²",
        year: "2027",
        floors: "15",
        bedrooms: "1 a 3",
        bathrooms: "1 a 2",
        offer: "Descuento especial en preventa - Financiamiento hasta 240 meses",
        features: [
            "Apartamentos con balcones y terrazas",
            "Acabados de lujo premium",
            "Sistema domótico inteligente",
            "Piscina climatizada de espejo infinito",
            "Gimnasio y sauna",
            "Zona de coworking",
            "Parqueadero subterráneo cubierto",
            "Seguridad 24/7 con vigilancia CCTV",
            "Zona común con BBQ",
            "Acceso rápido a centros comerciales"
        ]
    },
    2: {
        name: "Luxury Malibu",
        category: "Residencial Lujo",
        location: "Sabaneta, Área Metropolitana - Colombia",
        description: "Proyecto de casas de lujo en Sabaneta con diseño arquitectónico moderno y contemporáneo. Cada casa cuenta con características exclusivas, amplios espacios, sistemas inteligentes y ubicación privilegiada en una zona residencial de alto nivel.",
        priceFrom: "$800.000.000",
        priceTo: "$2.500.000.000",
        image: "https://via.placeholder.com/700x500/e91e63/ffffff?text=Luxury+Malibu",
        area: "250 a 500 m²",
        year: "2026",
        floors: "2 a 3",
        bedrooms: "3 a 5",
        bathrooms: "3 a 4",
        offer: "Acceso exclusivo a clubhouse de lujo con piscina olímpica",
        features: [
            "Casas de lujo con diseño contemporáneo",
            "Amplios espacios y áreas verdes",
            "Sistemas de domótica integrados",
            "Piscina privada en cada casa",
            "Garaje para 2 a 3 vehículos",
            "Cocina integral de lujo",
            "Zonas de ocio familiar",
            "Acceso a clubhouse comunitario",
            "Seguridad perimetral 24/7",
            "Vecindario selectivo y exclusivo"
        ]
    },
    3: {
        name: "Malibu",
        category: "Residencial",
        location: "Envigado, Área Metropolitana - Colombia",
        description: "Proyecto residencial moderno en Envigado ofreciendo apartamentos de confort y estilo. Con ubicación estratégica, acceso rápido a zonas comerciales y de servicios, ideales para familias que buscan seguridad y calidad de vida.",
        priceFrom: "$280.000.000",
        priceTo: "$900.000.000",
        image: "https://via.placeholder.com/700x500/e91e63/ffffff?text=Malibu",
        video: "../static/videos/videomalibu.mp4",
        videoTitle: "Conoce el Proyecto Malibu",
        area: "50 a 200 m²",
        year: "2025",
        floors: "12",
        bedrooms: "1 a 3",
        bathrooms: "1 a 2",
        offer: "Preventa con cuotas iniciales flexibles - Subsidio de tasa de interés",
        features: [
            "Apartamentos modernos y funcionales",
            "Acabados en materiales de calidad",
            "Áreas comunes amplias",
            "Piscina y zona de recreación",
            "Gimnasio equipado",
            "Parqueadero cubierto",
            "Ascensores de última generación",
            "Servicios de vigilancia constante",
            "Zona infantil segura",
            "Fácil acceso a centros comerciales"
        ]
    },
    4: {
        name: "Local Comercial Moderno",
        category: "Comercial",
        location: "Zona Comercial Estratégica",
        description: "Diseño y ejecución de local comercial moderno de 180 m². Incluye zona de ventas, almacén y oficinas.",
        priceFrom: "$120.000.000",
        priceTo: "$200.000.000",
        image: "https://via.placeholder.com/700x500/e91e63/ffffff?text=Local",
        area: "180 m²",
        year: "2024",
        floors: "1",
        bedrooms: "0",
        bathrooms: "2",
        offer: "Incluye diseño interior y decoración",
        features: [
            "Zona de ventas amplia",
            "Almacén bien distribuido",
            "Oficinas administrativas",
            "Servicios sanitarios modernos",
            "Iluminación LED eficiente",
            "Aire acondicionado central"
        ]
    },
    5: {
        name: "Casa Campestre Lujosa",
        category: "Residencial",
        location: "Zona Rural Premium",
        description: "Vivienda campestre de 350 m² con piscina, jardín diseñado y sistemas ecológicos. Máxima privacidad y confort en contacto con la naturaleza.",
        priceFrom: "$400.000.000",
        priceTo: "$600.000.000",
        image: "https://via.placeholder.com/700x500/e91e63/ffffff?text=Campestre",
        area: "350 m²",
        year: "2024",
        floors: "2",
        bedrooms: "4",
        bathrooms: "3",
        offer: "Incluye terreno y paisajismo",
        features: [
            "Diseño arquitectónico exclusivo",
            "Piscina climatizada",
            "Jardines con paisajismo profesional",
            "Sistemas ecológicos",
            "Panel solar integrado",
            "Máxima privacidad y seguridad"
        ]
    },
    6: {
        name: "Centro Comercial Integral",
        category: "Comercial",
        location: "Ubicación Premium Centro",
        description: "Centro comercial de 1200 m² con múltiples locales, área común y servicios complementarios. Oportunidad de inversión de alto rendimiento.",
        priceFrom: "$800.000.000",
        priceTo: "$1.200.000.000",
        image: "https://via.placeholder.com/700x500/e91e63/ffffff?text=Centro",
        area: "1200 m²",
        year: "2024",
        floors: "3",
        bedrooms: "0",
        bathrooms: "6",
        offer: "Retorno de inversión garantizado",
        features: [
            "Múltiples locales comerciales",
            "Área común moderna",
            "Servicios complementarios",
            "Estacionamiento subterráneo",
            "Seguridad 24/7",
            "Rentabilidad comprobada"
        ]
    }
};

// Cargar datos del proyecto al entrar a la página
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project') || 1;
    
    loadProjectData(projectId);
    setupTabs();
    setupGallery();
    filterRelatedProjects(projectId);
});

// Cargar datos dinámicos del proyecto
function loadProjectData(projectId) {
    const project = projectsData[projectId];
    
    if (project) {
        // Actualizar title
        document.getElementById('projectTitle').textContent = project.name;
        document.getElementById('categoryBadge').textContent = project.category;
        document.getElementById('projectLocation').textContent = project.location;
        
        // Actualizar precios
        document.getElementById('priceFrom').textContent = project.priceFrom;
        document.getElementById('priceTo').textContent = project.priceTo;
        
        // Actualizar oferta
        document.getElementById('projectOffer').textContent = project.offer;
        
        // Actualizar descripción
        document.getElementById('projectFullDescription').textContent = project.description;
        
        // Actualizar características
        const featuresList = document.getElementById('projectFeatures');
        featuresList.innerHTML = project.features.map(feature => 
            `<li><i class="fas fa-check"></i> ${feature}</li>`
        ).join('');
        
        // Actualizar especificaciones técnicas
        document.getElementById('specArea').textContent     = project.area;
        document.getElementById('specYear').textContent     = project.year;
        document.getElementById('specFloors').textContent   = project.floors;
        document.getElementById('specBedrooms').textContent = project.bedrooms;
        document.getElementById('specBathrooms').textContent= project.bathrooms;

        // Labels y íonos personalizados de specs
        if (project.floorLabel) {
            document.getElementById('specLabelFloors').textContent = project.floorLabel;
            document.getElementById('specIconFloors').innerHTML    = `<i class="${project.floorIcon || 'fas fa-building'}"></i>`;
        }
        if (project.parkingLabel) {
            document.getElementById('specLabelParking').textContent = project.parkingLabel;
            document.getElementById('specIconParking').innerHTML    = `<i class="${project.parkingIcon || 'fas fa-car'}"></i>`;
            document.getElementById('specParking').textContent      = project.parking || '';
        }

        // Labels de precios y precio extra (lote)
        if (project.labelFrom) document.getElementById('labelPriceFrom').textContent = project.labelFrom;
        if (project.labelTo)   document.getElementById('labelPriceTo').textContent   = project.labelTo;
        const priceSection = document.getElementById('priceSectionInline');
        const existingLote = document.getElementById('priceLoteItem');
        if (existingLote) existingLote.remove();
        if (project.priceLote && priceSection) {
            priceSection.insertAdjacentHTML('beforeend',
                `<div class="price-divider-inline"></div>
                 <div class="price-item-inline" id="priceLoteItem">
                     <span>${project.labelLote || 'Lote'}</span>
                     <p style="color:var(--primary-color);font-weight:700;font-size:1.3rem;margin:0">${project.priceLote}</p>
                 </div>`);
            priceSection.style.gridTemplateColumns = '1fr 50px 1fr 50px 1fr';
        }

        // Amenidades dinámicas
        if (project.amenidades) {
            const grid = document.getElementById('amenitiesGrid');
            if (grid) {
                grid.innerHTML = project.amenidades.map(a =>
                    `<div class="amenity-card">
                        <i class="${a.icon}"></i>
                        <h4>${a.name}</h4>
                        <p>${a.desc}</p>
                    </div>`
                ).join('');
            }
        }
        
        // Actualizar imagen principal
        document.getElementById('mainImage').src = project.image;

        // Actualizar galería de miniaturas
        if (project.gallery) {
            const galleryItems = document.querySelectorAll('.gallery-sidebar .gallery-item img');
            project.gallery.forEach((src, i) => {
                if (galleryItems[i]) galleryItems[i].src = src;
            });
        }

        // Actualizar planos arquitectónicos
        if (project.planos) {
            const planoItems = document.querySelectorAll('.plano-item');
            // Ocultar todos primero
            planoItems.forEach(item => item.style.display = 'none');
            project.planos.forEach((plano, i) => {
                if (planoItems[i]) {
                    planoItems[i].style.display = 'block';
                    planoItems[i].querySelector('img').src = plano.src;
                    planoItems[i].querySelector('p').textContent = plano.label;
                }
            });
        }

        // Manejar sección de video
        const videoSection = document.getElementById('video-section');
        const videoEl = document.getElementById('projectVideoElement');
        const videoBtn = document.getElementById('videoBtn');
        const videoTitle = document.getElementById('videoSectionTitle');

        if (project.video && videoSection && videoEl) {
            videoEl.src = project.video;
            videoEl.load();
            videoSection.style.display = 'block';
            if (videoTitle && project.videoTitle) videoTitle.textContent = project.videoTitle;
            if (videoBtn) videoBtn.style.display = 'flex';
        } else {
            if (videoSection) videoSection.style.display = 'none';
            if (videoBtn) videoBtn.style.display = 'none';
        }
    }
}

// Sistema de Tabs
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remover clase active de todos los tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase active al tab seleccionado
            this.classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });
}

// Galería de imágenes
function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const mainImage = document.getElementById('mainImage');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            mainImage.src = img.src;
        });
    });
}

// Filtrar proyectos recomendados para excluir el proyecto actual
function filterRelatedProjects(currentProjectId) {
    const relatedCards = document.querySelectorAll('.related-projects .project-card');
    
    relatedCards.forEach(card => {
        const cardProjectId = card.getAttribute('data-project-id');
        
        if (cardProjectId === currentProjectId.toString()) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
}

// Botones de Video y Tour Virtual
document.getElementById('videoBtn')?.addEventListener('click', function() {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

document.getElementById('tourBtn')?.addEventListener('click', function() {
    alert('Tour virtual interactivo cargará aquí');
    // Implementar tour virtual
});

// Botón de comparar
document.querySelectorAll('.btn-action')[0]?.addEventListener('click', function() {
    alert('Funcionalidad de comparación de proyectos');
});

// Botón de compartir
document.querySelectorAll('.btn-action')[1]?.addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: document.getElementById('projectTitle').textContent,
            text: 'Mira este increíble proyecto',
            url: window.location.href
        });
    } else {
        alert('Compartir: ' + window.location.href);
    }
});

// =============================================
//  LIGHTBOX — vista completa de imágenes
// =============================================

const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxCap   = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBack  = document.getElementById('lightboxBackdrop');

function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCap.textContent = caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

// Cerrar con botón X y con clic en fondo
lightboxClose?.addEventListener('click', closeLightbox);
lightboxBack?.addEventListener('click', closeLightbox);

// Cerrar con tecla Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});

// Click en planos (delegado para imágenes cargadas dinámicamente)
document.addEventListener('click', function(e) {
    const planoItem = e.target.closest('.plano-item');
    if (planoItem) {
        const img     = planoItem.querySelector('img');
        const caption = planoItem.querySelector('p')?.textContent;
        if (img?.src) openLightbox(img.src, caption);
    }

    // Click en imagen principal del sidebar
    if (e.target.closest('.main-image-container-sidebar') && !e.target.closest('.overlay-btn')) {
        const img = document.getElementById('mainImage');
        if (img?.src) openLightbox(img.src, document.getElementById('projectTitle')?.textContent);
    }
});
