// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import TabBar from "@/components/TabBar";
import type { MobileVals } from "@/components/Landing";

export default function Diary({ v }: { v: MobileVals }) {
  return (
<>
<section id="diary" aria-labelledby="diary-title" style={{ background: "#fbfaf6", padding: "80px 0", overflow: "hidden" }}>
  <div style={{ padding: "0 20px" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontFamily: "var(--dinary-font-mono)", fontSize: "12px", letterSpacing: ".18em", color: "#6b665e" }}><span>03</span><span style={{ width: "28px", height: "1px", background: "#b4552d" }}></span><span>A DIARY OF EVERYDAY MEALS</span></div>
    <h2 id="diary-title" style={{ margin: "18px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "31px", lineHeight: "1.3", letterSpacing: "-.03em", textAlign: "center" }}>평범한 날의 한 끼도,<br />모아 두면 한 권의 일기.</h2>
    <p style={{ margin: "18px 0 0", fontSize: "15.5px", lineHeight: "1.85", color: "#6b665e", textWrap: "pretty", textAlign: "center" }}>캘린더를 열면 그 달에 먹은 것들이 날짜마다 가게 이름으로 적혀 있어요. 나의 맛집 일기를 되돌아볼 수 있어요.</p>
  </div>
  <div style={{ position: "relative", marginTop: "44px", display: "flex", justifyContent: "center" }}>
    <div aria-hidden="true" style={{ position: "absolute", left: "-14px", top: "36px", width: "118px", background: "#fbfaf6", padding: "6px 6px 24px", transform: "rotate(-7deg)", boxShadow: "0 14px 30px -16px rgba(28,26,23,.35)" }}><div style={{ aspectRatio: "1", overflow: "hidden" }}><img src="/img/latte.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" /></div><div style={{ position: "absolute", right: "7px", bottom: "7px", fontFamily: "var(--dinary-font-mono)", fontSize: "9px", color: "#8a8377" }}>10.02</div></div>
    <div aria-hidden="true" style={{ position: "absolute", right: "-14px", bottom: "60px", width: "118px", background: "#fbfaf6", padding: "6px 6px 24px", transform: "rotate(6deg)", boxShadow: "0 14px 30px -16px rgba(28,26,23,.35)" }}><div style={{ aspectRatio: "1", overflow: "hidden" }}><img src="/img/hero-table.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" /></div><div style={{ position: "absolute", right: "7px", bottom: "7px", fontFamily: "var(--dinary-font-mono)", fontSize: "9px", color: "#8a8377" }}>10.22</div></div>
    <div style={{ position: "relative", zIndex: "2", width: v.ph.w, height: v.ph.h }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.ph.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
          <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative" }}>
            <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", boxSizing: "border-box", paddingTop: "47px" }}>
              <div style={{ padding: "14px 22px 0" }}>
                <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "3.2px", color: "#8a8377" }}>CALENDAR</div>
                <div style={{ marginTop: "14px", fontFamily: "var(--dinary-font-serif)", fontSize: "28px", lineHeight: "1.2", color: "#1c1a17" }}>2026년 10월</div>
                <div style={{ marginTop: "12px", fontSize: "13px", color: "#8a8377" }}>이 달 기록 {v.calCount}건</div>
              </div>
              <div style={{ margin: "20px 12px 0", display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", paddingBottom: "10px", borderBottom: "1px solid #e2ddd2" }}>
                {v.calDow.map((d, dIdx) => (<Fragment key={dIdx}><span style={{ textAlign: "center", fontSize: "12px", color: "#8a8377" }}>{d}</span></Fragment>))}
              </div>
              {v.calWeeks.map((wk, wkIdx) => (<Fragment key={wkIdx}>
                <div style={{ margin: "0 12px", height: "102px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", borderBottom: `1px solid ${wk.line}` }}>
                  {wk.days.map((d, dIdx) => (<Fragment key={dIdx}>
                    <div style={{ minWidth: "0", paddingTop: "10px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "13px", background: d.bg, color: d.fg }}>{d.n}</span>
                      {d.recs.map((r, rIdx) => (<Fragment key={rIdx}><span style={{ alignSelf: "stretch", minWidth: "0", display: "flex", alignItems: "center", gap: "2px", padding: "0 1px 0 3px" }}><span style={{ flex: "none", width: "2.5px", height: "13px", borderRadius: "1px", background: r.c }}></span><span style={{ minWidth: "0", fontSize: "10.5px", color: "#1c1a17", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</span></span></Fragment>))}
                    </div>
                  </Fragment>))}
                </div>
              </Fragment>))}
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active={"calendar"} /></div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div style={{ marginTop: "80px", padding: "0 20px" }}>
    <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", letterSpacing: ".18em", color: "#6b665e" }}>QUARTERLY RECAP</div>
    <h3 style={{ margin: "16px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "26px", lineHeight: "1.35", letterSpacing: "-.02em" }}>석 달이 지나면,<br />계절의 식탁이 도착해요.</h3>
  </div>
  <div style={{ marginTop: "28px", display: "flex", gap: "12px", overflowX: "auto", scrollSnapType: "x mandatory", padding: "4px 20px 28px", scrollbarWidth: "none" }}>
    {v.share.map((t, tIdx) => (<Fragment key={tIdx}>
      <div style={{ flex: "none", scrollSnapAlign: "center", width: "210px", boxSizing: "border-box", borderRadius: "22px", padding: "22px", background: t.bg, color: t.ink, boxShadow: "0 20px 36px -24px rgba(28,26,23,.5)", border: "1px solid rgba(28,26,23,.06)" }}>
        <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".18em", color: t.sub }}>{t.range}</div>
        <div style={{ marginTop: "12px", fontFamily: "var(--dinary-font-serif)", fontSize: "22px", lineHeight: "1.3" }}>나의<br />{t.season}</div>
        <div style={{ marginTop: "20px", fontFamily: "var(--dinary-font-serif)", fontSize: "46px", lineHeight: "1" }}>{t.meals}<span style={{ marginLeft: "4px", fontFamily: "var(--dinary-font-sans)", fontSize: "14px" }}>끼</span></div>
        <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: `1px solid ${t.line}`, display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}><span style={{ color: t.sub }}>단골집</span><span>{t.reg}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}><span style={{ color: t.sub }}>자주 찾은 동네</span><span>{t.hood}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}><span style={{ color: t.sub }}>처음 가 본 집</span><span>{t.first}</span></div>
        </div>
        <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "20px" }}>D</span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".2em", color: t.sub }}>{t.name}</span></div>
      </div>
    </Fragment>))}
  </div>
</section>
</>
  );
}
