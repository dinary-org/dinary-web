"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax, Reveal } from "@/components/motion";
import Phone from "@/components/phone/Phone";
import { CoupleRecordScreen } from "@/components/phone/screens";
import { photos } from "@/lib/photos";
import Chapter from "./Chapter";

const POINTS = [
  ["초대 코드 하나로", "6자리 코드를 보내면 둘만의 기록장이 따로 열려요. 무료예요. 각자의 개인 기록은 그대로 남아요."],
  ["사귄 날부터 세는 날들", "캘린더 머리에 D+N이 붙고, 100일과 1주년 같은 기념일엔 그날 먹은 한 끼를 함께 꺼내 봐요."],
  ["같은 한 끼, 두 개의 한 줄", "같은 자리에서 먹어도 기억은 조금씩 달라요. 둘이 각자 한 줄과 별점을 남겨요."],
  ["둘 다 쓰면 채워지는 도장", "한 사람만 쓰면 반쪽 도장. 상대가 잊었다면 「콕 찌르기」로 살짝 알려 주세요."],
];

export default function Together() {
  const [poked, setPoked] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => {
      setToast(false);
      setPoked(true);
    }, 1300);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <section id="together" aria-labelledby="together-title" className="relative overflow-hidden bg-brick-soft py-24 md:py-36">
      <svg aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] text-brick/10" viewBox="0 0 100 100">
        <circle cx="38" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth=".6" />
        <circle cx="62" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth=".6" />
      </svg>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <Chapter
          className="max-w-[760px]"
          no="05"
          en="Memories together"
          title={[<span key="a" id="together-title">둘이 먹은 날들은,</span>, "둘이 함께 기억해요."]}
          body="연인과 함께 쓰는 기록장을 열 수 있어요. 처음 데이트한 날의 떡볶이, 싸우고 화해한 날의 국밥. 둘이 앉았던 식탁이 하나씩 쌓여, 우리만 아는 지도가 돼요."
        />

        <div className="relative mt-16 grid grid-cols-1 items-center gap-12 md:mt-24 lg:grid-cols-12">
          {/* 사진 + 폰 */}
          <div className="relative h-[600px] sm:h-[680px] lg:col-span-7 lg:h-[760px]">
            <Parallax speed={40} className="absolute inset-y-[4%] left-0 w-[86%] sm:w-[74%]">
              <div className="relative h-full overflow-hidden rounded-[28px] md:rounded-[36px]">
                <Image src={photos.coffees} alt="카페 테이블 위에서 두 사람이 커피 잔을 맞대는 모습" fill sizes="(min-width:1024px) 640px, 90vw" placeholder="blur" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 font-mono text-[11px] tracking-[0.16em] text-card/90 md:bottom-8 md:left-8">
                  2025.09.06~ <span className="text-[#f2c7b2]">♥ D+412</span>
                </div>
              </div>
            </Parallax>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 sm:right-[2%]">
              <Phone className="[--s:0.56] min-[400px]:[--s:0.62] md:[--s:0.76]" label="DINARY 연인 기록장의 한 끼 화면 예시">
                <CoupleRecordScreen halfStamp={!poked} />
              </Phone>
              <AnimatePresence>
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: -10, x: "-50%" }}
                    className="absolute bottom-[12%] left-1/2 rounded-full bg-ink px-4 py-2 font-sans text-[13px] whitespace-nowrap text-card shadow-lg"
                  >
                    찔렀어요 👉
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 기념일 카드 */}
            <Parallax speed={90} className="absolute top-[2%] right-[34%] z-10 hidden sm:block lg:right-[40%]">
              <div className="w-[220px] rotate-[-4deg] rounded-[20px] border border-line bg-card p-4 shadow-[0_24px_40px_-22px_rgba(28,26,23,.5)]">
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-faint">
                  <span>우리의 기념일</span>
                  <span className="text-brick">400일</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-none overflow-hidden rounded-[10px]">
                    <Image src={photos.pasta} alt="" fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <div className="font-serif text-[16px] text-ink">한남 파스타</div>
                    <div className="font-mono text-[10px] text-faint">2026.10.10 · 그날의 한 끼</div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>

          {/* 설명 */}
          <div className="flex flex-col lg:col-span-5">
            <ul className="space-y-0 divide-y divide-[#e0c3b1] border-y border-[#e0c3b1]">
              {POINTS.map(([t, d], i) => (
                <Reveal as="li" key={t} delay={i * 0.08} className="flex gap-5 py-6">
                  <span className="font-display text-[26px] leading-none text-brick italic">{i + 1}</span>
                  <div>
                    <div className="font-serif text-[20px] text-ink">{t}</div>
                    <p className="mt-2 font-sans text-[14.5px] leading-[1.8] text-muted">{d}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.3} className="order-first mb-10 lg:order-none lg:mt-8 lg:mb-0">
              <button
                type="button"
                onClick={() => (poked ? setPoked(false) : setToast(true))}
                disabled={toast}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 font-sans text-[14.5px] text-card transition-colors hover:bg-brick disabled:opacity-70"
              >
                {poked ? "도장이 채워졌어요 · 다시 보기" : "콕 찌르기 눌러 보기"}
                <span className="transition-transform duration-500 group-hover:rotate-12">{poked ? "◎" : "👉"}</span>
              </button>
              <p className="mt-3 font-sans text-[12.5px] text-faint">눌러 보면, 상대의 한 줄이 도착하고 반쪽 도장이 채워져요.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
