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
app.use(express.static(__dirname));

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

    // Email naar Caesar
    const mailToCaesar = {
      from: process.env.EMAIL_USER || 'alkemade@nl-alkemade.com',
      to: 'Caesar.schoorl@gmail.com',
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

    // Verstuur beide emails
    const [result1, result2] = await Promise.all([
      transporter.sendMail(mailToCaesar),
      transporter.sendMail(confirmationMail)
    ]);

    res.json({ 
      success: true, 
      message: 'Email succesvol verzonden',
      messageId: result1.messageId
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

// Serve static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, req.path === '/' ? 'index.html' : req.path));
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
  console.log(`Zorg ervoor dat je .env bestand correct is geconfigureerd voor email verzending`);
});

