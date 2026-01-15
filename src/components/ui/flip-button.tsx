import { useState } from 'react'
import { motion } from 'framer-motion'

export function FlipButton({
  text1,
  text2,
  className,
  type = 'button',
}: {
  text1: string
  text2: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}) {
  const [show, setShow] = useState(false)

  const flipVariants = {
    one: {
      rotateX: 0,
      backgroundColor: 'var(--accent)',
      color: '#ffffff',
    },
    two: {
      rotateX: 180,
      backgroundColor: '#22c55e',
      color: '#ffffff',
    },
  }

  return (
    <motion.button
      type={type}
      className={`relative cursor-pointer flex items-center justify-center ${className ?? ''}`}
      style={{
        borderRadius: 999,
        perspective: 900,
        transformStyle: 'preserve-3d',
      }}
      onClick={() => setShow(true)}
      animate={show ? 'two' : 'one'}
      variants={flipVariants}
      transition={{ duration: 0.6, type: 'spring' }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="relative w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateX: show ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <div className="w-full" style={{ backfaceVisibility: 'hidden' }}>
          {text2}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}
        >
          {text1}
        </div>
      </motion.div>
    </motion.button>
  )
}

