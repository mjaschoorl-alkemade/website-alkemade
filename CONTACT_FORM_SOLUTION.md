# Contact Form Oplossing

Het formulier verstuurt nu:
1. **Email naar bedrijf**: alkemade@nl-alkemade.com met alle formuliergegevens
2. **Bevestigingsmail naar gebruiker**: met een overzicht van alle ingevulde gegevens

## Huidige Implementatie

Gebruikt FormSubmit.co API - werkt direct vanuit de browser zonder backend.

## Als FormSubmit niet werkt:

### Optie 1: Gebruik EmailJS (gratis, betrouwbaar)
1. Maak gratis account op https://www.emailjs.com/
2. Setup email service (Gmail)
3. Maak 2 templates:
   - Template 1: Voor bedrijf (alkemade@nl-alkemade.com)
   - Template 2: Voor bevestiging (naar gebruiker)
4. Vervang de code in contact.html met EmailJS implementatie

### Optie 2: Gebruik Resend (gratis tier)
1. Maak account op https://resend.com
2. Verkrijg API key
3. Gebruik Resend API voor email verzending

### Optie 3: Gebruik SendGrid (gratis tier)
1. Maak account op https://sendgrid.com
2. Verkrijg API key
3. Gebruik SendGrid API

## Testen

Test het formulier door:
1. Alle velden in te vullen
2. Formulier te verzenden
3. Controleren of je email ontvangt op alkemade@nl-alkemade.com
4. Controleren of gebruiker bevestigingsmail ontvangt met alle gegevens

