// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import type { MobileVals } from "@/components/Landing";

export default function Nav({ v }: { v: MobileVals }) {
  return (
<>
<header style={{ position: "fixed", top: "0", left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "440px", zIndex: "50", boxSizing: "border-box", transition: "background-color .4s, border-color .4s", borderBottom: `1px solid ${v.navBorder}`, background: v.navBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
  <nav aria-label="주요 메뉴" style={{ height: "56px", padding: "0 8px 0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
    <a href="#top" onClick={v.closeMenu} aria-label="DINARY 처음으로" style={{ display: "flex", alignItems: "center", gap: "9px" }}>
      <img src="/brand/icon.png" alt="" width="28" height="28" style={{ borderRadius: "7px", boxShadow: "0 0 0 1px #d8d3c8" }} />
      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", letterSpacing: ".3em", color: "#1c1a17" }}>DINARY</span>
    </a>
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      <a href="#start" onClick={v.closeMenu} style={{ display: "inline-flex", alignItems: "center", height: "36px", padding: "0 15px", borderRadius: "999px", background: "#1c1a17", color: "#fbfaf6", fontSize: "13px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500" }} className="hv-brick">베타 참여</a>
      <button type="button" onClick={v.toggleMenu} aria-label="메뉴" aria-expanded={v.menuOpen} style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {v.menuClosed && (<><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round"><path d="M4 8h16M4 16h16"></path></svg></>)}
        {v.menuOpen && (<><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg></>)}
      </button>
    </div>
  </nav>
  {v.menuOpen && (<>
    <div style={{ height: "calc(100vh - 57px)", overflowY: "auto", boxSizing: "border-box", padding: "8px 20px 40px", background: "#f6f3ec", display: "flex", flexDirection: "column", animation: "fadeUp .35s cubic-bezier(.22,1,.36,1) both" }}>
      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
        {v.menuLinks.map((s, sIdx) => (<Fragment key={sIdx}>
          <li style={{ borderBottom: "1px solid #e2ddd2" }}><a href={s.href} onClick={v.closeMenu} style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0" }}><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#b4552d" }}>{s.n}</span><span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "22px", color: "#1c1a17" }}>{s.label}</span></a></li>
        </Fragment>))}
      </ul>
      <div style={{ marginTop: "32px" }}><div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
  <a href={v.iosBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "60px", padding: "0 16px", borderRadius: "16px", background: "#1c1a17", color: "#fbfaf6", boxSizing: "border-box" }} className="hv-brick"><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".14em", color: "#cdc6b8" }}>BETA · iOS</span><span style={{ fontSize: "16px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "3px" }}>iPhone으로 참여</span></a>
  <a href={v.androidBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "60px", padding: "0 16px", borderRadius: "16px", background: "#1c1a17", color: "#fbfaf6", boxSizing: "border-box" }} className="hv-brick"><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".14em", color: "#cdc6b8" }}>BETA · ANDROID</span><span style={{ fontSize: "16px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "3px" }}>Android로 참여</span></a>
</div></div>
      <div style={{ marginTop: "14px", fontSize: "12.5px", color: "#8a8377" }}>iOS · Android · 지금 베타 테스트 중</div>
    </div>
  </>)}
</header>
</>
  );
}
