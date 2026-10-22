"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** 부드러운 스크롤 — 동작 줄이기를 켠 사람에게는 켜지 않습니다. 안쪽 # 링크도 Lenis 로 옮깁니다. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), anchors: { offset: -64 } });
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
