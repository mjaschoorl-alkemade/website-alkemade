/* ALKEMADE FLOWERS - Luxury Website JavaScript */

const translations = {
  nl: {
    // Navigation
    'nav.home': 'Home', 'nav.about': 'Over ons', 'nav.gallery': 'Galerij', 'nav.gallery.location': 'Vestiging', 'nav.gallery.people': 'Mensen', 'nav.gallery.products': 'Producten', 'nav.gallery.clients': 'Klanten', 'nav.partners': 'Partners', 'nav.news': 'Nieuws', 'nav.contact': 'Contact',
    // Hero
    'hero.label': 'Alkemade International B.V.', 'hero.title': 'Your Partner in <span>Floriculture</span> Business', 'hero.text': 'Alkemade International BV is gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld. Al sinds 1997 bouwen wij aan duurzame partnerschappen.', 'hero.btn.discover': 'Ontdek meer', 'hero.btn.contact': 'Neem contact op',
    // About
    'about.label': 'Sinds 1997', 'about.title': 'Alkemade International B.V.', 'about.text1': 'Alkemade International BV is een gevestigd bedrijf, gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld, gevestigd bij FloraHolland Aalsmeer, Nederland.', 'about.text2': 'Het bedrijf werd opgericht in 1997.', 'about.text3': 'Wij bieden een compleet dienstenpakket voor kwekers, van uitpakken en veilingklaar maken tot kwaliteitsfeedback en directe verkoopondersteuning.', 'about.stat1': 'Jaren ervaring', 'about.stat2': 'Partners wereldwijd', 'about.stat3': 'Kwaliteitsgarantie',
    // Services
    'services.label': 'Onze diensten', 'services.title': 'Compleet dienstenpakket voor kwekers', 'services.subtitle': 'Wij bieden een volledig scala aan diensten voor een perfecte supply chain',
    'service.unpacking.title': 'Uitpakken & Verwerking', 'service.unpacking.text': 'Professioneel uitpakken en verwerken van uw bloemen bij aankomst, inclusief verwerking van boeketten en mono bunches voor supermarkten.',
    'service.unpacking.short': 'Professioneel uitpakken en verwerken, inclusief boeketten en mono bunches voor supermarkten.',
    'service.auction.title': 'Veilingvoorbereiding', 'service.auction.text': 'Volledige veilingvoorbereiding zodat uw producten optimaal gepresenteerd worden op de veiling.',
    'service.auction.short': 'Volledige veilingvoorbereiding voor optimale presentatie op de veiling.',
    'service.quality.title': 'Kwaliteitsfeedback', 'service.quality.text': 'Professionele feedback over kwaliteit als belangrijk onderdeel van onze dagelijkse communicatie met kwekers.',
    'service.quality.short': 'Professionele feedback als onderdeel van dagelijkse communicatie.',
    'service.financial.title': 'Financiële Rapportage', 'service.financial.text': 'Gedetailleerde rapportage van financiële resultaten op zendingsniveau voor volledig inzicht.',
    'service.financial.short': 'Gedetailleerde resultaten op zendingsniveau.',
    'service.transport.title': 'Transport', 'service.transport.text': 'Transport naar verschillende veilinglocaties met een goed beheerde koelketen als essentieel onderdeel.',
    'service.transport.short': 'Transport naar veilinglocaties met beheerde koelketen.',
    'service.sales.title': 'Directe Verkoopondersteuning', 'service.sales.text': 'Ondersteuning bij directe verkoop aan grote exporteurs of via onze aangesloten groothandel.',
    'service.sales.short': 'Verkoop aan exporteurs of via onze groothandel.',
    // Mission
    'mission.label': 'Onze visie', 'mission.title': 'Perfect Supply Chain Management', 'mission.text': 'In de veranderende wereld waarin wij opereren, merken we dat perfect beheer van de supply chain steeds belangrijker wordt. Geïntegreerde webgebaseerde software en een goed beheerde koelketen zijn essentiële elementen van ons bedrijf.',
    'mission.item1': 'Geïntegreerde webgebaseerde software', 'mission.item2': 'Goed beheerde koelketen', 'mission.item3': 'Kwaliteitsfeedback en marktinformatie', 'mission.item4': 'Nauwe afstemming met partners', 'mission.item5': 'Boeketten en mono bunches voor supermarkten',
    // CTA
    'cta.title': 'Wilt u samenwerken?', 'cta.text': 'Neem contact met ons op voor een duurzaam partnerschap in de sierteeltsector', 'cta.btn': 'Neem contact op',
    // Footer
    'footer.nav': 'Navigatie', 'footer.gallery': 'Galerij', 'footer.contact': 'Contact', 'footer.newsletter': 'Nieuwsbrief', 'footer.newsletter.placeholder': 'Uw e-mailadres', 'footer.copyright': '© Alkemade International B.V. 2024', 'footer.privacy': 'Privacybeleid', 'footer.disclaimer': 'Disclaimer', 'footer.terms': 'Algemene voorwaarden',
    'footer.tagline': 'Your Partner in Floriculture Business. Gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen sinds 1997.',
    // Pages
    'page.about': 'Over ons', 'page.gallery': 'Galerij', 'page.partners': 'Partners', 'page.news': 'Nieuws', 'page.contact': 'Contact',
    'page.people': 'Mensen', 'page.location': 'Vestiging', 'page.products': 'Producten', 'page.clients': 'Klanten',
    // Gallery
    'gallery.all': 'Alle', 'gallery.location': 'Vestiging', 'gallery.people': 'Mensen', 'gallery.products': 'Producten', 'gallery.clients': 'Klanten',
    'gallery.label': 'Beelden', 'gallery.title': 'Ontdek ons bedrijf', 'gallery.subtitle': 'Een kijkje achter de schermen bij Alkemade Flowers International',
    'gallery.products.label': 'Bloemen', 'gallery.products.title': 'Onze producten', 'gallery.products.subtitle': 'Verse snijbloemen van over de hele wereld',
    'gallery.clients.label': 'Partners', 'gallery.clients.title': 'Onze klanten', 'gallery.clients.subtitle': 'Tevreden klanten wereldwijd',
    'gallery.item.office': 'Ons kantoor', 'gallery.item.building': 'FloraHolland Aalsmeer', 'gallery.item.workspace': 'Werkruimte',
    'gallery.item.team': 'Ons team', 'gallery.item.employees': 'Medewerkers', 'gallery.item.collaboration': 'Samenwerking',
    'gallery.item.tulips': 'Verse tulpen', 'gallery.item.roses': 'Premium rozen', 'gallery.item.bouquets': 'Gemengde boeketten', 'gallery.item.exotic': 'Exotische bloemen',
    'gallery.item.satisfied': 'Tevreden klanten', 'gallery.item.shop': 'Bloemenwinkel',
    // Team page
    'team.label': 'Team', 'team.title': 'Onze mensen', 'team.subtitle': 'Het team achter Alkemade Flowers International',
    'role.general_manager': 'General Manager', 'role.manager_operations': 'Manager Operations', 'role.account_manager': 'Accountmanager', 'role.junior_account_manager': 'Junior Accountmanager', 'role.boxchef': 'Boxchef', 'role.administration': 'Administratie',
    // Location page
    'location.label': 'Locatie', 'location.title': 'Onze vestiging', 'location.subtitle': 'Ons kantoor bij FloraHolland Aalsmeer, de grootste bloemenveiling ter wereld',
    'location.netherlands': 'Nederland', 'location.floraholland': 'FloraHolland Aalsmeer - de grootste bloemenveiling ter wereld', 'location.view_map': 'Bekijk op Google Maps',
    // Contact
    'contact.title': 'Neem contact met ons op', 'contact.visit.nl': 'FloraHolland Aalsmeer', 'contact.postal': 'Postadres', 'contact.phone.nl': 'Telefoon', 'contact.email': 'E-mail',
    'contact.form.title': 'Stuur ons een bericht', 'contact.form.name': 'Naam', 'contact.form.company': 'Bedrijf', 'contact.form.email': 'E-mailadres', 'contact.form.phone': 'Telefoonnummer', 'contact.form.subject': 'Onderwerp', 'contact.form.message': 'Bericht', 'contact.form.submit': 'Versturen',
    'contact.location.label': 'Locatie', 'contact.location.subtitle': 'Ons kantoor is gevestigd bij FloraHolland Aalsmeer, de grootste bloemenveiling ter wereld.',
    'contact.map.link': 'Bekijk op Google Maps →',
    'contact.success.title': 'Bericht verzonden!', 'contact.success.text': 'Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.',
    // News
    'news.label': 'Updates', 'news.title': 'Laatste nieuws', 'news.readmore': 'Lees meer →', 'news.subtitle': 'Blijf op de hoogte van de laatste ontwikkelingen bij Alkemade Flowers International.',
    'news.article1.title': 'Nieuw seizoen, nieuwe mogelijkheden', 'news.article1.excerpt': 'Met het nieuwe seizoen introduceren we verschillende nieuwe variëteiten van onze partners.',
    'news.article2.title': 'Uitbreiding van ons team', 'news.article2.excerpt': 'Wij verwelkomen nieuwe medewerkers om onze groeiende activiteiten te ondersteunen.',
    'news.article3.title': 'Duurzaamheid in focus', 'news.article3.excerpt': 'Onze inzet voor duurzame bloementeelt en verantwoord ondernemen.',
    'news.article4.title': 'Nieuwe partnerschappen', 'news.article4.excerpt': 'We zijn verheugd om nieuwe samenwerkingen aan te kondigen.',
    'news.newsletter.label': 'Op de hoogte blijven', 'news.newsletter.title': 'Aanmelden voor nieuwsbrief', 'news.newsletter.subtitle': 'Blijf op de hoogte van ons laatste nieuws en ontwikkelingen.', 'news.newsletter.btn': 'Aanmelden',
    // Partners
    'partners.label': 'Ons netwerk', 'partners.title': 'Onze Partners', 'partners.subtitle': 'Wij werken samen met toonaangevende bedrijven in de bloemenindustrie wereldwijd.',
    'partners.why.label': 'Samenwerking', 'partners.why.title': 'Waarom partner worden?', 'partners.why.text': 'Wij bieden een compleet dienstenpakket voor kwekers met focus op perfecte supply chain management.',
    'partners.item1': 'Uitpakken en verwerking', 'partners.item2': 'Veilingvoorbereiding', 'partners.item3': 'Kwaliteitsfeedback', 'partners.item4': 'Financiële rapportage op zendingsniveau', 'partners.item5': 'Transport naar veilinglocaties', 'partners.item6': 'Directe verkoopondersteuning', 'partners.item7': 'Boeketten en mono bunches voor supermarkten',
    'partners.cta.title': 'Word partner', 'partners.cta.text': 'Bent u geïnteresseerd in een partnerschap met Alkemade Flowers?'
  },
  en: {
    // Navigation
    'nav.home': 'Home', 'nav.about': 'About us', 'nav.gallery': 'Gallery', 'nav.gallery.location': 'Location', 'nav.gallery.people': 'People', 'nav.gallery.products': 'Products', 'nav.gallery.clients': 'Clients', 'nav.partners': 'Partners', 'nav.news': 'News', 'nav.contact': 'Contact',
    // Hero
    'hero.label': 'Alkemade International B.V.', 'hero.title': 'Your Partner in <span>Floriculture</span> Business', 'hero.text': 'Alkemade International BV is specialized in handling, marketing and logistics of fresh cut flowers sourced from around the globe. Since 1997, we have been building sustainable partnerships.', 'hero.btn.discover': 'Discover more', 'hero.btn.contact': 'Contact us',
    // About
    'about.label': 'Since 1997', 'about.title': 'Alkemade International B.V.', 'about.text1': 'Alkemade International BV is a well-established company, specialized in handling, marketing and logistics of fresh cut flowers sourced from around the globe, located at FloraHolland Aalsmeer, the Netherlands.', 'about.text2': 'The company was established in 1997.', 'about.text3': 'We offer a full range of services for growers, from unpacking and auction preparation to quality feedback and direct sales support.', 'about.stat1': 'Years of experience', 'about.stat2': 'Partners worldwide', 'about.stat3': 'Quality guarantee',
    // Services
    'services.label': 'Our services', 'services.title': 'Full range of services for growers', 'services.subtitle': 'We offer a complete range of services for perfect supply chain management',
    'service.unpacking.title': 'Unpacking & Processing', 'service.unpacking.text': 'Professional unpacking and processing of your flowers upon arrival, including processing of bouquets and mono bunches for supermarkets.',
    'service.unpacking.short': 'Professional unpacking and processing, including bouquets and mono bunches for supermarkets.',
    'service.auction.title': 'Auction Preparation', 'service.auction.text': 'Complete auction preparation so your products are optimally presented at the auction.',
    'service.auction.short': 'Complete auction preparation for optimal presentation at auction.',
    'service.quality.title': 'Quality Feedback', 'service.quality.text': 'Professional quality feedback as an important part of our daily communication with growers.',
    'service.quality.short': 'Professional feedback as part of daily communication.',
    'service.financial.title': 'Financial Reporting', 'service.financial.text': 'Detailed reporting of financial results at shipment level for complete insight.',
    'service.financial.short': 'Detailed results at shipment level.',
    'service.transport.title': 'Transport', 'service.transport.text': 'Transport to various auction locations with a well-managed cool chain as an essential component.',
    'service.transport.short': 'Transport to auction locations with managed cool chain.',
    'service.sales.title': 'Direct Sales Support', 'service.sales.text': 'Support for direct sales to major exporters or through our affiliated wholesaler.',
    'service.sales.short': 'Sales to exporters or through our wholesaler.',
    // Mission
    'mission.label': 'Our vision', 'mission.title': 'Perfect Supply Chain Management', 'mission.text': 'In the changing world in which we operate, we notice that perfect management of the supply chain is becoming increasingly crucial. Integrated web-based software and a well-managed cool chain are essential elements of our business.',
    'mission.item1': 'Integrated web-based software', 'mission.item2': 'Well-managed cool chain', 'mission.item3': 'Quality feedback and market information', 'mission.item4': 'Close alignment with partners', 'mission.item5': 'Bouquets and mono bunches for supermarkets',
    // CTA
    'cta.title': 'Want to collaborate?', 'cta.text': 'Contact us for a sustainable partnership in the floriculture sector', 'cta.btn': 'Contact us',
    // Footer
    'footer.nav': 'Navigation', 'footer.gallery': 'Gallery', 'footer.contact': 'Contact', 'footer.newsletter': 'Newsletter', 'footer.newsletter.placeholder': 'Your email address', 'footer.copyright': '© Alkemade International B.V. 2024', 'footer.privacy': 'Privacy Policy', 'footer.disclaimer': 'Disclaimer', 'footer.terms': 'General Conditions',
    'footer.tagline': 'Your Partner in Floriculture Business. Specialized in handling, marketing and logistics of fresh cut flowers since 1997.',
    // Pages
    'page.about': 'About us', 'page.gallery': 'Gallery', 'page.partners': 'Partners', 'page.news': 'News', 'page.contact': 'Contact',
    'page.people': 'People', 'page.location': 'Location', 'page.products': 'Products', 'page.clients': 'Clients',
    // Gallery
    'gallery.all': 'All', 'gallery.location': 'Location', 'gallery.people': 'People', 'gallery.products': 'Products', 'gallery.clients': 'Clients',
    'gallery.label': 'Images', 'gallery.title': 'Discover our company', 'gallery.subtitle': 'A look behind the scenes at Alkemade Flowers International',
    'gallery.products.label': 'Flowers', 'gallery.products.title': 'Our products', 'gallery.products.subtitle': 'Fresh cut flowers from around the world',
    'gallery.clients.label': 'Partners', 'gallery.clients.title': 'Our clients', 'gallery.clients.subtitle': 'Satisfied clients worldwide',
    'gallery.item.office': 'Our office', 'gallery.item.building': 'FloraHolland Aalsmeer', 'gallery.item.workspace': 'Workspace',
    'gallery.item.team': 'Our team', 'gallery.item.employees': 'Employees', 'gallery.item.collaboration': 'Collaboration',
    'gallery.item.tulips': 'Fresh tulips', 'gallery.item.roses': 'Premium roses', 'gallery.item.bouquets': 'Mixed bouquets', 'gallery.item.exotic': 'Exotic flowers',
    'gallery.item.satisfied': 'Satisfied clients', 'gallery.item.shop': 'Flower shop',
    // Team page
    'team.label': 'Team', 'team.title': 'Our people', 'team.subtitle': 'The team behind Alkemade Flowers International',
    'role.general_manager': 'General Manager', 'role.manager_operations': 'Manager Operations', 'role.account_manager': 'Account Manager', 'role.junior_account_manager': 'Junior Account Manager', 'role.boxchef': 'Box Chief', 'role.administration': 'Administration',
    // Location page
    'location.label': 'Location', 'location.title': 'Our location', 'location.subtitle': 'Our office at FloraHolland Aalsmeer, the largest flower auction in the world',
    'location.netherlands': 'Netherlands', 'location.floraholland': 'FloraHolland Aalsmeer - the largest flower auction in the world', 'location.view_map': 'View on Google Maps',
    // Contact
    'contact.title': 'Contact us', 'contact.visit.nl': 'FloraHolland Aalsmeer', 'contact.postal': 'Postal address', 'contact.phone.nl': 'Phone', 'contact.email': 'Email',
    'contact.form.title': 'Send us a message', 'contact.form.name': 'Name', 'contact.form.company': 'Company', 'contact.form.email': 'Email address', 'contact.form.phone': 'Phone number', 'contact.form.subject': 'Subject', 'contact.form.message': 'Message', 'contact.form.submit': 'Submit',
    'contact.location.label': 'Location', 'contact.location.subtitle': 'Our office is located at FloraHolland Aalsmeer, the largest flower auction in the world.',
    'contact.map.link': 'View on Google Maps →',
    'contact.success.title': 'Message sent!', 'contact.success.text': 'Thank you for your message. We will contact you as soon as possible.',
    // News
    'news.label': 'Updates', 'news.title': 'Latest news', 'news.readmore': 'Read more →', 'news.subtitle': 'Stay informed about the latest developments at Alkemade Flowers International.',
    'news.article1.title': 'New season, new opportunities', 'news.article1.excerpt': 'With the new season, we are introducing various new varieties from our partners.',
    'news.article2.title': 'Team expansion', 'news.article2.excerpt': 'We welcome new colleagues to support our growing operations.',
    'news.article3.title': 'Sustainability in focus', 'news.article3.excerpt': 'Our commitment to sustainable flower cultivation and responsible business.',
    'news.article4.title': 'New partnerships', 'news.article4.excerpt': 'We are pleased to announce new collaborations.',
    'news.newsletter.label': 'Stay informed', 'news.newsletter.title': 'Subscribe to newsletter', 'news.newsletter.subtitle': 'Stay up to date with our latest news and developments.', 'news.newsletter.btn': 'Subscribe',
    // Partners
    'partners.label': 'Our network', 'partners.title': 'Our Partners', 'partners.subtitle': 'We work together with leading companies in the flower industry worldwide.',
    'partners.why.label': 'Collaboration', 'partners.why.title': 'Why become a partner?', 'partners.why.text': 'We offer a complete range of services for growers with a focus on perfect supply chain management.',
    'partners.item1': 'Unpacking and processing', 'partners.item2': 'Auction preparation', 'partners.item3': 'Quality feedback', 'partners.item4': 'Financial reporting at shipment level', 'partners.item5': 'Transport to auction locations', 'partners.item6': 'Direct sales support', 'partners.item7': 'Bouquets and mono bunches for supermarkets',
    'partners.cta.title': 'Become a partner', 'partners.cta.text': 'Interested in a partnership with Alkemade Flowers?'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio', 'nav.about': 'Sobre nosotros', 'nav.gallery': 'Galería', 'nav.gallery.location': 'Ubicación', 'nav.gallery.people': 'Personas', 'nav.gallery.products': 'Productos', 'nav.gallery.clients': 'Clientes', 'nav.partners': 'Socios', 'nav.news': 'Noticias', 'nav.contact': 'Contacto',
    // Hero
    'hero.label': 'Alkemade International B.V.', 'hero.title': 'Su Socio en el Negocio de la <span>Floricultura</span>', 'hero.text': 'Alkemade International BV se especializa en procesamiento, marketing y logística de flores cortadas frescas de todo el mundo. Desde 1997, hemos construido asociaciones sostenibles.', 'hero.btn.discover': 'Descubrir más', 'hero.btn.contact': 'Contáctenos',
    // About
    'about.label': 'Desde 1997', 'about.title': 'Alkemade International B.V.', 'about.text1': 'Alkemade International BV es una empresa establecida, especializada en procesamiento, marketing y logística de flores cortadas frescas de todo el mundo, ubicada en FloraHolland Aalsmeer, Países Bajos.', 'about.text2': 'La empresa fue fundada en 1997.', 'about.text3': 'Ofrecemos una gama completa de servicios para productores, desde desempaque y preparación para subasta hasta retroalimentación de calidad y soporte de ventas directas.', 'about.stat1': 'Años de experiencia', 'about.stat2': 'Socios en todo el mundo', 'about.stat3': 'Garantía de calidad',
    // Services
    'services.label': 'Nuestros servicios', 'services.title': 'Gama completa de servicios para productores', 'services.subtitle': 'Ofrecemos una gama completa de servicios para una gestión perfecta de la cadena de suministro',
    'service.unpacking.title': 'Desempaque y Procesamiento', 'service.unpacking.text': 'Desempaque y procesamiento profesional de sus flores a la llegada, incluyendo procesamiento de ramos y mono bunches para supermercados.',
    'service.unpacking.short': 'Desempaque y procesamiento profesional, incluyendo ramos y mono bunches para supermercados.',
    'service.auction.title': 'Preparación para Subasta', 'service.auction.text': 'Preparación completa para subasta para que sus productos se presenten de manera óptima en la subasta.',
    'service.auction.short': 'Preparación completa para subasta para una presentación óptima.',
    'service.quality.title': 'Retroalimentación de Calidad', 'service.quality.text': 'Retroalimentación profesional de calidad como parte importante de nuestra comunicación diaria con los productores.',
    'service.quality.short': 'Retroalimentación profesional como parte de la comunicación diaria.',
    'service.financial.title': 'Informes Financieros', 'service.financial.text': 'Informes detallados de resultados financieros a nivel de envío para una visión completa.',
    'service.financial.short': 'Resultados detallados a nivel de envío.',
    'service.transport.title': 'Transporte', 'service.transport.text': 'Transporte a varias ubicaciones de subasta con una cadena de frío bien gestionada como componente esencial.',
    'service.transport.short': 'Transporte a ubicaciones de subasta con cadena de frío gestionada.',
    'service.sales.title': 'Soporte de Ventas Directas', 'service.sales.text': 'Soporte para ventas directas a grandes exportadores o a través de nuestro mayorista afiliado.',
    'service.sales.short': 'Ventas a exportadores o a través de nuestro mayorista.',
    // Mission
    'mission.label': 'Nuestra visión', 'mission.title': 'Gestión Perfecta de la Cadena de Suministro', 'mission.text': 'En el mundo cambiante en el que operamos, notamos que la gestión perfecta de la cadena de suministro es cada vez más crucial. El software integrado basado en web y una cadena de frío bien gestionada son elementos esenciales de nuestro negocio.',
    'mission.item1': 'Software integrado basado en web', 'mission.item2': 'Cadena de frío bien gestionada', 'mission.item3': 'Retroalimentación de calidad e información de mercado', 'mission.item4': 'Alineación estrecha con socios', 'mission.item5': 'Ramos y mono bunches para supermercados',
    // CTA
    'cta.title': '¿Quiere colaborar?', 'cta.text': 'Contáctenos para una asociación sostenible en el sector de la floricultura', 'cta.btn': 'Contáctenos',
    // Footer
    'footer.nav': 'Navegación', 'footer.gallery': 'Galería', 'footer.contact': 'Contacto', 'footer.newsletter': 'Boletín', 'footer.newsletter.placeholder': 'Su correo electrónico', 'footer.copyright': '© Alkemade International B.V. 2024', 'footer.privacy': 'Política de Privacidad', 'footer.disclaimer': 'Aviso Legal', 'footer.terms': 'Condiciones Generales',
    'footer.tagline': 'Su Socio en el Negocio de la Floricultura. Especializados en procesamiento, marketing y logística de flores cortadas frescas desde 1997.',
    // Pages
    'page.about': 'Sobre nosotros', 'page.gallery': 'Galería', 'page.partners': 'Socios', 'page.news': 'Noticias', 'page.contact': 'Contacto',
    'page.people': 'Personas', 'page.location': 'Ubicación', 'page.products': 'Productos', 'page.clients': 'Clientes',
    // Gallery
    'gallery.all': 'Todos', 'gallery.location': 'Ubicación', 'gallery.people': 'Personas', 'gallery.products': 'Productos', 'gallery.clients': 'Clientes',
    'gallery.label': 'Imágenes', 'gallery.title': 'Descubre nuestra empresa', 'gallery.subtitle': 'Un vistazo detrás de escena en Alkemade Flowers International',
    'gallery.products.label': 'Flores', 'gallery.products.title': 'Nuestros productos', 'gallery.products.subtitle': 'Flores frescas cortadas de todo el mundo',
    'gallery.clients.label': 'Socios', 'gallery.clients.title': 'Nuestros clientes', 'gallery.clients.subtitle': 'Clientes satisfechos en todo el mundo',
    'gallery.item.office': 'Nuestra oficina', 'gallery.item.building': 'FloraHolland Aalsmeer', 'gallery.item.workspace': 'Espacio de trabajo',
    'gallery.item.team': 'Nuestro equipo', 'gallery.item.employees': 'Empleados', 'gallery.item.collaboration': 'Colaboración',
    'gallery.item.tulips': 'Tulipanes frescos', 'gallery.item.roses': 'Rosas premium', 'gallery.item.bouquets': 'Ramos mixtos', 'gallery.item.exotic': 'Flores exóticas',
    'gallery.item.satisfied': 'Clientes satisfechos', 'gallery.item.shop': 'Floristería',
    // Team page
    'team.label': 'Equipo', 'team.title': 'Nuestra gente', 'team.subtitle': 'El equipo detrás de Alkemade Flowers International',
    'role.general_manager': 'Gerente General', 'role.manager_operations': 'Gerente de Operaciones', 'role.account_manager': 'Gerente de Cuentas', 'role.junior_account_manager': 'Gerente de Cuentas Junior', 'role.boxchef': 'Jefe de Almacén', 'role.administration': 'Administración',
    // Location page
    'location.label': 'Ubicación', 'location.title': 'Nuestra ubicación', 'location.subtitle': 'Nuestra oficina en FloraHolland Aalsmeer, la mayor subasta de flores del mundo',
    'location.netherlands': 'Países Bajos', 'location.floraholland': 'FloraHolland Aalsmeer - la mayor subasta de flores del mundo', 'location.view_map': 'Ver en Google Maps',
    // Contact
    'contact.title': 'Contáctenos', 'contact.visit.nl': 'FloraHolland Aalsmeer', 'contact.postal': 'Dirección postal', 'contact.phone.nl': 'Teléfono', 'contact.email': 'Correo electrónico',
    'contact.form.title': 'Envíenos un mensaje', 'contact.form.name': 'Nombre', 'contact.form.company': 'Empresa', 'contact.form.email': 'Correo electrónico', 'contact.form.phone': 'Número de teléfono', 'contact.form.subject': 'Asunto', 'contact.form.message': 'Mensaje', 'contact.form.submit': 'Enviar',
    'contact.location.label': 'Ubicación', 'contact.location.subtitle': 'Nuestra oficina está ubicada en FloraHolland Aalsmeer, la mayor subasta de flores del mundo.',
    'contact.map.link': 'Ver en Google Maps →',
    'contact.success.title': '¡Mensaje enviado!', 'contact.success.text': 'Gracias por su mensaje. Nos pondremos en contacto con usted lo antes posible.',
    // News
    'news.label': 'Actualizaciones', 'news.title': 'Últimas noticias', 'news.readmore': 'Leer más →', 'news.subtitle': 'Manténgase informado sobre los últimos desarrollos en Alkemade Flowers International.',
    'news.article1.title': 'Nueva temporada, nuevas oportunidades', 'news.article1.excerpt': 'Con la nueva temporada, introducimos varias nuevas variedades de nuestros socios.',
    'news.article2.title': 'Ampliación de nuestro equipo', 'news.article2.excerpt': 'Damos la bienvenida a nuevos colegas para apoyar nuestras operaciones en crecimiento.',
    'news.article3.title': 'Sostenibilidad en foco', 'news.article3.excerpt': 'Nuestro compromiso con el cultivo sostenible de flores y los negocios responsables.',
    'news.article4.title': 'Nuevas asociaciones', 'news.article4.excerpt': 'Nos complace anunciar nuevas colaboraciones.',
    'news.newsletter.label': 'Manténgase informado', 'news.newsletter.title': 'Suscribirse al boletín', 'news.newsletter.subtitle': 'Manténgase al día con nuestras últimas noticias y desarrollos.', 'news.newsletter.btn': 'Suscribirse',
    // Partners
    'partners.label': 'Nuestra red', 'partners.title': 'Nuestros Socios', 'partners.subtitle': 'Trabajamos junto con empresas líderes en la industria de las flores a nivel mundial.',
    'partners.why.label': 'Colaboración', 'partners.why.title': '¿Por qué convertirse en socio?', 'partners.why.text': 'Ofrecemos una gama completa de servicios para productores con un enfoque en la gestión perfecta de la cadena de suministro.',
    'partners.item1': 'Desempaque y procesamiento', 'partners.item2': 'Preparación para subasta', 'partners.item3': 'Retroalimentación de calidad', 'partners.item4': 'Informes financieros a nivel de envío', 'partners.item5': 'Transporte a ubicaciones de subasta', 'partners.item6': 'Soporte de ventas directas', 'partners.item7': 'Ramos y mono bunches para supermercados',
    'partners.cta.title': 'Conviértase en socio', 'partners.cta.text': '¿Interesado en una asociación con Alkemade Flowers?'
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
