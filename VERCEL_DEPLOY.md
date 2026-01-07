# Vercel Deployment Fix - Stap voor Stap

## Het Probleem
De 404 error betekent dat Vercel de serverless function niet kan vinden.

## Oplossing

### Stap 1: Verwijder oude deployment
1. Ga naar Vercel Dashboard
2. Verwijder de huidige deployment (of maak een nieuwe)

### Stap 2: Zorg dat deze bestanden bestaan:
- ✅ `api/contact.js` (of `api/contact/index.js`)
- ✅ `vercel.json`
- ✅ `package.json` met `nodemailer` dependency

### Stap 3: Environment Variables instellen
In Vercel Dashboard → Settings → Environment Variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=Caesar.schoorl@gmail.com
EMAIL_PASS=fpgh riot huff avjl
```

**Belangrijk:** Zet deze voor **Production**, **Preview**, en **Development**!

### Stap 4: Deploy opnieuw

**Optie A: Via GitHub**
1. Push alle wijzigingen naar GitHub
2. Vercel zal automatisch opnieuw deployen
3. Check de Functions tab in Vercel om te zien of `api/contact` wordt gedetecteerd

**Optie B: Via Vercel CLI**
```bash
vercel --prod
```

### Stap 5: Verificatie
1. Ga naar je Vercel project
2. Klik op **Functions** tab
3. Je zou `api/contact` moeten zien staan
4. Als het er niet is, check de logs tijdens deployment

## Troubleshooting

### Als de function nog steeds niet werkt:

1. **Check Vercel Logs:**
   - Ga naar je project → Functions → api/contact
   - Bekijk de deployment logs voor errors

2. **Test lokaal met Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel dev
   ```
   Dit start een lokale Vercel server waar je kunt testen

3. **Check of de file correct is:**
   - Zorg dat `api/contact.js` bestaat
   - Zorg dat het `module.exports` gebruikt (niet `export default`)

4. **Probeer alternatieve structuur:**
   - Verwijder `api/contact.js`
   - Gebruik alleen `api/contact/index.js`
   - Deploy opnieuw

## Belangrijke Notities

- Vercel detecteert automatisch `.js` files in de `api/` folder
- De function moet `module.exports = async (req, res) => {...}` gebruiken
- Environment variables moeten correct zijn ingesteld
- Dependencies worden automatisch geïnstalleerd tijdens deployment



