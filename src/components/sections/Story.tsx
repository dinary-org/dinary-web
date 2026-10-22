import Image from "next/image";
import { Reveal, ScrollInk } from "@/components/motion";
import { photos, type PhotoKey } from "@/lib/photos";

const STRIP: { k: PhotoKey; date: string; note: string; r: number }[] = [
  { k: "tteokbokkiBowl", date: "10.19", note: "비 오는 월요일, 떡볶이", r: -3 },
  { k: "latte", date: "10.12", note: "연남, 일곱 번째 라테", r: 2 },
  { k: "dumplings", date: "10.15", note: "엄마가 좋아하던 만두", r: -1.5 },
  { k: "ramen", date: "10.08", note: "야근 끝, 라멘 한 그릇", r: 2.5 },
  { k: "dessert", date: "09.28", note: "생일 다음 날 디저트", r: -2 },
  { k: "skewers", date: "09.21", note: "오랜만에 다 같이", r: 1.5 },
  { k: "frenchToast", date: "09.14", note: "느지막한 토요일 아침", r: -2.5 },
  { k: "kimchi", date: "09.06", note: "할머니 김치 같은 맛", r: 2 },
  { k: "sushi", date: "08.30", note: "처음 가 본 오마카세", r: -1 },
];

export default function Story() {
  return (
    <section id="story" aria-label="DINARY 이야기" className="relative">
      {/* 필름처럼 흘러가는 기록들 */}
      <div className="relative overflow-hidden border-y border-line bg-card/60 py-10 md:py-14">
        <div className="marquee flex w-max gap-6 md:gap-10">
          {[...STRIP, ...STRIP].map((s, i) => (
            <figure
              key={i}
              aria-hidden={i >= STRIP.length}
              className="print w-[176px] flex-none md:w-[220px]"
              style={{ transform: `rotate(${s.r}deg)` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image src={photos[s.k]} alt={i < STRIP.length ? s.note : ""} fill sizes="220px" placeholder="blur" className="object-cover" />
              </div>
              <figcaption className="absolute right-3 bottom-2.5 left-3 flex items-baseline justify-between gap-2">
                <span className="truncate font-sans text-[11.5px] text-muted">{s.note}</span>
                <span className="font-mono text-[10px] text-faint">{s.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent md:w-40" />
      </div>

      {/* 선언 */}
      <div className="mx-auto max-w-[1100px] px-5 pt-28 pb-16 md:px-10 md:pt-44 md:pb-24">
        <Reveal className="mb-10 flex items-center gap-4 font-mono text-[11px] tracking-[0.28em] text-faint">
          <span className="h-px w-8 bg-brick" />
          WHY DINARY
        </Reveal>
        <ScrollInk
          className="font-serif text-[clamp(26px,4.4vw,54px)] leading-[1.5] tracking-[-0.02em] text-ink"
          text="맛집을 평가하는 앱은 이미 많아요. DINARY는 그날 *누구와, 어떤 기분으로 먹었는지를 남겨요. 시간이 지나 다시 펼쳤을 때, 그 한 끼가 *다시 따뜻해지도록."
        />
        <Reveal delay={0.1} className="mt-12 flex items-center gap-4">
          <span className="font-display text-[22px] text-faint italic md:text-[26px]">Not a review. A memory.</span>
        </Reveal>
      </div>
    </section>
  );
}
