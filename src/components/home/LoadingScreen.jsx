import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-14 h-14 rounded-[14px] bg-brand-on-dark text-[#1d1d1f] flex items-center justify-center text-xl font-bold tracking-[-0.02em]"
        >
          HI
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-semibold text-white tracking-[-0.02em] m-0"
        >
          Hinglaj International
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xs tracking-[0.06em] uppercase text-white/40 m-0"
        >
          Est. May 2026 · Deesa, Gujarat
        </motion.p>

        <div className="w-[180px] h-px bg-white/10 overflow-hidden rounded-sm mt-2">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-brand-on-dark origin-left"
          />
        </div>
      </div>
    </motion.div>
  )
}
