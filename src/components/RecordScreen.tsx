/** 기록 상세 화면(한그릇 · 돌솥비빔밥). 첫 화면과 「기록하기」 04 단계에 같은 화면이 나옵니다. */
export default function RecordScreen() {
  return (
    <div style={{ position: "absolute", inset: "0", background: "#f6f3ec", overflow: "hidden" }}>
      <div style={{ position: "relative", height: "300px" }}>
        <img src="/img/bibimbap.jpg" alt="돌솥비빔밥 한 그릇" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        {" "}
        <div style={{ position: "absolute", left: "16px", top: "44px" }}>
          <div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)", border: "none", background: "rgba(251,250,246,.92)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          </div>
        </div>
        {" "}
        <div style={{ position: "absolute", right: "16px", top: "44px", display: "flex", gap: "10px" }}>
          <div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)", border: "none", background: "rgba(251,250,246,.92)" }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
          </div>
          <div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)", border: "none", background: "rgba(251,250,246,.92)" }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V4M8 8l4-4 4 4M5 13v6h14v-6" /></svg>
          </div>
        </div>
      </div>
      {" "}
      <div style={{ display: "flex", gap: "8px", padding: "10px 16px", borderBottom: "1px solid #e2ddd2" }}>
        <div style={{ position: "relative", width: "54px", height: "54px", boxSizing: "border-box", borderRadius: "14px", border: "2px solid #b4552d", overflow: "hidden" }}>
          <img src="/img/bibimbap.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <span style={{ position: "absolute", left: "0", top: "0", background: "#b4552d", color: "#fbfaf6", fontSize: "8.5px", padding: "1px 5px", borderRadius: "0 0 7px 0" }}>대표</span>
        </div>
        <div style={{ width: "54px", height: "54px", boxSizing: "border-box", borderRadius: "14px", border: "1.5px dashed #d8d3c8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#6b665e" }}>+ 앨범</div>
      </div>
      {" "}
      <div style={{ padding: "18px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "27px", color: "#1c1a17" }}>한그릇</span>
          <svg width="24" height="24" viewBox="0 0 100 100">
            <polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d" />
            <path d="M30 52l14 14 27-30" stroke="#fbfaf6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
        {" "}
        <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#8a8377" }}>한식 · 서울 중구</div>
        {" "}
        <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ display: "flex", gap: "1px", fontSize: "14px", lineHeight: "1", color: "#b4552d" }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span style={{ background: "linear-gradient(90deg,#b4552d 50%,#d8d3c8 50%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>★</span>
          </span>
          <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: "#6b665e" }}>4.5</span>
          <span style={{ width: "1px", height: "12px", background: "#d8d3c8" }} />
          <span aria-label="체감 가격 2단계" style={{ display: "flex", gap: "2px" }}>
            <img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "1" }} />
            <img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "1" }} />
            <img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "0.3" }} />
            <img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "0.3" }} />
            <img src="/piggy.png" alt="" style={{ width: "15px", height: "14px", objectFit: "contain", opacity: "0.3" }} />
          </span>
        </div>
        {" "}
        <div style={{ margin: "16px 0 14px", height: "1px", background: "#e2ddd2" }} />
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>방문</div>
            <div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", fontFamily: "var(--dinary-font-mono)", display: "flex", alignItems: "center", gap: "6px" }}>
              2026.10.22 12:41{" "}
              <svg width="15" height="15" viewBox="0 0 100 100">
                <polygon points="50,0 60.6,10.4 75,6.7 79,21 93.3,25 89.6,39.4 100,50 89.6,60.6 93.3,75 79,79 75,93.3 60.6,89.6 50,100 39.4,89.6 25,93.3 21,79 6.7,75 10.4,60.6 0,50 10.4,39.4 6.7,25 21,21 25,6.7 39.4,10.4" fill="#b4552d" />
                <path d="M30 52l14 14 27-30" stroke="#fbfaf6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>메뉴</div>
            <div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", display: "flex", alignItems: "center", gap: "6px" }}>돌솥비빔밥</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>메모</div>
            <div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", display: "flex", alignItems: "center", gap: "6px" }}>돌솥 누룽지까지 싹 긁어 먹었다. 반찬이 정갈하고 계속 리필해 주셨다.</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a8377" }}>주소</div>
            <div style={{ marginTop: "5px", fontSize: "14.5px", lineHeight: "1.65", color: "#1c1a17", display: "flex", alignItems: "center", gap: "6px" }}>서울 중구 을지로</div>
          </div>
        </div>
        {" "}
        <div style={{ marginTop: "12px", display: "flex", gap: "6px" }}>
          <span style={{ padding: "5px 12px", borderRadius: "14px", border: "1px solid #d8d3c8", fontSize: "12px", color: "#6b665e" }}>점심</span>
          <span style={{ padding: "5px 12px", borderRadius: "14px", border: "1px solid #d8d3c8", fontSize: "12px", color: "#6b665e" }}>혼밥</span>
          <span style={{ padding: "5px 12px", borderRadius: "14px", border: "1px solid #d8d3c8", fontSize: "12px", color: "#6b665e" }}>정갈함</span>
        </div>
      </div>
    </div>
  );
}
