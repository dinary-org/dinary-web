"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { SECTIONS } from "@/lib/sections";
import { newsMailto } from "@/lib/site";

export default function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 24);
    setHidden(y > 640 && y > prev + 4 && !open);
    if (y < prev - 4) setHidden(false);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          solid ? "border-b border-line/70 bg-paper/88 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <nav aria-label="주요 메뉴" className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 md:px-10">
          <a href="#top" aria-label="DINARY 처음으로">
            <Logo />
          </a>
          <ul className="hidden items-center gap-8 lg:flex">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="group relative font-sans text-[14px] text-muted transition-colors hover:text-ink">
                  {s.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brick transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#start"
              className="hidden rounded-full bg-ink px-5 py-2.5 font-sans text-[13.5px] font-medium text-card transition-colors hover:bg-brick sm:inline-flex"
            >
              출시 소식
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card lg:hidden"
            >
              <span className={`absolute h-px w-[18px] bg-ink transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
              <span className={`absolute h-px w-[18px] bg-ink transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pt-24 pb-10 lg:hidden"
          >
            <ul className="flex flex-col">
              {SECTIONS.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line"
                >
                  <a href={`#${s.id}`} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-5">
                    <span className="font-serif text-[30px] text-ink">{s.label}</span>
                    <span className="font-display text-[18px] text-faint italic">{s.en}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href={newsMailto} className="mt-auto rounded-full bg-brick py-4 text-center font-sans text-[15px] font-medium text-card">
              출시 소식 묻기
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
