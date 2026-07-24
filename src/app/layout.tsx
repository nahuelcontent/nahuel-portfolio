import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Nahuel Recabarren — Creative Director",
  description: "Creative direction, brand positioning and UGC content for brands that want to be perceived correctly.",
  openGraph: {
    title: "Nahuel Recabarren — Creative Director",
    description: "Creative direction, brand positioning and UGC content for brands that want to be perceived correctly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahuel Recabarren — Creative Director",
    description: "Creative direction, brand positioning and UGC content for brands that want to be perceived correctly.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
