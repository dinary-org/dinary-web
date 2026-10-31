/** 앱 하단 탭 바(캘린더 · 지도 · 📷 · 추천 · 커뮤니티). 커뮤니티 안에서는 친구 · 갤러리 · 랭킹 · 게시판. */
const I = {
  calendar: "M6 5h12a2.5 2.5 0 0 1 2.5 2.5V18a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V7.5A2.5 2.5 0 0 1 6 5Z M3.5 9.6h17M8.2 3.4v3M15.8 3.4v3 M7.6 13.2h3M13.4 13.2h3M7.6 16.8h3",
  map: "M12 21s7-6.3 7-11.3A7 7 0 005 9.7C5 14.7 12 21 12 21z M12 7.3a2.4 2.4 0 1 0 .01 0",
  recommend: "M12 3.5a8.5 8.5 0 1 0 .01 0 M15.4 8.6l-1.9 4.9-4.9 1.9 1.9-4.9z",
  community: "M9 5.2a3.3 3.3 0 1 0 .01 0 M3 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5 M16.8 7a2.6 2.6 0 1 0 .01 0 M16.4 14.6c2.4.1 4.1 1.7 4.6 4.4",
  gallery: "M5.1 3.5h4.3a1.6 1.6 0 0 1 1.6 1.6v4.3a1.6 1.6 0 0 1-1.6 1.6H5.1a1.6 1.6 0 0 1-1.6-1.6V5.1a1.6 1.6 0 0 1 1.6-1.6Z M14.6 3.5h4.3a1.6 1.6 0 0 1 1.6 1.6v4.3a1.6 1.6 0 0 1-1.6 1.6h-4.3a1.6 1.6 0 0 1-1.6-1.6V5.1a1.6 1.6 0 0 1 1.6-1.6Z M5.1 13h4.3a1.6 1.6 0 0 1 1.6 1.6v4.3a1.6 1.6 0 0 1-1.6 1.6H5.1a1.6 1.6 0 0 1-1.6-1.6v-4.3A1.6 1.6 0 0 1 5.1 13Z M14.6 13h4.3a1.6 1.6 0 0 1 1.6 1.6v4.3a1.6 1.6 0 0 1-1.6 1.6h-4.3a1.6 1.6 0 0 1-1.6-1.6v-4.3a1.6 1.6 0 0 1 1.6-1.6Z",
  ranking: "M4 20.5h16 M5 12h4v8.5H5Z M10 6.5h4v14h-4Z M15 14.5h4v6h-4Z",
  couple: "M9 6.5a5.5 5.5 0 1 0 .01 0 M15 6.5a5.5 5.5 0 1 0 .01 0",
  board: "M7 3.5h10a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 18V6A2.5 2.5 0 0 1 7 3.5Z M8.5 8.5h7M8.5 12h7M8.5 15.5h4",
} as const;
type Icon = keyof typeof I;
const MAIN: [string, string, Icon][] = [["calendar", "캘린더", "calendar"], ["map", "지도", "map"], ["recommend", "추천", "recommend"], ["community", "커뮤니티", "community"]];
const COMM: [string, string, Icon][] = [["friends", "친구", "community"], ["gallery", "갤러리", "gallery"], ["ranking", "랭킹", "ranking"], ["board", "게시판", "board"]];

export default function TabBar({ active, variant = "main", couple = false }: { active: string; variant?: "main" | "community"; couple?: boolean }) {
  const main: [string, string, Icon][] = couple ? [...MAIN.slice(0, 3), ["couple", "연인", "couple"]] : MAIN;
  const items = (variant === "community" ? COMM : main).map(([id, label, icon]) => ({
    id,
    label,
    d: I[icon],
    // 메인 탭바의 「커뮤니티」는 탭이 아니라 전환이라 칠하지 않습니다.
    color: id === active && !(variant === "main" && id === "community") ? "#b4552d" : "#a29a8c",
  }));
  const tab = (t: (typeof items)[number]) => (
    <span key={t.id} style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
      <span style={{ position: "relative", display: "flex" }}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={t.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={t.d} /></svg>
      </span>
      <span style={{ fontSize: "9.5px", letterSpacing: ".2px", color: t.color }}>{t.label}</span>
    </span>
  );
  return (
    <div style={{ position: "relative", width: "390px", height: "74px", boxSizing: "border-box", background: "#fbfaf6", borderTop: "1px solid #e2ddd2", boxShadow: "0 -2px 14px rgba(28,26,23,.06)", paddingTop: "12px", display: "flex", alignItems: "flex-start", fontFamily: "var(--dinary-font-mono)" }}>
        {items.slice(0, 2).map(tab)}
        <div style={{ flex: "1" }} />
        {items.slice(2).map(tab)}
        <div style={{ position: "absolute", top: "-22px", left: "50%", marginLeft: "-31px", width: "62px", height: "62px", borderRadius: "31px", boxSizing: "border-box", background: "#b4552d", border: "3px solid #fbfaf6", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(180,85,45,.34)" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fbfaf6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5.5" width="19" height="14" rx="3.5" /><circle cx="12" cy="12.5" r="4" /><path d="M8 5.5L9.4 3h5.2l1.4 2.5" /></svg>
      </div>
    </div>
  );
}
