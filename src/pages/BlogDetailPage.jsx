import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getBlogPostById } from '../services/api'

const BlogDetailPage = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  // Carica l'articolo da Strapi
  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true)
      window.scrollTo(0, 0)
      const post = await getBlogPostById(id)
      setArticle(post)
      setLoading(false)
    }
    
    loadArticle()
  }, [id])

  // Database articoli completo
  const blogArticles = {
    1: {
      id: 1,
      title: 'Tendenze Capelli Primavera 2026',
      category: 'Tendenze',
      date: '15 Gen 2026',
      readTime: '5 min',
      author: 'Dora',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80',
      excerpt: 'Scopri i colori e i tagli che domineranno la nuova stagione',
      content: `
        <h2>La Primavera 2026 nel Mondo Hair Styling</h2>
        <p>La primavera 2026 porta con sé una ventata di freschezza anche nel mondo dell'hair styling. Quest'anno vedremo il ritorno di alcuni classici rivisitati in chiave moderna, insieme a novità sorprendenti che rivoluzioneranno il modo di concepire i capelli.</p>
        
        <h3>Colori che Dominano</h3>
        <p>Le tonalità pastello continuano a essere protagoniste, ma con un twist: invece dei classici rosa e lilla, vedremo molto più verde menta, pesca e lavanda. I colori naturali, come i biondo miele e i castani caramello, restano evergreen per chi preferisce uno stile più sobrio.</p>
        
        <h3>Tagli Must-Have</h3>
        <p>Il bob torna prepotentemente alla ribalta, ma non nella sua versione classica. Il "textured bob" con ciuffi sfilati e lunghezze irregolari sarà il taglio dell'anno. Per chi ama i capelli lunghi, i layer morbidi e naturali sostituiscono i tagli netti e geometrici.</p>
        
        <h3>Styling Naturale</h3>
        <p>Il 2026 è l'anno del "less is more". Gli styling troppo elaborati lasciano spazio a look naturali, onde morbide e texture che esaltano la bellezza autentica dei capelli. Il movimento naturale diventa il protagonista.</p>
        
        <h3>Come Adattare le Tendenze</h3>
        <p>Non tutte le tendenze vanno bene per tutti. È importante considerare:</p>
        <ul>
          <li>La forma del viso</li>
          <li>La texture naturale dei capelli</li>
          <li>Il proprio stile personale</li>
          <li>Il tempo che si può dedicare allo styling quotidiano</li>
        </ul>
        
        <p>Vieni in salone per una consulenza personalizzata e scopri quale tendenza fa per te!</p>
      `,
      tags: ['tendenze', 'primavera', 'colori', 'tagli']
    },
    2: {
      id: 2,
      title: 'Come Mantenere il Colore Vibrante',
      category: 'Tutorial',
      date: '10 Gen 2026',
      readTime: '7 min',
      author: 'Dora',
      image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1200&q=80',
      excerpt: 'I segreti per far durare la tua colorazione più a lungo',
      content: `
        <h2>Mantieni il Tuo Colore Brillante</h2>
        <p>Hai appena fatto una bellissima colorazione e vuoi che duri il più a lungo possibile? Ecco tutti i segreti professionali per mantenere il colore vibrante e luminoso.</p>
        
        <h3>I Primi 48 Ore Sono Cruciali</h3>
        <p>Le prime 48 ore dopo la colorazione sono fondamentali. Evita di lavare i capelli in questo periodo per permettere al colore di fissarsi completamente. Se proprio necessario, usa solo acqua fredda.</p>
        
        <h3>Scegli i Prodotti Giusti</h3>
        <p>Usa esclusivamente shampoo e balsamo specifici per capelli colorati. Questi prodotti sono formulati con pH bilanciato e ingredienti che sigillano le cuticole, trattenendo il colore all'interno del capello.</p>
        
        <h3>La Temperatura dell'Acqua</h3>
        <p>L'acqua calda apre le cuticole e favorisce la perdita di colore. Lava i capelli con acqua tiepida e termina sempre con un risciacquo freddo per chiudere le cuticole e sigillare il colore.</p>
        
        <h3>Protezione dal Sole e dal Calore</h3>
        <p>Proprio come la pelle, anche i capelli colorati necessitano di protezione solare. Usa prodotti con filtri UV e proteggi sempre i capelli con spray termoprotettori prima di usare phon, piastra o arricciacapelli.</p>
        
        <h3>Maschere Nutrienti Settimanali</h3>
        <p>Una o due volte a settimana, applica una maschera nutriente specifica per capelli colorati. Questo aiuterà a mantenere i capelli idratati e il colore luminoso.</p>
        
        <h3>Ritocchi Regolari</h3>
        <p>Prenota appuntamenti regolari per i ritocchi. Generalmente ogni 4-6 settimane per le ricrescite e ogni 8-12 settimane per un refresh completo del colore.</p>
      `,
      tags: ['tutorial', 'colore', 'manutenzione', 'consigli']
    },
    3: {
      id: 3,
      title: 'Taglio Perfetto per il Tuo Viso',
      category: 'Consigli',
      date: '5 Gen 2026',
      readTime: '6 min',
      author: 'Dora',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80',
      excerpt: 'Guida completa per scegliere il taglio ideale',
      content: `
        <h2>Il Taglio Giusto per Ogni Forma del Viso</h2>
        <p>Scegliere il taglio giusto può fare una differenza enorme nel valorizzare i tuoi lineamenti. Ecco come identificare la forma del tuo viso e quale taglio fa per te.</p>
        
        <h3>Viso Ovale</h3>
        <p>Sei fortunata! Il viso ovale è considerato la forma più versatile. Praticamente qualsiasi taglio ti starà bene. Puoi osare con frange, bob corti, capelli lunghi scalati o pixie cut.</p>
        
        <h3>Viso Tondo</h3>
        <p>L'obiettivo è allungare visivamente il viso. Perfetti i tagli lunghi con scalature che iniziano sotto il mento, frange laterali e volume sulla sommità della testa. Evita bob troppo corti e frange piene.</p>
        
        <h3>Viso Quadrato</h3>
        <p>Ammorbidisci gli angoli con onde morbide e scalature. Il long bob con onde è perfetto. Anche i capelli lunghi con layer morbidi funzionano bene. La frangia laterale è la tua migliore amica.</p>
        
        <h3>Viso a Cuore</h3>
        <p>Bilancia la fronte ampia con volume nella parte inferiore. Il lob (long bob) scalato è ideale. Anche la frangia laterale lunga aiuta a equilibrare le proporzioni.</p>
        
        <h3>Viso Lungo</h3>
        <p>L'obiettivo è creare larghezza. Perfetti i bob alle spalle con onde, frange piene che accorciano visivamente il viso, e scalature orizzontali che creano volume laterale.</p>
        
        <h3>Viso a Diamante</h3>
        <p>Valorizza gli zigomi con volume sulle tempie e alla mandibola. Bob lunghi, onde morbide e frange laterali sono perfetti per te.</p>
        
        <p>Ricorda: queste sono linee guida generali. La consulenza personalizzata in salone è fondamentale per trovare il TUO taglio perfetto!</p>
      `,
      tags: ['consigli', 'tagli', 'viso', 'guida']
    },
    4: {
      id: 4,
      title: 'Trattamenti Rigeneranti Inverno',
      category: 'Trattamenti',
      date: '1 Gen 2026',
      readTime: '4 min',
      author: 'Dora',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80',
      excerpt: 'Proteggi i tuoi capelli dal freddo',
      content: `
        <h2>SOS Capelli in Inverno</h2>
        <p>L'inverno può essere molto aggressivo per i capelli. Freddo, vento, riscaldamenti e sbalzi termici mettono a dura prova la salute della chioma. Ecco come proteggerla.</p>
        
        <h3>I Danni del Freddo</h3>
        <p>Il freddo restringe le cuticole dei capelli, rendendoli più fragili e soggetti a rottura. L'aria secca dei riscaldamenti disidrata i capelli, causando effetto crespo e opacità.</p>
        
        <h3>Trattamenti Professionali</h3>
        <p>Durante l'inverno, è consigliabile fare trattamenti professionali ogni 2-3 settimane. I trattamenti alla cheratina, le maschere ristrutturanti e gli oli rigeneranti sono ideali per questa stagione.</p>
        
        <h3>Routine Casalinga</h3>
        <p>A casa, usa maschere nutrienti almeno 2 volte a settimana. Gli oli per capelli (argan, cocco, jojoba) sono ottimi alleati. Applicali sulle punte prima di andare a dormire.</p>
        
        <h3>Protezione Fisica</h3>
        <p>Non sottovalutare l'importanza di proteggere fisicamente i capelli. Cappelli e sciarpe non solo tengono al caldo, ma proteggono anche i capelli dagli agenti atmosferici.</p>
        
        <h3>Attenzione al Calore</h3>
        <p>Riduci l'uso di phon, piastra e arricciacapelli. Se devi usarli, applica sempre un termoprotettore e usa temperature moderate.</p>
        
        <p>Prenota il tuo trattamento rigenerante in salone e regala ai tuoi capelli la coccola che meritano!</p>
      `,
      tags: ['trattamenti', 'inverno', 'protezione', 'cura']
    },
    5: {
      id: 5,
      title: 'Balayage vs Ombré: Quale Scegliere?',
      category: 'Tendenze',
      date: '28 Dic 2025',
      readTime: '8 min',
      author: 'Dora',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
      excerpt: 'Differenze, pro e contro delle tecniche di colorazione più amate',
      content: `
        <h2>Balayage vs Ombré: Facciamo Chiarezza</h2>
        <p>Sono due delle tecniche di colorazione più richieste, ma spesso vengono confuse. Scopriamo insieme le differenze e quale fa al caso tuo.</p>
        
        <h3>Cos'è il Balayage</h3>
        <p>Il balayage è una tecnica francese che significa "spazzare". Il colore viene applicato a mano libera con movimenti che simulano l'effetto naturale del sole sui capelli. Il risultato è molto naturale, con schiariture che si concentrano principalmente sulle lunghezze e sulle punte.</p>
        
        <h3>Cos'è l'Ombré</h3>
        <p>L'ombré crea un effetto graduale dal scuro alla radice al chiaro sulle punte. La transizione è più netta rispetto al balayage, creando un contrasto più evidente tra le due tonalità.</p>
        
        <h3>Differenze Principali</h3>
        <ul>
          <li><strong>Tecnica:</strong> Balayage a mano libera, Ombré con sezioni orizzontali</li>
          <li><strong>Risultato:</strong> Balayage più naturale, Ombré più drammatico</li>
          <li><strong>Manutenzione:</strong> Balayage richiede meno ritocchi</li>
          <li><strong>Adattabilità:</strong> Balayage più versatile per diversi tipi di capelli</li>
        </ul>
        
        <h3>Pro e Contro del Balayage</h3>
        <p><strong>Pro:</strong> Effetto naturale, bassa manutenzione, si adatta a tutti i colori di base, ricrescita meno visibile.</p>
        <p><strong>Contro:</strong> Richiede tempo e abilità tecnica, costo iniziale più alto.</p>
        
        <h3>Pro e Contro dell'Ombré</h3>
        <p><strong>Pro:</strong> Effetto wow immediato, ideale per chi vuole un cambio drastico, versatile negli abbinamenti cromatici.</p>
        <p><strong>Contro:</strong> Ricrescita più evidente, richiede più manutenzione, può risultare artificiale se mal eseguito.</p>
        
        <h3>Quale Scegliere?</h3>
        <p>Scegli il <strong>balayage</strong> se: vuoi un look naturale, hai poco tempo per la manutenzione, vuoi valorizzare i tuoi capelli senza stravolgerli.</p>
        <p>Scegli l'<strong>ombré</strong> se: ami i look audaci, vuoi un cambiamento evidente, non ti spaventa una manutenzione regolare.</p>
        
        <p>Vieni in salone per una consulenza personalizzata: ti aiuterò a scegliere la tecnica perfetta per te!</p>
      `,
      tags: ['balayage', 'ombré', 'colorazione', 'tecniche']
    },
    6: {
      id: 6,
      title: 'Capelli Ricci: Routine Perfetta',
      category: 'Tutorial',
      date: '20 Dic 2025',
      readTime: '10 min',
      author: 'Dora',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
      excerpt: 'Come prendersi cura dei capelli ricci',
      content: `
        <h2>La Guida Definitiva per Capelli Ricci Perfetti</h2>
        <p>I capelli ricci sono meravigliosi ma richiedono cure specifiche. Ecco la routine completa per ricci definiti, morbidi e senza effetto crespo.</p>
        
        <h3>Lavaggio: Meno è Meglio</h3>
        <p>I capelli ricci non vanno lavati tutti i giorni. 2-3 volte a settimana è l'ideale. Usa shampoo specifici senza solfati che rispettano l'idratazione naturale del capello.</p>
        
        <h3>Il Metodo LOC</h3>
        <p>LOC sta per Leave-in, Oil, Cream. È la sequenza perfetta per idratare i ricci:</p>
        <ul>
          <li><strong>Leave-in:</strong> Applica su capelli umidi un balsamo leave-in</li>
          <li><strong>Oil:</strong> Sigilla l'idratazione con un olio (argan, jojoba, cocco)</li>
          <li><strong>Cream:</strong> Definisci i ricci con una crema modellante</li>
        </ul>
        
        <h3>Asciugatura con Diffusore</h3>
        <p>Non strofinare mai i capelli ricci con l'asciugamano! Tampona delicatamente con un asciugamano in microfibra o una t-shirt di cotone. Usa il diffusore a temperatura media, con la testa inclinata all'indietro.</p>
        
        <h3>Refresh dei Ricci</h3>
        <p>Al mattino, spruzza i capelli con acqua e leave-in, manipola delicatamente i ricci con le mani. Evita di pettinare i capelli asciutti!</p>
        
        <h3>Maschere Settimanali</h3>
        <p>Una volta a settimana, fai una maschera ultra-idratante. Lasciala in posa almeno 30 minuti (anche tutta la notte con una cuffia).</p>
        
        <h3>Taglio Regolare</h3>
        <p>I capelli ricci necessitano di tagli specifici. Ogni 2-3 mesi elimina le doppie punte per mantenere i ricci definiti e sani.</p>
        
        <h3>La Notte</h3>
        <p>Dormi su una federa di seta o raso, oppure raccogli i capelli in una pineapple (coda alta morbida). Questo previene l'effetto crespo e mantiene la definizione.</p>
        
        <p>Seguendo questa routine, i tuoi ricci saranno sempre perfetti. Per un taglio specifico per ricci, prenota in salone!</p>
      `,
      tags: ['ricci', 'tutorial', 'routine', 'curly']
    }
  }

  const article = blogArticles[id] || blogArticles[1]

  // Articoli correlati (escluso quello corrente)
  const relatedArticles = Object.values(blogArticles)
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3)

  return (
    <>
      <Header />
      <article className="pt-20 min-h-screen bg-white">
        {/* Hero Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Breadcrumb */}
          <div className="absolute top-8 left-0 right-0">
            <div className="container-custom">
              <nav className="flex items-center space-x-2 text-white text-sm">
                <Link to="/" className="hover:text-red-300 transition">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-red-300 transition">Blog</Link>
                <span>/</span>
                <span className="text-gray-300">{article.title}</span>
              </nav>
            </div>
          </div>

          {/* Article Title */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container-custom">
              <div className="max-w-4xl">
                <span className="inline-block px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-full mb-4">
                  {article.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center space-x-6 text-gray-200">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {article.author}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Lead Paragraph */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-8">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic border-l-4 border-red-500 pl-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Main Content */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="article-content"
                />
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Social Share */}
              <div className="mt-12 p-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-center">Ti è piaciuto questo articolo?</h3>
                <p className="text-center text-gray-600 mb-6">Condividilo con le tue amiche!</p>
                <div className="flex justify-center space-x-4">
                  <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">Vuoi provare questi consigli?</h3>
                <p className="mb-6 text-gray-300">Prenota un appuntamento e lasciati coccolare</p>
                <Link
                  to="/contatti"
                  className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-600 transition-all duration-300"
                >
                  Prenota Ora
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container-custom">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Articoli Correlati</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="group"
                  >
                    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-semibold text-red-500 uppercase">{related.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-red-500 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{related.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
      <Footer />
    </>
  )
}

export default BlogDetailPage
