import EntryGate from "@/components/EntryGate";
import AudioPlayer from "@/components/Audio";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import VoiceNotes from "@/components/VoiceNotes";

export default function Home() {
  return (
    <EntryGate>
      <main className="bg-black min-h-screen">
        <AudioPlayer />

        <Hero />

        <div className="bg-black py-20">
          <Gallery />
          <VoiceNotes />
        </div>
      </main>
    </EntryGate>
  );
}