import { STRIP } from "@/lib/content";

const stripLoop = [...STRIP, ...STRIP];

export default function Story() {

  return (
    <section id="story" aria-label="DINARY 이야기">
      <div style={{ position: "relative", overflow: "hidden", borderTop: "1px solid #d8d3c8", borderBottom: "1px solid #d8d3c8", background: "rgba(251,250,246,.6)", padding: "clamp(40px,4vw,56px) 0" }}>
        <div style={{ display: "flex", gap: "36px", width: "max-content", animation: "marquee 60s linear infinite", paddingLeft: "36px" }}>
          {stripLoop.map((s, sI) => (
            <figure key={sI} style={{ flex: "none", width: "200px", margin: "0", position: "relative", background: "#fbfaf6", padding: "10px 10px 38px", transform: `rotate(${s.r}deg)`, boxShadow: "0 18px 40px -18px rgba(28,26,23,.35),0 4px 10px -4px rgba(28,26,23,.12)" }}>
              <div style={{ aspectRatio: "1", overflow: "hidden" }}>
                <img src={s.src} alt={s.note} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              {" "}
              <figcaption style={{ position: "absolute", left: "12px", right: "12px", bottom: "11px", display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11.5px", color: "#6b665e", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.note}</span>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#8a8377" }}>{s.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        {" "}
        <div style={{ pointerEvents: "none", position: "absolute", top: "0", bottom: "0", left: "0", width: "clamp(48px,10vw,160px)", background: "linear-gradient(90deg,#f6f3ec,rgba(246,243,236,0))" }} />
        {" "}
        <div style={{ pointerEvents: "none", position: "absolute", top: "0", bottom: "0", right: "0", width: "clamp(48px,10vw,160px)", background: "linear-gradient(270deg,#f6f3ec,rgba(246,243,236,0))" }} />
      </div>
      {" "}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(96px,12vw,170px) clamp(20px,4vw,40px) clamp(56px,7vw,96px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
          <span style={{ width: "32px", height: "1px", background: "#b4552d" }} />
          WHY DINARY
        </div>
        {" "}
        <p style={{ margin: "40px 0 0", fontFamily: "var(--dinary-font-serif)", fontSize: "clamp(26px,4.2vw,52px)", lineHeight: "1.5", letterSpacing: "-.02em", color: "#1c1a17", textWrap: "pretty" }}>
          맛집을 평가하는 앱은 이미 많아요. DINARY는 그날{" "}
          <span style={{ color: "#b4552d" }}>누구와, 어떤 기분으로</span>
          {" "}먹었는지를 남겨요. 시간이 지나 다시 펼쳤을 때, 그 한 끼가{" "}
          <span style={{ color: "#b4552d" }}>다시 따뜻해지도록.</span>
        </p>
        {" "}
        <div style={{ marginTop: "44px", fontFamily: "var(--dinary-font-mono)", fontSize: "12px", letterSpacing: ".24em", color: "#8a8377" }}>NOT A REVIEW. A MEMORY.</div>
      </div>
    </section>
  );
}
