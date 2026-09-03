import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
const geist = Geist({ subsets:['latin'], variable:'--font-geist', display:'swap' })
const mono = Geist_Mono({ subsets:['latin'], variable:'--font-mono', display:'swap' })
export const metadata: Metadata = {
  title: 'MAG CORE V07 — Drone Cinéma Frontale Magmatique | Media Press',
  description: 'Documentaire terrestre — Capture drone à 50M — 8K RAW — Noyau magma 420px lock',
  openGraph: { title: 'MAG CORE V07 — Media Press', description: 'Drone Cinéma Frontale 50M', type:'website' }
}
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="fr" className={`${geist.variable} ${mono.variable}`}><body className="bg-[#050508] text-white antialiased">{children}</body></html>
}
