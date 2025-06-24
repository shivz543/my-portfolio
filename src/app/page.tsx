import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import Projects from "@/components/Projects";
import Added from "@/components/Added";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Added />
        <Contact />
      </div>
    </main>
  );
}
