// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import type { DesktopVals } from "@/components/Landing";

export default function Nav({ v }: { v: DesktopVals }) {
  return (
<>
<header style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "50", transition: "background-color .4s, border-color .4s", borderBottom: `1px solid ${v.navBorder}`, background: v.navBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
  <nav aria-label="주요 메뉴" style={{ maxWidth: "1320px", margin: "0 auto", height: "64px", padding: "0 clamp(20px,4vw,40px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
    <a href="#top" aria-label="DINARY 처음으로" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src="/brand/icon.png" alt="" width="30" height="30" style={{ borderRadius: "8px", boxShadow: "0 0 0 1px #d8d3c8" }} />
      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "13px", letterSpacing: ".32em", color: "#1c1a17" }}>DINARY</span>
    </a>
    <ul className="nav-links" style={{ gap: "32px", listStyle: "none", margin: "0", padding: "0" }}>
        {v.sections.map((s, sIdx) => (<Fragment key={sIdx}>
          <li><a href={s.href} style={{ fontSize: "14px", color: "#6b665e" }} className="hv-ink">{s.label}</a></li>
        </Fragment>))}
      </ul>
    <a href="#start" style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", background: "#1c1a17", color: "#fbfaf6", padding: "10px 20px", fontSize: "13.5px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", transition: "background .3s" }} className="hv-brick">베타 테스트 참여하기</a>
  </nav>
</header>
</>
  );
}
