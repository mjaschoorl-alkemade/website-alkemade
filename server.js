const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email configuration
// Configureer deze in .env bestand of pas hier aan
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true voor 465, false voor andere poorten
  auth: {
    user: process.env.EMAIL_USER, // Je email adres
    pass: process.env.EMAIL_PASS  // Je email wachtwoord of app password
  }
});

// Verify email configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('Email configuratie fout:', error);
    console.log('Zorg ervoor dat EMAIL_USER en EMAIL_PASS correct zijn ingesteld in .env');
  } else {
    console.log('Email server is klaar om berichten te verzenden');
  }
});

// Email validatie functie
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, subject, message } = req.body;

    // Validatie
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Vul alle verplichte velden in' 
      });
    }

    // Email format validatie
    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Ongeldig emailadres formaat' 
      });
    }

    // Email naar Alkemade
    const mailToAlkemade = {
      from: process.env.EMAIL_USER || 'alkemade@nl-alkemade.com',
      to: 'alkemade@nl-alkemade.com',
      replyTo: email,
      subject: `Nieuw bericht via Alkemade website: ${subject}`,
      text: `Nieuw bericht via Alkemade website

Naam: ${name}
Bedrijf: ${company || 'Niet opgegeven'}
E-mail: ${email}
Telefoon: ${phone || 'Niet opgegeven'}
Onderwerp: ${subject}

Bericht:
${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5530;">Nieuw bericht via Alkemade website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Naam:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Bedrijf:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || 'Niet opgegeven'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>E-mail:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Telefoon:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Niet opgegeven'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Onderwerp:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <strong>Bericht:</strong>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    };

    // Bevestigingsmail naar gebruiker
    const confirmationMail = {
      from: process.env.EMAIL_USER || 'alkemade@nl-alkemade.com',
      to: email,
      subject: 'Bevestiging: Uw bericht is ontvangen - Alkemade Flowers',
      text: `Beste ${name || 'klant'},

Bedankt voor uw bericht via de Alkemade Flowers website.

Wij hebben uw bericht met onderwerp "${subject}" ontvangen en nemen zo snel mogelijk contact met u op.

Met vriendelijke groet,
Alkemade International B.V.
alkemade@nl-alkemade.com
+31-297-567148`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5530;">Bedankt voor uw bericht</h2>
          <p>Beste ${name || 'klant'},</p>
          <p>Bedankt voor uw bericht via de Alkemade Flowers website.</p>
          <p>Wij hebben uw bericht met onderwerp "<strong>${subject}</strong>" ontvangen en nemen zo snel mogelijk contact met u op.</p>
          <p>Met vriendelijke groet,<br>
          <strong>Alkemade International B.V.</strong><br>
          alkemade@nl-alkemade.com<br>
          +31-297-567148</p>
        </div>
      `
    };

    // Verstuur email naar Alkemade (verplicht)
    const result1 = await transporter.sendMail(mailToAlkemade);
    
    // Verstuur bevestigingsmail naar gebruiker (optioneel - faalt niet als dit mislukt)
    let confirmationSent = false;
    let confirmationError = null;
    
    try {
      // Alleen versturen als email adres geldig lijkt (heeft een geldig TLD)
      const emailDomain = email.split('@')[1];
      const validTLDs = ['com', 'net', 'org', 'nl', 'be', 'de', 'fr', 'uk', 'co', 'io', 'eu', 'info', 'biz'];
      const hasValidTLD = validTLDs.some(tld => emailDomain && emailDomain.toLowerCase().endsWith('.' + tld));
      
      if (hasValidTLD) {
        await transporter.sendMail(confirmationMail);
        confirmationSent = true;
      } else {
        console.log(`Bevestigingsmail overgeslagen voor ${email} - ongeldig domein`);
      }
    } catch (confError) {
      // Log de error maar laat het niet crashen
      console.error('Bevestigingsmail kon niet worden verzonden:', confError.message);
      confirmationError = confError.message;
      // De hoofdmail is al verzonden, dus we gaan door
    }

    res.json({ 
      success: true, 
      message: 'Email succesvol verzonden',
      messageId: result1.messageId,
      confirmationSent: confirmationSent,
      ...(confirmationError && { confirmationWarning: 'Bevestigingsmail kon niet worden verzonden' })
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Er is een fout opgetreden bij het verzenden van de email',
      details: error.message
    });
  }
});

// Serve static files (alleen voor niet-API routes)
app.use((req, res, next) => {
  // Skip static files voor API routes
  if (req.path.startsWith('/api/')) {
    return next();
  }
  next();
});

// Serve static files
app.use(express.static(__dirname));

// Fallback: serve index.html voor alle andere GET routes
app.get('*', (req, res) => {
  // Skip API routes
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ success: false, error: 'API endpoint niet gevonden' });
  }
  res.sendFile(path.join(__dirname, req.path === '/' ? 'index.html' : req.path));
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
  console.log(`Zorg ervoor dat je .env bestand correct is geconfigureerd voor email verzending`);
});

