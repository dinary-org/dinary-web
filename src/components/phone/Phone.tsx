import { CalendarIcon, CameraIcon, CompassIcon, MapPinIcon, PeopleIcon, RingsIcon } from "@/components/icons";

/**
 * 폰 목업 — 논리 크기 384×820(화면 360×796)으로 그리고 .phone 의 --s 로 줄입니다.
 * 크기는 바깥에서 className 으로 정합니다: 예) "[--s:0.62] md:[--s:0.8]".
 */
export default function Phone({
  children,
  className = "",
  dark = false,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  label?: string;
}) {
  return (
    <div className={`phone ${className}`} role={label ? "img" : undefined} aria-label={label}>
      <div className="phone-body">
        <div
          className="absolute inset-0 rounded-[62px] bg-[#1d1b18] p-[12px]"
          style={{
            boxShadow:
              "0 60px 90px -40px rgba(28,26,23,.45), 0 30px 40px -24px rgba(28,26,23,.35), inset 0 0 0 1.5px #3a3732, inset 0 0 0 4px #121110",
          }}
        >
          <div className={`relative h-full w-full overflow-hidden rounded-[50px] ${dark ? "bg-dark" : "bg-paper"}`}>
            {children}
            <StatusBar dark={dark} />
            <div className="absolute top-[11px] left-1/2 h-[33px] w-[112px] -translate-x-1/2 rounded-full bg-black" />
            <div className={`absolute bottom-[8px] left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full ${dark ? "bg-card/80" : "bg-ink"}`} />
          </div>
        </div>
        {/* 옆 단추 */}
        <div className="absolute top-[170px] -left-[3px] h-[34px] w-[4px] rounded-l bg-[#2a2824]" />
        <div className="absolute top-[222px] -left-[3px] h-[62px] w-[4px] rounded-l bg-[#2a2824]" />
        <div className="absolute top-[296px] -left-[3px] h-[62px] w-[4px] rounded-l bg-[#2a2824]" />
        <div className="absolute top-[240px] -right-[3px] h-[96px] w-[4px] rounded-r bg-[#2a2824]" />
      </div>
    </div>
  );
}

function StatusBar({ dark }: { dark: boolean }) {
  const c = dark ? "#fbfaf6" : "#1c1a17";
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-[54px] items-center justify-between px-[34px] pt-[6px]">
      <span className="font-sans text-[16px] font-medium tracking-tight" style={{ color: c }}>
        9:41
      </span>
      <span className="flex items-center gap-[6px]" aria-hidden>
        <svg width="18" height="12" viewBox="0 0 18 12" fill={c}>
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
          <path d="M1.5 4.2a9.5 9.5 0 0 1 13 0M4 7a6 6 0 0 1 8 0" />
          <circle cx="8" cy="10" r="1.2" fill={c} stroke="none" />
        </svg>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
          <rect x="0.6" y="0.6" width="22" height="10.8" rx="3.4" stroke={c} strokeOpacity=".45" strokeWidth="1.2" />
          <rect x="2.4" y="2.4" width="16" height="7.2" rx="2" fill={c} />
          <rect x="24" y="4" width="1.6" height="4" rx=".8" fill={c} fillOpacity=".5" />
        </svg>
      </span>
    </div>
  );
}

/** 앱 탭바 — 캘린더 · 지도 · [셔터] · 추천 · 커뮤니티(연인 기록이면 「연인」). */
export function TabBar({ active, couple = false }: { active: "calendar" | "map" | "recommend" | "couple"; couple?: boolean }) {
  const on = "#b4552d";
  const off = "#a29a8c";
  const tab = (key: typeof active, label: string, icon: (c: string) => React.ReactNode) => (
    <div className="flex flex-1 flex-col items-center gap-[4px]">
      {icon(active === key ? on : off)}
      <span className="font-mono text-[9.5px] tracking-[0.2px]" style={{ color: active === key ? on : off }}>
        {label}
      </span>
    </div>
  );
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex h-[100px] items-start border-t border-line-soft bg-card pt-[12px] shadow-[0_-2px_14px_rgba(28,26,23,.06)]">
      {tab("calendar", "캘린더", (c) => <CalendarIcon stroke={c} />)}
      {tab("map", "지도", (c) => <MapPinIcon stroke={c} />)}
      <div className="flex-1" />
      {tab("recommend", "추천", (c) => <CompassIcon stroke={c} />)}
      {couple ? tab("couple", "연인", (c) => <RingsIcon stroke={c} />) : tab("couple", "커뮤니티", (c) => <PeopleIcon stroke={c} />)}
      <div className="absolute -top-[22px] left-1/2 flex h-[62px] w-[62px] -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-card bg-brick shadow-[0_8px_20px_rgba(180,85,45,.34)]">
        <CameraIcon size={26} stroke="#fbfaf6" />
      </div>
    </div>
  );
}

/** 앱의 Eyebrow — 고정폭 작은 글씨, 넓은 자간. */
export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`font-mono text-[10px] tracking-[2.2px] text-faint ${className}`}>{children}</div>;
}
