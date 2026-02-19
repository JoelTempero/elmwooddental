import { Phone, Calendar } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import ContactForm from '../components/ui/ContactForm'
import { team } from '../data/team'
import { siteInfo } from '../data/navigation'

export default function AboutUs() {
  return (
    <>
      <title>About Us - Elmwood Dental</title>
      <PageHero
        title="About Us"
        image="https://elmwooddental.co.nz/wp-content/uploads/2023/08/IMG-7526-scaled.jpg"
        imagePosition="center 25%"
      />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <div className="max-w-3xl">
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                At Elmwood Dental, we pride ourselves on providing compassionate dental care for all. Our highly qualified team of dentists, Sherin Allan, Susan Gorrie, and Beata Baumann, along with our friendly and knowledgeable staff, are dedicated to ensuring you receive the highest quality of care in a comfortable and relaxed environment.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={siteInfo.phoneTel} className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
                <a href={siteInfo.bookOnlineUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Calendar className="w-4 h-4" />
                  Book Online
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <ContactForm
              heading="Get In Touch!"
              text="Welcome to our dental website! We're glad you're interested in learning more about our services and how we can help you achieve a beautiful, healthy smile. To provide you with accurate information, pricing and services, contact us here."
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <p className="section-label mb-2">ELMWOOD DENTAL</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-12">Our Team</h2>
          </AnimatedElement>

          <div className="space-y-16">
            {team.map((member, index) => (
              <AnimatedElement key={member.id} delay={index * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {member.image ? (
                    <div className="lg:col-span-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-72 lg:h-80 object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="lg:col-span-4">
                      <div className="w-full h-72 lg:h-80 bg-cream rounded-lg flex items-center justify-center">
                        <span className="text-5xl font-heading font-bold text-primary/20">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="lg:col-span-8">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-4 uppercase">
                      {member.name}
                    </h3>
                    <div className="space-y-4">
                      {member.bio.map((paragraph, i) => (
                        <p key={i} className="text-charcoal/80 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
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
          <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{siteInfo.phone}</p>
          <a href={siteInfo.phoneTel} className="btn-primary bg-white text-primary hover:bg-cream">
            Call Us Today
          </a>
        </div>
      </section>
    </>
  )
}
