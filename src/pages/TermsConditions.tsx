import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function TermsConditions() {
  return (
    <>
      <title>Terms & Conditions - Elmwood Dental</title>
      <PageHero title="Terms & Conditions" />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <div className="max-w-3xl prose prose-lg">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">Terms & Conditions</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                By accessing and using the Elmwood Dental website, you agree to be bound by these Terms and Conditions. Please read them carefully before using our website.
              </p>
              <h3 className="text-xl font-heading font-semibold text-primary mt-8 mb-3">Use of Website</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                The content on this website is provided for general informational purposes only. It is not intended to be a substitute for professional dental advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a dental condition.
              </p>
              <h3 className="text-xl font-heading font-semibold text-primary mt-8 mb-3">Appointments and Cancellations</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                We require at least 24 hours notice for cancellation or rescheduling of appointments. Failure to provide adequate notice may result in a cancellation fee.
              </p>
              <h3 className="text-xl font-heading font-semibold text-primary mt-8 mb-3">Payment</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Payment is expected at the time of service unless other arrangements have been made in advance. We accept various payment methods and can provide quotes for treatment plans upon request.
              </p>
              <h3 className="text-xl font-heading font-semibold text-primary mt-8 mb-3">Limitation of Liability</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Elmwood Dental shall not be held liable for any damages arising from the use of this website or any information provided herein. We make no warranties or representations about the accuracy or completeness of the website's content.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
