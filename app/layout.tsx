import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAG CORE V08 - BLACK EDITION",
  description: "Noyau Vantablack, 6 ondes blanches pur ultra lumineuses, noir cinéma total, occlusion propre - MULTIVERSE ENGINE",
  metadataBase: new URL("https://mag-core-v07.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://mag-core-v07.vercel.app/",
    title: "MAG CORE V08 - BLACK EDITION",
    description: "Noyau Vantablack, 6 ondes blanches pur, noir cinéma total",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAG CORE V08 - BLACK EDITION",
    description: "Noyau Vantablack, 6 ondes blanches pur, noir cinéma total",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr"><body className="bg-black text-white antialiased">{children}</body></html>
  );
}
