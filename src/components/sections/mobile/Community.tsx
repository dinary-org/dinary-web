// Claude Design 「Dinary Website - Mobile」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import type { MobileVals } from "@/components/Landing";

export default function Community({ v }: { v: MobileVals }) {
  return (
<>
<section id="community" aria-labelledby="community-title" style={{ padding: "96px 0" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px" }}>
    <div style={{ maxWidth: "760px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#1c1a17" }}><span>06</span></div>
      {" "}
      <h2 id="community-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "32px", lineHeight: "1.22", letterSpacing: "-.03em" }}>
        친구도 모임도,
        <br />
        소셜 탭 하나에.
      </h2>
      {" "}
      <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "15.5px", lineHeight: "1.9", color: "#6b665e" }}>친구 소식도, 함께 쓰는 모임 기록장도 이제 소셜 탭 한곳에 있어요.</p>
    </div>
    {" "}
    <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "40px", alignItems: "center" }}>
      <div style={{ position: "relative", display: "flex", justifyContent: "center", order: "2" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "min(520px,90%)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "#f7ece5", filter: "blur(30px)" }} />
        <div style={{ position: "relative", width: v.ph.w, height: v.ph.h }}>
          <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.ph.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
            <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative", containerType: "inline-size" }}>
              <div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12.05cqw", background: "#f6f3ec", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7.4cqw 0 9.5cqw", boxSizing: "border-box", zIndex: "40" }}>
                <span style={{ fontFamily: "-apple-system,'SF Pro Text',var(--dinary-font-sans-bd)", fontWeight: "600", fontSize: "4.3cqw", letterSpacing: "-.02em", color: "#1c1a17", lineHeight: "1" }}>9:41</span>
                <svg viewBox="0 0 70 13" style={{ width: "17.9cqw", height: "auto", display: "block" }} fill="#1c1a17">
                  <rect x="0" y="8" width="3" height="4" rx="1" />
                  <rect x="4.8" y="5.8" width="3" height="6.2" rx="1" />
                  <rect x="9.6" y="3.4" width="3" height="8.6" rx="1" />
                  <rect x="14.4" y="1" width="3" height="11" rx="1" />
                  <path d="M30.5 3.2a9.6 9.6 0 0 1 12.6 0l1.2-1.3a11.4 11.4 0 0 0-15 0Zm2.2 2.4a6.4 6.4 0 0 1 8.2 0l1.2-1.3a8.2 8.2 0 0 0-10.6 0Zm2.2 2.4a3.2 3.2 0 0 1 3.8 0l1.2-1.3a5 5 0 0 0-6.2 0Zm1.9 3.6 1.7-1.9a1.8 1.8 0 0 0-3.4 0Z" />
                  <rect x="47.5" y="0.5" width="19" height="11" rx="3.2" fill="none" stroke="#1c1a17" strokeOpacity=".4" />
                  <rect x="49" y="2" width="16" height="8" rx="2" />
                  <path d="M68 4v4a2 2 0 0 0 0-4Z" fillOpacity=".45" />
                </svg>
              </div>
              <div style={{ position: "absolute", left: "50%", top: "2.6cqw", width: "31cqw", height: "8.6cqw", transform: "translateX(-50%)", borderRadius: "5cqw", background: "#000", zIndex: "41" }} />
              <div style={{ position: "absolute", left: "50%", bottom: "2.3cqw", width: "35cqw", height: "1.3cqw", transform: "translateX(-50%)", borderRadius: "1cqw", background: "#1c1a17", zIndex: "41" }} />
              {" "}
              <img src={v.shot.src} alt={v.shot.alt} style={{ position: "absolute", left: "0", top: "12.05cqw", width: "100%", height: "auto", display: "block" }} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ order: "3", marginTop: "-16px", textAlign: "center" }}>
        <div style={{ marginTop: "14px" }}>
          <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "10px", marginBottom: "12px", textAlign: "left" }}>
            <span style={{ gridColumn: "span 1", fontFamily: "var(--site-serif)", fontSize: "18px", lineHeight: "1.2", color: "#1c1a17", WebkitTextStroke: ".4px #1c1a17" }}>친구</span>
            <span style={{ gridColumn: "span 4", fontFamily: "var(--site-serif)", fontSize: "18px", lineHeight: "1.2", color: "#1c1a17", WebkitTextStroke: ".4px #1c1a17" }}>모임</span>
          </div>
          {" "}
          <div role="tablist" aria-label="소셜 화면" style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "8px" }}>
            {v.meetChips.map((c, cI) => (
              <button key={cI} type="button" role="tab" aria-selected={c.active} onClick={c.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", minWidth: "0", minHeight: "44px", display: "flex", flexDirection: "column", gap: "9px", padding: "0 0 4px", textAlign: "left" }}>
                <span style={{ position: "relative", display: "block", height: "2px", borderRadius: "2px", background: "#e4dfd5", overflow: "hidden" }}>
                  <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: c.fill, background: "#b4552d", transition: "width .5s cubic-bezier(.2,.7,.2,1)" }} />
                </span>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: ".14em", color: c.num, transition: "color .3s" }}>0{c.n}</span>
                <span style={{ fontFamily: "var(--site-serif)", fontSize: "14.5px", lineHeight: "1.35", color: c.fg, wordBreak: "keep-all", textWrap: "balance", transition: "color .3s" }}>{c.title}</span>
              </button>
            ))}
          </div>
          {" "}
          <p aria-live="polite" style={{ margin: "18px 0 0", minHeight: "52px", fontSize: "14.5px", lineHeight: "1.75", color: "#6b665e", textWrap: "pretty" }}>{v.commBody}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}
