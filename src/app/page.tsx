import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground"; // Make sure it's imported

export default function Home() {
  return (
    <main className="relative">
      <ParticlesBackground /> {/* z-0: stays in background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Contact />
      </div>
    </main>
  );
}
