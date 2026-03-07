/**
 * ============================================================
 * FronteraTours — Language System
 * ============================================================
 * Auto-detects browser language and provides ES ↔ PT toggling.
 * All translatable elements use [data-i18n="key"] attributes.
 * ============================================================
 */

import { translations } from '../data/i18n.js';

let currentLang = 'es';

/**
 * Detect browser language and default to ES or PT.
 */
export function detectLanguage() {
  const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
  if (browserLang.startsWith('pt')) {
    currentLang = 'pt';
  } else {
    currentLang = 'es';
  }
  return currentLang;
}

/**
 * Get current language.
 */
export function getLang() {
  return currentLang;
}

/**
 * Set language and update all translated elements on the page.
 */
export function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  applyTranslations();
  updateLangButtons();
  localStorage.setItem('frontera-lang', lang);
}

/**
 * Toggle between ES and PT.
 */
export function toggleLang() {
  setLang(currentLang === 'es' ? 'pt' : 'es');
}

/**
 * Get a single translated string by key.
 */
export function t(key) {
  const entry = translations[key];
  if (!entry) return key;
  return entry[currentLang] || entry['es'] || key;
}

/**
 * Apply translations to all [data-i18n] elements.
 */
export function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (translated !== key) {
      el.textContent = translated;
    }
  });

  // Also handle placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translated = t(key);
    if (translated !== key) {
      el.setAttribute('placeholder', translated);
    }
  });

  // Handle aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    const translated = t(key);
    if (translated !== key) {
      el.setAttribute('aria-label', translated);
    }
  });
}

/**
 * Update language selector buttons active state.
 */
function updateLangButtons() {
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
}

/**
 * Initialize language system.
 */
export function initLanguage() {
  // Check localStorage first, then detect from browser
  const stored = localStorage.getItem('frontera-lang');
  if (stored === 'es' || stored === 'pt') {
    currentLang = stored;
  } else {
    detectLanguage();
  }

  document.documentElement.lang = currentLang;
  applyTranslations();
  updateLangButtons();

  // Bind language toggle buttons
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLang(btn.getAttribute('data-lang'));
    });
  });
}
