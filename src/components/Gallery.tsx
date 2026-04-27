"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getImageUrl, getVideoUrl } from "@/lib/cloudinary";

/* =========================
   📦 DATA MEMORY
========================= */
const MEMORY_LIST = [
  { id: "rhema_-_6_urmkwc", type: "image", caption: "The day everything felt right" },
  { id: "rhema_-_8_dpt1ct", type: "image", caption: "A moment we didn’t know would matter" },
  { id: "rhema_-_7_sckosh", type: "image", caption: "Laughter without reason" },
  { id: "rhema_-_39_ogwiae", type: "image", caption: "Captured forever" },
  { id: "rhema_-_38_gn5beb", type: "image", caption: "Unforgettable vibes" },
  { id: "rhema_-_4_vlifx2", type: "video", caption: "A moving memory" },
  { id: "rhema_-_1_o9rxql", type: "video", caption: "Moments in motion" },
  { id: "rhema_-_1", type: "video", caption: "Moments in motion" },
  { id: "rhema_-_2_xj1nnt", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_7_sckosh", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_39_ogwiae", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_5_b5xjwb", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_4_fq3d0q", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_38_gn5beb", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_23_ad0wyz", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_36_uiww4k", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_3_ikeskp", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_27_yrxsay", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_28_y38hiz", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_26_mlfwkq", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_13_vcbmu5", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_24_mymmak", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_25_klsiwr", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_20_sycgci", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_22_qmpgo4", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_21_qjyq7q", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_18_zltyms", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_14_hgdgen", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_19_hmumtd", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_17_xylzvs", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_12_vkqzvu", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_16_t30td0", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_15_kkbrgm", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_11_bglk97", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_37_efsit3", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_1_kvqpvi", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_10_uwtpee", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_30_f9l0md", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_29_bsqb2r", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_33_tlht8m", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_35_tqlssq", type: "image", caption: "Moments in motion" },
  { id: "rhema_-_9_kdvbkd", type: "image", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
//   { id: "", type: "video", caption: "Moments in motion" },
];

/* =========================
   🖼 IMAGE COMPONENT (BLUR LOADING)
========================= */
function ImageItem({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`w-full h-auto object-cover transition-all duration-700
        ${loaded ? "blur-0 scale-100" : "blur-xl scale-105"}`}
    />
  );
}

/* =========================
   🎥 VIDEO COMPONENT
========================= */
function VideoItem({ src }: { src: string }) {
  return (
    <video
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
    />
  );
}

/* =========================
   🚀 MAIN COMPONENT
========================= */
export default function Gallery() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">

      {/* 🔥 HEADER */}
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

      {/* 🔥 GRID */}
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
            
            {/* 🔥 MEDIA */}
            {memory.type === "video" ? (
              <VideoItem src={getVideoUrl(memory.id)} />
            ) : (
              <ImageItem
                src={getImageUrl(memory.id)}
                alt={memory.caption}
              />
            )}

            {/* 🔥 OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              
              <div className="flex flex-col">
                <span className="text-white text-sm font-light tracking-wide italic">
                  {memory.caption}
                </span>

                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* 🔥 FOOTER */}
      <footer className="mt-32 mb-10 text-center border-t border-neutral-900 pt-10">
        <p className="text-neutral-600 text-[10px] uppercase tracking-[0.5em]">
          Made with love - Multimedia GMS Salatiga © 2026
        </p>
      </footer>
    </div>
  );
}