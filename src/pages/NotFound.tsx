import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-heading font-bold text-primary/20 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-charcoal/70 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  )
}
