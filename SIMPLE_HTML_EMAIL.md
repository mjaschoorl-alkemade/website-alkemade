# Simpele HTML Email Oplossing - Zonder Template Setup

## Het Probleem
FormSubmit ondersteunt HTML emails niet goed via AJAX - het wordt als code verstuurd in plaats van als gerenderde HTML.

## De Oplossing: Gebruik een simpele service die HTML emails wel goed ondersteunt

### Optie 1: Mailgun (gratis, 5 minuten setup)
1. Ga naar https://www.mailgun.com/
2. Maak gratis account aan
3. Verifieer je email
4. Ga naar "Sending" > "API Keys"
5. Kopieer je API key
6. Vervang in contact.html de Mailgun code met je API key

### Optie 2: SendGrid (gratis, 5 minuten setup)
1. Ga naar https://sendgrid.com/
2. Maak gratis account aan
3. Verifieer je email
4. Ga naar "Settings" > "API Keys"
5. Maak nieuwe API key aan
6. Kopieer je API key
7. Vervang in contact.html de SendGrid code met je API key

### Optie 3: Gebruik je eigen email server
Als je een eigen email server hebt, kan je de HTML email direct versturen via SMTP.

## Huidige Status
De code is klaar, je hoeft alleen een API key toe te voegen van een van bovenstaande services.

