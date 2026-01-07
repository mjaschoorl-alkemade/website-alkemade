/* ALKEMADE FLOWERS - Luxury Website JavaScript */

const translations = {
  nl: {
    'nav.home': 'Home', 'nav.about': 'Over ons', 'nav.gallery': 'Galerij', 'nav.gallery.location': 'Vestiging', 'nav.gallery.people': 'Mensen', 'nav.gallery.products': 'Services', 'nav.gallery.clients': 'Klanten', 'nav.partners': 'Partners', 'nav.news': 'Nieuws', 'nav.contact': 'Contact', 'nav.portal': 'Link portaal',
    'hero.label': 'FloraHolland Aalsmeer, Nederland', 'hero.title': 'Your Partner in <span>Floriculture</span> Business', 'hero.text': 'Alkemade International BV is gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld. Al sinds 1997 bouwen wij aan duurzame partnerschappen.', 'hero.btn.discover': 'Ontdek meer', 'hero.btn.contact': 'Neem contact op',
    'about.title': 'Alkemade International B.V.', 'about.text1': 'Alkemade International BV is een gevestigd bedrijf, gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld, gevestigd bij FloraHolland Aalsmeer, Nederland.', 'about.text2': 'Het bedrijf werd opgericht in 1997.', 'about.text3': 'Wij bieden een compleet dienstenpakket voor kwekers, van uitpakken en veilingklaar maken tot kwaliteitsfeedback en directe verkoopondersteuning.', 'about.stat1': 'Jaren ervaring', 'about.stat2': 'Partners wereldwijd', 'about.stat3': 'Kwaliteitsgarantie',
    'services.label': 'Onze diensten', 'services.title': 'Compleet dienstenpakket voor kwekers', 'services.subtitle': 'Wij bieden een volledig scala aan diensten voor een perfecte supply chain',
    'mission.label': 'Onze visie', 'mission.title': 'Perfect Supply Chain Management', 'mission.text': 'In de veranderende wereld waarin wij opereren, merken we dat perfect beheer van de supply chain steeds belangrijker wordt. Geïntegreerde webgebaseerde software en een goed beheerde koelketen zijn essentiële elementen van ons bedrijf.',
    'cta.title': 'Wilt u samenwerken?', 'cta.text': 'Neem contact met ons op voor een duurzaam partnerschap in de sierteeltsector', 'cta.btn': 'Neem contact op',
    'footer.nav': 'Navigatie', 'footer.gallery': 'Galerij', 'footer.contact': 'Contact', 'footer.newsletter': 'Nieuwsbrief', 'footer.newsletter.placeholder': 'Uw e-mailadres', 'footer.copyright': '© Alkemade International B.V. 2024', 'footer.privacy': 'Privacybeleid', 'footer.disclaimer': 'Disclaimer', 'footer.terms': 'Algemene voorwaarden',
    'page.about': 'Over ons', 'page.gallery': 'Galerij', 'page.partners': 'Partners', 'page.news': 'Nieuws', 'page.contact': 'Contact', 'page.portal': 'Link portaal',
    'gallery.all': 'Alle', 'gallery.location': 'Vestiging', 'gallery.people': 'Mensen', 'gallery.products': 'Services', 'gallery.clients': 'Klanten',
    'contact.title': 'Neem contact met ons op', 'contact.visit.nl': 'FloraHolland Aalsmeer', 'contact.postal': 'Postadres', 'contact.phone.nl': 'Telefoon', 'contact.email': 'E-mail',
    'contact.form.title': 'Stuur ons een bericht', 'contact.form.name': 'Naam', 'contact.form.company': 'Bedrijf', 'contact.form.email': 'E-mailadres', 'contact.form.phone': 'Telefoonnummer', 'contact.form.subject': 'Onderwerp', 'contact.form.message': 'Bericht', 'contact.form.submit': 'Versturen',
    'news.label': 'Updates', 'news.title': 'Laatste nieuws', 'news.readmore': 'Lees meer',
    'partners.label': 'Ons netwerk', 'partners.title': 'Onze Partners', 'partners.cta.title': 'Word partner', 'partners.cta.text': 'Bent u geïnteresseerd in een partnerschap met Alkemade Flowers? Neem contact met ons op.',
    'portal.label': 'Resources', 'portal.title': 'Handige links', 'portal.docs.label': 'Documenten', 'portal.docs.title': 'Belangrijke documenten', 'portal.help.title': 'Hulp nodig?', 'portal.help.text': 'Kunt u niet vinden wat u zoekt? Neem contact met ons op.'
  },
  en: {
    'nav.home': 'Home', 'nav.about': 'About us', 'nav.gallery': 'Gallery', 'nav.gallery.location': 'Location', 'nav.gallery.people': 'People', 'nav.gallery.products': 'Services', 'nav.gallery.clients': 'Clients', 'nav.partners': 'Partners', 'nav.news': 'News', 'nav.contact': 'Contact', 'nav.portal': 'Link portal',
    'hero.label': 'FloraHolland Aalsmeer, Netherlands', 'hero.title': 'Your Partner in <span>Floriculture</span> Business', 'hero.text': 'Alkemade International BV is specialized in handling, marketing and logistics of fresh cut flowers sourced from around the globe. Since 1997, we have been building sustainable partnerships.', 'hero.btn.discover': 'Discover more', 'hero.btn.contact': 'Contact us',
    'about.title': 'Alkemade International B.V.', 'about.text1': 'Alkemade International BV is a well-established company, specialized in handling, marketing and logistics of fresh cut flowers sourced from around the globe, located at FloraHolland Aalsmeer, the Netherlands.', 'about.text2': 'The company was established in 1997.', 'about.text3': 'We offer a full range of services for growers, from unpacking and auction preparation to quality feedback and direct sales support.', 'about.stat1': 'Years of experience', 'about.stat2': 'Partners worldwide', 'about.stat3': 'Quality guarantee',
    'services.label': 'Our services', 'services.title': 'Full range of services for growers', 'services.subtitle': 'We offer a complete range of services for perfect supply chain management',
    'mission.label': 'Our vision', 'mission.title': 'Perfect Supply Chain Management', 'mission.text': 'In the changing world in which we operate, we notice that perfect management of the supply chain is becoming increasingly crucial. Integrated web-based software and a well-managed cool chain are essential elements of our business.',
    'cta.title': 'Want to collaborate?', 'cta.text': 'Contact us for a sustainable partnership in the floriculture sector', 'cta.btn': 'Contact us',
    'footer.nav': 'Navigation', 'footer.gallery': 'Gallery', 'footer.contact': 'Contact', 'footer.newsletter': 'Newsletter', 'footer.newsletter.placeholder': 'Your email address', 'footer.copyright': '© Alkemade International B.V. 2024', 'footer.privacy': 'Privacy Policy', 'footer.disclaimer': 'Disclaimer', 'footer.terms': 'General Conditions',
    'page.about': 'About us', 'page.gallery': 'Gallery', 'page.partners': 'Partners', 'page.news': 'News', 'page.contact': 'Contact', 'page.portal': 'Link portal',
    'gallery.all': 'All', 'gallery.location': 'Location', 'gallery.people': 'People', 'gallery.products': 'Services', 'gallery.clients': 'Clients',
    'contact.title': 'Contact us', 'contact.visit.nl': 'FloraHolland Aalsmeer', 'contact.postal': 'Postal address', 'contact.phone.nl': 'Phone', 'contact.email': 'Email',
    'contact.form.title': 'Send us a message', 'contact.form.name': 'Name', 'contact.form.company': 'Company', 'contact.form.email': 'Email address', 'contact.form.phone': 'Phone number', 'contact.form.subject': 'Subject', 'contact.form.message': 'Message', 'contact.form.submit': 'Submit',
    'news.label': 'Updates', 'news.title': 'Latest news', 'news.readmore': 'Read more',
    'partners.label': 'Our network', 'partners.title': 'Onze Partners', 'partners.cta.title': 'Become a partner', 'partners.cta.text': 'Interested in a partnership with Alkemade Flowers? Contact us.',
    'portal.label': 'Resources', 'portal.title': 'Useful links', 'portal.docs.label': 'Documents', 'portal.docs.title': 'Important documents', 'portal.help.title': 'Need help?', 'portal.help.text': 'Can\'t find what you\'re looking for? Contact us.'
  },
  es: {
    'nav.home': 'Inicio', 'nav.about': 'Sobre nosotros', 'nav.gallery': 'Galería', 'nav.gallery.location': 'Ubicación', 'nav.gallery.people': 'Personas', 'nav.gallery.products': 'Servicios', 'nav.gallery.clients': 'Clientes', 'nav.partners': 'Socios', 'nav.news': 'Noticias', 'nav.contact': 'Contacto', 'nav.portal': 'Portal de enlaces',
    'hero.label': 'FloraHolland Aalsmeer, Países Bajos', 'hero.title': 'Su Socio en el Negocio de la <span>Floricultura</span>', 'hero.text': 'Alkemade International BV se especializa en procesamiento, marketing y logística de flores cortadas frescas de todo el mundo. Desde 1997, hemos construido asociaciones sostenibles.', 'hero.btn.discover': 'Descubrir más', 'hero.btn.contact': 'Contáctenos',
    'about.title': 'Alkemade International B.V.', 'about.text1': 'Alkemade International BV es una empresa establecida, especializada en procesamiento, marketing y logística de flores cortadas frescas de todo el mundo, ubicada en FloraHolland Aalsmeer, Países Bajos.', 'about.text2': 'La empresa fue fundada en 1997.', 'about.text3': 'Ofrecemos una gama completa de servicios para productores, desde desempaque y preparación para subasta hasta retroalimentación de calidad y soporte de ventas directas.', 'about.stat1': 'Años de experiencia', 'about.stat2': 'Socios en todo el mundo', 'about.stat3': 'Garantía de calidad',
    'services.label': 'Nuestros servicios', 'services.title': 'Gama completa de servicios para productores', 'services.subtitle': 'Ofrecemos una gama completa de servicios para una gestión perfecta de la cadena de suministro',
    'mission.label': 'Nuestra visión', 'mission.title': 'Gestión Perfecta de la Cadena de Suministro', 'mission.text': 'En el mundo cambiante en el que operamos, notamos que la gestión perfecta de la cadena de suministro es cada vez más crucial. El software integrado basado en web y una cadena de frío bien gestionada son elementos esenciales de nuestro negocio.',
    'cta.title': '¿Quiere colaborar?', 'cta.text': 'Contáctenos para una asociación sostenible en el sector de la floricultura', 'cta.btn': 'Contáctenos',
    'footer.nav': 'Navegación', 'footer.gallery': 'Galería', 'footer.contact': 'Contacto', 'footer.newsletter': 'Boletín', 'footer.newsletter.placeholder': 'Su correo electrónico', 'footer.copyright': '© Alkemade International B.V. 2024', 'footer.privacy': 'Política de Privacidad', 'footer.disclaimer': 'Aviso Legal', 'footer.terms': 'Condiciones Generales',
    'page.about': 'Sobre nosotros', 'page.gallery': 'Galería', 'page.partners': 'Socios', 'page.news': 'Noticias', 'page.contact': 'Contacto', 'page.portal': 'Portal de enlaces',
    'gallery.all': 'Todos', 'gallery.location': 'Ubicación', 'gallery.people': 'Personas', 'gallery.products': 'Servicios', 'gallery.clients': 'Clientes',
    'contact.title': 'Contáctenos', 'contact.visit.nl': 'FloraHolland Aalsmeer', 'contact.postal': 'Dirección postal', 'contact.phone.nl': 'Teléfono', 'contact.email': 'Correo electrónico',
    'contact.form.title': 'Envíenos un mensaje', 'contact.form.name': 'Nombre', 'contact.form.company': 'Empresa', 'contact.form.email': 'Correo electrónico', 'contact.form.phone': 'Número de teléfono', 'contact.form.subject': 'Asunto', 'contact.form.message': 'Mensaje', 'contact.form.submit': 'Enviar',
    'news.label': 'Actualizaciones', 'news.title': 'Últimas noticias', 'news.readmore': 'Leer más',
    'partners.label': 'Nuestra red', 'partners.title': 'Nuestros Socios', 'partners.cta.title': 'Conviértase en socio', 'partners.cta.text': '¿Interesado en una asociación con Alkemade Flowers? Contáctenos.',
    'portal.label': 'Recursos', 'portal.title': 'Enlaces útiles', 'portal.docs.label': 'Documentos', 'portal.docs.title': 'Documentos importantes', 'portal.help.title': '¿Necesita ayuda?', 'portal.help.text': '¿No puede encontrar lo que busca? Contáctenos.'
  }
};

let currentLang = localStorage.getItem('language') || 'nl';

document.addEventListener('DOMContentLoaded', function() {
  setLanguage(currentLang);
  
  // Smooth page load animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { document.body.style.opacity = '1'; }, 100);
  
  // Navigation scroll effect
  const navWrapper = document.querySelector('.nav-wrapper');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    navWrapper.classList.toggle('scrolled', currentScroll > 50);
    lastScroll = currentScroll;
  });
  
  // Mobile menu with smooth animation
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          menuToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }
  
  // Language dropdown with animation
  const langDropdown = document.querySelector('.lang-dropdown');
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', (e) => { 
      e.stopPropagation(); 
      langDropdown.classList.toggle('open'); 
    });
    document.addEventListener('click', (e) => { 
      if (!langDropdown.contains(e.target)) langDropdown.classList.remove('open'); 
    });
    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', function() { 
        setLanguage(this.dataset.lang); 
        langDropdown.classList.remove('open'); 
      });
    });
  }
  
  // Enhanced scroll animations with stagger effect
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  
  // Parallax effect for hero
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  if (hero && heroContent) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.002);
      }
    });
  }
  
  // Smooth counter animation for stats
  const stats = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const num = parseInt(text.replace(/[^0-9]/g, ''));
        
        let current = 0;
        const duration = 2000;
        const start = performance.now();
        
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          current = Math.floor(eased * num);
          el.textContent = current + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
          if (progress < 1) requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => statsObserver.observe(stat));
  
  // Gallery tabs with smooth filter animation
  document.querySelectorAll('.gallery-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const category = this.dataset.category;
      
      document.querySelectorAll('.gallery-item').forEach((item, index) => {
        const show = category === 'all' || item.dataset.category === category;
        item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.transitionDelay = `${index * 50}ms`;
        
        if (show) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => { item.style.display = 'none'; }, 400);
        }
      });
    });
  });
  
  // Button ripple effect
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: 20px;
        height: 20px;
        background: rgba(255,255,255,0.4);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%) scale(0);
        animation: rippleEffect 0.6s ease-out forwards;
        pointer-events: none;
      `;
      
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Add ripple animation keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleEffect {
      to { transform: translate(-50%, -50%) scale(15); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  
  // Magnetic effect for buttons
  document.querySelectorAll('.btn, .service-card, .portal-link').forEach(el => {
    el.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      this.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    });
    
    el.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  // Forms
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = this.querySelector('input');
      const btn = this.querySelector('button');
      if (input.value.trim()) {
        btn.innerHTML = '✓';
        btn.style.background = '#4CAF50';
        setTimeout(() => {
          input.value = '';
          btn.innerHTML = '→';
          btn.style.background = '';
          alert(currentLang === 'nl' ? 'Bedankt voor uw aanmelding!' : currentLang === 'en' ? 'Thank you for subscribing!' : '¡Gracias por suscribirse!');
        }, 1000);
      }
    });
  });
  
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = currentLang === 'nl' ? 'Verzenden...' : currentLang === 'en' ? 'Sending...' : 'Enviando...';
      btn.disabled = true;
      
      setTimeout(() => {
        btn.textContent = '✓ ' + (currentLang === 'nl' ? 'Verzonden!' : currentLang === 'en' ? 'Sent!' : '¡Enviado!');
        btn.style.background = '#4CAF50';
        setTimeout(() => {
          this.reset();
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 2000);
      }, 1500);
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  
  const langToggleText = document.querySelector('.lang-toggle-text');
  if (langToggleText) langToggleText.textContent = { nl: 'NL', en: 'EN', es: 'ES' }[lang];
  
  document.querySelectorAll('.lang-option').forEach(option => {
    option.classList.toggle('active', option.dataset.lang === lang);
  });
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' && element.type !== 'submit') element.placeholder = translations[lang][key];
      else element.innerHTML = translations[lang][key];
    }
  });
}

window.setLanguage = setLanguage;
