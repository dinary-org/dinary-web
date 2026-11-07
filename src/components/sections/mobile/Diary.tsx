// Claude Design 「Dinary Website - Mobile」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import TabBar from "@/components/TabBar";
import type { MobileVals } from "@/components/Landing";

export default function Diary({ v }: { v: MobileVals }) {
  return (
<>
<section id="diary" aria-labelledby="diary-title" style={{ background: "#f5f6f8", padding: "96px 0", overflow: "hidden" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px" }}>
    <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#1c1a17" }}><span>03</span></div>
      <h2 id="diary-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "32px", lineHeight: "1.22", letterSpacing: "-.03em" }}>평범한 날의 한 끼도,<br />모아 두면 한 권의 일기.</h2>
      <p style={{ margin: "28px auto 0", maxWidth: "31em", fontSize: "15.5px", lineHeight: "1.9", color: "#6b665e" }}>캘린더를 열면 그 달에 먹은 것들이 날짜마다 가게 이름으로 적혀 있어요. 나의 맛집 일기를 되돌아볼 수 있어요.</p>
    </div>
    <div style={{ position: "relative", maxWidth: "1100px", margin: "48px auto 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", zIndex: "2", width: v.ph.w, height: v.ph.h }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.ph.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
          <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative", containerType: "inline-size" }}>
            <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", boxSizing: "border-box", paddingTop: "47px" }}>
              <div style={{ padding: "14px 22px 0" }}>
                <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "3.2px", color: "#8a8377" }}>CALENDAR</div>
                <div style={{ marginTop: "14px", fontFamily: "var(--site-serif)", fontSize: "28px", lineHeight: "1.2", color: "#1c1a17" }}>2026년 10월</div>
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
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="calendar" /></div>
            </div>
          <div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12.05cqw", background: "#f6f3ec", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7.4cqw 0 9.5cqw", boxSizing: "border-box", zIndex: "40" }}><span style={{ fontFamily: "-apple-system,'SF Pro Text',var(--dinary-font-sans-bd)", fontWeight: "600", fontSize: "4.3cqw", letterSpacing: "-.02em", color: "#1c1a17", lineHeight: "1" }}>9:41</span><svg viewBox="0 0 70 13" style={{ width: "17.9cqw", height: "auto", display: "block" }} fill="#1c1a17"><rect x="0" y="8" width="3" height="4" rx="1"></rect><rect x="4.8" y="5.8" width="3" height="6.2" rx="1"></rect><rect x="9.6" y="3.4" width="3" height="8.6" rx="1"></rect><rect x="14.4" y="1" width="3" height="11" rx="1"></rect><path d="M30.5 3.2a9.6 9.6 0 0 1 12.6 0l1.2-1.3a11.4 11.4 0 0 0-15 0Zm2.2 2.4a6.4 6.4 0 0 1 8.2 0l1.2-1.3a8.2 8.2 0 0 0-10.6 0Zm2.2 2.4a3.2 3.2 0 0 1 3.8 0l1.2-1.3a5 5 0 0 0-6.2 0Zm1.9 3.6 1.7-1.9a1.8 1.8 0 0 0-3.4 0Z"></path><rect x="47.5" y="0.5" width="19" height="11" rx="3.2" fill="none" stroke="#1c1a17" strokeOpacity=".4"></rect><rect x="49" y="2" width="16" height="8" rx="2"></rect><path d="M68 4v4a2 2 0 0 0 0-4Z" fillOpacity=".45"></path></svg></div><div style={{ position: "absolute", left: "50%", top: "2.6cqw", width: "31cqw", height: "8.6cqw", transform: "translateX(-50%)", borderRadius: "5cqw", background: "#000", zIndex: "41" }}></div><div style={{ position: "absolute", left: "50%", bottom: "2.3cqw", width: "35cqw", height: "1.3cqw", transform: "translateX(-50%)", borderRadius: "1cqw", background: "#1c1a17", zIndex: "41" }}></div></div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: "96px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "56px", alignItems: "center" }}>
      <div>
        <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#1c1a17" }}>QUARTERLY RECAP</div>
        <h3 style={{ margin: "20px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "28px", lineHeight: "1.3", letterSpacing: "-.02em" }}>석 달이 지나면,<br />계절의 식탁이 도착해요.</h3>
        <p style={{ margin: "24px 0 0", maxWidth: "28em", fontSize: "15.5px", lineHeight: "1.9", color: "#6b665e" }}>분기가 끝나면 그동안의 기록을 한 편의 이야기로 묶어 드려요. 석 달 동안 먹은 끼니, 가장 많이 머문 동네, 두 번 이상 간 집. 마음에 드는 색의 카드로 골라 친구에게 보여 줄 수도 있어요.</p>
      </div>
      <div style={{ position: "relative", height: "440px" }}>
        {v.share.map((t, tIdx) => (<Fragment key={tIdx}>
          <div style={{ position: "absolute", top: "0", left: "50%", width: "210px", boxSizing: "border-box", borderRadius: "22px", padding: "22px", background: t.bg, color: t.ink, transform: t.tf, boxShadow: "0 30px 50px -28px rgba(28,26,23,.5)" }}>
            <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: ".18em", color: t.sub }}>{t.range}</div>
            <div style={{ marginTop: "12px", fontFamily: "var(--site-serif)", fontSize: "22px", lineHeight: "1.3" }}>나의<br />{t.season}</div>
            <div style={{ marginTop: "20px", fontFamily: "var(--site-serif)", fontSize: "46px", lineHeight: "1" }}>{t.meals}<span style={{ marginLeft: "4px", fontFamily: "var(--dinary-font-sans)", fontSize: "14px" }}>끼</span></div>
            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: `1px solid ${t.line}`, display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}><span style={{ color: t.sub }}>단골집</span><span>{t.reg}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}><span style={{ color: t.sub }}>자주 찾은 동네</span><span>{t.hood}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}><span style={{ color: t.sub }}>처음 가 본 집</span><span>{t.first}</span></div>
            </div>
            <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "20px" }}>D</span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".2em", color: t.sub }}>{t.name}</span></div>
          </div>
        </Fragment>))}
      </div>
    </div>
  </div>
</section>
</>
  );
}
