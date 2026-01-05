const nodemailer = require('nodemailer');

// Helper functie om HTML te escapen (XSS preventie)
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}

// Helper functie om tekst te trimmen en schoon te maken
function cleanInput(input) {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/\s+/g, ' ').substring(0, 1000);
}

// Verbeterde email validatie
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim()) && email.length <= 254;
}

// Veilige transporter aanmaken met fallbacks
function createTransporter() {
  try {
    const config = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || ''
      },
      // Timeout instellingen
      connectionTimeout: 10000, // 10 seconden
      greetingTimeout: 10000,
      socketTimeout: 10000,
      // Retry configuratie
      pool: true,
      maxConnections: 1,
      maxMessages: 3
    };

    // Valideer configuratie
    if (!config.auth.user || !config.auth.pass) {
      throw new Error('Email configuratie ontbreekt');
    }

    return nodemailer.createTransport(config);
  } catch (error) {
    console.error('Transporter creation error:', error);
    throw error;
  }
}

// Vercel serverless function
module.exports = async (req, res) => {
  // CORS headers altijd eerst zetten
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Alleen POST requests toestaan
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Alleen POST requests zijn toegestaan' 
    });
  }

  // Algemene error handler wrapper
  try {
    // Valideer request body
    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ 
        success: false, 
        error: 'Ongeldige request data' 
      });
    }

    // Haal en clean input data
    let name = cleanInput(req.body.name || '');
    let email = (req.body.email || '').trim().toLowerCase();
    let company = cleanInput(req.body.company || '');
    let phone = cleanInput(req.body.phone || '');
    let subject = cleanInput(req.body.subject || '');
    let message = cleanInput(req.body.message || '');

    // Validatie - check alle verplichte velden
    const errors = [];
    if (!name || name.length < 2) {
      errors.push('Naam is verplicht (minimaal 2 tekens)');
    }
    if (!email) {
      errors.push('Email is verplicht');
    } else if (!isValidEmail(email)) {
      errors.push('Ongeldig emailadres formaat');
    }
    if (!subject || subject.length < 3) {
      errors.push('Onderwerp is verplicht (minimaal 3 tekens)');
    }
    if (!message || message.length < 10) {
      errors.push('Bericht is verplicht (minimaal 10 tekens)');
    }

    if (errors.length > 0) {
      return res.status(400).json({ 
        success: false, 
        error: errors.join('. ') 
      });
    }

    // Limiteer lengtes voor veiligheid
    name = name.substring(0, 100);
    email = email.substring(0, 254);
    company = company.substring(0, 100);
    phone = phone.substring(0, 50);
    subject = subject.substring(0, 200);
    message = message.substring(0, 5000);

    // Maak transporter aan
    let transporter;
    try {
      transporter = createTransporter();
    } catch (transporterError) {
      console.error('Transporter error:', transporterError);
      return res.status(500).json({ 
        success: false, 
        error: 'Email service is momenteel niet beschikbaar. Probeer het later opnieuw.' 
      });
    }

    // Email naar Caesar (hoofdmail - verplicht)
    const mailToCaesar = {
      from: process.env.EMAIL_USER || 'alkemade@nl-alkemade.com',
      to: 'Caesar.schoorl@gmail.com',
      replyTo: email,
      subject: `Nieuw bericht via Alkemade website: ${escapeHtml(subject)}`,
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
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Bedrijf:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(company || 'Niet opgegeven')}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>E-mail:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Telefoon:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(phone || 'Niet opgegeven')}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Onderwerp:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(subject)}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <strong>Bericht:</strong>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      `
    };

    // Verstuur hoofdmail naar Caesar (met timeout)
    let mainEmailResult;
    try {
      mainEmailResult = await Promise.race([
        transporter.sendMail(mailToCaesar),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email timeout')), 25000)
        )
      ]);
    } catch (mainError) {
      console.error('Hoofdmail error:', mainError);
      return res.status(500).json({ 
        success: false, 
        error: 'Kon email niet verzenden. Probeer het later opnieuw of neem direct contact op via alkemade@nl-alkemade.com' 
      });
    }

    // Bevestigingsmail naar gebruiker (optioneel - faalt niet als dit mislukt)
    let confirmationSent = false;
    let confirmationError = null;
    
    try {
      // Alleen versturen naar geldige email domeinen
      const emailDomain = email.split('@')[1];
      if (emailDomain) {
        const validTLDs = ['com', 'net', 'org', 'nl', 'be', 'de', 'fr', 'uk', 'co', 'io', 'eu', 'info', 'biz', 'edu', 'gov', 'me', 'xyz', 'online', 'site', 'app'];
        const domainLower = emailDomain.toLowerCase();
        const hasValidTLD = validTLDs.some(tld => domainLower.endsWith('.' + tld));
        
        if (hasValidTLD) {
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
                <p>Beste ${escapeHtml(name || 'klant')},</p>
                <p>Bedankt voor uw bericht via de Alkemade Flowers website.</p>
                <p>Wij hebben uw bericht met onderwerp "<strong>${escapeHtml(subject)}</strong>" ontvangen en nemen zo snel mogelijk contact met u op.</p>
                <p>Met vriendelijke groet,<br>
                <strong>Alkemade International B.V.</strong><br>
                alkemade@nl-alkemade.com<br>
                +31-297-567148</p>
              </div>
            `
          };

          // Verstuur bevestigingsmail met timeout
          await Promise.race([
            transporter.sendMail(confirmationMail),
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Confirmation email timeout')), 15000)
            )
          ]);
          confirmationSent = true;
        }
      }
    } catch (confError) {
      // Log maar laat het niet crashen - hoofdmail is al verzonden
      console.error('Bevestigingsmail error (niet kritiek):', confError.message);
      confirmationError = confError.message;
    }

    // Succesvol antwoord
    return res.status(200).json({ 
      success: true, 
      message: 'Email succesvol verzonden',
      messageId: mainEmailResult.messageId || 'unknown',
      confirmationSent: confirmationSent
    });

  } catch (error) {
    // Catch-all error handler
    console.error('Onverwachte error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw of neem contact op via alkemade@nl-alkemade.com'
    });
  }
};
