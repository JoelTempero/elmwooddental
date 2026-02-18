import { Link } from 'react-router-dom'
import { Phone, Calendar, ArrowRight, MapPin, Clock, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedElement from '../components/ui/AnimatedElement'
import { siteInfo } from '../data/navigation'
import { testimonials } from '../data/testimonials'
import { services } from '../data/services'

const homeTestimonials = [testimonials[0], testimonials[3], testimonials[6]]

export default function Home() {
  return (
    <>
      <title>Home - Elmwood Dental</title>
      {/* Hero */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-16 lg:py-20">
            {/* Left: Logo + Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <img
                src={siteInfo.images.logoIcon}
                alt=""
                role="presentation"
                className="h-64 md:h-88 w-auto mb-2"
              />
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                At Elmwood Dental, we pride ourselves on providing compassionate dental care for all.
              </p>
              <p className="text-white/75 mt-4 leading-relaxed">
                Our highly qualified team of dentists Sherin Allan, Susan Gorrie, Beata Baumann and Kristine Bettle, along with our friendly and knowledgeable staff, are dedicated to ensuring you receive the highest quality of care in a comfortable and relaxed environment.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={siteInfo.phoneTel} className="btn-primary bg-white text-primary hover:bg-cream">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
                <a
                  href={siteInfo.bookOnlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Calendar className="w-4 h-4" />
                  Book Online
                </a>
              </div>
            </motion.div>

            {/* Right: Team Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src={siteInfo.images.building}
                alt="The Elmwood Dental team in Christchurch, New Zealand"
                className="w-full rounded-lg shadow-2xl object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-primary text-white py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <p className="text-sm text-white/90">6 Wairakei Road, Strowan, Christchurch</p>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
              <a href={siteInfo.phoneTel} className="text-sm text-white/90 hover:text-white transition-colors">
                {siteInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Clock className="w-5 h-5 text-accent flex-shrink-0" />
              <p className="text-sm text-white/90">Mon-Thu 8:30-5pm | Tue til 7pm | Fri til 6pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <img
                src={siteInfo.images.interior1}
                alt="Elmwood Dental team and interior"
                className="w-full h-80 lg:h-96 object-cover rounded-lg"
              />
            </AnimatedElement>
            <AnimatedElement delay={0.15}>
              <div>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  Elmwood Dental at 6 Wairakei Road is conveniently located in Strowan.
                  The purpose built surgery is light, spacious and airy. There is covered parking under the building, accessed by turning left while heading east on Wairakei Rd.
                </p>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  Stairs and lift access to the first floor provides easy access for all.
                  Our friendly and experienced team will help take care of your smile and make you feel at ease.
                </p>
                <div className="bg-cream rounded-lg p-5 mt-6">
                  <h3 className="font-heading font-semibold text-primary mb-2">Practice Hours</h3>
                  <div className="text-sm text-charcoal/80 space-y-1">
                    <p>Monday, Wednesday, Thursday 8.30-5pm</p>
                    <p>Tuesday Open til 7pm</p>
                    <p>Friday Open til 6pm</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Service Boxes */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement>
              <div className="bg-white rounded-lg p-8 h-full">
                <div className="mb-4">
                  <img
                    src={siteInfo.images.serviceIcon1}
                    alt="General Dentistry"
                    className="h-16 w-auto"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">General Dentistry</h3>
                <p className="text-charcoal/70">
                  Comprehensive dental exam with X-rays and full mouth clean/ Preventive dentistry
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <div className="bg-white rounded-lg p-8 h-full">
                <div className="mb-4">
                  <img
                    src={siteInfo.images.serviceIcon2}
                    alt="Free/Subsidised Dental Care"
                    className="h-16 w-auto"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">Free/Subsidised Dental Care</h3>
                <p className="text-charcoal/70">
                  Free dental care for all high school aged children/ Free emergency dental service for all children/ Student discounts
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <p className="section-label text-accent-light mb-2">CLIENTS WITH</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12">
              Reason To Smile
            </h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeTestimonials.map((testimonial, index) => (
              <AnimatedElement key={testimonial.id} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-accent mb-4 flex-shrink-0" />
                  <p className="text-white/90 text-sm leading-relaxed flex-1">
                    "{testimonial.quote.length > 300 ? testimonial.quote.slice(0, 300) + '...' : testimonial.quote}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="font-heading font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-white/60 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              View All Testimonials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <p className="section-label mb-2">ELMWOOD DENTAL</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Services We Provide
            </h2>
            <p className="text-charcoal/70 max-w-3xl mb-4">
              At Elmwood Dental, we offer a comprehensive range of dental services, including but not limited to:
            </p>
          </AnimatedElement>

          <div className="mt-8 space-y-4">
            <AnimatedElement>
              <p className="text-charcoal/80 leading-relaxed">
                <strong className="text-charcoal">Comprehensive new patient examinations:</strong> Our thorough examinations help us understand your unique dental needs and create a personalized treatment plan.
              </p>
            </AnimatedElement>
            <AnimatedElement>
              <p className="text-charcoal/80 leading-relaxed">
                <strong className="text-charcoal">Regular follow-up examinations:</strong> We recommend regular check-ups to ensure that your teeth and gums remain healthy.
              </p>
            </AnimatedElement>
            <AnimatedElement>
              <p className="text-charcoal/80 leading-relaxed">
                <strong className="text-charcoal">Dentist-provided hygiene services:</strong> To keep your teeth and gums clean and healthy.
              </p>
            </AnimatedElement>
            <AnimatedElement>
              <p className="text-charcoal/80 leading-relaxed">
                <strong className="text-charcoal">Free Dentistry for High School Students:</strong> We offer free basic dental care to high school students as part of our commitment to improving oral health in the community.
              </p>
            </AnimatedElement>
            <AnimatedElement>
              <p className="text-charcoal/80 leading-relaxed">
                <strong className="text-charcoal">ACC Treatment:</strong> We are an accredited ACC provider and can help you with any injuries related to dental accidents.
              </p>
            </AnimatedElement>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <AnimatedElement key={service.id} delay={index * 0.05}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block p-5 bg-cream rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <h3 className="font-heading font-semibold text-primary group-hover:text-white transition-colors mb-2">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center text-sm font-medium text-accent group-hover:text-accent-light transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimatedElement>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href={siteInfo.phoneTel} className="btn-primary">
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
            <a
              href={siteInfo.bookOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Calendar className="w-4 h-4" />
              Book Online
            </a>
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
