import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ElProblema from "@/components/ElProblema";
import QueHago from "@/components/QueHago";
import Casos from "@/components/Casos";
import ComoTrabajo from "@/components/ComoTrabajo";
import DosFormas from "@/components/DosFormas";
import SobreMi from "@/components/SobreMi";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <Marquee />
        <ElProblema />
        <QueHago />
        <Casos />
        <ComoTrabajo />
        <DosFormas />
        <SobreMi />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
