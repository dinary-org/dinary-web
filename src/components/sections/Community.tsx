"use client";

import { useState } from "react";
import Phone from "@/components/Phone";
import TabBar from "@/components/TabBar";
import { BOARDS, COMMUNITY, PEOPLE } from "@/lib/content";

const IDS = ["friends", "gallery", "ranking", "board"] as const;
const rankCards = BOARDS.map(([, name, rule], i) => ({ name, rule, top: PEOPLE[0][0], mine: ["3위", "2위", "—", "4위", "1위"][i] }));

export default function Community() {
  const [comm, setComm] = useState<(typeof IDS)[number]>("friends");
  const community = COMMUNITY.map((c, i) => {
    const on = comm === IDS[i];
    return { ...c, active: on, bg: on ? "#fbfaf6" : "#f6f3ec", enColor: on ? "#b4552d" : "#a29a8c", pick: () => setComm(IDS[i]) };
  });
  const [commFriends, commGallery, commRanking, commBoard] = IDS.map((id) => comm === id);
  return (
    <section id="community" aria-labelledby="community-title" style={{ padding: "clamp(96px,10vw,140px) 0" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: "760px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".28em", color: "#8a8377" }}>
            <span>08</span>
            <span style={{ width: "40px", height: "1px", background: "#b4552d" }} />
            <span>COMMUNITY</span>
          </div>
          {" "}
          <h2 id="community-title" style={{ margin: "24px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "clamp(32px,4.8vw,62px)", lineHeight: "1.22", letterSpacing: "-.03em" }}>
            같은 동네 사람들과,
            <br />
            조금씩 나눠요.
          </h2>
          {" "}
          <p style={{ margin: "28px 0 0", maxWidth: "31em", fontSize: "clamp(15.5px,1.3vw,16.5px)", lineHeight: "1.9", color: "#6b665e" }}>커뮤니티는 내 기록장과 따로 열려요. 친구의 한 끼를 구경하고, 랭킹으로 겨루고, 다녀온 코스를 나눠요. 셈에 들어가는 건 모두 인증된 방문뿐이에요.</p>
        </div>
        {" "}
        <div style={{ marginTop: "clamp(48px,6vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "24px", alignItems: "start" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone>
              {commFriends && (
                <>
                  <div style={{ position: "absolute", inset: "0", boxSizing: "border-box", padding: "51px 20px 0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ height: "40px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "0 14px 0 10px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13.5px", color: "#1c1a17" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
                        내 기록
                      </div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <div style={{ width: "40px", height: "40px", flex: "none", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 5a3.5 3.5 0 1 0 .01 0 M3 20c.6-3.5 3.2-5.5 6.5-5.5s5.9 2 6.5 5.5 M19 8v6M16 11h6" /></svg>
                        </div>
                        <div style={{ width: "40px", height: "40px", flex: "none", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15Z M10 20.5h4" /></svg>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div style={{ marginTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "3px", color: "#8a8377" }}>FRIENDS</span>
                      <span style={{ fontSize: "12px", color: "#8a8377" }}>친구 3명 · 새 소식 2</span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "14px", display: "flex", padding: "3px", borderRadius: "22px", background: "#ede8dd" }}>
                      <span style={{ flex: "1", height: "36px", borderRadius: "19px", background: "#fbfaf6", boxShadow: "0 1px 4px rgba(28,26,23,.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13.5px" }}>소식</span>
                      <span style={{ flex: "1", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13.5px", color: "#6b665e" }}>친구 지도</span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "16px", display: "flex", gap: "16px" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        <span style={{ position: "relative", width: "54px", height: "54px", boxSizing: "border-box", borderRadius: "50%", border: "1.5px dashed #b4552d", padding: "3px" }}>
                          <img src="/img/latte.jpg" alt="" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }} />
                          <span style={{ position: "absolute", right: "-2px", bottom: "-2px", width: "18px", height: "18px", borderRadius: "9px", background: "#b4552d", color: "#fbfaf6", fontSize: "13px", lineHeight: "18px", textAlign: "center" }}>+</span>
                        </span>
                        <span style={{ fontSize: "11.5px", color: "#b4552d" }}>내 소식</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        <span style={{ flex: "none", width: "54px", height: "54px", borderRadius: "50%", background: "#ecdcb9", color: "#1c1a17", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "23px" }}>보</span>
                        <span style={{ fontSize: "11.5px" }}>보리</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        <span style={{ flex: "none", width: "54px", height: "54px", borderRadius: "50%", background: "#4f6b7a", color: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "23px" }}>모</span>
                        <span style={{ fontSize: "11.5px" }}>모과</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        <span style={{ flex: "none", width: "54px", height: "54px", borderRadius: "50%", background: "#6f8455", color: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "23px" }}>솔</span>
                        <span style={{ fontSize: "11.5px" }}>솔방울</span>
                      </div>
                    </div>
                    {" "}
                    <div style={{ marginTop: "16px", borderRadius: "20px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "13px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "50%", background: "#ecdcb9", color: "#1c1a17", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>보</span>
                        <span style={{ fontSize: "13.5px" }}>보리</span>
                        <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", color: "#8a8377" }}>2시간 전</span>
                      </div>
                      {" "}
                      <img src="/img/ramen.jpg" alt="" style={{ marginTop: "10px", width: "100%", height: "150px", borderRadius: "14px", objectFit: "cover", display: "block" }} />
                      {" "}
                      <div style={{ marginTop: "10px", fontSize: "13.5px", color: "#1c1a17" }}>늦게 끝난 날, 국물이 다 했다</div>
                      {" "}
                      <div style={{ marginTop: "4px", fontSize: "11.5px", color: "#8a8377" }}>하루라멘 · 일식 · 서울 용산구</div>
                      {" "}
                      <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "12px", fontSize: "12px", color: "#6b665e" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b665e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" /></svg>
                          3
                        </span>
                        <span>댓글 1</span>
                        <span style={{ marginLeft: "auto", padding: "5px 11px", borderRadius: "14px", border: "1px solid #e0c3b1", color: "#b4552d" }}>+ 위시에 담기</span>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="friends" variant="community" /></div>
                </>
              )}
              {" "}
              {commGallery && (
                <>
                  <div style={{ position: "absolute", inset: "0", boxSizing: "border-box", padding: "51px 0 0" }}>
                    <div style={{ padding: "0 20px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ height: "40px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "0 14px 0 10px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13.5px", color: "#1c1a17" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
                          내 기록
                        </div>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <div style={{ width: "40px", height: "40px", flex: "none", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4.5a6.5 6.5 0 1 0 .01 0 M16 16l4.5 4.5" /></svg>
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div style={{ marginTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "3px", color: "#8a8377" }}>GALLERY</span>
                        <span style={{ fontSize: "12px", color: "#8a8377" }}>
                          오늘 올라온 사진{" "}
                          <span style={{ fontFamily: "var(--dinary-font-mono)", color: "#b4552d" }}>12</span>
                        </span>
                      </div>
                      {" "}
                      <div style={{ marginTop: "14px", display: "flex", gap: "7px" }}>
                        <span style={{ height: "34px", padding: "0 15px", borderRadius: "17px", background: "#1c1a17", color: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "13px" }}>최신</span>
                        <span style={{ height: "34px", padding: "0 15px", boxSizing: "border-box", borderRadius: "17px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "13px" }}>이번 주 인기</span>
                        <span style={{ height: "34px", padding: "0 15px", boxSizing: "border-box", borderRadius: "17px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "13px" }}>친구</span>
                      </div>
                    </div>
                    {" "}
                    <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "3px" }}>
                      <img src="/img/bibimbap.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/dumplings.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/latte.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/tteokbokki-bowl.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/sushi.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/skewers.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/dessert.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/french-toast.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/kimchi.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/ramen.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/pasta.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                      <img src="/img/hero-table.jpg" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                    </div>
                    {" "}
                    <div style={{ position: "absolute", right: "16px", bottom: "126px", height: "46px", padding: "0 20px", borderRadius: "23px", background: "#1c1a17", color: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "14px", boxShadow: "0 10px 20px -8px rgba(28,26,23,.5)" }}>+ 사진 올리기</div>
                  </div>
                  {" "}
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="gallery" variant="community" /></div>
                </>
              )}
              {" "}
              {commRanking && (
                <>
                  <div style={{ position: "absolute", inset: "0", boxSizing: "border-box", padding: "51px 20px 0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ height: "40px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "0 14px 0 10px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13.5px", color: "#1c1a17" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
                        내 기록
                      </div>
                      <div style={{ height: "40px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "0 14px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "4px", background: "#b4552d" }} />
                        참여 중
                      </div>
                    </div>
                    {" "}
                    <div style={{ marginTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "3px", color: "#8a8377" }}>RANKING</span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "15px" }}>이번 주</span>
                      <div style={{ display: "flex", padding: "3px", borderRadius: "18px", background: "#ede8dd" }}>
                        <span style={{ height: "30px", padding: "0 13px", display: "flex", alignItems: "center", fontSize: "12.5px", color: "#6b665e" }}>친구</span>
                        <span style={{ height: "30px", padding: "0 13px", borderRadius: "15px", background: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "12.5px" }}>전체</span>
                      </div>
                    </div>
                    {" "}
                    <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "9px" }}>
                      {rankCards.map((r, rI) => (
                        <div key={rI} style={{ display: "flex", alignItems: "center", gap: "10px", borderRadius: "20px", border: "1px solid #e2ddd2", background: "#fbfaf6", padding: "13px 16px" }}>
                          <div style={{ flex: "1", minWidth: "0" }}>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                              <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "17px" }}>{r.name}</span>
                              <span style={{ fontSize: "11.5px", color: "#8a8377" }}>{r.rule}</span>
                            </div>
                            <div style={{ marginTop: "5px", fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: "#1c1a17" }}>1 {r.top}</div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "10.5px", color: "#8a8377" }}>나</div>
                            <div style={{ marginTop: "3px", fontFamily: "var(--dinary-font-mono)", fontSize: "13px", color: "#b4552d" }}>{r.mine}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {" "}
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="ranking" variant="community" /></div>
                </>
              )}
              {" "}
              {commBoard && (
                <>
                  <div style={{ position: "absolute", inset: "0", boxSizing: "border-box", padding: "51px 20px 0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ height: "40px", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", padding: "0 14px 0 10px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13.5px", color: "#1c1a17" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
                        내 기록
                      </div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <div style={{ width: "40px", height: "40px", flex: "none", boxSizing: "border-box", borderRadius: "20px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4.5a6.5 6.5 0 1 0 .01 0 M16 16l4.5 4.5" /></svg>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div style={{ marginTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: "3px", color: "#8a8377" }}>BOARD</span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "12px", display: "flex", gap: "6px", whiteSpace: "nowrap" }}>
                      <span style={{ height: "32px", padding: "0 13px", borderRadius: "16px", background: "#1c1a17", color: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "12.5px" }}>전체</span>
                      <span style={{ height: "32px", padding: "0 12px", boxSizing: "border-box", borderRadius: "16px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "12.5px" }}>자유</span>
                      <span style={{ height: "32px", padding: "0 12px", boxSizing: "border-box", borderRadius: "16px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "12.5px" }}>주제</span>
                      <span style={{ height: "32px", padding: "0 12px", boxSizing: "border-box", borderRadius: "16px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "12.5px" }}>맛집</span>
                      <span style={{ height: "32px", padding: "0 12px", boxSizing: "border-box", borderRadius: "16px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "12.5px" }}>카페</span>
                      <span style={{ height: "32px", padding: "0 12px", boxSizing: "border-box", borderRadius: "16px", border: "1px solid #d8d3c8", background: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "12.5px" }}>코스</span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ padding: "3px 8px", borderRadius: "8px", background: "#ede8dd", fontSize: "11px", color: "#6b665e" }}>주제</span>
                      <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "50%", background: "#6f8455", color: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>솔</span>
                      <span style={{ fontSize: "13.5px" }}>솔방울</span>
                      <span style={{ padding: "2px 8px", borderRadius: "10px", border: "1px solid #cfc8de", background: "#efecf5", fontSize: "10.5px", fontWeight: "700", color: "#5a5078" }}>하루 세 끼</span>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", color: "#8a8377" }}>5일 전</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8a8377" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12h.01M12 12h.01M18 12h.01" /></svg>
                      </span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "10px", fontFamily: "var(--dinary-font-serif)", fontSize: "18px" }}>찬 바람 불면, 라멘</div>
                    {" "}
                    <div style={{ marginTop: "4px", fontSize: "13px", color: "#4d4842" }}>퇴근길에 생각나는 국물 한 그릇이에요.</div>
                    {" "}
                    <img src="/img/ramen.jpg" alt="" style={{ marginTop: "10px", width: "100%", height: "140px", borderRadius: "14px", objectFit: "cover", display: "block" }} />
                    {" "}
                    <div style={{ marginTop: "8px", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6b665e" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b665e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" /></svg>
                        4
                      </span>
                      <span>댓글 2</span>
                    </div>
                    {" "}
                    <div style={{ margin: "12px 0", height: "1px", background: "#e2ddd2" }} />
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ padding: "3px 8px", borderRadius: "8px", background: "#ede8dd", fontSize: "11px", color: "#6b665e" }}>카페</span>
                      <span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "50%", background: "#4f6b7a", color: "#fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>모</span>
                      <span style={{ fontSize: "13.5px" }}>모과</span>
                      <span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", color: "#8a8377" }}>5일 전</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8a8377" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12h.01M12 12h.01M18 12h.01" /></svg>
                      </span>
                    </div>
                    {" "}
                    <div style={{ marginTop: "10px", fontFamily: "var(--dinary-font-serif)", fontSize: "18px" }}>딸기 케이크는 진리</div>
                    {" "}
                    <div style={{ marginTop: "4px", fontSize: "13px", color: "#4d4842" }}>둘이 나눠 먹기 딱 좋은 크기예요.</div>
                    {" "}
                    <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#b4552d" }}>#디저트</div>
                    {" "}
                    <div style={{ marginTop: "8px", display: "flex", gap: "10px", alignItems: "center" }}>
                      <img src="/img/dessert.jpg" alt="" style={{ width: "52px", height: "52px", borderRadius: "12px", objectFit: "cover" }} />
                      <div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "15px" }}>포근당</span>
                          <span style={{ fontSize: "12px", color: "#b4552d" }}>★ 4.5</span>
                        </div>
                        <div style={{ marginTop: "2px", fontSize: "11.5px", color: "#8a8377" }}>서울 종로구 익선동</div>
                      </div>
                    </div>
                    {" "}
                    <div style={{ position: "absolute", right: "16px", bottom: "126px", height: "46px", padding: "0 20px", borderRadius: "23px", background: "#1c1a17", color: "#fbfaf6", display: "flex", alignItems: "center", fontSize: "14px", boxShadow: "0 10px 20px -8px rgba(28,26,23,.5)" }}>+ 글쓰기</div>
                  </div>
                  {" "}
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "30", paddingBottom: "34px", background: "#fbfaf6" }}><TabBar active="board" variant="community" /></div>
                </>
              )}
            </Phone>
          </div>
          <div role="tablist" aria-label="커뮤니티 화면" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "1px", borderRadius: "28px", overflow: "hidden", border: "1px solid #d8d3c8", background: "#d8d3c8", alignSelf: "center" }}>
            {community.map((c, cI) => (
              <button key={cI} type="button" role="tab" aria-selected={c.active} onClick={c.pick} style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", display: "block", background: c.bg, padding: "26px", transition: "background .3s" }}>
                <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "11px", letterSpacing: ".2em", color: c.enColor }}>{c.en}</div>
                {" "}
                <h3 style={{ margin: "18px 0 0", fontFamily: "var(--dinary-font-serif)", fontWeight: "400", fontSize: "21px" }}>{c.title}</h3>
                {" "}
                <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: "1.8", color: "#6b665e" }}>{c.body}</p>
              </button>
            ))}
          </div>
        </div>
        {" "}
        <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #d8d3c8", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "16px 40px" }}>
          <div style={{ fontFamily: "var(--dinary-font-serif)", fontSize: "20px" }}>기록은 온전히 내 것</div>
          <p style={{ margin: "0", fontSize: "14.5px", lineHeight: "1.85", color: "#6b665e" }}>무엇을 친구에게, 무엇을 전체에 보일지는 내가 골라요. 기록과 사진은 언제든 고치고, 내려받고, 지울 수 있어요. 불편한 사람은 차단할 수 있어요.</p>
        </div>
      </div>
    </section>
  );
}
