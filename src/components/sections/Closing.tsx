import { FAN, photo } from "@/lib/content";
import { betaLinks } from "@/lib/site";

const fan = FAN.map(([k, r, x, cap]) => ({
  src: photo(k),
  cap,
  z: 10 - Math.abs(x),
  tf: `translateX(calc(var(--fan-x) * ${x})) translateY(${Math.abs(x) * 18}px) rotate(${r}deg)`,
}));

export default function Closing() {
  const { ios: iosBetaUrl, android: androidBetaUrl } = betaLinks;
  return (
    <section id="start" aria-labelledby="start-title" style={{ position: "relative", overflow: "hidden", background: "#1c1a17", color: "#fbfaf6" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(96px,10vw,144px) clamp(20px,4vw,40px) 0" }}>
        <div aria-hidden="true" style={{ position: "relative", maxWidth: "760px", height: "clamp(250px,26vw,330px)", margin: "0 auto" }}>
          {fan.map((f, fI) => (
            <div key={fI} style={{ position: "absolute", bottom: "0", left: "50%", width: "clamp(150px,16vw,210px)", marginLeft: "calc(clamp(150px,16vw,210px) / -2)", background: "#fbfaf6", padding: "8px 8px 32px", boxSizing: "border-box", transform: f.tf, zIndex: f.z, boxShadow: "0 18px 40px -18px rgba(0,0,0,.6)" }}>
              <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                <img src={f.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              {" "}
              <div style={{ position: "absolute", right: "10px", bottom: "9px", fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", color: "#8a8377" }}>{f.cap}</div>
            </div>
          ))}
        </div>
        {" "}
        <div style={{ maxWidth: "920px", margin: "clamp(72px,8vw,112px) auto 0", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".3em", color: "#a29a8c" }}>START YOUR DINARY</div>
          {" "}
          <h2 id="start-title" style={{ margin: "24px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(38px,6.4vw,84px)", lineHeight: "1.18", letterSpacing: "-.035em" }}>
            오늘 먹은 한 끼부터,
            <br />
            기록해 볼까요
            <span style={{ color: "#e08a63" }}>?</span>
          </h2>
          {" "}
          <p style={{ margin: "32px auto 0", maxWidth: "34em", fontSize: "clamp(15.5px,1.3vw,17px)", lineHeight: "1.9", color: "#cdc6b8" }}>지금 iOS와 Android에서 베타 테스트를 하고 있어요. 먼저 써 보고, 불편한 점을 들려주세요. 첫 기록은 오늘 점심이면 충분해요.</p>
          {" "}
          <div className="cta-row" style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <a className="hv-blush" href={iosBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", minWidth: "180px", height: "62px", padding: "0 26px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", boxSizing: "border-box", transition: "background .3s" }}>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".16em", color: "#6b665e" }}><span className="d-only">JOIN THE BETA · </span>iOS</span>
              <span style={{ fontSize: "18px", fontWeight: "500", marginTop: "2px" }}>iPhone으로 참여</span>
            </a>
            <a className="hv-blush" href={androidBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", minWidth: "180px", height: "62px", padding: "0 26px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", boxSizing: "border-box", transition: "background .3s" }}>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".16em", color: "#6b665e" }}><span className="d-only">JOIN THE BETA · </span>ANDROID</span>
              <span style={{ fontSize: "18px", fontWeight: "500", marginTop: "2px" }}>Android로 참여</span>
            </a>
          </div>
          {" "}
          <div style={{ marginTop: "20px", fontSize: "12.5px", color: "#a29a8c" }}>구글 또는 애플 계정으로 간편하게 시작해요 · 지금 베타 테스트 중</div>
        </div>
      </div>
      {" "}
      <div aria-hidden="true" style={{ marginTop: "clamp(64px,7vw,80px)", overflow: "hidden" }}>
        <div style={{ transform: "translateY(18%)", textAlign: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "22vw", lineHeight: ".8", letterSpacing: "-.04em", color: "rgba(251,250,246,.05)", userSelect: "none" }}>DINARY</div>
      </div>
    </section>
  );
}
