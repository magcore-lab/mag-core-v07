import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAG CORE",
  description: "Mag Core Multiverse",
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
