"use client";

import { useSyncExternalStore } from "react";
import { useScrollY } from "@/components/useScrollY";
import { betaLinks } from "@/lib/site";

const noop = () => () => {};

export default function MobileBar() {
  // 좁은 화면(719px 이하)에서 첫 장을 지나면 나타나는 베타 참여 띠. 너비 조건은 globals.css 의 .mobile-bar.
  const showBar = useScrollY() > 700;
  const ios = useSyncExternalStore(noop, () => /iPhone|iPad/.test(navigator.userAgent), () => false);
  const storeUrl = ios ? betaLinks.ios : betaLinks.android;
  return (
        <div className="mobile-bar" data-show={showBar} style={{ position: "fixed", left: "12px", right: "12px", bottom: "12px", zIndex: "55", display: "flex", alignItems: "center", gap: "12px", padding: "10px 10px 10px 14px", borderRadius: "20px", background: "rgba(28,26,23,.96)", color: "#fbfaf6", boxShadow: "0 20px 40px -16px rgba(28,26,23,.6)", animation: "fadeUp .5s cubic-bezier(.22,1,.36,1) both" }}>
      <img src="/brand/icon.png" alt="" width="36" height="36" style={{ borderRadius: "9px", flex: "none" }} />
      <div style={{ flex: "1", minWidth: "0" }}>
        <div style={{ fontSize: "14px", fontWeight: "500" }}>DINARY</div>
        <div style={{ fontSize: "12px", color: "#cdc6b8" }}>지금 베타 테스트 중이에요</div>
      </div>
      <a className="hv-keep" href={storeUrl} style={{ flex: "none", display: "inline-flex", alignItems: "center", height: "44px", padding: "0 18px", borderRadius: "14px", background: "#b4552d", color: "#fbfaf6", fontSize: "14px", fontWeight: "500" }}>베타 참여</a>
    </div>
  );
}
