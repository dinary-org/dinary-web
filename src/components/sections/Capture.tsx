"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import Phone from "@/components/phone/Phone";
import { CameraScreen, DoneScreen, PickScreen, RecordScreen } from "@/components/phone/screens";
import { photos } from "@/lib/photos";
import Chapter from "./Chapter";

const STEPS = [
  {
    verb: "찍고",
    title: "음식이 나오면, 카메라부터.",
    body: "앱 한가운데에는 언제나 셔터가 있어요. 수저를 들기 전, 김이 오르는 그 순간을 한 장에 담으세요.",
    note: "그 자리에서 찍은 사진에만 방문 인증이 붙어요.",
  },
  {
    verb: "찾고",
    title: "여기가 어디인지는 DINARY가 기억해요.",
    body: "셔터를 누르는 순간 위치를 딱 한 번 읽어, 50m 안의 가게를 골라 드려요. 위시리스트에 담아 둔 곳이면 맨 위에 보여요.",
    note: "읽은 좌표는 가게를 찾는 데에만 쓰고, 기록에는 남기지 않아요.",
  },
  {
    verb: "남기고",
    title: "방문이 인증되고, 도장이 하나.",
    body: "가게와 날짜, 시각이 사진 한 장에 묶여 기록장에 들어가요. 담아 둔 지 며칠 만에 다녀왔는지도 함께 알려 줘요.",
    note: "연결이 끊겨도 기기에 먼저 적어 두었다가, 연결되면 올라가요.",
  },
  {
    verb: "쓴다",
    title: "한 줄이면 충분해요.",
    body: "누구와 갔는지, 무엇이 좋았는지. 별점과 짧은 메모, 앨범 속 사진 몇 장을 더하면 그날이 오래 선명해요. 지금 말고 나중에 써도 괜찮아요.",
    note: "다시 가고 싶다면 「또 갈 예정으로 담기」 한 번.",
  },
];

function Screen({ step }: { step: number }) {
  if (step === 0) return <CameraScreen />;
  if (step === 1) return <PickScreen picked={0} />;
  if (step === 2) return <DoneScreen />;
  return <RecordScreen />;
}

export default function Capture() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setStep(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length * 0.999))));
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const tilt = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-3, 3]);
  const s = STEPS[step];

  return (
    <section id="capture" aria-labelledby="capture-title" className="relative">
      <div className="mx-auto max-w-[1320px] px-5 pt-10 md:px-10 md:pt-20">
        <Chapter
          no="01"
          en="Capture the moment"
          title={[<span key="a" id="capture-title">셔터 한 번이면,</span>, "한 끼가 일기가 됩니다."]}
          body="리뷰를 쓰려고 애쓸 필요 없어요. 사진을 찍는 일이 곧 기록이 되도록, DINARY는 찍는 순간부터 남는 순간까지를 짧게 이었어요."
        />
      </div>

      <div ref={ref} className="relative h-[420vh]">
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:px-10">
            {/* 단계 목록 */}
            <div className="order-2 md:order-1 md:col-span-6 lg:col-span-5">
              <ol className="mb-6 hidden gap-2 md:flex" aria-label="기록되는 순서">
                {STEPS.map((x, i) => (
                  <li key={x.verb} className="flex-1">
                    <div className={`font-mono text-[11px] tracking-[0.18em] transition-colors duration-500 ${i <= step ? "text-brick" : "text-off"}`}>
                      0{i + 1} {x.verb}
                    </div>
                    <div className="mt-2 h-[2px] overflow-hidden bg-line">
                      <div className={`h-full bg-brick transition-transform duration-700 ease-[var(--ease-soft)] ${i <= step ? "translate-x-0" : "-translate-x-full"}`} />
                    </div>
                  </li>
                ))}
              </ol>
              <div className="relative min-h-[230px] md:min-h-[300px]" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="font-display text-[56px] leading-none text-brick italic md:text-[88px]">0{step + 1}</div>
                    <h3 className="mt-3 font-serif text-[24px] leading-[1.35] text-ink md:mt-5 md:text-[34px]">{s.title}</h3>
                    <p className="mt-3 max-w-[28em] font-sans text-[14.5px] leading-[1.85] text-muted md:mt-5 md:text-[16px]">{s.body}</p>
                    <p className="mt-4 hidden items-center gap-2 font-sans text-[13px] text-brick md:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-brick" />
                      {s.note}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-2 h-[2px] w-full overflow-hidden bg-line md:hidden">
                <motion.div style={{ width: bar }} className="h-full bg-brick" />
              </div>
            </div>

            {/* 폰 */}
            <div className="relative order-1 flex justify-center md:order-2 md:col-span-6 lg:col-span-7">
              <div aria-hidden className="absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brick-soft blur-2xl md:h-[520px] md:w-[520px]" />
              {/* 인증되면 사진이 인화지로 빠져나와 곁에 놓입니다. */}
              <motion.div
                aria-hidden
                className="print absolute top-[18%] left-1/2 hidden w-[230px] p-[9px] pb-[34px] md:block lg:w-[260px]"
                initial={false}
                animate={step >= 2 ? { x: "-118%", rotate: -7, opacity: 1 } : { x: "-50%", rotate: 0, opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={photos.bibimbap} alt="" fill sizes="260px" placeholder="blur" className="object-cover" />
                </div>
                <div className="absolute right-3 bottom-2.5 left-3 flex justify-between font-mono text-[10px] text-faint">
                  <span>을지로 골목집</span>
                  <span>10.22 12:41</span>
                </div>
              </motion.div>
              <motion.div style={{ rotate: tilt }} className="relative">
                <Phone className="[--s:0.5] min-[400px]:[--s:0.56] md:[--s:0.74] lg:[--s:0.84]" dark={step === 0} label="DINARY 촬영부터 기록까지의 화면 예시">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={step}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Screen step={step} />
                    </motion.div>
                  </AnimatePresence>
                </Phone>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
