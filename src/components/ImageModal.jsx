import React from 'react'

const ImageModal = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  // Chiudi con ESC
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // Naviga con frecce
  React.useEffect(() => {
    const handleArrows = (e) => {
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    window.addEventListener('keydown', handleArrows)
    return () => window.removeEventListener('keydown', handleArrows)
  }, [onNext, onPrev, hasNext, hasPrev])

  // Previeni scroll del body
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!image) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
        aria-label="Chiudi"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-10 bg-black bg-opacity-50 rounded-full p-3"
          aria-label="Immagine precedente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div 
        className="relative max-w-7xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.image}
          alt={image.title}
          className="w-full h-full object-contain"
        />
        
        {/* Image Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
          <h3 className="text-xl font-bold mb-1">{image.title}</h3>
          {image.description && (
            <p className="text-sm text-gray-300">{image.description}</p>
          )}
          <span className="inline-block mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded-full">
            {image.category}
          </span>
        </div>
      </div>

      {/* Next Button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-10 bg-black bg-opacity-50 rounded-full p-3"
          aria-label="Immagine successiva"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ImageModal
