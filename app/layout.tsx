import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://mag-core-v07.vercel.app'),
  title: {
    default: 'MAG CORE V07 — Multiverse OS',
    template: '%s // MAG CORE V07',
  },
  description: 'MAG CORE V07 — OS principal. Multiverse, Lab, Projects, Drop. Deployed systems, experiments & vault protocol.',
  keywords: ['MAG CORE', 'Multiverse OS', 'Next.js', 'Vercel', 'Lab', 'Projects'],
  openGraph: {
    title: 'MAG CORE V07 — Multiverse OS',
    description: 'LAB 01 / PROJECTS 02 / DROP 03 — ENTER THE MULTIVERSE',
    url: 'https://mag-core-v07.vercel.app',
    siteName: 'MAG CORE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#050508] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
