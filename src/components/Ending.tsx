    "use client";

    import { motion } from "framer-motion";

    export default function Ending() {
    return (
        <section className="h-screen flex items-center justify-center text-center px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-white text-3xl mb-6">
            Thank You, Rhema.
            </h2>

            <p className="text-white/60 max-w-md">
            For every memory, every laugh, every moment we shared.
            This is just the beginning.
            </p>
        </motion.div>
        </section>
    );
    }