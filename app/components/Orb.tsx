"use client"
export default function Orb({ variant = 'red' }: { variant?: 'red' | 'blue' }) {
  const isBlue = variant === 'blue'
  return (
    <div style={{ position: 'relative', width: '140px', height: '140px' }}>
      {/* grain cinéma */}
      <div style={{
        position: 'absolute', inset: -20, opacity: 0.08, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      {/* glow maîtrisé */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: isBlue ? '#00D4FF' : '#A51205',
        filter: 'blur(30px)', opacity: 0.25
      }} />
      {/* orb core - plus petit : 140px au lieu de 200px */}
      <div style={{
        position: 'relative', width: '100%', height: '100%', borderRadius: '50%',
        background: isBlue 
          ? 'radial-gradient(at 30% 30%, #7DDFFF, #00A8CC 30%, #0A4A5A 70%)'
          : 'radial-gradient(at 30% 30%, #FF6B5A, #A51205 40%, #5A0A03 80%)',
        boxShadow: isBlue 
          ? 'inset 0 0 20px rgba(255,255,255,0.6), 0 0 0 1px rgba(255,255,255,0.15)'
          : 'inset 0 0 20px rgba(255,255,255,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
      }}>
        <div style={{
          position: 'absolute', top: '18%', left: '22%', width: '28%', height: '28%',
          background: 'radial-gradient(white, transparent 70%)', opacity: 0.7, borderRadius: '50%'
        }} />
      </div>
      {/* anneau fin */}
      <div style={{
        position: 'absolute', inset: -12, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.08)',
      }} />
    </div>
  )
}
