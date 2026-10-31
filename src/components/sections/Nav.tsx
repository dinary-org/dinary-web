"use client";

import { useEffect, useState } from "react";
import { useScrollY } from "@/components/useScrollY";
import { FOOT_SECTIONS, NAV_SECTIONS as sections } from "@/lib/content";
import { betaLinks } from "@/lib/site";

export default function Nav() {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const solid = y > 24 || open;
  const navBg = solid ? "rgba(246,243,236,.88)" : "transparent";
  const navBorder = solid ? "rgba(216,211,200,.7)" : "transparent";

  // 휴대폰 메뉴: 열려 있는 동안 뒤 페이지 스크롤을 막고, Esc 로 닫습니다.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const close = () => setOpen(false);

  return (
    <>
      <header style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "50", transition: "background-color .4s, border-color .4s", borderBottom: `1px solid ${navBorder}`, background: navBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
        <nav aria-label="주요 메뉴" className="nav-bar" style={{ maxWidth: "1320px", margin: "0 auto", height: "64px", padding: "0 clamp(20px,4vw,40px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <a href="#top" onClick={close} aria-label="DINARY 처음으로" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/brand/icon.png" alt="" width="30" height="30" style={{ borderRadius: "8px", boxShadow: "0 0 0 1px #d8d3c8" }} />
            <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "13px", letterSpacing: ".32em", color: "#1c1a17" }}>DINARY</span>
          </a>
          <ul className="nav-links" style={{ display: "flex", gap: "32px", listStyle: "none", margin: "0", padding: "0" }}>
            {sections.map((s, sI) => (
              <li key={sI}><a className="hv-ink" href={s.href} style={{ fontSize: "14px", color: "#6b665e" }}>{s.label}</a></li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a className="hv-brick" href="#start" onClick={close} style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", background: "#1c1a17", color: "#fbfaf6", padding: "10px 20px", fontSize: "13.5px", fontWeight: "500", transition: "background .3s" }}>
              <span className="d-only">베타 테스트 참여하기</span>
              <span className="m-only">베타 참여</span>
            </a>
            <button type="button" className="m-only nav-burger" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} aria-controls="m-menu" onClick={() => setOpen((o) => !o)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>
    </header>

      {/* 휴대폰 전용 — 장 목록과 베타 참여. 머리글의 흐림 효과 안에 두면 화면 전체를 덮지 못해 바깥에 둡니다. */}
      <div id="m-menu" className="m-menu" data-open={open} hidden={!open}>
        <ul>
          {FOOT_SECTIONS.map((s, i) => (
            <li key={s.href}>
              <a href={s.href} onClick={close}>
                <span className="m-menu-no">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="m-menu-cta">
          <a href={betaLinks.ios} onClick={close}>iPhone 베타 참여</a>
          <a href={betaLinks.android} onClick={close}>Android 베타 참여</a>
        </div>
      </div>
    </>
  );
}
