"use client";

import { useEffect, useRef, useState } from "react";
import Phone from "@/components/Phone";
import TabBar from "@/components/TabBar";
import { PICKS, PICK_COLORS, REC_MODES, REVISITS } from "@/lib/content";

export default function Recommend() {
  const [rec, setRec] = useState<(typeof REC_MODES)[number][0]>("now");
  const [pickI, setPickI] = useState(0);
  const [lanes, setLanes] = useState([0, 0, 0, 0, 0]);
  const [winner, setWinner] = useState(-1);
  const [racing, setRacing] = useState(false);
  const timers = useRef<number[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const race = () => {
    if (racing) return;
    const w = Math.floor(Math.random() * 5);
    setRacing(true);
    setWinner(-1);
    setLanes([0, 0, 0, 0, 0]);
    timers.current.push(
      window.setTimeout(() => setLanes([0, 1, 2, 3, 4].map((i) => (i === w ? 100 : 45 + Math.random() * 45))), 60),
      window.setTimeout(() => {
        setRacing(false);
        setWinner(w);
      }, 1900),
    );
  };
  const p = PICKS[pickI];
  const recModes = REC_MODES.map(([id, label, body], i) => {
    const on = rec === id;
    return { n: i + 1, label, body, active: on, bg: on ? "#fbfaf6" : "transparent", border: on ? "#d8d3c8" : "transparent", numColor: on ? "#b4552d" : "#a29a8c", titleSize: on ? "33px" : "17px", titleColor: on ? "#1c1a17" : "#a29a8c", pick: () => setRec(id) };
  });
  const [recNow, recBrowse, recGames] = [rec === "now", rec === "browse", rec === "games"];
  const recHasAction = rec !== "browse";
  const recActionLabel = rec === "now" ? "다음 추천 보기 →" : racing ? "굴러가는 중…" : "구슬 굴려 보기 →";
  const recActionNote = rec === "now" ? "「여기로 갈게요」로 고른 곳은, 그 앞에서 찍으면 후보 맨 위에 떠요." : "먼저 들어온 구슬이 이겨요";
  const recAction = () => (rec === "now" ? setPickI((s) => (s + 1) % 5) : race());
  const pick = { ...p, idx: pickI + 1, tx: p.px + "%", ty: (p.py < 20 ? p.py + 16 : p.py - 7) + "%", whys: p.why.map((t, i) => ({ n: i + 1, t })) };
  const pickDots = PICKS.map((_, i) => ({ w: i === pickI ? "18px" : "6px", c: i === pickI ? "#b4552d" : "#d8d3c8" }));
  const revisits = REVISITS.map(([name, meta, pct]) => ({ name, meta, pct }));
  const gameEyebrow = winner >= 0 ? "오늘은 이걸로" : "";
  const gameResult = winner >= 0 ? PICKS[winner].name : racing ? "…" : "먼저 들어온 구슬이 이겨요";
  const marbles = PICKS.map((_, i) => {
    const v = lanes[i];
    return { c: PICK_COLORS[i], x: (v === 0 ? 38 + i * 6 : [14, 30, 46, 62, 78][i] - (v === 100 ? i * 6 - 12 : 0)) + "%", y: (v === 0 ? 2 : 2 + v * 0.93) + "%", dur: v === 0 ? 0.3 : v === 100 ? 1.7 : 1.9 };
  });
  const recPins = PICKS.map((x, i) => {
    const on = i === pickI;
    return { n: i + 1, x: x.px + "%", y: x.py + "%", size: on ? "30px" : "26px", bg: on ? "#b4552d" : "#fbfaf6", fg: on ? "#fbfaf6" : "#b4552d" };
  });
  return (
    <section id="recommend" aria-labelledby="rec-title" style={{ padding: "clamp(96px,10vw,140px) 0", borderTop: "1px solid #d8d3c8" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(56px,6vw,80px)", alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
            <span>05</span>
            <span style={{ width: "40px", height: "1px", background: "#b4552d" }} />
            <span>WHAT TO EAT, NOW</span>
          </div>
          {" "}
          <h2 id="rec-title" style={{ margin: "24px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>
            오늘 뭐 먹지?
            <br />
            고민은 다섯 곳으로.
          </h2>
          {" "}
          <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>
            지금 있는 곳과 시각, 점심인지 저녁인지를 보고 근처에서 다섯 곳을 골라 드려요. 셈에는 DINARY에서 인증된 방문만 써요. 다른 사람의 기록은 사진도 이름도 없이, 숫자로만 더해져요.
          </p>
          {" "}
          <div role="tablist" aria-label="추천 방식" style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {recModes.map((m, mI) => (
              <button key={mI} type="button" role="tab" aria-selected={m.active} onClick={m.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", display: "flex", gap: "18px", alignItems: "flex-start", padding: "18px 20px", borderRadius: "20px", background: m.bg, border: `1px solid ${m.border}`, transition: "all .3s" }}>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: m.numColor, paddingTop: "4px" }}>0{m.n}</span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "20px", color: "#1c1a17" }}>{m.label}</span>
                  <span style={{ fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>{m.body}</span>
                </span>
              </button>
            ))}
          </div>
          {" "}
          {recHasAction && (
            <>
              <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
                <button className="hv-brick" type="button" onClick={recAction} style={{ all: "unset", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px", borderRadius: "999px", background: "#1c1a17", color: "#fbfaf6", padding: "14px 24px", fontSize: "14.5px", transition: "background .3s" }}>{recActionLabel}</button>
                <span style={{ fontSize: "12.5px", color: "#6b665e" }}>{recActionNote}</span>
              </div>
            </>
          )}
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", width: "min(520px,90%)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "#f7ece5", filter: "blur(30px)" }} />
          <Phone screenStyle={{ boxSizing: "border-box", padding: "58px 22px 0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "2.2px", color: "#8a8377" }}>RECOMMEND</span>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", height: "30px", padding: "0 12px", borderRadius: "15px", background: "#f7ece5", fontSize: "12px", color: "#b4552d" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4552d" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.3 7-11.3A7 7 0 005 9.7C5 14.7 12 21 12 21z M12 7.3a2.4 2.4 0 1 0 .01 0" /></svg>
                을지로 · 화 12:10
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b4552d" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10l5 5 5-5" /></svg>
              </span>
            </div>
            {" "}
            <div style={{ marginTop: "14px", display: "flex", alignItems: "baseline", gap: "12px", whiteSpace: "nowrap" }}>
              {recModes.map((m, mI) => (
                <span key={mI} style={{ fontFamily: "var(--dinary-font-serif)", fontSize: m.titleSize, color: m.titleColor, transition: "all .3s" }}>{m.label}</span>
              ))}
            </div>
            {" "}
            {recNow && (
              <>
                <div style={{ marginTop: "14px", display: "flex", gap: "7px" }}>
                  <span style={{ height: "36px", padding: "0 17px", borderRadius: "18px", display: "flex", alignItems: "center", background: "#1c1a17", color: "#fbfaf6", fontSize: "13px" }}>필터</span>
                  <span style={{ height: "36px", padding: "0 17px", boxSizing: "border-box", borderRadius: "18px", display: "flex", alignItems: "center", border: "1.5px solid #b4552d", color: "#b4552d", fontSize: "13px" }}>점심</span>
                  <span style={{ height: "36px", padding: "0 17px", boxSizing: "border-box", borderRadius: "18px", display: "flex", alignItems: "center", border: "1px solid #e2ddd2", color: "#6b665e", fontSize: "13px" }}>저녁</span>
                </div>
                {" "}
                <div style={{ marginTop: "14px", borderRadius: "26px", border: "1.5px solid #b4552d", background: "#fbfaf6", overflow: "hidden" }}>
                  <div style={{ position: "relative", height: "236px", overflow: "hidden", borderBottom: "1px solid #e2ddd2" }}>
                    <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                      <img src="/map/rec.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    {" "}
                    {recPins.map((q, qI) => (
                      <span key={qI} style={{ position: "absolute", left: q.x, top: q.y, transform: "translate(-50%,-50%)", width: q.size, height: q.size, boxSizing: "border-box", borderRadius: "50%", border: "1.5px solid #b4552d", background: q.bg, color: q.fg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "12px", boxShadow: "0 3px 8px rgba(28,26,23,.15)", transition: "all .3s" }}>{q.n}</span>
                    ))}
                    {" "}
                    <span style={{ position: "absolute", left: pick.tx, top: pick.ty, transform: "translate(-50%,-100%)", whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "12px", background: "#1c1a17", color: "#fbfaf6", fontSize: "12px", fontWeight: "700", transition: "all .3s" }}>{pick.name}</span>
                  </div>
                  {" "}
                  <div style={{ padding: "16px 18px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ flex: "none", width: "22px", height: "22px", borderRadius: "11px", background: "#b4552d", color: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "11px" }}>{pick.idx}</span>
                      <span style={{ flex: "1", minWidth: "0", fontFamily: "var(--dinary-font-serif)", fontSize: "22px", color: "#1c1a17", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pick.name}</span>
                      <span style={{ flex: "none", height: "36px", padding: "0 15px", borderRadius: "18px", background: "#b4552d", color: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "13px" }}>여기로 갈게요</span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "8px", fontSize: "12.5px", color: "#6b665e" }}>{pick.meta}</div>
                    {" "}
                    <div style={{ marginTop: "8px", display: "flex", gap: "16px", fontSize: "12.5px" }}>
                      <span style={{ color: "#6b665e" }}>네이버지도에서 보기</span>
                      <span style={{ color: "#b4552d" }}>+ 위시에 담기</span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {pick.whys.map((y, yI) => (
                        <div key={yI} style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#1c1a17" }}>
                          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: "#b4552d", paddingTop: "1px" }}>{y.n}</span>
                          {y.t}
                        </div>
                      ))}
                    </div>
                    {" "}
                    <div style={{ marginTop: "14px", display: "flex", justifyContent: "center", gap: "6px" }}>
                      {pickDots.map((d, dI) => (
                        <span key={dI} style={{ width: d.w, height: "6px", borderRadius: "3px", background: d.c, transition: "all .3s" }} />
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
            {" "}
            {recBrowse && (
              <>
                <div style={{ marginTop: "18px", borderRadius: "22px", background: "#1c1a17", padding: "18px", color: "#fbfaf6" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
                    <span style={{ color: "#e08a63" }}>지금 시작하는 코스</span>
                    <span style={{ fontFamily: "var(--dinary-font-mono)", color: "#a29a8c" }}>1 / 3</span>
                  </div>
                  {" "}
                  <div style={{ marginTop: "6px", fontFamily: "var(--dinary-font-serif)", fontSize: "19px" }}>을지로 점심, 그다음 커피</div>
                  {" "}
                  <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ flex: "1" }}>
                      <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#a29a8c" }}>한식</div>
                      <div style={{ marginTop: "3px", fontSize: "13.5px" }}>한그릇</div>
                    </div>
                    <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#e08a63" }}>320m →</span>
                    <div style={{ flex: "1" }}>
                      <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#a29a8c" }}>커피</div>
                      <div style={{ marginTop: "3px", fontSize: "13.5px" }}>골목커피</div>
                    </div>
                  </div>
                  {" "}
                  <div style={{ marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "11.5px", color: "#a29a8c" }}>이 순서로 인증한 사람 37명</span>
                    <span style={{ height: "32px", padding: "0 13px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", fontSize: "12px", display: "flex", alignItems: "center" }}>코스 보기</span>
                  </div>
                </div>
                {" "}
                <div style={{ marginTop: "22px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px" }}>투어</span>
                  <span style={{ fontSize: "11px", color: "#8a8377" }}>전체 4</span>
                </div>
                {" "}
                <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                  <div style={{ flex: "none", width: "208px", boxSizing: "border-box", borderRadius: "20px", border: "1.5px solid #b4552d", background: "#fbfaf6", padding: "15px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
                      <span style={{ color: "#b4552d" }}>진행 중</span>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", color: "#b4552d" }}>2/5</span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "6px", fontFamily: "var(--dinary-font-serif)", fontSize: "15.5px" }}>을지로 노포 다섯 집</div>
                    {" "}
                    <div style={{ marginTop: "4px", fontSize: "11px", color: "#8a8377" }}>후보 8곳 중 2곳 인증</div>
                    {" "}
                    <div style={{ marginTop: "10px", display: "flex", gap: "6px" }}>
                      <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#b4552d" }} />
                      <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#b4552d" }} />
                      <span style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1.5px dashed #cdc6b8", boxSizing: "border-box" }} />
                      <span style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1.5px dashed #cdc6b8", boxSizing: "border-box" }} />
                      <span style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1.5px dashed #cdc6b8", boxSizing: "border-box" }} />
                    </div>
                    {" "}
                    <div style={{ marginTop: "10px", fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#6b665e" }}>완주 1,204명</div>
                  </div>
                  <div style={{ flex: "none", width: "208px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "15px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
                      <span style={{ color: "#4f6b7a" }}>시즌 · 12월 31일까지</span>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", color: "#b4552d" }}>0/3</span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "6px", fontFamily: "var(--dinary-font-serif)", fontSize: "15.5px" }}>겨울 국밥 세 그릇</div>
                  </div>
                </div>
                {" "}
                <div style={{ marginTop: "22px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px" }}>다시 가는 사람이 많은 곳</span>
                  <span style={{ fontSize: "11px", color: "#8a8377" }}>재방문율순</span>
                </div>
                {" "}
                <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {revisits.map((r, rI) => (
                    <div key={rI} style={{ display: "flex", alignItems: "center", gap: "12px", borderRadius: "18px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "13px 15px" }}>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "15px" }}>{r.name}</div>
                        <div style={{ marginTop: "2px", fontSize: "11px", color: "#8a8377" }}>{r.meta}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "19px", color: "#b4552d" }}>{r.pct}%</div>
                        <div style={{ fontSize: "10px", color: "#8a8377" }}>재방문</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {" "}
            {recGames && (
              <>
                <div style={{ marginTop: "6px", borderRadius: "24px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "16px 0 14px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ position: "relative", width: "232px", height: "440px", boxSizing: "border-box", borderRadius: "34px", background: "#1c1a17", padding: "30px 9px 9px", boxShadow: "0 18px 30px -18px rgba(28,26,23,.6)" }}>
                    <div style={{ position: "absolute", left: "24px", right: "24px", top: "12px", height: "6px", backgroundImage: "radial-gradient(circle,#e08a63 2.6px,transparent 3px),radial-gradient(circle,#efe6da 2.6px,transparent 3px)", backgroundSize: "36px 6px,36px 6px", backgroundPosition: "0 0,18px 0" }} />
                    {" "}
                    <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "24px", background: "#2b2824", overflow: "hidden" }}>
                      <div style={{ position: "absolute", left: "12px", right: "12px", top: "22px", height: "86px", backgroundImage: "radial-gradient(circle,#d9d0c2 2px,transparent 2.6px)", backgroundSize: "21px 17px", backgroundPosition: "0px 0" }} />
                      <div style={{ position: "absolute", left: "12px", right: "12px", top: "30px", height: "80px", backgroundImage: "radial-gradient(circle,#d9d0c2 2px,transparent 2.6px)", backgroundSize: "21px 17px", backgroundPosition: "10px 0" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "0px", top: "122px", width: "82px", height: "4px", borderRadius: "2px", background: "#d9d0c2", transform: "rotate(16deg)", transformOrigin: "left center" }} />
                      <div style={{ position: "absolute", left: "134px", top: "145px", width: "82px", height: "4px", borderRadius: "2px", background: "#d9d0c2", transform: "rotate(-16deg)", transformOrigin: "left center" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "58px", top: "230px", width: "74px", height: "5px", borderRadius: "2px", background: "#b4552d", transform: "rotate(-55deg)", transformOrigin: "left center" }} />
                      <div style={{ position: "absolute", left: "112px", top: "170px", width: "74px", height: "5px", borderRadius: "2px", background: "#e08a63", transform: "rotate(55deg)", transformOrigin: "left center" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "12px", right: "12px", top: "244px", height: "50px", backgroundImage: "radial-gradient(circle,#d9d0c2 2px,transparent 2.6px)", backgroundSize: "24px 17px", backgroundPosition: "0px 0" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "0px", top: "312px", width: "80px", height: "4px", borderRadius: "2px", background: "#d9d0c2", transform: "rotate(9deg)", transformOrigin: "left center" }} />
                      <div style={{ position: "absolute", left: "134px", top: "325px", width: "80px", height: "4px", borderRadius: "2px", background: "#d9d0c2", transform: "rotate(-9deg)", transformOrigin: "left center" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "64px", top: "340px", width: "30px", height: "4px", borderRadius: "2px", background: "#d9d0c2", transform: "rotate(8deg)", transformOrigin: "left center" }} />
                      <div style={{ position: "absolute", left: "112px", top: "344px", width: "30px", height: "4px", borderRadius: "2px", background: "#d9d0c2", transform: "rotate(-8deg)", transformOrigin: "left center" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "2px", top: "352px", width: "96px", height: "5px", borderRadius: "2px", background: "#b4552d", transform: "rotate(26deg)", transformOrigin: "left center" }} />
                      <div style={{ position: "absolute", left: "118px", top: "394px", width: "96px", height: "5px", borderRadius: "2px", background: "#b4552d", transform: "rotate(-26deg)", transformOrigin: "left center" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "86px", top: "372px", width: "40px", height: "5px", borderRadius: "2px", background: "#d9a441", transform: "rotate(-18deg)", transformOrigin: "left center" }} />
                      {" "}
                      <div style={{ position: "absolute", left: "6px", right: "6px", bottom: "4px", height: "8px", background: "repeating-linear-gradient(90deg,#fbfaf6 0 8px,#1c1a17 8px 16px),#1c1a17", backgroundSize: "16px 4px", backgroundRepeat: "repeat-x" }} />
                      {" "}
                      {marbles.map((m, mI) => (
                        <span key={mI} style={{ position: "absolute", left: m.x, top: m.y, width: "11px", height: "11px", borderRadius: "6px", background: m.c, boxShadow: "inset -2px -2px 0 rgba(0,0,0,.18),inset 2px 2px 0 rgba(255,255,255,.25)", transition: `top ${m.dur}s cubic-bezier(.5,0,.7,1),left ${m.dur}s ease-in-out` }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", minHeight: "56px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", textAlign: "center" }}>
                    <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: "2.5px", color: "#b4552d" }}>{gameEyebrow}</span>
                    <span style={{ fontSize: "21px", fontWeight: "700", color: "#1c1a17" }}>{gameResult}</span>
                  </div>
                </div>
              </>
            )}
            {" "}
            <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="recommend" /></div>
          </Phone>
        </div>
      </div>
    </section>
  );
}
