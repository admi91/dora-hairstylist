# Setup Experience Single Type in Strapi

## 1. Crea i Component prima (nella sezione Components)

### Component: `experience.experience-item`
- **year** (Text) - Es: "2020 - Presente"
- **role** (Text) - Es: "Hair Stylist Professionista"
- **company** (Text) - Es: "Studio Privato"
- **description** (Rich Text/Markdown) - Descrizione del ruolo
- **achievements** (JSON) - Array di achievements: `["Achievement 1", "Achievement 2"]`

### Component: `experience.skill`
- **name** (Text) - Es: "Taglio Donna"
- **level** (Number - Integer) - Valore da 0 a 100

### Component: `experience.certification`
- **title** (Text) - Es: "Certificazione Professionale Hair Styling"
- **year** (Text) - Es: "2018"
- **institution** (Text) - Es: "Accademia Italiana Hair Styling"

## 2. Crea il Single Type "Experience"

1. Vai su **Content-Type Builder** nel pannello Strapi
2. Clicca su **Create new single type**
3. Nome: `experience`
4. Aggiungi i seguenti campi:

### Campi del Single Type:
- **title** (Text) - Titolo della sezione
- **subtitle** (Text) - Sottotitolo della sezione
- **experiences** (Component - Repeatable)
  - Seleziona il component: `experience.experience-item`
- **skills** (Component - Repeatable)
  - Seleziona il component: `experience.skill`
- **certifications** (Component - Repeatable)
  - Seleziona il component: `experience.certification`
- **ctaTitle** (Text) - Titolo call to action
- **ctaSubtitle** (Text) - Sottotitolo call to action
- **ctaButton** (Text) - Testo bottone

5. **Salva** il Single Type

## 3. Configura i Permessi

1. Vai su **Settings** → **Roles** → **Public**
2. Trova `experience` e abilita:
   - ✅ **find** (per leggere i dati)
3. Salva

## 4. Popola i Dati

1. Vai su **Content Manager** → **Single Types** → **Experience**
2. Compila i campi con i tuoi dati
3. Clicca **Publish**

## 5. Esempio JSON Structure

```json
{
  "title": "Esperienza & Competenze",
  "subtitle": "Anni di passione, formazione continua e dedizione all'arte dell'hair styling",
  "experiences": [
    {
      "year": "2020 - Presente",
      "role": "Hair Stylist Professionista",
      "company": "Studio Privato",
      "description": "Gestione completa del salone con focus su consulenza d'immagine personalizzata",
      "achievements": [
        "Oltre 500+ clienti soddisfatti",
        "Specializzazione in tecniche di colorazione avanzata",
        "Formazione continua sulle tendenze internazionali"
      ]
    }
  ],
  "skills": [
    { "name": "Taglio Donna", "level": 100 },
    { "name": "Taglio Uomo", "level": 92 },
    { "name": "Colorazione", "level": 100 },
    { "name": "Balayage & Shatush", "level": 100 },
    { "name": "Acconciature", "level": 100 },
    { "name": "Trattamenti", "level": 100 }
  ],
  "certifications": [
    {
      "title": "Certificazione Professionale Hair Styling",
      "year": "2018",
      "institution": "Accademia Italiana Hair Styling"
    }
  ],
  "ctaTitle": "Pronta a Trasformare il Tuo Look?",
  "ctaSubtitle": "Prenota una consulenza gratuita e scopri il tuo stile ideale",
  "ctaButton": "Prenota Ora"
}
```

## 6. URL API

Dopo la configurazione, l'endpoint sarà:
```
GET https://dora-hairstylist-production.up.railway.app/api/experience?populate=*
```

## Note Importanti

- I component **DEVONO** essere creati prima del Single Type
- Ricorda di abilitare i permessi Public per `find`
- Usa `populate=*` nell'API per ottenere anche i component
- Il campo `achievements` è JSON perché Strapi 4 non ha array di stringhe nativi
