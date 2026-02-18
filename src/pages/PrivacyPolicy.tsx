import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function PrivacyPolicy() {
  return (
    <>
      <title>Privacy Policy - Elmwood Dental</title>
      <PageHero title="Privacy Policy" />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedElement>
            <div className="max-w-3xl prose prose-lg">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">Privacy Policy</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Elmwood Dental is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our dental services.
              </p>
              <h3 className="text-xl font-heading font-semibold text-primary mt-8 mb-3">Information We Collect</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                We may collect personal information such as your name, email address, phone number, and dental health information when you schedule an appointment, fill out a contact form, or use our services.
              </p>
              <h3 className="text-xl font-heading font-semibold text-primary mt-8 mb-3">How We Use Your Information</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Your personal information is used to provide dental services, communicate with you about appointments, and improve our services. We do not sell or share your personal information with third parties except as required by law or to provide our services.
              </p>
              <h3 className="text-xl font-heading font-semibold text-primary mt-8 mb-3">Data Security</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
              <h3 className="text-xl font-heading font-semibold text-primary mt-8 mb-3">Contact Us</h3>
              <p className="text-charcoal/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at 03 3552348 or visit us at 6 Wairakei Road, Strowan, Christchurch 8052, New Zealand.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
