"use client";

import { useSyncExternalStore } from "react";

/** 스크롤 위치(window.scrollY). 서버에서는 0. */
const subscribe = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};
export function useScrollY() {
  return useSyncExternalStore(subscribe, () => window.scrollY, () => 0);
}
