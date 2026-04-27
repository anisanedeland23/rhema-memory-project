"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import AudioPlayer from "@/components/Audio";
import EntryGate from "@/components/EntryGate";
import VoiceNotes from "@/components/VoiceNotes";
import Ending from "@/components/Ending";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="bg-black min-h-screen">

      {/* ENTRY GATE */}
      {!entered && <EntryGate onEnter={() => setEntered(true)} />}

      {/* AUDIO */}
      {entered && <AudioPlayer />}

      {/* CONTENT */}
      {entered && (
        <>
          <Hero />
          <Gallery />
          <VoiceNotes />
          <Ending />
        </>
      )}
    </main>
  );
}