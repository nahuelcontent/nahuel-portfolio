import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CreativeDirection from "@/components/CreativeDirection";
import UGCSection from "@/components/UGCSection";
import Projects from "@/components/Projects";
import AlphaStudioForm from "@/components/AlphaStudioForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <Marquee />
        <CreativeDirection />
        <UGCSection />
        <Marquee />
        <Projects />
        <AlphaStudioForm />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
