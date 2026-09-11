"use client"
export default function Window({ title, children, onClose }: any) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'
    }} onClick={onClose}>
      <div style={{
        width: 'min(600px, 90vw)', maxHeight: '80vh',
        background: '#0f172a', border: '2px solid white',
        borderRadius: '16px', overflow: 'hidden',
        boxShadow: '0 0 40px rgba(0,0,0,0.8)'
      }} onClick={e => e.stopPropagation()}>
        <div style={{
          padding: '12px 16px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          fontSize: '12px', letterSpacing: '2px', color: 'rgba(255,255,255,0.6)'
        }}>
          <span>{title}</span>
          <button onClick={onClose} style={{
            width: '28px', height: '28px', borderRadius: '50%',
            border: '1px solid white', background: 'transparent',
            color: 'white', cursor: 'pointer'
          }}>✕</button>
        </div>
        <div style={{ padding: '24px', color: 'white' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
