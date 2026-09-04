"use client";
export default function Multiverse(){
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-6xl font-black tracking-[0.3em] text-red-500">MULTIVERSE</h1>
      <p className="mt-4 text-zinc-400">MAG CORE V07 - Portal Open</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-40 w-64 rounded-2xl bg-zinc-900 border border-red-500/20 grid place-items-center">LAB</div>
        <div className="h-40 w-64 rounded-2xl bg-zinc-900 border border-orange-500/20 grid place-items-center">PROJECTS</div>
        <div className="h-40 w-64 rounded-2xl bg-zinc-900 border border-white/10 grid place-items-center">DROP</div>
      </div>
      <a href="/" className="mt-12 text-zinc-500 hover:text-white">← BACK TO CORE</a>
    </div>
  )
}
