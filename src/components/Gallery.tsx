    "use client";

    import { motion } from "framer-motion";
    import { useEffect, useRef, useState } from "react";
    import { getImageUrl, getVideoUrl } from "@/lib/cloudinary";
    import { MEMORY_LIST } from "../data/memories";

    type MemoryItem = {
    id: string;
    };

    function SmartMedia({ id }: { id: string }) {
    const [isVideo, setIsVideo] = useState(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (!videoRef.current) return;

            if (entry.isIntersecting) {
            // 🔥 SAFE PLAY (NO SPAM)
            if (videoRef.current.paused) {
                videoRef.current.play().catch(() => {});
            }

            } else {
            if (!videoRef.current.paused) {
                videoRef.current.pause();
            }

            }
        },
        { threshold: 0.5 }
        );

        observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    if (isVideo) {
        return (
        <video
            ref={videoRef}
            src={getVideoUrl(id)}
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setIsVideo(false)}
            className="w-full h-auto object-cover"
        />
        );
    }

    return (
        <img
        src={getImageUrl(id)}
        alt="memory"
        loading="lazy"
        className="w-full h-auto object-cover"
        />
    );
    }

    export default function Gallery() {
    const [visibleCount, setVisibleCount] = useState<number>(12);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setVisibleCount((prev) => prev + 12);
        }
        });

        if (loaderRef.current) {
        observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const visibleItems: MemoryItem[] = MEMORY_LIST.slice(0, visibleCount);

    return (
        <div className="w-full max-w-6xl mx-auto px-4">

        <div className="mb-16 text-center">
            <h2 className="text-white text-3xl tracking-[0.3em] uppercase">
            The Journey
            </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {visibleItems.map((memory: MemoryItem, index: number) => (
            <motion.div
                key={memory.id}
                initial={{
                opacity: 0,
                y: 40,
                x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-xl overflow-hidden bg-neutral-900"
            >
                <SmartMedia id={memory.id} />
            </motion.div>
            ))}
        </div>

        <div ref={loaderRef} className="h-20" />
        </div>
    );
    }