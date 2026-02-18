import { useState } from 'react'
import { X, Phone, Calendar } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { galleryImages } from '../data/gallery'
import { siteInfo } from '../data/navigation'

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <>
      <title>Gallery - Elmwood Dental</title>
      <PageHero title="Gallery" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <p className="text-lg text-charcoal/80 max-w-3xl mb-6">
              Welcome to the gallery page of Elmwood Dental, where we showcase the beautiful smiles and transformations of our patients. At Elmwood Dental, we understand the importance of a healthy and confident smile, which is why we provide top-notch dental services to our patients.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <a href={siteInfo.phoneTel} className="btn-primary">
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
              <a href={siteInfo.bookOnlineUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Calendar className="w-4 h-4" />
                Book Online
              </a>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedElement key={index} delay={index * 0.05}>
                <button
                  onClick={() => setLightboxImage(image.src)}
                  className="group block w-full overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: `url(${siteInfo.images.headerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <p className="section-label text-accent-light mb-2">ELMWOOD DENTAL</p>
          <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">+64 33552348</p>
          <a href={siteInfo.phoneTel} className="btn-primary bg-white text-primary hover:bg-cream">
            Call Us Today
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image full size"
            className="max-w-full max-h-[90vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
