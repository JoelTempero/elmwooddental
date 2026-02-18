import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  const bgImage = image || 'https://elmwooddental.co.nz/wp-content/uploads/2023/03/BB18c.jpeg'

  return (
    <section className="relative min-h-[40vh] flex items-end">
      <img
        src={bgImage}
        alt=""
        role="presentation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/60 to-primary/30" />
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 md:px-8 pb-12 pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 mt-4 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
