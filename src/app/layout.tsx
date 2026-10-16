import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Nahuel Recabarren — Dirección creativa para marcas | Buenos Aires",
  description: "Director creativo en Buenos Aires. Estrategia de contenido, posicionamiento y dirección de rodaje para clínicas, cafés y empresas.",
  keywords: [
    "director creativo Buenos Aires",
    "dirección creativa marcas",
    "estrategia de contenido",
    "posicionamiento de marca",
    "dirección de rodaje Buenos Aires",
    "dirección creativa clínicas",
    "dirección creativa cafés",
    "dirección creativa empresas Argentina",
    "Nahuel Recabarren",
    "NahuelContent",
  ],
  authors: [{ name: "Nahuel Recabarren", url: "https://nahuelcontent.store" }],
  creator: "Nahuel Recabarren",
  metadataBase: new URL("https://nahuelcontent.store"),
  alternates: {
    canonical: "https://nahuelcontent.store",
  },
  openGraph: {
    title: "Nahuel Recabarren — Dirección creativa para marcas | Buenos Aires",
    description: "Director creativo en Buenos Aires. Estrategia de contenido, posicionamiento y dirección de rodaje para clínicas, cafés y empresas.",
    type: "website",
    url: "https://nahuelcontent.store",
    siteName: "Nahuel Recabarren",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahuel Recabarren — Dirección creativa para marcas",
    description: "Director creativo en Buenos Aires. Estrategia, posicionamiento y dirección de rodaje para marcas.",
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
              description: "Director creativo en Buenos Aires. Estrategia de contenido, posicionamiento y dirección de rodaje para clínicas, cafés y empresas.",
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
                "Posicionamiento de Marca",
                "Dirección de Rodaje",
                "Producción Audiovisual",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Alpha Studio",
                url: "https://alpha-studio-bice.vercel.app",
              },
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
