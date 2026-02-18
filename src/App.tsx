import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import ServiceDetail from './pages/services/ServiceDetail'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import SitemapPage from './pages/SitemapPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="sitemap" element={<SitemapPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
