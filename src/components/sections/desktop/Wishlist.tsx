// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import type { DesktopVals } from "@/components/Landing";

export default function Wishlist({ v }: { v: DesktopVals }) {
  return (
<>
<section id="wishlist" aria-labelledby="wish-title" style={{ padding: "clamp(96px,10vw,140px) 0" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(56px,6vw,80px)", alignItems: "center" }}>
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", width: "min(520px,90%)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "#f7ece5", filter: "blur(30px)" }}></div>
      <div style={{ position: "relative", width: v.ph.w, height: v.ph.h }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "410px", height: "864px", transform: v.ph.t, transformOrigin: "top left", background: "#1c1a17", borderRadius: "58px", padding: "10px", boxSizing: "border-box", boxShadow: "0 50px 90px -40px rgba(28,26,23,.6)" }}>
          <div style={{ width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden", background: "#f6f3ec", position: "relative", containerType: "inline-size" }}>
            {v.wishIs0 && (<><img src="/screens/wish-a.jpg" alt="DINARY 화면: 유튜브 쇼츠에서 찾은 가게 고르기" style={{ position: "absolute", left: "0", top: "12.05cqw", width: "100%", height: "auto", display: "block" }} loading="lazy" decoding="async" /></>)}
            {v.wishIs1 && (<><img src="/screens/wish-b.jpg" alt="DINARY 지도 화면: 위시리스트 폴더와 예정 날짜" style={{ position: "absolute", left: "0", top: "12.05cqw", width: "100%", height: "auto", display: "block" }} loading="lazy" decoding="async" /></>)}
            {v.wishIs2 && (<><img src="/screens/wish-c.jpg" alt="DINARY 지도 화면: 위시리스트에 담은 돈토키 상세" style={{ position: "absolute", left: "0", top: "12.05cqw", width: "100%", height: "auto", display: "block" }} loading="lazy" decoding="async" /><div style={{ position: "absolute", inset: "0", zIndex: "19", background: "rgba(28,26,23,.32)" }}></div><div style={{ position: "absolute", left: "2.5cqw", right: "2.5cqw", top: "16cqw", zIndex: "20", display: "flex", alignItems: "center", gap: "4cqw", borderRadius: "7cqw", background: "#fbfaf6", padding: "5cqw 5cqw", boxShadow: "0 30px 60px -20px rgba(28,26,23,.65),0 0 0 1px rgba(28,26,23,.06)" }}><img src="/brand/icon.png" alt="" style={{ flex: "none", width: "13cqw", height: "13cqw", borderRadius: "3.2cqw", boxShadow: "0 0 0 1px #d8d3c8" }} loading="lazy" decoding="async" /><div style={{ minWidth: "0", flex: "1" }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: "3.3cqw", color: "#8a8377" }}><span style={{ letterSpacing: ".08em" }}>DINARY</span><span>지금</span></div><div style={{ marginTop: "1cqw", fontSize: "4.6cqw", fontFamily: "var(--dinary-font-sans-bd)", fontWeight: "700", color: "#1c1a17" }}>돈토키, 지금 앞에 계신가요?</div><div style={{ marginTop: ".8cqw", fontSize: "3.8cqw", lineHeight: "1.5", color: "#6b665e" }}>눌러서 사진을 찍으면 방문이 인증됩니다.</div></div></div></>)}
            <div style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12.05cqw", background: "#f6f3ec", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7.4cqw 0 9.5cqw", boxSizing: "border-box", zIndex: "40" }}><span style={{ fontFamily: "-apple-system,'SF Pro Text',var(--dinary-font-sans-bd)", fontWeight: "600", fontSize: "4.3cqw", letterSpacing: "-.02em", color: "#1c1a17", lineHeight: "1" }}>9:41</span><svg viewBox="0 0 70 13" style={{ width: "17.9cqw", height: "auto", display: "block" }} fill="#1c1a17"><rect x="0" y="8" width="3" height="4" rx="1"></rect><rect x="4.8" y="5.8" width="3" height="6.2" rx="1"></rect><rect x="9.6" y="3.4" width="3" height="8.6" rx="1"></rect><rect x="14.4" y="1" width="3" height="11" rx="1"></rect><path d="M30.5 3.2a9.6 9.6 0 0 1 12.6 0l1.2-1.3a11.4 11.4 0 0 0-15 0Zm2.2 2.4a6.4 6.4 0 0 1 8.2 0l1.2-1.3a8.2 8.2 0 0 0-10.6 0Zm2.2 2.4a3.2 3.2 0 0 1 3.8 0l1.2-1.3a5 5 0 0 0-6.2 0Zm1.9 3.6 1.7-1.9a1.8 1.8 0 0 0-3.4 0Z"></path><rect x="47.5" y="0.5" width="19" height="11" rx="3.2" fill="none" stroke="#1c1a17" strokeOpacity=".4"></rect><rect x="49" y="2" width="16" height="8" rx="2"></rect><path d="M68 4v4a2 2 0 0 0 0-4Z" fillOpacity=".45"></path></svg></div><div style={{ position: "absolute", left: "50%", top: "2.6cqw", width: "31cqw", height: "8.6cqw", transform: "translateX(-50%)", borderRadius: "5cqw", background: "#000", zIndex: "41" }}></div><div style={{ position: "absolute", left: "50%", bottom: "2.3cqw", width: "35cqw", height: "1.3cqw", transform: "translateX(-50%)", borderRadius: "1cqw", background: "#1c1a17", zIndex: "41" }}></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "14px", letterSpacing: ".22em", color: "#1c1a17" }}><span>04</span></div>
      <h2 id="wish-title" style={{ margin: "24px 0 0", fontFamily: "var(--site-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>가고 싶은 곳은,<br />일단 담아 두세요.</h2>
      <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}><span style={{ color: "#1c1a17" }}>근처에 오면 알려 드릴게요.</span> 지나가다 본 간판, 친구가 보낸 링크, 언젠가 가 보자던 그 집. 잊어버리기 전에 위시리스트에 담아 두면, DINARY가 대신 기억하고 있다가 알려줘요.</p>
      <div role="tablist" aria-label="위시리스트 기능" style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <button type="button" role="tab" aria-selected={v.wf0.active} onClick={v.wf0.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", display: "flex", gap: "18px", alignItems: "flex-start", padding: "18px 20px", borderRadius: "20px", background: v.wf0.bg, border: `1px solid ${v.wf0.border}`, transition: "all .3s" }}>
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: v.wf0.num, paddingTop: "4px" }}>01</span>
          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "20px", color: "#1c1a17" }}>릴스 · 쇼츠에서 바로 담기</span><span style={{ fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>영상을 보다가 공유 버튼을 누르고 DINARY를 고르세요. 게시물에 나온 가게를 찾아 카드로 보여 드려요. 눌러서 담으면 끝이에요.</span></span>
        </button>
        <button type="button" role="tab" aria-selected={v.wf1.active} onClick={v.wf1.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", display: "flex", gap: "18px", alignItems: "flex-start", padding: "18px 20px", borderRadius: "20px", background: v.wf1.bg, border: `1px solid ${v.wf1.border}`, transition: "all .3s" }}>
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: v.wf1.num, paddingTop: "4px" }}>02</span>
          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "20px", color: "#1c1a17" }}>날짜를 정하면 캘린더에</span><span style={{ fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>가기로 한 날이 캘린더에 「예정」으로 떠요.</span></span>
        </button>
        <button type="button" role="tab" aria-selected={v.wf2.active} onClick={v.wf2.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", display: "flex", gap: "18px", alignItems: "flex-start", padding: "18px 20px", borderRadius: "20px", background: v.wf2.bg, border: `1px solid ${v.wf2.border}`, transition: "all .3s" }}>
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: v.wf2.num, paddingTop: "4px" }}>03</span>
          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "var(--site-serif)", fontSize: "20px", color: "#1c1a17" }}>근처를 지나가면 알림</span><span style={{ fontSize: "14px", lineHeight: "1.75", color: "#6b665e" }}>담아둔 곳 50m 안에 들어오면 알려 드려요.</span></span>
        </button>
      </div>
      <div style={{ marginTop: "36px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
        <span style={{ borderRadius: "999px", border: "1px solid #e0c3b1", background: "#f7ece5", padding: "10px 20px", fontSize: "14px", color: "#b4552d" }}>담아둔 지 12일 만에 다녀왔습니다</span>
      </div>
    </div>
  </div>
</section>
</>
  );
}
