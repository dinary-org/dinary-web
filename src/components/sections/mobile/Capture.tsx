// Claude Design 「Dinary Website - Mobile」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { FlashIcon, FlipIcon, MapPinIcon } from "@/components/icons";
import type { MobileVals } from "@/components/Landing";

export default function Capture({ v }: { v: MobileVals }) {
  return (
<>
<section id="capture" aria-labelledby="capture-title" onTouchStart={v.swipeStart} onTouchEnd={v.swipeEnd} style={{ padding: "40px 0 56px" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#1c1a17" }}><span>01</span></div>
    <h2 id="capture-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "32px", lineHeight: "1.22", letterSpacing: "-.03em" }}>셔터 한 번이면,<br />한 끼가 일기가 됩니다.</h2>

    <div style={{ marginTop: "36px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "28px", alignItems: "center" }}>
      <div style={{ order: "2" }}>
        
        <div style={{ marginBottom: "22px", display: "flex", justifyContent: "center", gap: "8px" }}>
            <button type="button" onClick={v.prevStep} aria-label="이전 단계" style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #d8d3c8", display: "flex", alignItems: "center", justifyContent: "center", color: "#1c1a17" }} className="hv-ring">←</button>
            <button type="button" onClick={v.nextStep} aria-label="다음 단계" style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#1c1a17", display: "flex", alignItems: "center", justifyContent: "center", color: "#fbfaf6" }} className="hv-bg-brick">→</button>
          </div>
        <div aria-live="polite" style={{ minHeight: "150px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}><span style={{ flex: "none", fontFamily: "var(--dinary-font-mono)", fontSize: "26px", lineHeight: "1", color: "#b4552d", letterSpacing: "-.04em" }}>{v.step.no}</span><h3 style={{ margin: "0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "21px", lineHeight: "1.4" }}>{v.step.title}</h3></div>
          <p style={{ margin: "12px 0 0", maxWidth: "28em", fontSize: "14.5px", lineHeight: "1.85", color: "#6b665e" }}>{v.step.body}</p>
          {v.step.hasNote && (<><p style={{ margin: "18px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#b4552d" }}><span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b4552d", flex: "none" }}></span>{v.step.note}<svg aria-label="방문 인증 마크" width="17" height="17" viewBox="0 0 100 100" style={{ flex: "none" }}><polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d"></polygon><path d="M30 52l14 14 27-30" stroke="#fbfaf6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg></p></>)}
          
        </div>
      </div>
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "min(520px,90%)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "#f7ece5", filter: "blur(30px)" }}></div>
        <div style={{ position: "relative", width: v.ph.w, height: v.ph.h }}>
          <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.ph.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
            <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative", containerType: "inline-size" }}>
              {v.isStep3 && (<><div style={{ position: "absolute", inset: "0", background: "#f6f3ec", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "300px" }}><img src="/img/sushi-plate.jpg" alt="하늘초밥 모둠 초밥" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" />
                  <div style={{ position: "absolute", left: "16px", top: "44px" }}><div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)", border: "none", background: "rgba(251,250,246,.92)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg></div></div>
                  <div style={{ position: "absolute", right: "16px", top: "44px", display: "flex", gap: "10px" }}><div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)", border: "none", background: "rgba(251,250,246,.92)" }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path></svg></div><div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)", border: "none", background: "rgba(251,250,246,.92)" }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V4M8 8l4-4 4 4M5 13v6h14v-6"></path></svg></div></div>
                </div>
                <div style={{ display: "flex", gap: "8px", padding: "10px 16px", borderBottom: "1px solid #e2ddd2" }}>
                  <div style={{ position: "relative", width: "54px", height: "54px", boxSizing: "border-box", borderRadius: "14px", border: "2px solid #b4552d", overflow: "hidden" }}><img src="/img/sushi-plate.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" /><span style={{ position: "absolute", left: "0", top: "0", background: "#b4552d", color: "#fbfaf6", fontSize: "8.5px", padding: "1px 5px", borderRadius: "0 0 7px 0" }}>대표</span></div>
                  
                  <div style={{ width: "54px", height: "54px", boxSizing: "border-box", borderRadius: "14px", border: "1.5px dashed #d8d3c8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#6b665e" }}>+ 앨범</div>
                </div>
                <div style={{ padding: "18px 22px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "27px", color: "#1c1a17" }}>하늘초밥</span><svg width="24" height="24" viewBox="0 0 100 100"><polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d"></polygon><path d="M30 52l14 14 27-30" stroke="#fbfaf6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg></div>
                  <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#8a8377" }}>일식 · 서울 서대문구</div>
                  <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ display: "flex", gap: "1px", fontSize: "14px", lineHeight: "1", color: "#b4552d" }}><span>★</span><span>★</span><span>★</span><span>★</span><span style={{ background: "linear-gradient(90deg,#b4552d 50%,#d8d3c8 50%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>★</span></span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: "#6b665e" }}>4.5</span><span style={{ width: "1px", height: "12px", background: "#d8d3c8" }}></span><span aria-label="체감 가격 3단계" style={{ display: "flex", gap: "2px" }}><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "1" }} loading="lazy" decoding="async" /><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "1" }} loading="lazy" decoding="async" /><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "1" }} loading="lazy" decoding="async" /><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "0.3" }} loading="lazy" decoding="async" /><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "0.3" }} loading="lazy" decoding="async" /></span></div>
                  <div style={{ margin: "16px 0 14px", height: "1px", background: "#e2ddd2" }}></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div><div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>방문</div><div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", fontFamily: "var(--dinary-font-mono)", display: "flex", alignItems: "center", gap: "6px" }}>2026.10.25 14:57 <svg width="15" height="15" viewBox="0 0 100 100"><polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d"></polygon><path d="M30 52l14 14 27-30" stroke="#fbfaf6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg></div></div>
                    <div><div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>메뉴</div><div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", display: "flex", alignItems: "center", gap: "6px" }}>하늘초밥</div></div>
                    <div><div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>메모</div><div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", display: "flex", alignItems: "center", gap: "6px" }}>믿고 가는 이대 초밥 맛집, 데이트로 오기도 좋고 혼밥도 좋다.</div></div>
                    <div><div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>주소</div><div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", display: "flex", alignItems: "center", gap: "6px" }}>서울 서대문구 이화여대2길 14</div></div>
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", gap: "6px" }}><span style={{ padding: "5px 12px", borderRadius: "14px", border: "1px solid #d8d3c8", fontSize: "12px", color: "#6b665e" }}>데이트</span><span style={{ padding: "5px 12px", borderRadius: "14px", border: "1px solid #d8d3c8", fontSize: "12px", color: "#6b665e" }}>혼밥</span><span style={{ padding: "5px 12px", borderRadius: "14px", border: "1px solid #d8d3c8", fontSize: "12px", color: "#6b665e" }}>술자리</span></div>
                  
                </div>
              </div></>)}
              {v.isStep0 && (<>
                <div style={{ position: "absolute", inset: "0", background: "#171614", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: "14px", right: "14px", top: "128px", height: "430px", borderRadius: "26px", overflow: "hidden", background: "#2b2824" }}><img src="/img/sushi-plate.jpg" alt="카메라 화면에 담긴 모둠 초밥" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" /></div>
                  <div style={{ position: "absolute", left: "16px", top: "55px", width: "44px", height: "44px", borderRadius: "22px", background: "rgba(251,250,246,.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fbfaf6", fontSize: "16px" }}>✕</div>
                  <div style={{ position: "absolute", right: "16px", top: "55px", width: "44px", height: "44px", borderRadius: "22px", background: "rgba(251,250,246,.14)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ display: "inline-flex" }}><FlashIcon /></span><span style={{ position: "absolute", right: "9px", bottom: "7px", fontFamily: "var(--dinary-font-mono)", fontSize: "9px", color: "#fbfaf6" }}>×</span></div>
                  <div style={{ position: "absolute", left: "0", right: "0", top: "61px", display: "flex", flexDirection: "column", alignItems: "center", gap: "7px" }}>
                    <span style={{ fontFamily: "var(--site-serif)", fontSize: "18px", color: "#fbfaf6" }}>지금 여기</span>
                    <span style={{ borderRadius: "14px", background: "rgba(251,250,246,.12)", padding: "5px 12px", fontSize: "11px", color: "rgba(251,250,246,.8)" }}>위치는 촬영 순간에 읽습니다</span>
                  </div>
                  <div style={{ position: "absolute", left: "0", right: "0", top: "570px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "50px", height: "50px", borderRadius: "25px", background: "rgba(251,250,246,.26)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#fbfaf6" }}>1×</span>
                    <span style={{ width: "44px", height: "44px", borderRadius: "22px", background: "rgba(251,250,246,.14)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#fbfaf6" }}>2×</span>
                  </div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "138px", display: "flex", justifyContent: "center", alignItems: "center", gap: "34px" }}>
                    <span style={{ width: "46px", height: "46px" }}></span>
                    <span style={{ width: "78px", height: "78px", borderRadius: "39px", boxSizing: "border-box", border: "3px solid rgba(251,250,246,.85)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: "62px", height: "62px", borderRadius: "31px", background: "#fbfaf6" }}></span></span>
                    <span style={{ width: "46px", height: "46px", borderRadius: "23px", background: "rgba(251,250,246,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ display: "inline-flex" }}><FlipIcon stroke="rgba(251,250,246,.65)" /></span></span>
                  </div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "90px", textAlign: "center", fontSize: "11.5px", color: "rgba(251,250,246,.6)" }}>갤러리에서 고른 사진은 인증되지 않아요</div>
                </div>
              </>)}
              {v.isStep1 && (<>
                <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", boxSizing: "border-box", padding: "55px 20px 44px", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <img src="/img/sushi-plate.jpg" alt="" style={{ width: "74px", height: "74px", borderRadius: "18px", objectFit: "cover", flex: "none" }} loading="lazy" decoding="async" />
                    <div style={{ flex: "1", minWidth: "0" }}>
                      <div style={{ fontFamily: "var(--site-serif)", fontSize: "20px", lineHeight: "27px", color: "#1c1a17" }}>여기 어디예요?</div>
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
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="#b4552d" stroke="#b4552d" strokeWidth="1.6" strokeLinejoin="round"><path d="M7 4.5h10v15l-5-3.6-5 3.6Z"></path></svg><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", color: "#b4552d" }}>위시리스트에 담아둔 식당</span></div>
                        <div style={{ fontFamily: "var(--site-serif)", fontSize: "16px", color: "#1c1a17" }}>하늘초밥</div>
                        <div style={{ marginTop: "3px", fontSize: "11.5px", color: "#8a8377" }}>일식 · 서울 서대문구 이화여대2길</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "62px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #ded8cb", background: "#fbfaf6", padding: "13px 15px" }}>
                      <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "17px", background: "#f1ede4", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", color: "#6b665e" }}>41m</span>
                      <div style={{ flex: "1", minWidth: "0" }}><div style={{ fontFamily: "var(--site-serif)", fontSize: "16px", color: "#1c1a17" }}>빨간냄비</div><div style={{ marginTop: "3px", fontSize: "11.5px", color: "#8a8377" }}>분식 · 서울 서대문구 대현동</div></div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "62px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #ded8cb", padding: "13px 15px", opacity: ".5" }}>
                      <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "17px", background: "#f1ede4", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", color: "#6b665e" }}>72m</span>
                      <div style={{ flex: "1", minWidth: "0" }}><div style={{ fontFamily: "var(--site-serif)", fontSize: "16px", color: "#1c1a17" }}>숯불한판</div><div style={{ marginTop: "3px", fontSize: "11.5px", color: "#8a8377" }}>일식 · 서울 서대문구 이화여대2길</div><div style={{ marginTop: "3px", fontSize: "10.5px", color: "#a29a8c" }}>너무 멀어 고를 수 없습니다</div></div>
                    </div>
                    <div style={{ marginTop: "0", minHeight: "48px", borderRadius: "20px", border: "1px dashed #d8d3c8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12.5px", color: "#6b665e" }}>여기 없어요 · 직접 찾기</div>
                  </div>
                  <div style={{ flex: "1" }}></div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", borderRadius: "18px", border: "1px solid #e4dfd3", background: "#fbfaf6", padding: "13px" }}>
                    <span style={{ display: "inline-flex" }}><MapPinIcon stroke="#b4552d" size={15} /></span>
                    <span style={{ flex: "1", fontSize: "11.5px", lineHeight: "18px", color: "#6b665e" }}>읽은 좌표는 가까운 가게를 찾는 데에만 쓰고, 기록에는 남기지 않습니다.</span>
                  </div>
                </div>
              </>)}
              {v.isStep2 && (<>
                <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", boxSizing: "border-box", padding: "59px 20px 44px", display: "flex", flexDirection: "column" }}>
                  <div style={{ borderRadius: "30px", background: "#fbfaf6", padding: "14px 14px 20px", boxShadow: "0 24px 48px -24px rgba(28,26,23,.35),0 2px 6px rgba(28,26,23,.05)" }}>
                    <div style={{ position: "relative" }}>
                      <img src="/img/sushi-plate.jpg" alt="" style={{ width: "100%", height: "296px", borderRadius: "22px", objectFit: "cover", display: "block", background: "#ded8cb" }} loading="lazy" decoding="async" />
                      <span style={{ position: "absolute", left: "14px", top: "14px", borderRadius: "14px", background: "rgba(28,26,23,.55)", padding: "4px 10px", fontFamily: "var(--dinary-font-mono)", fontSize: "9.5px", letterSpacing: "1px", color: "#fbfaf6" }}>14:57</span>
                      <svg aria-label="방문 인증" width="52" height="52" viewBox="0 0 100 100" style={{ position: "absolute", right: "16px", bottom: "16px" }}><polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d"></polygon><path d="M30 52l14 14 27-30" stroke="#fbfaf6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg>
                      
                    </div>
                    <div style={{ marginTop: "18px", textAlign: "center", fontFamily: "var(--site-serif)", fontSize: "22px", color: "#1c1a17" }}>방문이 인증되었습니다</div>
                    <div style={{ marginTop: "7px", textAlign: "center", fontSize: "12px", color: "#6b665e" }}>하늘초밥 · 2026.10.25 14:57</div>
                    <div style={{ marginTop: "12px", display: "flex", justifyContent: "center" }}><span style={{ display: "flex", gap: "6px", alignItems: "center", borderRadius: "14px", border: "1px solid #e0c3b1", background: "#f9f0e9", padding: "7px 12px" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="#b4552d" stroke="#b4552d" strokeWidth="1.6" strokeLinejoin="round"><path d="M7 4.5h10v15l-5-3.6-5 3.6Z"></path></svg><span style={{ fontSize: "11px", color: "#b4552d" }}>담아둔 지 12일 만에 다녀왔습니다</span></span></div>
                  </div>
                  <div style={{ flex: "1" }}></div>
                  <div style={{ borderRadius: "20px", background: "#1c1a17", padding: "17px 0", textAlign: "center", fontSize: "15px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", color: "#fbfaf6" }}>이어서 기록 쓰기</div>
                  <div style={{ padding: "14px", marginTop: "8px", textAlign: "center", fontSize: "13px", color: "#8a8377" }}>나중에 쓸게요</div>
                </div>
              </>)}
              
            {v.isStep0 && (<><div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12.05cqw", background: "transparent", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7.4cqw 0 9.5cqw", boxSizing: "border-box", zIndex: "40" }}><span style={{ fontFamily: "-apple-system,'SF Pro Text',var(--dinary-font-sans-bd)", fontWeight: "600", fontSize: "4.3cqw", letterSpacing: "-.02em", color: "#fbfaf6", lineHeight: "1" }}>9:41</span><svg viewBox="0 0 70 13" style={{ width: "17.9cqw", height: "auto", display: "block" }} fill="#fbfaf6"><rect x="0" y="8" width="3" height="4" rx="1"></rect><rect x="4.8" y="5.8" width="3" height="6.2" rx="1"></rect><rect x="9.6" y="3.4" width="3" height="8.6" rx="1"></rect><rect x="14.4" y="1" width="3" height="11" rx="1"></rect><path d="M30.5 3.2a9.6 9.6 0 0 1 12.6 0l1.2-1.3a11.4 11.4 0 0 0-15 0Zm2.2 2.4a6.4 6.4 0 0 1 8.2 0l1.2-1.3a8.2 8.2 0 0 0-10.6 0Zm2.2 2.4a3.2 3.2 0 0 1 3.8 0l1.2-1.3a5 5 0 0 0-6.2 0Zm1.9 3.6 1.7-1.9a1.8 1.8 0 0 0-3.4 0Z"></path><rect x="47.5" y="0.5" width="19" height="11" rx="3.2" fill="none" stroke="#fbfaf6" strokeOpacity=".4"></rect><rect x="49" y="2" width="16" height="8" rx="2"></rect><path d="M68 4v4a2 2 0 0 0 0-4Z" fillOpacity=".45"></path></svg></div><div style={{ position: "absolute", left: "50%", top: "2.6cqw", width: "31cqw", height: "8.6cqw", transform: "translateX(-50%)", borderRadius: "5cqw", background: "#000", zIndex: "41" }}></div><div style={{ position: "absolute", left: "50%", bottom: "2.3cqw", width: "35cqw", height: "1.3cqw", transform: "translateX(-50%)", borderRadius: "1cqw", background: "#fbfaf6", zIndex: "41" }}></div></>)}{v.notStep0 && (<><div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12.05cqw", background: "transparent", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7.4cqw 0 9.5cqw", boxSizing: "border-box", zIndex: "40" }}><span style={{ fontFamily: "-apple-system,'SF Pro Text',var(--dinary-font-sans-bd)", fontWeight: "600", fontSize: "4.3cqw", letterSpacing: "-.02em", color: "#1c1a17", lineHeight: "1" }}>9:41</span><svg viewBox="0 0 70 13" style={{ width: "17.9cqw", height: "auto", display: "block" }} fill="#1c1a17"><rect x="0" y="8" width="3" height="4" rx="1"></rect><rect x="4.8" y="5.8" width="3" height="6.2" rx="1"></rect><rect x="9.6" y="3.4" width="3" height="8.6" rx="1"></rect><rect x="14.4" y="1" width="3" height="11" rx="1"></rect><path d="M30.5 3.2a9.6 9.6 0 0 1 12.6 0l1.2-1.3a11.4 11.4 0 0 0-15 0Zm2.2 2.4a6.4 6.4 0 0 1 8.2 0l1.2-1.3a8.2 8.2 0 0 0-10.6 0Zm2.2 2.4a3.2 3.2 0 0 1 3.8 0l1.2-1.3a5 5 0 0 0-6.2 0Zm1.9 3.6 1.7-1.9a1.8 1.8 0 0 0-3.4 0Z"></path><rect x="47.5" y="0.5" width="19" height="11" rx="3.2" fill="none" stroke="#1c1a17" strokeOpacity=".4"></rect><rect x="49" y="2" width="16" height="8" rx="2"></rect><path d="M68 4v4a2 2 0 0 0 0-4Z" fillOpacity=".45"></path></svg></div><div style={{ position: "absolute", left: "50%", top: "2.6cqw", width: "31cqw", height: "8.6cqw", transform: "translateX(-50%)", borderRadius: "5cqw", background: "#000", zIndex: "41" }}></div><div style={{ position: "absolute", left: "50%", bottom: "2.3cqw", width: "35cqw", height: "1.3cqw", transform: "translateX(-50%)", borderRadius: "1cqw", background: "#1c1a17", zIndex: "41" }}></div></>)}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}
