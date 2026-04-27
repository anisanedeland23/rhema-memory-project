"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstClick = () => {
      if (!audioRef.current || hasInteracted) return;

      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch(() => {});
    };

    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener("click", handleFirstClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("click", handleFirstClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [hasInteracted]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source
          src="https://res.cloudinary.com/dbn6nfh2q/video/upload/v1777296425/Ever_Since_Day_One_-_Army_Of_God_Worship_mdw716.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* BUTTON */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 bg-black/70 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
      >
        {isPlaying ? "Sound Off" : "Sound On"}
      </button>
    </>
  );
}