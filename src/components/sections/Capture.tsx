"use client";

import { useEffect, useState } from "react";
import Phone from "@/components/Phone";
import RecordScreen from "@/components/RecordScreen";
import { FlashIcon, FlipIcon, MapPinIcon } from "@/components/icons";
import { STEPS } from "@/lib/content";

export default function Capture() {
  const [cur, setCur] = useState(0);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    // 손대기 전까지 4.2초마다 다음 단계로 넘어갑니다. 움직임 줄이기 설정이면 멈춰 둡니다.
    if (touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setCur((s) => (s + 1) % 4), 4200);
    return () => clearInterval(t);
  }, [touched]);
  const go = (n: number) => {
    setCur((n + 4) % 4);
    setTouched(true);
  };
  const steps = STEPS.map((x, i) => ({ n: i + 1, verb: x.verb, active: i === cur, color: i <= cur ? "#b4552d" : "#a29a8c", bar: i <= cur ? "#b4552d" : "#d8d3c8", pick: () => go(i) }));
  const step = { ...STEPS[cur], no: "0" + (cur + 1) };
  const [isStep0, isStep1, isStep2, isStep3] = [cur === 0, cur === 1, cur === 2, cur === 3];
  const prevStep = () => go(cur - 1);
  const nextStep = () => go(cur + 1);
  return (
    <section id="capture" aria-labelledby="capture-title" style={{ padding: "clamp(40px,6vw,80px) 0 clamp(96px,10vw,140px)" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
          <span>01</span>
          <span style={{ width: "40px", height: "1px", background: "#b4552d" }} />
          <span>CAPTURE THE MOMENT</span>
        </div>
        {" "}
        <h2 id="capture-title" style={{ margin: "24px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>
          셔터 한 번이면,
          <br />
          한 끼가 일기가 됩니다.
        </h2>
        {" "}
        <p className="m-only m-lead">찍는 순간이 곧 기록이 돼요.</p>
        <p className="d-only" style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>리뷰를 쓰려고 애쓸 필요 없어요. 사진을 찍는 일이 곧 기록이 되도록, DINARY는 찍는 순간부터 남는 순간까지를 짧게 이었어요.</p>
        {" "}
        <div className="m-stack" style={{ marginTop: "clamp(48px,6vw,80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "clamp(40px,5vw,72px)", alignItems: "center" }}>
          <div className="m-contents">
            <div role="tablist" aria-label="기록되는 순서" className="m-o1 cap-tabs" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "8px" }}>
              {steps.map((s, sI) => (
                <button key={sI} type="button" role="tab" aria-selected={s.active} onClick={s.pick} style={{ all: "unset", cursor: "pointer", padding: "12px 0 0", minHeight: "44px" }}>
                  <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".16em", color: s.color, transition: "color .4s" }}>0{s.n} {s.verb}</div>
                  {" "}
                  <div style={{ marginTop: "10px", height: "2px", background: s.bar, transition: "background .5s" }} />
                </button>
              ))}
            </div>
            {" "}
            <div aria-live="polite" className="m-o3 cap-text" style={{ marginTop: "36px", minHeight: "300px" }}>
              <div className="d-only" style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "clamp(48px,6vw,80px)", lineHeight: "1", color: "#b4552d", letterSpacing: "-.04em" }}>{step.no}</div>
              {" "}
              <h3 style={{ margin: "20px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(24px,2.6vw,34px)", lineHeight: "1.35" }}>{step.title}</h3>
              {" "}
              <p style={{ margin: "18px 0 0", maxWidth: "28em", fontSize: "clamp(14.5px,1.2vw,16px)", lineHeight: "1.85", color: "#6b665e" }}>{step.body}</p>
              {" "}
              <p className="d-only" style={{ margin: "18px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#b4552d" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b4552d", flex: "none" }} />
                {step.note}
              </p>
              {" "}
              <div style={{ marginTop: "28px", display: "flex", gap: "8px" }}>
                <button className="hv-ring" type="button" onClick={prevStep} aria-label="이전 단계" style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #d8d3c8", display: "flex", alignItems: "center", justifyContent: "center", color: "#1c1a17" }}>←</button>
                <button className="hv-brick" type="button" onClick={nextStep} aria-label="다음 단계" style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#1c1a17", display: "flex", alignItems: "center", justifyContent: "center", color: "#fbfaf6" }}>→</button>
              </div>
            </div>
          </div>
          <div className="m-o2 m-phone" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", width: "min(520px,90%)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "#f7ece5", filter: "blur(30px)" }} />
            <Phone>
              {isStep3 && <RecordScreen />}
              {" "}
              {isStep0 && (
                <>
                  <div style={{ position: "absolute", inset: "0", background: "#171614", overflow: "hidden" }}>
                    <div style={{ position: "absolute", left: "14px", right: "14px", top: "128px", height: "430px", borderRadius: "26px", overflow: "hidden", background: "#2b2824" }}>
                      <img src="/img/bibimbap.jpg" alt="카메라 화면에 담긴 돌솥비빔밥" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    {" "}
                    <div style={{ position: "absolute", left: "16px", top: "55px", width: "44px", height: "44px", borderRadius: "22px", background: "rgba(251,250,246,.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fbfaf6", fontSize: "16px" }}>✕</div>
                    {" "}
                    <div style={{ position: "absolute", right: "16px", top: "55px", width: "44px", height: "44px", borderRadius: "22px", background: "rgba(251,250,246,.14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ display: "inline-flex" }}><FlashIcon /></span>
                      <span style={{ position: "absolute", right: "9px", bottom: "7px", fontFamily: "var(--dinary-font-mono)", fontSize: "9px", color: "#fbfaf6" }}>×</span>
                    </div>
                    {" "}
                    <div style={{ position: "absolute", left: "0", right: "0", top: "61px", display: "flex", flexDirection: "column", alignItems: "center", gap: "7px" }}>
                      <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "18px", color: "#fbfaf6" }}>지금 여기</span>
                      <span style={{ borderRadius: "14px", background: "rgba(251,250,246,.12)", padding: "5px 12px", fontSize: "11px", color: "rgba(251,250,246,.8)" }}>위치는 촬영 순간에 읽습니다</span>
                    </div>
                    {" "}
                    <div style={{ position: "absolute", left: "0", right: "0", top: "570px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "50px", height: "50px", borderRadius: "25px", background: "rgba(251,250,246,.26)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#fbfaf6" }}>1×</span>
                      <span style={{ width: "44px", height: "44px", borderRadius: "22px", background: "rgba(251,250,246,.14)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#fbfaf6" }}>2×</span>
                    </div>
                    {" "}
                    <div style={{ position: "absolute", left: "0", right: "0", bottom: "138px", display: "flex", justifyContent: "center", alignItems: "center", gap: "34px" }}>
                      <img src="/img/latte.jpg" alt="" style={{ width: "46px", height: "46px", borderRadius: "12px", objectFit: "cover", display: "block" }} />
                      <span style={{ width: "78px", height: "78px", borderRadius: "39px", boxSizing: "border-box", border: "3px solid rgba(251,250,246,.85)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: "62px", height: "62px", borderRadius: "31px", background: "#fbfaf6" }} /></span>
                      <span style={{ width: "46px", height: "46px", borderRadius: "23px", background: "rgba(251,250,246,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ display: "inline-flex" }}><FlipIcon stroke="rgba(251,250,246,.65)" /></span></span>
                    </div>
                    {" "}
                    <div style={{ position: "absolute", left: "0", right: "0", bottom: "90px", textAlign: "center", fontSize: "11.5px", color: "rgba(251,250,246,.6)" }}>갤러리에서 고른 사진은 인증되지 않아요</div>
                  </div>
                </>
              )}
              {" "}
              {isStep1 && (
                <>
                  <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", boxSizing: "border-box", padding: "55px 20px 44px", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                      <img src="/img/bibimbap.jpg" alt="" style={{ width: "74px", height: "74px", borderRadius: "18px", objectFit: "cover", flex: "none" }} />
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "20px", lineHeight: "27px", color: "#1c1a17" }}>여기 어디예요?</div>
                        {" "}
                        <div style={{ marginTop: "2px", fontSize: "11.5px", lineHeight: "18px", color: "#6b665e" }}>지금 위치에서 가까운 곳입니다 (정확도 12m)</div>
                      </div>
                    </div>
                    <div style={{ marginTop: "12px", display: "flex", padding: "3px", borderRadius: "18px", border: "1px solid #d8d3c8", background: "#fbfaf6" }}>
                      <span style={{ flex: "1", height: "30px", borderRadius: "15px", background: "#b4552d", color: "#fbfaf6", fontSize: "11.5px", display: "flex", alignItems: "center", justifyContent: "center" }}>맛집</span>
                      <span style={{ flex: "1", height: "30px", borderRadius: "15px", color: "#6b665e", fontSize: "11.5px", display: "flex", alignItems: "center", justifyContent: "center" }}>카페</span>
                    </div>
                    <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "9px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "62px", borderRadius: "20px", border: "1.5px solid #b4552d", background: "#f9f0e9", padding: "13px 15px", boxShadow: "0 4px 14px rgba(180,85,45,.1)" }}>
                        <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "17px", background: "#f7ece5", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", color: "#b4552d" }}>8m</span>
                        <div style={{ flex: "1", minWidth: "0" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#b4552d" stroke="#b4552d" strokeWidth="1.6" strokeLinejoin="round"><path d="M7 4.5h10v15l-5-3.6-5 3.6Z" /></svg>
                            <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", color: "#b4552d" }}>위시리스트에 담아둔 식당</span>
                          </div>
                          {" "}
                          <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#1c1a17" }}>한그릇</div>
                          {" "}
                          <div style={{ marginTop: "3px", fontSize: "11.5px", color: "#8a8377" }}>한식 · 서울 중구 을지로</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "62px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #ded8cb", background: "#fbfaf6", padding: "13px 15px" }}>
                        <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "17px", background: "#f1ede4", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", color: "#6b665e" }}>41m</span>
                        <div style={{ flex: "1", minWidth: "0" }}>
                          <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#1c1a17" }}>빨간냄비</div>
                          <div style={{ marginTop: "3px", fontSize: "11.5px", color: "#8a8377" }}>분식 · 서울 중구 을지로</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "62px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #ded8cb", padding: "13px 15px", opacity: ".5" }}>
                        <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "17px", background: "#f1ede4", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", color: "#6b665e" }}>72m</span>
                        <div style={{ flex: "1", minWidth: "0" }}>
                          <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "16px", color: "#1c1a17" }}>숯불한판</div>
                          <div style={{ marginTop: "3px", fontSize: "11.5px", color: "#8a8377" }}>한식 · 서울 중구 을지로</div>
                          <div style={{ marginTop: "3px", fontSize: "10.5px", color: "#a29a8c" }}>너무 멀어 고를 수 없습니다</div>
                        </div>
                      </div>
                      <div style={{ marginTop: "0", minHeight: "48px", borderRadius: "20px", border: "1px dashed #d8d3c8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12.5px", color: "#6b665e" }}>여기 없어요 · 직접 찾기</div>
                    </div>
                    <div style={{ flex: "1" }} />
                    <div style={{ display: "flex", gap: "10px", alignItems: "center", borderRadius: "18px", border: "1px solid #e4dfd3", background: "#fbfaf6", padding: "13px" }}>
                      <span style={{ display: "inline-flex" }}><MapPinIcon size={15} stroke="#b4552d" /></span>
                      <span style={{ flex: "1", fontSize: "11.5px", lineHeight: "18px", color: "#6b665e" }}>읽은 좌표는 가까운 가게를 찾는 데에만 쓰고, 기록에는 남기지 않습니다.</span>
                    </div>
                  </div>
                </>
              )}
              {" "}
              {isStep2 && (
                <>
                  <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", boxSizing: "border-box", padding: "59px 20px 44px", display: "flex", flexDirection: "column" }}>
                    <div style={{ borderRadius: "30px", background: "#fbfaf6", padding: "14px 14px 20px", boxShadow: "0 24px 48px -24px rgba(28,26,23,.35),0 2px 6px rgba(28,26,23,.05)" }}>
                      <div style={{ position: "relative" }}>
                        <img src="/img/bibimbap.jpg" alt="" style={{ width: "100%", height: "296px", borderRadius: "22px", objectFit: "cover", display: "block", background: "#ded8cb" }} />
                        {" "}
                        <span style={{ position: "absolute", left: "14px", top: "14px", borderRadius: "14px", background: "rgba(28,26,23,.55)", padding: "4px 10px", fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: "1px", color: "#fbfaf6" }}>12:41</span>
                        {" "}
                        <svg aria-label="방문 인증" width="52" height="52" viewBox="0 0 100 100" style={{ position: "absolute", right: "16px", bottom: "16px" }}>
                          <polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d" />
                          <path d="M30 52l14 14 27-30" stroke="#fbfaf6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </div>
                      {" "}
                      <div style={{ marginTop: "18px", textAlign: "center", fontFamily: "var(--dinary-font-serif)", fontSize: "22px", color: "#1c1a17" }}>방문이 인증되었습니다</div>
                      {" "}
                      <div style={{ marginTop: "7px", textAlign: "center", fontSize: "12px", color: "#6b665e" }}>한그릇 · 2026.10.22 12:41</div>
                      {" "}
                      <div style={{ marginTop: "12px", display: "flex", justifyContent: "center" }}>
                        <span style={{ display: "flex", gap: "6px", alignItems: "center", borderRadius: "14px", border: "1px solid #e0c3b1", background: "#f9f0e9", padding: "7px 12px" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#b4552d" stroke="#b4552d" strokeWidth="1.6" strokeLinejoin="round"><path d="M7 4.5h10v15l-5-3.6-5 3.6Z" /></svg>
                          <span style={{ fontSize: "11px", color: "#b4552d" }}>담아둔 지 12일 만에 다녀왔습니다</span>
                        </span>
                      </div>
                    </div>
                    <div style={{ flex: "1" }} />
                    <div style={{ borderRadius: "20px", background: "#1c1a17", padding: "17px 0", textAlign: "center", fontSize: "15px", fontWeight: "500", color: "#fbfaf6" }}>이어서 기록 쓰기</div>
                    <div style={{ padding: "14px", marginTop: "8px", textAlign: "center", fontSize: "13px", color: "#8a8377" }}>나중에 쓸게요</div>
                  </div>
                </>
              )}
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}
