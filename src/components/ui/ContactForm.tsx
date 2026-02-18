import { useState } from 'react'
import { Send } from 'lucide-react'
import AnimatedElement from './AnimatedElement'

interface ContactFormProps {
  heading?: string
  text?: string
}

export default function ContactForm({
  heading = 'Get In Touch!',
  text,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-cream rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-2xl font-heading font-semibold text-primary mb-2">Thank you!</h3>
        <p className="text-charcoal/70">We will be in touch soon.</p>
      </div>
    )
  }

  return (
    <AnimatedElement>
      <div className="bg-cream rounded-lg p-6 md:p-8">
        <h3 className="text-2xl font-heading font-semibold text-primary mb-3">{heading}</h3>
        {text && <p className="text-charcoal/70 mb-6">{text}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1.5">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Comment or Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-y"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button type="submit" className="btn-primary">
            Submit <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </AnimatedElement>
  )
}
