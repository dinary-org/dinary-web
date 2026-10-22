import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image src="/brand/icon.png" alt="" width={30} height={30} className="rounded-[8px] ring-1 ring-line" priority />
      <span className="font-mono text-[13px] tracking-[0.32em] text-ink">DINARY</span>
    </span>
  );
}
