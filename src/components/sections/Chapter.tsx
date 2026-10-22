import { Reveal, RevealLines } from "@/components/motion";

/** 장 머리 — 번호 · 영문 이탤릭 · 한글 제목 · 본문. */
export default function Chapter({
  no,
  en,
  title,
  body,
  className = "",
  tone = "ink",
}: {
  no: string;
  en: string;
  title: React.ReactNode[];
  body?: React.ReactNode;
  className?: string;
  tone?: "ink" | "light";
}) {
  const light = tone === "light";
  return (
    <div className={className}>
      <Reveal className={`flex items-center gap-4 font-mono text-[11px] tracking-[0.28em] ${light ? "text-card/60" : "text-faint"}`}>
        <span>{no}</span>
        <span className={`h-px w-10 ${light ? "bg-card/40" : "bg-brick"}`} />
        <span className={`font-display text-[19px] tracking-normal italic ${light ? "text-card/80" : "text-muted"}`}>{en}</span>
      </Reveal>
      <RevealLines
        className={`mt-6 font-serif text-[clamp(32px,4.8vw,62px)] leading-[1.22] tracking-[-0.03em] ${light ? "text-card" : "text-ink"}`}
        lines={title}
      />
      {body && (
        <Reveal delay={0.2} className={`mt-7 max-w-[31em] font-sans text-[15.5px] leading-[1.9] md:text-[16.5px] ${light ? "text-card/75" : "text-muted"}`}>
          {body}
        </Reveal>
      )}
    </div>
  );
}
