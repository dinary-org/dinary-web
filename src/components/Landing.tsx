"use client";

/**
 * 랜딩 한 페이지. Claude Design 「DINARY Website」(데스크톱) · 「Dinary Website - Mobile」의 상태와 계산을 그대로 옮겼습니다.
 * 화면 폭이 MOBILE_MAX 미만이면 모바일 마크업(mobile/*), 아니면 데스크톱 마크업(desktop/*)을 그립니다.
 * 서버 렌더와 첫 화면에서는 둘 다 그리고 CSS(.landing-desktop / .landing-mobile)로 하나만 보이게 한 뒤, 마운트 후 하나만 남깁니다.
 */
import { Component, type CSSProperties, type TouchEvent } from "react";
import { betaLinks } from "@/lib/site";
import {
  ANNIV, BOARDS, BOWL_NEEDS, CAL, DOW, FAN, FOOT, JOURNAL, MAP_F, MEETUP_ITEMS, MEETUPS, OTHER_COMM, P, PEOPLE, PICKS, PIN_C, POINTS,
  REC_MODES, REVISITS, SECTIONS, SHARE, STEPS, WISH_F, type CommId,
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
  coupleTab: "home" | "anniv";
  rec: string;
  pickI: number;
  stamps: number;
  toast: string;
  comm: CommId;
  /** 지도 · 위시 장의 선택된 기능(0~2). 첫 기능에서 시작하고 사용자 선택으로만 바뀝니다. */
  mapF: number;
  wishF: number;
  menu: boolean;
};

/** 휴대폰 마크업의 단계 칩(지도 · 위시 · 추천 · 모임) */
const chip = (on: boolean, n: number, title: string, pick: () => void) => ({
  n, title, active: on, pick, fill: on ? "100%" : "0%", fg: on ? "#1c1a17" : "#9a9387", num: on ? "#b4552d" : "#b3ac9f",
});

/** 「left:2%;top:4%」 같은 CSS 문자열을 style 객체로 */
const cssObj = (css: string) => Object.fromEntries(css.split(";").map((d) => d.split(":"))) as CSSProperties;

export default class Landing extends Component<Record<string, never>, State> {
  state: State = {
    w: 1280, y: 0, mounted: false, step: 0, coupleTab: "home", rec: "now", pickI: 0, stamps: 16, toast: "",
    comm: "mt-home", mapF: 0, wishF: 0, menu: false,
  };
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
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  }

  componentDidUpdate(_: unknown, prev: State) {
    if (prev.menu !== this.state.menu) document.documentElement.style.overflow = this.state.menu ? "hidden" : "";
  }

  stamp = () => {
    const n = this.state.stamps + 1;
    const toast = n % 10 === 0 ? "도장판을 채웠어요 · 뽑기권 1장" : BOWL_NEEDS.includes(n) ? `라벨을 받았어요 · ${n}번째 도장` : "방문이 인증되었습니다";
    this.setState({ stamps: n, toast });
  };

  go = (n: number) => this.setState({ step: (n + 4) % 4 });

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
      pick: { ...p, src: P + p.photo + ".jpg", idx: pickI + 1, tx: p.px + "%", ty: p.py - 7 + "%", whys: p.why.map((t, i) => ({ n: i + 1, t })) },
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
        no: Math.floor(n / 10) + 1, filled, bowls: n, tickets: Math.floor(n / 10), toast: this.state.toast,
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
    const c = this.state.comm;
    const inside = c === "mt-records" || c === "mt-wish" || c === "mt-plan";
    return {
      meetupItems: MEETUP_ITEMS.map(([id, title, body], i) => {
        const on = c === id;
        return {
          n: i + 1, title, body, active: on, bg: on ? "#fbfaf6" : "transparent", border: on ? "#d8d3c8" : "transparent",
          numColor: on ? "#b4552d" : "#8a8377", pick: () => this.setState({ comm: id }),
        };
      }),
      otherComm: OTHER_COMM.map(([id, label]) => {
        const on = c === id;
        return {
          label, active: on, bg: on ? "#1c1a17" : "#fbfaf6", fg: on ? "#fbfaf6" : "#1c1a17", border: on ? "#1c1a17" : "#d8d3c8",
          pick: () => this.setState({ comm: id }),
        };
      }),
      commFriends: c === "friends", commRanking: c === "ranking", commBoard: c === "board",
      mtAny: c.startsWith("mt-"), mtHome: c === "mt-home", mtInside: inside, mtRecords: c === "mt-records", mtWish: c === "mt-wish", mtPlan: c === "mt-plan",
      mtAll: c === "mt-home"
        ? { bg: "#1c1a17", border: "#1c1a17", fg: "#fbfaf6", name: "#1c1a17" }
        : { bg: "#fbfaf6", border: "#d8d3c8", fg: "#1c1a17", name: "#6b665e" },
      mtCells: MEETUPS.map((m) => {
        const on = inside && m.id === "eul";
        return { ...m, ring: on ? m.c : "transparent", hasD: !!m.dday, dot: !!m.dot && !on, nameC: on ? "#1c1a17" : "#6b665e" };
      }),
      mtTabs: ([["mt-records", "기록"], ["map", "지도"], ["mt-wish", "갈래 말래"], ["mt-plan", "약속"]] as const).map(([id, label]) => {
        const on = c === id;
        return { label, bg: on ? "#fbfaf6" : "transparent", fg: on ? "#1c1a17" : "#6b665e", shadow: on ? "0 1px 4px rgba(28,26,23,.08)" : "none" };
      }),
      rankCards: BOARDS.map(([, name, rule], i) => ({ name, rule, top: PEOPLE[0][0], mine: ["3위", "2위", "—", "4위", "1위"][i] })),
    };
  }

  /** 지도(mf · mapIs) · 위시(wf · wishIs) 장의 기능 세 개 */
  featureVals(key: "map" | "wish") {
    const cur = key === "map" ? this.state.mapF : this.state.wishF;
    const pick = (i: number) => () => (key === "map" ? this.setState({ mapF: i }) : this.setState({ wishF: i }));
    const f = (i: number) => {
      const on = cur === i;
      return { active: on, bg: on ? "#fbfaf6" : "transparent", border: on ? "#d8d3c8" : "transparent", num: on ? "#b4552d" : "#8a8377", pick: pick(i) };
    };
    return { f: [f(0), f(1), f(2)] as const, is: [cur === 0, cur === 1, cur === 2] as const, pick };
  }

  desktopVals() {
    const { y, step, coupleTab } = this.state;
    const go = this.go;
    const map = this.featureVals("map");
    const wish = this.featureVals("wish");
    return {
      iosBetaUrl: betaLinks.ios,
      androidBetaUrl: betaLinks.android,
      navBg: y > 24 ? "rgba(255,255,255,.9)" : "transparent",
      navBorder: y > 24 ? "rgba(228,230,234,.9)" : "transparent",
      sections: SECTIONS.map(([id, label]) => ({ href: "#" + id, label })),
      footSections: FOOT.map(([id, label]) => ({ href: "#" + id, label })),
      ...this.recVals(),
      ...this.labelVals(),
      stamp: this.stamp,
      ...this.communityVals(),
      ph: phone("--ph"),
      phSm: phone("--ph-sm"),
      mf0: map.f[0], mf1: map.f[1], mf2: map.f[2], mapIs0: map.is[0], mapIs1: map.is[1], mapIs2: map.is[2],
      wf0: wish.f[0], wf1: wish.f[1], wf2: wish.f[2], wishIs0: wish.is[0], wishIs1: wish.is[1], wishIs2: wish.is[2],
      heroStageH: "var(--hero-h)",
      steps: STEPS.map((x, i) => ({
        n: i + 1, verb: x.verb, active: i === step, color: i <= step ? "#b4552d" : "#a29a8c", bar: i <= step ? "#b4552d" : "#d8d3c8", pick: () => go(i),
      })),
      step: { ...STEPS[step], no: "0" + (step + 1), hasNote: !!STEPS[step].note },
      isStep0: step === 0, notStep0: step !== 0, isStep1: step === 1, isStep2: step === 2, isStep3: step === 3,
      prevStep: () => go(step - 1),
      nextStep: () => go(step + 1),
      calDow: DOW,
      calWeeks: calWeeks(),
      calCount: Object.keys(CAL).length,
      diaryH: "var(--diary-h)",
      journal: JOURNAL.map(([k, cap, pos, r, pw]) => ({ src: P + k + ".jpg", cap, r, pos: cssObj(pos), w: `calc(${pw}% + var(--journal-dw))` })),
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
    const { y, menu, step, comm, rec } = this.state;
    const map = this.featureVals("map");
    const wish = this.featureVals("wish");
    const ua = typeof navigator === "undefined" ? "" : navigator.userAgent;
    const go = this.go;
    return {
      ...v,
      storeUrl: /iPhone|iPad/.test(ua) ? betaLinks.ios : betaLinks.android,
      ph: phone("--mph"),
      phSm: phone("--mph-sm"),
      heroStageH: "calc(864px * var(--mph-sm) + 60px)",
      menuOpen: menu,
      menuClosed: !menu,
      toggleMenu: () => this.setState((st) => ({ menu: !st.menu })),
      closeMenu: () => this.setState({ menu: false }),
      navBg: menu ? "#ffffff" : v.navBg,
      navBorder: menu ? "#e4e6ea" : v.navBorder,
      showBar: y > 700 && !menu,
      menuLinks: FOOT.map(([id, label], i) => ({ href: "#" + id, label, n: "0" + (i + 1) })),
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
      otherComm: OTHER_COMM.map(([id, label], i) => {
        const on = comm === id;
        return { label, active: on, pick: () => this.setState({ comm: id }), fg: on ? "#1c1a17" : "#9a9387", border: on ? "#b4552d" : "transparent", sep: i ? "1px solid #e4dfd5" : "0" };
      }),
      mapChips: MAP_F.map(([t], i) => chip(this.state.mapF === i, i + 1, t, map.pick(i))),
      mapBody: MAP_F[this.state.mapF][1],
      wishChips: WISH_F.map(([t], i) => chip(this.state.wishF === i, i + 1, t, wish.pick(i))),
      wishBody: WISH_F[this.state.wishF][1],
      recChips: REC_MODES.map(([id, label], i) => chip(rec === id, i + 1, label, () => this.setState({ rec: id }))),
      recBody: (REC_MODES.find((x) => x[0] === rec) || REC_MODES[0])[2],
      meetChips: MEETUP_ITEMS.map(([id, title], i) => chip(comm === id, i + 1, title, () => this.setState({ comm: id }))),
      commBody: [...MEETUP_ITEMS, ...OTHER_COMM].find((x) => x[0] === comm)?.[2] ?? "",
      share: SHARE.map((t, i) => ({
        ...t, tf: `translateX(calc(-50% + ${(i - 1.5) * 44}px)) translateY(${Math.abs(i - 1.5) * 18}px) rotate(${(i - 1.5) * 7}deg)`,
      })),
      fan: FAN.map(([k, r, x, cap]) => ({
        src: P + k + ".jpg", cap, z: 10 - Math.abs(x), tf: `translateX(${x * 56}px) translateY(${Math.abs(x) * 12}px) rotate(${r}deg)`,
      })),
    };
  }

  renderDesktop() {
    const v = this.desktopVals();
    return (
      <div className="landing-desktop" style={{ position: "relative", background: "#ffffff", overflowX: "hidden", minHeight: "100vh" }}>
        <DNav v={v} />
        <main>
          <DHero v={v} />
          <DStory v={v} />
          <DCapture v={v} />
          <DMapSection v={v} />
          <DDiary v={v} />
          <DWishlist v={v} />
          <DRecommend v={v} />
          <DCommunity v={v} />
          <DTogether v={v} />
          <DLabels v={v} />
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
        style={{ position: "relative", maxWidth: "440px", margin: "0 auto", background: "#ffffff", overflowX: "hidden", minHeight: "100vh", boxShadow: "0 0 0 1px #ddd8cd" }}
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
          <MCommunity v={v} />
          <MTogether v={v} />
          <MLabels v={v} />
          <MClosing v={v} />
        </main>
        <MFooter v={v} />
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
