"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "@/components/motion";
import Phone from "@/components/phone/Phone";
import { CalendarScreen } from "@/components/phone/screens";
import { photos, type PhotoKey } from "@/lib/photos";
import Chapter from "./Chapter";

/** 달력에 날짜가 차오를 때 곁에 하나씩 놓이는 사진들. day 가 지나면 나타납니다. */
const JOURNAL: { k: PhotoKey; day: number; cap: string; cls: string; r: number }[] = [
  { k: "latte", day: 2, cap: "10.02", cls: "left-[2%] top-[4%] w-[30%] md:w-[22%]", r: -6 },
  { k: "dumplings", day: 3, cap: "10.03", cls: "right-[3%] top-[0%] w-[28%] md:w-[20%]", r: 5 },
  { k: "ramen", day: 8, cap: "10.08", cls: "left-[0%] top-[42%] w-[26%] md:w-[19%]", r: 4 },
  { k: "tteokbokkiBowl", day: 11, cap: "10.11", cls: "right-[0%] top-[36%] w-[30%] md:w-[21%]", r: -4 },
  { k: "skewers", day: 17, cap: "10.17", cls: "left-[6%] bottom-[2%] w-[28%] md:w-[20%]", r: -3 },
  { k: "bibimbap", day: 22, cap: "10.22 · 오늘", cls: "right-[5%] bottom-[0%] w-[30%] md:w-[22%]", r: 6 },
];

const SHARE = [
  { name: "종이", bg: "#f6f3ec", ink: "#1c1a17", sub: "#6b665e", line: "rgba(28,26,23,.2)" },
  { name: "먹색", bg: "#1c1a17", ink: "#fbfaf6", sub: "#cdc6b8", line: "rgba(251,250,246,.35)" },
  { name: "계절색", bg: "#b4552d", ink: "#fbfaf6", sub: "#f2e0d5", line: "rgba(251,250,246,.35)" },
  { name: "쪽빛", bg: "#4f6b7a", ink: "#fbfaf6", sub: "#e6ebec", line: "rgba(251,250,246,.35)" },
];

export default function Diary() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [day, setDay] = useState(reduce ? 31 : 0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setDay(reduce ? 31 : Math.round(Math.min(1, Math.max(0, v)) * 31)));
  const phoneY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  return (
    <section id="diary" aria-labelledby="diary-title" className="relative overflow-hidden bg-card py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <Chapter
          className="mx-auto max-w-[860px] text-center [&_.flex]:justify-center [&_p]:mx-auto"
          no="03"
          en="A diary of everyday meals"
          title={[<span key="a" id="diary-title">평범한 날의 한 끼도,</span>, "모아 두면 한 권의 일기."]}
          body="캘린더를 열면 그 달에 먹은 것들이 날짜마다 가게 이름으로 적혀 있어요. 특별한 날만이 아니라, 아무것도 아니었던 화요일 점심까지. 쌓일수록 내가 어떻게 살았는지가 보여요."
        />

        <div ref={ref} className="relative mx-auto mt-14 h-[640px] max-w-[1100px] md:mt-20 md:h-[760px]">
          {JOURNAL.map((j) => {
            const on = day >= j.day;
            return (
              <div
                key={j.k}
                className={`print absolute ${j.cls} p-[6px] pb-[26px] transition-all duration-700 ease-[var(--ease-soft)] md:p-[8px] md:pb-[30px]`}
                style={{
                  opacity: on ? 1 : 0,
                  transform: `rotate(${j.r}deg) translateY(${on ? 0 : 30}px) scale(${on ? 1 : 0.92})`,
                }}
                aria-hidden
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image src={photos[j.k]} alt="" fill sizes="240px" placeholder="blur" className="object-cover" />
                </div>
                <div className="absolute right-2 bottom-1.5 font-mono text-[9px] text-faint md:bottom-2 md:text-[10px]">{j.cap}</div>
              </div>
            );
          })}
          <motion.div style={{ y: phoneY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Phone className="[--s:0.6] min-[400px]:[--s:0.66] md:[--s:0.8]" label="DINARY 캘린더 화면 예시 — 날짜마다 다녀온 가게 이름이 적힙니다">
              <CalendarScreen shown={day} />
            </Phone>
          </motion.div>
        </div>

        {/* 분기 리캡 */}
        <div className="mt-24 grid grid-cols-1 items-center gap-14 md:mt-36 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="font-mono text-[11px] tracking-[0.28em] text-faint">QUARTERLY RECAP</Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-5 font-serif text-[clamp(28px,3.4vw,42px)] leading-[1.3] tracking-[-0.02em] text-ink">
                석 달이 지나면,
                <br />
                계절의 식탁이 도착해요.
              </h3>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[28em] font-sans text-[15.5px] leading-[1.9] text-muted">
                분기가 끝나면 그동안의 기록을 한 편의 이야기로 묶어 드려요. 석 달 동안 먹은 끼니, 가장 많이 머문 동네, 두 번 이상 간 집. 마음에 드는 색의 카드로 골라 친구에게 보여 줄 수도 있어요.
              </p>
            </Reveal>
          </div>
          <div className="relative h-[420px] sm:h-[460px] lg:col-span-7">
            {SHARE.map((t, i) => (
              <Reveal key={t.name} delay={0.1 + i * 0.1} y={60} className="absolute top-0 left-1/2" >
                <div
                  className="w-[200px] rounded-[22px] p-5 shadow-[0_30px_50px_-28px_rgba(28,26,23,.5)] sm:w-[230px] md:p-6"
                  style={{
                    background: t.bg,
                    color: t.ink,
                    transform: `translateX(calc(-50% + ${(i - 1.5) * 74}px)) translateY(${Math.abs(i - 1.5) * 18}px) rotate(${(i - 1.5) * 7}deg)`,
                  }}
                >
                  <div className="font-mono text-[9.5px] tracking-[0.18em]" style={{ color: t.sub }}>
                    JUL — SEP · 3분기
                  </div>
                  <div className="mt-3 font-serif text-[22px] leading-[1.3]">
                    나의
                    <br />
                    여름 식탁
                  </div>
                  <div className="mt-5 font-serif text-[46px] leading-none">
                    47<span className="ml-1 font-sans text-[14px]">끼</span>
                  </div>
                  <dl className="mt-5 space-y-2.5 border-t pt-4 font-sans text-[12px]" style={{ borderColor: t.line }}>
                    {[
                      ["단골집", "연남 커피"],
                      ["자주 찾은 동네", "을지로"],
                      ["처음 가 본 집", "19곳"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-2">
                        <dt style={{ color: t.sub }}>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-serif text-[20px]">D</span>
                    <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: t.sub }}>
                      {t.name}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
