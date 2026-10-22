import Image from "next/image";
import { BellIcon, BookmarkIcon, LinkIcon, SearchIcon } from "@/components/icons";
import { CATEGORY_COLORS, PLACES, type Category } from "@/lib/demo";
import { photos, type PhotoKey } from "@/lib/photos";
import { Eyebrow, TabBar } from "./Phone";

/* 앱 화면을 다시 그린 예시 화면들. 모두 360×796 논리 크기 안에서 그립니다. */

function Photo({ k, className = "", sizes = "300px", priority = false }: { k: PhotoKey; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={photos[k]} alt="" fill sizes={sizes} className="object-cover" placeholder="blur" priority={priority} />
    </div>
  );
}

const Bar = ({ category, faded = false }: { category: Category; faded?: boolean }) => (
  <span className="inline-block h-[11px] w-[2.5px] flex-none rounded-full" style={{ background: CATEGORY_COLORS[category], opacity: faded ? 0.45 : 1 }} />
);

/* ── 촬영 ─────────────────────────────── */
export function CameraScreen({ photo = "bibimbap" as PhotoKey, flash = false }) {
  return (
    <div className="absolute inset-0 bg-dark">
      <Photo k={photo} className="absolute inset-x-0 top-0 h-[640px]" sizes="320px" />
      <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute inset-x-0 top-[470px] h-[170px] bg-gradient-to-t from-dark to-transparent" />
      {/* 초점 모서리 */}
      <div className="absolute top-[230px] left-1/2 h-[150px] w-[150px] -translate-x-1/2">
        {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((c) => (
          <span key={c} className={`absolute h-[22px] w-[22px] border-card/90 ${c}`} />
        ))}
      </div>
      <div className="absolute inset-x-0 top-[62px] flex flex-col items-center gap-[10px]">
        <div className="font-serif text-[20px] text-card">지금 여기</div>
        <div className="rounded-full bg-black/45 px-[12px] py-[5px] font-sans text-[11.5px] text-card/90">위치는 촬영 순간에 읽습니다</div>
      </div>
      <div className="absolute top-[64px] left-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-black/40 text-card">
        <span className="text-[18px] leading-none">×</span>
      </div>
      <div className="absolute inset-x-0 bottom-[64px] flex items-center justify-center">
        <div className="absolute left-[42px] h-[46px] w-[46px] overflow-hidden rounded-[12px] border-2 border-card/70">
          <Photo k="latte" className="h-full w-full" sizes="40px" />
        </div>
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[4px] border-card">
          <div className="h-[64px] w-[64px] rounded-full bg-card" />
        </div>
        <div className="absolute right-[44px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/40 font-mono text-[12px] text-card">1×</div>
      </div>
      <div className="absolute inset-x-0 bottom-[30px] text-center font-sans text-[11px] text-card/55">갤러리에서 고른 사진은 인증되지 않아요</div>
      {flash && <div className="absolute inset-0 bg-white" />}
    </div>
  );
}

/* ── 가게 찾기 ─────────────────────────────── */
const CANDIDATES = [
  { name: "을지로 골목집", sub: "한식 · 서울 중구 을지로", m: 12, wish: true },
  { name: "골목 칼국수", sub: "한식 · 서울 중구 을지로", m: 26 },
  { name: "을지 다방", sub: "커피 · 서울 중구 을지로", m: 34 },
  { name: "노포 생선구이", sub: "한식 · 서울 중구 수표로", m: 47 },
];

export function PickScreen({ picked = -1 }: { picked?: number }) {
  return (
    <div className="absolute inset-0 bg-paper px-[20px] pt-[64px]">
      <div className="flex items-center gap-[12px]">
        <span className="text-[18px] text-ink">←</span>
        <span className="font-sans text-[17px] font-medium text-ink">가게 찾기</span>
      </div>
      <div className="mt-[18px] flex items-center gap-[14px]">
        <Photo k="bibimbap" className="h-[64px] w-[64px] flex-none rounded-[14px]" sizes="64px" />
        <div>
          <div className="font-serif text-[21px] text-ink">여기 어디예요?</div>
          <div className="mt-[3px] font-sans text-[11.5px] leading-[17px] text-faint">지금 위치에서 가까운 곳입니다 (정확도 8m)</div>
        </div>
      </div>
      <div className="mt-[18px] flex gap-[6px]">
        <span className="rounded-full bg-ink px-[16px] py-[7px] font-sans text-[12.5px] text-card">맛집</span>
        <span className="rounded-full border border-line px-[16px] py-[7px] font-sans text-[12.5px] text-muted">카페</span>
      </div>
      <div className="mt-[12px] flex items-center gap-[8px] rounded-[14px] border border-line bg-card px-[14px] py-[11px]">
        <SearchIcon />
        <span className="font-sans text-[13px] text-faint">가게 이름이나 주소</span>
      </div>
      <div className="mt-[10px] overflow-hidden rounded-[18px] border border-line bg-card">
        {CANDIDATES.map((c, i) => (
          <div
            key={c.name}
            className={`flex items-center gap-[12px] px-[16px] py-[13px] transition-colors duration-500 ${i ? "border-t border-line-soft" : ""} ${picked === i ? "bg-brick-soft" : ""}`}
          >
            <div className="min-w-0 flex-1">
              {c.wish && (
                <div className="mb-[3px] flex items-center gap-[4px] font-sans text-[10.5px] text-brick">
                  <BookmarkIcon size={11} fill="#b4552d" stroke="#b4552d" /> 위시리스트에 담아둔 식당
                </div>
              )}
              <div className="font-sans text-[14.5px] font-bold text-ink">{c.name}</div>
              <div className="mt-[2px] font-sans text-[11.5px] text-faint">{c.sub}</div>
            </div>
            <span className="font-mono text-[11px] text-muted">{c.m}m</span>
          </div>
        ))}
      </div>
      <div className="mt-[14px] font-sans text-[12px] text-brick">여기 없어요 · 직접 찾기</div>
      <div className="absolute inset-x-[20px] bottom-[40px] rounded-[14px] bg-brick-soft px-[14px] py-[11px] font-sans text-[11px] leading-[17px] text-brick-deep">
        읽은 좌표는 가까운 가게를 찾는 데에만 쓰고, 기록에는 남기지 않습니다.
      </div>
    </div>
  );
}

/* ── 인증 완료 ─────────────────────────────── */
export function DoneScreen() {
  return (
    <div className="absolute inset-0 bg-paper px-[24px] pt-[78px]">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[1.5px] border-brick text-brick">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </div>
        <div className="mt-[16px] font-serif text-[24px] text-ink">방문이 인증되었습니다</div>
        <div className="mt-[6px] font-sans text-[13px] text-muted">을지로 골목집 · 한식</div>
      </div>
      <div className="mx-auto mt-[22px] w-[236px] rotate-[-2deg] bg-card p-[9px] pb-[34px] shadow-[0_18px_30px_-16px_rgba(28,26,23,.4)]">
        <Photo k="bibimbap" className="h-[218px] w-full" sizes="230px" />
        <div className="mt-[9px] flex justify-between font-mono text-[10px] text-faint">
          <span>2026.10.22</span>
          <span>12:41</span>
        </div>
      </div>
      <div className="mt-[22px] flex flex-col items-center gap-[8px]">
        <span className="rounded-full border border-[#e0c3b1] bg-brick-soft px-[14px] py-[7px] font-sans text-[12px] text-brick">담아둔 지 12일 만에 다녀왔습니다</span>
        <span className="rounded-full border border-[#e0c3b1] bg-brick-soft px-[14px] py-[7px] font-sans text-[12px] text-brick">◎ 23번째 도장</span>
      </div>
      <div className="absolute inset-x-[24px] bottom-[44px] flex flex-col items-center gap-[14px]">
        <div className="flex h-[54px] w-full items-center justify-center rounded-[16px] bg-ink font-sans text-[15px] font-medium text-card">이어서 기록 쓰기</div>
        <div className="font-sans text-[13px] text-faint">나중에 쓸게요</div>
      </div>
    </div>
  );
}

/* ── 기록 ─────────────────────────────── */
export function RecordScreen() {
  return (
    <div className="absolute inset-0 bg-paper">
      <Photo k="bibimbap" className="absolute inset-x-0 top-0 h-[372px]" sizes="320px" />
      <div className="absolute inset-x-0 top-0 h-[130px] bg-gradient-to-b from-black/45 to-transparent" />
      <div className="absolute top-[62px] left-[18px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-card/90 text-[16px] text-ink">←</div>
      <div className="absolute top-[332px] left-[18px] flex gap-[6px]">
        {(["kimchi", "bibimbapBowl"] as PhotoKey[]).map((k) => (
          <Photo key={k} k={k} className="h-[52px] w-[52px] rounded-[10px] border-2 border-card" sizes="52px" />
        ))}
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] border-2 border-dashed border-card/80 bg-black/20 font-sans text-[11px] text-card">+ 앨범</div>
      </div>
      <div className="absolute inset-x-0 top-[400px] px-[22px]">
        <div className="flex items-center justify-between">
          <Eyebrow>한식 · 을지로</Eyebrow>
          <span className="rounded-full border border-[#e0c3b1] bg-brick-soft px-[9px] py-[3px] font-mono text-[9.5px] text-brick">인증 12:41</span>
        </div>
        <div className="mt-[8px] font-serif text-[27px] text-ink [text-shadow:0_0_.6px_#1c1a17]">을지로 골목집</div>
        <div className="mt-[6px] flex items-center gap-[10px] font-mono text-[11px] text-faint">
          <span>2026.10.22 (목)</span>
          <span className="text-brick">★★★★☆</span>
          <span>세 번째 방문</span>
        </div>
        <div className="mt-[18px] rounded-[18px] border border-line bg-card px-[16px] py-[14px]">
          <div className="font-mono text-[9.5px] tracking-[1.6px] text-faint">MEMO</div>
          <p className="mt-[8px] font-sans text-[13.5px] leading-[23px] text-ink">
            비가 와서 따뜻한 게 당겼던 날. 돌솥 누룽지까지 긁어 먹었다. 다음엔 엄마랑 와야지.
          </p>
        </div>
        <div className="mt-[12px] flex items-center justify-center gap-[6px] rounded-[14px] border border-line py-[11px] font-sans text-[12.5px] text-ink">
          <BookmarkIcon size={14} /> 또 갈 예정으로 담기
        </div>
      </div>
    </div>
  );
}

/* ── 캘린더 ─────────────────────────────── */
const OCT: Record<number, { name: string; c: Category; wish?: boolean }[]> = {
  2: [{ name: "연남 커피", c: "커피" }],
  3: [{ name: "서촌 만둣집", c: "중식" }, { name: "익선 디저트", c: "디저트" }],
  4: [{ name: "한남 파스타", c: "양식" }],
  6: [{ name: "골목 칼국수", c: "한식" }],
  8: [{ name: "해방촌 라멘", c: "일식" }],
  9: [{ name: "성수 베이커리", c: "베이커리" }, { name: "연남 커피", c: "커피" }],
  11: [{ name: "신당 떡볶이", c: "분식" }],
  12: [{ name: "연남 커피", c: "커피" }],
  14: [{ name: "노포 생선구이", c: "한식" }],
  15: [{ name: "서촌 만둣집", c: "중식" }],
  17: [{ name: "종로 꼬치", c: "술집" }, { name: "익선 디저트", c: "디저트" }],
  19: [{ name: "신당 떡볶이", c: "분식" }],
  20: [{ name: "을지 다방", c: "커피" }],
  22: [{ name: "을지로 골목집", c: "한식" }],
  25: [{ name: "합정 스시", c: "일식", wish: true }],
  29: [{ name: "망원 국숫집", c: "한식", wish: true }],
};
export const OCT_VISIT_DAYS = Object.keys(OCT).map(Number).filter((d) => OCT[d].some((i) => !i.wish));

export function CalendarScreen({ shown = 31, couple = false }: { shown?: number; couple?: boolean }) {
  const lead = 4; // 2026년 10월 1일은 목요일
  const cells = Array.from({ length: 35 }, (_, i) => (i < lead || i >= lead + 31 ? null : i - lead + 1));
  const count = OCT_VISIT_DAYS.filter((d) => d <= shown).reduce((n, d) => n + OCT[d].filter((i) => !i.wish).length, 0);
  return (
    <div className="absolute inset-0 bg-paper pt-[62px]">
      <div className="px-[22px]">
        <div className="flex items-center justify-between">
          <Eyebrow>{couple ? "CALENDAR · 우리" : "CALENDAR"}</Eyebrow>
          {couple && <span className="font-mono text-[11.5px] text-brick">D+412</span>}
        </div>
        <div className="mt-[8px] flex items-baseline gap-[6px] font-serif text-[22px] text-ink">
          <span>2026년</span>
          <span>10월</span>
        </div>
        <div className="mt-[6px] flex items-center justify-between">
          <span className="font-sans text-[12px] text-faint">
            이 달 기록 <span className="tabular-nums">{count}</span>건
          </span>
          <span className="flex items-center gap-[6px] rounded-full border border-[#e0c3b1] bg-brick-soft px-[11px] py-[6px]">
            <span className="h-[6px] w-[6px] rounded-full border border-brick" />
            <span className="font-sans text-[11px] text-brick">예정 보임</span>
          </span>
        </div>
      </div>
      <div className="mt-[14px] flex px-[12px]">
        {["일", "월", "화", "수", "목", "금", "토"].map((w) => (
          <span key={w} className="flex-1 text-center font-mono text-[10px] text-faint">
            {w}
          </span>
        ))}
      </div>
      <div className="mt-[6px] px-[12px]">
        {Array.from({ length: 5 }, (_, wi) => (
          <div key={wi} className="flex h-[98px] border-t-[0.5px] border-line">
            {cells.slice(wi * 7, wi * 7 + 7).map((d, di) => {
              if (!d) return <div key={di} className="flex-1" />;
              const items = OCT[d] ?? [];
              const visible = d <= shown;
              const today = d === 22;
              return (
                <div key={di} className="min-w-0 flex-1 overflow-hidden px-[2px] pt-[4px]">
                  <div className="flex justify-center">
                    <span
                      className={`flex h-[20px] min-w-[20px] items-center justify-center rounded-full px-[3px] text-[11px] ${today ? "bg-brick font-sans font-bold text-card" : "font-mono text-ink"}`}
                    >
                      {d}
                    </span>
                  </div>
                  <div className="mt-[3px] flex flex-col gap-[1.5px]">
                    {items.map((it, k) => (
                      <div
                        key={k}
                        className="flex h-[13px] items-center gap-[3px] transition-all duration-500"
                        style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(4px)", transitionDelay: `${k * 80}ms` }}
                      >
                        <Bar category={it.c} faded={it.wish} />
                        <span className={`overflow-hidden font-sans text-[9.5px] leading-[13px] whitespace-nowrap ${it.wish ? "text-faint" : "text-ink"}`}>{it.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <TabBar active="calendar" couple={couple} />
    </div>
  );
}

/* ── 위시리스트 ─────────────────────────────── */
const WISHES = [
  { name: "합정 스시", c: "일식" as Category, src: "릴스", days: 3, plan: "10.25 예정", photo: "sushi" as PhotoKey, notify: true },
  { name: "망원 국숫집", c: "한식" as Category, src: "블로그", days: 9, plan: "10.29 예정", photo: "noodleSoup" as PhotoKey, notify: true },
  { name: "서촌 소룡포", c: "중식" as Category, src: "쇼츠", days: 21, plan: null, photo: "soupDumplings" as PhotoKey, notify: true },
  { name: "익선 디저트", c: "디저트" as Category, src: "친구 추천", days: 34, plan: null, photo: "dessert" as PhotoKey, notify: false },
];

export function WishScreen() {
  return (
    <div className="absolute inset-0 bg-paper pt-[62px]">
      <div className="px-[22px]">
        <Eyebrow>WISHLIST</Eyebrow>
        <div className="mt-[8px] flex items-end justify-between">
          <div className="font-serif text-[22px] text-ink">위시리스트</div>
          <span className="font-sans text-[12px] text-faint">담아둔 곳 14</span>
        </div>
        <div className="no-scrollbar mt-[14px] flex gap-[6px] overflow-hidden">
          {["전체", "데이트", "혼밥", "부모님이랑"].map((g, i) => (
            <span key={g} className={`flex-none rounded-full px-[13px] py-[6px] font-sans text-[12px] ${i === 0 ? "bg-ink text-card" : "border border-line text-muted"}`}>
              {g}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-[14px] flex flex-col gap-[10px] px-[16px]">
        {WISHES.map((w) => (
          <div key={w.name} className="flex gap-[12px] rounded-[18px] border border-line bg-card p-[10px]">
            <Photo k={w.photo} className="h-[74px] w-[74px] flex-none rounded-[12px]" sizes="74px" />
            <div className="min-w-0 flex-1 py-[2px]">
              <div className="flex items-center gap-[6px]">
                <Bar category={w.c} />
                <span className="truncate font-sans text-[14px] font-bold text-ink">{w.name}</span>
              </div>
              <div className="mt-[4px] flex items-center gap-[4px] font-sans text-[11px] text-faint">
                <LinkIcon size={11} /> {w.src}에서 봄 · 담은 지 {w.days}일
              </div>
              <div className="mt-[8px] flex items-center gap-[6px]">
                {w.plan ? (
                  <span className="rounded-full border border-[#e0c3b1] bg-brick-soft px-[9px] py-[3px] font-mono text-[10px] text-brick">{w.plan}</span>
                ) : (
                  <span className="rounded-full border border-dashed border-line px-[9px] py-[3px] font-sans text-[10.5px] text-faint">날짜 정하기</span>
                )}
                {w.notify && (
                  <span className="flex items-center gap-[3px] font-sans text-[10.5px] text-muted">
                    <BellIcon size={11} /> 근처 알림
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-[16px] bottom-[118px] flex h-[48px] items-center justify-center rounded-[16px] border border-dashed border-brick/60 font-sans text-[13px] text-brick">
        + 가고 싶은 곳 담기
      </div>
      <TabBar active="map" />
    </div>
  );
}

/* ── 연인 기록의 한 끼 ─────────────────────────────── */
export function CoupleRecordScreen({ halfStamp = false }: { halfStamp?: boolean }) {
  return (
    <div className="absolute inset-0 bg-paper">
      <Photo k="tteokbokki" className="absolute inset-x-0 top-0 h-[300px]" sizes="320px" />
      <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-black/45 to-transparent" />
      <div className="absolute top-[62px] left-[18px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-card/90 text-[16px] text-ink">←</div>
      <div className="absolute top-[64px] right-[18px] rounded-full bg-card/90 px-[11px] py-[6px] font-mono text-[10px] tracking-[1px] text-brick">우리 · D+412</div>
      <div className="absolute inset-x-0 top-[322px] px-[22px]">
        <Eyebrow>분식 · 신당</Eyebrow>
        <div className="mt-[8px] font-serif text-[26px] text-ink [text-shadow:0_0_.6px_#1c1a17]">신당 떡볶이</div>
        <div className="mt-[4px] font-mono text-[11px] text-faint">2026.10.19 (월) · 함께 간 다섯 번째</div>

        <div className="mt-[18px] font-mono text-[9.5px] tracking-[1.6px] text-faint">우리의 한 줄</div>
        <div className="mt-[8px] flex flex-col gap-[8px]">
          <Note who="나" tone="ink" text="처음 데이트한 날 왔던 그 집. 여전히 맵고, 여전히 좋다." stars="★★★★★" />
          <Note who="상대" tone="brick" text={halfStamp ? "" : "치즈 추가는 이제 국룰. 다음엔 튀김 두 개 시키자 🙂"} stars={halfStamp ? "" : "★★★★½"} />
        </div>
        <div className="mt-[14px] flex items-center justify-between rounded-[16px] border border-line bg-card px-[14px] py-[11px]">
          <div className="flex items-center gap-[10px]">
            <Stamp half={halfStamp} />
            <div>
              <div className="font-sans text-[12.5px] font-medium text-ink">우리 도장</div>
              <div className="font-sans text-[10.5px] text-faint">{halfStamp ? "반쪽 도장은 상대가 한 줄을 쓰면 채워져요" : "둘 다 씀"}</div>
            </div>
          </div>
          {halfStamp && <span className="flex-none rounded-full bg-ink px-[11px] whitespace-nowrap py-[6px] font-sans text-[11px] text-card">콕 찌르기</span>}
        </div>
      </div>
    </div>
  );
}

function Note({ who, tone, text, stars }: { who: string; tone: "ink" | "brick"; text: string; stars: string }) {
  return (
    <div className="flex gap-[10px] rounded-[16px] border border-line bg-card px-[12px] py-[11px]">
      <span
        className={`flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full font-sans text-[10px] ${tone === "ink" ? "bg-ink text-card" : "bg-brick text-card"}`}
      >
        {who === "나" ? "나" : "♡"}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex justify-between font-sans text-[10.5px] text-faint">
          <span>{who}</span>
          <span className="text-brick">{stars}</span>
        </div>
        {text ? (
          <p className="mt-[3px] font-sans text-[12.5px] leading-[19px] text-ink">{text}</p>
        ) : (
          <p className="mt-[3px] font-sans text-[12px] text-faint">한 줄 기다리는 중…</p>
        )}
      </div>
    </div>
  );
}

function Stamp({ half }: { half: boolean }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden>
      <circle cx="17" cy="17" r="15" fill="none" stroke="#b4552d" strokeWidth="1.5" strokeDasharray={half ? "3 3" : undefined} />
      <path d="M17 4a13 13 0 0 0 0 26z" fill="#b4552d" opacity=".85" />
      {!half && <path d="M17 4a13 13 0 0 1 0 26z" fill="#b4552d" opacity=".55" />}
    </svg>
  );
}

/** 기록 목록 한 줄 — 지도 시트 안에서 씁니다. */
export function PlaceRow({ id, active = false }: { id: string; active?: boolean }) {
  const p = PLACES.find((x) => x.id === id)!;
  return (
    <div className={`flex items-center gap-[12px] px-[18px] py-[10px] transition-colors ${active ? "bg-brick-soft" : ""}`}>
      <Photo k={p.photo} className="h-[50px] w-[50px] flex-none rounded-[12px]" sizes="50px" />
      <div className="min-w-0 flex-1">
        <div className="truncate font-sans text-[14px] font-bold text-ink">{p.name}</div>
        <div className="mt-[2px] flex items-center gap-[5px] font-sans text-[11px] text-faint">
          <Bar category={p.category} />
          {p.category} · {p.area} · {p.visits}번 방문
        </div>
      </div>
      <span className="font-mono text-[10.5px] text-faint">{p.date}</span>
    </div>
  );
}

