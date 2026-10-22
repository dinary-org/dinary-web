"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion";
import MapScreen from "@/components/phone/MapScreen";
import Phone from "@/components/phone/Phone";
import { CATEGORY_COLORS, PLACES, placeById, type Category } from "@/lib/demo";
import { photos } from "@/lib/photos";
import Chapter from "./Chapter";

const FILTERS: ("all" | Category)[] = ["all", "한식", "분식", "중식", "일식", "커피"];
const TOUR = ["a", "b", "c", "e", "h"];

export default function MapSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const [activeId, setActiveId] = useState("a");
  const [touched, setTouched] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const inView = useInView(panel, { margin: "-20% 0px" });

  // 손대기 전엔 핀을 하나씩 돌아가며 보여 줍니다.
  useEffect(() => {
    if (touched || !inView) return;
    const t = setInterval(() => setActiveId((id) => TOUR[(TOUR.indexOf(id) + 1) % TOUR.length]), 2800);
    return () => clearInterval(t);
  }, [touched, inView]);

  const active = placeById(activeId);
  const kind = active.kind;
  const shown = PLACES.filter((p) => filter === "all" || p.category === filter);

  const pickFilter = (f: (typeof FILTERS)[number]) => {
    setTouched(true);
    setFilter(f);
    const first = PLACES.find((p) => f === "all" || p.category === f);
    if (first) setActiveId(first.id);
  };

  return (
    <section id="map" aria-labelledby="map-title" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Chapter
            className="lg:col-span-7"
            no="02"
            en="Your memories, on a map"
            title={[<span key="a" id="map-title">다녀온 곳이 하나씩,</span>, "나만의 지도가 됩니다."]}
            body="종이처럼 차분한 지도 위에 내가 기록한 가게들이 색깔 핀으로 앉아요. 동네를 걷다 지도를 열면, 그날 거기서 무엇을 먹었는지가 먼저 떠오를 거예요."
          />
          <Reveal delay={0.2} className="self-end lg:col-span-5">
            <ul className="divide-y divide-line border-y border-line">
              {[
                ["맛집과 카페를 나눠서", "최근순, 체감가격순으로 다시 정렬해 볼 수 있어요."],
                ["건물 속 가게까지", "지도 빈 곳을 길게 누르면 그 건물 안 식당·카페를 층별로 보여 줘요."],
                ["가고 싶은 곳은 책갈피로", "아직 못 간 위시리스트도 같은 지도 위에 함께 있어요."],
              ].map(([t, d]) => (
                <li key={t} className="py-4">
                  <div className="font-sans text-[15px] font-medium text-ink">{t}</div>
                  <div className="mt-1 font-sans text-[14px] leading-[1.75] text-muted">{d}</div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal y={60}>
          <div
            ref={panel}
            className="relative mt-14 overflow-hidden rounded-[28px] border border-line bg-map md:mt-20 md:rounded-[40px]"
            style={{
              backgroundImage:
                "linear-gradient(#dcd7c9 1px, transparent 1px), linear-gradient(90deg, #dcd7c9 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          >
            <div className="grid grid-cols-1 items-center gap-10 px-5 py-10 md:grid-cols-12 md:px-12 md:py-16">
              {/* 조작 */}
              <div className="order-2 md:order-1 md:col-span-4">
                <div className="font-mono text-[10.5px] tracking-[0.24em] text-muted">직접 눌러 보세요</div>
                <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="카테고리로 거르기">
                  {FILTERS.map((f) => (
                    <button
                      key={f}
                      type="button"
                      aria-pressed={filter === f}
                      onClick={() => pickFilter(f)}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-[13.5px] transition-all duration-300 ${
                        filter === f ? "border-ink bg-ink text-card" : "border-line bg-card text-ink hover:border-ink/40"
                      }`}
                    >
                      {f !== "all" && <span className="h-2.5 w-2.5 rounded-full" style={{ background: CATEGORY_COLORS[f] }} />}
                      {f === "all" ? "전체" : f}
                    </button>
                  ))}
                </div>
                <ul className="mt-8 hidden flex-col gap-1.5 md:flex">
                  {shown.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setTouched(true);
                          setActiveId(p.id);
                        }}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-colors duration-300 ${
                          activeId === p.id ? "bg-card shadow-[0_6px_20px_-10px_rgba(28,26,23,.25)]" : "hover:bg-card/60"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: CATEGORY_COLORS[p.category] }} />
                          <span className="font-sans text-[14.5px] text-ink">{p.name}</span>
                        </span>
                        <span className="font-mono text-[11px] text-faint">{p.date}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 폰 */}
              <div className="relative order-1 flex justify-center md:order-2 md:col-span-5">
                <Phone className="[--s:0.62] min-[400px]:[--s:0.7] md:[--s:0.74] lg:[--s:0.82]" label="DINARY 지도 화면 예시 — 기록한 가게가 핀으로 표시됩니다">
                  <MapScreen filter={filter} activeId={activeId} kind={kind} />
                </Phone>
              </div>

              {/* 떠오르는 기억 */}
              <div className="relative order-3 hidden h-full min-h-[360px] md:col-span-3 md:block">
                <AnimatePresence mode="popLayout">
                  <motion.figure
                    key={active.id}
                    initial={{ opacity: 0, y: 30, rotate: -8 }}
                    animate={{ opacity: 1, y: 0, rotate: 3 }}
                    exit={{ opacity: 0, y: -20, rotate: 8 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="print absolute top-1/2 left-0 w-full -translate-y-1/2"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image src={photos[active.photo]} alt={`${active.name}에서 남긴 사진`} fill sizes="260px" placeholder="blur" className="object-cover" />
                    </div>
                    <figcaption className="absolute right-3 bottom-2.5 left-3">
                      <div className="flex items-baseline justify-between">
                        <span className="font-serif text-[15px] text-ink">{active.name}</span>
                        <span className="font-mono text-[10px] text-faint">{active.date}</span>
                      </div>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
