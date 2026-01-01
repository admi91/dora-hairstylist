# Dora Hairstylist - Portfolio

Portfolio website professionale per il salone Dora Hairstylist, realizzato con React, Vite e Tailwind CSS.

## 🌟 Caratteristiche

- **Design Moderno**: Layout pulito e minimalista ispirato a portfolio professionali
- **Responsive**: Ottimizzato per tutti i dispositivi (mobile, tablet, desktop)
- **Galleria Portfolio**: Griglia di immagini con filtri per categoria
- **Navigazione Fluida**: Scroll smooth tra le sezioni
- **Form Contatti**: Modulo per prenotazioni e richieste informazioni
- **Performance**: Build ottimizzata con Vite

## 🚀 Tecnologie Utilizzate

- **React 18**: Framework JavaScript per UI componenti
- **Vite**: Build tool veloce e moderno
- **Tailwind CSS**: Framework CSS utility-first
- **PostCSS**: Processore CSS

## 📦 Installazione

1. Clona il repository:
```bash
git clone <repository-url>
cd git
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia il server di sviluppo:
```bash
npm run dev
```

4. Apri il browser su `http://localhost:5173`

## 🛠️ Comandi Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Visualizza l'anteprima della build di produzione

## 📁 Struttura del Progetto

```
git/
├── public/              # Asset statici
├── src/
│   ├── components/      # Componenti React
│   │   ├── Header.jsx   # Header con navigazione
│   │   ├── Hero.jsx     # Sezione hero
│   │   ├── Gallery.jsx  # Galleria portfolio
│   │   ├── About.jsx    # Sezione chi siamo
│   │   ├── Contact.jsx  # Form contatti
│   │   └── Footer.jsx   # Footer
│   ├── App.jsx         # Componente principale
│   ├── main.jsx        # Entry point
│   └── index.css       # Stili globali con Tailwind
├── index.html          # HTML template
├── tailwind.config.js  # Configurazione Tailwind
├── vite.config.js      # Configurazione Vite
└── package.json        # Dipendenze e script
```

## 🎨 Personalizzazione

### Colori
Puoi modificare i colori nel file `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a1a1a',
      secondary: '#f5f5f5',
    },
  },
}
```

### Immagini della Galleria
Nel file `src/components/Gallery.jsx`, sostituisci le immagini placeholder con le tue:

```javascript
const galleryItems = [
  { id: 1, title: 'Il tuo titolo', category: 'categoria', image: 'url-della-tua-immagine' },
  // ...
]
```

### Informazioni di Contatto
Aggiorna le informazioni di contatto in `src/components/Contact.jsx`:
- Indirizzo
- Telefono
- Email
- Orari di apertura

## 📱 Social Media
Aggiungi i link ai tuoi profili social nel file `src/components/Footer.jsx`.

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Carica la cartella dist/ su Netlify
```

## 📝 Note

- Le immagini nella galleria sono placeholder da Unsplash. Sostituiscile con le tue immagini professionali.
- Il form di contatto attualmente mostra solo un alert. Integra con un servizio backend o email per gestire le submission reali.
- Personalizza tutti i testi e le informazioni per riflettere il tuo salone.

## 📄 Licenza

Tutti i diritti riservati © 2026 Dora Hairstylist

---

Realizzato con ❤️ usando React e Tailwind CSS
