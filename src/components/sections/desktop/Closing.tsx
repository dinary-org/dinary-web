// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import type { DesktopVals } from "@/components/Landing";

export default function Closing({ v }: { v: DesktopVals }) {
  return (
<>
<section id="start" aria-labelledby="start-title" style={{ position: "relative", overflow: "hidden", background: "#1c1a17", color: "#fbfaf6" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(96px,10vw,144px) clamp(20px,4vw,40px) 0" }}>
    <div aria-hidden="true" style={{ position: "relative", maxWidth: "760px", height: "clamp(250px,26vw,330px)", margin: "0 auto" }}>
      {v.fan.map((f, fIdx) => (<Fragment key={fIdx}>
        <div style={{ position: "absolute", bottom: "0", left: "50%", width: "clamp(150px,16vw,210px)", marginLeft: "calc(clamp(150px,16vw,210px) / -2)", background: "#fbfaf6", padding: "8px 8px 32px", boxSizing: "border-box", transform: f.tf, zIndex: f.z, boxShadow: "0 18px 40px -18px rgba(0,0,0,.6)" }}>
          <div style={{ aspectRatio: "4/5", overflow: "hidden" }}><img src={f.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" /></div>
          <div style={{ position: "absolute", right: "10px", bottom: "9px", fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", color: "#8a8377" }}>{f.cap}</div>
        </div>
      </Fragment>))}
    </div>
    <div style={{ maxWidth: "920px", margin: "clamp(72px,8vw,112px) auto 0", textAlign: "center" }}>
      <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".24em", color: "#cdc6b8" }}>START YOUR DINARY</div>
      <h2 id="start-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "clamp(38px,6.4vw,84px)", lineHeight: "1.18", letterSpacing: "-.035em" }}>오늘 먹은 한 끼부터,<br />기록해 볼까요<span style={{ color: "#e08a63" }}>?</span></h2>
      <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
        <a href={v.iosBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", minWidth: "180px", height: "62px", padding: "0 26px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", boxSizing: "border-box", transition: "background .3s" }} className="hv-blush">
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".16em", color: "#6b665e" }}>JOIN THE BETA · iOS</span>
          <span style={{ fontSize: "18px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "2px" }}>iPhone으로 참여</span>
        </a>
        <a href={v.androidBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", minWidth: "180px", height: "62px", padding: "0 26px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", boxSizing: "border-box", transition: "background .3s" }} className="hv-blush">
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".16em", color: "#6b665e" }}>JOIN THE BETA · ANDROID</span>
          <span style={{ fontSize: "18px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "2px" }}>Android로 참여</span>
        </a>
      </div>
      <div style={{ marginTop: "20px", fontSize: "12.5px", color: "#a29a8c" }}>구글 또는 애플 계정으로 간편하게 시작해요 · 지금 베타 테스트 중</div>
    </div>
  </div>
  <div aria-hidden="true" style={{ marginTop: "clamp(64px,7vw,80px)", overflow: "hidden" }}>
    <div style={{ transform: "translateY(18%)", textAlign: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "22vw", lineHeight: ".8", letterSpacing: "-.04em", color: "rgba(251,250,246,.05)", userSelect: "none" }}>DINARY</div>
  </div>
</section>
</>
  );
}
