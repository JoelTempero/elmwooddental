import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { RelatedService } from '../../types'

interface RelatedServicesProps {
  services: RelatedService[]
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-primary">Related Services</h3>
      {services.map((service) => (
        <Link
          key={service.slug}
          to={`/services/${service.slug}`}
          className="group block p-4 bg-cream rounded-lg hover:bg-warm-gray transition-colors"
        >
          <h4 className="font-heading font-semibold text-charcoal group-hover:text-primary transition-colors mb-2">
            {service.title}
          </h4>
          <p className="text-sm text-charcoal/70 mb-2">{service.description}</p>
          <span className="inline-flex items-center text-sm font-medium text-accent group-hover:text-accent-dark transition-colors">
            Learn more
            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      ))}
    </div>
  )
}
