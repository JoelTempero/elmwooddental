export interface Service {
  id: string
  slug: string
  title: string
  description: string
  sections: ServiceSection[]
  reasons?: ServiceReason[]
  relatedServices?: RelatedService[]
  images: string[]
}

export interface ServiceSection {
  heading?: string
  content: string[]
  listItems?: string[]
  subsections?: { heading: string; content: string[] }[]
}

export interface ServiceReason {
  title: string
  description: string
}

export interface RelatedService {
  title: string
  slug: string
  description: string
}

export interface TeamMember {
  id: string
  name: string
  bio: string[]
  image?: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  location: string
}

export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export interface GalleryImage {
  src: string
  thumbnail?: string
  alt: string
}
