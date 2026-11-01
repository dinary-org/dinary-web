// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import TabBar from "@/components/TabBar";
import type { DesktopVals } from "@/components/Landing";

export default function MapSection({ v }: { v: DesktopVals }) {
  return (
<>
<section id="map" aria-labelledby="map-title" style={{ padding: "clamp(96px,10vw,140px) 0" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "40px", alignItems: "end" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#6b665e" }}><span>02</span><span style={{ width: "40px", height: "1px", background: "#b4552d" }}></span><span>YOUR MEMORIES, ON A MAP</span></div>
        <h2 id="map-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>다녀온 곳이 하나씩,<br />나만의 지도가 됩니다.</h2>
        <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>동네를 걷다 지도를 열면, 그날 거기서 무엇을 먹었는지가 먼저 떠오를 거예요.</p>
      </div>
      <ul style={{ listStyle: "none", margin: "0", padding: "0", borderTop: "1px solid #d8d3c8" }}>
        <li style={{ padding: "16px 0", borderBottom: "1px solid #d8d3c8" }}><div style={{ fontSize: "15px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500" }}>맛집과 카페를 나눠서</div><div style={{ marginTop: "4px", fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>최근순, 체감가격순, 별점순으로 다시 정렬해 볼 수 있어요.</div></li>
        <li style={{ padding: "16px 0", borderBottom: "1px solid #d8d3c8" }}><div style={{ fontSize: "15px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500" }}>건물 속 가게까지</div><div style={{ marginTop: "4px", fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>지도를 길게 누르면 그 건물 안 식당·카페를 층별로 보여 줘요.</div></li>
        <li style={{ padding: "16px 0", borderBottom: "1px solid #d8d3c8" }}><div style={{ fontSize: "15px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500" }}>가고 싶은 곳은 책갈피로</div><div style={{ marginTop: "4px", fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>아직 못 간 위시리스트도 같은 지도 위에 함께 있어요.</div></li>
      </ul>
    </div>

    <div style={{ marginTop: "clamp(56px,6vw,80px)", borderRadius: "clamp(28px,3vw,40px)", border: "1px solid #d8d3c8", backgroundColor: "#e7e3d8", padding: "clamp(32px,4vw,64px) clamp(20px,4vw,48px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "40px", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: ".24em", color: "#6b665e" }}>직접 눌러 보세요</div>
          <div role="group" aria-label="맛집 · 카페" style={{ marginTop: "16px", display: "inline-flex", padding: "4px", borderRadius: "999px", background: "#fbfaf6", border: "1px solid #d8d3c8" }}>
            {v.kinds.map((k, kIdx) => (<Fragment key={kIdx}>
              <button type="button" aria-pressed={k.active} onClick={k.pick} style={{ all: "unset", cursor: "pointer", padding: "10px 22px", borderRadius: "999px", fontSize: "14px", background: k.bg, color: k.fg, transition: "all .3s" }}>{k.label}</button>
            </Fragment>))}
          </div>
          <ul style={{ listStyle: "none", margin: "24px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
            {v.shownPlaces.map((p, pIdx) => (<Fragment key={pIdx}>
              <li>
                <button type="button" onClick={p.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "12px 16px", borderRadius: "16px", background: p.bg, boxShadow: p.shadow, transition: "background .3s" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "12px" }}><span style={{ width: "10px", height: "10px", borderRadius: "50%", background: p.color }}></span><span style={{ fontSize: "14.5px", color: "#1c1a17" }}>{p.name}</span></span>
                  <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#8a8377" }}>{p.date}</span>
                </button>
              </li>
            </Fragment>))}
          </ul>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: v.ph.w, height: v.ph.h }}>
            <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.ph.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
              <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative" }}>
                <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}><img src="/map/seoul.jpg" alt="" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "680px", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" />
                  {v.mapPins.map((p, pIdx) => (<Fragment key={pIdx}>
                    <div style={{ position: "absolute", left: p.x, top: p.y, zIndex: p.z, transform: "translate(-50%,-100%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0", transition: "all .3s" }}>
                      <span style={{ whiteSpace: "nowrap", boxSizing: "border-box", border: `1px solid ${p.tagLine}`, background: "#fbfaf6", padding: "7px 12px 6px", borderRadius: "14px 14px 14px 3px", boxShadow: "0 2px 8px rgba(28,26,23,.1)", display: "flex", flexDirection: "column", marginBottom: "2px" }}><span style={{ fontSize: "13px", lineHeight: "17px", fontFamily: "var(--dinary-font-sans-bd)", fontWeight: "700", color: "#1c1a17" }}>{p.name}</span><span style={{ fontSize: "11px", lineHeight: "15px", color: "#6b665e" }}>★ {p.rating}</span></span>
                      <svg width={p.size} height={p.sizeH} viewBox="0 0 24 25"><path d="M12 24c-1.6-1.9-9-8.4-9-13.2a9 9 0 0 1 18 0c0 4.8-7.4 11.3-9 13.2Z" fill={p.fill} stroke={p.stroke} strokeWidth="1.5" strokeLinejoin="round"></path><circle cx="12" cy="10.8" r="3.4" fill={p.core}></circle></svg>
                    </div>
                  </Fragment>))}
                  <div style={{ position: "absolute", left: v.wishMark.x, top: v.wishMark.y, zIndex: "3", transform: "translate(-50%,-100%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}><span style={{ whiteSpace: "nowrap", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "6px 12px", borderRadius: "12px 12px 12px 3px", boxShadow: "0 3px 10px rgba(28,26,23,.14)", fontSize: "13px", fontFamily: "var(--dinary-font-sans-bd)", fontWeight: "700", color: "#1c1a17" }}>{v.wishMark.name}</span><svg width="22" height="28" viewBox="0 0 24 30"><path d="M3 2h18v26l-9-6.5L3 28Z" fill="#b4552d" stroke="#fbfaf6" strokeWidth="1.5" strokeLinejoin="round"></path></svg></div></div></div>
                  
                  
                  
                  <div style={{ position: "absolute", left: "16px", right: "16px", top: "44px", zIndex: "5", display: "flex", gap: "10px", alignItems: "center" }}><div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h14M5 12h14M5 17h14"></path></svg></div><div style={{ flex: "1", height: "46px", boxSizing: "border-box", borderRadius: "23px", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "0 15px", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 14px rgba(28,26,23,.08)" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4.5a6.5 6.5 0 1 0 .01 0 M16 16l4.5 4.5"></path></svg><span style={{ fontSize: "13.5px", color: "#b3ada1" }}>음식점이나 지역 찾기</span></div><div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)" }}><svg width="20" height="20" viewBox="0 0 100 100"><polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d"></polygon></svg></div></div>
                  <div style={{ position: "absolute", left: "0", right: "0", top: "430px", bottom: "0", zIndex: "6", borderRadius: "28px 28px 0 0", background: "#f6f3ec", boxShadow: "0 -6px 20px rgba(28,26,23,.08)", padding: "0 16px", boxSizing: "border-box", overflow: "hidden" }}>
                    <div style={{ width: "42px", height: "4px", borderRadius: "2px", background: "#d8d3c8", margin: "11px auto 0" }}></div>
                    <div style={{ marginTop: "14px", display: "flex", padding: "3px", borderRadius: "24px", background: "#ede8dd" }}>
                      <span style={{ flex: "1", height: "38px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#1c1a17", fontSize: "14px", color: "#fbfaf6" }}>{v.sheet.tab} <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11.5px", color: "#e08a63" }}>{v.sheet.places}</span></span>
                      <span style={{ flex: "1", height: "38px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "14px", color: "#6b665e" }}>위시리스트 <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11.5px", color: "#b4552d" }}>4</span></span>
                    </div>
                    <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                      {v.sheetKinds.map((k, kIdx) => (<Fragment key={kIdx}><span style={{ fontFamily: "var(--site-serif)", fontSize: "24px", color: k.c }}>{k.label}</span></Fragment>))}
                      <span style={{ marginLeft: "auto", width: "38px", height: "38px", boxSizing: "border-box", borderRadius: "19px", border: "1px solid #d8d3c8", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.8" strokeLinecap="round"><path d="M11 4.5a6.5 6.5 0 1 0 .01 0 M16 16l4.5 4.5"></path></svg></span>
                      <span style={{ width: "38px", height: "38px", boxSizing: "border-box", borderRadius: "19px", border: "1px solid #d8d3c8", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.8" strokeLinecap="round"><path d="M5 8h14M8 12h8M10.5 16h3"></path></svg></span>
                    </div>
                    <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "13px", color: "#8a8377" }}><span>{v.sheet.summary}</span><span style={{ color: "#1c1a17" }}>최근순 ⌄</span></div>
                    <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {v.sheetRecs.map((r, rIdx) => (<Fragment key={rIdx}>
                        <div style={{ display: "flex", gap: "12px", alignItems: "center", borderRadius: "22px", border: `1.5px solid ${r.line}`, background: "#fbfaf6", padding: "10px 12px", boxShadow: "0 4px 14px rgba(28,26,23,.05)" }}>
                          <img src={r.src} alt="" style={{ flex: "none", width: "68px", height: "68px", borderRadius: "16px", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" />
                          <div style={{ flex: "1", minWidth: "0" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "16px", color: "#1c1a17", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</span>{r.revisit && (<><span style={{ flex: "none", padding: "2px 7px", borderRadius: "9px", background: "#f7ece5", fontSize: "10px", color: "#b4552d" }}>재방문</span></>)}</div>
                            <div style={{ marginTop: "2px", fontSize: "11px", color: "#8a8377" }}>{r.area}</div>
                            <div style={{ marginTop: "2px", fontSize: "11.5px", color: "#4d4842" }}>{r.cat} <span style={{ color: "#d8d3c8" }}>|</span> {r.menu}</div>
                            <div style={{ marginTop: "3px", display: "flex", alignItems: "center", gap: "5px" }}><span style={{ fontSize: "11px", letterSpacing: "1px", color: "#b4552d" }}>{r.stars}<span style={{ color: "#d8d3c8" }}>{r.starsOff}</span></span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", color: "#6b665e" }}>{r.rating}</span><span style={{ width: "1px", height: "10px", background: "#d8d3c8" }}></span><span style={{ display: "flex", gap: "1px" }}>{r.pigs.map((g, gIdx) => (<Fragment key={gIdx}><img src="/piggy.png" alt="" style={{ width: "12px", height: "11px", objectFit: "contain", opacity: g }} loading="lazy" decoding="async" /></Fragment>))}</span></div>
                          </div>
                        </div>
                      </Fragment>))}
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active={"map"} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</>
  );
}
