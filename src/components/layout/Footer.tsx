import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import { siteInfo, footerServices, footerLinks } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <img
              src={siteInfo.images.logo}
              alt="Elmwood Dental"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              {siteInfo.footerAbout}
            </p>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Top Services</h3>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Get In Touch Us</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p className="font-medium text-white">Elmwood Dental</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                {siteInfo.address}
              </p>
              <a
                href={siteInfo.phoneTel}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                {siteInfo.phone}
              </a>
            </div>
            <div className="mt-6">
              <img
                src={siteInfo.images.accLogo}
                alt="ACC Accredited Provider"
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <p className="text-center text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Elmwood Dental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
