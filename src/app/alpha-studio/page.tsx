import { Metadata } from "next";
import AlphaStudioPage from "./AlphaStudioPage";

export const metadata: Metadata = {
  title: "Alpha Studio — Agencia de dirección creativa y producción | Buenos Aires",
  description: "Alpha Studio es la agencia de dirección creativa y producción de Nahuel Recabarren. Estrategia de contenido, producción audiovisual y sistemas digitales para marcas en Argentina.",
};

export default function Page() {
  return <AlphaStudioPage />;
}
