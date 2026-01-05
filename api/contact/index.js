const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Alleen POST toegestaan' });
  }

  try {
    const { name, email, company, phone, subject, message } = req.body;

    // Basis validatie
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Vul alle velden in' });
    }

    // Email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email naar Caesar
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'Caesar.schoorl@gmail.com',
      replyTo: email,
      subject: `Nieuw bericht: ${subject}`,
      text: `Naam: ${name}\nEmail: ${email}\nBedrijf: ${company || 'Niet opgegeven'}\nTelefoon: ${phone || 'Niet opgegeven'}\n\nBericht:\n${message}`
    });

    // Bevestigingsmail naar gebruiker
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Bevestiging: Uw bericht is ontvangen',
        text: `Beste ${name},\n\nBedankt voor uw bericht. Wij hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op.\n\nMet vriendelijke groet,\nAlkemade International B.V.`
      });
    } catch (e) {
      // Bevestigingsmail faalt niet als hoofdmail werkt
      console.log('Bevestigingsmail kon niet worden verzonden:', e.message);
    }

    return res.status(200).json({ success: true, message: 'Email verzonden' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Fout bij verzenden. Probeer het later opnieuw.' 
    });
  }
};
