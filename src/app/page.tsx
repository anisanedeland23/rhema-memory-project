import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* Ini akan memanggil tampilan RHEMA. yang kita buat tadi */}
      <Hero />

      {/* Gallery akan otomatis muncul di bawahnya nanti */}
      <div className="bg-black py-20">
        <Gallery />
      </div>
    </main>
  );
}