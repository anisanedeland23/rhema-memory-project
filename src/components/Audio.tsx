    "use client";

    import { useEffect, useRef, useState } from "react";

    export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // 🔥 START AUDIO (dipanggil dari EntryGate)
    useEffect(() => {
        (window as any).startAudio = async () => {
        if (!audioRef.current) return;

        try {
            audioRef.current.volume = 0;

            await audioRef.current.play();
            setIsPlaying(true);

            // 🎧 FADE IN
            let vol = 0;
            const fade = setInterval(() => {
            if (!audioRef.current) return;

            if (vol < 1) {
                vol += 0.05;
                audioRef.current.volume = vol;
            } else {
                clearInterval(fade);
            }
            }, 100);

        } catch (err) {
            console.log("Autoplay blocked:", err);
        }
        };

        (window as any).bgAudio = audioRef;
    }, []);

    // 🔥 PAUSE SAAT PINDAH TAB
    useEffect(() => {
        const handleVisibility = () => {
        if (!audioRef.current) return;

        if (document.hidden) {
            audioRef.current.pause();
        } else if (isPlaying) {
            audioRef.current.play().catch(() => {});
        }
        };

        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
        document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, [isPlaying]);

    const toggleAudio = async () => {
        if (!audioRef.current) return;

        if (audioRef.current.paused) {
        await audioRef.current.play().catch(() => {});
        setIsPlaying(true);
        } else {
        audioRef.current.pause();
        setIsPlaying(false);
        }
    };

    return (
        <>
        <audio ref={audioRef} loop preload="auto">
            <source
            src="https://res.cloudinary.com/dbn6nfh2q/video/upload/v1777296425/Ever_Since_Day_One_-_Army_Of_God_Worship_mdw716.mp3"
            type="audio/mpeg"
            />
        </audio>

        <button
            onClick={toggleAudio}
            className="fixed bottom-6 right-6 z-50 bg-black/70 text-white text-xs px-4 py-2 rounded-full border border-white/20"
        >
            {isPlaying ? "Sound Off" : "Sound On"}
        </button>
        </>
    );
    }