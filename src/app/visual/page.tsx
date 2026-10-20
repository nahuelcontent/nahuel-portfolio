import { Metadata } from "next";
import VisualPage from "./VisualPage";

export const metadata: Metadata = {
  title: "Edición y contenido visual para marcas | Nahuel",
  description:
    "Foto, video y edición para marcas y profesionales. Mandame tu material y te lo devuelvo listo para publicar.",
  openGraph: {
    title: "Edición y contenido visual para marcas | Nahuel",
    description:
      "Foto, video y edición para marcas y profesionales. Mandame tu material y te lo devuelvo listo para publicar.",
    url: "https://nahuelcontent.store/visual",
    siteName: "Nahuel Visual",
    images: [
      {
        url: "/images/visual/og.jpg",
        width: 1200,
        height: 630,
        alt: "Nahuel Visual — Edición y contenido para marcas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edición y contenido visual para marcas | Nahuel",
    description:
      "Foto, video y edición para marcas y profesionales. Mandame tu material y te lo devuelvo listo para publicar.",
    images: ["/images/visual/og.jpg"],
  },
};

export default function Page() {
  return <VisualPage />;
}
