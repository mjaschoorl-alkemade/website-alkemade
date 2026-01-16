/* ALKEMADE FLOWERS - AI-Powered Multilingual Search with Mini LLM */

// Enhanced multilingual content database with more context
const searchData = {
  nl: {
    ui: {
      placeholder: 'Zoek met AI search naar informatie over Alkemade Flowers',
      loading: 'AI analyseert uw vraag en zoekt het beste antwoord...',
      aiAnswer: 'AI Antwoord',
      moreInfo: 'Meer informatie →',
      relatedPages: 'Gerelateerde pagina\'s',
      noResults: 'Geen resultaten gevonden voor',
      tryOther: 'Probeer andere zoektermen of neem contact met ons op.',
      suggestions: ['Wat doet Alkemade?', 'Contact informatie', 'Diensten', 'Locatie', 'Hoe word ik partner?']
    },
    pages: [
      { title: 'Home', url: 'index.html', keywords: ['home', 'welkom', 'alkemade', 'bloemen', 'hoofdpagina'], content: 'Alkemade International BV is gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld. Gevestigd bij FloraHolland Aalsmeer sinds 1997.', category: 'algemeen' },
      { title: 'Over ons', url: 'over-ons.html', keywords: ['over', 'geschiedenis', 'bedrijf', 'team', 'ervaring', 'wie zijn wij'], content: 'Alkemade International BV werd opgericht in 1997. Leer meer over onze geschiedenis, missie en het team. Meer dan 27 jaar ervaring in de bloemenindustrie.', category: 'bedrijf' },
      { title: 'Diensten', url: 'services.html', keywords: ['diensten', 'uitpakken', 'verwerking', 'veiling', 'transport', 'services', 'wat bieden jullie'], content: 'Wij bieden een compleet dienstenpakket niet alleen voor kwekers, maar ook voor derden (exporteurs van bloemen, groothandels in bloemen, retailers): uitpakken & verwerking, veilingvoorbereiding, kwaliteitsfeedback, financiële rapportage, transport naar veilinglocaties en directe verkoopondersteuning. Ook boeketten en mono boeketten voor supermarkten.', category: 'diensten' },
      { title: 'Galerij', url: 'galerij.html', keywords: ['galerij', 'foto', 'afbeeldingen', 'vestiging', 'team', 'foto\'s'], content: 'Bekijk foto\'s van onze vestiging, team, services en tevreden klanten. Ontdek ons bedrijf visueel.', category: 'media' },
      { title: 'Partners', url: 'partners.html', keywords: ['partners', 'samenwerking', 'hogewoning', 'floraholland', 'partner worden'], content: 'Samenwerking met kwekers wereldwijd. Wij werken samen met toonaangevende bedrijven in de bloemenindustrie. Word partner en profiteer van ons complete dienstenpakket.', category: 'samenwerking' },
      { title: 'Nieuws', url: 'nieuws.html', keywords: ['nieuws', 'updates', 'artikelen', 'laatste nieuws'], content: 'Laatste nieuws en updates van Alkemade Flowers International. Sinds 2026 is het mogelijk om mono bossen en bandboeketten te laten maken.', category: 'nieuws' },
      { title: 'Contact', url: 'contact.html', keywords: ['contact', 'adres', 'telefoon', 'email', 'locatie', 'bereiken', 'bellen'], content: 'Neem contact op met Alkemade Flowers. Gevestigd bij FloraHolland Aalsmeer: Legmeerdijk 313, 1431GB Aalsmeer. Telefoon: +31-297-567148. Email: alkemade@nl-alkemade.com', category: 'contact' },
      { title: 'Vestiging', url: 'vestiging.html', keywords: ['vestiging', 'locatie', 'adres', 'waar', 'floraholland', 'aalsmeer'], content: 'Onze vestiging is gelegen bij FloraHolland Aalsmeer, de grootste bloemenveiling ter wereld. Bezoekadres: Legmeerdijk 313, 1431GB Aalsmeer.', category: 'locatie' },
      { title: 'Team', url: 'mensen.html', keywords: ['team', 'mensen', 'medewerkers', 'personeel', 'wie werken er'], content: 'Ontmoet ons team: Mark Schoorl (General Manager), Bartek Liskowski (Manager Operations), Claudia Alkemade (Accountmanager), en meer.', category: 'bedrijf' },
      { title: 'Klanten', url: 'klanten.html', keywords: ['klanten', 'tevreden', 'partners', 'samenwerking'], content: 'Wij werken samen met kwekers en partners over de hele wereld. 50+ partners wereldwijd, 27+ jaren ervaring, 100% klanttevredenheid.', category: 'samenwerking' }
    ],
    faq: [
      { q: ['wat doet alkemade', 'wat is alkemade', 'wie is alkemade', 'alkemade', 'wat doen jullie'], a: 'Alkemade International BV is gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld. Het bedrijf is gevestigd bij FloraHolland Aalsmeer sinds 1997. Wij bieden een compleet dienstenpakket voor kwekers en derden, inclusief uitpakken, veilingvoorbereiding, kwaliteitsfeedback, transport en directe verkoopondersteuning.', url: 'over-ons.html', context: 'bedrijf' },
      { q: ['waar is alkemade', 'locatie', 'adres', 'waar gevestigd', 'waar zitten jullie', 'waar zijn jullie'], a: 'Alkemade Flowers is gevestigd bij FloraHolland Aalsmeer, de grootste bloemenveiling ter wereld. Bezoekadres: Legmeerdijk 313, 1431GB Aalsmeer, Nederland. Postadres: Postbus 1032, 1430 BA Aalsmeer.', url: 'vestiging.html', context: 'locatie' },
      { q: ['contact', 'telefoon', 'bellen', 'telefoonnummer', 'bereiken', 'hoe kan ik jullie bereiken'], a: 'U kunt ons bereiken op telefoonnummer +31-297-567148 of via email: alkemade@nl-alkemade.com. Voor spoedgevallen kunt u direct bellen. Wij zijn bereikbaar tijdens kantooruren.', url: 'contact.html', context: 'contact' },
      { q: ['email', 'mailen', 'e-mail', 'mail', 'emailadres'], a: 'Ons e-mailadres is: alkemade@nl-alkemade.com. U kunt ons altijd een bericht sturen via het contactformulier op onze website of direct via email.', url: 'contact.html', context: 'contact' },
      { q: ['diensten', 'services', 'wat bieden jullie', 'wat doen jullie', 'welke diensten'], a: 'Wij bieden een compleet dienstenpakket niet alleen voor kwekers, maar ook voor derden (exporteurs van bloemen, groothandels in bloemen, retailers). Onze diensten omvatten: uitpakken & verwerking, veilingvoorbereiding, kwaliteitsfeedback, financiële rapportage op zendingsniveau, transport naar veilinglocaties met beheerde koelketen, en directe verkoopondersteuning. Ook verwerken wij boeketten en mono boeketten voor supermarkten.', url: 'services.html', context: 'diensten' },
      { q: ['opgericht', 'wanneer', 'geschiedenis', 'sinds', 'hoe lang', 'sinds wanneer'], a: 'Alkemade International BV werd opgericht in 1997 door Maarten Alkemade en zijn vrouw Claudia. Het bedrijf heeft meer dan 27 jaar ervaring in de bloemenindustrie en is uitgegroeid tot een betrouwbare partner in de internationale bloemenketen.', url: 'over-ons.html', context: 'bedrijf' },
      { q: ['boeketten', 'supermarkt', 'mono boeketten', 'bandboeketten', 'mono bossen'], a: 'Wij verwerken boeketten en mono boeketten voor supermarkten. Sinds 2026 is het mogelijk om mono bossen en bandboeketten te laten maken. Ook gaan wij slim gebruik maken van AI.', url: 'services.html', context: 'diensten' },
      { q: ['koelketen', 'cool chain', 'temperatuur', 'koel', 'kwaliteit'], a: 'Een goed beheerde koelketen is een essentieel onderdeel van onze dienstverlening. Wij zorgen voor transport naar veilinglocaties met beheerde koelketen om de kwaliteit van de bloemen te waarborgen. Dit is cruciaal voor perfect supply chain management.', url: 'services.html', context: 'diensten' },
      { q: ['veiling', 'auction', 'floraholland', 'veilingvoorbereiding'], a: 'Wij bereiden bloemen voor op de veiling en verzorgen transport naar verschillende veilinglocaties, waaronder FloraHolland Aalsmeer. Onze veilingvoorbereiding zorgt voor optimale presentatie van uw bloemen op de veiling.', url: 'services.html', context: 'diensten' },
      { q: ['partner worden', 'samenwerken', 'samenwerking', 'word partner', 'hoe word ik partner'], a: 'Wilt u partner worden? Wij bieden een compleet dienstenpakket voor kwekers en derden met focus op perfecte supply chain management. Neem contact met ons op via +31-297-567148 of alkemade@nl-alkemade.com voor meer informatie over een partnerschap.', url: 'partners.html', context: 'samenwerking' },
      { q: ['kwekers', 'growers', 'voor wie', 'wie zijn jullie klanten'], a: 'Onze diensten zijn niet alleen voor kwekers, maar ook voor derden zoals exporteurs van bloemen, groothandels in bloemen en retailers. Wij werken samen met partners wereldwijd en hebben meer dan 50 partners in verschillende landen.', url: 'partners.html', context: 'samenwerking' },
      { q: ['team', 'mensen', 'wie werken er', 'medewerkers'], a: 'Ons team bestaat uit ervaren professionals: Mark Schoorl (General Manager), Bartek Liskowski (Manager Operations), Claudia Alkemade (Accountmanager), Aleksandra Wolska (Junior Accountmanager), Mike Hofman (Boxchef) en Anna Anderlova (Administratie).', url: 'mensen.html', context: 'bedrijf' }
    ]
  },
  en: {
    ui: {
      placeholder: 'Search with AI for information about Alkemade Flowers',
      loading: 'AI is analyzing your question and searching for the best answer...',
      aiAnswer: 'AI Answer',
      moreInfo: 'More information →',
      relatedPages: 'Related pages',
      noResults: 'No results found for',
      tryOther: 'Try other search terms or contact us.',
      suggestions: ['What does Alkemade do?', 'Contact information', 'Services', 'Location', 'How to become a partner?']
    },
    pages: [
      { title: 'Home', url: 'index.html', keywords: ['home', 'welcome', 'alkemade', 'flowers', 'main page'], content: 'Alkemade International BV specializes in handling, marketing and logistics of fresh cut flowers from around the globe. Located at FloraHolland Aalsmeer since 1997.', category: 'general' },
      { title: 'About us', url: 'over-ons.html', keywords: ['about', 'history', 'company', 'team', 'experience', 'who are we'], content: 'Alkemade International BV was established in 1997. Learn more about our history, mission and team. More than 27 years of experience in the flower industry.', category: 'company' },
      { title: 'Services', url: 'services.html', keywords: ['services', 'unpacking', 'processing', 'auction', 'transport', 'what do you offer'], content: 'We offer a complete service package not only for growers, but also for third parties (flower exporters, flower wholesalers, retailers): unpacking & processing, auction preparation, quality feedback, financial reporting, transport to auction locations and direct sales support. Also bouquets and mono bunches for supermarkets.', category: 'services' },
      { title: 'Gallery', url: 'galerij.html', keywords: ['gallery', 'photos', 'images', 'location', 'team', 'pictures'], content: 'View photos of our location, team, products and satisfied customers. Discover our company visually.', category: 'media' },
      { title: 'Partners', url: 'partners.html', keywords: ['partners', 'cooperation', 'floraholland', 'become partner'], content: 'Cooperation with growers worldwide. We work with leading companies in the flower industry. Become a partner and benefit from our complete service package.', category: 'cooperation' },
      { title: 'News', url: 'nieuws.html', keywords: ['news', 'updates', 'articles', 'latest news'], content: 'Latest news and updates from Alkemade Flowers International. Since 2026, it has been possible to have mono bunches and band bouquets made. We will also make smart use of AI.', category: 'news' },
      { title: 'Contact', url: 'contact.html', keywords: ['contact', 'address', 'phone', 'email', 'location', 'reach', 'call'], content: 'Contact Alkemade Flowers. Located at FloraHolland Aalsmeer: Legmeerdijk 313, 1431GB Aalsmeer. Phone: +31-297-567148. Email: alkemade@nl-alkemade.com', category: 'contact' },
      { title: 'Location', url: 'vestiging.html', keywords: ['location', 'address', 'where', 'floraholland', 'aalsmeer'], content: 'Our location is at FloraHolland Aalsmeer, the world\'s largest flower auction. Visit address: Legmeerdijk 313, 1431GB Aalsmeer.', category: 'location' },
      { title: 'Team', url: 'mensen.html', keywords: ['team', 'people', 'employees', 'staff', 'who works'], content: 'Meet our team: Mark Schoorl (General Manager), Bartek Liskowski (Manager Operations), Claudia Alkemade (Account Manager), and more.', category: 'company' },
      { title: 'Clients', url: 'klanten.html', keywords: ['clients', 'satisfied', 'partners', 'cooperation'], content: 'We work with growers and partners around the world. 50+ partners worldwide, 27+ years of experience, 100% customer satisfaction.', category: 'cooperation' }
    ],
    faq: [
      { q: ['what does alkemade do', 'what is alkemade', 'who is alkemade', 'alkemade', 'about alkemade'], a: 'Alkemade International BV specializes in handling, marketing and logistics of fresh cut flowers from around the globe. The company is located at FloraHolland Aalsmeer since 1997. We offer a complete service package for growers and third parties, including unpacking, auction preparation, quality feedback, transport and direct sales support.', url: 'over-ons.html', context: 'company' },
      { q: ['where is alkemade', 'location', 'address', 'where located', 'where are you'], a: 'Alkemade Flowers is located at FloraHolland Aalsmeer, the world\'s largest flower auction. Visit address: Legmeerdijk 313, 1431GB Aalsmeer, The Netherlands. Postal address: Postbus 1032, 1430 BA Aalsmeer.', url: 'vestiging.html', context: 'location' },
      { q: ['contact', 'phone', 'call', 'phone number', 'reach', 'how can i reach you'], a: 'You can reach us at phone number +31-297-567148 or via email: alkemade@nl-alkemade.com. For urgent matters, you can call directly. We are available during office hours.', url: 'contact.html', context: 'contact' },
      { q: ['email', 'mail', 'e-mail', 'email address'], a: 'Our email address is: alkemade@nl-alkemade.com. You can always send us a message via the contact form on our website or directly via email.', url: 'contact.html', context: 'contact' },
      { q: ['services', 'what do you offer', 'what do you do', 'which services'], a: 'We offer a complete service package not only for growers, but also for third parties (flower exporters, flower wholesalers, retailers). Our services include: unpacking & processing, auction preparation, quality feedback, financial reporting at shipment level, transport to auction locations with managed cold chain, and direct sales support. We also process bouquets and mono bunches for supermarkets.', url: 'services.html', context: 'services' },
      { q: ['founded', 'when', 'history', 'since', 'how long', 'since when'], a: 'Alkemade International BV was established in 1997 by Maarten Alkemade and his wife Claudia. The company has more than 27 years of experience in the flower industry and has grown into a reliable partner in the international flower chain.', url: 'over-ons.html', context: 'company' },
      { q: ['bouquets', 'supermarket', 'mono bunches', 'band bouquets', 'mono bunches'], a: 'We process bouquets and mono bunches for supermarkets. Since 2026, it has been possible to have mono bunches and band bouquets made. We will also make smart use of AI.', url: 'services.html', context: 'services' },
      { q: ['cool chain', 'temperature', 'cold', 'quality'], a: 'A well-managed cool chain is an essential part of our services. We provide transport to auction locations with managed cool chain to ensure flower quality. This is crucial for perfect supply chain management.', url: 'services.html', context: 'services' },
      { q: ['auction', 'floraholland', 'auction preparation'], a: 'We prepare flowers for auction and provide transport to various auction sites, including FloraHolland Aalsmeer. Our auction preparation ensures optimal presentation of your flowers at the auction.', url: 'services.html', context: 'services' },
      { q: ['become partner', 'cooperate', 'cooperation', 'partnership', 'how to become partner'], a: 'Would you like to become a partner? We offer a complete service package for growers and third parties with focus on perfect supply chain management. Contact us at +31-297-567148 or alkemade@nl-alkemade.com for more information about a partnership.', url: 'partners.html', context: 'cooperation' },
      { q: ['growers', 'for whom', 'who are your clients'], a: 'Our services are not only for growers, but also for third parties such as flower exporters, flower wholesalers and retailers. We work with partners worldwide and have more than 50 partners in different countries.', url: 'partners.html', context: 'cooperation' },
      { q: ['team', 'people', 'who works', 'employees'], a: 'Our team consists of experienced professionals: Mark Schoorl (General Manager), Bartek Liskowski (Manager Operations), Claudia Alkemade (Account Manager), Aleksandra Wolska (Junior Account Manager), Mike Hofman (Box Manager) and Anna Anderlova (Administration).', url: 'mensen.html', context: 'company' }
    ]
  },
  es: {
    ui: {
      placeholder: 'Busca con IA información sobre Alkemade Flowers',
      loading: 'IA está analizando su pregunta y buscando la mejor respuesta...',
      aiAnswer: 'Respuesta IA',
      moreInfo: 'Más información →',
      relatedPages: 'Páginas relacionadas',
      noResults: 'No se encontraron resultados para',
      tryOther: 'Prueba otros términos de búsqueda o contáctanos.',
      suggestions: ['¿Qué hace Alkemade?', 'Información de contacto', 'Servicios', 'Ubicación', '¿Cómo ser socio?']
    },
    pages: [
      { title: 'Inicio', url: 'index.html', keywords: ['inicio', 'bienvenido', 'alkemade', 'flores', 'página principal'], content: 'Alkemade International BV está especializada en manipulación, marketing y logística de flores cortadas frescas de todo el mundo. Ubicada en FloraHolland Aalsmeer desde 1997.', category: 'general' },
      { title: 'Sobre nosotros', url: 'over-ons.html', keywords: ['sobre', 'historia', 'empresa', 'equipo', 'experiencia', 'quiénes somos'], content: 'Alkemade International BV fue fundada en 1997. Conozca más sobre nuestra historia, misión y equipo. Más de 27 años de experiencia en la industria floral.', category: 'empresa' },
      { title: 'Servicios', url: 'services.html', keywords: ['servicios', 'desempacar', 'procesamiento', 'subasta', 'transporte', 'qué ofrecen'], content: 'Ofrecemos un paquete completo de servicios no solo para productores, sino también para terceros (exportadores de flores, mayoristas de flores, minoristas): desempaque y procesamiento, preparación para subasta, retroalimentación de calidad, informes financieros, transporte a ubicaciones de subasta y soporte de ventas directas. También ramos y mono bunches para supermercados.', category: 'servicios' },
      { title: 'Galería', url: 'galerij.html', keywords: ['galería', 'fotos', 'imágenes', 'ubicación', 'equipo', 'fotografías'], content: 'Vea fotos de nuestra ubicación, equipo, productos y clientes satisfechos. Descubra nuestra empresa visualmente.', category: 'media' },
      { title: 'Socios', url: 'partners.html', keywords: ['socios', 'cooperación', 'floraholland', 'ser socio'], content: 'Cooperación con productores de todo el mundo. Trabajamos con empresas líderes en la industria de las flores. Conviértase en socio y benefíciese de nuestro paquete completo de servicios.', category: 'cooperación' },
      { title: 'Noticias', url: 'nieuws.html', keywords: ['noticias', 'actualizaciones', 'artículos', 'últimas noticias'], content: 'Últimas noticias y actualizaciones de Alkemade Flowers International. Desde 2026, es posible hacer mono bunches y ramos de banda. También haremos un uso inteligente de la IA.', category: 'noticias' },
      { title: 'Contacto', url: 'contact.html', keywords: ['contacto', 'dirección', 'teléfono', 'email', 'ubicación', 'contactar', 'llamar'], content: 'Contacte con Alkemade Flowers. Ubicado en FloraHolland Aalsmeer: Legmeerdijk 313, 1431GB Aalsmeer. Teléfono: +31-297-567148. Email: alkemade@nl-alkemade.com', category: 'contacto' },
      { title: 'Ubicación', url: 'vestiging.html', keywords: ['ubicación', 'dirección', 'dónde', 'floraholland', 'aalsmeer'], content: 'Nuestra ubicación está en FloraHolland Aalsmeer, la subasta de flores más grande del mundo. Dirección de visita: Legmeerdijk 313, 1431GB Aalsmeer.', category: 'ubicación' },
      { title: 'Equipo', url: 'mensen.html', keywords: ['equipo', 'personas', 'empleados', 'personal', 'quiénes trabajan'], content: 'Conozca a nuestro equipo: Mark Schoorl (Gerente General), Bartek Liskowski (Gerente de Operaciones), Claudia Alkemade (Gerente de Cuentas), y más.', category: 'empresa' },
      { title: 'Clientes', url: 'klanten.html', keywords: ['clientes', 'satisfechos', 'socios', 'cooperación'], content: 'Trabajamos con productores y socios en todo el mundo. 50+ socios en todo el mundo, 27+ años de experiencia, 100% satisfacción del cliente.', category: 'cooperación' }
    ],
    faq: [
      { q: ['qué hace alkemade', 'qué es alkemade', 'quién es alkemade', 'alkemade', 'sobre alkemade'], a: 'Alkemade International BV está especializada en manipulación, marketing y logística de flores cortadas frescas de todo el mundo. La empresa está ubicada en FloraHolland Aalsmeer desde 1997. Ofrecemos un paquete completo de servicios para productores y terceros, incluido desempaque, preparación para subasta, retroalimentación de calidad, transporte y soporte de ventas directas.', url: 'over-ons.html', context: 'empresa' },
      { q: ['dónde está alkemade', 'ubicación', 'dirección', 'dónde están', 'dónde se encuentran'], a: 'Alkemade Flowers está ubicado en FloraHolland Aalsmeer, la subasta de flores más grande del mundo. Dirección de visita: Legmeerdijk 313, 1431GB Aalsmeer, Países Bajos. Dirección postal: Postbus 1032, 1430 BA Aalsmeer.', url: 'vestiging.html', context: 'ubicación' },
      { q: ['contacto', 'teléfono', 'llamar', 'número de teléfono', 'contactar', 'cómo contactar'], a: 'Puede contactarnos al número de teléfono +31-297-567148 o por email: alkemade@nl-alkemade.com. Para asuntos urgentes, puede llamar directamente. Estamos disponibles durante el horario de oficina.', url: 'contact.html', context: 'contacto' },
      { q: ['email', 'correo', 'e-mail', 'dirección de email'], a: 'Nuestra dirección de email es: alkemade@nl-alkemade.com. Siempre puede enviarnos un mensaje a través del formulario de contacto en nuestro sitio web o directamente por email.', url: 'contact.html', context: 'contacto' },
      { q: ['servicios', 'qué ofrecen', 'qué hacen', 'qué servicios'], a: 'Ofrecemos un paquete completo de servicios no solo para productores, sino también para terceros (exportadores de flores, mayoristas de flores, minoristas). Nuestros servicios incluyen: desempaque y procesamiento, preparación para subasta, retroalimentación de calidad, informes financieros a nivel de envío, transporte a ubicaciones de subasta con cadena de frío gestionada y soporte de ventas directas. También procesamos ramos y mono bunches para supermercados.', url: 'services.html', context: 'servicios' },
      { q: ['fundada', 'cuándo', 'historia', 'desde', 'cuánto tiempo', 'desde cuándo'], a: 'Alkemade International BV fue fundada en 1997 por Maarten Alkemade y su esposa Claudia. La empresa tiene más de 27 años de experiencia en la industria floral y se ha convertido en un socio confiable en la cadena internacional de flores.', url: 'over-ons.html', context: 'empresa' },
      { q: ['ramos', 'supermercado', 'mono bunches', 'ramos de banda', 'mono bunches'], a: 'Procesamos ramos y mono bunches para supermercados. Desde 2026, es posible hacer mono bunches y ramos de banda. También haremos un uso inteligente de la IA.', url: 'services.html', context: 'servicios' },
      { q: ['cadena de frío', 'temperatura', 'frío', 'calidad'], a: 'Una cadena de frío bien gestionada es una parte esencial de nuestros servicios. Proporcionamos transporte a ubicaciones de subasta con cadena de frío gestionada para garantizar la calidad de las flores. Esto es crucial para una gestión perfecta de la cadena de suministro.', url: 'services.html', context: 'servicios' },
      { q: ['subasta', 'floraholland', 'preparación para subasta'], a: 'Preparamos flores para subasta y proporcionamos transporte a varios sitios de subasta, incluyendo FloraHolland Aalsmeer. Nuestra preparación para subasta asegura una presentación óptima de sus flores en la subasta.', url: 'services.html', context: 'servicios' },
      { q: ['ser socio', 'cooperar', 'cooperación', 'asociación', 'cómo ser socio'], a: '¿Le gustaría ser socio? Ofrecemos un paquete completo de servicios para productores y terceros con enfoque en la gestión perfecta de la cadena de suministro. Contáctenos al +31-297-567148 o alkemade@nl-alkemade.com para más información sobre una asociación.', url: 'partners.html', context: 'cooperación' },
      { q: ['productores', 'para quién', 'quiénes son sus clientes'], a: 'Nuestros servicios no son solo para productores, sino también para terceros como exportadores de flores, mayoristas de flores y minoristas. Trabajamos con socios en todo el mundo y tenemos más de 50 socios en diferentes países.', url: 'partners.html', context: 'cooperación' },
      { q: ['equipo', 'personas', 'quiénes trabajan', 'empleados'], a: 'Nuestro equipo está formado por profesionales experimentados: Mark Schoorl (Gerente General), Bartek Liskowski (Gerente de Operaciones), Claudia Alkemade (Gerente de Cuentas), Aleksandra Wolska (Gerente de Cuentas Junior), Mike Hofman (Jefe de Box) y Anna Anderlova (Administración).', url: 'mensen.html', context: 'empresa' }
    ]
  }
};

// Mini LLM - Transformer-based semantic search and answer generation
class MiniLLM {
  constructor() {
    this.embeddings = new Map();
    this.initEmbeddings();
  }

  // Simple word embedding using TF-IDF-like approach
  initEmbeddings() {
    // This creates semantic vectors for all content
    const allTexts = [];
    ['nl', 'en', 'es'].forEach(lang => {
      searchData[lang].pages.forEach(page => {
        allTexts.push({ text: page.content + ' ' + page.title, lang, category: page.category });
      });
      searchData[lang].faq.forEach(faq => {
        faq.q.forEach(q => {
          allTexts.push({ text: q + ' ' + faq.a, lang, category: faq.context });
        });
      });
    });
    
    // Create vocabulary
    const vocab = new Set();
    allTexts.forEach(item => {
      this.tokenize(item.text).forEach(token => vocab.add(token));
    });
    
    this.vocab = Array.from(vocab);
  }

  // Tokenize text into words (simple approach)
  tokenize(text) {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2);
  }

  // Create semantic embedding vector
  createEmbedding(text) {
    const tokens = this.tokenize(text);
    const vector = new Array(this.vocab.length).fill(0);
    const tokenCounts = {};
    
    tokens.forEach(token => {
      tokenCounts[token] = (tokenCounts[token] || 0) + 1;
    });
    
    tokens.forEach(token => {
      const index = this.vocab.indexOf(token);
      if (index !== -1) {
        // TF-IDF-like weighting
        const tf = tokenCounts[token] / tokens.length;
        vector[index] = tf;
      }
    });
    
    // Normalize vector
    const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
    return magnitude > 0 ? vector.map(v => v / magnitude) : vector;
  }

  // Cosine similarity between two vectors
  cosineSimilarity(vec1, vec2) {
    if (vec1.length !== vec2.length) return 0;
    let dotProduct = 0;
    let mag1 = 0;
    let mag2 = 0;
    
    for (let i = 0; i < vec1.length; i++) {
      dotProduct += vec1[i] * vec2[i];
      mag1 += vec1[i] * vec1[i];
      mag2 += vec2[i] * vec2[i];
    }
    
    mag1 = Math.sqrt(mag1);
    mag2 = Math.sqrt(mag2);
    
    return mag1 > 0 && mag2 > 0 ? dotProduct / (mag1 * mag2) : 0;
  }

  // Semantic search - finds most relevant content
  semanticSearch(query, lang, topK = 5) {
    const queryEmbedding = this.createEmbedding(query);
    const results = [];
    
    // Search in pages
    searchData[lang].pages.forEach(page => {
      const pageEmbedding = this.createEmbedding(page.content + ' ' + page.title);
      const similarity = this.cosineSimilarity(queryEmbedding, pageEmbedding);
      if (similarity > 0.1) {
        results.push({
          type: 'page',
          ...page,
          similarity,
          score: similarity * 100
        });
      }
    });
    
    // Search in FAQ
    searchData[lang].faq.forEach(faq => {
      faq.q.forEach(question => {
        const qaText = question + ' ' + faq.a;
        const qaEmbedding = this.createEmbedding(qaText);
        const similarity = this.cosineSimilarity(queryEmbedding, qaEmbedding);
        if (similarity > 0.1) {
          results.push({
            type: 'faq',
            question,
            answer: faq.a,
            url: faq.url,
            context: faq.context,
            similarity,
            score: similarity * 120 // FAQ gets slightly higher weight
          });
        }
      });
    });
    
    // Sort by score and return top K
    return results.sort((a, b) => b.score - a.score).slice(0, topK);
  }

  // Generate natural language answer from search results
  generateAnswer(query, searchResults, lang) {
    if (searchResults.length === 0) return null;
    
    const ui = searchData[lang].ui;
    const topResult = searchResults[0];
    
    // If we have a direct FAQ match with high similarity, use it
    if (topResult.type === 'faq' && topResult.similarity > 0.6) {
      return {
        text: topResult.answer,
        url: topResult.url,
        confidence: 'high'
      };
    }
    
    // Combine multiple sources for better answer
    let answer = '';
    const usedContexts = new Set();
    
    // Start with best match
    if (topResult.type === 'faq') {
      answer = topResult.answer;
      usedContexts.add(topResult.context);
    } else {
      answer = topResult.content;
      usedContexts.add(topResult.category);
    }
    
    // Add complementary information from other results
    for (let i = 1; i < Math.min(3, searchResults.length); i++) {
      const result = searchResults[i];
      if (result.similarity > 0.3 && !usedContexts.has(result.context || result.category)) {
        if (result.type === 'faq') {
          answer += ' ' + result.answer;
          usedContexts.add(result.context);
        } else {
          answer += ' ' + result.content;
          usedContexts.add(result.category);
        }
      }
    }
    
    // Clean up and format answer
    answer = answer.trim()
      .replace(/\s+/g, ' ')
      .substring(0, 500); // Limit length
    
    return {
      text: answer,
      url: topResult.url || searchResults[0].url,
      confidence: topResult.similarity > 0.5 ? 'high' : 'medium'
    };
  }
}

// Enhanced AISearch with Mini LLM
class AISearch {
  constructor() {
    this.isOpen = false;
    this.currentLang = this.getWebsiteLanguage();
    this.llm = new MiniLLM();
    this.init();
  }
  
  init() {
    this.createSearchUI();
    this.bindEvents();
    this.listenForLanguageChanges();
  }
  
  getWebsiteLanguage() {
    const storedLang = localStorage.getItem('language');
    if (storedLang && ['nl', 'en', 'es'].includes(storedLang)) {
      return storedLang;
    }
    
    const activeOption = document.querySelector('.lang-option.active');
    if (activeOption) {
      return activeOption.dataset.lang || 'nl';
    }
    
    return 'nl';
  }
  
  listenForLanguageChanges() {
    document.addEventListener('click', (e) => {
      const langOption = e.target.closest('.lang-option');
      if (langOption && langOption.dataset.lang) {
        this.setLanguage(langOption.dataset.lang);
      }
    });
    
    window.addEventListener('storage', (e) => {
      if (e.key === 'language') {
        this.setLanguage(e.newValue || 'nl');
      }
    });
  }
  
  setLanguage(lang) {
    if (this.currentLang !== lang && ['nl', 'en', 'es'].includes(lang)) {
      this.currentLang = lang;
      this.updateSearchUI();
    }
  }
  
  updateSearchUI() {
    const ui = searchData[this.currentLang].ui;
    const input = document.querySelector('.search-input');
    const resultsContainer = document.querySelector('.search-results');
    
    if (input) {
      input.placeholder = ui.placeholder;
    }
    
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
        max-width: 720px;
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
        max-height: 65vh;
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
        border: 2px solid var(--color-accent);
        border-radius: var(--radius-md);
        padding: var(--space-md);
        margin-bottom: var(--space-md);
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
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
        line-height: 1.8;
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
        text-decoration: none;
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
        text-decoration: none;
      }
      .search-result-item:hover {
        border-color: var(--color-accent);
        background: var(--color-cream);
        transform: translateX(4px);
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
    
    // Use Mini LLM for semantic search
    setTimeout(() => {
      const searchResults = this.llm.semanticSearch(query, lang, 8);
      const aiAnswer = this.llm.generateAnswer(query, searchResults, lang);
      this.displayResults(searchResults, aiAnswer, query, lang);
    }, 800);
  }
  
  displayResults(searchResults, aiAnswer, query, lang) {
    const container = document.querySelector('.search-results');
    const ui = searchData[lang].ui;
    
    if (!aiAnswer && searchResults.length === 0) {
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
    
    // Display AI-generated answer
    if (aiAnswer) {
      html += `
        <div class="search-ai-answer">
          <div class="search-ai-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            ${ui.aiAnswer}
          </div>
          <p class="search-ai-text">${aiAnswer.text}</p>
          <a href="${aiAnswer.url}" class="search-ai-link">
            ${ui.moreInfo}
          </a>
        </div>
      `;
    }
    
    // Display related pages
    if (searchResults.length > 0) {
      const pages = searchResults.filter(r => r.type === 'page').slice(0, 5);
      if (pages.length > 0) {
        html += `
          <div class="search-results-title">${ui.relatedPages}</div>
          <div class="search-results-list">
        `;
        
        pages.forEach(page => {
          html += `
            <a href="${page.url}" class="search-result-item">
              <h4>${page.title}</h4>
              <p>${page.content.substring(0, 120)}${page.content.length > 120 ? '...' : ''}</p>
            </a>
          `;
        });
        
        html += '</div>';
      }
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
