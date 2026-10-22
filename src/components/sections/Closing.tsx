"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { ArrowIcon } from "@/components/icons";
import { RevealLines, Reveal } from "@/components/motion";
import { photos, type PhotoKey } from "@/lib/photos";
import { newsMailto, site } from "@/lib/site";

const FAN: { k: PhotoKey; r: number; x: number; cap: string }[] = [
  { k: "kimchi", r: -16, x: -2, cap: "09.06" },
  { k: "ramen", r: -8, x: -1, cap: "10.08" },
  { k: "heroTable", r: 0, x: 0, cap: "10.22" },
  { k: "latte", r: 8, x: 1, cap: "10.12" },
  { k: "tteokbokkiBowl", r: 16, x: 2, cap: "10.19" },
];

function FanCard({ f, progress, reduce }: { f: (typeof FAN)[number]; progress: ReturnType<typeof useScroll>["scrollYProgress"]; reduce: boolean }) {
  const rotate = useTransform(progress, [0, 1], reduce ? [f.r, f.r] : [0, f.r]);
  const x = useTransform(progress, [0, 1], reduce ? [`${f.x * 62}%`, `${f.x * 62}%`] : ["0%", `${f.x * 62}%`]);
  const y = useTransform(progress, [0, 1], reduce ? [Math.abs(f.x) * 18, Math.abs(f.x) * 18] : [60, Math.abs(f.x) * 18]);
  return (
    <motion.div style={{ rotate, x, y, zIndex: 10 - Math.abs(f.x) }} className="print absolute bottom-0 left-1/2 -ml-[80px] w-[160px] p-[7px] pb-[28px] md:-ml-[110px] md:w-[220px] md:p-[9px] md:pb-[34px]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image src={photos[f.k]} alt="" fill sizes="220px" placeholder="blur" className="object-cover" />
      </div>
      <div className="absolute right-2.5 bottom-2 font-mono text-[9.5px] text-faint">{f.cap}</div>
    </motion.div>
  );
}

export default function Closing() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const hasStores = Boolean(site.appStoreUrl || site.playStoreUrl);

  return (
    <section id="start" aria-labelledby="start-title" className="relative overflow-hidden bg-ink text-card">
      <div className="mx-auto max-w-[1320px] px-5 pt-24 md:px-10 md:pt-36">
        <div ref={ref} aria-hidden className="relative mx-auto h-[250px] max-w-[760px] md:h-[330px]">
          {FAN.map((f) => (
            <FanCard key={f.k} f={f} progress={scrollYProgress} reduce={reduce} />
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-[920px] text-center md:mt-28">
          <Reveal className="font-mono text-[11px] tracking-[0.3em] text-card/50">START YOUR DINARY</Reveal>
          <RevealLines
            className="mt-6 font-serif text-[clamp(38px,6.4vw,84px)] leading-[1.18] tracking-[-0.035em]"
            lines={[
              <span key="a" id="start-title">
                오늘 먹은 한 끼부터,
              </span>,
              <>
                기록해 볼까요<span className="text-[#e08a63]">?</span>
              </>,
            ]}
          />
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-[34em] font-sans text-[15.5px] leading-[1.9] text-card/70 md:text-[17px]">
              {hasStores
                ? "DINARY는 iOS와 Android에서 만날 수 있어요. 첫 기록은 오늘 점심이면 충분해요."
                : "DINARY는 iOS와 Android 앱으로 준비하고 있어요. 스토어 링크가 공개되면 이 자리에 가장 먼저 올려 둘게요."}
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {site.appStoreUrl && (
              <a href={site.appStoreUrl} className="rounded-full bg-card px-7 py-4 font-sans text-[15px] font-medium text-ink transition-colors hover:bg-brick-soft">
                App Store에서 받기
              </a>
            )}
            {site.playStoreUrl && (
              <a href={site.playStoreUrl} className="rounded-full bg-card px-7 py-4 font-sans text-[15px] font-medium text-ink transition-colors hover:bg-brick-soft">
                Google Play에서 받기
              </a>
            )}
            <a
              href={newsMailto}
              className="group inline-flex items-center gap-3 rounded-full bg-brick px-7 py-4 font-sans text-[15px] font-medium text-card transition-colors hover:bg-[#c96a40]"
            >
              출시 소식 묻기
              <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </Reveal>
          {!hasStores && (
            <Reveal delay={0.35} className="mt-5 font-sans text-[12.5px] text-card/45">
              {site.contactEmail} 로 메일이 열려요.
            </Reveal>
          )}
        </div>
      </div>

      <div className="mt-16 overflow-hidden md:mt-20" aria-hidden>
        <div className="translate-y-[18%] text-center font-display text-[30vw] leading-[0.8] tracking-[-0.04em] text-card/[0.05] select-none">DINARY</div>
      </div>
    </section>
  );
}
