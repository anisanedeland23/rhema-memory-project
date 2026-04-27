"use client";

import { motion } from "framer-motion";

const VOICE_LIST = [
  {
    id: "voice_1",
    name: "Teman 1",
    url: "https://res.cloudinary.com/dbn6nfh2q/video/upload/vXXXX/voice1.mp3",
  },
  {
    id: "voice_2",
    name: "Teman 2",
    url: "https://res.cloudinary.com/dbn6nfh2q/video/upload/vXXXX/voice2.mp3",
  },
];

export default function VoiceNotes() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-32">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-white text-2xl tracking-[0.3em] uppercase text-center mb-16"
      >
        Voices for You
      </motion.h2>

      {/* LIST */}
      <div className="space-y-6">
        {VOICE_LIST.map((voice, index) => (
          <motion.div
            key={voice.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-900 p-6 rounded-xl"
          >
            <p className="text-white mb-3">{voice.name}</p>

            <audio controls className="w-full">
              <source src={voice.url} type="audio/mpeg" />
            </audio>
          </motion.div>
        ))}
      </div>

    </section>
  );
}