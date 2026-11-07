// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import TabBar from "@/components/TabBar";
import type { DesktopVals } from "@/components/Landing";

export default function Together({ v }: { v: DesktopVals }) {
  return (
<>
<section id="together" aria-labelledby="together-title" style={{ position: "relative", overflow: "hidden", background: "#f5f6f8", padding: "clamp(96px,10vw,140px) 0" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
    <div style={{ maxWidth: "760px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#1c1a17" }}><span>07</span></div>
      <h2 id="together-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>둘이 먹은 날들은,<br />둘이 함께 기억해요.</h2>
      <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>연인과 함께 쓰는 기록장을 열 수 있어요. 처음 데이트한 날의 떡볶이, 싸우고 화해한 날의 국밥. 둘이 앉았던 식탁이 하나씩 쌓여, 우리만 아는 지도가 돼요.</p>
    </div>
    <div style={{ marginTop: "clamp(56px,6vw,96px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "48px", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
        <div role="tablist" aria-label="연인 화면" style={{ display: "inline-flex", padding: "4px", borderRadius: "999px", background: "#fbfaf6", border: "1px solid #ecd2cd" }}>
          {v.coupleTabs.map((t, tIdx) => (<Fragment key={tIdx}>
            <button type="button" role="tab" aria-selected={t.active} onClick={t.pick} style={{ all: "unset", cursor: "pointer", padding: "10px 20px", borderRadius: "999px", fontSize: "14px", background: t.bg, color: t.fg, transition: "all .3s" }}>{t.label}</button>
          </Fragment>))}
        </div>
        <div style={{ position: "relative", width: v.ph.w, height: v.ph.h }}>
          <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.ph.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
            <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative", containerType: "inline-size" }}><div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12.05cqw", background: "#f6f3ec", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7.4cqw 0 9.5cqw", boxSizing: "border-box", zIndex: "40" }}><span style={{ fontFamily: "-apple-system,'SF Pro Text',var(--dinary-font-sans-bd)", fontWeight: "600", fontSize: "4.3cqw", letterSpacing: "-.02em", color: "#1c1a17", lineHeight: "1" }}>9:41</span><svg viewBox="0 0 70 13" style={{ width: "17.9cqw", height: "auto", display: "block" }} fill="#1c1a17"><rect x="0" y="8" width="3" height="4" rx="1"></rect><rect x="4.8" y="5.8" width="3" height="6.2" rx="1"></rect><rect x="9.6" y="3.4" width="3" height="8.6" rx="1"></rect><rect x="14.4" y="1" width="3" height="11" rx="1"></rect><path d="M30.5 3.2a9.6 9.6 0 0 1 12.6 0l1.2-1.3a11.4 11.4 0 0 0-15 0Zm2.2 2.4a6.4 6.4 0 0 1 8.2 0l1.2-1.3a8.2 8.2 0 0 0-10.6 0Zm2.2 2.4a3.2 3.2 0 0 1 3.8 0l1.2-1.3a5 5 0 0 0-6.2 0Zm1.9 3.6 1.7-1.9a1.8 1.8 0 0 0-3.4 0Z"></path><rect x="47.5" y="0.5" width="19" height="11" rx="3.2" fill="none" stroke="#1c1a17" strokeOpacity=".4"></rect><rect x="49" y="2" width="16" height="8" rx="2"></rect><path d="M68 4v4a2 2 0 0 0 0-4Z" fillOpacity=".45"></path></svg></div><div style={{ position: "absolute", left: "50%", top: "2.6cqw", width: "31cqw", height: "8.6cqw", transform: "translateX(-50%)", borderRadius: "5cqw", background: "#000", zIndex: "41" }}></div><div style={{ position: "absolute", left: "50%", bottom: "2.3cqw", width: "35cqw", height: "1.3cqw", transform: "translateX(-50%)", borderRadius: "1cqw", background: "#1c1a17", zIndex: "41" }}></div>
              {v.coupleHome && (<><div style={{ position: "absolute", inset: "0", boxSizing: "border-box", padding: "61px 20px 0", background: "#f6f3ec" }}>
                <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "3.2px", color: "#8a8377" }}>COUPLE</div>
                <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ display: "flex", flex: "none" }}><span style={{ width: "52px", height: "52px", borderRadius: "26px", background: "#c95b63", color: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "21px", fontFamily: "var(--dinary-font-sans-bd)", fontWeight: "700" }}>보</span><span style={{ marginLeft: "-12px", width: "52px", height: "52px", boxSizing: "border-box", borderRadius: "26px", border: "2px solid #f6f3ec", background: "#eaa7ab", color: "#6b2f35", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "21px", fontFamily: "var(--dinary-font-sans-bd)", fontWeight: "700" }}>모</span></div>
                  <div style={{ minWidth: "0" }}>
                    <div style={{ fontFamily: "var(--site-serif)", fontSize: "22px", color: "#1c1a17" }}>보리 · 모과</div>
                    <span style={{ marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "12px", background: "#fbeeee", fontSize: "11px", color: "#6b2f35" }}><span style={{ width: "6px", height: "6px", borderRadius: "3px", background: "#c95b63" }}></span>연인 기록 함께 쓰는 중</span>
                    <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "5px", fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: "#1c1a17" }}>2025.05.14~ <svg width="13" height="13" viewBox="0 0 24 24"><path d="M12 7.2C10.6 4.6 6.2 4.4 4.3 7.2 2.6 9.8 3.6 13.4 6.4 16.2 8.4 18.2 12 21 12 21Z" fill="#c95b63"></path><path d="M12 7.2C13.4 4.6 17.8 4.4 19.7 7.2 21.4 9.8 20.4 13.4 17.6 16.2 15.6 18.2 12 21 12 21Z" fill="#c95b63" stroke="none" strokeWidth="1.3" strokeDasharray="0"></path></svg><span style={{ color: "#c95b63" }}>D+536일</span></div>
                  </div>
                </div>
                <div style={{ marginTop: "16px", borderRadius: "22px", border: "1px solid #f0d5d4", background: "#fbfaf6", padding: "16px 18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "16px" }}>우리 도장</span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#8a8377" }}>{v.couple.n} / 10</span></div>
                  <div style={{ margin: "14px auto 0", maxWidth: "280px", display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "10px" }}>
                    {v.couple.slots.map((s, sIdx) => (<Fragment key={sIdx}><span style={{ aspectRatio: "1", borderRadius: "50%", boxSizing: "border-box", border: s.border, display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" style={{ width: "112%", height: "112%", opacity: s.op }}><path d="M12 7.2C10.6 4.6 6.2 4.4 4.3 7.2 2.6 9.8 3.6 13.4 6.4 16.2 8.4 18.2 12 21 12 21Z" fill={s.l}></path><path d="M12 7.2C13.4 4.6 17.8 4.4 19.7 7.2 21.4 9.8 20.4 13.4 17.6 16.2 15.6 18.2 12 21 12 21Z" fill={s.r} stroke={s.rs} strokeWidth="1.3" strokeDasharray="2 1.6"></path></svg></span></Fragment>))}
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", justifyContent: "center", gap: "18px", fontSize: "11.5px", color: "#6b665e" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24"><path d="M12 7.2C10.6 4.6 6.2 4.4 4.3 7.2 2.6 9.8 3.6 13.4 6.4 16.2 8.4 18.2 12 21 12 21Z" fill="#c95b63"></path><path d="M12 7.2C13.4 4.6 17.8 4.4 19.7 7.2 21.4 9.8 20.4 13.4 17.6 16.2 15.6 18.2 12 21 12 21Z" fill="#eaa7ab" stroke="none" strokeWidth="1.3" strokeDasharray="0"></path></svg>둘 다 씀</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24"><path d="M12 7.2C10.6 4.6 6.2 4.4 4.3 7.2 2.6 9.8 3.6 13.4 6.4 16.2 8.4 18.2 12 21 12 21Z" fill="#c95b63"></path><path d="M12 7.2C13.4 4.6 17.8 4.4 19.7 7.2 21.4 9.8 20.4 13.4 17.6 16.2 15.6 18.2 12 21 12 21Z" fill="none" stroke="#c95b63" strokeWidth="1.3" strokeDasharray="2 1.6"></path></svg>한 줄 기다리는 중</span>
                  </div>
                </div>
                <div style={{ marginTop: "12px", borderRadius: "22px", border: "1px solid #f0d5d4", background: "#fbfaf6", padding: "16px 18px" }}>
                  <div style={{ fontFamily: "var(--site-serif)", fontSize: "16px" }}>도장판을 다 채우기까지 <span style={{ color: "#c95b63" }}>{v.couple.left}</span>칸</div>
                  <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#6b665e" }}><span>0</span><span style={{ flex: "1", height: "5px", borderRadius: "3px", background: "#fbeeee", overflow: "hidden" }}><span style={{ display: "block", height: "100%", width: v.couple.pct, background: "linear-gradient(90deg,#c95b63,#eaa7ab)" }}></span></span><span>10</span></div>
                  <div style={{ marginTop: "10px", fontSize: "12px", color: "#6b665e" }}>반쪽 하트는 상대가 한 줄을 쓰면 채워져요</div>
                </div>
                <div style={{ marginTop: "12px", borderRadius: "22px", border: "1px solid #f0d5d4", background: "#fbfaf6", padding: "16px 18px" }}>
                  <div style={{ fontSize: "12px", letterSpacing: "1px", color: "#6b665e" }}>만난 지</div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--site-serif)", fontSize: "42px", lineHeight: "1", color: "#1c1a17" }}>536<span style={{ fontSize: "20px" }}>일</span></div>
                  <div style={{ marginTop: "8px", fontFamily: "var(--dinary-font-mono)", fontSize: "11.5px", color: "#6b665e" }}>2025.05.14 (수)부터</div>
                  <span style={{ marginTop: "10px", display: "inline-flex", padding: "6px 12px", borderRadius: "14px", background: "#fbeeee", fontSize: "12px", color: "#c95b63" }}>다음 600일 · 64일 ›</span>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="couple" couple /></div></>)}
              {v.coupleAnniv && (<><div style={{ position: "absolute", inset: "0", boxSizing: "border-box", padding: "51px 20px 0", background: "#f6f3ec" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "40px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "0 16px 0 12px", fontSize: "13.5px", color: "#1c1a17" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7"></path></svg>캘린더</div>
                <div style={{ marginTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "27px", color: "#1c1a17" }}>우리의 기념일</span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "16px", color: "#c95b63" }}>D+536</span></div>
                <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#8a8377" }}>2025.05.14부터</div>
                <div style={{ marginTop: "16px", borderRadius: "24px", background: "#1c1a17", padding: "18px 18px 16px", color: "#fbfaf6" }}>
                  <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: "1.5px", color: "#cdc6b8" }}>다음 · 64일 남음</div>
                  <div style={{ marginTop: "8px", display: "flex", alignItems: "baseline", gap: "8px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "22px" }}>600일</span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "14px" }}>· 2027.01.03 (일)</span></div>
                  <span style={{ marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "6px", height: "34px", padding: "0 14px", borderRadius: "17px", background: "#fbfaf6", color: "#1c1a17", fontSize: "12.5px" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="#c95b63"><path d="M6 3h12v18l-6-4.3L6 21Z"></path></svg>갈 곳 담기</span>
                </div>
                <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {v.anniv.map((a, aIdx) => (<Fragment key={aIdx}>
                    <div style={{ display: "grid", gridTemplateColumns: "62px minmax(0,1fr)", gap: "10px", alignItems: "start" }}>
                      <div style={{ paddingTop: "8px" }}><div style={{ fontFamily: "var(--site-serif)", fontSize: "15px", color: a.labelC }}>{a.label}</div><div style={{ marginTop: "2px", fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#8a8377" }}>{a.date}</div></div>
                      <div>
                        {a.has && (<><div style={{ display: "flex", alignItems: "center", gap: "10px", borderRadius: "18px", border: "1px solid #f0d5d4", background: "#fbfaf6", padding: "8px" }}>
                          <img src={a.src} alt="" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "12px", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" />
                          <div style={{ minWidth: "0", flex: "1" }}><div style={{ fontFamily: "var(--site-serif)", fontSize: "14.5px", color: "#1c1a17", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.name}</div><div style={{ marginTop: "2px", fontSize: "10.5px", color: "#8a8377" }}>{a.meta}</div></div>
                          <span style={{ flex: "none", color: "#c95b63", display: "inline-flex" }}><svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 7.2C10.6 4.6 6.2 4.4 4.3 7.2 2.6 9.8 3.6 13.4 6.4 16.2 8.4 18.2 12 21 12 21Z" fill="#c95b63"></path><path d="M12 7.2C13.4 4.6 17.8 4.4 19.7 7.2 21.4 9.8 20.4 13.4 17.6 16.2 15.6 18.2 12 21 12 21Z" fill="#eaa7ab" stroke="none" strokeWidth="1.3" strokeDasharray="0"></path></svg></span>
                        </div></>)}
                        {a.future && (<><div style={{ height: "60px", boxSizing: "border-box", borderRadius: "18px", border: "1.5px dashed #ddd6c9", display: "flex", alignItems: "center", padding: "0 14px", fontSize: "12.5px", color: "#6b665e" }}>64일 뒤예요</div></>)}
                      </div>
                    </div>
                  </Fragment>))}
                </div>
              </div>
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="calendar" couple /></div></>)}
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul style={{ listStyle: "none", margin: "0", padding: "0", borderTop: "1px solid #e0c3b1" }}>
          {v.points.map((p, pIdx) => (<Fragment key={pIdx}>
            <li style={{ display: "flex", gap: "20px", padding: "24px 0", borderBottom: "1px solid #e0c3b1" }}>
              <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "22px", lineHeight: "1", color: "#b4552d" }}>{p.n}</span>
              <div><div style={{ fontFamily: "var(--site-serif)", fontSize: "20px" }}>{p.t}</div><p style={{ margin: "8px 0 0", fontSize: "14.5px", lineHeight: "1.8", color: "#6b665e" }}>{p.d}</p></div>
            </li>
          </Fragment>))}
        </ul>
      </div>
    </div>
  </div>
</section>
</>
  );
}
