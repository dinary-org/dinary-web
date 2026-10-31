"use client";

import { useState } from "react";
import { BOWL_NEEDS } from "@/lib/content";

export default function Labels() {
  const [stamps, setStamps] = useState(16);
  const [toast, setToast] = useState("");
  const stamp = () => {
    const n = stamps + 1;
    setStamps(n);
    setToast(n % 10 === 0 ? "도장판을 채웠어요 · 뽑기권 1장" : BOWL_NEEDS.includes(n) ? `라벨을 받았어요 · ${n}번째 도장` : "방문이 인증되었습니다");
  };
  const n = stamps;
  const filled = n % 10;
  const board = {
    filled,
    bowls: n,
    toast,
    track: BOWL_NEEDS.map((need, i) => {
      const on = n >= need;
      const cur = on && (i === BOWL_NEEDS.length - 1 || n < BOWL_NEEDS[i + 1]);
      return { n: need, d: cur ? "D" : "", border: on ? "none" : "1.5px solid #ddd3c4", bg: on ? "#b4552d" : "#fbfaf6", fg: on ? "#b4552d" : "#a29a8c", halo: cur ? "0 0 0 5px #f2dccf" : "none" };
    }),
    slots: Array.from({ length: 10 }, (_, i) => {
      const on = i < filled;
      return { n: on ? "" : i + 1, border: on ? "none" : "1.5px dashed #ddd0c2", op: on ? 1 : 0, r: on ? ((i * 37) % 17) - 8 : -30, sc: on ? 1 : 0.6 };
    }),
  };
  return (
    <section id="labels" aria-labelledby="labels-title" style={{ background: "#fbfaf6", padding: "clamp(96px,10vw,140px) 0" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "40px", alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
              <span>07</span>
              <span style={{ width: "40px", height: "1px", background: "#b4552d" }} />
              <span>STAMPS & LABELS</span>
            </div>
            {" "}
            <h2 id="labels-title" style={{ margin: "24px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>
              인증할 때마다 도장 하나,
              <br />
              쌓이면 라벨이 됩니다.
            </h2>
          </div>
          <p className="m-only m-lead">인증한 기록마다 도장 하나, 쌓이면 라벨을 받아요.</p>
          <p className="d-only" style={{ margin: "0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>
            그 자리에서 찍어 인증한 기록 하나가 도장 하나예요. 열 칸을 채우면 도장판 한 장, 한 장마다 뽑기권이 한 장. 어떻게 먹어 왔는지에 따라 라벨이 하나씩 열리고, 마음에 드는 라벨 하나를 닉네임 옆에 달 수 있어요.
          </p>
        </div>
        {" "}
        <div style={{ marginTop: "clamp(48px,6vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "24px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", borderRadius: "24px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "16px 18px" }}>
              <span style={{ flex: "none", width: "46px", height: "46px", borderRadius: "23px", background: "#6a5d94", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbfaf6" strokeWidth="1.8" strokeLinejoin="round"><path d="M13 3L6 13.5h5.5L10.5 21 18 10.5h-5.5Z" /></svg>
              </span>
              <div style={{ minWidth: "0" }}>
                <div style={{ fontSize: "15px", fontWeight: "700", color: "#1c1a17" }}>
                  보리{" "}
                  <span style={{ color: "#6a5d94" }}>하지만 빨랐죠?</span>
                </div>
                <div style={{ marginTop: "3px", fontSize: "12.5px", color: "#6b665e" }}>라벨을 길게 누르면 대표 라벨이 바뀌어요</div>
              </div>
            </div>
            <div style={{ borderRadius: "28px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "clamp(20px,3vw,28px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
                <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "19px" }}>도장판</span>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#8a8377" }}>{board.bowls}그릇 · {board.filled} / 10</span>
              </div>
              {" "}
              <div style={{ margin: "20px auto 0", maxWidth: "340px", display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "clamp(8px,1.4vw,14px)" }}>
                {board.slots.map((s, sI) => (
                  <div key={sI} style={{ position: "relative", aspectRatio: "1", borderRadius: "50%", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "13px", color: "#cdbfae", border: s.border }}>
                    {s.n}{" "}
                    <svg aria-hidden="true" viewBox="0 0 100 100" style={{ position: "absolute", inset: "4%", width: "92%", height: "92%", opacity: s.op, transform: `rotate(${s.r}deg) scale(${s.sc})`, transition: "all .45s cubic-bezier(.22,1,.36,1)" }}>
                      <polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d" />
                      <text x="50" y="62" textAnchor="middle" fontSize="32" fill="#fbfaf6" style={{ fontFamily: "var(--dinary-font-sans)" }}>D</text>
                    </svg>
                  </div>
                ))}
              </div>
              {" "}
              <div style={{ marginTop: "22px", paddingTop: "20px", borderTop: "1px solid #e2ddd2", position: "relative" }}>
                <div style={{ position: "absolute", left: "5%", right: "5%", top: "37px", height: "2px", background: "#e6dfd2" }} />
                {" "}
                <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(8,minmax(0,1fr))" }}>
                  {board.track.map((t, tI) => (
                    <div key={tI} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "30px", height: "30px", boxSizing: "border-box", borderRadius: "15px", border: t.border, background: t.bg, boxShadow: t.halo, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#fbfaf6", transition: "all .4s" }}>{t.d}</span>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: t.fg }}>{t.n}</span>
                    </div>
                  ))}
                </div>
              </div>
              {" "}
              <div style={{ marginTop: "18px", minHeight: "20px", fontSize: "13px", color: "#b4552d" }}>{board.toast}</div>
              {" "}
              <button className="hv-brick-deep" type="button" onClick={stamp} style={{ all: "unset", cursor: "pointer", marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "10px", borderRadius: "999px", background: "#b4552d", color: "#fbfaf6", padding: "14px 22px", fontSize: "14.5px", transition: "background .3s" }}>인증하고 도장 찍기</button>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "19px" }}>이야기</span>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "15px", color: "#1c1a17" }}>3 / 22</span>
            </div>
            {" "}
            <div className="label-list" style={{ marginTop: "12px", borderRadius: "24px", border: "1px solid #e2ddd2", background: "#fbfaf6", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}>
                <svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}>
                  <polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#6a5d94" />
                  <circle cx="30" cy="30" r="20" fill="#fbfaf6" />
                  <circle cx="30" cy="30" r="17" fill="none" stroke="#6a5d94" strokeWidth=".8" strokeDasharray="1.5 2" />
                  <g transform="translate(19 19) scale(.92)">
                    <path d="M13 3L6 13.5h5.5L10.5 21 18 10.5h-5.5Z" fill="none" stroke="#6a5d94" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#1c1a17" }}>하지만 빨랐죠?</span>
                    <span style={{ fontSize: "11.5px", color: "#b4552d" }}>대표</span>
                  </div>
                  <div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>베타테스트 참여</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderTop: "1px solid #ece6da" }}>
                <svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}>
                  <polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#8a6a3a" />
                  <circle cx="30" cy="30" r="20" fill="#fbfaf6" />
                  <circle cx="30" cy="30" r="17" fill="none" stroke="#8a6a3a" strokeWidth=".8" strokeDasharray="1.5 2" />
                  <g transform="translate(19 19) scale(.92)">
                    <path d="M3.5 11h5a2.5 2.5 0 0 1-5 0Z M9.5 11h5a2.5 2.5 0 0 1-5 0Z M15.5 11h5a2.5 2.5 0 0 1-5 0Z M3 15.5h18" fill="none" stroke="#8a6a3a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#1c1a17" }}>하루 세 끼</span>
                  </div>
                  <div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>하루에 기록 3개</div>
                </div>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#b4552d" }}>3 / 3</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderTop: "1px solid #ece6da" }}>
                <svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}>
                  <polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#a8412a" />
                  <circle cx="30" cy="30" r="20" fill="#fbfaf6" />
                  <circle cx="30" cy="30" r="17" fill="none" stroke="#a8412a" strokeWidth=".8" strokeDasharray="1.5 2" />
                  <g transform="translate(19 19) scale(.92)">
                    <path d="M12 19.5s-7-4.3-7-9.6a3.9 3.9 0 0 1 7-2.4 3.9 3.9 0 0 1 7 2.4c0 5.3-7 9.6-7 9.6Z" fill="none" stroke="#a8412a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#1c1a17" }}>삼고초려</span>
                  </div>
                  <div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>한 가게에 세 번</div>
                </div>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#b4552d" }}>3 / 3</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderTop: "1px solid #ece6da" }}>
                <svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}>
                  <polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#ebe5d8" />
                  <circle cx="30" cy="30" r="20" fill="#f3eee4" />
                  <g transform="translate(19 19) scale(.92)">
                    <path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18V7A1.5 1.5 0 0 1 5 5.5Z M3.5 9.5h17 M8 3.5v3M16 3.5v3 M7.5 13h2M11 13h2M14.5 13h2M7.5 16h2M11 16h2" fill="none" stroke="#c9c1b2" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#4d4842" }}>한 달의 식탁</span>
                  </div>
                  <div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>4주 연속 매주 기록</div>
                </div>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#8a8377" }}>2 / 4</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderTop: "1px solid #ece6da" }}>
                <svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}>
                  <polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#ebe5d8" />
                  <circle cx="30" cy="30" r="20" fill="#f3eee4" />
                  <g transform="translate(19 19) scale(.92)">
                    <path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18V7A1.5 1.5 0 0 1 5 5.5Z M3.5 10h17" fill="none" stroke="#c9c1b2" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#4d4842" }}>세 해의 기록</span>
                  </div>
                  <div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>3년 연속</div>
                </div>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#8a8377" }}>1 / 3</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderTop: "1px solid #ece6da" }}>
                <svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}>
                  <polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#ebe5d8" />
                  <circle cx="30" cy="30" r="20" fill="#f3eee4" />
                  <g transform="translate(19 19) scale(.92)">
                    <path d="M12 21s6.5-5.8 6.5-10.5a6.5 6.5 0 0 0-13 0C5.5 15.2 12 21 12 21z M12 8a2.4 2.4 0 1 0 .01 0" fill="none" stroke="#c9c1b2" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#4d4842" }}>열 동네</span>
                  </div>
                  <div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>지역 10곳</div>
                </div>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#8a8377" }}>6 / 10</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderTop: "1px solid #ece6da" }}>
                <svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}>
                  <polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#ebe5d8" />
                  <circle cx="30" cy="30" r="20" fill="#f3eee4" />
                  <g transform="translate(19 19) scale(.92)">
                    <path d="M8 3.5v6a2 2 0 0 0 4 0v-6 M10 3.5V21 M16.5 3.5c-1.5 1-2 3-2 5.5s.8 3.5 2 3.5V21" fill="none" stroke="#c9c1b2" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#4d4842" }}>고루 먹는 입</span>
                  </div>
                  <div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>분류 8가지</div>
                </div>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#8a8377" }}>5 / 8</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderTop: "1px solid #ece6da" }}>
                <svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}>
                  <polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#ebe5d8" />
                  <circle cx="30" cy="30" r="20" fill="#f3eee4" />
                  <g transform="translate(19 19) scale(.92)">
                    <path d="M12 3.5a8.5 8.5 0 1 0 .01 0 M12 3.5v17M3.5 12h17" fill="none" stroke="#c9c1b2" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#4d4842" }}>사계절 식탁</span>
                  </div>
                  <div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>한 해에 사계절 모두</div>
                </div>
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#8a8377" }}>3 / 4</span>
              </div>
            </div>
            {" "}
            <div style={{ marginTop: "12px", textAlign: "center", fontSize: "13px", color: "#8a8377" }}><span className="d-only">14개</span><span className="m-only">18개</span> 더 보기 ⌄</div>
            {" "}
            <div style={{ marginTop: "26px", display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "19px" }}>동네 칭호</span>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "15px" }}>3</span>
              <span style={{ marginLeft: "auto", fontSize: "12px", color: "#8a8377" }}>한 구에서 10 · 30 · 50번 인증</span>
            </div>
            {" "}
            <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", height: "34px", padding: "0 14px", boxSizing: "border-box", borderRadius: "17px", border: "1px solid #e0c3b1", background: "#f7ece5", fontSize: "13px", color: "#b4552d" }}>마포구 맛잘알</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", height: "34px", padding: "0 14px", boxSizing: "border-box", borderRadius: "17px", border: "1px solid #e0c3b1", background: "#f7ece5", fontSize: "13px", color: "#b4552d" }}>종로구 보안관</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", height: "34px", padding: "0 14px", boxSizing: "border-box", borderRadius: "17px", border: "1px solid #e0c3b1", background: "#f7ece5", fontSize: "13px", color: "#b4552d" }}>중구 러버</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 14px", boxSizing: "border-box", borderRadius: "17px", border: "1.5px dashed #ddd6c9", background: "#f3eee4", fontSize: "13px", color: "#6b665e" }}>
                용산구 러버
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#a29a8c" }}>4 / 10</span>
              </span>
            </div>
            {" "}
            <div style={{ marginTop: "22px", display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "19px" }}>투어 칭호</span>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "15px" }}>0</span>
            </div>
            {" "}
            <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 14px", boxSizing: "border-box", borderRadius: "17px", border: "1.5px dashed #ddd6c9", background: "#f3eee4", fontSize: "13px", color: "#6b665e" }}>
                을지로 노포 다섯 집
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#a29a8c" }}>2 / 5</span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 14px", boxSizing: "border-box", borderRadius: "17px", border: "1.5px dashed #ddd6c9", background: "#f3eee4", fontSize: "13px", color: "#6b665e" }}>
                2026 겨울 국밥 세 그릇
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#a29a8c" }}>0 / 3</span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 14px", boxSizing: "border-box", borderRadius: "17px", border: "1px solid #d8d3c8", background: "#fbfaf6", fontFamily: "var(--dinary-font-mono)", fontSize: "12px" }}>+10</span>
            </div>
          </div>
        </div>
        {" "}
        <p className="d-only" style={{ margin: "24px 0 0", fontSize: "13px", lineHeight: "1.8", color: "#6b665e" }}>추천 탭의 투어를 다 돌면 완주 칭호도 받아요. 칭호는 투어가 끝나도 남아요.</p>
      </div>
    </section>
  );
}
