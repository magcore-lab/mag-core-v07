import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAG CORE V08 - BLACK EDITION | FIELD_OS",
  description: "Noyau Vantablack, 7 ondes blanches pur ultra lumineuses, noir cinéma total, occlusion propre - FIELD_OS - LAB_SYSTEM // 01 - MAG CORE LAB",
  metadataBase: new URL("https://mag-core-v07.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://mag-core-v07.vercel.app/",
    title: "MAG CORE V08 - BLACK EDITION | FIELD_OS",
    description: "Noyau Vantablack, 7 ondes blanches pur, noir cinéma total - FIELD_OS EN DIRECT",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAG CORE V08 - BLACK EDITION | FIELD_OS",
    description: "Noyau Vantablack, 7 ondes blanches pur, noir cinéma total - FIELD_OS EN DIRECT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr"><body className="bg-black text-white antialiased">{children}</body></html>
  );
}
