// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import TabBar from "@/components/TabBar";
import type { DesktopVals } from "@/components/Landing";

export default function Recommend({ v }: { v: DesktopVals }) {
  return (
<>
<section id="recommend" aria-labelledby="rec-title" style={{ padding: "clamp(96px,10vw,140px) 0", borderTop: "1px solid #d8d3c8" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(56px,6vw,80px)", alignItems: "center" }}>
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#6b665e" }}><span>05</span><span style={{ width: "40px", height: "1px", background: "#b4552d" }}></span><span>WHAT TO EAT, NOW</span></div>
      <h2 id="rec-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>오늘 뭐 먹지?<br />나만을 위한 맞춤 추천.</h2>
      <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>지금 있는 곳과 시간, 그동안 남긴 기록에 담긴 입맛과 취향까지 살펴서, 지금 나에게 딱 맞는 곳을 골라 드려요.</p>
      <div role="tablist" aria-label="추천 방식" style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "6px" }}>
        {v.recModes.map((m, mIdx) => (<Fragment key={mIdx}>
          <button type="button" role="tab" aria-selected={m.active} onClick={m.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", display: "flex", gap: "18px", alignItems: "flex-start", padding: "18px 20px", borderRadius: "20px", background: m.bg, border: `1px solid ${m.border}`, transition: "all .3s" }}>
            <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: m.numColor, paddingTop: "4px" }}>0{m.n}</span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontFamily: "var(--site-serif)", fontSize: "20px", color: "#1c1a17" }}>{m.label}</span>
              <span style={{ fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>{m.body}</span>
            </span>
          </button>
        </Fragment>))}
      </div>
      {v.recHasAction && (<>
        <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
          <button type="button" onClick={v.recAction} style={{ all: "unset", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px", borderRadius: "999px", background: "#1c1a17", color: "#fbfaf6", padding: "14px 24px", fontSize: "14.5px", transition: "background .3s" }} className="hv-brick">{v.recActionLabel}</button>
        </div>
      </>)}
    </div>

    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", width: "min(520px,90%)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "#f7ece5", filter: "blur(30px)" }}></div>
      <div style={{ position: "relative", width: v.ph.w, height: v.ph.h }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.ph.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
          <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative", boxSizing: "border-box", padding: "58px 22px 0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "2.2px", color: "#8a8377" }}>RECOMMEND</span>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", height: "30px", padding: "0 12px", borderRadius: "15px", background: "#f7ece5", fontSize: "12px", color: "#b4552d" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4552d" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.3 7-11.3A7 7 0 005 9.7C5 14.7 12 21 12 21z M12 7.3a2.4 2.4 0 1 0 .01 0"></path></svg>을지로 · 화 12:10<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b4552d" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10l5 5 5-5"></path></svg></span>
            </div>
            <div style={{ marginTop: "14px", display: "flex", alignItems: "baseline", gap: "12px", whiteSpace: "nowrap" }}>
              {v.recModes.map((m, mIdx) => (<Fragment key={mIdx}>
                <span style={{ fontFamily: "var(--site-serif)", fontSize: m.titleSize, color: m.titleColor, transition: "all .3s" }}>{m.label}</span>
              </Fragment>))}
            </div>

            {v.recNow && (<>
              <div style={{ marginTop: "14px", display: "flex", gap: "7px" }}>
                <span style={{ height: "36px", padding: "0 17px", borderRadius: "18px", display: "flex", alignItems: "center", background: "#1c1a17", color: "#fbfaf6", fontSize: "13px" }}>필터</span>
                <span style={{ height: "36px", padding: "0 17px", boxSizing: "border-box", borderRadius: "18px", display: "flex", alignItems: "center", border: "1.5px solid #b4552d", color: "#b4552d", fontSize: "13px" }}>점심</span>
                <span style={{ height: "36px", padding: "0 17px", boxSizing: "border-box", borderRadius: "18px", display: "flex", alignItems: "center", border: "1px solid #e2ddd2", color: "#6b665e", fontSize: "13px" }}>저녁</span>
              </div>
              <div style={{ marginTop: "14px", borderRadius: "26px", border: "1.5px solid #b4552d", background: "#fbfaf6", overflow: "hidden" }}>
                <div style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid #e2ddd2" }}>
                  <img src="/map/rec-full.jpg" alt="" style={{ width: "100%", height: "auto", display: "block" }} loading="lazy" decoding="async" />
                  {v.recPins.map((q, qIdx) => (<Fragment key={qIdx}>
                    <span style={{ position: "absolute", left: q.x, top: q.y, transform: "translate(-50%,-50%)", width: q.size, height: q.size, boxSizing: "border-box", borderRadius: "50%", border: "1.5px solid #b4552d", background: q.bg, color: q.fg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "12px", boxShadow: "0 3px 8px rgba(28,26,23,.15)", transition: "all .3s" }}>{q.n}</span>
                  </Fragment>))}
                  <span style={{ position: "absolute", left: v.pick.tx, top: v.pick.ty, transform: "translate(-50%,-100%)", whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "12px", background: "#1c1a17", color: "#fbfaf6", fontSize: "12px", fontFamily: "var(--dinary-font-sans-bd)", fontWeight: "700", transition: "all .3s" }}>{v.pick.name}</span>
                  
                  
                </div>
                <div style={{ padding: "16px 18px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ flex: "none", width: "22px", height: "22px", borderRadius: "11px", background: "#b4552d", color: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "11px" }}>{v.pick.idx}</span>
                    <span style={{ flex: "1", minWidth: "0", fontFamily: "var(--site-serif)", fontSize: "22px", color: "#1c1a17", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{v.pick.name}</span>
                    <span style={{ flex: "none", height: "36px", padding: "0 15px", borderRadius: "18px", background: "#b4552d", color: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "13px" }}>여기로 갈게요</span>
                  </div>
                  <div style={{ marginTop: "8px", fontSize: "12.5px", color: "#6b665e" }}>{v.pick.meta}</div>
                  <div style={{ marginTop: "8px", display: "flex", gap: "16px", fontSize: "12.5px" }}><span style={{ color: "#6b665e" }}>네이버지도에서 보기</span><span style={{ color: "#b4552d" }}>+ 위시에 담기</span></div>
                  <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {v.pick.whys.map((y, yIdx) => (<Fragment key={yIdx}><div style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#1c1a17" }}><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: "#b4552d", paddingTop: "1px" }}>{y.n}</span>{y.t}</div></Fragment>))}
                  </div>
                  <div style={{ marginTop: "14px", display: "flex", justifyContent: "center", gap: "6px" }}>
                    {v.pickDots.map((d, dIdx) => (<Fragment key={dIdx}><span style={{ width: d.w, height: "6px", borderRadius: "3px", background: d.c, transition: "all .3s" }}></span></Fragment>))}
                  </div>
                </div>
              </div>
            </>)}

            {v.recBrowse && (<>
              <div style={{ marginTop: "18px", borderRadius: "22px", background: "#1c1a17", padding: "18px", color: "#fbfaf6" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}><span style={{ color: "#e08a63" }}>지금 시작하는 코스</span><span style={{ fontFamily: "var(--dinary-font-mono)", color: "#a29a8c" }}>1 / 3</span></div>
                <div style={{ marginTop: "6px", fontFamily: "var(--site-serif)", fontSize: "19px" }}>을지로 점심, 그다음 커피</div>
                <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ flex: "1" }}><div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#a29a8c" }}>한식</div><div style={{ marginTop: "3px", fontSize: "13.5px" }}>한그릇</div></div>
                  <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#e08a63" }}>320m →</span>
                  <div style={{ flex: "1" }}><div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#a29a8c" }}>커피</div><div style={{ marginTop: "3px", fontSize: "13.5px" }}>골목커피</div></div>
                </div>
                <div style={{ marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}><span style={{ fontSize: "11.5px", color: "#a29a8c" }}>이 순서로 인증한 사람 37명</span><span style={{ height: "32px", padding: "0 13px", borderRadius: "16px", background: "#fbfaf6", color: "#1c1a17", fontSize: "12px", display: "flex", alignItems: "center" }}>코스 보기</span></div>
              </div>
              <div style={{ marginTop: "22px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "16px" }}>투어</span><span style={{ fontSize: "11px", color: "#8a8377" }}>전체 4</span></div>
              <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <div style={{ flex: "none", width: "208px", boxSizing: "border-box", borderRadius: "20px", border: "1.5px solid #b4552d", background: "#fbfaf6", padding: "15px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}><span style={{ color: "#b4552d" }}>진행 중</span><span style={{ fontFamily: "var(--dinary-font-mono)", color: "#b4552d" }}>2/5</span></div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--site-serif)", fontSize: "15.5px" }}>을지로 노포 다섯 집</div>
                  <div style={{ marginTop: "4px", fontSize: "11px", color: "#8a8377" }}>후보 8곳 중 2곳 인증</div>
                  <div style={{ marginTop: "10px", display: "flex", gap: "6px" }}>
                    <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#b4552d" }}></span><span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#b4552d" }}></span><span style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1.5px dashed #cdc6b8", boxSizing: "border-box" }}></span><span style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1.5px dashed #cdc6b8", boxSizing: "border-box" }}></span><span style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1.5px dashed #cdc6b8", boxSizing: "border-box" }}></span>
                  </div>
                  <div style={{ marginTop: "10px", fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#6b665e" }}>완주 1,204명</div>
                </div>
                <div style={{ flex: "none", width: "208px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "15px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}><span style={{ color: "#4f6b7a" }}>시즌 · 12월 31일까지</span><span style={{ fontFamily: "var(--dinary-font-mono)", color: "#b4552d" }}>0/3</span></div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--site-serif)", fontSize: "15.5px" }}>겨울 국밥 세 그릇</div>
                </div>
              </div>
              <div style={{ marginTop: "22px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "16px" }}>다시 가는 사람이 많은 곳</span><span style={{ fontSize: "11px", color: "#8a8377" }}>재방문율순</span></div>
              <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {v.revisits.map((r, rIdx) => (<Fragment key={rIdx}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", borderRadius: "18px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "13px 15px" }}>
                    <div style={{ flex: "1", minWidth: "0" }}><div style={{ fontFamily: "var(--site-serif)", fontSize: "15px" }}>{r.name}</div><div style={{ marginTop: "2px", fontSize: "11px", color: "#8a8377" }}>{r.meta}</div></div>
                    <div style={{ textAlign: "right" }}><div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "19px", color: "#b4552d" }}>{r.pct}%</div><div style={{ fontSize: "10px", color: "#8a8377" }}>재방문</div></div>
                  </div>
                </Fragment>))}
              </div>
            </>)}

            {v.recGames && (<>
              <div style={{ marginTop: "6px", borderRadius: "24px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "16px 0 14px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src="/img/game-race.jpg" alt="구슬 경주가 진행 중인 게임 화면" style={{ width: "232px", height: "auto", display: "block", borderRadius: "30px", boxShadow: "0 18px 30px -18px rgba(28,26,23,.6)" }} loading="lazy" decoding="async" />
                <div style={{ marginTop: "14px", minHeight: "56px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", textAlign: "center" }}>
                  <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: "2.5px", color: "#b4552d" }}>{v.gameEyebrow}</span>
                  <span style={{ fontSize: "21px", fontFamily: "var(--dinary-font-sans-bd)", fontWeight: "700", color: "#1c1a17" }}>{v.gameResult}</span>
                </div>
              </div>
            </>)}
            <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active={"recommend"} /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}
