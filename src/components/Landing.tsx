"use client";

/**
 * 랜딩 한 페이지. Claude Design 「DINARY Website」(데스크톱) · 「Dinary Website - Mobile」의 상태와 계산을 그대로 옮겼습니다.
 * 화면 폭이 MOBILE_MAX 미만이면 모바일 마크업(mobile/*), 아니면 데스크톱 마크업(desktop/*)을 그립니다.
 * 서버 렌더와 첫 화면에서는 둘 다 그리고 CSS(.landing-desktop / .landing-mobile)로 하나만 보이게 한 뒤, 마운트 후 하나만 남깁니다.
 */
import { Component, type CSSProperties, type TouchEvent } from "react";
import { betaLinks } from "@/lib/site";
import {
  ANNIV, BOARDS, BOWL_NEEDS, CAL, CAT, COMMUNITY, DOW, EXTRA, FAN, FOOT, JOURNAL, P, PEOPLE, PICKS, PIN_C, PIN_XY, PLACES, POINTS,
  REC_MODES, REVISITS, SECTIONS, SHARE, STEPS, STRIP, type Kind,
} from "@/lib/content";
import DCapture from "@/components/sections/desktop/Capture";
import DClosing from "@/components/sections/desktop/Closing";
import DCommunity from "@/components/sections/desktop/Community";
import DDiary from "@/components/sections/desktop/Diary";
import DFooter from "@/components/sections/desktop/Footer";
import DHero from "@/components/sections/desktop/Hero";
import DLabels from "@/components/sections/desktop/Labels";
import DMapSection from "@/components/sections/desktop/MapSection";
import DNav from "@/components/sections/desktop/Nav";
import DRecommend from "@/components/sections/desktop/Recommend";
import DStory from "@/components/sections/desktop/Story";
import DTogether from "@/components/sections/desktop/Together";
import DWishlist from "@/components/sections/desktop/Wishlist";
import MCapture from "@/components/sections/mobile/Capture";
import MClosing from "@/components/sections/mobile/Closing";
import MCommunity from "@/components/sections/mobile/Community";
import MDiary from "@/components/sections/mobile/Diary";
import MFooter from "@/components/sections/mobile/Footer";
import MHero from "@/components/sections/mobile/Hero";
import MLabels from "@/components/sections/mobile/Labels";
import MMapSection from "@/components/sections/mobile/MapSection";
import MNav from "@/components/sections/mobile/Nav";
import MRecommend from "@/components/sections/mobile/Recommend";
import MStickyBar from "@/components/sections/mobile/StickyBar";
import MStory from "@/components/sections/mobile/Story";
import MTogether from "@/components/sections/mobile/Together";
import MWishlist from "@/components/sections/mobile/Wishlist";

/** 이 폭(px) 미만이면 모바일 마크업. globals.css 의 .landing-* 미디어 쿼리와 같은 값입니다. */
export const MOBILE_MAX = 720;

/** 폰 목업(410×864)을 CSS 변수 배율로 줄입니다. 배율은 globals.css 의 화면 너비 분기에서 정해집니다. */
function phone(scaleVar: string) {
  return { w: `calc(410px * var(${scaleVar}))`, h: `calc(864px * var(${scaleVar}))`, t: `scale(var(${scaleVar}))` };
}

function calWeeks() {
  const cells: (number | null)[] = [...Array<null>(4).fill(null), ...Array.from({ length: 31 }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks.map((wk, wi) => ({
    line: wi === weeks.length - 1 ? "transparent" : "#e2ddd2",
    days: wk.map((n) => ({
      n: n ?? "",
      bg: n === 31 ? "#b4552d" : "transparent",
      fg: n === 31 ? "#fbfaf6" : "#1c1a17",
      recs: n && CAL[n] ? [{ name: CAL[n][0], c: PIN_C[CAL[n][1]] }] : [],
    })),
  }));
}

type State = {
  w: number;
  y: number;
  mounted: boolean;
  step: number;
  touched: boolean;
  kind: Kind;
  activeId: string;
  coupleTab: "home" | "anniv";
  rec: string;
  pickI: number;
  stamps: number;
  toast: string;
  comm: string;
  menu: boolean;
};

export default class Landing extends Component<{ autoplay?: boolean }, State> {
  state: State = {
    w: 1280, y: 0, mounted: false, step: 0, touched: false, kind: "restaurant", activeId: "a", coupleTab: "home",
    rec: "now", pickI: 0, stamps: 16, toast: "", comm: "friends", menu: false,
  };
  private timer?: ReturnType<typeof setInterval>;
  private sx: number | null = null;
  private sy = 0;

  private onResize = () => this.setState({ w: window.innerWidth });
  private onScroll = () => {
    const y = window.scrollY;
    if ((y > 24) !== (this.state.y > 24) || (y > 700) !== (this.state.y > 700)) this.setState({ y });
  };

  componentDidMount() {
    this.setState({ w: window.innerWidth, y: window.scrollY, mounted: true });
    window.addEventListener("resize", this.onResize);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.timer = setInterval(() => {
      if (this.props.autoplay !== false && !reduce && !this.state.touched) this.setState((s) => ({ step: (s.step + 1) % 4 }));
    }, 4200);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
    clearInterval(this.timer);
  }

  componentDidUpdate(_: unknown, prev: State) {
    if (prev.menu !== this.state.menu) document.documentElement.style.overflow = this.state.menu ? "hidden" : "";
  }

  stamp = () => {
    const n = this.state.stamps + 1;
    const toast = n % 10 === 0 ? "도장판을 채웠어요 · 뽑기권 1장" : BOWL_NEEDS.includes(n) ? `라벨을 받았어요 · ${n}번째 도장` : "방문이 인증되었습니다";
    this.setState({ stamps: n, toast });
  };

  go = (n: number) => this.setState({ step: (n + 4) % 4, touched: true });

  recVals() {
    const { rec, pickI } = this.state;
    const p = PICKS[pickI];
    return {
      recModes: REC_MODES.map(([id, label, body], i) => {
        const on = rec === id;
        return {
          n: i + 1, label, body, active: on, bg: on ? "#fbfaf6" : "transparent", border: on ? "#d8d3c8" : "transparent",
          numColor: on ? "#b4552d" : "#a29a8c", titleSize: on ? "33px" : "17px", titleColor: on ? "#1c1a17" : "#a29a8c",
          pick: () => this.setState({ rec: id }),
        };
      }),
      recNow: rec === "now", recBrowse: rec === "browse", recGames: rec === "games",
      recHasAction: rec === "now",
      recActionLabel: "다음 추천 보기 →",
      recAction: () => this.setState((s) => ({ pickI: (s.pickI + 1) % PICKS.length })),
      pick: { ...p, idx: pickI + 1, tx: p.px + "%", ty: p.py - 7 + "%", whys: p.why.map((t, i) => ({ n: i + 1, t })) },
      pickDots: PICKS.map((_, i) => ({ w: i === pickI ? "18px" : "6px", c: i === pickI ? "#b4552d" : "#d8d3c8" })),
      revisits: REVISITS.map(([name, meta, pct]) => ({ name, meta, pct })),
      gameEyebrow: "오늘은 이걸로",
      gameResult: PICKS[2].name,
      recPins: PICKS.map((x, i) => {
        const on = i === pickI;
        return { n: i + 1, x: x.px + "%", y: x.py + "%", size: on ? "28px" : "25px", bg: on ? "#b4552d" : "#fbfaf6", fg: on ? "#fbfaf6" : "#b4552d" };
      }),
    };
  }

  labelVals() {
    const n = this.state.stamps;
    const filled = n % 10;
    return {
      board: {
        filled, bowls: n, toast: this.state.toast,
        track: BOWL_NEEDS.map((need, i) => {
          const on = n >= need;
          const cur = on && (i === BOWL_NEEDS.length - 1 || n < BOWL_NEEDS[i + 1]);
          return {
            n: need, d: cur ? "D" : "", border: on ? "none" : "1.5px solid #ddd3c4", bg: on ? "#b4552d" : "#fbfaf6",
            fg: on ? "#b4552d" : "#a29a8c", halo: cur ? "0 0 0 5px #f2dccf" : "none",
          };
        }),
        slots: Array.from({ length: 10 }, (_, i) => {
          const on = i < filled;
          return { n: on ? "" : i + 1, border: on ? "none" : "1.5px dashed #ddd0c2", op: on ? 1 : 0, r: on ? ((i * 37) % 17) - 8 : -30, sc: on ? 1 : 0.6 };
        }),
      },
    };
  }

  communityVals() {
    return {
      community: COMMUNITY.map((c) => {
        const on = this.state.comm === c.id;
        return { ...c, active: on, bg: on ? "#fbfaf6" : "#f6f3ec", enColor: on ? "#b4552d" : "#a29a8c", pick: () => this.setState({ comm: c.id }) };
      }),
      commFriends: this.state.comm === "friends", commGallery: this.state.comm === "gallery",
      commRanking: this.state.comm === "ranking", commBoard: this.state.comm === "board",
      rankCards: BOARDS.map(([, name, rule], i) => ({ name, rule, top: PEOPLE[0][0], mine: ["3위", "2위", "—", "4위", "1위"][i] })),
    };
  }

  desktopVals() {
    const { w, y, step, kind, activeId, coupleTab } = this.state;
    const go = this.go;
    return {
      iosBetaUrl: betaLinks.ios,
      androidBetaUrl: betaLinks.android,
      navBg: y > 24 ? "rgba(246,243,236,.88)" : "transparent",
      navBorder: y > 24 ? "rgba(216,211,200,.7)" : "transparent",
      sections: SECTIONS.map(([id, label]) => ({ href: "#" + id, label })),
      footSections: FOOT.map(([id, label]) => ({ href: "#" + id, label })),
      ...this.recVals(),
      ...this.labelVals(),
      stamp: this.stamp,
      ...this.communityVals(),
      ph: phone("--ph"),
      phSm: phone("--ph-sm"),
      heroStageH: "var(--hero-h)",
      stripLoop: [...STRIP, ...STRIP].map(([k, date, note, r]) => ({ src: P + k + ".jpg", date, note, r })),
      steps: STEPS.map((x, i) => ({
        n: i + 1, verb: x.verb, active: i === step, color: i <= step ? "#b4552d" : "#a29a8c", bar: i <= step ? "#b4552d" : "#d8d3c8", pick: () => go(i),
      })),
      step: { ...STEPS[step], no: "0" + (step + 1), hasNote: !!STEPS[step].note },
      isStep0: step === 0, isStep1: step === 1, isStep2: step === 2, isStep3: step === 3,
      prevStep: () => go(step - 1),
      nextStep: () => go(step + 1),
      swipeStart: (e: TouchEvent) => {
        this.sx = e.touches[0].clientX;
        this.sy = e.touches[0].clientY;
      },
      swipeEnd: (e: TouchEvent) => {
        if (this.sx == null) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - this.sx;
        const dy = t.clientY - this.sy;
        this.sx = null;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) go(step + (dx < 0 ? 1 : -1));
      },
      kinds: ([["restaurant", "맛집"], ["cafe", "카페"]] as const).map(([k, label]) => ({
        label, active: kind === k, bg: kind === k ? "#1c1a17" : "transparent", fg: kind === k ? "#fbfaf6" : "#1c1a17",
        pick: () => this.setState({ kind: k, activeId: PLACES.find((p) => p.kind === k)!.id }),
      })),
      mapPins: PLACES.filter((p) => p.kind === kind).map((p) => {
        const [x, y0, rating] = PIN_XY[p.id];
        const py = 14 + (y0 - 30) * 0.9;
        const on = p.id === activeId;
        const c = PIN_C[p.category];
        const rv = p.visits > 1;
        return {
          name: p.name, rating: rating.toFixed(1), x: x + "%", y: py + "%", on, tagLine: on ? "#b4552d" : "#d8d3c8", z: on ? 10 : 1,
          size: on ? 28 : 24, sizeH: on ? 29 : 25, fill: rv ? c : "#fbfaf6", stroke: rv ? "#fbfaf6" : c, core: rv ? "#fbfaf6" : c,
        };
      }),
      wishMark: kind === "restaurant" ? { x: "78%", y: "20%", name: "맑은 냉면" } : { x: "48%", y: "18%", name: "다향 찻집" },
      sheet: kind === "restaurant" ? { tab: "맛집 기록", places: 5, summary: "맛집 5곳 · 기록 12" } : { tab: "카페 기록", places: 3, summary: "카페 3곳 · 기록 12" },
      sheetKinds: ([["restaurant", "맛집"], ["cafe", "카페"]] as const).map(([k, label]) => ({ label, c: kind === k ? "#1c1a17" : "#cdc6b8" })),
      sheetRecs: (() => {
        const list = PLACES.filter((p) => p.kind === kind);
        const a = list.find((p) => p.id === activeId);
        return [a, ...list.filter((p) => p !== a)]
          .filter((p) => p !== undefined)
          .map((p) => {
            const rt = PIN_XY[p.id][2];
            const ex = EXTRA[p.id];
            const full = Math.floor(rt);
            return {
              src: P + p.photo + ".jpg", name: p.name, revisit: p.visits > 1, area: ex[0], cat: p.category, menu: ex[1],
              stars: "★".repeat(full), starsOff: "★".repeat(5 - full), rating: rt.toFixed(1),
              pigs: [1, 2, 3, 4, 5].map((k) => (k <= ex[2] ? 1 : 0.3)), line: p.id === activeId ? "#b4552d" : "#e2ddd2",
            };
          });
      })(),
      calDow: DOW,
      calWeeks: calWeeks(),
      calCount: Object.keys(CAL).length,
      shownPlaces: PLACES.filter((p) => p.kind === kind).map((p) => ({
        name: p.name, date: p.date, color: CAT[p.category],
        bg: p.id === activeId ? "#fbfaf6" : "transparent", shadow: p.id === activeId ? "0 6px 20px -10px rgba(28,26,23,.25)" : "none",
        pick: () => this.setState({ activeId: p.id }),
      })),
      diaryH: "var(--diary-h)",
      journal: JOURNAL.map(([k, cap, pos, r, pw]) => ({
        src: P + k + ".jpg", cap, r,
        pos: Object.fromEntries(pos.split(";").map((d) => d.split(":"))) as CSSProperties,
        w: `calc(${pw}% + var(--journal-dw))` })),
      share: SHARE.map((t, i) => ({
        ...t,
        tf: `translateX(calc(-50% + ${i - 1.5} * var(--share-dx))) translateY(${Math.abs(i - 1.5) * 18}px) rotate(${(i - 1.5) * 7}deg)`,
      })),
      points: POINTS.map(([t, d], i) => ({ n: i + 1, t, d })),
      coupleHome: coupleTab === "home",
      coupleAnniv: coupleTab === "anniv",
      coupleTabs: ([["home", "우리 도장"], ["anniv", "우리의 기념일"]] as const).map(([id, label]) => ({
        label, active: coupleTab === id, bg: coupleTab === id ? "#c95b63" : "transparent", fg: coupleTab === id ? "#fbfaf6" : "#6b665e",
        pick: () => this.setState({ coupleTab: id }),
      })),
      couple: {
        n: 3, left: 7, pct: "30%",
        slots: Array.from({ length: 10 }, (_, i) =>
          i < 3
            ? { border: "none", op: 1, l: "#c95b63", r: "#eaa7ab", rs: "none" }
            : i === 3
              ? { border: "none", op: 1, l: "#c95b63", r: "none", rs: "#c95b63" }
              : { border: "1.5px dashed #ead0cf", op: 0, l: "none", r: "none", rs: "none" },
        ),
      },
      anniv: ANNIV.map(([label, date, photo, name, meta]) => ({
        label, date, has: !!photo, future: !photo, src: photo ? P + photo + ".jpg" : "", name, meta, labelC: photo ? "#1c1a17" : "#8a8377",
      })),
      fan: FAN.map(([k, r, x, cap]) => ({
        src: P + k + ".jpg", cap, z: 10 - Math.abs(x), tf: `translateX(calc(${x} * var(--fan-x))) translateY(${Math.abs(x) * 18}px) rotate(${r}deg)`,
      })),
    };
  }

  mobileVals() {
    const v = this.desktopVals();
    const { y, menu } = this.state;
    const active = v.recModes.find((m) => m.active) || v.recModes[0];
    const ua = typeof navigator === "undefined" ? "" : navigator.userAgent;
    return {
      ...v,
      storeUrl: /iPhone|iPad/.test(ua) ? betaLinks.ios : betaLinks.android,
      ph: phone("--mph"),
      phSm: phone("--mph-sm"),
      menuOpen: menu,
      menuClosed: !menu,
      toggleMenu: () => this.setState((st) => ({ menu: !st.menu })),
      closeMenu: () => this.setState({ menu: false }),
      navBg: menu ? "#f6f3ec" : v.navBg,
      navBorder: menu ? "#e2ddd2" : v.navBorder,
      showBar: y > 700 && !menu,
      menuLinks: FOOT.map(([id, label], i) => ({ href: "#" + id, label, n: "0" + (i + 1) })),
      recTabs: v.recModes.map((m) => ({ ...m, bg: m.active ? "#1c1a17" : "transparent", fg: m.active ? "#fbfaf6" : "#6b665e" })),
      recBody: active.body,
      commTabs: v.community.map((c) => ({
        ...c, bg: c.active ? "#1c1a17" : "#fbfaf6", fg: c.active ? "#fbfaf6" : "#1c1a17", line: c.active ? "#1c1a17" : "#d8d3c8",
      })),
      commActive: v.community.find((c) => c.active) || v.community[0],
      fan: FAN.map(([k, r, x, cap]) => ({
        src: P + k + ".jpg", cap, z: 10 - Math.abs(x), tf: `translateX(${x * 56}px) translateY(${Math.abs(x) * 12}px) rotate(${r}deg)`,
      })),
    };
  }

  renderDesktop() {
    const v = this.desktopVals();
    return (
      <div className="landing-desktop" style={{ position: "relative", background: "var(--dinary-paper)", overflowX: "hidden", minHeight: "100vh" }}>
        <DNav v={v} />
        <main>
          <DHero v={v} />
          <DStory v={v} />
          <DCapture v={v} />
          <DMapSection v={v} />
          <DDiary v={v} />
          <DWishlist v={v} />
          <DRecommend v={v} />
          <DTogether v={v} />
          <DLabels v={v} />
          <DCommunity v={v} />
          <DClosing v={v} />
        </main>
        <DFooter v={v} />
      </div>
    );
  }

  renderMobile() {
    const v = this.mobileVals();
    return (
      <div
        className="landing-mobile"
        style={{ position: "relative", maxWidth: "440px", margin: "0 auto", background: "var(--dinary-paper)", overflowX: "hidden", minHeight: "100vh", boxShadow: "0 0 0 1px #ddd8cd" }}
      >
        <MNav v={v} />
        <main>
          <MHero v={v} />
          <MStory v={v} />
          <MCapture v={v} />
          <MMapSection v={v} />
          <MDiary v={v} />
          <MWishlist v={v} />
          <MRecommend v={v} />
          <MTogether v={v} />
          <MLabels v={v} />
          <MCommunity v={v} />
          <MClosing v={v} />
        </main>
        <MFooter v={v} />
        <MStickyBar v={v} />
      </div>
    );
  }

  render() {
    const { mounted, w } = this.state;
    if (!mounted) {
      return (
        <>
          {this.renderDesktop()}
          {this.renderMobile()}
        </>
      );
    }
    return w < MOBILE_MAX ? this.renderMobile() : this.renderDesktop();
  }
}

export type DesktopVals = ReturnType<Landing["desktopVals"]>;
export type MobileVals = ReturnType<Landing["mobileVals"]>;
