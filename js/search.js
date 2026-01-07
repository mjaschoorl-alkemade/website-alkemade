/* ALKEMADE FLOWERS - AI-Powered Multilingual Search */

// Multilingual content database
const searchData = {
  nl: {
    ui: {
      placeholder: 'Zoek met AI search naar informatie over Alkemade Flowers',
      loading: 'AI zoekt naar het beste antwoord...',
      aiAnswer: 'AI Antwoord',
      moreInfo: 'Meer informatie →',
      relatedPages: 'Gerelateerde pagina\'s',
      noResults: 'Geen resultaten gevonden voor',
      tryOther: 'Probeer andere zoektermen of neem contact met ons op.',
      suggestions: ['Wat doet Alkemade?', 'Contact informatie', 'Diensten', 'Locatie']
    },
    pages: [
      { title: 'Home', url: 'index.html', keywords: ['home', 'welkom', 'alkemade', 'bloemen'], content: 'Alkemade International BV is gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld.' },
      { title: 'Over ons', url: 'over-ons.html', keywords: ['over', 'geschiedenis', 'bedrijf', 'team', 'ervaring'], content: 'Leer meer over Alkemade International BV, onze geschiedenis, missie en het team.' },
      { title: 'Diensten', url: 'over-ons.html#diensten', keywords: ['diensten', 'uitpakken', 'verwerking', 'veiling', 'transport'], content: 'Uitpakken, veilingvoorbereiding, kwaliteitsfeedback, financiële rapportage, transport en directe verkoopondersteuning.' },
      { title: 'Galerij', url: 'galerij.html', keywords: ['galerij', 'foto', 'afbeeldingen', 'vestiging', 'team'], content: 'Bekijk foto\'s van onze vestiging, team, services en tevreden klanten.' },
      { title: 'Partners', url: 'partners.html', keywords: ['partners', 'samenwerking', 'hogewoning', 'floraholland'], content: 'Samenwerking met kwekers wereldwijd.' },
      { title: 'Nieuws', url: 'nieuws.html', keywords: ['nieuws', 'updates', 'artikelen'], content: 'Laatste nieuws en updates van Alkemade Flowers International.' },
      { title: 'Contact', url: 'contact.html', keywords: ['contact', 'adres', 'telefoon', 'email', 'locatie'], content: 'Neem contact op met Alkemade Flowers. Gevestigd bij FloraHolland Aalsmeer.' },
      { title: 'Link Portaal', url: 'link-portaal.html', keywords: ['links', 'portaal', 'resources', 'documenten'], content: 'Handige links naar Royal FloraHolland, Floriday, VBN, NVWA en MPS.' }
    ],
    faq: [
      { q: ['wat doet alkemade', 'wat is alkemade', 'wie is alkemade', 'alkemade'], a: 'Alkemade International BV is gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld. Het bedrijf is gevestigd bij FloraHolland Aalsmeer.', url: 'over-ons.html' },
      { q: ['waar is alkemade', 'locatie', 'adres', 'waar gevestigd', 'waar zitten jullie'], a: 'Alkemade Flowers is gevestigd bij FloraHolland Aalsmeer: Legmeerdijk 313, 1431GB Aalsmeer, Nederland.', url: 'contact.html' },
      { q: ['contact', 'telefoon', 'bellen', 'telefoonnummer', 'bereiken'], a: 'U kunt ons bereiken op +31-297-567148 of via email: alkemade@nl-alkemade.com', url: 'contact.html' },
      { q: ['email', 'mailen', 'e-mail', 'mail'], a: 'Ons e-mailadres is: alkemade@nl-alkemade.com', url: 'contact.html' },
      { q: ['diensten', 'services', 'wat bieden jullie', 'wat doen jullie'], a: 'Wij bieden: uitpakken & verwerking, veilingvoorbereiding, kwaliteitsfeedback, financiële rapportage, transport naar veilingen, en directe verkoopondersteuning.', url: 'over-ons.html' },
,
      { q: ['opgericht', 'wanneer', 'geschiedenis', 'sinds', 'hoe lang'], a: 'Alkemade International BV werd opgericht in 1997 en heeft meer dan 27 jaar ervaring in de bloemenindustrie.', url: 'over-ons.html' },
      { q: ['boeketten', 'supermarkt', 'mono bunches'], a: 'Wij verwerken boeketten en mono bunches voor supermarkten.', url: 'over-ons.html' },
      { q: ['koelketen', 'cool chain', 'temperatuur', 'koel'], a: 'Een goed beheerde koelketen is een essentieel onderdeel van onze dienstverlening.', url: 'over-ons.html' },
      { q: ['veiling', 'auction', 'floraholland'], a: 'Wij bereiden bloemen voor op de veiling en verzorgen transport naar verschillende veilinglocaties, waaronder FloraHolland.', url: 'over-ons.html' },
      { q: ['partner worden', 'samenwerken', 'samenwerking'], a: 'Wilt u partner worden? Neem contact met ons op via +31-297-567148 of alkemade@nl-alkemade.com', url: 'contact.html' }
    ]
  },
  en: {
    ui: {
      placeholder: 'Search with AI for information about Alkemade Flowers',
      loading: 'AI is searching for the best answer...',
      aiAnswer: 'AI Answer',
      moreInfo: 'More information →',
      relatedPages: 'Related pages',
      noResults: 'No results found for',
      tryOther: 'Try other search terms or contact us.',
      suggestions: ['What does Alkemade do?', 'Contact information', 'Services', 'Location']
    },
    pages: [
      { title: 'Home', url: 'index.html', keywords: ['home', 'welcome', 'alkemade', 'flowers'], content: 'Alkemade International BV specializes in handling, marketing and logistics of fresh cut flowers from around the globe.' },
      { title: 'About us', url: 'over-ons.html', keywords: ['about', 'history', 'company', 'team', 'experience'], content: 'Learn more about Alkemade International BV, our history, mission and team.' },
      { title: 'Services', url: 'over-ons.html#diensten', keywords: ['services', 'unpacking', 'processing', 'auction', 'transport'], content: 'Unpacking, auction preparation, quality feedback, financial reporting, transport and direct sales support.' },
      { title: 'Gallery', url: 'galerij.html', keywords: ['gallery', 'photos', 'images', 'location', 'team'], content: 'View photos of our location, team, products and satisfied customers.' },
      { title: 'Partners', url: 'partners.html', keywords: ['partners', 'cooperation', 'floraholland'], content: 'Cooperation with growers worldwide.' },
      { title: 'News', url: 'nieuws.html', keywords: ['news', 'updates', 'articles'], content: 'Latest news and updates from Alkemade Flowers International.' },
      { title: 'Contact', url: 'contact.html', keywords: ['contact', 'address', 'phone', 'email', 'location'], content: 'Contact Alkemade Flowers. Located at FloraHolland Aalsmeer.' },
      { title: 'Link Portal', url: 'link-portaal.html', keywords: ['links', 'portal', 'resources', 'documents'], content: 'Useful links to Royal FloraHolland, Floriday, VBN, NVWA and MPS.' }
    ],
    faq: [
      { q: ['what does alkemade do', 'what is alkemade', 'who is alkemade', 'alkemade', 'about alkemade'], a: 'Alkemade International BV specializes in handling, marketing and logistics of fresh cut flowers from around the globe. The company is located at FloraHolland Aalsmeer.', url: 'over-ons.html' },
      { q: ['where is alkemade', 'location', 'address', 'where located', 'where are you'], a: 'Alkemade Flowers is located at FloraHolland Aalsmeer: Legmeerdijk 313, 1431GB Aalsmeer, The Netherlands.', url: 'contact.html' },
      { q: ['contact', 'phone', 'call', 'phone number', 'reach'], a: 'You can reach us at +31-297-567148 or via email: alkemade@nl-alkemade.com', url: 'contact.html' },
      { q: ['email', 'mail', 'e-mail'], a: 'Our email address is: alkemade@nl-alkemade.com', url: 'contact.html' },
      { q: ['services', 'what do you offer', 'what do you do'], a: 'We offer: unpacking & processing, auction preparation, quality feedback, financial reporting, transport to auctions, and direct sales support.', url: 'over-ons.html' },
,
      { q: ['founded', 'when', 'history', 'since', 'how long'], a: 'Alkemade International BV was established in 1997 and has more than 27 years of experience in the flower industry.', url: 'over-ons.html' },
      { q: ['bouquets', 'supermarket', 'mono bunches'], a: 'We process bouquets and mono bunches for supermarkets.', url: 'over-ons.html' },
      { q: ['cool chain', 'temperature', 'cold'], a: 'A well-managed cool chain is an essential part of our services.', url: 'over-ons.html' },
      { q: ['auction', 'floraholland'], a: 'We prepare flowers for auction and provide transport to various auction sites, including FloraHolland.', url: 'over-ons.html' },
      { q: ['become partner', 'cooperate', 'cooperation', 'partnership'], a: 'Would you like to become a partner? Contact us at +31-297-567148 or alkemade@nl-alkemade.com', url: 'contact.html' }
    ]
  },
  es: {
    ui: {
      placeholder: 'Busca con IA información sobre Alkemade Flowers',
      loading: 'IA está buscando la mejor respuesta...',
      aiAnswer: 'Respuesta IA',
      moreInfo: 'Más información →',
      relatedPages: 'Páginas relacionadas',
      noResults: 'No se encontraron resultados para',
      tryOther: 'Prueba otros términos de búsqueda o contáctanos.',
      suggestions: ['¿Qué hace Alkemade?', 'Información de contacto', 'Servicios', 'Ubicación']
    },
    pages: [
      { title: 'Inicio', url: 'index.html', keywords: ['inicio', 'bienvenido', 'alkemade', 'flores'], content: 'Alkemade International BV está especializada en manipulación, marketing y logística de flores cortadas frescas de todo el mundo.' },
      { title: 'Sobre nosotros', url: 'over-ons.html', keywords: ['sobre', 'historia', 'empresa', 'equipo', 'experiencia'], content: 'Conozca más sobre Alkemade International BV, nuestra historia, misión y equipo.' },
      { title: 'Servicios', url: 'over-ons.html#diensten', keywords: ['servicios', 'desempacar', 'procesamiento', 'subasta', 'transporte'], content: 'Desempaque, preparación para subasta, retroalimentación de calidad, informes financieros, transporte y soporte de ventas directas.' },
      { title: 'Galería', url: 'galerij.html', keywords: ['galería', 'fotos', 'imágenes', 'ubicación', 'equipo'], content: 'Vea fotos de nuestra ubicación, equipo, productos y clientes satisfechos.' },
      { title: 'Socios', url: 'partners.html', keywords: ['socios', 'cooperación', 'floraholland'], content: 'Cooperación con productores de todo el mundo.' },
      { title: 'Noticias', url: 'nieuws.html', keywords: ['noticias', 'actualizaciones', 'artículos'], content: 'Últimas noticias y actualizaciones de Alkemade Flowers International.' },
      { title: 'Contacto', url: 'contact.html', keywords: ['contacto', 'dirección', 'teléfono', 'email', 'ubicación'], content: 'Contacte con Alkemade Flowers. Ubicado en FloraHolland Aalsmeer.' },
      { title: 'Portal de enlaces', url: 'link-portaal.html', keywords: ['enlaces', 'portal', 'recursos', 'documentos'], content: 'Enlaces útiles a Royal FloraHolland, Floriday, VBN, NVWA y MPS.' }
    ],
    faq: [
      { q: ['qué hace alkemade', 'qué es alkemade', 'quién es alkemade', 'alkemade', 'sobre alkemade'], a: 'Alkemade International BV está especializada en manipulación, marketing y logística de flores cortadas frescas de todo el mundo. La empresa está ubicada en FloraHolland Aalsmeer.', url: 'over-ons.html' },
      { q: ['dónde está alkemade', 'ubicación', 'dirección', 'dónde están', 'dónde se encuentran'], a: 'Alkemade Flowers está ubicado en FloraHolland Aalsmeer: Legmeerdijk 313, 1431GB Aalsmeer, Países Bajos.', url: 'contact.html' },
      { q: ['contacto', 'teléfono', 'llamar', 'número de teléfono', 'contactar'], a: 'Puede contactarnos al +31-297-567148 o por email: alkemade@nl-alkemade.com', url: 'contact.html' },
      { q: ['email', 'correo', 'e-mail'], a: 'Nuestra dirección de email es: alkemade@nl-alkemade.com', url: 'contact.html' },
      { q: ['servicios', 'qué ofrecen', 'qué hacen'], a: 'Ofrecemos: desempaque y procesamiento, preparación para subasta, retroalimentación de calidad, informes financieros, transporte a subastas y soporte de ventas directas.', url: 'over-ons.html' },
,
      { q: ['fundada', 'cuándo', 'historia', 'desde', 'cuánto tiempo'], a: 'Alkemade International BV fue fundada en 1997 y tiene más de 27 años de experiencia en la industria floral.', url: 'over-ons.html' },
      { q: ['ramos', 'supermercado', 'mono bunches'], a: 'Procesamos ramos y mono bunches para supermercados.', url: 'over-ons.html' },
      { q: ['cadena de frío', 'temperatura', 'frío'], a: 'Una cadena de frío bien gestionada es una parte esencial de nuestros servicios.', url: 'over-ons.html' },
      { q: ['subasta', 'floraholland'], a: 'Preparamos flores para subasta y proporcionamos transporte a varios sitios de subasta, incluyendo FloraHolland.', url: 'over-ons.html' },
      { q: ['ser socio', 'cooperar', 'cooperación', 'asociación'], a: '¿Le gustaría ser socio? Contáctenos al +31-297-567148 o alkemade@nl-alkemade.com', url: 'contact.html' }
    ]
  }
};

class AISearch {
  constructor() {
    this.isOpen = false;
    this.currentLang = this.getWebsiteLanguage();
    this.init();
  }
  
  init() {
    this.createSearchUI();
    this.bindEvents();
    this.listenForLanguageChanges();
  }
  
  // Get the current website language from localStorage or active button
  getWebsiteLanguage() {
    // First check localStorage (set by main.js)
    const storedLang = localStorage.getItem('language');
    if (storedLang && ['nl', 'en', 'es'].includes(storedLang)) {
      return storedLang;
    }
    
    // Fallback: check active lang-option button
    const activeOption = document.querySelector('.lang-option.active');
    if (activeOption) {
      return activeOption.dataset.lang || 'nl';
    }
    
    return 'nl';
  }
  
  // Listen for language changes from the language switcher
  listenForLanguageChanges() {
    // Listen for clicks on language options
    document.addEventListener('click', (e) => {
      const langOption = e.target.closest('.lang-option');
      if (langOption && langOption.dataset.lang) {
        this.setLanguage(langOption.dataset.lang);
      }
    });
    
    // Also listen for storage changes (in case language is changed in another tab)
    window.addEventListener('storage', (e) => {
      if (e.key === 'language') {
        this.setLanguage(e.newValue || 'nl');
      }
    });
  }
  
  // Set the search language and update UI
  setLanguage(lang) {
    if (this.currentLang !== lang && ['nl', 'en', 'es'].includes(lang)) {
      this.currentLang = lang;
      this.updateSearchUI();
    }
  }
  
  // Update the search UI to reflect current language
  updateSearchUI() {
    const ui = searchData[this.currentLang].ui;
    const input = document.querySelector('.search-input');
    const resultsContainer = document.querySelector('.search-results');
    
    if (input) {
      input.placeholder = ui.placeholder;
    }
    
    // If search is showing placeholder, update it
    if (resultsContainer && resultsContainer.querySelector('.search-placeholder')) {
      resultsContainer.innerHTML = this.getPlaceholderHTML();
      this.bindSuggestions();
    }
  }
  
  createSearchUI() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      const searchBtn = document.createElement('li');
      searchBtn.innerHTML = `
        <button class="search-trigger" aria-label="Zoeken">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
      `;
      navMenu.insertBefore(searchBtn, navMenu.lastElementChild);
    }
    
    const ui = searchData[this.currentLang].ui;
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
      <div class="search-modal-overlay"></div>
      <div class="search-modal-content">
        <div class="search-header">
          <div class="search-input-wrapper">
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" class="search-input" placeholder="${ui.placeholder}" autocomplete="off">
          </div>
          <button class="search-close" aria-label="Sluiten">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="search-results">
          ${this.getPlaceholderHTML()}
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    this.addStyles();
  }
  
  getPlaceholderHTML(lang = this.currentLang) {
    const ui = searchData[lang].ui;
    return `
      <div class="search-placeholder">
        <div class="search-placeholder-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <p>${ui.placeholder}</p>
        <div class="search-suggestions">
          ${ui.suggestions.map(s => `<span class="search-suggestion" data-query="${s}">${s}</span>`).join('')}
        </div>
      </div>
    `;
  }
  
  addStyles() {
    const styles = document.createElement('style');
    styles.textContent = `
      .search-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: var(--color-light);
        border: none;
        border-radius: var(--radius-btn);
        cursor: pointer;
        transition: var(--transition-base);
        color: var(--color-dark);
      }
      .search-trigger:hover {
        background: var(--color-black);
        color: var(--color-accent);
      }
      
      .search-modal {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 10vh;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition-base);
      }
      .search-modal.active {
        opacity: 1;
        visibility: visible;
      }
      .search-modal-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.6);
        backdrop-filter: blur(4px);
      }
      .search-modal-content {
        position: relative;
        width: 100%;
        max-width: 640px;
        background: var(--color-white);
        border-radius: var(--radius-lg);
        box-shadow: 0 25px 50px rgba(0,0,0,0.25);
        overflow: hidden;
        transform: translateY(-20px) scale(0.98);
        transition: var(--transition-base);
        margin: 0 var(--space-md);
      }
      .search-modal.active .search-modal-content {
        transform: translateY(0) scale(1);
      }
      
      .search-header {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        padding: var(--space-md);
        border-bottom: 1px solid var(--color-light);
      }
      .search-input-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 12px;
        background: var(--color-light);
        border-radius: var(--radius-btn);
        padding: 12px 16px;
      }
      .search-icon {
        color: var(--color-gray);
        flex-shrink: 0;
      }
      .search-input {
        flex: 1;
        border: none;
        background: none;
        font-size: 1rem;
        font-family: var(--font-body);
        color: var(--color-dark);
        outline: none;
      }
      .search-input::placeholder {
        color: var(--color-gray);
      }
      .search-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: none;
        border: none;
        border-radius: var(--radius-sm);
        cursor: pointer;
        color: var(--color-gray);
        transition: var(--transition-fast);
      }
      .search-close:hover {
        background: var(--color-light);
        color: var(--color-dark);
      }
      
      .search-results {
        max-height: 60vh;
        overflow-y: auto;
        padding: var(--space-md);
      }
      
      .search-placeholder {
        text-align: center;
        padding: var(--space-lg);
        color: var(--color-gray);
      }
      .search-placeholder-icon {
        margin-bottom: var(--space-sm);
        opacity: 0.3;
      }
      .search-placeholder p {
        margin-bottom: var(--space-md);
      }
      .search-suggestions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
      }
      .search-suggestion {
        padding: 8px 14px;
        background: var(--color-light);
        border-radius: var(--radius-btn);
        font-size: 0.85rem;
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .search-suggestion:hover {
        background: var(--color-black);
        color: var(--color-accent);
      }
      
      .search-loading {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: var(--space-lg);
        color: var(--color-gray);
      }
      .search-loading-dots {
        display: flex;
        gap: 4px;
      }
      .search-loading-dots span {
        width: 8px;
        height: 8px;
        background: var(--color-accent);
        border-radius: 50%;
        animation: loadingDot 1.4s infinite ease-in-out both;
      }
      .search-loading-dots span:nth-child(1) { animation-delay: -0.32s; }
      .search-loading-dots span:nth-child(2) { animation-delay: -0.16s; }
      @keyframes loadingDot {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
      }
      
      .search-ai-answer {
        background: linear-gradient(135deg, var(--color-cream), var(--color-white));
        border: 1px solid var(--color-light);
        border-radius: var(--radius-md);
        padding: var(--space-md);
        margin-bottom: var(--space-md);
      }
      .search-ai-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: var(--space-sm);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-accent-dark);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      .search-ai-header svg {
        width: 16px;
        height: 16px;
      }
      .search-ai-text {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--color-dark);
        margin-bottom: var(--space-sm);
      }
      .search-ai-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.85rem;
        color: var(--color-primary);
        font-weight: 500;
      }
      .search-ai-link:hover {
        color: var(--color-accent-dark);
      }
      
      .search-results-list {
        display: grid;
        gap: var(--space-sm);
      }
      .search-results-title {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-gray);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: var(--space-sm);
      }
      .search-result-item {
        display: block;
        padding: var(--space-sm) var(--space-md);
        background: var(--color-white);
        border: 1px solid var(--color-light);
        border-radius: var(--radius-md);
        transition: var(--transition-fast);
      }
      .search-result-item:hover {
        border-color: var(--color-accent);
        background: var(--color-cream);
      }
      .search-result-item h4 {
        font-size: 0.95rem;
        margin-bottom: 4px;
        color: var(--color-dark);
      }
      .search-result-item p {
        font-size: 0.85rem;
        color: var(--color-gray);
        margin: 0;
        line-height: 1.5;
      }
      
      .search-no-results {
        text-align: center;
        padding: var(--space-lg);
        color: var(--color-gray);
      }
      .search-no-results svg {
        margin-bottom: var(--space-sm);
        opacity: 0.3;
      }
    `;
    document.head.appendChild(styles);
  }
  
  bindEvents() {
    const trigger = document.querySelector('.search-trigger');
    const modal = document.querySelector('.search-modal');
    const overlay = document.querySelector('.search-modal-overlay');
    const closeBtn = document.querySelector('.search-close');
    const input = document.querySelector('.search-input');
    
    if (trigger) trigger.addEventListener('click', () => this.open());
    if (overlay) overlay.addEventListener('click', () => this.close());
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    
    if (input) {
      let debounceTimer;
      input.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          this.search(e.target.value);
        }, 300);
      });
      
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }
    
    this.bindSuggestions();
    
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.isOpen ? this.close() : this.open();
      }
    });
  }
  
  open() {
    const modal = document.querySelector('.search-modal');
    const input = document.querySelector('.search-input');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.isOpen = true;
    setTimeout(() => input.focus(), 100);
  }
  
  close() {
    const modal = document.querySelector('.search-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    this.isOpen = false;
  }
  
  search(query) {
    const resultsContainer = document.querySelector('.search-results');
    
    if (!query || query.length < 2) {
      resultsContainer.innerHTML = this.getPlaceholderHTML();
      this.bindSuggestions();
      return;
    }
    
    // Use the website's current language
    const lang = this.currentLang;
    const ui = searchData[lang].ui;
    
    // Show loading
    resultsContainer.innerHTML = `
      <div class="search-loading">
        <div class="search-loading-dots">
          <span></span><span></span><span></span>
        </div>
        <span>${ui.loading}</span>
      </div>
    `;
    
    // Simulate AI thinking delay
    setTimeout(() => {
      const results = this.performSearch(query, lang);
      this.displayResults(results, query, lang);
    }, 600);
  }
  
  performSearch(query, lang) {
    const q = query.toLowerCase().trim();
    const data = searchData[lang];
    const results = {
      aiAnswer: null,
      pages: []
    };
    
    // Check FAQ for direct answers
    for (const faq of data.faq) {
      for (const question of faq.q) {
        if (q.includes(question) || question.includes(q) || this.fuzzyMatch(q, question) > 0.5) {
          results.aiAnswer = {
            text: faq.a,
            url: faq.url
          };
          break;
        }
      }
      if (results.aiAnswer) break;
    }
    
    // Search pages
    for (const page of data.pages) {
      let score = 0;
      
      for (const keyword of page.keywords) {
        if (q.includes(keyword) || keyword.includes(q)) {
          score += 10;
        } else if (this.fuzzyMatch(q, keyword) > 0.5) {
          score += 5;
        }
      }
      
      if (page.content.toLowerCase().includes(q)) {
        score += 8;
      }
      
      if (page.title.toLowerCase().includes(q)) {
        score += 15;
      }
      
      if (score > 0) {
        results.pages.push({
          ...page,
          score
        });
      }
    }
    
    results.pages.sort((a, b) => b.score - a.score);
    
    if (!results.aiAnswer && results.pages.length > 0) {
      results.aiAnswer = {
        text: results.pages[0].content,
        url: results.pages[0].url
      };
    }
    
    return results;
  }
  
  fuzzyMatch(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = this.levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }
  
  levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }
  
  displayResults(results, query, lang) {
    const container = document.querySelector('.search-results');
    const ui = searchData[lang].ui;
    
    if (!results.aiAnswer && results.pages.length === 0) {
      container.innerHTML = `
        <div class="search-no-results">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="8" y1="8" x2="14" y2="14"/>
            <line x1="14" y1="8" x2="8" y2="14"/>
          </svg>
          <p>${ui.noResults} "<strong>${query}</strong>"</p>
          <p style="font-size: 0.9rem;">${ui.tryOther}</p>
        </div>
      `;
      return;
    }
    
    let html = '';
    
    if (results.aiAnswer) {
      html += `
        <div class="search-ai-answer">
          <div class="search-ai-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            ${ui.aiAnswer}
          </div>
          <p class="search-ai-text">${results.aiAnswer.text}</p>
          <a href="${results.aiAnswer.url}" class="search-ai-link">
            ${ui.moreInfo}
          </a>
        </div>
      `;
    }
    
    if (results.pages.length > 0) {
      html += `
        <div class="search-results-title">${ui.relatedPages}</div>
        <div class="search-results-list">
      `;
      
      for (const page of results.pages.slice(0, 5)) {
        html += `
          <a href="${page.url}" class="search-result-item">
            <h4>${page.title}</h4>
            <p>${page.content.substring(0, 100)}${page.content.length > 100 ? '...' : ''}</p>
          </a>
        `;
      }
      
      html += '</div>';
    }
    
    container.innerHTML = html;
  }
  
  bindSuggestions() {
    const suggestions = document.querySelectorAll('.search-suggestion');
    const input = document.querySelector('.search-input');
    
    suggestions.forEach(suggestion => {
      suggestion.addEventListener('click', () => {
        input.value = suggestion.dataset.query;
        this.search(suggestion.dataset.query);
      });
    });
  }
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new AISearch();
});
