import { CompassIcon, PeopleIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";

const ITEMS = [
  {
    icon: <CompassIcon size={22} />,
    en: "Discover",
    title: "오늘 뭐 먹지?",
    body: "지금 있는 곳 근처에서, 다시 가는 사람이 많은 곳을 다섯 곳씩 골라 드려요. 그래도 못 고르겠다면 작은 게임에 맡겨 보세요.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="12" cy="12" r="8.5" strokeDasharray="2.5 2.5" />
        <circle cx="12" cy="12" r="4.5" />
      </svg>
    ),
    en: "Collect",
    title: "도장과 라벨",
    body: "인증할 때마다 도장판에 도장이 하나씩. 한 장을 채우거나 기록이 쌓이면 라벨을 받아요. 모으는 재미가 기록을 이어 줘요.",
  },
  {
    icon: <PeopleIcon size={22} />,
    en: "Share",
    title: "친구와 나누는 한 끼",
    body: "고른 사진과 한 줄을 친구에게 보여 주고, 마음에 드는 친구의 기록은 내 위시리스트에 바로 담아 와요.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
        <path d="M12 3.5v11M7.5 10l4.5 4.5 4.5-4.5M5 19.5h14" />
      </svg>
    ),
    en: "Yours",
    title: "기록은 온전히 내 것",
    body: "기록과 사진은 언제든 고치고, 내려받고, 지울 수 있어요. 위치는 가게를 찾는 순간에만 읽어요.",
  },
];

export default function More() {
  return (
    <section aria-labelledby="more-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 id="more-title" className="font-serif text-[clamp(28px,3.4vw,42px)] tracking-[-0.02em] text-ink">
              그리고, 식탁 곁의 작은 것들.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="font-display text-[20px] text-faint italic">
            And a few more things.
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="border-t border-ink pt-6">
              <div className="flex items-center justify-between text-brick">
                {it.icon}
                <span className="font-display text-[16px] text-faint italic">{it.en}</span>
              </div>
              <h3 className="mt-6 font-serif text-[22px] text-ink">{it.title}</h3>
              <p className="mt-3 font-sans text-[14.5px] leading-[1.85] text-muted">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
