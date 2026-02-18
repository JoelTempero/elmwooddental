import { Phone, Calendar } from 'lucide-react'
import { siteInfo } from '../../data/navigation'

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
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
  )
}
