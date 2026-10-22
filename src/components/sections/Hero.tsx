"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { CameraIcon } from "@/components/icons";
import { RevealLines } from "@/components/motion";
import Phone from "@/components/phone/Phone";
import { DoneScreen } from "@/components/phone/screens";
import { photos } from "@/lib/photos";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const k = reduce ? 0 : 1;
  const printY = useTransform(scrollYProgress, [0, 1], [0, -120 * k]);
  const printR = useTransform(scrollYProgress, [0, 1], [4, 4 + 6 * k]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -40 * k]);
  const smallY = useTransform(scrollYProgress, [0, 1], [0, -220 * k]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80 * k]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 lg:min-h-[100svh] lg:pb-28">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-6">
        <motion.div style={{ y: textY }} className="relative z-10 lg:col-span-7 lg:pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-faint"
          >
            <span className="h-px w-8 bg-brick" />
            A FOOD DIARY · 식사 기록장
          </motion.div>

          <RevealLines
            as="h1"
            immediate
            delay={0.15}
            className="mt-7 font-serif text-[clamp(39px,10.2vw,88px)] xl:text-[96px] leading-[1.14] tracking-[-0.035em] text-ink"
            lines={[
              "먹은 순간이,",
              <>
                우리의{" "}
                <span className="relative inline-block">
                  이야기
                  <svg className="absolute -bottom-[0.06em] left-[-4%] h-[0.32em] w-[108%] overflow-visible" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden>
                    <motion.path
                      d="M3 13 C 40 6, 90 4, 130 8 S 185 14, 197 7"
                      fill="none"
                      stroke="#b4552d"
                      strokeWidth="5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 1.1, ease: EASE }}
                    />
                  </svg>
                </span>
                가
              </>,
              "되도록.",
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: EASE }}
            className="mt-8 max-w-[30em] font-sans text-[16px] leading-[1.85] text-muted md:text-[17px]"
          >
            DINARY는 사진으로 쓰는 식사 일기예요. 음식이 나오면 셔터 한 번 — 그날의 한 끼가 가게와 날짜, 지도 위의 한 점으로 남아요.
            <br className="hidden md:block" /> 별점을 매기는 대신, <span className="text-ink">기억을 모읍니다.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#capture" className="group inline-flex items-center gap-3 rounded-full bg-brick px-6 py-3.5 font-sans text-[15px] font-medium text-card transition-colors hover:bg-brick-deep">
              어떻게 남겨지나요
              <span className="transition-transform duration-500 group-hover:translate-y-0.5">↓</span>
            </a>
            <a href="#start" className="inline-flex items-center rounded-full border border-line px-6 py-3.5 font-sans text-[15px] text-ink transition-colors hover:border-ink">
              출시 소식
            </a>
          </motion.div>
        </motion.div>

        {/* 사진 · 폰 · 셔터 배지 */}
        <div className="relative h-[520px] sm:h-[600px] lg:col-span-5 lg:h-[700px]">
          <motion.div
            style={{ y: printY, rotate: printR }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
            className="print absolute top-0 right-0 w-[78%] sm:w-[64%] lg:right-[-6%] lg:w-[92%]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={photos.heroTable} alt="나무 식탁 위의 돌솥비빔밥과 반찬들" fill priority sizes="(min-width:1024px) 480px, 70vw" placeholder="blur" className="object-cover" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[10px] tracking-[0.12em] text-faint md:text-[11px]">
              <span>2026.10.22 — 12:41</span>
              <span>을지로, 점심</span>
            </div>
          </motion.div>

          <motion.div
            style={{ y: phoneY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.55, ease: EASE }}
            className="absolute bottom-0 left-0 sm:left-[6%] lg:bottom-[-2%] lg:left-[-2%] xl:left-[-8%]"
          >
            <div className="rotate-[-5deg]">
              <Phone className="[--s:0.6] sm:[--s:0.66] lg:[--s:0.72]" label="DINARY 앱의 방문 인증 완료 화면 예시">
                <DoneScreen />
              </Phone>
            </div>
          </motion.div>

          <motion.div style={{ y: smallY }} className="absolute top-[46%] right-[2%] z-10 sm:right-[10%] lg:top-[56%] lg:right-[-4%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.1, ease: EASE }}
              className="relative flex h-[118px] w-[118px] items-center justify-center md:h-[136px] md:w-[136px]"
            >
              <span className="absolute inset-0 rounded-full bg-card shadow-[0_14px_30px_-14px_rgba(28,26,23,.4)]" />
              <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden>
                <defs>
                  <path id="ring" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
                </defs>
                <text fontSize="8.4" letterSpacing="2.6" fill="#1c1a17" fontFamily="var(--font-jetbrains)">
                  <textPath href="#ring">PHOTOGRAPH · REMEMBER · REVISIT ·</textPath>
                </text>
              </svg>
              <span className="relative flex h-[54px] w-[54px] items-center justify-center rounded-full bg-brick shadow-[0_8px_20px_rgba(180,85,45,.34)] ring-[3px] ring-card md:h-[62px] md:w-[62px]">
                <CameraIcon size={26} stroke="#fbfaf6" />
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-faint lg:flex"
      >
        SCROLL
        <span className="relative block h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-brick"
            animate={reduce ? undefined : { y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
