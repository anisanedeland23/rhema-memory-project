    "use client";

    import { useRef, useState } from "react";
    import { motion } from "framer-motion";

    type Voice = {
    id: string;
    name: string;
    url: string;
    };

    const VOICES: Voice[] = [
    {
        id: "v1",
        name: "Teman 1",
        url: "https://res.cloudinary.com/dbn6nfh2q/video/upload/vXXXX/voice1.mp3",
    },
    {
        id: "v2",
        name: "Teman 2",
        url: "https://res.cloudinary.com/dbn6nfh2q/video/upload/vXXXX/voice2.mp3",
    },
    ];

    export default function VoiceNotes() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

    const handlePlay = (id: string) => {
        Object.keys(audioRefs.current).forEach((key) => {
        if (key !== id) {
            audioRefs.current[key]?.pause();
        }
        });

        const audio = audioRefs.current[id];
        if (!audio) return;

        if (audio.paused) {
        audio.play();
        setActiveId(id);

        // pause bg music
        if ((window as any).bgAudio?.current) {
            (window as any).bgAudio.current.pause();
        }
        } else {
        audio.pause();
        setActiveId(null);

        // resume bg music
        if ((window as any).bgAudio?.current) {
            (window as any).bgAudio.current.play();
        }
        }
    };

    return (
        <section className="max-w-3xl mx-auto px-4 py-32">
        <h2 className="text-white text-center text-2xl tracking-[0.3em] uppercase mb-12">
            Voices for You
        </h2>

        <div className="space-y-6">
            {VOICES.map((voice) => (
            <motion.div
                key={voice.id}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 p-6 rounded-xl flex items-center justify-between"
            >
                <div>
                <p className="text-white">{voice.name}</p>
                <p className="text-white/40 text-sm">Tap to listen</p>
                </div>

                <button
                onClick={() => handlePlay(voice.id)}
                className="text-white border px-4 py-2 rounded-full"
                >
                {activeId === voice.id ? "Pause" : "Play"}
                </button>

                <audio
                ref={(el) => {
                    audioRefs.current[voice.id] = el;
                }}
                >
                <source src={voice.url} type="audio/mpeg" />
                </audio>
            </motion.div>
            ))}
        </div>
        </section>
    );
    }