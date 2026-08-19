import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Nahuel Recabarren — Director Creativo & Agencia de Contenido | Buenos Aires",
  description: "Director creativo y creador de contenido UGC en Buenos Aires. Estrategia de contenido, producción de reels, dirección creativa y posicionamiento de marca para negocios y marcas personales en Argentina.",
  keywords: [
    "director creativo Buenos Aires",
    "agencia de contenido Argentina",
    "creación de contenido Buenos Aires",
    "UGC creator Argentina",
    "dirección creativa marcas",
    "estrategia de contenido redes sociales",
    "producción de reels Buenos Aires",
    "marketing de contenidos Argentina",
    "posicionamiento de marca",
    "contenido para Instagram Argentina",
    "Alpha Studio agencia contenido",
    "creador de contenido UGC",
    "agencia marketing digital Buenos Aires",
    "Nahuel Recabarren",
  ],
  authors: [{ name: "Nahuel Recabarren", url: "https://nahuelcontent.store" }],
  creator: "Nahuel Recabarren",
  metadataBase: new URL("https://nahuelcontent.store"),
  alternates: {
    canonical: "https://nahuelcontent.store",
  },
  openGraph: {
    title: "Nahuel Recabarren — Director Creativo & Agencia de Contenido",
    description: "Director creativo y creador de contenido UGC en Buenos Aires. Estrategia, producción y dirección creativa para marcas que quieren posicionarse con intención.",
    type: "website",
    url: "https://nahuelcontent.store",
    siteName: "Nahuel Recabarren · NahuelContent",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahuel Recabarren — Director Creativo & Agencia de Contenido",
    description: "Director creativo y creador de contenido UGC en Buenos Aires. Estrategia, producción y dirección creativa para marcas.",
    creator: "@nahuelcontent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://nahuelcontent.store" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nahuel Recabarren",
              jobTitle: "Director Creativo",
              description: "Director creativo y creador de contenido UGC en Buenos Aires. Fundador de Alpha Studio, agencia de contenido y dirección creativa para marcas en Argentina.",
              url: "https://nahuelcontent.store",
              sameAs: [
                "https://www.instagram.com/nahuelcontent/",
                "https://www.linkedin.com/in/nahuel-recabarren",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Buenos Aires",
                addressCountry: "AR",
              },
              knowsAbout: [
                "Dirección Creativa",
                "Estrategia de Contenido",
                "Creación de Contenido",
                "UGC",
                "Marketing Digital",
                "Producción Audiovisual",
                "Posicionamiento de Marca",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Alpha Studio",
                url: "https://alpha-studio-bice.vercel.app",
                description: "Agencia de contenido y dirección creativa en Buenos Aires y La Plata.",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Alpha Studio",
              description: "Agencia de creación de contenido, dirección creativa y estrategia de marketing digital en Buenos Aires y La Plata, Argentina.",
              url: "https://nahuelcontent.store",
              founder: {
                "@type": "Person",
                name: "Nahuel Recabarren",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Buenos Aires",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              areaServed: ["Buenos Aires", "La Plata", "Argentina"],
              serviceType: [
                "Dirección Creativa",
                "Estrategia de Contenido",
                "Producción de Reels",
                "UGC Creator",
                "Marketing Digital",
                "Fotografía de Marca",
              ],
              sameAs: [
                "https://www.instagram.com/nahuelcontent/",
                "https://alpha-studio-bice.vercel.app",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
