# Eigen Mail Systeem - Quick Start

## Snelle Setup (5 minuten)

### 1. Installeer Node.js
Zorg dat Node.js is geïnstalleerd: https://nodejs.org/

### 2. Installeer dependencies
```bash
npm install
```

### 3. Configureer email (Gmail voorbeeld)

Maak een `.env` bestand in de root map met:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=Caesar.schoorl@gmail.com
EMAIL_PASS=je-app-password-hier
PORT=3000
```

**Belangrijk voor Gmail:**
- Je moet een "App Password" gebruiken, niet je normale wachtwoord
- Ga naar: https://myaccount.google.com/apppasswords
- Maak een nieuwe App Password aan voor "Mail"
- Gebruik dat wachtwoord in EMAIL_PASS

### 4. Start de server
```bash
npm start
```

### 5. Open de website
Ga naar: `http://localhost:3000`

## Hoe het werkt

1. **Frontend** (`contact.html`) stuurt formulier data naar `/api/contact`
2. **Backend** (`server.js`) ontvangt de data en verstuurt 2 emails:
   - Email naar `Caesar.schoorl@gmail.com` met alle formulier gegevens
   - Bevestigingsmail naar de gebruiker
3. Beide emails worden verstuurd via je eigen email account

## Voordelen

✅ Volledige controle over email verzending  
✅ Geen afhankelijkheid van externe services  
✅ Betrouwbaar en snel  
✅ HTML emails met mooie opmaak  
✅ Automatische bevestigingsmails  

## Problemen oplossen

**"Email configuratie fout"**
- Controleer `.env` bestand
- Voor Gmail: gebruik App Password
- Zorg dat 2FA aan staat

**"Cannot find module"**
- Run `npm install` opnieuw

**Emails komen niet aan**
- Check spam folder
- Check server console voor errors
- Test eerst met je eigen email

Voor meer details, zie `MAIL_SETUP.md`




