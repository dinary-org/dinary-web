import Phone from "@/components/Phone";
import TabBar from "@/components/TabBar";

export default function Wishlist() {

  return (
    <section id="wishlist" aria-labelledby="wish-title" style={{ padding: "clamp(96px,10vw,140px) 0" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(56px,6vw,80px)", alignItems: "center" }}>
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <figure style={{ position: "absolute", top: "4%", right: "0", width: "40%", margin: "0", background: "#fbfaf6", padding: "10px 10px 38px", transform: "rotate(5deg)", boxShadow: "0 18px 40px -18px rgba(28,26,23,.35)" }}>
            <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
              <img src="/img/sushi.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            {" "}
            <figcaption style={{ position: "absolute", left: "12px", right: "12px", bottom: "12px", display: "flex", justifyContent: "space-between", fontFamily: "var(--dinary-font-mono)", fontSize: "10px", color: "#8a8377" }}>
              <span>영상에서 보고 담음</span>
              <span>담은 지 3일</span>
            </figcaption>
          </figure>
          <div style={{ position: "relative" }}>
            <Phone>
              <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                  <img src="/map/seoul.jpg" alt="" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "680px", objectFit: "cover", display: "block" }} />
                  {" "}
                  <div style={{ position: "absolute", left: "250px", top: "176px", transform: "translate(-50%,-100%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                    <span style={{ whiteSpace: "nowrap", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "6px 12px", borderRadius: "12px 12px 12px 3px", boxShadow: "0 3px 10px rgba(28,26,23,.14)", fontSize: "13px", fontWeight: "700", color: "#1c1a17" }}>맑은 냉면</span>
                    <svg width="22" height="28" viewBox="0 0 24 30">
                      <path d="M3 2h18v26l-9-6.5L3 28Z" fill="#b4552d" stroke="#fbfaf6" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
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
                <div style={{ position: "absolute", right: "16px", top: "104px", zIndex: "5" }}>
                  <div style={{ width: "44px", height: "44px", flex: "none", boxSizing: "border-box", borderRadius: "22px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b4552d" strokeWidth="1.7" strokeLinecap="round">
                      <path d="M12 6a6 6 0 1 0 .01 0 M12 2.5v3.5M12 18v3.5M2.5 12H6M18 12h3.5" />
                      <circle cx="12" cy="12" r="2.2" fill="#b4552d" stroke="none" />
                    </svg>
                  </div>
                </div>
                {" "}
                <div style={{ position: "absolute", right: "16px", top: "162px", zIndex: "5", display: "flex", gap: "12px" }}>
                  <div style={{ width: "50px", height: "50px", flex: "none", boxSizing: "border-box", borderRadius: "25px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                  <div style={{ width: "50px", height: "50px", flex: "none", boxSizing: "border-box", borderRadius: "25px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(28,26,23,.08)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z M8 12.5h8M8 15.5h5" />
                    </svg>
                  </div>
                </div>
                {" "}
                <div style={{ position: "absolute", left: "0", right: "0", top: "232px", bottom: "0", zIndex: "6", borderRadius: "28px 28px 0 0", background: "#f6f3ec", boxShadow: "0 -6px 20px rgba(28,26,23,.08)", padding: "0 16px", boxSizing: "border-box" }}>
                  <div style={{ width: "42px", height: "4px", borderRadius: "2px", background: "#d8d3c8", margin: "11px auto 0" }} />
                  {" "}
                  <div style={{ marginTop: "14px", display: "flex", padding: "3px", borderRadius: "24px", background: "#ede8dd" }}>
                    <span style={{ flex: "1", height: "38px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "14px", color: "#6b665e" }}>
                      맛집 기록{" "}
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11.5px", color: "#b4552d" }}>8</span>
                    </span>
                    <span style={{ flex: "1", height: "38px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#1c1a17", fontSize: "14px", color: "#fbfaf6" }}>
                      위시리스트{" "}
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11.5px", color: "#e08a63" }}>4</span>
                    </span>
                  </div>
                  {" "}
                  <div style={{ marginTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: "12.5px", letterSpacing: "1.5px", color: "#8a8377" }}>
                      예정{" "}
                      <span style={{ fontFamily: "var(--dinary-font-mono)" }}>2</span>
                    </span>
                    <span style={{ fontSize: "13px", color: "#b4552d" }}>+ 가고 싶은 곳 담기</span>
                  </div>
                  {" "}
                  <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "9px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", borderRadius: "22px", border: "1px solid #e6cfc0", background: "#fbfaf6", padding: "15px 18px" }}>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "17px", color: "#1c1a17" }}>동그라미 베이글</div>
                        <div style={{ marginTop: "4px", fontSize: "12px", color: "#8a8377" }}>베이커리 · 서울 성동구 성수동</div>
                      </div>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "13px", color: "#b4552d" }}>11.07</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", borderRadius: "22px", border: "1px solid #e6cfc0", background: "#fbfaf6", padding: "15px 18px" }}>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "17px", color: "#1c1a17" }}>맑은 냉면</div>
                        <div style={{ marginTop: "4px", fontSize: "12px", color: "#8a8377" }}>한식 · 서울 마포구 염리동</div>
                      </div>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "13px", color: "#b4552d" }}>11.14</span>
                    </div>
                  </div>
                  {" "}
                  <div style={{ marginTop: "18px", fontSize: "12.5px", letterSpacing: "1.5px", color: "#8a8377" }}>
                    언젠가{" "}
                    <span style={{ fontFamily: "var(--dinary-font-mono)" }}>2</span>
                  </div>
                  {" "}
                  <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "9px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", borderRadius: "22px", border: "1.5px dashed #ddd6c9", padding: "15px 18px" }}>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "17px", color: "#1c1a17" }}>포도밭 와인바</div>
                        <div style={{ marginTop: "4px", fontSize: "12px", color: "#8a8377" }}>양식 · 서울 용산구 한남동</div>
                      </div>
                      <span style={{ fontSize: "12.5px", color: "#6b665e" }}>날짜 정하기</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", borderRadius: "22px", border: "1.5px dashed #ddd6c9", padding: "15px 18px" }}>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "17px", color: "#1c1a17" }}>다향 찻집</div>
                        <div style={{ marginTop: "4px", fontSize: "12px", color: "#8a8377" }}>차 · 서울 종로구 인사동</div>
                      </div>
                      <span style={{ fontSize: "12.5px", color: "#6b665e" }}>날짜 정하기</span>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="map" /></div>
            </Phone>
            {" "}
            <div role="img" aria-label="알림 예시: 맑은 냉면, 지금 앞에 계신가요? 눌러서 사진을 찍으면 방문이 인증됩니다." style={{ position: "absolute", top: "7%", left: "50%", transform: "translateX(-50%)", width: "112%", maxWidth: "360px", display: "flex", gap: "12px", borderRadius: "22px", border: "1px solid rgba(255,255,255,.6)", background: "rgba(251,250,246,.94)", padding: "14px", boxShadow: "0 24px 50px -20px rgba(28,26,23,.45)", backdropFilter: "blur(20px)", boxSizing: "border-box" }}>
              <img src="/brand/icon.png" alt="" width="38" height="38" style={{ flex: "none", borderRadius: "9px", boxShadow: "0 0 0 1px #d8d3c8" }} />
              <div style={{ minWidth: "0", flex: "1" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#8a8377" }}>
                  <span style={{ letterSpacing: ".08em" }}>DINARY</span>
                  <span>지금</span>
                </div>
                {" "}
                <div style={{ marginTop: "2px", fontSize: "13.5px", fontWeight: "700" }}>맑은 냉면, 지금 앞에 계신가요?</div>
                {" "}
                <div style={{ marginTop: "2px", fontSize: "12.5px", lineHeight: "1.5", color: "#6b665e" }}>눌러서 사진을 찍으면 방문이 인증됩니다.</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
            <span>04</span>
            <span style={{ width: "40px", height: "1px", background: "#b4552d" }} />
            <span>SAVE PLACES FOR LATER</span>
          </div>
          {" "}
          <h2 id="wish-title" style={{ margin: "24px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>
            가고 싶은 곳은,
            <br />
            일단 담아 두세요.
          </h2>
          {" "}
          <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>
            <span style={{ color: "#1c1a17" }}>근처에 오면 알려 드릴게요.</span>
            {" "}지나가다 본 간판, 친구가 보낸 링크, 언젠가 가 보자던 그 집. 잊어버리기 전에 위시리스트에 담아 두면, DINARY가 대신 기억하고 있다가 다시 데려다줘요.
          </p>
          {" "}
          <ol style={{ listStyle: "none", margin: "48px 0 0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "1px", borderRadius: "24px", overflow: "hidden", border: "1px solid #d8d3c8", background: "#d8d3c8" }}>
            <li style={{ background: "#f6f3ec", padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#b4552d" }} />
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#a29a8c" }}>01</span>
              </div>
              <div style={{ marginTop: "20px", fontSize: "15.5px", fontWeight: "500" }}>공유 버튼으로 바로 담기</div>
              <p style={{ margin: "8px 0 0", fontSize: "13.5px", lineHeight: "1.8", color: "#6b665e" }}>유튜브나 블로그에서 본 맛집을 공유 버튼으로 바로 담아요. 묶음으로 정리하고, 왜 가 보고 싶은지도 한 줄 적어 둘 수 있어요.</p>
            </li>
            <li style={{ background: "#f6f3ec", padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#b4552d" }} />
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#a29a8c" }}>02</span>
              </div>
              <div style={{ marginTop: "20px", fontSize: "15.5px", fontWeight: "500" }}>날짜를 정하면 캘린더에</div>
              <p style={{ margin: "8px 0 0", fontSize: "13.5px", lineHeight: "1.8", color: "#6b665e" }}>가기로 한 날은 캘린더에 「예정」으로 옅게 떠요. 다녀오면 그 자리에 진짜 기록이 들어서요.</p>
            </li>
            <li style={{ background: "#f6f3ec", padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#b4552d" }} />
                <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", color: "#a29a8c" }}>03</span>
              </div>
              <div style={{ marginTop: "20px", fontSize: "15.5px", fontWeight: "500" }}>근처를 지나가면 알림</div>
              <p style={{ margin: "8px 0 0", fontSize: "13.5px", lineHeight: "1.8", color: "#6b665e" }}>(선택) 근처 알림을 켜면, 담아둔 곳 50m 안에 들어왔을 때 알려 드려요. 알림을 누르면 카메라가 바로 열려, 그대로 방문을 인증할 수 있어요.</p>
            </li>
          </ol>
          {" "}
          <div style={{ marginTop: "36px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
            <span style={{ borderRadius: "999px", border: "1px solid #e0c3b1", background: "#f7ece5", padding: "10px 20px", fontSize: "14px", color: "#b4552d" }}>담아둔 지 12일 만에 다녀왔습니다</span>
            <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", letterSpacing: ".2em", color: "#8a8377" }}>— FINALLY.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
