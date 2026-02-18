import type { NavItem } from '../types'

export const mainNav: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'ACC', path: '/services/acc' },
      { label: 'Teeth Whitening', path: '/services/teeth-whitening' },
      { label: 'Root Canals', path: '/services/root-canals' },
      { label: 'WINZ', path: '/services/winz' },
      { label: 'Crowns & Bridges', path: '/services/crowns-bridges' },
      { label: 'Botox (Dysport)', path: '/services/botox-dysport' },
      { label: 'Dentures', path: '/services/dentures' },
      { label: 'Cosmetic / Restorative Dentistry', path: '/services/cosmetic-restorative-dentistry' },
      { label: 'Veneers', path: '/services/veneers' },
      { label: 'Dental Exam, Health & Maintenance', path: '/services/dental-exam-health-maintenance' },
      { label: 'Implant Dentistry', path: '/services/implant-dentistry' },
      { label: 'Tooth Extraction', path: '/services/tooth-extraction' },
      { label: 'Conscious Intravenous Sedation', path: '/services/conscious-intravenous-sedation' },
      { label: 'Wisdom Teeth Removal', path: '/services/wisdom-teeth-removal' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact Us', path: '/contact-us' },
]

export const footerServices: NavItem[] = [
  { label: 'Tooth Whitening', path: '/services/teeth-whitening' },
  { label: 'Root Canals', path: '/services/root-canals' },
  { label: 'Implant Dentistry', path: '/services/implant-dentistry' },
  { label: 'Tooth Extraction', path: '/services/tooth-extraction' },
]

export const footerLinks: NavItem[] = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-conditions' },
  { label: 'Sitemap', path: '/sitemap' },
]

export const siteInfo = {
  name: 'Elmwood Dental',
  address: '6 Wairakei Road, Strowan, Christchurch 8052, New Zealand',
  phone: '03 3552348',
  phoneInternational: '+64 3 355 2348',
  phoneTel: 'tel:+6433552348',
  bookOnlineUrl: 'https://elmwooddental.co.nz/',
  hours: {
    homepage: 'Monday, Wednesday, Thursday 8.30-5pm\nTuesday Open til 7pm\nFriday Open til 6pm',
    contact: 'Monday to Thursday (8am-5pm), Friday Till 6pm',
  },
  map: {
    lat: -43.509541187175,
    lng: 172.60607882884,
    zoom: 19,
  },
  images: {
    logo: 'https://elmwooddental.co.nz/wp-content/uploads/2023/04/logo22.png',
    logoIcon: 'https://elmwooddental.co.nz/wp-content/uploads/2023/04/FullColor_TransparentBg_1280x1024_72dpi.png',
    building: 'https://elmwooddental.co.nz/wp-content/uploads/2024/12/Elmwood-Dental-Christchurch-New-Zealand-scaled.jpeg',
    accLogo: 'https://elmwooddental.co.nz/wp-content/uploads/2023/06/ACC-Logos.png',
    headerBg: 'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg',
    interior1: 'https://elmwooddental.co.nz/wp-content/uploads/2023/04/20230316-_DSC9730-scaled.jpg',
    aboutHeader1: 'https://elmwooddental.co.nz/wp-content/uploads/2023/03/Elmwood03header.jpeg',
    aboutHeader2: 'https://elmwooddental.co.nz/wp-content/uploads/2023/03/Elmwood10header.jpeg',
    serviceIcon1: 'https://elmwooddental.co.nz/wp-content/uploads/2023/02/1-Copy.png',
    serviceIcon2: 'https://elmwooddental.co.nz/wp-content/uploads/2023/02/3.png',
  },
  footerAbout: 'Elmwood Dental is a compassionate dental practice that offers a comprehensive range of dental services. Our team of highly qualified dentists and friendly staff are committed to ensuring you receive the highest quality of care in a comfortable and relaxed environment.',
}
