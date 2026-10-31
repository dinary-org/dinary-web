"use client";

import { useState } from "react";
import Phone from "@/components/Phone";
import TabBar from "@/components/TabBar";
import { POINTS } from "@/lib/content";

const points = POINTS.map(([t, d], i) => ({ n: i + 1, t, d }));

export default function Together() {
  const [poked, setPoked] = useState(false);
  const partnerLine = poked ? "튀김은 꼭 국물에 찍어 먹기" : "모과의 한 줄을 기다리는 중";
  const partnerColor = poked ? "#1c1a17" : "#a29a8c";
  const full = poked ? 4 : 3;
  const couple = {
    n: full,
    left: 10 - full,
    pct: full * 10 + "%",
    slots: Array.from({ length: 10 }, (_, i) =>
      i < 3 || (i === 3 && poked)
        ? { border: "none", bg: "linear-gradient(90deg,#b4552d 50%,#4f6b7a 50%)" }
        : i === 3
          ? { border: "1.5px dashed #b4552d", bg: "linear-gradient(90deg,#b4552d 50%,transparent 50%)" }
          : { border: "1.5px dashed #d8d3c8", bg: "transparent" },
    ),
  };
  const pokeLabel = poked ? "도장이 채워졌어요 · 다시 보기 ↺" : "콕 찌르기 눌러 보기 →";
  const poke = () => setPoked((s) => !s);
  return (
    <section id="together" aria-labelledby="together-title" style={{ position: "relative", overflow: "hidden", background: "#f7ece5", padding: "clamp(96px,10vw,140px) 0" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: "760px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
            <span>06</span>
            <span style={{ width: "40px", height: "1px", background: "#b4552d" }} />
            <span>MEMORIES TOGETHER</span>
          </div>
          {" "}
          <h2 id="together-title" style={{ margin: "24px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>
            둘이 먹은 날들은,
            <br />
            둘이 함께 기억해요.
          </h2>
          {" "}
          <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>연인과 함께 쓰는 기록장을 열 수 있어요. 처음 데이트한 날의 떡볶이, 싸우고 화해한 날의 국밥. 둘이 앉았던 식탁이 하나씩 쌓여, 우리만 아는 지도가 돼요.</p>
        </div>
        {" "}
        <div style={{ marginTop: "clamp(56px,6vw,96px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "48px", alignItems: "center" }}>
          <div className="together-stage" style={{ position: "relative", display: "flex", justifyContent: "flex-start" }}>
            <Phone>
              <div style={{ position: "absolute", inset: "0", boxSizing: "border-box", padding: "61px 20px 0", background: "#f6f3ec" }}>
                <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "3.2px", color: "#8a8377" }}>COUPLE</div>
                {" "}
                <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ display: "flex", flex: "none" }}>
                    <span style={{ width: "52px", height: "52px", borderRadius: "26px", background: "#b4552d", color: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "21px", fontWeight: "700" }}>보</span>
                    <span style={{ marginLeft: "-12px", width: "52px", height: "52px", boxSizing: "border-box", borderRadius: "26px", border: "2px solid #f6f3ec", background: "#4f6b7a", color: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "21px", fontWeight: "700" }}>모</span>
                  </div>
                  <div style={{ minWidth: "0" }}>
                    <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "22px", color: "#1c1a17" }}>보리 · 모과</div>
                    {" "}
                    <span style={{ marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "12px", background: "#f7ece5", fontSize: "11px", color: "#6b665e" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "3px", background: "#b4552d" }} />
                      연인 기록 함께 쓰는 중
                    </span>
                    {" "}
                    <div style={{ marginTop: "6px", fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: "#1c1a17" }}>
                      2025.05.14~{" "}
                      <span style={{ color: "#b4552d" }}>♥ D+536일</span>
                    </div>
                  </div>
                </div>
                {" "}
                <div style={{ marginTop: "16px", borderRadius: "22px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "16px 18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px" }}>우리 도장</span>
                    <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#8a8377" }}>0그릇 · {couple.n} / 10</span>
                  </div>
                  {" "}
                  <div style={{ margin: "14px auto 0", maxWidth: "280px", display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "12px" }}>
                    {couple.slots.map((s, sI) => (
                      <span key={sI} style={{ aspectRatio: "1", borderRadius: "50%", boxSizing: "border-box", border: s.border, background: s.bg, transition: "all .5s" }} />
                    ))}
                  </div>
                  {" "}
                  <div style={{ marginTop: "12px", display: "flex", justifyContent: "center", gap: "18px", fontSize: "11.5px", color: "#6b665e" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "12px", height: "12px", borderRadius: "6px", background: "linear-gradient(90deg,#b4552d 50%,#4f6b7a 50%)" }} />
                      둘 다 씀
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "12px", height: "12px", boxSizing: "border-box", borderRadius: "6px", border: "1px dashed #b4552d", background: "linear-gradient(90deg,#b4552d 50%,transparent 50%)" }} />
                      한 줄 기다리는 중
                    </span>
                  </div>
                </div>
                {" "}
                <div style={{ marginTop: "12px", borderRadius: "22px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "16px 18px" }}>
                  <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px" }}>
                    한 그릇까지{" "}
                    <span style={{ color: "#b4552d" }}>{couple.left}</span>
                  </div>
                  {" "}
                  <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#6b665e" }}>
                    <span>0</span>
                    <span style={{ flex: "1", height: "5px", borderRadius: "3px", background: "#ede8dd", overflow: "hidden" }}>
                      <span style={{ display: "block", height: "100%", width: couple.pct, background: "#b4552d", transition: "width .5s" }} />
                    </span>
                    <span>10</span>
                  </div>
                  {" "}
                  <div style={{ marginTop: "10px", fontSize: "12px", color: "#6b665e" }}>반쪽 도장은 상대가 한 줄을 쓰면 채워져요</div>
                </div>
                {" "}
                <div style={{ marginTop: "12px", borderRadius: "22px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "16px 18px" }}>
                  <div style={{ fontSize: "12px", letterSpacing: "1px", color: "#6b665e" }}>만난 지</div>
                  {" "}
                  <div style={{ marginTop: "6px", fontFamily: "var(--dinary-font-serif)", fontSize: "42px", lineHeight: "1", color: "#1c1a17" }}>
                    536
                    <span style={{ fontSize: "20px" }}>일</span>
                  </div>
                  {" "}
                  <div style={{ marginTop: "8px", fontFamily: "var(--dinary-font-mono)", fontSize: "11.5px", color: "#6b665e" }}>2025.05.14 (수)부터</div>
                  {" "}
                  <span style={{ marginTop: "10px", display: "inline-flex", padding: "6px 12px", borderRadius: "14px", background: "#f7ece5", fontSize: "12px", color: "#b4552d" }}>다음 600일 · 64일 ›</span>
                </div>
              </div>
              {" "}
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="couple" couple /></div>
            </Phone>
            <div className="together-card" style={{ position: "absolute", top: "52%", right: "0", transform: "translateY(-50%)", width: "min(250px,54%)", borderRadius: "22px", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "20px", boxShadow: "0 24px 40px -22px rgba(28,26,23,.5)", boxSizing: "border-box" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: ".16em", color: "#8a8377" }}>
                <span>우리의 기념일</span>
                <span style={{ color: "#b4552d" }}>500일</span>
              </div>
              {" "}
              <div style={{ marginTop: "14px", display: "flex", gap: "12px", alignItems: "center" }}>
                <img src="/img/tteokbokki-bowl.jpg" alt="" style={{ width: "48px", height: "48px", borderRadius: "10px", objectFit: "cover", flex: "none" }} />
                <div>
                  <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px" }}>빨간냄비</div>
                  <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#8a8377" }}>2026.09.25 · 분식</div>
                </div>
              </div>
              {" "}
              <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #e2ddd2", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", lineHeight: "1.55" }}>
                <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: ".16em", color: "#8a8377" }}>우리의 한 줄</div>
                <div>
                  <span style={{ color: "#8a8377" }}>보리 ·</span>
                  비 오는 날엔 역시 떡볶이
                </div>
                <div style={{ color: partnerColor, transition: "color .5s" }}>
                  <span style={{ color: "#8a8377" }}>모과 ·</span>
                  {partnerLine}
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", borderTop: "1px solid #e0c3b1" }}>
              {points.map((p, pI) => (
                <li key={pI} style={{ display: "flex", gap: "20px", padding: "24px 0", borderBottom: "1px solid #e0c3b1" }}>
                  <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "22px", lineHeight: "1", color: "#b4552d" }}>{p.n}</span>
                  <div>
                    <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "20px" }}>{p.t}</div>
                    <p style={{ margin: "8px 0 0", fontSize: "14.5px", lineHeight: "1.8", color: "#6b665e" }}>{p.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            {" "}
            <div style={{ marginTop: "32px" }}>
              <button className="hv-brick" type="button" onClick={poke} style={{ all: "unset", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "12px", borderRadius: "999px", background: "#1c1a17", color: "#fbfaf6", padding: "14px 24px", fontSize: "14.5px", transition: "background .3s" }}>{pokeLabel}</button>
              {" "}
              <p style={{ margin: "12px 0 0", fontSize: "12.5px", color: "#6b665e" }}>눌러 보면, 상대의 한 줄이 도착하고 반쪽 도장이 채워져요.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
