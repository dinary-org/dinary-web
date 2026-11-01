// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import type { MobileVals } from "@/components/Landing";

export default function Hero({ v }: { v: MobileVals }) {
  return (
<>
<section id="top" style={{ position: "relative", padding: "100px 20px 56px" }}>
  <div style={{ animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) both" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--dinary-font-mono)", fontSize: "11.5px", letterSpacing: ".2em", color: "#6b665e" }}><span style={{ width: "24px", height: "1px", background: "#b4552d" }}></span>A FOOD DIARY · 식사 기록장</div>
    <h1 style={{ margin: "22px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "46px", lineHeight: "1.16", letterSpacing: "-.035em", color: "#1c1a17" }}>먹은 순간이,<br />우리의 <span style={{ display: "inline-block", background: "linear-gradient(transparent 72%, #f0d3c3 72%, #f0d3c3 92%, transparent 92%)" }}>이야기</span>가,<br />되도록.</h1>
    <p style={{ margin: "22px 0 0", fontSize: "15.5px", lineHeight: "1.85", color: "#6b665e", textWrap: "pretty" }}>DINARY는 사진으로 쓰는 식사 일기예요. 지도 앱의 별점과 리뷰는 누구에게나 같은 정보지만, DINARY에는 그 가게에서 보낸 <span style={{ color: "#1c1a17" }}>나만의 한 끼와 기억</span>이 남아요.</p>
    <div style={{ marginTop: "28px" }}><div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
  <a href={v.iosBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "60px", padding: "0 16px", borderRadius: "16px", background: "#1c1a17", color: "#fbfaf6", boxSizing: "border-box" }} className="hv-brick"><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".14em", color: "#cdc6b8" }}>BETA · iOS</span><span style={{ fontSize: "16px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "3px" }}>iPhone으로 참여</span></a>
  <a href={v.androidBetaUrl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "60px", padding: "0 16px", borderRadius: "16px", background: "#1c1a17", color: "#fbfaf6", boxSizing: "border-box" }} className="hv-brick"><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".14em", color: "#cdc6b8" }}>BETA · ANDROID</span><span style={{ fontSize: "16px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500", marginTop: "3px" }}>Android로 참여</span></a>
</div></div>
    <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#8a8377" }}><span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b4552d" }}></span>iOS · Android · 지금 베타 테스트 중</div>
  </div>
  <div style={{ position: "relative", marginTop: "44px", height: "470px", animation: "fadeUp 1.2s .2s cubic-bezier(.22,1,.36,1) both" }}>
    <figure style={{ position: "absolute", top: "0", right: "0", width: "56%", margin: "0", background: "#fbfaf6", padding: "8px 8px 32px", transform: "rotate(4deg)", boxShadow: "0 18px 40px -18px rgba(28,26,23,.35),0 4px 10px -4px rgba(28,26,23,.12)" }}>
      <div style={{ aspectRatio: "4/5", overflow: "hidden" }}><img src="/img/tacos.jpg" alt="나무 도마 위의 병아리콩 타코와 라임" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
      <figcaption style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", fontFamily: "var(--dinary-font-mono)", fontSize: "9px", letterSpacing: ".08em", color: "#8a8377" }}><span>2026.10.24</span><span>연남, 저녁</span></figcaption>
    </figure>
    <div style={{ position: "absolute", left: "0", bottom: "0", transform: "rotate(-5deg)" }}><div style={{ position: "relative", width: v.phSm.w, height: v.phSm.h }}>
          <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.phSm.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
            <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative" }}>
              <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "300px" }}><img src="/img/hero-table.jpg" alt="돌솥비빔밥과 반찬이 놓인 식탁" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", left: "16px", top: "44px" }}><div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)", border: "none", background: "rgba(251,250,246,.92)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg></div></div>
                  <div style={{ position: "absolute", right: "16px", top: "44px", display: "flex", gap: "10px" }}><div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)", border: "none", background: "rgba(251,250,246,.92)" }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path></svg></div><div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)", border: "none", background: "rgba(251,250,246,.92)" }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V4M8 8l4-4 4 4M5 13v6h14v-6"></path></svg></div></div>
                </div>
                <div style={{ display: "flex", gap: "8px", padding: "10px 16px", borderBottom: "1px solid #e2ddd2" }}>
                  <div style={{ position: "relative", width: "54px", height: "54px", boxSizing: "border-box", borderRadius: "14px", border: "2px solid #b4552d", overflow: "hidden" }}><img src="/img/hero-table.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /><span style={{ position: "absolute", left: "0", top: "0", background: "#b4552d", color: "#fbfaf6", fontSize: "8.5px", padding: "1px 5px", borderRadius: "0 0 7px 0" }}>대표</span></div>
                  
                  <div style={{ width: "54px", height: "54px", boxSizing: "border-box", borderRadius: "14px", border: "1.5px dashed #d8d3c8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#6b665e" }}>+ 앨범</div>
                </div>
                <div style={{ padding: "18px 22px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "27px", color: "#1c1a17" }}>한그릇</span><svg width="24" height="24" viewBox="0 0 100 100"><polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d"></polygon><path d="M30 52l14 14 27-30" stroke="#fbfaf6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg></div>
                  <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#8a8377" }}>한식 · 서울 중구</div>
                  <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ display: "flex", gap: "1px", fontSize: "14px", lineHeight: "1", color: "#b4552d" }}><span>★</span><span>★</span><span>★</span><span>★</span><span style={{ background: "linear-gradient(90deg,#b4552d 50%,#d8d3c8 50%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>★</span></span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: "#6b665e" }}>4.5</span><span style={{ width: "1px", height: "12px", background: "#d8d3c8" }}></span><span aria-label="체감 가격 2단계" style={{ display: "flex", gap: "2px" }}><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "1" }} /><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "1" }} /><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "0.3" }} /><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "0.3" }} /><img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "0.3" }} /></span></div>
                  <div style={{ margin: "16px 0 14px", height: "1px", background: "#e2ddd2" }}></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div><div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>방문</div><div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", fontFamily: "var(--dinary-font-mono)", display: "flex", alignItems: "center", gap: "6px" }}>2026.10.22 12:41 <svg width="15" height="15" viewBox="0 0 100 100"><polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d"></polygon><path d="M30 52l14 14 27-30" stroke="#fbfaf6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg></div></div>
                    <div><div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>메뉴</div><div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", display: "flex", alignItems: "center", gap: "6px" }}>돌솥비빔밥</div></div>
                    <div><div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>메모</div><div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", display: "flex", alignItems: "center", gap: "6px" }}>돌솥 누룽지까지 싹 긁어 먹었다. 반찬이 정갈하고 계속 리필해 주셨다.</div></div>
                    <div><div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>주소</div><div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", display: "flex", alignItems: "center", gap: "6px" }}>서울 중구 을지로</div></div>
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", gap: "6px" }}><span style={{ padding: "5px 12px", borderRadius: "14px", border: "1px solid #d8d3c8", fontSize: "12px", color: "#6b665e" }}>점심</span><span style={{ padding: "5px 12px", borderRadius: "14px", border: "1px solid #d8d3c8", fontSize: "12px", color: "#6b665e" }}>혼밥</span><span style={{ padding: "5px 12px", borderRadius: "14px", border: "1px solid #d8d3c8", fontSize: "12px", color: "#6b665e" }}>정갈함</span></div>
                  
                </div>
              </div>
            </div>
          </div>
        </div></div>
  </div>
</section>
</>
  );
}
