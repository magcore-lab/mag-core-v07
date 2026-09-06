import Link from "next/link";

export default function Multiverse() {
  return (
    <main style={{minHeight:'100vh', background:'#000', color:'#fff', padding:'24px', fontFamily:'monospace'}}>
      <h1 style={{fontSize:'48px', fontWeight:'900'}}>MULTIVERSE<span style={{color:'#FF0033'}}> _V07</span></h1>
      <p style={{opacity:0.6, marginBottom:'24px'}}>Etat du systeme / Sante</p>
      
      <div style={{display:'grid', gap:'12px', maxWidth:'600px'}}>
        <Link href="/status" style={{border:'1px solid #222', padding:'16px', background:'#111', textDecoration:'none', color:'#fff'}}>
          <span style={{fontSize:'12px', opacity:0.5}}>04</span>
          <h2 style={{fontSize:'20px'}}>STATUT</h2>
          <p>Etat du systeme / Sante → ENTRER</p>
        </Link>

        <Link href="/evidence" style={{border:'1px solid #222', padding:'16px', background:'#111', textDecoration:'none', color:'#fff'}}>
          <span style={{fontSize:'12px', opacity:0.5}}>05</span>
          <h2 style={{fontSize:'20px'}}>PREUVES</h2>
          <p>Manifeste C2PA / Attestation</p>
        </Link>
      </div>
    </main>
  );
}
