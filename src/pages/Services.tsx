import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <title>Services - Elmwood Dental</title>
      <PageHero title="Services" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <p className="text-lg text-charcoal/80 max-w-3xl mb-12">
              At Elmwood Dental, we offer a comprehensive range of dental services to meet all your oral health needs.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedElement key={service.id} delay={index * 0.05}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block bg-cream rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {service.images.length > 1 ? (
                    <div className="overflow-hidden h-48">
                      <img
                        src={service.images[1]}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-primary/10 flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-primary/20">
                        {service.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-primary group-hover:text-primary-dark transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-accent group-hover:text-accent-dark transition-colors">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
