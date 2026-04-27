"use client";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Audio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Karena ada kebijakan browser, audio butuh interaksi user
        audioRef.current.play().catch(e => console.log("Audio play error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
        <audio
        ref={audioRef}
        // Hapus version number, langsung path ke file
        src="https://res.cloudinary.com/dbn6nfh2q/video/upload/rhema-memories/Ever_Since_Day_One_-_Army_Of_God_Worship_mdw716.mp3"
        loop
        />
      <button 
        onClick={toggleAudio}
        className="bg-white text-black p-4 rounded-full shadow-2xl active:scale-95 transition-transform"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
}