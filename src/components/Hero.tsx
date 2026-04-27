'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 italic">
          RHEMA.
        </h1>
        <p className="text-gray-500 tracking-[0.5em] uppercase text-xs">
          Graduation Memoires — 2026
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10"
      >
        <p className="text-gray-600 text-sm animate-bounce">Scroll Down</p>
      </motion.div>
    </section>
  );
}
