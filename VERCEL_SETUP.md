# Vercel Deployment Instructies

## Stap 1: Environment Variables instellen in Vercel

1. Ga naar je Vercel project dashboard
2. Klik op **Settings** > **Environment Variables**
3. Voeg de volgende variabelen toe:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=Caesar.schoorl@gmail.com
EMAIL_PASS=fpgh riot huff avjl
```

**Belangrijk:** 
- Zet deze variabelen voor **Production**, **Preview**, en **Development**
- De `EMAIL_PASS` is je Gmail App Password

## Stap 2: Deploy naar Vercel

### Optie A: Via Vercel Dashboard
1. Push je code naar GitHub/GitLab/Bitbucket
2. Import het project in Vercel
3. Vercel detecteert automatisch de `vercel.json` configuratie
4. Deploy!

### Optie B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

## Stap 3: Testen

Na deployment:
1. Ga naar je Vercel URL (bijv. `https://website-alkemade.vercel.app`)
2. Test het contactformulier
3. Controleer of je email ontvangt op `Caesar.schoorl@gmail.com`

## Hoe het werkt

- **Lokaal:** Gebruikt `server.js` (Node.js server op poort 3000)
- **Vercel:** Gebruikt `api/contact.js` (serverless function)

De frontend code in `contact.html` gebruikt automatisch:
- `window.location.origin + '/api/contact'` - werkt op beide!

## Troubleshooting

### "404 - The page could not be found"
- Controleer of `api/contact.js` bestaat in de `api` map
- Controleer of environment variables zijn ingesteld
- Check Vercel function logs in het dashboard

### "Email configuratie fout"
- Controleer of alle environment variables correct zijn ingesteld
- Voor Gmail: gebruik App Password, niet je normale wachtwoord

### Emails komen niet aan
- Check Vercel function logs voor errors
- Controleer spam folder
- Test eerst met je eigen email adres

## Vercel Function Logs bekijken

1. Ga naar je Vercel project
2. Klik op **Functions** tab
3. Klik op `api/contact`
4. Bekijk de logs voor errors




