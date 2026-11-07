// Claude Design 「Dinary Website - Mobile」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import type { MobileVals } from "@/components/Landing";

export default function Closing({ v }: { v: MobileVals }) {
  return (
<>
<section id="start" aria-labelledby="start-title" style={{ position: "relative", overflow: "hidden", background: "#1c1a17", color: "#fbfaf6" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "96px 20px 0" }}>
    
    <div style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".24em", color: "#cdc6b8" }}>START YOUR DINARY</div>
      <h2 id="start-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "38px", lineHeight: "1.18", letterSpacing: "-.035em" }}>오늘 먹은 한 끼부터,<br />기록해 볼까요<span style={{ color: "#e08a63" }}>?</span></h2>
      <div style={{ marginTop: "36px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
        <a href={v.iosBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", minWidth: "0", height: "62px", padding: "0 16px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", boxSizing: "border-box", transition: "background .3s" }} className="hv-blush">
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".06em", color: "#6b665e" }}>JOIN THE BETA · iOS</span>
          <span style={{ fontSize: "16px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "2px" }}>iPhone으로 참여</span>
        </a>
        <a href={v.androidBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", minWidth: "0", height: "62px", padding: "0 16px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", boxSizing: "border-box", transition: "background .3s" }} className="hv-blush">
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".06em", color: "#6b665e" }}>JOIN THE BETA · ANDROID</span>
          <span style={{ fontSize: "16px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "2px" }}>Android로 참여</span>
        </a>
      </div>
      <div style={{ marginTop: "20px", fontSize: "12.5px", color: "#a29a8c" }}>구글 또는 애플 계정으로 간편하게 시작해요 · 지금 베타 테스트 중</div>
    </div>
  </div>
  <div aria-hidden="true" style={{ marginTop: "64px", overflow: "hidden" }}>
    <div style={{ transform: "translateY(18%)", textAlign: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "min(26vw,116px)", lineHeight: ".8", letterSpacing: "-.04em", color: "rgba(251,250,246,.05)", userSelect: "none" }}>DINARY</div>
  </div>
</section>
</>
  );
}
