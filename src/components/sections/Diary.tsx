import { Fragment, type CSSProperties } from "react";
import Phone from "@/components/Phone";
import TabBar from "@/components/TabBar";
import { CAL, DOW, JOURNAL, PIN_C, SHARE, photo } from "@/lib/content";

/** 2026년 10월 — 1일이 목요일이라 앞에 빈칸 넷 */
function weeks() {
  const cells: (number | null)[] = [...Array(4).fill(null), ...Array.from({ length: 31 }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const out: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) out.push(cells.slice(i, i + 7));
  return out.map((wk, wi) => ({
    line: wi === out.length - 1 ? "transparent" : "#e2ddd2",
    days: wk.map((n) => ({
      n: n ?? "",
      bg: n === 31 ? "#b4552d" : "transparent",
      fg: n === 31 ? "#fbfaf6" : "#1c1a17",
      recs: n && CAL[n] ? [{ name: CAL[n][0], c: PIN_C[CAL[n][1]] }] : [],
    })),
  }));
}
const calWeeks = weeks();
const calDow = DOW;
const calCount = Object.keys(CAL).length;
/** 캘린더 둘레에 흩어 놓은 사진. 위치 문자열(left:2%;top:4%)을 스타일로 바꿉니다. */
const journal = JOURNAL.map(([k, cap, pos, r, w]) => ({
  src: photo(k),
  cap,
  r,
  w,
  pos: Object.fromEntries(pos.split(";").map((d) => d.split(":"))) as CSSProperties,
}));
const share = SHARE.map((t, i) => ({
  ...t,
  tf: `translateX(calc(-50% + var(--share-dx) * ${i - 1.5})) translateY(${Math.abs(i - 1.5) * 18}px) rotate(${(i - 1.5) * 7}deg)`,
}));

export default function Diary() {

  return (
    <section id="diary" aria-labelledby="diary-title" style={{ background: "#fbfaf6", padding: "clamp(96px,10vw,140px) 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
            <span>03</span>
            <span style={{ width: "40px", height: "1px", background: "#b4552d" }} />
            <span>A DIARY OF EVERYDAY MEALS</span>
          </div>
          {" "}
          <h2 id="diary-title" style={{ margin: "24px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>
            평범한 날의 한 끼도,
            <br />
            모아 두면 한 권의 일기.
          </h2>
          {" "}
          <p style={{ margin: "28px auto 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>캘린더를 열면 그 달에 먹은 것들이 날짜마다 가게 이름으로 적혀 있어요. 특별한 날만이 아니라, 아무것도 아니었던 화요일 점심까지. 쌓일수록 내가 어떻게 살았는지가 보여요.</p>
        </div>
        {" "}
        <div style={{ position: "relative", maxWidth: "1100px", margin: "clamp(56px,6vw,80px) auto 0", height: "var(--diary-h)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {journal.map((j, jI) => (
            <div key={jI} aria-hidden="true" className="diary-photo" style={{ position: "absolute", ...j.pos, width: `calc(${j.w}% + var(--journal-dw))`, background: "#fbfaf6", padding: "8px 8px 30px", transform: `rotate(${j.r}deg)`, boxShadow: "0 18px 40px -18px rgba(28,26,23,.35),0 4px 10px -4px rgba(28,26,23,.12)" }}>
              <div style={{ aspectRatio: "1", overflow: "hidden" }}>
                <img src={j.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              {" "}
              <div style={{ position: "absolute", right: "9px", bottom: "9px", fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#8a8377" }}>{j.cap}</div>
            </div>
          ))}
          <Phone style={{ zIndex: "2" }}>
            <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", boxSizing: "border-box", paddingTop: "47px" }}>
              <div style={{ padding: "14px 22px 0" }}>
                <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "3.2px", color: "#8a8377" }}>CALENDAR</div>
                {" "}
                <div style={{ marginTop: "14px", fontFamily: "var(--dinary-font-serif)", fontSize: "28px", lineHeight: "1.2", color: "#1c1a17" }}>2026년 10월</div>
                {" "}
                <div style={{ marginTop: "12px", fontSize: "13px", color: "#8a8377" }}>이 달 기록 {calCount}건</div>
              </div>
              {" "}
              <div style={{ margin: "20px 12px 0", display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", paddingBottom: "10px", borderBottom: "1px solid #e2ddd2" }}>
                {calDow.map((d, dI) => (
                  <span key={dI} style={{ textAlign: "center", fontSize: "12px", color: "#8a8377" }}>{d}</span>
                ))}
              </div>
              {" "}
              {calWeeks.map((wk, wkI) => (
                <div key={wkI} style={{ margin: "0 12px", height: "102px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", borderBottom: `1px solid ${wk.line}` }}>
                  {wk.days.map((d, dI) => (
                    <div key={dI} style={{ minWidth: "0", paddingTop: "10px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "13px", background: d.bg, color: d.fg }}>{d.n}</span>
                      {d.recs.map((r, rI) => (
                        <span key={rI} style={{ alignSelf: "stretch", minWidth: "0", display: "flex", alignItems: "center", gap: "2px", padding: "0 1px 0 3px" }}>
                          <span style={{ flex: "none", width: "2.5px", height: "13px", borderRadius: "1px", background: r.c }} />
                          <span style={{ minWidth: "0", fontSize: "10.5px", color: "#1c1a17", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</span>
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              {" "}
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="calendar" /></div>
            </div>
          </Phone>
        </div>
        {" "}
        <div style={{ marginTop: "clamp(96px,10vw,140px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "56px", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>QUARTERLY RECAP</div>
            {" "}
            <h3 style={{ margin: "20px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.3", letterSpacing: "-.02em" }}>
              석 달이 지나면,
              <br />
              계절의 식탁이 도착해요.
            </h3>
            {" "}
            <p style={{ margin: "24px 0 0", maxWidth: "28em", fontSize: "15.5px", lineHeight: "1.9", color: "#6b665e" }}>
              분기가 끝나면 그동안의 기록을 한 편의 이야기로 묶어 드려요. 석 달 동안 먹은 끼니, 가장 많이 머문 동네, 두 번 이상 간 집. 마음에 드는 색의 카드로 골라 친구에게 보여 줄 수도 있어요.
            </p>
          </div>
          <div className="share-stack" style={{ position: "relative", height: "440px" }}>
            {share.map((t, tI) => (
              <div key={tI} style={{ position: "absolute", top: "0", left: "50%", width: "210px", boxSizing: "border-box", borderRadius: "22px", padding: "22px", background: t.bg, color: t.ink, transform: t.tf, boxShadow: "0 30px 50px -28px rgba(28,26,23,.5)" }}>
                <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".18em", color: t.sub }}>{t.range}</div>
                {" "}
                <div style={{ marginTop: "12px", fontFamily: "var(--dinary-font-serif)", fontSize: "22px", lineHeight: "1.3" }}>
                  나의
                  <br />
                  {t.season}
                </div>
                {" "}
                <div style={{ marginTop: "20px", fontFamily: "var(--dinary-font-serif)", fontSize: "46px", lineHeight: "1" }}>
                  {t.meals}
                  <span style={{ marginLeft: "4px", fontFamily: "var(--dinary-font-sans)", fontSize: "14px" }}>끼</span>
                </div>
                {" "}
                <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: `1px solid ${t.line}`, display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ color: t.sub }}>단골집</span>
                    <span>{t.reg}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ color: t.sub }}>자주 찾은 동네</span>
                    <span>{t.hood}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ color: t.sub }}>처음 가 본 집</span>
                    <span>{t.first}</span>
                  </div>
                </div>
                {" "}
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "20px" }}>D</span>
                  <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".2em", color: t.sub }}>{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
