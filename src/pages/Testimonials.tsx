import { Phone, Calendar, Quote } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { testimonials } from '../data/testimonials'
import { siteInfo } from '../data/navigation'

export default function Testimonials() {
  return (
    <>
      <title>Testimonials - Elmwood Dental</title>
      <PageHero
        title="Testimonials"
        image="https://elmwooddental.co.nz/wp-content/uploads/2024/12/Elmwood-Dental-Christchurch-New-Zealand-scaled.jpeg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
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

          <AnimatedElement>
            <p className="section-label mb-2">ELMWOOD DENTAL</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-12">
              What Our Customer Say!
            </h2>
          </AnimatedElement>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedElement key={testimonial.id} delay={index * 0.05}>
                <div className="bg-cream rounded-lg p-6 md:p-8">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <div className="text-charcoal/80 leading-relaxed mb-4 whitespace-pre-line">
                    {testimonial.quote}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-heading font-semibold text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-charcoal">{testimonial.name}</p>
                      <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
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
    </>
  )
}
