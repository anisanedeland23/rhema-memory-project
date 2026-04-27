    "use client";

    import { useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";

    type EntryGateProps = {
    onEnter: () => void;
    };

    export default function EntryGate({ onEnter }: EntryGateProps) {
    const [open, setOpen] = useState(true);

        const handleEnter = async () => {
    if ((window as any).startAudio) {
        await (window as any).startAudio();
    }

    setOpen(false);

    setTimeout(() => {
        onEnter();
    }, 500);
    };

    return (
        <AnimatePresence>
        {open && (
            <motion.div
            key="entry-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center gap-6"
            >
                {/* Title kecil biar lebih cinematic */}
                <p className="text-white/40 tracking-[0.5em] text-xs uppercase">
                A Memory Experience
                </p>

                {/* BUTTON */}
                <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white border border-white/30 px-10 py-4 rounded-full tracking-[0.3em] uppercase text-sm hover:bg-white hover:text-black transition"
                >
                Tap to Enter
                </motion.button>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
    }