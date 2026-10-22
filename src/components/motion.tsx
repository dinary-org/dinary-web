"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** 화면에 들어오면 아래에서 살짝 떠오릅니다. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "p" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/**
 * 제목 — 줄마다 마스크 안에서 올라옵니다. lines 는 줄 단위 배열.
 * 보이는지는 제목 상자로 판단합니다(줄은 처음에 마스크에 가려져 있어 스스로는 화면에 들어온 것으로 잡히지 않습니다).
 */
export function RevealLines({
  lines,
  className,
  lineClassName = "",
  delay = 0,
  as = "h2",
  immediate = false,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const trigger = immediate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };
  return (
    <Tag className={className} initial="hidden" {...trigger}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden pb-[0.08em] ${lineClassName}`}>
          <motion.span
            className="block"
            variants={{
              hidden: reduce ? { opacity: 0 } : { y: "105%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 1.1, ease: EASE, delay: delay + i * 0.12 } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** 스크롤에 따라 천천히 움직이는 층. speed 가 클수록 더 움직입니다(px). */
export function Parallax({ children, speed = 60, className }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [speed, -speed]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** 단어마다 스크롤에 따라 진해지는 문단. */
export function ScrollInk({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const reduce = useReducedMotion();
  const opacity = useTransform(progress, range, reduce ? [1, 1] : [0.16, 1]);
  const highlight = children.startsWith("*");
  const text = highlight ? children.slice(1) : children;
  return (
    <>
      <motion.span style={{ opacity }} className={highlight ? "text-brick" : undefined}>
        {text}
      </motion.span>{" "}
    </>
  );
}
