import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Impact from "@/components/Impact";
import Skills from "@/components/Skills";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Experience />
        <Impact />
        <Skills />
        <Manifesto />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
