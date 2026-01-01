import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80"
                alt="Dora Hairstylist Salon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Benvenuti da <strong>Dora Hairstylist</strong>, dove la passione per la bellezza 
                incontra l'eccellenza professionale. Con anni di esperienza nel settore dell'hair styling, 
                sono dedicata a creare look unici che esaltano la personalità di ogni cliente.
              </p>
              <p>
                Dal taglio alla colorazione, dalle acconciature speciali ai trattamenti innovativi, 
                offriamo servizi personalizzati utilizzando prodotti di altissima qualità e le tecniche 
                più avanzate del settore.
              </p>
              <p>
                Il nostro obiettivo è far sentire ogni persona speciale, valorizzando la sua bellezza 
                naturale con stile e creatività. Vieni a trovarci e lasciati coccolare in un ambiente 
                elegante e accogliente.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Anni di Esperienza</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Clienti Soddisfatti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
