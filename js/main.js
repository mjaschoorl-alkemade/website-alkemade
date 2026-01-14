/* ALKEMADE FLOWERS - Luxury Website JavaScript */

const translations = {
  nl: {
    'nav.home': 'Home', 'nav.about': 'Over ons', 'nav.gallery': 'Galerij', 'nav.gallery.location': 'Vestiging', 'nav.gallery.people': 'Mensen', 'nav.gallery.products': 'Services', 'nav.gallery.clients': 'Klanten', 'nav.partners': 'Partners', 'nav.news': 'Nieuws', 'nav.contact': 'Contact', 'nav.portal': 'Link portaal',
    'hero.label': 'FloraHolland Aalsmeer, Nederland', 'hero.title': 'Your Partner in <span>Floriculture</span> Business', 'hero.text': 'Alkemade International BV is gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld. Al sinds 1997 bouwen wij aan duurzame partnerschappen.', 'hero.btn.discover': 'Ontdek meer', 'hero.btn.contact': 'Neem contact op',
    'about.title': 'Alkemade International B.V.', 'about.text1': 'Alkemade International BV is een gevestigd bedrijf, gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen van over de hele wereld, gevestigd op FloraHolland Aalsmeer, Nederland.', 'about.text2': 'Het bedrijf werd opgericht in 1997.', 'about.text3': 'Wij bieden een compleet dienstenpakket voor kwekers, exporteurs, groothandels retailers. Het dienstpakket bestaat uit het uitpakken en retail.', 'about.stat1': 'Jaren ervaring', 'about.stat2': 'Partners wereldwijd', 'about.stat3': 'Kwaliteitsgarantie',
    'services.label': 'Onze diensten', 'services.title': 'Compleet dienstenpakket voor kwekers', 'services.subtitle': 'Niet alleen voor kwekers, maar ook voor derden (exporteurs van bloemen, groothandels in bloemen, retailers).',
    'services.card.unpack.title': 'Uitpakken & Verwerking', 'services.card.unpack.text': 'Professioneel uitpakken en verwerken, inclusief boeketten en mono bunches voor supermarkten.',
    'services.card.auction.title': 'Veilingvoorbereiding', 'services.card.auction.text': 'Volledige veilingvoorbereiding voor optimale presentatie op de veiling.',
    'services.card.quality.title': 'Kwaliteitsfeedback', 'services.card.quality.text': 'Professionele feedback als onderdeel van dagelijkse communicatie.',
    'services.card.financial.title': 'Financiële Rapportage', 'services.card.financial.text': 'Gedetailleerde resultaten op zendingsniveau.',
    'services.card.transport.title': 'Transport', 'services.card.transport.text': 'Transport naar veilinglocaties met beheerde koelketen.',
    'services.card.sales.title': 'Directe Verkoopondersteuning', 'services.card.sales.text': 'Verkoop aan exporteurs of via onze groothandel.',
    'mission.label': 'Onze visie', 'mission.title': 'Perfect Supply Chain Management', 'mission.text': 'In de veranderende wereld waarin wij opereren, merken we dat perfect beheer van de supply chain steeds belangrijker wordt. Geïntegreerde webgebaseerde software en een goed beheerde koelketen zijn essentiële elementen van ons bedrijf.',
    'cta.title': 'Wilt u samenwerken?', 'cta.text': 'Neem contact met ons op voor een duurzaam partnerschap in de sierteeltsector', 'cta.btn': 'Neem contact op',
    'footer.nav': 'Navigatie', 'footer.gallery': 'Galerij', 'footer.contact': 'Contact', 'footer.newsletter': 'Nieuwsbrief', 'footer.newsletter.placeholder': 'Uw e-mailadres', 'footer.copyright': '© Alkemade International B.V. 2026', 'footer.privacy': 'Privacybeleid', 'footer.disclaimer': 'Disclaimer', 'footer.terms': 'Algemene voorwaarden',
    'footer.brand.text': 'Your Partner in Floriculture Business. Gespecialiseerd in verwerking, marketing en logistiek van verse snijbloemen sinds 1997.',
    'footer.contact.location': 'FloraHolland Aalsmeer:', 'footer.contact.tel': 'Tel:', 'footer.contact.email': 'Email:',
    'page.about': 'Over ons', 'page.gallery': 'Galerij', 'page.partners': 'Partners', 'page.news': 'Nieuws', 'page.contact': 'Contact', 'page.portal': 'Link portaal',
    'gallery.all': 'Alle', 'gallery.location': 'Vestiging', 'gallery.people': 'Mensen', 'gallery.products': 'Services', 'gallery.clients': 'Klanten',
    'contact.title': 'Neem contact met ons op', 'contact.visit.nl': 'FloraHolland Aalsmeer', 'contact.postal': 'Postadres', 'contact.phone.nl': 'Telefoon', 'contact.email': 'E-mail',
    'contact.form.title': 'Stuur ons een bericht', 'contact.form.name': 'Naam', 'contact.form.company': 'Bedrijf', 'contact.form.email': 'E-mailadres', 'contact.form.phone': 'Telefoonnummer', 'contact.form.subject': 'Onderwerp', 'contact.form.message': 'Bericht', 'contact.form.submit': 'Versturen',
    'news.label': 'Updates', 'news.title': 'Laatste nieuws', 'news.readmore': 'Lees meer',
    'partners.label': 'Ons netwerk', 'partners.title': 'Onze Partners', 'partners.cta.title': 'Word partner', 'partners.cta.text': 'Bent u geïnteresseerd in een partnerschap met Alkemade Flowers? Neem contact met ons op.',
    'portal.label': 'Resources', 'portal.title': 'Handige links', 'portal.docs.label': 'Documenten', 'portal.docs.title': 'Belangrijke documenten', 'portal.help.title': 'Hulp nodig?', 'portal.help.text': 'Kunt u niet vinden wat u zoekt? Neem contact met ons op.',
    'about.history.label': 'Onze geschiedenis', 'about.history.title': 'De geschiedenis van Alkemade International B.V.', 'about.history.subtitle': 'Van bescheiden begin tot betrouwbare partner in de internationale bloemenketen', 'about.history.readmore': 'Lees meer over de geschiedenis',
    'about.history.1997.title': 'Oprichting', 'about.history.1997.text1': 'Alkemade International B.V. is opgericht in 1997 door Maarten Alkemade, tezamen met zijn vrouw Claudia, die op dat moment zelfstandig designer van bloemarrangementen was.', 'about.history.1997.text2': 'Maartens broer Peter was aanvankelijk parttime bij het bedrijf betrokken, maar al spoedig fulltime en werd tevens aandeelhouder. De eerste activiteiten bestonden uit het importeren van bloemen uit Colombia en Ecuador. Deze werkzaamheden werden begeleid vanuit een kantoor aan huis en een verwerkingsruimte in de box van J.P. Hogewoning.',
    'about.history.1998.title': 'Eerste groei', 'about.history.1998.text1': 'Al snel werd een kantoorpand betrokken aan het marktplein in Uithoorn. Rond de eeuwwisseling werd bovendien een eigen verwerkingsruimte in gebruik genomen bij de bloemenveiling te Aalsmeer.', 'about.history.1998.text2': 'De nauwe samenwerking met de firma Hogewoning kreeg een vervolg: Alkemade importeerde bloemen en verzorgde de handling, terwijl Hogewoning verantwoordelijk was voor de verkoop aan exportfirma\'s op de diverse bloemenveilingen in Nederland. In Zuid-Amerika werd een eigen agent aangesteld.',
    'about.history.2004.title': 'Nieuwe verwerkingsruimte', 'about.history.2004.text': 'In 2004 werd een nieuwe verwerkingsruimte betrokken op de eerste verdieping van de bloemenveiling te Aalsmeer. Naast het importeren en direct doorverkopen van bloemen werd gestart met uitgebreide handlingactiviteiten. Onder andere grote partijen gipskruid werden per container vanuit Ecuador aangevoerd en veilklaar gemaakt voor diverse kwekers.',
    'about.history.2009.title': 'Verdere expansie', 'about.history.2009.text1': 'In deze periode werd wederom een nieuwe en grotere vestiging betrokken, waar zich tot op heden het hoofdkantoor bevindt. Door verdere groei en ruimtegebrek werd in 2012 een tweede box in gebruik genomen.', 'about.history.2009.text2': 'De handlingactiviteiten werden verder uitgebreid, wat leidde tot een groeiend klantenbestand van kwekers uit onder meer Israël, Europa en Afrika. Alkemade ontwikkelde zich in deze jaren tot een betrouwbare en stabiele schakel binnen de internationale bloemenketen.',
    'about.history.2020.title': 'Derde vestiging', 'about.history.2020.text': 'In januari 2020 werd een derde vestiging in Aalsmeer in gebruik genomen. Het bedrijf groeide mee met de tijd en richtte zich, naast import en handling, steeds meer op directe verkoop voor haar kwekers, in voortdurende samenwerking met Hogewoning.',
    'about.history.2022.title': 'Verkocht aan JP Hogewoning', 'about.history.2022.text': 'In 2022 werd Alkemade International B.V. verkocht aan JP Hogewoning.',
    'about.history.2024.title': 'Nieuw hoofdkantoor', 'about.history.2024.text': 'In 2024 werden alle vestigingen samengevoegd in één nieuw hoofdkantoor. Er is toen flink geïnvesteerd in nieuwe partners en lijnen.',
    'about.history.2026.title': 'Nieuwe service: Mono bossen en bandboeketten', 'about.history.2026.text': 'Wij starten vanaf Februari 2026 met het maken van mono bossen en bandboeketten voor kwekers en/of derden.',
    'services.page.title': 'Services', 'services.page.breadcrumb': 'Services', 'services.assortment.label': 'Ons assortiment', 'services.assortment.title': 'Verse snijbloemen van over de hele wereld', 'services.assortment.subtitle': 'Wij verwerken en verhandelen een breed assortiment aan hoogwaardige bloemen',
    'services.unpack.title': 'Uitpakken & Verwerking', 'services.unpack.text': 'Professioneel uitpakken en verwerken van bloemen bij aankomst, inclusief verwerking van boeketten en mono bunches voor supermarkten.',
    'services.auction.title': 'Veilingvoorbereiding', 'services.auction.text': 'Volledige veilingvoorbereiding zodat uw bloemen optimaal gepresenteerd worden op de veiling.',
    'services.quality.title': 'Kwaliteitscontrole', 'services.quality.text': 'Professionele feedback over kwaliteit als belangrijk onderdeel van onze dagelijkse communicatie met kwekers.',
    'services.request': 'Vraag informatie aan', 'services.photos.label': 'Foto\'s', 'services.photos.title': 'Onze services in beeld', 'services.cta.title': 'Interesse in onze services?', 'services.cta.text': 'Neem contact met ons op voor meer informatie',
    'location.page.title': 'Vestiging', 'location.page.breadcrumb': 'Vestiging', 'location.label': 'Onze locatie', 'location.title': 'FloraHolland Aalsmeer', 'location.subtitle': 'Gevestigd bij de grootste bloemenveiling ter wereld',
    'location.visit.title': 'Bezoekadres', 'location.postal.title': 'Postadres', 'location.contact.title': 'Contact', 'location.maps': 'Bekijk op Google Maps',
    'people.page.title': 'Mensen', 'people.page.breadcrumb': 'Mensen', 'people.label': 'Ons team', 'people.title': 'Ontmoet ons team', 'people.subtitle': 'De mensen achter Alkemade International B.V.',
    'clients.page.title': 'Klanten', 'clients.page.breadcrumb': 'Klanten', 'clients.label': 'Onze klanten', 'clients.title': 'Tevreden klanten wereldwijd', 'clients.subtitle': 'Wij werken samen met kwekers en partners over de hele wereld',
    'page.gallery': 'Galerij', 'breadcrumb.home': 'Home',
    'partners.section.label': 'Onze partners', 'partners.section.title': 'Samenwerkingspartners', 'partners.section.subtitle': 'Wij werken samen met toonaangevende bedrijven in de bloemenindustrie',
    'partners.cooperation.label': 'Samenwerking', 'partners.cooperation.title': 'Waarom partner worden?', 'partners.cooperation.text': 'Wij bieden een compleet dienstenpakket niet alleen voor kwekers, maar ook voor derden (exporteurs van bloemen, groothandels in bloemen, retailers) met focus op perfecte supply chain management.',
    'partners.service.unpack': 'Uitpakken en verwerking', 'partners.service.auction': 'Veilingvoorbereiding', 'partners.service.quality': 'Kwaliteitsfeedback', 'partners.service.financial': 'Financiële rapportage op zendingsniveau', 'partners.service.transport': 'Transport naar veilinglocaties', 'partners.service.sales': 'Directe verkoopondersteuning', 'partners.service.bouquets': 'Boeketten en mono bunches voor supermarkten',
    'partners.cta.also': 'Wilt u ook partner worden?', 'partners.cta.text2': 'Neem contact met ons op voor een duurzaam partnerschap',
    'people.role.gm': 'General Manager', 'people.role.ops': 'Manager Operations', 'people.role.account': 'Accountmanager', 'people.role.junior': 'Junior Accountmanager', 'people.role.box': 'Boxchef', 'people.role.admin': 'Administratie',
    'people.cta.title': 'Wilt u deel uitmaken van ons team?', 'people.cta.text': 'Neem contact met ons op voor carrièremogelijkheden',
    'news.subtitle': 'Blijf op de hoogte van de laatste ontwikkelingen bij Alkemade Flowers International.',
    'news.article.date': 'Februari 2026', 'news.article.title': 'Nieuwe service: Mono bossen en bandboeketten', 'news.article.excerpt': 'Wij starten vanaf Februari 2026 met het maken van mono bossen en bandboeketten voor kwekers en/of derden.',
    'news.modal.title': 'Nieuwe service: Mono bossen en bandboeketten', 'news.modal.text': 'Wij starten vanaf Februari 2026 met het maken van mono bossen en bandboeketten voor kwekers en/of derden.',
    'clients.global.title': 'Wereldwijde partners', 'clients.global.text': 'Wij werken samen met partners uit verschillende landen. Onze klanten variëren van lokale kwekers tot grote internationale handelaren.',
    'clients.stats.title': 'Onze statistieken', 'clients.stats.text': '✓ 50+ Partners wereldwijd<br>✓ 27+ Jaren ervaring<br>✓ 100% Klanttevredenheid<br>✓ Duurzame partnerschappen',
    'clients.service.title': 'Klantenservice', 'clients.service.text': 'Wij bieden persoonlijke service en ondersteuning aan al onze klanten. Duurzame relaties staan bij ons centraal.',
    'clients.cta.title': 'Wilt u ook partner worden?', 'clients.cta.text': 'Neem contact met ons op voor een duurzaam partnerschap',
    'contact.success.title': 'Bedankt voor uw bericht!', 'contact.success.text': 'Wij nemen zo snel mogelijk contact met u op.', 'contact.success.urgent': 'Mocht het haast hebben, kunt u ons bereiken', 'contact.success.phone': 'op dit nummer',
    'location.cta.title': 'Wilt u langskomen?', 'location.cta.text': 'Neem contact met ons op om een afspraak te maken',
    'gallery.location.label': 'Onze locatie', 'gallery.location.title': 'Vestiging', 'gallery.location.subtitle': 'Gevestigd bij FloraHolland Aalsmeer, de grootste bloemenveiling ter wereld',
    'gallery.images.label': 'Beelden', 'gallery.images.title': 'Ontdek ons bedrijf', 'gallery.images.subtitle': 'Een kijkje achter de schermen bij Alkemade Flowers International'
  },
  en: {
    'nav.home': 'Home', 'nav.about': 'About us', 'nav.gallery': 'Gallery', 'nav.gallery.location': 'Location', 'nav.gallery.people': 'People', 'nav.gallery.products': 'Services', 'nav.gallery.clients': 'Clients', 'nav.partners': 'Partners', 'nav.news': 'News', 'nav.contact': 'Contact', 'nav.portal': 'Link portal',
    'hero.label': 'FloraHolland Aalsmeer, Netherlands', 'hero.title': 'Your Partner in <span>Floriculture</span> Business', 'hero.text': 'Alkemade International BV is specialized in handling, marketing and logistics of fresh cut flowers sourced from around the globe. Since 1997, we have been building sustainable partnerships.', 'hero.btn.discover': 'Discover more', 'hero.btn.contact': 'Contact us',
    'about.title': 'Alkemade International B.V.', 'about.text1': 'Alkemade International BV is a well-established company, specialized in handling, marketing and logistics of fresh cut flowers sourced from around the globe, located at FloraHolland Aalsmeer, the Netherlands.', 'about.text2': 'The company was established in 1997.', 'about.text3': 'We offer a complete service package for growers, exporters, wholesalers retailers. The service package consists of unpacking and retail.', 'about.stat1': 'Years of experience', 'about.stat2': 'Partners worldwide', 'about.stat3': 'Quality guarantee',
    'services.label': 'Our services', 'services.title': 'Full range of services for growers', 'services.subtitle': 'Not only for growers, but also for third parties (flower exporters, flower wholesalers, retailers).',
    'services.card.unpack.title': 'Unpacking & Processing', 'services.card.unpack.text': 'Professional unpacking and processing, including bouquets and mono bunches for supermarkets.',
    'services.card.auction.title': 'Auction Preparation', 'services.card.auction.text': 'Complete auction preparation for optimal presentation at the auction.',
    'services.card.quality.title': 'Quality Feedback', 'services.card.quality.text': 'Professional feedback as part of daily communication.',
    'services.card.financial.title': 'Financial Reporting', 'services.card.financial.text': 'Detailed results at shipment level.',
    'services.card.transport.title': 'Transport', 'services.card.transport.text': 'Transport to auction locations with managed cold chain.',
    'services.card.sales.title': 'Direct Sales Support', 'services.card.sales.text': 'Sales to exporters or through our wholesaler.',
    'mission.label': 'Our vision', 'mission.title': 'Perfect Supply Chain Management', 'mission.text': 'In the changing world in which we operate, we notice that perfect management of the supply chain is becoming increasingly crucial. Integrated web-based software and a well-managed cool chain are essential elements of our business.',
    'cta.title': 'Want to collaborate?', 'cta.text': 'Contact us for a sustainable partnership in the floriculture sector', 'cta.btn': 'Contact us',
    'footer.nav': 'Navigation', 'footer.gallery': 'Gallery', 'footer.contact': 'Contact', 'footer.newsletter': 'Newsletter', 'footer.newsletter.placeholder': 'Your email address', 'footer.copyright': '© Alkemade International B.V. 2026', 'footer.privacy': 'Privacy Policy', 'footer.disclaimer': 'Disclaimer', 'footer.terms': 'General Conditions',
    'footer.brand.text': 'Your Partner in Floriculture Business. Specialized in handling, marketing and logistics of fresh cut flowers since 1997.',
    'footer.contact.location': 'FloraHolland Aalsmeer:', 'footer.contact.tel': 'Tel:', 'footer.contact.email': 'Email:',
    'page.about': 'About us', 'page.gallery': 'Gallery', 'page.partners': 'Partners', 'page.news': 'News', 'page.contact': 'Contact', 'page.portal': 'Link portal',
    'gallery.all': 'All', 'gallery.location': 'Location', 'gallery.people': 'People', 'gallery.products': 'Services', 'gallery.clients': 'Clients',
    'contact.title': 'Contact us', 'contact.visit.nl': 'FloraHolland Aalsmeer', 'contact.postal': 'Postal address', 'contact.phone.nl': 'Phone', 'contact.email': 'Email',
    'contact.form.title': 'Send us a message', 'contact.form.name': 'Name', 'contact.form.company': 'Company', 'contact.form.email': 'Email address', 'contact.form.phone': 'Phone number', 'contact.form.subject': 'Subject', 'contact.form.message': 'Message', 'contact.form.submit': 'Submit',
    'news.label': 'Updates', 'news.title': 'Latest news', 'news.readmore': 'Read more',
    'partners.label': 'Our network', 'partners.title': 'Our Partners', 'partners.cta.title': 'Become a partner', 'partners.cta.text': 'Interested in a partnership with Alkemade Flowers? Contact us.',
    'portal.label': 'Resources', 'portal.title': 'Useful links', 'portal.docs.label': 'Documents', 'portal.docs.title': 'Important documents', 'portal.help.title': 'Need help?', 'portal.help.text': 'Can\'t find what you\'re looking for? Contact us.',
    'about.history.label': 'Our history', 'about.history.title': 'The history of Alkemade International B.V.', 'about.history.subtitle': 'From humble beginnings to a reliable partner in the international flower chain', 'about.history.readmore': 'Read more about our history',
    'about.history.1997.title': 'Foundation', 'about.history.1997.text1': 'Alkemade International B.V. was founded in 1997 by Maarten Alkemade, together with his wife Claudia, who was an independent designer of flower arrangements at that time.', 'about.history.1997.text2': 'Maarten\'s brother Peter was initially involved part-time in the company, but soon became full-time and also became a shareholder. The first activities consisted of importing flowers from Colombia and Ecuador. These activities were managed from a home office and a processing room in the box of J.P. Hogewoning.',
    'about.history.1998.title': 'First growth', 'about.history.1998.text1': 'Soon a office building was occupied at the market square in Uithoorn. Around the turn of the century, an own processing room was also put into use at the flower auction in Aalsmeer.', 'about.history.1998.text2': 'The close cooperation with the firm Hogewoning continued: Alkemade imported flowers and handled the handling, while Hogewoning was responsible for sales to export companies at the various flower auctions in the Netherlands. In South America, an own agent was appointed.',
    'about.history.2004.title': 'New processing room', 'about.history.2004.text': 'In 2004, a new processing room was occupied on the first floor of the flower auction in Aalsmeer. In addition to importing and directly reselling flowers, extensive handling activities were started. Among other things, large quantities of gypsophila were transported by container from Ecuador and made auction-ready for various growers.',
    'about.history.2009.title': 'Further expansion', 'about.history.2009.text1': 'During this period, a new and larger location was again occupied, where the headquarters is located to this day. Due to further growth and lack of space, a second box was put into use in 2012.', 'about.history.2009.text2': 'The handling activities were further expanded, leading to a growing customer base of growers from Israel, Europe and Africa, among others. Alkemade developed into a reliable and stable link within the international flower chain during these years.',
    'about.history.2020.title': 'Third location', 'about.history.2020.text': 'In January 2020, a third location in Aalsmeer was put into use. The company grew with the times and, in addition to import and handling, increasingly focused on direct sales for its growers, in continuous cooperation with Hogewoning.',
    'about.history.2022.title': 'Sold to JP Hogewoning', 'about.history.2022.text': 'In 2022, Alkemade International B.V. was sold to JP Hogewoning.',
    'about.history.2024.title': 'New headquarters', 'about.history.2024.text': 'In 2024, all locations were merged into one new headquarters. Significant investments were made in new partners and lines.',
    'about.history.2026.title': 'New service: Mono bunches and band bouquets', 'about.history.2026.text': 'We are starting in February 2026 with making mono bunches and band bouquets for growers and/or third parties.',
    'services.page.title': 'Services', 'services.page.breadcrumb': 'Services', 'services.assortment.label': 'Our assortment', 'services.assortment.title': 'Fresh cut flowers from around the world', 'services.assortment.subtitle': 'We process and trade a wide range of high-quality flowers',
    'services.unpack.title': 'Unpacking & Processing', 'services.unpack.text': 'Professional unpacking and processing of flowers upon arrival, including processing of bouquets and mono bunches for supermarkets.',
    'services.auction.title': 'Auction preparation', 'services.auction.text': 'Complete auction preparation so that your flowers are optimally presented at the auction.',
    'services.quality.title': 'Quality control', 'services.quality.text': 'Professional feedback on quality as an important part of our daily communication with growers.',
    'services.request': 'Request information', 'services.photos.label': 'Photos', 'services.photos.title': 'Our services in pictures', 'services.cta.title': 'Interested in our services?', 'services.cta.text': 'Contact us for more information',
    'location.page.title': 'Location', 'location.page.breadcrumb': 'Location', 'location.label': 'Our location', 'location.title': 'FloraHolland Aalsmeer', 'location.subtitle': 'Located at the world\'s largest flower auction',
    'location.visit.title': 'Visit address', 'location.postal.title': 'Postal address', 'location.contact.title': 'Contact', 'location.maps': 'View on Google Maps',
    'people.page.title': 'People', 'people.page.breadcrumb': 'People', 'people.label': 'Our team', 'people.title': 'Meet our team', 'people.subtitle': 'The people behind Alkemade International B.V.',
    'clients.page.title': 'Clients', 'clients.page.breadcrumb': 'Clients', 'clients.label': 'Our clients', 'clients.title': 'Satisfied clients worldwide', 'clients.subtitle': 'We work with growers and partners around the world',
    'page.gallery': 'Gallery', 'breadcrumb.home': 'Home',
    'partners.section.label': 'Our partners', 'partners.section.title': 'Cooperation partners', 'partners.section.subtitle': 'We work with leading companies in the flower industry',
    'partners.cooperation.label': 'Cooperation', 'partners.cooperation.title': 'Why become a partner?', 'partners.cooperation.text': 'We offer a complete service package not only for growers, but also for third parties (flower exporters, flower wholesalers, retailers) with focus on perfect supply chain management.',
    'partners.service.unpack': 'Unpacking and processing', 'partners.service.auction': 'Auction preparation', 'partners.service.quality': 'Quality feedback', 'partners.service.financial': 'Financial reporting at shipment level', 'partners.service.transport': 'Transport to auction locations', 'partners.service.sales': 'Direct sales support', 'partners.service.bouquets': 'Bouquets and mono bunches for supermarkets',
    'partners.cta.also': 'Would you also like to become a partner?', 'partners.cta.text2': 'Contact us for a sustainable partnership',
    'people.role.gm': 'General Manager', 'people.role.ops': 'Manager Operations', 'people.role.account': 'Account Manager', 'people.role.junior': 'Junior Account Manager', 'people.role.box': 'Box Manager', 'people.role.admin': 'Administration',
    'people.cta.title': 'Would you like to be part of our team?', 'people.cta.text': 'Contact us for career opportunities',
    'news.subtitle': 'Stay informed about the latest developments at Alkemade Flowers International.',
    'news.article.date': 'February 2026', 'news.article.title': 'New service: Mono bunches and band bouquets', 'news.article.excerpt': 'We are starting in February 2026 with making mono bunches and band bouquets for growers and/or third parties.',
    'news.modal.title': 'New service: Mono bunches and band bouquets', 'news.modal.text': 'We are starting in February 2026 with making mono bunches and band bouquets for growers and/or third parties.',
    'clients.global.title': 'Global partners', 'clients.global.text': 'We work with partners from different countries. Our clients range from local growers to large international traders.',
    'clients.stats.title': 'Our statistics', 'clients.stats.text': '✓ 50+ Partners worldwide<br>✓ 27+ Years of experience<br>✓ 100% Customer satisfaction<br>✓ Sustainable partnerships',
    'clients.service.title': 'Customer service', 'clients.service.text': 'We offer personal service and support to all our clients. Sustainable relationships are central to us.',
    'clients.cta.title': 'Would you also like to become a partner?', 'clients.cta.text': 'Contact us for a sustainable partnership',
    'contact.success.title': 'Thank you for your message!', 'contact.success.text': 'We will contact you as soon as possible.', 'contact.success.urgent': 'If it is urgent, you can reach us', 'contact.success.phone': 'at this number',
    'location.cta.title': 'Would you like to visit?', 'location.cta.text': 'Contact us to make an appointment',
    'gallery.location.label': 'Our location', 'gallery.location.title': 'Location', 'gallery.location.subtitle': 'Located at FloraHolland Aalsmeer, the world\'s largest flower auction',
    'gallery.images.label': 'Images', 'gallery.images.title': 'Discover our company', 'gallery.images.subtitle': 'A behind-the-scenes look at Alkemade Flowers International'
  },
  es: {
    'nav.home': 'Inicio', 'nav.about': 'Sobre nosotros', 'nav.gallery': 'Galería', 'nav.gallery.location': 'Ubicación', 'nav.gallery.people': 'Personas', 'nav.gallery.products': 'Servicios', 'nav.gallery.clients': 'Clientes', 'nav.partners': 'Socios', 'nav.news': 'Noticias', 'nav.contact': 'Contacto', 'nav.portal': 'Portal de enlaces',
    'hero.label': 'FloraHolland Aalsmeer, Países Bajos', 'hero.title': 'Su Socio en el Negocio de la <span>Floricultura</span>', 'hero.text': 'Alkemade International BV se especializa en procesamiento, marketing y logística de flores cortadas frescas de todo el mundo. Desde 1997, hemos construido asociaciones sostenibles.', 'hero.btn.discover': 'Descubrir más', 'hero.btn.contact': 'Contáctenos',
    'about.title': 'Alkemade International B.V.', 'about.text1': 'Alkemade International BV es una empresa establecida, especializada en procesamiento, marketing y logística de flores cortadas frescas de todo el mundo, ubicada en FloraHolland Aalsmeer, Países Bajos.', 'about.text2': 'La empresa fue fundada en 1997.', 'about.text3': 'Ofrecemos un paquete completo de servicios para productores, exportadores, mayoristas minoristas. El paquete de servicios consiste en desempaque y retail.', 'about.stat1': 'Años de experiencia', 'about.stat2': 'Socios en todo el mundo', 'about.stat3': 'Garantía de calidad',
    'services.label': 'Nuestros servicios', 'services.title': 'Gama completa de servicios para productores', 'services.subtitle': 'No solo para productores, sino también para terceros (exportadores de flores, mayoristas de flores, minoristas).',
    'services.card.unpack.title': 'Desempaque y Procesamiento', 'services.card.unpack.text': 'Desempaque y procesamiento profesional, incluidos ramos y mono bunches para supermercados.',
    'services.card.auction.title': 'Preparación para Subasta', 'services.card.auction.text': 'Preparación completa para subasta para una presentación óptima en la subasta.',
    'services.card.quality.title': 'Retroalimentación de Calidad', 'services.card.quality.text': 'Retroalimentación profesional como parte de la comunicación diaria.',
    'services.card.financial.title': 'Informes Financieros', 'services.card.financial.text': 'Resultados detallados a nivel de envío.',
    'services.card.transport.title': 'Transporte', 'services.card.transport.text': 'Transporte a ubicaciones de subasta con cadena de frío gestionada.',
    'services.card.sales.title': 'Soporte de Ventas Directas', 'services.card.sales.text': 'Ventas a exportadores o a través de nuestro mayorista.',
    'mission.label': 'Nuestra visión', 'mission.title': 'Gestión Perfecta de la Cadena de Suministro', 'mission.text': 'En el mundo cambiante en el que operamos, notamos que la gestión perfecta de la cadena de suministro es cada vez más crucial. El software integrado basado en web y una cadena de frío bien gestionada son elementos esenciales de nuestro negocio.',
    'cta.title': '¿Quiere colaborar?', 'cta.text': 'Contáctenos para una asociación sostenible en el sector de la floricultura', 'cta.btn': 'Contáctenos',
    'footer.nav': 'Navegación', 'footer.gallery': 'Galería', 'footer.contact': 'Contacto', 'footer.newsletter': 'Boletín', 'footer.newsletter.placeholder': 'Su correo electrónico', 'footer.copyright': '© Alkemade International B.V. 2026', 'footer.privacy': 'Política de Privacidad', 'footer.disclaimer': 'Aviso Legal', 'footer.terms': 'Condiciones Generales',
    'footer.brand.text': 'Su Socio en el Negocio de la Floricultura. Especializado en procesamiento, marketing y logística de flores cortadas frescas desde 1997.',
    'footer.contact.location': 'FloraHolland Aalsmeer:', 'footer.contact.tel': 'Tel:', 'footer.contact.email': 'Email:',
    'page.about': 'Sobre nosotros', 'page.gallery': 'Galería', 'page.partners': 'Socios', 'page.news': 'Noticias', 'page.contact': 'Contacto', 'page.portal': 'Portal de enlaces',
    'gallery.all': 'Todos', 'gallery.location': 'Ubicación', 'gallery.people': 'Personas', 'gallery.products': 'Servicios', 'gallery.clients': 'Clientes',
    'contact.title': 'Contáctenos', 'contact.visit.nl': 'FloraHolland Aalsmeer', 'contact.postal': 'Dirección postal', 'contact.phone.nl': 'Teléfono', 'contact.email': 'Correo electrónico',
    'contact.form.title': 'Envíenos un mensaje', 'contact.form.name': 'Nombre', 'contact.form.company': 'Empresa', 'contact.form.email': 'Correo electrónico', 'contact.form.phone': 'Número de teléfono', 'contact.form.subject': 'Asunto', 'contact.form.message': 'Mensaje', 'contact.form.submit': 'Enviar',
    'news.label': 'Actualizaciones', 'news.title': 'Últimas noticias', 'news.readmore': 'Leer más',
    'partners.label': 'Nuestra red', 'partners.title': 'Nuestros Socios', 'partners.cta.title': 'Conviértase en socio', 'partners.cta.text': '¿Interesado en una asociación con Alkemade Flowers? Contáctenos.',
    'portal.label': 'Recursos', 'portal.title': 'Enlaces útiles', 'portal.docs.label': 'Documentos', 'portal.docs.title': 'Documentos importantes', 'portal.help.title': '¿Necesita ayuda?', 'portal.help.text': '¿No puede encontrar lo que busca? Contáctenos.',
    'about.history.label': 'Nuestra historia', 'about.history.title': 'La historia de Alkemade International B.V.', 'about.history.subtitle': 'De humildes comienzos a socio confiable en la cadena internacional de flores', 'about.history.readmore': 'Lea más sobre nuestra historia',
    'about.history.1997.title': 'Fundación', 'about.history.1997.text1': 'Alkemade International B.V. fue fundada en 1997 por Maarten Alkemade, junto con su esposa Claudia, quien era diseñadora independiente de arreglos florales en ese momento.', 'about.history.1997.text2': 'El hermano de Maarten, Peter, inicialmente estuvo involucrado a tiempo parcial en la empresa, pero pronto se convirtió en tiempo completo y también se convirtió en accionista. Las primeras actividades consistieron en importar flores de Colombia y Ecuador. Estas actividades se gestionaron desde una oficina en casa y una sala de procesamiento en el box de J.P. Hogewoning.',
    'about.history.1998.title': 'Primer crecimiento', 'about.history.1998.text1': 'Pronto se ocupó un edificio de oficinas en la plaza del mercado en Uithoorn. Alrededor del cambio de siglo, también se puso en uso una sala de procesamiento propia en la subasta de flores en Aalsmeer.', 'about.history.1998.text2': 'La estrecha cooperación con la firma Hogewoning continuó: Alkemade importaba flores y manejaba el manejo, mientras que Hogewoning era responsable de las ventas a empresas exportadoras en las diversas subastas de flores en los Países Bajos. En América del Sur se nombró un agente propio.',
    'about.history.2004.title': 'Nueva sala de procesamiento', 'about.history.2004.text': 'En 2004 se ocupó una nueva sala de procesamiento en el primer piso de la subasta de flores en Aalsmeer. Además de importar y revender directamente flores, se iniciaron actividades extensas de manejo. Entre otras cosas, grandes cantidades de gypsophila se transportaron por contenedor desde Ecuador y se prepararon para subasta para varios productores.',
    'about.history.2009.title': 'Mayor expansión', 'about.history.2009.text1': 'Durante este período, se ocupó nuevamente una nueva y más grande ubicación, donde se encuentra la sede hasta el día de hoy. Debido al mayor crecimiento y falta de espacio, se puso en uso un segundo box en 2012.', 'about.history.2009.text2': 'Las actividades de manejo se expandieron aún más, lo que llevó a una creciente base de clientes de productores de Israel, Europa y África, entre otros. Alkemade se desarrolló como un eslabón confiable y estable dentro de la cadena internacional de flores durante estos años.',
    'about.history.2020.title': 'Tercera ubicación', 'about.history.2020.text': 'En enero de 2020 se puso en uso una tercera ubicación en Aalsmeer. La empresa creció con los tiempos y, además de importación y manejo, se enfocó cada vez más en ventas directas para sus productores, en cooperación continua con Hogewoning.',
    'about.history.2022.title': 'Vendido a JP Hogewoning', 'about.history.2022.text': 'En 2022, Alkemade International B.V. fue vendida a JP Hogewoning.',
    'about.history.2024.title': 'Nueva sede', 'about.history.2024.text': 'En 2024, todas las ubicaciones se fusionaron en una nueva sede. Se realizaron importantes inversiones en nuevos socios y líneas.',
    'about.history.2026.title': 'Nuevo servicio: Mono bunches y ramos de banda', 'about.history.2026.text': 'Comenzamos en febrero de 2026 con la fabricación de mono bunches y ramos de banda para productores y/o terceros.',
    'services.page.title': 'Servicios', 'services.page.breadcrumb': 'Servicios', 'services.assortment.label': 'Nuestro surtido', 'services.assortment.title': 'Flores cortadas frescas de todo el mundo', 'services.assortment.subtitle': 'Procesamos y comercializamos una amplia gama de flores de alta calidad',
    'services.unpack.title': 'Desempaque y Procesamiento', 'services.unpack.text': 'Desempaque y procesamiento profesional de flores a la llegada, incluido el procesamiento de ramos y mono bunches para supermercados.',
    'services.auction.title': 'Preparación para subasta', 'services.auction.text': 'Preparación completa para subasta para que sus flores se presenten de manera óptima en la subasta.',
    'services.quality.title': 'Control de calidad', 'services.quality.text': 'Retroalimentación profesional sobre la calidad como parte importante de nuestra comunicación diaria con los productores.',
    'services.request': 'Solicitar información', 'services.photos.label': 'Fotos', 'services.photos.title': 'Nuestros servicios en imágenes', 'services.cta.title': '¿Interesado en nuestros servicios?', 'services.cta.text': 'Contáctenos para más información',
    'location.page.title': 'Ubicación', 'location.page.breadcrumb': 'Ubicación', 'location.label': 'Nuestra ubicación', 'location.title': 'FloraHolland Aalsmeer', 'location.subtitle': 'Ubicado en la subasta de flores más grande del mundo',
    'location.visit.title': 'Dirección de visita', 'location.postal.title': 'Dirección postal', 'location.contact.title': 'Contacto', 'location.maps': 'Ver en Google Maps',
    'people.page.title': 'Personas', 'people.page.breadcrumb': 'Personas', 'people.label': 'Nuestro equipo', 'people.title': 'Conozca a nuestro equipo', 'people.subtitle': 'Las personas detrás de Alkemade International B.V.',
    'clients.page.title': 'Clientes', 'clients.page.breadcrumb': 'Clientes', 'clients.label': 'Nuestros clientes', 'clients.title': 'Clientes satisfechos en todo el mundo', 'clients.subtitle': 'Trabajamos con productores y socios en todo el mundo',
    'page.gallery': 'Galería', 'breadcrumb.home': 'Inicio',
    'partners.section.label': 'Nuestros socios', 'partners.section.title': 'Socios de cooperación', 'partners.section.subtitle': 'Trabajamos con empresas líderes en la industria de las flores',
    'partners.cooperation.label': 'Cooperación', 'partners.cooperation.title': '¿Por qué convertirse en socio?', 'partners.cooperation.text': 'Ofrecemos un paquete completo de servicios no solo para productores, sino también para terceros (exportadores de flores, mayoristas de flores, minoristas) con enfoque en la gestión perfecta de la cadena de suministro.',
    'partners.service.unpack': 'Desempaque y procesamiento', 'partners.service.auction': 'Preparación para subasta', 'partners.service.quality': 'Retroalimentación de calidad', 'partners.service.financial': 'Informes financieros a nivel de envío', 'partners.service.transport': 'Transporte a ubicaciones de subasta', 'partners.service.sales': 'Soporte de ventas directas', 'partners.service.bouquets': 'Ramos y mono bunches para supermercados',
    'partners.cta.also': '¿También le gustaría convertirse en socio?', 'partners.cta.text2': 'Contáctenos para una asociación sostenible',
    'people.role.gm': 'Gerente General', 'people.role.ops': 'Gerente de Operaciones', 'people.role.account': 'Gerente de Cuentas', 'people.role.junior': 'Gerente de Cuentas Junior', 'people.role.box': 'Jefe de Box', 'people.role.admin': 'Administración',
    'people.cta.title': '¿Le gustaría ser parte de nuestro equipo?', 'people.cta.text': 'Contáctenos para oportunidades de carrera',
    'news.subtitle': 'Manténgase informado sobre los últimos desarrollos en Alkemade Flowers International.',
    'news.article.date': 'Febrero 2026', 'news.article.title': 'Nuevo servicio: Mono bunches y ramos de banda', 'news.article.excerpt': 'Comenzamos en febrero de 2026 con la fabricación de mono bunches y ramos de banda para productores y/o terceros.',
    'news.modal.title': 'Nuevo servicio: Mono bunches y ramos de banda', 'news.modal.text': 'Comenzamos en febrero de 2026 con la fabricación de mono bunches y ramos de banda para productores y/o terceros.',
    'clients.global.title': 'Socios globales', 'clients.global.text': 'Trabajamos con socios de diferentes países. Nuestros clientes van desde productores locales hasta grandes comerciantes internacionales.',
    'clients.stats.title': 'Nuestras estadísticas', 'clients.stats.text': '✓ 50+ Socios en todo el mundo<br>✓ 27+ Años de experiencia<br>✓ 100% Satisfacción del cliente<br>✓ Asociaciones sostenibles',
    'clients.service.title': 'Servicio al cliente', 'clients.service.text': 'Ofrecemos servicio personal y soporte a todos nuestros clientes. Las relaciones sostenibles son centrales para nosotros.',
    'clients.cta.title': '¿También le gustaría convertirse en socio?', 'clients.cta.text': 'Contáctenos para una asociación sostenible',
    'contact.success.title': '¡Gracias por su mensaje!', 'contact.success.text': 'Nos pondremos en contacto con usted lo antes posible.', 'contact.success.urgent': 'Si es urgente, puede contactarnos', 'contact.success.phone': 'en este número',
    'location.cta.title': '¿Le gustaría visitarnos?', 'location.cta.text': 'Contáctenos para hacer una cita',
    'gallery.location.label': 'Nuestra ubicación', 'gallery.location.title': 'Ubicación', 'gallery.location.subtitle': 'Ubicado en FloraHolland Aalsmeer, la subasta de flores más grande del mundo',
    'gallery.images.label': 'Imágenes', 'gallery.images.title': 'Descubra nuestra empresa', 'gallery.images.subtitle': 'Una mirada detrás de escena en Alkemade Flowers International'
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
      if (element.tagName === 'INPUT' && element.type !== 'submit') {
        element.placeholder = translations[lang][key];
      } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
        element.textContent = translations[lang][key];
      } else {
        // Check if translation contains HTML
        const translation = translations[lang][key];
        if (translation.includes('<')) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    }
  });
}

window.setLanguage = setLanguage;
