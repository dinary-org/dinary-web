// Claude Design 「Dinary Website - Mobile」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import type { MobileVals } from "@/components/Landing";

export default function MapSection({ v }: { v: MobileVals }) {
  return (
<>
<section id="map" aria-labelledby="map-title" style={{ padding: "96px 0" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "56px", alignItems: "center" }}>
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#1c1a17" }}><span>02</span></div>
      <h2 id="map-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "32px", lineHeight: "1.22", letterSpacing: "-.03em" }}>다녀온 곳이 하나씩,<br />나만의 지도가 됩니다.</h2>
      <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "15.5px", lineHeight: "1.9", color: "#6b665e" }}>동네를 걷다 지도를 열면, 그날 거기서 무엇을 먹었는지가 먼저 떠오를 거예요.</p>
      
    </div>
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", width: "min(520px,90%)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "#f7ece5", filter: "blur(30px)" }}></div>
      <div style={{ position: "relative", width: v.ph.w, height: v.ph.h }}>
          <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.ph.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
            <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative", containerType: "inline-size" }}>
              {v.mapIs0 && (<><img src="/screens/map-records.jpg" alt="DINARY 지도 화면: 맛집 기록 목록을 맛집·카페로 나눠 월별로 보기" style={{ position: "absolute", left: "0", top: "12.05cqw", width: "100%", height: "auto", display: "block" }} loading="lazy" decoding="async" /></>)}
              {v.mapIs1 && (<><img src="/screens/map-building.jpg" alt="DINARY 지도 화면: 현대백화점신촌점 건물 안 식당·카페를 층별로 보기" style={{ position: "absolute", left: "0", top: "12.05cqw", width: "100%", height: "auto", display: "block" }} loading="lazy" decoding="async" /></>)}
              {v.mapIs2 && (<><img src="/screens/map-wishlist.jpg" alt="DINARY 지도 화면: 위시리스트를 지역별로 정렬해 보기" style={{ position: "absolute", left: "0", top: "12.05cqw", width: "100%", height: "auto", display: "block" }} loading="lazy" decoding="async" /></>)}<div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12.05cqw", background: "#f6f3ec", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7.4cqw 0 9.5cqw", boxSizing: "border-box", zIndex: "40" }}><span style={{ fontFamily: "-apple-system,'SF Pro Text',var(--dinary-font-sans-bd)", fontWeight: "600", fontSize: "4.3cqw", letterSpacing: "-.02em", color: "#1c1a17", lineHeight: "1" }}>9:41</span><svg viewBox="0 0 70 13" style={{ width: "17.9cqw", height: "auto", display: "block" }} fill="#1c1a17"><rect x="0" y="8" width="3" height="4" rx="1"></rect><rect x="4.8" y="5.8" width="3" height="6.2" rx="1"></rect><rect x="9.6" y="3.4" width="3" height="8.6" rx="1"></rect><rect x="14.4" y="1" width="3" height="11" rx="1"></rect><path d="M30.5 3.2a9.6 9.6 0 0 1 12.6 0l1.2-1.3a11.4 11.4 0 0 0-15 0Zm2.2 2.4a6.4 6.4 0 0 1 8.2 0l1.2-1.3a8.2 8.2 0 0 0-10.6 0Zm2.2 2.4a3.2 3.2 0 0 1 3.8 0l1.2-1.3a5 5 0 0 0-6.2 0Zm1.9 3.6 1.7-1.9a1.8 1.8 0 0 0-3.4 0Z"></path><rect x="47.5" y="0.5" width="19" height="11" rx="3.2" fill="none" stroke="#1c1a17" strokeOpacity=".4"></rect><rect x="49" y="2" width="16" height="8" rx="2"></rect><path d="M68 4v4a2 2 0 0 0 0-4Z" fillOpacity=".45"></path></svg></div><div style={{ position: "absolute", left: "50%", top: "2.6cqw", width: "31cqw", height: "8.6cqw", transform: "translateX(-50%)", borderRadius: "5cqw", background: "#000", zIndex: "41" }}></div><div style={{ position: "absolute", left: "50%", bottom: "2.3cqw", width: "35cqw", height: "1.3cqw", transform: "translateX(-50%)", borderRadius: "1cqw", background: "#1c1a17", zIndex: "41" }}></div>
      </div></div></div>
    </div>
  <div style={{ order: "3", marginTop: "-24px" }}>
      <div role="tablist" aria-label="지도 기능" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "14px" }}>
        {v.mapChips.map((c, cIdx) => (<Fragment key={cIdx}>
          <button type="button" role="tab" aria-selected={c.active} onClick={c.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", minWidth: "0", minHeight: "44px", display: "flex", flexDirection: "column", gap: "9px", padding: "0 0 4px", textAlign: "left" }}><span style={{ position: "relative", display: "block", height: "2px", borderRadius: "2px", background: "#e4dfd5", overflow: "hidden" }}><span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: c.fill, background: "#b4552d", transition: "width .5s cubic-bezier(.2,.7,.2,1)" }}></span></span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: ".14em", color: c.num, transition: "color .3s" }}>0{c.n}</span><span style={{ fontFamily: "var(--site-serif)", fontSize: "14.5px", lineHeight: "1.35", color: c.fg, wordBreak: "keep-all", textWrap: "balance", transition: "color .3s" }}>{c.title}</span></button>
        </Fragment>))}
      </div>
      <p aria-live="polite" style={{ margin: "18px 0 0", minHeight: "52px", fontSize: "14.5px", lineHeight: "1.75", color: "#6b665e", textWrap: "pretty" }}>{v.mapBody}</p>
    </div>
  </div>
</section>
</>
  );
}
