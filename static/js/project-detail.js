
// Datos de los proyectos
const projectsData = {
    1: {
        name: "Reservas del Poblado",
        category: "Residencial",
        location: "Espinal - Tolima",
        locationDetail: "Espinal - Tolima",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4896.529240332806!2d-74.87141532418691!3d4.141163046252356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ed129afb04a61%3A0x133f8c08f51f2059!2sURBANIZACION%20RESERVAS%20DEL%20POBLADO!5e1!3m2!1ses!2sco!4v1786657882922!5m2!1ses!2sco",
        description: "Proyecto residencial con unidades diseñadas para un estilo de vida cómodo y moderno en Espinal. Viviendas de 1 a 3 habitaciones, con acabados completos y una propuesta de desarrollo que integra zonas verdes y un parque biosaludable.",
        priceFrom: "150M COP",
        priceTo: "210M COP",
        priceLote: "55M COP",
        labelLote: "Solo Lote",
        image: "../static/images/detalles/detallesreservas.png",
        video: "../static/images/detalles/InviertemymConstructura.mp4",
        videoTitle: "Conoce Reservas del Poblado",
        gallery: [
            "../static/images/detalles/detallesreservas.png",
            "../static/images/detalles/vistareareservas.jpeg",
            "../static/images/detalles/planoreservas.jpg"
        ],
        planos: [
            { src: "../static/images/detalles/planoreservas.jpg", label: "Plano Arquitectónico" },
            { src: "../static/images/detalles/vistareareservas.jpeg", label: "Vista Aérea" },
            { src: "../static/images/detalles/detallesreservas.png", label: "Vista General" }
        ],
        area: "90 m²",
        year: "2027",
        floors: "Libre construcción",
        bedrooms: "1 a 3",
        bathrooms: "1 a 2",
        offer: "Viviendas desde 150M hasta 210M COP. Lotes fijos desde 55 millones de pesos.",
        features: [
            "Unidades con diseño funcional y acabados completos",
            "Espacios pensados para el clima y la vida familiar",
            "Acceso desde vías principales de Espinal",
            "Áreas comunes seguras y bien iluminadas",
            "Soluciones constructivas de alta calidad"
        ],
        floorLabel: "Libre construcción",
        floorIcon: "fas fa-hammer",
        parkingLabel: "Full acabados",
        parkingIcon: "fas fa-paint-roller",
        parking: "Incluidos",
        amenidades: [
            { icon: "fas fa-tree", name: "Zonas Verdes", desc: "Áreas verdes integradas para descanso y recreación." },
            { icon: "fas fa-heartbeat", name: "Parque Biosaludable", desc: "Circuito biosaludable para ejercicio al aire libre." }
        ]
    },
    2: {
        name: "Luxury Malibu",
        category: "Residencial Lujo",
        location: "Espinal - Tolima, Colombia",
        mapEmbed: "https://www.google.com/maps/embed?pb=!4v1786658641503!6m8!1m7!1sDiuGwZUDiA7Mry8U-Mw2Ug!2m2!1d4.14943246471397!2d-74.8988331295386!3f218.01487072901736!4f0.3690725560196597!5f0.7820865974627469",
        description: "Proyecto de casas de lujo en Espinal con diseño arquitectónico moderno y contemporáneo. Cada casa cuenta con características exclusivas, amplios espacios, sistemas inteligentes y ubicación privilegiada en una zona residencial de alto nivel.",
        priceFrom: "$83.500.000",
        labelFrom: "Valor del conjunto",
        image: "https://via.placeholder.com/700x500/e91e63/ffffff?text=Luxury+Malibu",
        planos: [
            { src: "../static/images/PLANOLUXURY.jpg", label: "Plano Luxury Malibu" },
            { src: "../static/images/detalles/vistareareservas.jpeg", label: "Vista Aérea" },
            { src: "../static/images/detalles/detallesreservas.png", label: "Vista General" }
        ],
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
        name: "Urbanización Malibu",
        category: "Residencial",
        location: "Espinal - Tolima, Colombia",
        mapEmbed: "https://www.google.com/maps/embed?pb=!4v1786658641503!6m8!1m7!1sDiuGwZUDiA7Mry8U-Mw2Ug!2m2!1d4.14943246471397!2d-74.8988331295386!3f218.01487072901736!4f0.3690725560196597!5f0.7820865974627469",
        description: "Proyecto urbanístico residencial con diseño moderno y acabados de lujo, ideal para tu familia. Urbanización Malibu ofrece espacios funcionales, zonas para compartir y un entorno pensado para disfrutar una vida cómoda y tranquila.",
        priceFrom: "$210M COP",
        priceTo: "$250M COP",
        priceLote: "$59.500.000",
        labelLote: "Lote",
        image: "https://via.placeholder.com/700x500/e91e63/ffffff?text=Malibu",
        video: "../static/videos/videomalibu.mp4",
        videoTitle: "Conoce el Proyecto Malibu",
        planos: [
            { src: "../static/images/PLANOMALIBU.jpg", label: "Plano Arquitectonico" },
            { src: "../static/images/detalles/vistareareservas.jpeg", label: "Vista Aérea" },
            { src: "../static/images/detalles/detallesreservas.png", label: "Vista General" }
        ],
        area: "105 m²",
        year: "2027",
        floors: "Urbanización residencial",
        bedrooms: "3",
        bathrooms: "2",
        offer: "Preventa con cuotas iniciales flexibles - Subsidio de tasa de interés",
        features: [
            "Garaje, sala, comedor y cocina tipo americana",
            "3 habitaciones, con habitación principal y baño privado",
            "Baño social, patio de ropas y depósito",
            "Tanques elevados y cubierta arquitectónica",
            "Pisos en cerámica",
            "Cocina y patio de ropas enchapados",
            "Puertas y ventanas internas en madera",
            "Puertas y ventanas de fachada metálicas"
        ],
        parkingLabel: "Garaje",
        parkingIcon: "fas fa-car",
        parking: "Incluido",
        amenidades: [
            { icon: "fas fa-swimming-pool", name: "Piscina comunal", desc: "Espacio de recreación para compartir en familia." },
            { icon: "fas fa-child", name: "Parque infantil", desc: "Zona segura para el juego y la diversión de los niños." },
            { icon: "fas fa-tree", name: "Áreas verdes", desc: "Entornos naturales para descanso y convivencia." },
            { icon: "fas fa-leaf", name: "Sendero ecológico", desc: "Recorrido integrado al entorno natural de la urbanización." },
            { icon: "fas fa-volleyball-ball", name: "Cancha múltiple", desc: "Espacio deportivo para diferentes actividades." },
            { icon: "fas fa-school", name: "Zona institucional", desc: "Área reservada para servicios y equipamientos comunitarios." }
        ]
    },
    4: {
        name: "Sala de Ventas Moderno",
        category: "Sala de ventas",
        location: "Espinal - Tolima, Colombia",
        description: "Visítanos en nuestra Sala de Ventas Moderno en Espinal, Tolima. Allí podrás recibir asesoría personalizada sobre nuestros proyectos.",
        image: "../static/images/saladenegocios.png",
        gallery: ["../static/images/saladenegocios.png"],
        hours: [
            { name: "Lunes a viernes", desc: "8:00 a.m. a 12:00 m. y 2:00 p.m. a 5:00 p.m." },
            { name: "Sábados", desc: "8:00 a.m. a 12:00 m. y 2:00 p.m. a 4:00 p.m." },
            { name: "Domingos", desc: "9:00 a.m. a 3:00 p.m." }
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!4v1786657237490!6m8!1m7!1sDiuGwZUDiA7Mry8U-Mw2Ug!2m2!1d4.14943246471397!2d-74.8988331295386!3f235.86388922645932!4f-1.9990058248597649!5f0.7820865974627469",
        simpleDetail: true,
        detailTitle: "Sala de Ventas"
    },
    5: {
        name: "Casa Campestre Lujosa",
        category: "Residencial",
        location: "Espinal - Tolima, Colombia",
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
        location: "Espinal - Tolima, Colombia",
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
document.addEventListener('DOMContentLoaded', function () {
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
        document.getElementById('priceFrom').textContent = project.priceFrom || '';
        document.getElementById('priceTo').textContent = project.priceTo || '';

        // Actualizar ubicación principal y detalle
        document.getElementById('projectLocation').textContent = project.location;
        const locationDetailElem = document.getElementById('projectLocationDetail');
        if (locationDetailElem) {
            locationDetailElem.textContent = project.locationDetail || project.location;
        }

        // Actualizar oferta
        const offerElement = document.getElementById('projectOffer');
        if (offerElement) offerElement.textContent = project.offer || '';

        const simpleDetail = Boolean(project.simpleDetail);
        const detailLayout = document.querySelector('.project-detail-new');
        if (detailLayout) detailLayout.classList.toggle('sales-detail', simpleDetail);
        const detailTitle = document.getElementById('projectDescriptionTitle');
        if (detailTitle) {
            detailTitle.textContent = simpleDetail
                ? (project.detailTitle || 'Sala de Ventas')
                : 'Descripción del Proyecto';
        }

        // Actualizar descripción
        document.getElementById('projectFullDescription').textContent = project.description;

        document.getElementById('projectOfferBox').style.display = simpleDetail ? 'none' : '';
        document.getElementById('projectFeaturesHeading').style.display = simpleDetail ? 'none' : '';
        document.getElementById('projectFeatures').style.display = simpleDetail ? 'none' : '';

        const hoursList = document.getElementById('projectHours');
        if (hoursList) {
            hoursList.innerHTML = (project.hours || []).map(hour => `
                <div class="amenity-card hours-card">
                    <i class="fas fa-clock"></i>
                    <h4>${hour.name}</h4>
                    <p>${hour.desc}</p>
                </div>
            `).join('');
            const hoursSection = hoursList.closest('.project-hours');
            if (hoursSection) hoursSection.style.display = project.hours ? 'block' : 'none';
        }

        const featuresList = document.getElementById('projectFeatures');
        if (featuresList) {
            featuresList.innerHTML = (project.features || []).map(feature =>
                `<li><i class="fas fa-check"></i> ${feature}</li>`
            ).join('');
        }

        // Actualizar especificaciones técnicas
        const specs = {
            specArea: project.area,
            specYear: project.year,
            specFloors: project.floors,
            specBedrooms: project.bedrooms,
            specBathrooms: project.bathrooms
        };
        Object.entries(specs).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value || '';
        });

        // Labels y íonos personalizados de specs
        if (project.floorLabel) {
            document.getElementById('specLabelFloors').textContent = project.floorLabel;
            document.getElementById('specIconFloors').innerHTML = `<i class="${project.floorIcon || 'fas fa-building'}"></i>`;
        }
        if (project.parkingLabel) {
            document.getElementById('specLabelParking').textContent = project.parkingLabel;
            document.getElementById('specIconParking').innerHTML = `<i class="${project.parkingIcon || 'fas fa-car'}"></i>`;
            document.getElementById('specParking').textContent = project.parking || '';
        }

        // Labels de precios y precio extra (lote)
        if (project.labelFrom) document.getElementById('labelPriceFrom').textContent = project.labelFrom;
        if (project.labelTo) document.getElementById('labelPriceTo').textContent = project.labelTo;
        const priceSection = document.getElementById('priceSectionInline');
        const priceToItem = document.getElementById('priceToItem');
        const priceRangeDivider = document.getElementById('priceRangeDivider');
        const hasPriceRange = Boolean(project.priceTo);
        if (priceSection) priceSection.style.display = simpleDetail ? 'none' : '';
        if (priceToItem && priceRangeDivider && priceSection) {
            priceToItem.style.display = hasPriceRange ? 'flex' : 'none';
            priceRangeDivider.style.display = hasPriceRange ? 'block' : 'none';
            priceSection.style.gridTemplateColumns = hasPriceRange ? '1fr 50px 1fr' : '1fr';
        }
        const existingLote = document.getElementById('priceLoteItem');
        if (existingLote) existingLote.remove();
        if (project.priceLote && priceSection) {
            priceSection.insertAdjacentHTML('beforeend',
                `<div class="price-divider-inline"></div>
                 <div class="price-item-inline" id="priceLoteItem">
                     <span>${project.labelLote || 'Lote'}</span>
                     <p style="color:var(--primary-color);font-weight:700;font-size:2 rem;margin:0">${project.priceLote}</p>
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
            const galleryImgs = document.querySelectorAll('.gallery-sidebar .gallery-item img');
            galleryImgs.forEach((img, i) => {
                if (project.gallery[i]) {
                    img.src = project.gallery[i];
                    img.closest('.gallery-item').style.display = 'block';
                } else {
                    img.closest('.gallery-item').style.display = 'none';
                }
            });
        }

        const mapFrame = document.getElementById('projectMap');
        const mapSection = document.getElementById('ubicacion-section');
        const mapTab = document.querySelector('.tab-anchor-link[href="#ubicacion-section"]');
        if (mapFrame) {
            mapFrame.src = project.mapEmbed || '';
        }
        if (mapSection) {
            mapSection.style.display = project.mapEmbed ? '' : 'none';
        }
        if (mapTab) {
            mapTab.style.display = project.mapEmbed ? '' : 'none';
        }

        const gallerySidebar = document.getElementById('gallerySidebar');
        if (gallerySidebar) gallerySidebar.style.display = simpleDetail ? 'none' : '';
        const tourButton = document.getElementById('tourBtn');
        if (tourButton) tourButton.style.display = simpleDetail ? 'none' : '';

        ['planos-section', 'amenidades-section', 'especificaciones-section'].forEach(sectionId => {
            const section = document.getElementById(sectionId);
            const tab = document.querySelector(`.tab-anchor-link[href="#${sectionId}"]`);
            if (section) section.style.display = simpleDetail ? 'none' : '';
            if (tab) tab.style.display = simpleDetail ? 'none' : '';
        });

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
        button.addEventListener('click', function () {
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
        item.addEventListener('click', function () {
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
document.getElementById('videoBtn')?.addEventListener('click', function () {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

document.getElementById('tourBtn')?.addEventListener('click', function () {
    alert('Tour virtual interactivo cargará aquí');
    // Implementar tour virtual
});

// Botón de comparar
document.querySelectorAll('.btn-action')[0]?.addEventListener('click', function () {
    alert('Funcionalidad de comparación de proyectos');
});

// Botón de compartir
document.querySelectorAll('.btn-action')[1]?.addEventListener('click', function () {
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

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBack = document.getElementById('lightboxBackdrop');

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
document.addEventListener('click', function (e) {
    const planoItem = e.target.closest('.plano-item');
    if (planoItem) {
        const img = planoItem.querySelector('img');
        const caption = planoItem.querySelector('p')?.textContent;
        if (img?.src) openLightbox(img.src, caption);
    }

    // Click en imagen principal del sidebar
    if (e.target.closest('.main-image-container-sidebar') && !e.target.closest('.overlay-btn')) {
        const img = document.getElementById('mainImage');
        if (img?.src) openLightbox(img.src, document.getElementById('projectTitle')?.textContent);
    }
});
