// /src/components/Gallery.tsx
"use client";
import { motion } from "framer-motion";
import { getImageUrl, getVideoUrl } from "@/lib/cloudinary"; // ← tambah getVideoUrl

const MEMORY_LIST = [
  // IMAGE
  { id: "rhema-memories/rhema_-_6_urmkwc",  type: "image", caption: "Memory #1" },
  { id: "rhema-memories/rhema_-_8_dpt1ct",  type: "image", caption: "Memory #2" },
  { id: "rhema-memories/rhema_-_7_sckosh",  type: "image", caption: "Memory #3" },
  { id: "rhema-memories/rhema_-_39_ogwiae", type: "image", caption: "Memory #4" },
  { id: "rhema-memories/rhema_-_38_gn5beb", type: "image", caption: "Memory #5" },
  // VIDEO
  { id: "rhema-memories/rhema_-_4_vlifx2",  type: "video", caption: "Video #1" },
  { id: "rhema-memories/rhema_-_1_o9rxql",  type: "video", caption: "Video #2" },
];

export default function Gallery() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">

      {/* Header */}
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl font-light tracking-[0.3em] uppercase mb-4"
        >
          The Journey
        </motion.h2>
        <div className="h-[1px] w-24 bg-neutral-800 mx-auto" />
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {MEMORY_LIST.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
            className="relative break-inside-avoid rounded-xl overflow-hidden bg-neutral-900 group cursor-crosshair"
          >
            {/* ↓ INI BAGIAN YANG KAMU TANYA — taruh di sini, gantiin <img> lama */}
            {memory.type === "video" ? (
              <video
                src={getVideoUrl(memory.id)}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700"
              />
            ) : (
              <img
                src={getImageUrl(memory.id)}
                alt={memory.caption}
                loading="lazy"
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            )}
            {/* ↑ sampai sini */}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div className="flex flex-col">
                <span className="text-white text-sm font-light tracking-wide italic">
                  {memory.caption}
                </span>
                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">
                  #{String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-32 mb-10 text-center border-t border-neutral-900 pt-10">
        <p className="text-neutral-600 text-[10px] uppercase tracking-[0.5em]">
          Made with love © 2026
        </p>
      </footer>
    </div>
  );
}