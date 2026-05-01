import Hero from "@/components/Hero";
import SliderMemories from "@/components/SliderMemories"; // Section Animasi 1
import Gallery from "@/components/Gallery";         // Section Animasi 2 (Masonry)
import Audio from "@/components/Audio";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Audio />
      
      {/* 1. Hero Section (Visual Impact) */}
      <Hero />

      {/* 2. Endless Slide Section (Dynamic Motion) */}
      <SliderMemories />

      {/* 3. Main Gallery Section (The Journey) */}
      <div className="py-20">
        <Gallery />
      </div>
    </main>
  );
}