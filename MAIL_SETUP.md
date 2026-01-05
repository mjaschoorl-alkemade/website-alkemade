# Mail Systeem Setup Instructies

Dit is een eigen mail systeem dat gebruik maakt van Node.js en Nodemailer.

## Stap 1: Dependencies installeren

Open een terminal in de project map en voer uit:

```bash
npm install
```

## Stap 2: Email configuratie

### Voor Gmail:

1. Maak een `.env` bestand in de root van het project (kopieer `.env.example`)
2. Ga naar https://myaccount.google.com/apppasswords
3. Maak een nieuwe "App Password" aan voor "Mail"
4. Kopieer het gegenereerde wachtwoord
5. Vul in `.env` in:
   ```
   EMAIL_USER=Caesar.schoorl@gmail.com
   EMAIL_PASS=je-app-password-hier
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   ```

### Voor andere email providers:

Pas de SMTP instellingen aan in `.env`:
- **Outlook/Hotmail**: `smtp-mail.outlook.com`, poort 587
- **Yahoo**: `smtp.mail.yahoo.com`, poort 587
- **Custom SMTP**: Vraag je hosting provider om de SMTP instellingen

## Stap 3: Server starten

```bash
npm start
```

Of voor development met auto-reload:

```bash
npm run dev
```

De server draait nu op `http://localhost:3000`

## Stap 4: Website gebruiken

1. Open `http://localhost:3000` in je browser
2. Ga naar de contact pagina
3. Vul het formulier in en verstuur
4. Je ontvangt de email op `Caesar.schoorl@gmail.com`
5. De gebruiker ontvangt een bevestigingsmail

## Troubleshooting

### "Email configuratie fout"
- Controleer of `.env` correct is ingevuld
- Voor Gmail: gebruik een App Password, niet je normale wachtwoord
- Controleer of 2-factor authenticatie is ingeschakeld (vereist voor App Passwords)

### "Connection timeout"
- Controleer je internet verbinding
- Controleer of de SMTP host en poort correct zijn
- Sommige providers blokkeren SMTP, controleer firewall instellingen

### Emails komen niet aan
- Controleer spam/junk folder
- Controleer server logs voor foutmeldingen
- Test eerst met een simpele email naar jezelf

## Productie Deployment

Voor productie (bijv. Vercel, Heroku, etc.):

1. Zet de environment variables in je hosting platform
2. Zorg dat de server draait op de juiste poort
3. Update de frontend code om naar je productie URL te wijzen

