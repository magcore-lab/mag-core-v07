export const lerp = (a:number,b:number,t:number)=> a + (b-a)*t
export const damp = (c:number,t:number,l:number,dt:number)=> lerp(c,t,1-Math.exp(-l*dt))
export const smoothStep = (e0:number,e1:number,x:number)=>{ const tt=Math.max(0,Math.min(1,(x-e0)/(e1-e0))); return tt*tt*(3-2*tt) }
export const map = (v:number,i0:number,i1:number,o0:number,o1:number)=> o0 + (v-i0)*(o1-o0)/(i1-i0)
export const edgeInterpolate = (s:number,e:number,p:number,edge=0.15)=>{ const ee=smoothStep(edge,1-edge,p); return lerp(s,e,ee) }
export const spring = ({ stiffness=120,damping=18,mass=1 }={})=>{ return { stiffness,damping,mass } }
