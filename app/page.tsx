import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./components/Desktop"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="font-mono text-[10px] tracking-[0.3em] text-white/20">
        MAG CORE V07 // INITIALIZING MULTIVERSE_OS...
      </div>
    </div>
  ),
});

export default function Page() {
  return <Desktop />;
}
