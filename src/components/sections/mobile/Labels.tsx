// Claude Design 「Dinary Website - Mobile」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import type { MobileVals } from "@/components/Landing";

export default function Labels({ v }: { v: MobileVals }) {
  return (
<>
<section id="labels" aria-labelledby="labels-title" style={{ background: "#f5f6f8", padding: "96px 0" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "40px", alignItems: "end" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#1c1a17" }}><span>08</span></div>
        <h2 id="labels-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "32px", lineHeight: "1.22", letterSpacing: "-.03em" }}>인증할 때마다 도장 하나,<br />쌓이면 라벨이 됩니다.</h2>
      </div>
      <p style={{ margin: "0", maxWidth: "31em", fontSize: "15.5px", lineHeight: "1.9", color: "#6b665e" }}>인증한 기록 하나가 도장 하나. 열 칸을 채우면 뽑기권을 받고, 먹어 온 기록에 따라 열리는 라벨을 닉네임 옆에 달 수 있어요.</p>
    </div>

    <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "24px", alignItems: "start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ borderRadius: "22px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
            <span style={{ fontFamily: "var(--site-serif)", fontSize: "17px" }}>도장판</span>
            <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#8a8377" }}>{v.board.bowls}그릇 · {v.board.filled} / 10</span>
          </div>
          <div style={{ margin: "12px auto 0", maxWidth: "260px", display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "7px" }}>
            {v.board.slots.map((s, sIdx) => (<Fragment key={sIdx}>
              <div style={{ position: "relative", aspectRatio: "1", borderRadius: "50%", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--dinary-font-mono)", fontSize: "11.5px", color: "#cdbfae", border: s.border }}>
                {s.n}
                <svg aria-hidden="true" viewBox="0 0 100 100" style={{ position: "absolute", inset: "4%", width: "92%", height: "92%", opacity: s.op, transform: `rotate(${s.r}deg) scale(${s.sc})`, transition: "all .45s cubic-bezier(.22,1,.36,1)" }}><polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d"></polygon><text x="50" y="62" textAnchor="middle" fontSize="32" fill="#fbfaf6" fontFamily="NotoSansKR_400Regular, sans-serif">D</text></svg>
              </div>
            </Fragment>))}
          </div>
          <div style={{ marginTop: "14px", paddingTop: "12px", borderTop: "1px solid #e2ddd2", position: "relative" }}>
            <div style={{ position: "absolute", left: "5%", right: "5%", top: "24px", height: "2px", background: "#e6dfd2" }}></div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(8,minmax(0,1fr))" }}>
              {v.board.track.map((t, tIdx) => (<Fragment key={tIdx}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "24px", height: "24px", boxSizing: "border-box", borderRadius: "12px", border: t.border, background: t.bg, boxShadow: t.halo, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10.5px", color: "#fbfaf6", transition: "all .4s" }}>{t.d}</span>
                  <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: t.fg }}>{t.n}</span>
                </div>
              </Fragment>))}
            </div>
          </div>
          <div style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}><span style={{ minWidth: "0", fontSize: "12.5px", lineHeight: "1.4", color: "#b4552d" }}>{v.board.toast}</span>
          <button type="button" onClick={v.stamp} style={{ all: "unset", cursor: "pointer", flex: "none", boxSizing: "border-box", minHeight: "44px", display: "inline-flex", alignItems: "center", borderRadius: "999px", background: "#b4552d", color: "#fbfaf6", padding: "0 18px", fontSize: "13.5px", transition: "background .3s" }} className="hv-brick-deep">인증하고 도장 찍기</button></div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "19px" }}>이야기</span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "15px", color: "#1c1a17" }}>3 / 22</span></div>
        <div style={{ marginTop: "12px", borderRadius: "24px", border: "1px solid #e2ddd2", background: "#fbfaf6", overflow: "hidden" }}><div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px" }}><svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}><polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#6a5d94"></polygon><circle cx="30" cy="30" r="20" fill="#fbfaf6"></circle><circle cx="30" cy="30" r="17" fill="none" stroke="#6a5d94" strokeWidth=".8" strokeDasharray="1.5 2"></circle><g transform="translate(19 19) scale(.92)"><path d="M13 3L6 13.5h5.5L10.5 21 18 10.5h-5.5Z" fill="none" stroke="#6a5d94" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></g></svg><div style={{ flex: "1", minWidth: "0" }}><div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "16px", color: "#1c1a17" }}>하지만 빨랐죠?</span><span style={{ fontSize: "11.5px", color: "#b4552d" }}>대표</span></div><div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>베타테스트 참여</div></div></div><div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderTop: "1px solid #ece6da" }}><svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}><polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#8a6a3a"></polygon><circle cx="30" cy="30" r="20" fill="#fbfaf6"></circle><circle cx="30" cy="30" r="17" fill="none" stroke="#8a6a3a" strokeWidth=".8" strokeDasharray="1.5 2"></circle><g transform="translate(19 19) scale(.92)"><path d="M3.5 11h5a2.5 2.5 0 0 1-5 0Z M9.5 11h5a2.5 2.5 0 0 1-5 0Z M15.5 11h5a2.5 2.5 0 0 1-5 0Z M3 15.5h18" fill="none" stroke="#8a6a3a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></g></svg><div style={{ flex: "1", minWidth: "0" }}><div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "16px", color: "#1c1a17" }}>하루 세 끼</span></div><div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>하루에 기록 3개</div></div><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#b4552d" }}>3 / 3</span></div><div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderTop: "1px solid #ece6da" }}><svg aria-hidden="true" width="50" height="50" viewBox="0 0 60 60" style={{ flex: "none" }}><polygon points="58.0,30.0 53.9,35.5 55.2,42.1 49.2,45.3 47.5,51.9 40.6,52.1 36.2,57.3 30.0,54.5 23.8,57.3 19.4,52.1 12.5,51.9 10.8,45.3 4.8,42.1 6.1,35.5 2.0,30.0 6.1,24.5 4.8,17.9 10.8,14.7 12.5,8.1 19.4,7.9 23.8,2.7 30.0,5.5 36.2,2.7 40.6,7.9 47.5,8.1 49.2,14.7 55.2,17.9 53.9,24.5" fill="#a8412a"></polygon><circle cx="30" cy="30" r="20" fill="#fbfaf6"></circle><circle cx="30" cy="30" r="17" fill="none" stroke="#a8412a" strokeWidth=".8" strokeDasharray="1.5 2"></circle><g transform="translate(19 19) scale(.92)"><path d="M12 19.5s-7-4.3-7-9.6a3.9 3.9 0 0 1 7-2.4 3.9 3.9 0 0 1 7 2.4c0 5.3-7 9.6-7 9.6Z" fill="none" stroke="#a8412a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></g></svg><div style={{ flex: "1", minWidth: "0" }}><div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "16px", color: "#1c1a17" }}>삼고초려</span></div><div style={{ marginTop: "3px", fontSize: "12px", color: "#8a8377" }}>한 가게에 세 번</div></div><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12.5px", color: "#b4552d" }}>3 / 3</span></div></div>
        
      </div>
    </div>
    
  </div>
</section>
</>
  );
}
