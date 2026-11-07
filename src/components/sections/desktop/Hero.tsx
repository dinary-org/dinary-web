// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import type { DesktopVals } from "@/components/Landing";

export default function Hero({ v }: { v: DesktopVals }) {
  return (
<>
<section id="top" style={{ position: "relative", padding: "clamp(110px,12vw,150px) 0 clamp(64px,8vw,110px)" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,480px),1fr))", gap: "clamp(48px,6vw,80px)", alignItems: "center" }}>
    <div style={{ animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) both" }}>
      <h1 style={{ margin: "0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "clamp(36px,5.6vw,72px)", lineHeight: "1.14", letterSpacing: "-.035em", color: "#1c1a17" }}>찍는 순간 남는<br />나만의 <span style={{ position: "relative", display: "inline-block", background: "linear-gradient(transparent 72%, #f0d3c3 72%, #f0d3c3 92%, transparent 92%)" }}>맛집 기록</span></h1>
      <p style={{ margin: "32px 0 0", maxWidth: "30em", fontSize: "clamp(16px,1.3vw,17px)", lineHeight: "1.85", color: "#6b665e", textWrap: "pretty" }}>다이너리(DINARY)는 사진으로 쓰는 식사 일기예요. 지도 앱의 별점과 리뷰는 누구에게나 같은 정보지만, DINARY에는 그 가게에서 보낸 <span style={{ color: "#1c1a17" }}>나만의 한 끼와 기억</span>이 남아요.</p>
      <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <a href={v.iosBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: "168px", height: "58px", padding: "0 24px", borderRadius: "16px", background: "#1c1a17", color: "#fbfaf6", transition: "background .3s" }} className="hv-brick">
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".16em", color: "#cdc6b8" }}>JOIN THE BETA · iOS</span>
          <span style={{ fontSize: "17px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "2px" }}>iPhone으로 참여</span>
        </a>
        <a href={v.androidBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: "168px", height: "58px", padding: "0 24px", borderRadius: "16px", background: "#1c1a17", color: "#fbfaf6", transition: "background .3s" }} className="hv-brick">
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".16em", color: "#cdc6b8" }}>JOIN THE BETA · ANDROID</span>
          <span style={{ fontSize: "17px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "2px" }}>Android로 참여</span>
        </a>
      </div>
    </div>

    <div style={{ position: "relative", height: v.heroStageH, animation: "fadeUp 1.2s .2s cubic-bezier(.22,1,.36,1) both" }}>
      <div style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "row-reverse", justifyContent: "center", alignItems: "flex-end" }}>
      <div style={{ position: "relative", zIndex: "1", transform: "rotate(7deg)", transformOrigin: "bottom center", marginBottom: "28px" }}><div style={{ position: "relative", width: v.phSm.w, height: v.phSm.h }}><div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.phSm.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}><div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative" }}><div style={{ position: "relative", width: "100%", height: "100%", containerType: "inline-size", background: "#f6f3ec" }}><img src="/img/hero-map.jpg" alt="DINARY 지도 화면: 신촌 일대의 맛집 핀과 하늘초밥 기록 카드" style={{ position: "absolute", left: "0", top: "12.05cqw", width: "100%", height: "auto", display: "block" }} /><div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12.05cqw", background: "#f6f3ec", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7.4cqw 0 9.5cqw", boxSizing: "border-box", zIndex: "40" }}><span style={{ fontFamily: "-apple-system,'SF Pro Text',var(--dinary-font-sans-bd)", fontWeight: "600", fontSize: "4.3cqw", letterSpacing: "-.02em", color: "#1c1a17", lineHeight: "1" }}>9:41</span><svg viewBox="0 0 70 13" style={{ width: "17.9cqw", height: "auto", display: "block" }} fill="#1c1a17"><rect x="0" y="8" width="3" height="4" rx="1"></rect><rect x="4.8" y="5.8" width="3" height="6.2" rx="1"></rect><rect x="9.6" y="3.4" width="3" height="8.6" rx="1"></rect><rect x="14.4" y="1" width="3" height="11" rx="1"></rect><path d="M30.5 3.2a9.6 9.6 0 0 1 12.6 0l1.2-1.3a11.4 11.4 0 0 0-15 0Zm2.2 2.4a6.4 6.4 0 0 1 8.2 0l1.2-1.3a8.2 8.2 0 0 0-10.6 0Zm2.2 2.4a3.2 3.2 0 0 1 3.8 0l1.2-1.3a5 5 0 0 0-6.2 0Zm1.9 3.6 1.7-1.9a1.8 1.8 0 0 0-3.4 0Z"></path><rect x="47.5" y="0.5" width="19" height="11" rx="3.2" fill="none" stroke="#1c1a17" strokeOpacity=".4"></rect><rect x="49" y="2" width="16" height="8" rx="2"></rect><path d="M68 4v4a2 2 0 0 0 0-4Z" fillOpacity=".45"></path></svg></div><div style={{ position: "absolute", left: "50%", top: "2.6cqw", width: "31cqw", height: "8.6cqw", transform: "translateX(-50%)", borderRadius: "5cqw", background: "#000", zIndex: "41" }}></div><div style={{ position: "absolute", left: "50%", bottom: "2.3cqw", width: "35cqw", height: "1.3cqw", transform: "translateX(-50%)", borderRadius: "1cqw", background: "#1c1a17", zIndex: "41" }}></div></div></div></div></div></div>
      <div style={{ position: "relative", zIndex: "2", transform: "rotate(-7deg)", transformOrigin: "bottom center", marginRight: "-11%" }}>
        <div style={{ position: "relative", width: v.phSm.w, height: v.phSm.h }}>
          <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.phSm.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
            <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative" }}>
              <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", overflow: "hidden" }}><div style={{ position: "relative", width: "100%", height: "100%", containerType: "inline-size", background: "#f6f3ec", overflow: "hidden" }}><img src="/img/hero-record-fit.jpg" alt="DINARY 기록 상세 화면: 하늘초밥 초밥 사진과 별점, 방문 인증" style={{ position: "absolute", left: "0", top: "12.05cqw", width: "100%", height: "auto", display: "block" }} /><div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12.05cqw", background: "#f6f3ec", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7.4cqw 0 9.5cqw", boxSizing: "border-box", zIndex: "40" }}><span style={{ fontFamily: "-apple-system,'SF Pro Text',var(--dinary-font-sans-bd)", fontWeight: "600", fontSize: "4.3cqw", letterSpacing: "-.02em", color: "#1c1a17", lineHeight: "1" }}>9:41</span><svg viewBox="0 0 70 13" style={{ width: "17.9cqw", height: "auto", display: "block" }} fill="#1c1a17"><rect x="0" y="8" width="3" height="4" rx="1"></rect><rect x="4.8" y="5.8" width="3" height="6.2" rx="1"></rect><rect x="9.6" y="3.4" width="3" height="8.6" rx="1"></rect><rect x="14.4" y="1" width="3" height="11" rx="1"></rect><path d="M30.5 3.2a9.6 9.6 0 0 1 12.6 0l1.2-1.3a11.4 11.4 0 0 0-15 0Zm2.2 2.4a6.4 6.4 0 0 1 8.2 0l1.2-1.3a8.2 8.2 0 0 0-10.6 0Zm2.2 2.4a3.2 3.2 0 0 1 3.8 0l1.2-1.3a5 5 0 0 0-6.2 0Zm1.9 3.6 1.7-1.9a1.8 1.8 0 0 0-3.4 0Z"></path><rect x="47.5" y="0.5" width="19" height="11" rx="3.2" fill="none" stroke="#1c1a17" strokeOpacity=".4"></rect><rect x="49" y="2" width="16" height="8" rx="2"></rect><path d="M68 4v4a2 2 0 0 0 0-4Z" fillOpacity=".45"></path></svg></div><div style={{ position: "absolute", left: "50%", top: "2.6cqw", width: "31cqw", height: "8.6cqw", transform: "translateX(-50%)", borderRadius: "5cqw", background: "#000", zIndex: "41" }}></div><div style={{ position: "absolute", left: "50%", bottom: "2.3cqw", width: "35cqw", height: "1.3cqw", transform: "translateX(-50%)", borderRadius: "1cqw", background: "#1c1a17", zIndex: "41" }}></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
</>
  );
}
