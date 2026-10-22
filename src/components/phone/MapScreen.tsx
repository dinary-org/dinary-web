import { FilterIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { CATEGORY_COLORS, PLACES, type DemoPlace } from "@/lib/demo";
import { TabBar } from "./Phone";
import { PlaceRow } from "./screens";

/** 앱의 물방울 핀 — 원 아래로 직각 꼭짓점 하나(Markers.tsx dropPath). */
const dropPath = (size: number, stroke: number) => {
  const c = size / 2,
    r = c - stroke / 2,
    t = r / Math.SQRT2;
  return `M${c} ${c + r * Math.SQRT2}L${c + t} ${c + t}A${r} ${r} 0 1 0 ${c - t} ${c + t}Z`;
};
const PIN = 26;

/** 종이톤 지도 — 블록, 길, 공원, 강을 SVG 로 그립니다. */
function PaperMapArt() {
  const blocks: [number, number, number, number][] = [];
  for (let gy = 0; gy < 9; gy++)
    for (let gx = 0; gx < 7; gx++) {
      const x = gx * 58 - 12 + (gy % 2 ? 14 : 0);
      const y = gy * 62 + 40;
      blocks.push([x, y, 44 + ((gx * 7 + gy * 3) % 3) * 4, 46 + ((gx + gy) % 2) * 6]);
    }
  return (
    <svg className="absolute inset-0" width="360" height="796" viewBox="0 0 360 796" aria-hidden>
      <rect width="360" height="796" fill="#e7e3d8" />
      {blocks.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="5" fill="#dcd7c9" opacity={0.75} />
      ))}
      <path d="M-20 470 C 80 440, 160 520, 260 480 S 380 430, 400 450 L 400 520 C 300 500, 220 560, 120 545 S -10 520, -20 540 Z" fill="#d6dcd9" />
      <path d="M232 92 q40 -12 78 6 q22 34 -6 64 q-40 14 -70 -8 q-18 -32 -2 -62z" fill="#dfe4d6" />
      <path d="M20 600 q60 -18 110 8 q10 40 -30 58 q-60 6 -84 -22z" fill="#dfe4d6" />
      <g stroke="#f1ede2" strokeLinecap="round" fill="none">
        <path d="M-10 228 C 90 214, 200 236, 380 208" strokeWidth="14" />
        <path d="M168 -10 C 176 160, 158 320, 186 820" strokeWidth="12" />
        <path d="M-10 410 L 380 370" strokeWidth="9" />
        <path d="M70 -10 L 40 460" strokeWidth="7" />
        <path d="M268 -10 C 280 140, 250 260, 300 440" strokeWidth="7" />
        <path d="M-10 136 L 380 118" strokeWidth="6" />
        <path d="M-10 318 L 380 298" strokeWidth="5" />
        <path d="M110 560 L 360 640" strokeWidth="6" />
      </g>
      <text x="196" y="506" fontSize="10" fill="#9aa3a0" fontFamily="var(--font-noto)" letterSpacing="3">
        청 계 천
      </text>
    </svg>
  );
}

function Pin({ p, active, dim }: { p: DemoPlace; active: boolean; dim: boolean }) {
  const color = CATEGORY_COLORS[p.category];
  const size = active ? 32 : PIN;
  const h = size / 2 + (size / 2) * Math.SQRT2;
  return (
    <div
      className="absolute transition-all duration-500 ease-[var(--ease-soft)]"
      style={{
        left: p.x - size / 2,
        top: p.y - h,
        opacity: dim ? 0 : 1,
        transform: dim ? "translateY(-8px) scale(.6)" : "none",
        zIndex: active ? 5 : 1,
      }}
    >
      {active && (
        <div className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="relative rounded-[14px] rounded-bl-[3px] border border-line bg-card px-[13px] pt-[7px] pb-[6px] shadow-[0_4px_14px_rgba(28,26,23,.08)]">
            <div className="font-sans text-[13px] font-bold leading-[16px] text-ink">{p.name}</div>
            <div className="font-sans text-[11px] leading-[14px] text-muted">★ {p.rating.toFixed(1)}</div>
          </div>
        </div>
      )}
      <svg width={size} height={h} viewBox={`0 0 ${size} ${h}`} aria-hidden>
        <path d={dropPath(size, 2)} fill={color} stroke="#fbfaf6" strokeWidth="2" />
        <circle cx={size / 2} cy={size / 2} r={size * 0.15} fill="#fbfaf6" />
      </svg>
      <div className="mx-auto -mt-[2px] h-[4px] w-[12px] rounded-full bg-ink/15" />
    </div>
  );
}

/** 데모 좌표를 시트 위 지도 영역(위 ~ 360) 안으로 접어 넣습니다. */
const fit = (p: DemoPlace): DemoPlace => ({ ...p, y: 112 + (p.y - 120) * 0.8 });

export default function MapScreen({
  filter = "all",
  activeId = "a",
  kind = "restaurant",
}: {
  filter?: string;
  activeId?: string;
  kind?: "restaurant" | "cafe";
}) {
  const visible = (p: DemoPlace) => (filter === "all" ? true : p.category === filter);
  const list = PLACES.filter((p) => visible(p) && p.kind === kind);
  return (
    <div className="absolute inset-0">
      <PaperMapArt />
      {PLACES.map((p) => (
        <Pin key={p.id} p={fit(p)} active={p.id === activeId && visible(p)} dim={!visible(p)} />
      ))}
      {/* 내 위치 */}
      <div className="absolute top-[250px] left-[170px] h-[16px] w-[16px] rounded-full border-[3px] border-card bg-[#3d7bd9] shadow-[0_0_0_10px_rgba(61,123,217,.15)]" />
      <div className="absolute top-[62px] left-[16px] flex h-[42px] w-[42px] items-center justify-center rounded-full border border-line bg-card text-ink shadow-[0_4px_14px_rgba(28,26,23,.08)]">
        <MenuIcon />
      </div>
      <div className="absolute top-[62px] right-[16px] rounded-full border border-line bg-card px-[14px] py-[10px] font-sans text-[12px] text-ink shadow-[0_4px_14px_rgba(28,26,23,.08)]">
        중구 · 종로구
      </div>

      {/* 시트 46% */}
      <div className="absolute inset-x-0 bottom-0 h-[436px] rounded-t-[26px] border-t border-line-soft bg-card shadow-[0_-10px_30px_rgba(28,26,23,.13)]">
        <div className="mx-auto mt-[9px] h-[5px] w-[38px] rounded-full bg-line" />
        <div className="flex items-center justify-between px-[20px] pt-[12px]">
          <div className="flex items-baseline gap-[14px] font-serif">
            <span className={`text-[21px] ${kind === "restaurant" ? "text-ink" : "text-off"}`}>맛집</span>
            <span className={`text-[21px] ${kind === "cafe" ? "text-ink" : "text-off"}`}>카페</span>
          </div>
          <div className="flex gap-[8px]">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-line text-muted">
              <SearchIcon size={14} />
            </span>
            <span className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full border border-line text-muted">
              <FilterIcon size={15} />
              {filter !== "all" && <span className="absolute top-[3px] right-[3px] h-[7px] w-[7px] rounded-full border-[1.5px] border-card bg-brick" />}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between px-[20px] pt-[6px] pb-[8px]">
          <span className="font-sans text-[12px] text-faint">
            {list.length}곳 · 기록 {list.reduce((n, p) => n + p.visits, 0)}
          </span>
          <span className="font-sans text-[12px] text-muted">최근순 ▾</span>
        </div>
        <div className="border-t border-line-soft">
          {list.slice(0, 3).map((p) => (
            <PlaceRow key={p.id} id={p.id} active={p.id === activeId} />
          ))}
          {list.length === 0 && (
            <div className="px-[20px] py-[28px] text-center font-sans text-[12px] leading-[20px] text-faint">
              조건에 맞는 기록이 없습니다.
            </div>
          )}
        </div>
      </div>
      <TabBar active="map" />
    </div>
  );
}

