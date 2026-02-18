import { useParams, Navigate } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import AnimatedElement from '../../components/ui/AnimatedElement'
import ContactForm from '../../components/ui/ContactForm'
import CTAButtons from '../../components/ui/CTAButtons'
import RelatedServices from '../../components/ui/RelatedServices'
import { getServiceBySlug } from '../../data/services'
import { siteInfo } from '../../data/navigation'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const heroImage = service.images[0] || siteInfo.images.headerBg
  const contentImages = service.images.slice(1)

  return (
    <>
      <title>{service.title} - Elmwood Dental</title>
      <PageHero title={service.title} image={heroImage} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatedElement>
                <p className="section-label mb-2">ELMWOOD DENTAL</p>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-6">
                  {service.sections[0]?.heading || service.title}
                </h2>
              </AnimatedElement>

              {service.sections.map((section, sIndex) => (
                <AnimatedElement key={sIndex}>
                  <div className="space-y-4">
                    {sIndex > 0 && section.heading && (
                      <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mt-8">
                        {section.heading}
                      </h3>
                    )}

                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-charcoal/80 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}

                    {section.listItems && (
                      <ul className="space-y-2 ml-4">
                        {section.listItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-charcoal/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subsections && (
                      <div className="space-y-6 mt-4">
                        {section.subsections.map((sub, subIndex) => (
                          <div key={subIndex}>
                            <h4 className="font-heading font-semibold text-charcoal mb-2">
                              {sub.heading}
                            </h4>
                            {sub.content.map((p, pi) => (
                              <p key={pi} className="text-charcoal/80 leading-relaxed mb-2">
                                {p}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Show CTAs after certain sections */}
                    {(sIndex === 0 || sIndex === Math.floor(service.sections.length / 2)) && (
                      <div className="mt-6">
                        <CTAButtons />
                      </div>
                    )}
                  </div>
                </AnimatedElement>
              ))}

              {/* Content Images */}
              {contentImages.length > 0 && (
                <AnimatedElement>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {contentImages.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${service.title} at Elmwood Dental`}
                        className="w-full h-48 md:h-56 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </AnimatedElement>
              )}

              {/* Final CTA */}
              <div className="mt-8">
                <CTAButtons />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <ContactForm
                heading="Get In Touch!"
                text="Welcome to our dental website! We're glad you're interested in learning more about our services and how we can help you achieve a beautiful, healthy smile."
              />

              {service.relatedServices && service.relatedServices.length > 0 && (
                <RelatedServices services={service.relatedServices} />
              )}
            </div>
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
          <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{siteInfo.phone}</p>
          <a href={siteInfo.phoneTel} className="btn-primary bg-white text-primary hover:bg-cream">
            Call Us Today
          </a>
        </div>
      </section>
    </>
  )
}
