export const metadata = {
  title: "MAG CORE V07 — Multiverse OS",
  description: "LAB 01 / PROJECTS 02 / DROP 03 — ENTER THE MULTIVERSE",
  openGraph: {
    title: "MAG CORE V07 — Multiverse OS",
    description: "LAB 01 / PROJECTS 02 / DROP 03 — ENTER THE MULTIVERSE",
    url: "https://mag-core-v07.vercel.app",
    siteName: "MAG CORE V07",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAG CORE V07",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
