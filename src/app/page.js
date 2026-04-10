import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CanvasScrollSequence from "@/components/CanvasScrollSequence";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#fafafa] selection:bg-red-200 selection:text-red-900">
      <Navbar />
      <Hero />
      <CanvasScrollSequence />
      <Mission />
      <Footer />
    </main>
  );
}
