import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { mainNav, siteInfo } from '../../data/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex-shrink-0">
              <img
                src={siteInfo.images.logo}
                alt="Elmwood Dental"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {mainNav.map((item) =>
                item.children ? (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        location.pathname.startsWith('/services')
                          ? 'text-primary bg-primary/5'
                          : 'text-charcoal hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 mt-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              location.pathname === child.path
                                ? 'text-primary bg-primary/5 font-medium'
                                : 'text-charcoal hover:text-primary hover:bg-primary/5'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary bg-primary/5'
                        : 'text-charcoal hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={siteInfo.phoneTel}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteInfo.phone}
              </a>
            </div>

            <button
              className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-charcoal" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <img
                src={siteInfo.images.logo}
                alt="Elmwood Dental"
                className="h-8 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4" aria-label="Mobile navigation">
              {mainNav.map((item) =>
                item.children ? (
                  <div key={item.path}>
                    <button
                      className="flex items-center justify-between w-full py-3 px-3 text-left font-medium text-charcoal hover:text-primary transition-colors"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pb-2">
                        <Link
                          to={item.path}
                          className="block py-2 px-3 text-sm text-charcoal/80 hover:text-primary transition-colors font-medium"
                        >
                          All Services
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block py-2 px-3 text-sm text-charcoal/80 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-3 px-3 font-medium text-charcoal hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <a href={siteInfo.phoneTel} className="btn-primary w-full justify-center">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
