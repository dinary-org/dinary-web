"use client";

import { useScrollY } from "@/components/useScrollY";
import { NAV_SECTIONS as sections } from "@/lib/content";

export default function Nav() {
  const y = useScrollY();
  const navBg = y > 24 ? "rgba(246,243,236,.88)" : "transparent";
  const navBorder = y > 24 ? "rgba(216,211,200,.7)" : "transparent";
  return (
    <header style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "50", transition: "background-color .4s, border-color .4s", borderBottom: `1px solid ${navBorder}`, background: navBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
      <nav aria-label="주요 메뉴" style={{ maxWidth: "1320px", margin: "0 auto", height: "64px", padding: "0 clamp(20px,4vw,40px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        <a href="#top" aria-label="DINARY 처음으로" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/brand/icon.png" alt="" width="30" height="30" style={{ borderRadius: "8px", boxShadow: "0 0 0 1px #d8d3c8" }} />
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "13px", letterSpacing: ".32em", color: "#1c1a17" }}>DINARY</span>
        </a>
                    <ul className="nav-links" style={{ display: "flex", gap: "32px", listStyle: "none", margin: "0", padding: "0" }}>
              {sections.map((s, sI) => (
                <li key={sI}><a className="hv-ink" href={s.href} style={{ fontSize: "14px", color: "#6b665e" }}>{s.label}</a></li>
              ))}
            </ul>
        <a className="hv-brick" href="#start" style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", background: "#1c1a17", color: "#fbfaf6", padding: "10px 20px", fontSize: "13.5px", fontWeight: "500", transition: "background .3s" }}>베타 테스트 참여하기</a>
      </nav>
    </header>
  );
}
