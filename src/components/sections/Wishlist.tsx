"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { BellIcon, CalendarIcon, LinkIcon } from "@/components/icons";
import { Parallax, Reveal } from "@/components/motion";
import Phone from "@/components/phone/Phone";
import { WishScreen } from "@/components/phone/screens";
import { photos } from "@/lib/photos";
import Chapter from "./Chapter";

const WAYS = [
  {
    icon: <LinkIcon size={20} />,
    title: "본 곳은 링크째 담기",
    body: "릴스 · 쇼츠 · 블로그에서 본 가게를 링크로 붙여넣어요. 어디서 봤는지, 왜 가 보고 싶은지도 한 줄 적어 둘 수 있어요.",
  },
  {
    icon: <CalendarIcon size={20} />,
    title: "날짜를 정하면 캘린더에",
    body: "가기로 한 날은 캘린더에 「예정」으로 옅게 떠요. 다녀오면 그 자리에 진짜 기록이 들어서요.",
  },
  {
    icon: <BellIcon size={20} />,
    title: "근처를 지나가면 알림",
    body: "담아둔 곳 50m 안에 들어오면 알려 드려요. 알림을 누르면 카메라가 바로 열려, 그대로 방문을 인증할 수 있어요.",
  },
];

export default function Wishlist() {
  const stage = useRef<HTMLDivElement>(null);
  const inView = useInView(stage, { once: true, margin: "-30% 0px" });
  const reduce = useReducedMotion();

  return (
    <section id="wishlist" aria-labelledby="wish-title" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-16 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div ref={stage} className="relative flex justify-center lg:col-span-6 lg:justify-start">
          <Parallax speed={50} className="absolute top-[4%] right-[0%] hidden w-[42%] sm:block lg:right-[2%]">
            <div className="print rotate-[5deg]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={photos.sushi} alt="" fill sizes="280px" placeholder="blur" className="object-cover" />
              </div>
              <div className="absolute right-3 bottom-2.5 left-3 flex justify-between font-mono text-[10px] text-faint">
                <span>릴스에서 봄</span>
                <span>담은 지 3일</span>
              </div>
            </div>
          </Parallax>

          <div className="relative">
            <Phone className="[--s:0.62] min-[400px]:[--s:0.7] md:[--s:0.8]" label="DINARY 위시리스트 화면 예시">
              <WishScreen />
            </Phone>
            {/* 지오펜스 알림 — 앱 geofence.ts 의 문구 */}
            <motion.div
              initial={{ opacity: 0, y: -40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
              transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[7%] left-1/2 w-[112%] max-w-[360px] -translate-x-1/2"
              role="img"
              aria-label="알림 예시: 합정 스시, 지금 앞에 계신가요? 눌러서 사진을 찍으면 방문이 인증됩니다."
            >
              <div className="flex gap-3 rounded-[22px] border border-white/60 bg-[#fbfaf6]/92 p-3.5 shadow-[0_24px_50px_-20px_rgba(28,26,23,.45)] backdrop-blur-xl">
                <Image src="/brand/icon.png" alt="" width={38} height={38} className="h-[38px] w-[38px] flex-none rounded-[9px] ring-1 ring-line" />
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between font-sans text-[11px] text-faint">
                    <span className="tracking-[0.08em]">DINARY</span>
                    <span>지금</span>
                  </div>
                  <div className="mt-0.5 font-sans text-[13.5px] font-bold text-ink">합정 스시, 지금 앞에 계신가요?</div>
                  <div className="mt-0.5 font-sans text-[12.5px] leading-[1.5] text-muted">눌러서 사진을 찍으면 방문이 인증됩니다.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <Chapter
            no="04"
            en="Save places for later"
            title={[<span key="a" id="wish-title">가고 싶은 곳은,</span>, "일단 담아 두세요."]}
            body={
              <>
                <span className="text-ink">근처에 오면 알려 드릴게요.</span> 지나가다 본 간판, 친구가 보낸 링크, 언젠가 가 보자던 그 집. 잊어버리기 전에 위시리스트에 담아 두면, DINARY가 대신 기억하고 있다가 다시 데려다줘요.
              </>
            }
          />
          <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {WAYS.map((w, i) => (
              <Reveal as="li" key={w.title} delay={0.08 * i} className="bg-paper p-6">
                <div className="flex items-center justify-between text-brick">
                  {w.icon}
                  <span className="font-mono text-[11px] text-off">0{i + 1}</span>
                </div>
                <div className="mt-5 font-sans text-[15.5px] font-medium text-ink">{w.title}</div>
                <p className="mt-2 font-sans text-[13.5px] leading-[1.8] text-muted">{w.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.2} className="mt-10 flex items-center gap-4">
            <span className="rounded-full border border-[#e0c3b1] bg-brick-soft px-5 py-2.5 font-sans text-[14px] text-brick">담아둔 지 12일 만에 다녀왔습니다</span>
            <span className="font-display text-[18px] text-faint italic">— finally.</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
