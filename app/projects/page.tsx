export default function Projects(){
 return(
  <main className="min-h-screen bg-black text-white">
   <div className="border-b border-white/10 px-6 py-4 flex justify-between text-[11px] tracking-[0.3em] text-neutral-500">
    <a href="/multiverse">← CORE</a><span className="text-red-500/60">PROJECTS_V07 // DEPLOYED</span>
   </div>

   <div className="p-6 md:p-10 max-w-6xl mx-auto">
    <h1 className="text-6xl font-black tracking-tighter">PROJECTS<span className="text-red-500">02</span></h1>
    <p className="text-neutral-500 tracking-widest text-xs mt-2">DEPLOYED SYSTEMS / BUILDS / DROPS</p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="rounded-[32px] bg-[#3a1a12] border border-white/5 p-8">
        <div className="flex justify-between text-[10px]"><span className="text-red-400">LIVE // V07</span><span className="text-white/30">01</span></div>
        <h3 className="text-3xl font-black mt-10">MAG CORE</h3>
        <p className="text-sm text-white/50 mt-2">OS principal. Multiverse, Lab, Projects, Drop.</p>
        <div className="mt-6 flex gap-2 text-[10px]"><span className="bg-white/10 px-2 py-1 rounded-full">Next.js</span><span className="bg-white/10 px-2 py-1 rounded-full">Vercel</span></div>
      </div>

      <div className="rounded-[32px] bg-[#1a1a1a] border border-white/5 p-8">
        <div className="flex justify-between text-[10px]"><span className="text-neutral-500">WIP // V02</span><span className="text-white/30">02</span></div>
        <h3 className="text-3xl font-black mt-10">VAULT PROTOCOL</h3>
        <p className="text-sm text-white/50 mt-2">Système de drop sécurisé + whitelist.</p>
        <div className="mt-6 flex gap-2 text-[10px]"><span className="bg-white/10 px-2 py-1 rounded-full">Supabase</span><span className="bg-white/10 px-2 py-1 rounded-full">Auth</span></div>
      </div>

      <div className="rounded-[32px] bg-[#1a1a1a] border border-white/5 p-8">
        <div className="flex justify-between text-[10px]"><span className="text-yellow-400/80">BETA // V01</span><span className="text-white/30">03</span></div>
        <h3 className="text-3xl font-black mt-10">GHOST CHAT</h3>
        <p className="text-sm text-white/50 mt-2">Chat IA autonome - mémoire long terme.</p>
        <div className="mt-6 flex gap-2 text-[10px]"><span className="bg-white/10 px-2 py-1 rounded-full">OpenAI</span><span className="bg-white/10 px-2 py-1 rounded-full">Vector</span></div>
      </div>

      <a href="/drop" className="rounded-[32px] border border-dashed border-white/10 p-8 flex flex-col justify-center items-center text-center hover:border-red-500/30 transition">
        <p className="text-4xl">+</p>
        <p className="text-xs tracking-widest text-neutral-500 mt-4">NEXT DROP</p>
      </a>

    </div>

    <a href="/multiverse" className="mt-16 inline-block text-[11px] tracking-[0.3em] text-neutral-600">← MULTIVERSE</a>
   </div>
  </main>
 )
}
