# HTML Email Oplossing - Zonder Template Setup

## Het Probleem
FormSubmit ondersteunt HTML emails niet goed via AJAX - het wordt als code verstuurd in plaats van als gerenderde HTML.

## De Oplossing
Je hebt 2 simpele opties (beide gratis, 5 minuten setup):

### Optie 1: Mailgun (Aanbevolen - Simpelst)
1. Ga naar https://www.mailgun.com/
2. Maak gratis account aan (1000 emails/maand gratis)
3. Verifieer je email
4. Ga naar "Sending" > "API Keys"
5. Kopieer je API key
6. Ga naar "Sending" > "Domains"
7. Noteer je domain (bijv. "sandbox.mailgun.org" of je eigen domain)
8. Open `contact.html` regel ~384
9. Vervang `YOUR_MAILGUN_API_KEY` met je API key
10. Vervang `sandbox.mailgun.org` met je domain

**Klaar!** HTML emails worden nu correct verzonden met mooi design.

### Optie 2: SendGrid (Alternatief)
1. Ga naar https://sendgrid.com/
2. Maak gratis account aan (100 emails/dag gratis)
3. Verifieer je email
4. Ga naar "Settings" > "API Keys"
5. Maak nieuwe API key aan
6. Kopieer je API key
7. Open `contact.html` en voeg SendGrid code toe

## Huidige Status
De code is klaar voor HTML emails, je hoeft alleen een API key toe te voegen van Mailgun of SendGrid.

**Zonder API key:** De bevestigingsmail wordt als text email verstuurd (geen design).

**Met API key:** De bevestigingsmail wordt als mooie HTML email verstuurd met Alkemade design.



