# EmailJS Quick Setup - 5 Minuten

## Stap 1: Account aanmaken (2 minuten)
1. Ga naar https://www.emailjs.com/
2. Klik "Sign Up" (gratis)
3. Maak account aan met je email

## Stap 2: Email Service toevoegen (1 minuut)
1. Klik op "Email Services" in het menu
2. Klik "Add New Service"
3. Kies "Gmail" (of je email provider)
4. Log in met je Gmail account
5. Noteer je **Service ID** (bijv. "service_abc123")

## Stap 3: Template aanmaken (2 minuten)
1. Klik op "Email Templates"
2. Klik "Create New Template"
3. Template naam: "Bevestigingsmail"
4. **To Email:** `{{to_email}}`
5. **Subject:** `Bevestiging: Uw bericht is ontvangen - Alkemade Flowers`
6. **Content:** Plak de HTML template hieronder:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;padding:20px;">
<tr>
<td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;max-width:600px;width:100%;">
<tr>
<td style="background-color:#184f8c;padding:30px 20px;text-align:center;">
<h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:300;letter-spacing:1px;font-family:Arial,sans-serif;">Alkemade Flowers</h1>
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:15px;">
<tr><td align="center"><table width="60" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:3px;background-color:#e9c437;"></td></tr></table></td></tr>
</table>
</td>
</tr>
<tr>
<td style="padding:40px 30px;">
<h2 style="margin:0 0 20px 0;color:#0a0a0a;font-size:24px;font-weight:400;font-family:Arial,sans-serif;">Bedankt voor uw bericht</h2>
<p style="margin:0 0 15px 0;color:#555555;font-size:16px;line-height:1.6;font-family:Arial,sans-serif;">Beste {{to_name}},</p>
<p style="margin:0 0 25px 0;color:#555555;font-size:16px;line-height:1.6;font-family:Arial,sans-serif;">Bedankt voor uw bericht via de Alkemade Flowers website. Wij hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op.</p>
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fafafa;border-left:4px solid #e9c437;margin:30px 0;">
<tr>
<td style="padding:25px;">
<h3 style="margin:0 0 20px 0;color:#0a0a0a;font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:0.5px;font-family:Arial,sans-serif;">Uw ingevulde gegevens</h3>
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;"><strong style="color:#0a0a0a;font-size:14px;font-family:Arial,sans-serif;">Naam:</strong> <span style="color:#555555;font-size:14px;margin-left:10px;font-family:Arial,sans-serif;">{{name}}</span></td></tr>
{{#company}}<tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;"><strong style="color:#0a0a0a;font-size:14px;font-family:Arial,sans-serif;">Bedrijf:</strong> <span style="color:#555555;font-size:14px;margin-left:10px;font-family:Arial,sans-serif;">{{company}}</span></td></tr>{{/company}}
{{#phone}}<tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;"><strong style="color:#0a0a0a;font-size:14px;font-family:Arial,sans-serif;">Telefoon:</strong> <span style="color:#555555;font-size:14px;margin-left:10px;font-family:Arial,sans-serif;">{{phone}}</span></td></tr>{{/phone}}
<tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;"><strong style="color:#0a0a0a;font-size:14px;font-family:Arial,sans-serif;">E-mail:</strong> <span style="color:#555555;font-size:14px;margin-left:10px;font-family:Arial,sans-serif;">{{email}}</span></td></tr>
<tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;"><strong style="color:#0a0a0a;font-size:14px;font-family:Arial,sans-serif;">Onderwerp:</strong> <span style="color:#555555;font-size:14px;margin-left:10px;font-family:Arial,sans-serif;">{{subject}}</span></td></tr>
<tr><td style="padding:15px 0 0 0;"><strong style="color:#0a0a0a;font-size:14px;font-family:Arial,sans-serif;display:block;margin-bottom:8px;">Uw bericht:</strong><p style="margin:0;color:#555555;font-size:14px;line-height:1.6;white-space:pre-wrap;font-family:Arial,sans-serif;">{{message}}</p></td></tr>
</table>
</td>
</tr>
</table>
<p style="margin:25px 0 0 0;color:#555555;font-size:16px;line-height:1.6;font-family:Arial,sans-serif;">Wij nemen zo snel mogelijk contact met u op.</p>
</td>
</tr>
<tr>
<td style="background-color:#0a0a0a;padding:30px 20px;text-align:center;">
<p style="margin:0 0 10px 0;color:#ffffff;font-size:16px;font-weight:500;font-family:Arial,sans-serif;">Alkemade International B.V.</p>
<p style="margin:0 0 8px 0;color:#e9c437;font-size:14px;font-family:Arial,sans-serif;">alkemade@nl-alkemade.com</p>
<p style="margin:0;color:#b0b0b0;font-size:14px;font-family:Arial,sans-serif;">+31-297-567148</p>
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
<tr><td align="center"><table width="40" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:2px;background-color:#e9c437;"></td></tr></table></td></tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
```

7. Klik "Save"
8. Noteer je **Template ID** (bijv. "template_xyz789")

## Stap 4: Public Key ophalen (30 seconden)
1. Klik op "Account" > "General"
2. Scroll naar "API Keys"
3. Kopieer je **Public Key** (bijv. "abc123xyz")

## Stap 5: Code updaten (30 seconden)
Open `contact.html` en zoek naar regel ~315-317
Vervang:
- `YOUR_SERVICE_ID` → je Service ID
- `YOUR_TEMPLATE_ID` → je Template ID  
- `YOUR_PUBLIC_KEY` → je Public Key

## Klaar! 🎉
Test het formulier - je krijgt nu een mooie HTML email met design!

