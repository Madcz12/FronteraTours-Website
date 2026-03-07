/**
 * ============================================================
 * FronteraTours — Main Entry Point
 * ============================================================
 */

/* ── CSS Imports (Now handled via direct links in index.html for zero FOUC) ── */
// import './styles/variables.css';
// import './styles/base.css';
// import './styles/components.css';
// import './styles/sections.css';
// import './styles/responsive.css';

/* ── Libraries ── */
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/* ── App Modules ── */
import { initLanguage, getLang, t } from './js/language.js';
import { BUSINESS, ROUTE, PACKAGES, VEHICLE, PAYMENT_METHODS, TRUST_BADGES } from './data/config.js';

/* ============================================================
   DOM Ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavbar();
  initHeroParticles();
  initBookingForm();
  renderPackages();
  renderRoute();
  renderFleet();
  renderTestimonials();
  renderFAQ();
  renderContact();
  initWhatsAppLinks();
  initCheckout();
  initAOS();

  // Signal that the page is ready to be shown (prevents FOUC)
  document.documentElement.classList.add('page-loaded');
});

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const overlay = document.getElementById('navOverlay');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('is-open');
    menu.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
    document.body.style.overflow = menu.classList.contains('is-open') ? 'hidden' : '';
  });

  // Close on overlay click
  overlay.addEventListener('click', () => {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  // Close on link click (mobile)
  menu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('is-open');
      menu.classList.remove('is-open');
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      toggle.classList.remove('is-open');
      menu.classList.remove('is-open');
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

/* ============================================================
   HERO PARTICLES
   ============================================================ */
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'hero__particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 15 + 's';
    p.style.animationDuration = (10 + Math.random() * 15) + 's';
    p.style.width = (2 + Math.random() * 4) + 'px';
    p.style.height = p.style.width;
    container.appendChild(p);
  }
}

/* ============================================================
   BOOKING FORM → WhatsApp
   ============================================================ */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  const serviceSelect = document.getElementById('bookingService');
  const passengersGroup = document.getElementById('bookingPassengersGroup');

  // Toggle passengers/weight based on service type
  serviceSelect.addEventListener('change', () => {
    const label = passengersGroup.querySelector('.form-label');
    if (serviceSelect.value === 'parcel') {
      label.setAttribute('data-i18n', 'booking.weight');
      label.textContent = t('booking.weight');
    } else {
      label.setAttribute('data-i18n', 'booking.passengers');
      label.textContent = t('booking.passengers');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const service = serviceSelect.value === 'transport' ? t('booking.service.transport') : t('booking.service.parcel');
    const origin = document.getElementById('bookingOrigin').value;
    const dest = document.getElementById('bookingDest').value;
    const date = document.getElementById('bookingDate').value || 'Por confirmar';
    const passengers = document.getElementById('bookingPassengers').value;

    const lang = getLang();
    const greeting = lang === 'pt' ? 'Olá' : 'Hola';
    const msg = `${greeting}, quiero reservar:\n• Servicio: ${service}\n• Origen: ${origin}\n• Destino: ${dest}\n• Fecha: ${date}\n• ${serviceSelect.value === 'transport' ? 'Pasajeros' : 'Peso'}: ${passengers}`;

    openWhatsApp(msg);
  });
}

/* ============================================================
   CHECKOUT MODAL LOGIC
   ============================================================ */
let activePackage = null;
let selectedPaymentMethod = 'zelle';

function initCheckout() {
  const modal = document.getElementById('checkoutModal');
  const closeBtn = document.getElementById('checkoutClose');
  const overlay = document.getElementById('checkoutOverlay');
  const form = document.getElementById('checkoutForm');
  const paymentCards = document.querySelectorAll('.payment-card');

  if (!modal) return;

  // Close modal
  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Payment Method Switch
  paymentCards.forEach(card => {
    card.addEventListener('click', () => {
      paymentCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedPaymentMethod = card.dataset.method;
      renderPaymentDetails();
    });
  });

  // Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!activePackage) return;

    const name = document.getElementById('checkoutName').value;
    const id = document.getElementById('checkoutID').value;
    const date = document.getElementById('checkoutDate').value;
    
    // Create pre-filled WhatsApp message
    const rawMsg = t('checkout.wa.message');
    const msg = rawMsg
      .replace('{package}', t(`packages.${activePackage.id}`))
      .replace('{name}', name)
      .replace('{id}', id)
      .replace('{date}', date)
      .replace('{method}', selectedPaymentMethod.toUpperCase());

    openWhatsApp(msg);
    closeModal();
  });

  renderPaymentDetails();
}

function openCheckout(pkgId) {
  const pkg = PACKAGES.find(p => p.id === pkgId);
  if (!pkg) return;

  activePackage = pkg;
  
  // Update summary in modal
  const summaryPkg = document.getElementById('summaryPackage');
  const summaryPrice = document.getElementById('summaryPrice');
  
  if (summaryPkg) summaryPkg.textContent = t(`packages.${pkg.id}`);
  if (summaryPrice) summaryPrice.textContent = `${pkg.currency} $${pkg.price}`;

  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  
  // Set today as min date
  const dateInput = document.getElementById('checkoutDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
}

function renderPaymentDetails() {
  const container = document.getElementById('paymentDetailsContent');
  if (!container) return;

  const details = BUSINESS.paymentDetails[selectedPaymentMethod];
  
  let html = '';
  if (selectedPaymentMethod === 'zelle') {
    html = `
      <p><strong>Email:</strong> ${details.email}</p>
      <p><strong>Titular:</strong> ${details.holder}</p>
    `;
  } else if (selectedPaymentMethod === 'pagoMovil') {
    html = `
      <p><strong>Banco:</strong> ${details.bank}</p>
      <p><strong>Teléfono:</strong> ${details.phone}</p>
      <p><strong>C.I.:</strong> ${details.id}</p>
    `;
  } else if (selectedPaymentMethod === 'brl') {
    html = `
      <p><strong>PIX (Chave):</strong> ${details.pix}</p>
      <p><strong>Titular:</strong> ${details.holder}</p>
    `;
  }

  container.innerHTML = html;
}

/* ============================================================
   RENDER PACKAGES
   ============================================================ */
function renderPackages() {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;

  grid.innerHTML = PACKAGES.map(pkg => {
    const nameKey = `packages.${pkg.id}`;
    const featured = pkg.recommended ? 'package-card--featured' : '';
    const badge = pkg.recommended
      ? `<span class="badge badge--popular" data-i18n="packages.popular">${t('packages.popular')}</span>`
      : '';

    return `
      <div class="card card--accent-top package-card ${featured}" data-aos="fade-up">
        ${badge}
        <div class="package-card__header">
          <h3 class="package-card__name" data-i18n="${nameKey}">${t(nameKey)}</h3>
          <p class="package-card__passengers">${pkg.passengers}</p>
        </div>
        <div class="package-card__price">
          <div class="package-card__amount"><span>$</span>${pkg.price}</div>
          <p class="package-card__currency">${pkg.currency} / <span data-i18n="packages.from">${t('packages.from')}</span></p>
        </div>
        <div class="amenity-list" style="justify-content:center;">
          <span class="amenity-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M5 12.55a11 11 0 0114.08 0"/></svg>
            <span data-i18n="packages.wifi">${t('packages.wifi')}</span>
          </span>
          <span class="amenity-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="4"/></svg>
            <span data-i18n="packages.ac">${t('packages.ac')}</span>
          </span>
          <span class="amenity-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
            <span>${pkg.luggage}</span>
          </span>
        </div>
        <button type="button" class="btn btn--primary package-cta" data-package="${pkg.id}" style="width:100%;margin-top:var(--space-lg);" data-i18n="packages.cta">${t('packages.cta')}</button>
      </div>
    `;
  }).join('');

  // Bind CTA buttons to Open Checkout instead of direct WhatsApp
  grid.querySelectorAll('.package-cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkgId = btn.getAttribute('data-package');
      openCheckout(pkgId);
    });
  });
}

/* ============================================================
   RENDER ROUTE
   ============================================================ */
function renderRoute() {
  const timeline = document.getElementById('routeTimeline');
  if (!timeline) return;

  timeline.innerHTML = ROUTE.stops.map(stop => `
    <div class="route__stop">
      <h4 class="route__stop-name">${stop.name}</h4>
      <p class="route__stop-km">Km ${stop.km}</p>
    </div>
  `).join('');

  const timeEl = document.getElementById('routeTime');
  if (timeEl) timeEl.textContent = ROUTE.estimatedTime;
}

/* ============================================================
   RENDER FLEET / GALLERY
   ============================================================ */
function renderFleet() {
  const slides = document.getElementById('fleetSlides');
  const specs = document.getElementById('fleetSpecs');
  if (!slides || !specs) return;

  const fleetImages = [
    { src: '/img-exterior.jpg', label: 'Exterior' },
    { src: '/tucsoninterior.jpg', label: 'Interior' },
    { src: '/tucson-maletero.jpg', label: 'Maletero' },
    { src: '/tucson.jpeg', label: 'Detalle' },
  ];

  slides.innerHTML = fleetImages.map((img) => `
    <div class="swiper-slide">
      <div class="fleet__image-wrap">
        <img src="${img.src}" alt="Hyundai Tucson - ${img.label}" class="fleet__img" style="width:100%; height:400px; object-fit:cover; border-radius:var(--radius-lg);" />
        <div class="fleet__image-label" style="position:absolute; bottom:var(--space-md); right:var(--space-md); background:rgba(0,0,0,0.6); color:white; padding:var(--space-xs) var(--space-sm); border-radius:var(--radius-sm); font-size:var(--fs-xs);">
          ${img.label}
        </div>
      </div>
    </div>
  `).join('');

  // Specs
  specs.innerHTML = `
    <li class="fleet__spec-item">
      <span class="fleet__spec-label" data-i18n="fleet.model">${t('fleet.model')}</span>
      <span class="fleet__spec-value">${VEHICLE.name}</span>
    </li>
    <li class="fleet__spec-item">
      <span class="fleet__spec-label" data-i18n="fleet.year">${t('fleet.year')}</span>
      <span class="fleet__spec-value">${VEHICLE.year}</span>
    </li>
    <li class="fleet__spec-item">
      <span class="fleet__spec-label" data-i18n="fleet.capacity">${t('fleet.capacity')}</span>
      <span class="fleet__spec-value">${VEHICLE.capacity}</span>
    </li>
    <li class="fleet__spec-item">
      <span class="fleet__spec-label" data-i18n="fleet.features">${t('fleet.features')}</span>
      <span class="fleet__spec-value">${VEHICLE.features.join(', ')}</span>
    </li>
  `;

  // Init Swiper
  new Swiper('#fleetSwiper', {
    loop: true,
    autoplay: { delay: 4000 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '#fleetSwiper .swiper-pagination', clickable: true },
  });
}

/* ============================================================
   RENDER TESTIMONIALS
   ============================================================ */
function renderTestimonials() {
  const container = document.getElementById('testimonialSlides');
  if (!container) return;

  const testimonials = [1, 2, 3, 4];
  const ratings = [5, 5, 5, 4];

  container.innerHTML = testimonials.map((n, i) => {
    const stars = '★'.repeat(ratings[i]) + '☆'.repeat(5 - ratings[i]);
    return `
      <div class="swiper-slide">
        <div class="testimonial-card">
          <div class="testimonial-card__text" data-i18n="testimonial.${n}.text">${t(`testimonial.${n}.text`)}</div>
          <div class="stars" style="justify-content:center;color:var(--color-accent);font-size:var(--fs-lg);">
            ${stars}
          </div>
          <div class="testimonial-card__name" data-i18n="testimonial.${n}.name">${t(`testimonial.${n}.name`)}</div>
        </div>
      </div>
    `;
  }).join('');

  new Swiper('#testimonialSwiper', {
    loop: true,
    autoplay: { delay: 5000 },
    pagination: { el: '#testimonialSwiper .swiper-pagination', clickable: true },
    spaceBetween: 30,
  });

  // Image Gallery Carousel
  const imageContainer = document.getElementById('testimonialImageSlides');
  if (imageContainer) {
    const images = [
      'carrusel1.jpeg', 'carrusel2.jpeg', 'carrusel3.jpeg',
      'carrusel4.jpeg', 'carrusel5.jpeg', 'carrusel6.jpeg'
    ];

    imageContainer.innerHTML = images.map(img => `
      <div class="swiper-slide">
        <img src="/${img}" alt="FronteraTours - Experiencia" loading="lazy" />
      </div>
    `).join('');

    new Swiper('#testimonialImageSwiper', {
      loop: true,
      autoplay: { delay: 4500 },
      pagination: { el: '#testimonialImageSwiper .swiper-pagination', clickable: true },
      navigation: { nextEl: '#testimonialImageSwiper .swiper-button-next', prevEl: '#testimonialImageSwiper .swiper-button-prev' },
      effect: 'fade',
      fadeEffect: { crossFade: true },
    });
  }

  // Refresh AOS after rendering dynamic content
  if (typeof AOS !== 'undefined' && AOS.refresh) AOS.refresh();
}

/* ============================================================
   RENDER FAQ
   ============================================================ */
function renderFAQ() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  const faqs = [1, 2, 3, 4, 5, 6];

  container.innerHTML = faqs.map(n => `
    <div class="accordion__item">
      <button class="accordion__trigger" type="button">
        <span data-i18n="faq.q${n}">${t(`faq.q${n}`)}</span>
        <svg class="accordion__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="accordion__content">
        <div class="accordion__body" data-i18n="faq.a${n}">${t(`faq.a${n}`)}</div>
      </div>
    </div>
  `).join('');

  // Accordion logic
  container.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const isOpen = item.classList.contains('is-open');

      // Close all
      container.querySelectorAll('.accordion__item').forEach(i => i.classList.remove('is-open'));

      // Toggle current
      if (!isOpen) item.classList.add('is-open');
    });
  });
}

/* ============================================================
   RENDER CONTACT
   ============================================================ */
function renderContact() {
  const phone = document.getElementById('contactPhone');
  const email = document.getElementById('contactEmail');
  const hours = document.getElementById('contactHours');
  const payments = document.getElementById('paymentMethods');

  if (phone) phone.textContent = BUSINESS.phone;
  if (email) email.textContent = BUSINESS.email;
  if (hours) hours.textContent = `${BUSINESS.daysOpen}, ${BUSINESS.hours}`;

  if (payments) {
    payments.innerHTML = PAYMENT_METHODS.map(m => `<span class="payment-method">${m}</span>`).join('');
  }

  // Trust badges
  const badgeYears = document.getElementById('badgeYears');
  const badgeTrips = document.getElementById('badgeTrips');
  const badgeRating = document.getElementById('badgeRating');
  if (badgeYears) badgeYears.textContent = TRUST_BADGES.yearsOperating;
  if (badgeTrips) badgeTrips.textContent = TRUST_BADGES.tripsDone;
  if (badgeRating) badgeRating.textContent = TRUST_BADGES.rating;
}

/* ============================================================
   WHATSAPP LINKS
   ============================================================ */
function initWhatsAppLinks() {
  const setWaLink = (id, msgKey) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsApp(t(msgKey));
      });
    }
  };

  setWaLink('heroBookBtn', 'wa.general');
  setWaLink('heroParcelBtn', 'wa.parcel');
  setWaLink('parcelCtaBtn', 'wa.parcel');
  setWaLink('faqCtaBtn', 'wa.general');
  setWaLink('contactCtaBtn', 'wa.general');
  setWaLink('whatsappFloatBtn', 'wa.general');
  setWaLink('navWhatsapp', 'wa.general');
}

function openWhatsApp(message) {
  const phone = BUSINESS.whatsapp.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* ============================================================
   AOS (Animate On Scroll)
   ============================================================ */
function initAOS() {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
  });
}
