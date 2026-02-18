import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { mainNav } from '../data/navigation'
import { services } from '../data/services'

export default function SitemapPage() {
  return (
    <>
      <title>Sitemap - Elmwood Dental</title>
      <PageHero title="Sitemap" />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">Site Map</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-3">Main Pages</h3>
                  <ul className="space-y-2 ml-4">
                    {mainNav.filter(item => !item.children).map((item) => (
                      <li key={item.path}>
                        <Link to={item.path} className="text-accent hover:text-accent-dark transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-3">Services</h3>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <Link to="/services" className="text-accent hover:text-accent-dark transition-colors font-medium">
                        All Services
                      </Link>
                    </li>
                    {services.map((service) => (
                      <li key={service.slug} className="ml-4">
                        <Link to={`/services/${service.slug}`} className="text-accent hover:text-accent-dark transition-colors">
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-3">Legal</h3>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <Link to="/privacy-policy" className="text-accent hover:text-accent-dark transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions" className="text-accent hover:text-accent-dark transition-colors">
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
