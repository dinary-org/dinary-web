// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import type { MobileVals } from "@/components/Landing";

export default function Closing({ v }: { v: MobileVals }) {
  return (
<>
<section id="start" aria-labelledby="start-title" style={{ position: "relative", overflow: "hidden", background: "#1c1a17", color: "#fbfaf6" }}>
  <div style={{ padding: "80px 20px 0" }}>
    <div aria-hidden="true" style={{ position: "relative", height: "200px" }}>
      {v.fan.map((f, fIdx) => (<Fragment key={fIdx}>
        <div style={{ position: "absolute", bottom: "0", left: "50%", width: "118px", marginLeft: "-59px", background: "#fbfaf6", padding: "6px 6px 24px", boxSizing: "border-box", transform: f.tf, zIndex: f.z, boxShadow: "0 14px 30px -14px rgba(0,0,0,.6)" }}>
          <div style={{ aspectRatio: "4/5", overflow: "hidden" }}><img src={f.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" /></div>
          <div style={{ position: "absolute", right: "7px", bottom: "7px", fontFamily: "var(--dinary-font-mono)", fontSize: "8.5px", color: "#8a8377" }}>{f.cap}</div>
        </div>
      </Fragment>))}
    </div>
    <div style={{ marginTop: "64px", textAlign: "center" }}>
      <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", letterSpacing: ".22em", color: "#cdc6b8" }}>START YOUR DINARY</div>
      <h2 id="start-title" style={{ margin: "20px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "36px", lineHeight: "1.25", letterSpacing: "-.035em" }}>오늘 먹은 한 끼부터,<br />기록해 볼까요<span style={{ color: "#e08a63" }}>?</span></h2>
    </div>
    <div style={{ marginTop: "32px" }}><div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
  <a href={v.iosBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "60px", padding: "0 16px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", boxSizing: "border-box" }} className="hv-brick"><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".14em", color: "#6b665e" }}>BETA · iOS</span><span style={{ fontSize: "16px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "3px" }}>iPhone으로 참여</span></a>
  <a href={v.androidBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "60px", padding: "0 16px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", boxSizing: "border-box" }} className="hv-brick"><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".14em", color: "#6b665e" }}>BETA · ANDROID</span><span style={{ fontSize: "16px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "3px" }}>Android로 참여</span></a>
</div></div>
    <div style={{ marginTop: "16px", textAlign: "center", fontSize: "12px", lineHeight: "1.7", color: "#a29a8c" }}>구글 또는 애플 계정으로 간편하게 시작해요<br />지금 베타 테스트 중</div>
  </div>
  <div aria-hidden="true" style={{ marginTop: "56px", overflow: "hidden" }}>
    <div style={{ transform: "translateY(18%)", textAlign: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "min(26vw,116px)", lineHeight: ".8", letterSpacing: "-.04em", color: "rgba(251,250,246,.05)", userSelect: "none" }}>DINARY</div>
  </div>
</section>
</>
  );
}
