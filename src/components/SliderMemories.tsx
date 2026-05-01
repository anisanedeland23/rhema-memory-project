"use client";
import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/cloudinary";
import { MEMORY_LIST } from "@/data/memories";

export default function SliderMemories() {
  const slidePhotos = MEMORY_LIST.slice(0, 10);
  const duplicatedPhotos = [...slidePhotos, ...slidePhotos];

  return (
    <section className="py-20 overflow-hidden bg-[#050505] border-y border-white/5">
      <div className="mb-10 px-10 text-center md:text-left">
        <h3 className="text-white/30 uppercase tracking-[0.5em] text-[10px]">Team Collaboration Highlights</h3>
      </div>
      
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30, // Sedikit lebih lambat agar bisa dinikmati
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 px-4"
        >
          {duplicatedPhotos.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="w-[280px] md:w-[400px] aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shrink-0"
            >
              <img
                src={getImageUrl(`rhema-memories/${item.id}`)}
                alt="Multimedia Memory"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
