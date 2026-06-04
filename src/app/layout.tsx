import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nahuel Recabarren — Creative Strategist",
  description:
    "Creative strategist and content director based in Buenos Aires, focused on content strategy, brand positioning and digital communication systems.",
  openGraph: {
    title: "Nahuel Recabarren — Creative Strategist",
    description:
      "Creative strategist and content director based in Buenos Aires, focused on content strategy, brand positioning and digital communication systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahuel Recabarren — Creative Strategist",
    description:
      "Creative strategist and content director based in Buenos Aires, focused on content strategy, brand positioning and digital communication systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
