# HTML Email Bevestigingsmail Fix

## Het Probleem
FormSubmit ondersteunt HTML emails niet goed via AJAX - het wordt als plain text verstuurd in plaats van als gerenderde HTML.

## Oplossing: EmailJS gebruiken voor HTML emails

### Stap 1: Maak gratis EmailJS account
1. Ga naar https://www.emailjs.com/
2. Maak een gratis account aan
3. Log in

### Stap 2: Email Service toevoegen
1. Ga naar "Email Services"
2. Klik "Add New Service"
3. Kies Gmail (of je email provider)
4. Volg de instructies
5. Noteer je **Service ID**

### Stap 3: Template aanmaken
1. Ga naar "Email Templates"
2. Klik "Create New Template"
3. Template naam: "Bevestigingsmail Alkemade"
4. To: `{{to_email}}`
5. Subject: `Bevestiging: Uw bericht is ontvangen - Alkemade Flowers`
6. Content: Gebruik de HTML template uit contact.html
7. Noteer je **Template ID**

### Stap 4: Public Key ophalen
1. Ga naar "Account" > "General"
2. Scroll naar "API Keys"
3. Kopieer je **Public Key**

### Stap 5: Code updaten
Open `contact.html` en vervang:
- `YOUR_SERVICE_ID` met je Service ID
- `YOUR_TEMPLATE_ID` met je Template ID
- `YOUR_PUBLIC_KEY` met je Public Key

## Alternatief: Gebruik een andere service
- SendGrid (gratis tier)
- Mailgun (gratis tier)
- Resend (gratis tier)

Deze services ondersteunen HTML emails veel beter dan FormSubmit.

