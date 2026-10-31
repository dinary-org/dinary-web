import Phone from "@/components/Phone";
import RecordScreen from "@/components/RecordScreen";
import { betaLinks } from "@/lib/site";

export default function Hero() {
  const { ios: iosBetaUrl, android: androidBetaUrl } = betaLinks;
  return (
    <section id="top" style={{ position: "relative", padding: "clamp(110px,12vw,150px) 0 clamp(64px,8vw,110px)" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,480px),1fr))", gap: "clamp(48px,6vw,80px)", alignItems: "center" }}>
        <div style={{ animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
            <span style={{ width: "32px", height: "1px", background: "#b4552d" }} />
            A FOOD DIARY · 식사 기록장
          </div>
          {" "}
          <h1 style={{ margin: "28px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(40px,7.4vw,92px)", lineHeight: "1.14", letterSpacing: "-.035em", color: "#1c1a17" }}>
            먹은 순간이,
            <br />
            우리의{" "}
            <span style={{ position: "relative", display: "inline-block", background: "linear-gradient(transparent 72%, #f0d3c3 72%, #f0d3c3 92%, transparent 92%)" }}>이야기</span>
            가,
            <br />
            되도록.
          </h1>
          {" "}
          <p className="m-only m-lead">사진으로 쓰는 식사 일기. 셔터 한 번이면 그날의 한 끼가 지도 위의 한 점으로 남아요.</p>
          <p className="d-only" style={{ margin: "32px 0 0", maxWidth: "30em", fontSize: "clamp(16px,1.3vw,17px)", lineHeight: "1.85", color: "#6b665e", textWrap: "pretty" }}>
            DINARY는 사진으로 쓰는 식사 일기예요. 음식이 나오면 셔터 한 번 — 그날의 한 끼가 가게와 날짜, 지도 위의 한 점으로 남아요. 별점을 매기는 대신,{" "}
            <span style={{ color: "#1c1a17" }}>기억을 모읍니다.</span>
          </p>
          {" "}
          <div className="cta-row" style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <a className="hv-brick" href={iosBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: "168px", height: "58px", padding: "0 24px", borderRadius: "16px", background: "#1c1a17", color: "#fbfaf6", transition: "background .3s" }}>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".16em", color: "#cdc6b8" }}><span className="d-only">JOIN THE BETA · </span>iOS</span>
              <span style={{ fontSize: "17px", fontWeight: "500", marginTop: "2px" }}>iPhone으로 참여</span>
            </a>
            <a className="hv-brick" href={androidBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: "168px", height: "58px", padding: "0 24px", borderRadius: "16px", background: "#1c1a17", color: "#fbfaf6", transition: "background .3s" }}>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".16em", color: "#cdc6b8" }}><span className="d-only">JOIN THE BETA · </span>ANDROID</span>
              <span style={{ fontSize: "17px", fontWeight: "500", marginTop: "2px" }}>Android로 참여</span>
            </a>
            <a className="hv-outline d-only" href="#capture" style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "58px", padding: "0 24px", borderRadius: "16px", border: "1px solid #d8d3c8", fontSize: "15px", color: "#1c1a17" }}>
              어떻게 남겨지나요{" "}
              <span>↓</span>
            </a>
          </div>
          {" "}
          <div style={{ marginTop: "18px", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#8a8377" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b4552d" }} />
            iOS · Android · 지금 베타 테스트 중
          </div>
        </div>
        <div style={{ position: "relative", height: "var(--hero-h)", animation: "fadeUp 1.2s .2s cubic-bezier(.22,1,.36,1) both" }}>
          <figure className="hero-photo" style={{ position: "absolute", top: "0", right: "0", width: "68%", margin: "0", background: "#fbfaf6", padding: "10px 10px 38px", transform: "rotate(4deg)", boxShadow: "0 1px 0 rgba(28,26,23,.04),0 18px 40px -18px rgba(28,26,23,.35),0 4px 10px -4px rgba(28,26,23,.12)" }}>
            <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
              <img src="/img/hero-table.jpg" alt="나무 식탁 위의 돌솥비빔밥과 반찬들" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            {" "}
            <figcaption style={{ position: "absolute", left: "12px", right: "12px", bottom: "12px", display: "flex", justifyContent: "space-between", fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: ".12em", color: "#8a8377" }}>
              <span>2026.10.22 — 12:41</span>
              <span>을지로, 점심</span>
            </figcaption>
          </figure>
          {" "}
          <div className="hero-phone" style={{ position: "absolute", left: "0", bottom: "0", transform: "rotate(-5deg)" }}>
            <Phone small>
              <RecordScreen />
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}
