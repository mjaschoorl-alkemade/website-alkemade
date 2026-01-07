# EmailJS Setup Instructies

Om bevestigingsmails te kunnen versturen vanuit alkemade@nl-alkemade.com, moet je EmailJS configureren:

## Stap 1: Account aanmaken
1. Ga naar https://www.emailjs.com/
2. Maak een gratis account aan
3. Log in op je dashboard

## Stap 2: Email Service toevoegen
1. Ga naar "Email Services" in het menu
2. Klik op "Add New Service"
3. Kies je email provider (Gmail, Outlook, etc.)
4. Volg de instructies om je email account te verbinden
5. Noteer je **Service ID**

## Stap 3: Templates aanmaken

### Template 1: Voor Alkemade
1. Ga naar "Email Templates"
2. Klik op "Create New Template"
3. Template naam: "Contact Form - Alkemade"
4. To: `alkemade@nl-alkemade.com`
5. Subject: `Nieuw bericht via website: {{subject}}`
6. Content:
```
Nieuw bericht via Alkemade website

Naam: {{from_name}}
Bedrijf: {{company}}
E-mail: {{from_email}}
Telefoon: {{phone}}
Onderwerp: {{subject}}

Bericht:
{{message}}
```
7. Noteer je **Template ID**

### Template 2: Voor Bevestiging
1. Klik op "Create New Template"
2. Template naam: "Contact Form - Confirmation"
3. To: `{{to_email}}`
4. From Name: `Alkemade International B.V.`
5. From Email: `alkemade@nl-alkemade.com`
6. Reply To: `alkemade@nl-alkemade.com`
7. Subject: `Bevestiging: Uw bericht is ontvangen - Alkemade Flowers`
8. Content:
```
Beste {{to_name}},

Bedankt voor uw bericht via de Alkemade Flowers website.

Wij hebben uw bericht met onderwerp "{{subject}}" ontvangen en nemen zo snel mogelijk contact met u op.

Met vriendelijke groet,
Alkemade International B.V.
alkemade@nl-alkemade.com
+31-297-567148
```
9. Noteer je **Template ID**

## Stap 4: Public Key ophalen
1. Ga naar "Account" > "General"
2. Scroll naar "API Keys"
3. Kopieer je **Public Key**

## Stap 5: Code updaten
Open `contact.html` en vervang in de JavaScript code:
- `YOUR_SERVICE_ID` met je Service ID
- `YOUR_TEMPLATE_ID_ALKEMADE` met je Alkemade Template ID
- `YOUR_TEMPLATE_ID_CONFIRMATION` met je Confirmation Template ID
- `YOUR_PUBLIC_KEY` met je Public Key

## Testen
1. Vul het contactformulier in
2. Verstuur het formulier
3. Controleer of je beide emails ontvangt:
   - Een email naar alkemade@nl-alkemade.com
   - Een bevestigingsmail naar het ingevulde emailadres



