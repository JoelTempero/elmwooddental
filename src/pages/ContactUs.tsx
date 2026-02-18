import { Phone, Calendar, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import ContactForm from '../components/ui/ContactForm'
import { siteInfo } from '../data/navigation'

export default function ContactUs() {
  return (
    <>
      <title>Contact Us - Elmwood Dental</title>
      <PageHero title="Contact Us" />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <div className="max-w-3xl">
              <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                Welcome to Elmwood Dental! We would love to hear from you. If you have any questions or would like to schedule an appointment with one of our friendly dentists, please don't hesitate to get in touch with us.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                You can reach us by phone, email, or by filling out the contact form on this page. Our team will get back to you as soon as possible to answer your questions or schedule your appointment.
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

      {/* Contact Details + Form */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedElement>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-8">
                  Get In Touch With Elmwood Dental
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-charcoal mb-1">Address</h3>
                      <p className="text-charcoal/70">{siteInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-charcoal mb-1">Call Us</h3>
                      <a href={siteInfo.phoneTel} className="text-accent hover:text-accent-dark transition-colors">
                        {siteInfo.phoneInternational}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-charcoal mb-1">Working Hours</h3>
                      <p className="text-charcoal/70">{siteInfo.hours.contact}</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${siteInfo.map.lng}!3d${siteInfo.map.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a3a8c40b5b7%3A0x7c5e5d0b0d0e7b0a!2s6%20Wairakei%20Road%2C%20Strowan%2C%20Christchurch%208052!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Elmwood Dental Location"
                    className="w-full"
                  />
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.15}>
              <ContactForm
                heading="Get In Touch!"
                text="At Elmwood Dental, we are committed to providing high-quality dental care in a comfortable and welcoming environment. Our team of experienced dentists and dental hygienists is dedicated to helping you achieve optimal oral health and a beautiful smile. We look forward to hearing from you and helping you take the first step towards a healthier, happier smile!"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  )
}
