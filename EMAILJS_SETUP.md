# 📧 Setup EmailJS per Contact Form - 5 Gennaio 2026

## Cosa Abbiamo Fatto

✅ Installato `@emailjs/browser`
✅ Integrato EmailJS nel componente Contact
✅ Aggiunto stato loading durante invio
✅ Gestione errori con messaggi utente
✅ Reset form dopo invio

## 🚀 Setup EmailJS (Gratis fino a 200 email/mese)

### 1. Crea Account su EmailJS

1. Vai su: https://www.emailjs.com/
2. Clicca **Sign Up** e crea un account gratuito
3. Verifica la tua email

### 2. Aggiungi un Email Service

1. Nel dashboard, vai su **Email Services**
2. Clicca **Add New Service**
3. Scegli il tuo provider email (Gmail consigliato)
4. Per Gmail:
   - Clicca su **Gmail**
   - Autorizza l'accesso al tuo account Gmail
   - Dai un nome al servizio (es: "Dora Hairstylist Contact")
   - Salva il **Service ID** (es: `service_abc123`)

### 3. Crea un Email Template

1. Vai su **Email Templates**
2. Clicca **Create New Template**
3. Configura il template:

**Nome Template**: Contact Form Submission

**Subject**: 
```
Nuovo Messaggio da {{from_name}} - Dora Hairstylist
```

**Content** (HTML):
```html
<h2>Nuovo Messaggio dal Sito Dora Hairstylist</h2>

<p><strong>Da:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefono:</strong> {{phone}}</p>

<h3>Messaggio:</h3>
<p>{{message}}</p>

<hr>
<p><small>Messaggio ricevuto da dorahairstylist.com</small></p>
```

**To Email**:
```
{{to_email}}
```

4. Clicca **Save** e annota il **Template ID** (es: `template_xyz789`)

### 4. Ottieni la Public Key

1. Vai su **Account** → **General**
2. Nella sezione **API Keys**, trovi la tua **Public Key**
3. Annota la chiave (es: `A1b2C3d4E5f6G7h8`)

### 5. Configura le Variabili d'Ambiente

Crea il file `.env` nella root del progetto:

```bash
# .env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=A1b2C3d4E5f6G7h8
VITE_STRAPI_URL=https://dora-hairstylist-production.up.railway.app
```

⚠️ **IMPORTANTE**: Aggiungi `.env` al `.gitignore` per non committare le credenziali!

### 6. Configura su Railway/Vercel

Per il deploy in produzione, aggiungi le variabili d'ambiente:

**Railway**:
1. Vai sul progetto Railway
2. Settings → Variables
3. Aggiungi:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

**Vercel** (se usi Vercel):
1. Vai su Settings → Environment Variables
2. Aggiungi le stesse variabili

## 🔧 Variabili Template EmailJS

Il template usa queste variabili:
- `{{from_name}}` - Nome del mittente
- `{{from_email}}` - Email del mittente
- `{{phone}}` - Telefono (opzionale)
- `{{message}}` - Messaggio
- `{{to_email}}` - Email destinatario (dorabozintan@gmail.com)

## 🧪 Test

1. Completa il setup su EmailJS
2. Aggiungi le variabili al file `.env`
3. Riavvia il server di sviluppo: `npm run dev`
4. Vai su http://localhost:5173/contatti
5. Compila e invia il form
6. Controlla la tua email!

## 📋 Flusso Email

```
Cliente compila form
    ↓
Click su "Invia"
    ↓
EmailJS invia email
    ↓
Email arriva a: dorabozintan@gmail.com
    ↓
Conferma al cliente
```

## 💡 Tips

### Auto-reply al Cliente
Puoi creare un secondo template per inviare una conferma automatica al cliente:

1. Crea un nuovo template "Auto Reply"
2. Usa `{{from_email}}` come destinatario
3. Invia entrambi i template nel `handleSubmit`

### Notifiche Multiple
Puoi inviare la stessa notifica a più email:
```javascript
to_email: 'dorabozintan@gmail.com, altro@email.com'
```

### Limite Gratuito
- 200 email/mese gratis
- Se serve di più: $7/mese per 1000 email

## ✅ Checklist Setup

- [ ] Account EmailJS creato
- [ ] Email Service configurato (Gmail)
- [ ] Template email creato con variabili corrette
- [ ] Service ID, Template ID e Public Key ottenute
- [ ] File `.env` creato con le credenziali
- [ ] `.env` aggiunto a `.gitignore`
- [ ] Variabili configurate su Railway/Vercel
- [ ] Test form inviato con successo
- [ ] Email ricevuta su dorabozintan@gmail.com

## 🐛 Troubleshooting

### Email non arriva
- Controlla la cartella SPAM
- Verifica le credenziali nel file `.env`
- Controlla i log di EmailJS dashboard

### Errore 401 Unauthorized
- Verifica che la Public Key sia corretta
- Controlla che il servizio sia attivo su EmailJS

### Errore 400 Bad Request
- Verifica che i nomi delle variabili nel template corrispondano
- Controlla che il Template ID sia corretto

## 📞 Support
- EmailJS Docs: https://www.emailjs.com/docs/
- Support: support@emailjs.com
