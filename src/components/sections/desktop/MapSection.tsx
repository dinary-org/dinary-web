// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import type { DesktopVals } from "@/components/Landing";

export default function MapSection({ v }: { v: DesktopVals }) {
  return (
<>
<section id="map" aria-labelledby="map-title" style={{ padding: "clamp(96px,10vw,140px) 0" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(56px,6vw,80px)", alignItems: "center" }}>
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#1c1a17" }}><span>02</span></div>
      <h2 id="map-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>다녀온 곳이 하나씩,<br />나만의 지도가 됩니다.</h2>
      <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>동네를 걷다 지도를 열면, 그날 거기서 무엇을 먹었는지가 먼저 떠오를 거예요.</p>
      <div role="tablist" aria-label="지도 기능" style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <button type="button" role="tab" aria-selected={v.mf0.active} onClick={v.mf0.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", display: "flex", gap: "18px", alignItems: "flex-start", padding: "18px 20px", borderRadius: "20px", background: v.mf0.bg, border: `1px solid ${v.mf0.border}`, transition: "all .3s" }}>
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: v.mf0.num, paddingTop: "4px" }}>01</span>
          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "20px", color: "#1c1a17" }}>맛집과 카페를 나눠서</span><span style={{ fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>일별, 지역별순으로 다시 정렬해 볼 수 있어요.</span></span>
        </button>
        <button type="button" role="tab" aria-selected={v.mf1.active} onClick={v.mf1.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", display: "flex", gap: "18px", alignItems: "flex-start", padding: "18px 20px", borderRadius: "20px", background: v.mf1.bg, border: `1px solid ${v.mf1.border}`, transition: "all .3s" }}>
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: v.mf1.num, paddingTop: "4px" }}>02</span>
          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "20px", color: "#1c1a17" }}>건물 속 가게까지</span><span style={{ fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>지도를 길게 누르면 그 건물 안 식당·카페를 층별로 보여 줘요.</span></span>
        </button>
        <button type="button" role="tab" aria-selected={v.mf2.active} onClick={v.mf2.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", display: "flex", gap: "18px", alignItems: "flex-start", padding: "18px 20px", borderRadius: "20px", background: v.mf2.bg, border: `1px solid ${v.mf2.border}`, transition: "all .3s" }}>
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: v.mf2.num, paddingTop: "4px" }}>03</span>
          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "20px", color: "#1c1a17" }}>가고 싶은 곳은 책갈피로</span><span style={{ fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>아직 못 간 위시리스트도 같은 지도 위에 함께 있어요.</span></span>
        </button>
      </div>
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
  </div>
</section>
</>
  );
}
