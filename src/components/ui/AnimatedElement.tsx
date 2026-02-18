import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right'
}

const animations = {
  'fade-up': { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  'fade-in': { initial: { opacity: 0 }, animate: { opacity: 1 } },
  'fade-left': { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
  'fade-right': { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
}

export default function AnimatedElement({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}: AnimatedElementProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px',
  })

  const { initial, animate } = animations[animation]

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
