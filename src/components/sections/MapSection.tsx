"use client";

import { useState } from "react";
import Phone from "@/components/Phone";
import TabBar from "@/components/TabBar";
import { CAT, PIN_C, PIN_XY, PLACES, photo, type Kind } from "@/lib/content";

export default function MapSection() {
  const [kind, setKind] = useState<Kind>("restaurant");
  const [activeId, setActiveId] = useState("a");
  const kinds = ([["restaurant", "맛집"], ["cafe", "카페"]] as const).map(([k, label]) => ({
    label,
    active: kind === k,
    bg: kind === k ? "#1c1a17" : "transparent",
    fg: kind === k ? "#fbfaf6" : "#1c1a17",
    pick: () => {
      setKind(k);
      setActiveId(PLACES.find((p) => p.kind === k)!.id);
    },
  }));
  const mapPins = PLACES.filter((p) => p.kind === kind).map((p) => {
    const [x, y, rating] = PIN_XY[p.id];
    const on = p.id === activeId;
    const c = PIN_C[p.category];
    const rv = p.visits > 1; // 두 번 이상 간 곳은 채운 핀
    return { name: p.name, rating: rating.toFixed(1), x: x + "%", y: y + "%", tagLine: on ? "#b4552d" : "#d8d3c8", z: on ? 10 : 1, size: on ? 25 : 21, sizeH: on ? 31 : 26, fill: rv ? c : "#fbfaf6", stroke: rv ? "#fbfaf6" : c, core: rv ? "#fbfaf6" : c };
  });
  const wishMark = kind === "restaurant" ? { x: "78%", y: "20%", name: "맑은 냉면" } : { x: "48%", y: "18%", name: "다향 찻집" };
  const mapPeek = kind === "restaurant" ? "맛집 기록 · 가게 5 · 기록 12" : "카페 기록 · 가게 3 · 기록 12";
  const shownPlaces = PLACES.filter((p) => p.kind === kind).map((p) => ({
    name: p.name,
    date: p.date,
    color: CAT[p.category],
    bg: p.id === activeId ? "#fbfaf6" : "transparent",
    shadow: p.id === activeId ? "0 6px 20px -10px rgba(28,26,23,.25)" : "none",
    pressed: p.id === activeId,
    pick: () => setActiveId(p.id),
  }));
  const a = PLACES.find((p) => p.id === activeId) ?? PLACES[0];
  const active = { src: photo(a.photo), name: a.name, alt: a.name + "에서 남긴 사진", meta: a.date + " · " + a.visits + "번째" };
  return (
    <section id="map" aria-labelledby="map-title" style={{ padding: "clamp(96px,10vw,140px) 0" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "40px", alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
              <span>02</span>
              <span style={{ width: "40px", height: "1px", background: "#b4552d" }} />
              <span>YOUR MEMORIES, ON A MAP</span>
            </div>
            {" "}
            <h2 id="map-title" style={{ margin: "24px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>
              다녀온 곳이 하나씩,
              <br />
              나만의 지도가 됩니다.
            </h2>
            {" "}
            <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>종이처럼 차분한 지도 위에 내가 기록한 가게들이 색깔 핀으로 앉아요. 동네를 걷다 지도를 열면, 그날 거기서 무엇을 먹었는지가 먼저 떠오를 거예요.</p>
          </div>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", borderTop: "1px solid #d8d3c8" }}>
            <li style={{ padding: "16px 0", borderBottom: "1px solid #d8d3c8" }}>
              <div style={{ fontSize: "15px", fontWeight: "500" }}>맛집과 카페를 나눠서</div>
              <div style={{ marginTop: "4px", fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>최근순, 체감가격순으로 다시 정렬해 볼 수 있어요.</div>
            </li>
            <li style={{ padding: "16px 0", borderBottom: "1px solid #d8d3c8" }}>
              <div style={{ fontSize: "15px", fontWeight: "500" }}>건물 속 가게까지</div>
              <div style={{ marginTop: "4px", fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>지도 빈 곳을 길게 누르면 그 건물 안 식당·카페를 층별로 보여 줘요.</div>
            </li>
            <li style={{ padding: "16px 0", borderBottom: "1px solid #d8d3c8" }}>
              <div style={{ fontSize: "15px", fontWeight: "500" }}>가고 싶은 곳은 책갈피로</div>
              <div style={{ marginTop: "4px", fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>아직 못 간 위시리스트도 같은 지도 위에 함께 있어요.</div>
            </li>
          </ul>
        </div>
        {" "}
        <div className="map-box" style={{ marginTop: "clamp(56px,6vw,80px)", borderRadius: "clamp(28px,3vw,40px)", border: "1px solid #d8d3c8", backgroundColor: "#e7e3d8", backgroundImage: "linear-gradient(#dcd7c9 1px,transparent 1px),linear-gradient(90deg,#dcd7c9 1px,transparent 1px)", backgroundSize: "44px 44px", padding: "clamp(32px,4vw,64px) clamp(20px,4vw,48px)" }}>
          <div className="m-stack" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "40px", alignItems: "center" }}>
            <div className="m-contents">
              <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: ".24em", color: "#6b665e" }}>직접 눌러 보세요</div>
              {" "}
              <div role="group" aria-label="맛집 · 카페" className="m-o1 map-kinds" style={{ marginTop: "16px", display: "inline-flex", padding: "4px", borderRadius: "999px", background: "#fbfaf6", border: "1px solid #d8d3c8" }}>
                {kinds.map((k, kI) => (
                  <button key={kI} type="button" aria-pressed={k.active} onClick={k.pick} style={{ all: "unset", cursor: "pointer", padding: "10px 22px", borderRadius: "999px", fontSize: "14px", background: k.bg, color: k.fg, transition: "all .3s" }}>{k.label}</button>
                ))}
              </div>
              {" "}
              <ul className="m-o2 m-chips" style={{ listStyle: "none", margin: "24px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                {shownPlaces.map((p, pI) => (
                  <li key={pI}>
                    <button type="button" aria-pressed={p.pressed} onClick={p.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "12px 16px", borderRadius: "16px", background: p.bg, boxShadow: p.shadow, transition: "background .3s" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: p.color }} />
                        <span style={{ fontSize: "14.5px", color: "#1c1a17" }}>{p.name}</span>
                      </span>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#8a8377" }}>{p.date}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="d-only" style={{ marginTop: "clamp(40px,4vw,56px)", display: "flex", justifyContent: "center" }}>
                <figure className="map-photo" style={{ margin: "0", width: "min(100%,260px)", position: "relative", background: "#fbfaf6", padding: "10px 10px 44px", transform: "rotate(3deg)", boxShadow: "0 18px 40px -18px rgba(28,26,23,.35),0 4px 10px -4px rgba(28,26,23,.12)" }}>
                  <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                    <img src={active.src} alt={active.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  {" "}
                  <figcaption style={{ position: "absolute", left: "12px", right: "12px", bottom: "12px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "15px" }}>{active.name}</span>
                    <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#8a8377" }}>{active.meta}</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="m-o3 m-phone" style={{ display: "flex", justifyContent: "center" }}>
              <Phone>
                <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                    <img src="/map/seoul.jpg" alt="" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "680px", objectFit: "cover", display: "block" }} />
                    {" "}
                    {mapPins.map((p, pI) => (
                      <div key={pI} style={{ position: "absolute", left: p.x, top: p.y, zIndex: p.z, transform: "translate(-50%,-100%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0", transition: "all .3s" }}>
                        <span style={{ whiteSpace: "nowrap", boxSizing: "border-box", border: `1px solid ${p.tagLine}`, background: "#fbfaf6", padding: "7px 12px 6px", borderRadius: "14px 14px 14px 3px", boxShadow: "0 2px 8px rgba(28,26,23,.1)", display: "flex", flexDirection: "column", marginBottom: "2px" }}>
                          <span style={{ fontSize: "13px", lineHeight: "17px", fontWeight: "700", color: "#1c1a17" }}>{p.name}</span>
                          <span style={{ fontSize: "11px", lineHeight: "15px", color: "#6b665e" }}>★ {p.rating}</span>
                        </span>
                        <svg width={p.size} height={p.sizeH} viewBox="0 0 24 30">
                          <path d="M12 29.5C12 29.5 3 18.6 3 11.2a9 9 0 0 1 18 0c0 7.4-9 18.3-9 18.3Z" fill={p.fill} stroke={p.stroke} strokeWidth="1.5" />
                          <circle cx="12" cy="11.2" r="3" fill={p.core} />
                        </svg>
                      </div>
                    ))}
                    {" "}
                    <div style={{ position: "absolute", left: wishMark.x, top: wishMark.y, zIndex: "3", transform: "translate(-50%,-100%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                      <span style={{ whiteSpace: "nowrap", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "6px 12px", borderRadius: "12px 12px 12px 3px", boxShadow: "0 3px 10px rgba(28,26,23,.14)", fontSize: "13px", fontWeight: "700", color: "#1c1a17" }}>{wishMark.name}</span>
                      <svg width="22" height="28" viewBox="0 0 24 30">
                        <path d="M3 2h18v26l-9-6.5L3 28Z" fill="#b4552d" stroke="#fbfaf6" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                {" "}
                <div style={{ position: "absolute", left: "16px", right: "16px", top: "44px", zIndex: "5", display: "flex", gap: "10px", alignItems: "center" }}>
                  <div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h14M5 12h14M5 17h14" /></svg>
                  </div>
                  <div style={{ flex: "1", height: "46px", boxSizing: "border-box", borderRadius: "23px", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "0 15px", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 14px rgba(28,26,23,.08)" }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4.5a6.5 6.5 0 1 0 .01 0 M16 16l4.5 4.5" /></svg>
                    <span style={{ fontSize: "13.5px", color: "#b3ada1" }}>음식점이나 지역 찾기</span>
                  </div>
                  <div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)" }}>
                    <svg width="20" height="20" viewBox="0 0 100 100">
                      <polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d" />
                    </svg>
                  </div>
                </div>
                {" "}
                <div style={{ position: "absolute", left: "6px", right: "6px", top: "676px", bottom: "0", zIndex: "6", borderRadius: "26px 26px 0 0", background: "#f6f3ec", boxShadow: "0 -6px 20px rgba(28,26,23,.08)" }}>
                  <div style={{ width: "42px", height: "4px", borderRadius: "2px", background: "#d8d3c8", margin: "11px auto 0" }} />
                  <div style={{ marginTop: "12px", paddingLeft: "28px", fontFamily: "var(--dinary-font-mono)", fontSize: "12px", letterSpacing: "1px", color: "#6b665e" }}>{mapPeek}</div>
                </div>
                {" "}
                <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="map" /></div>
              </Phone>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
