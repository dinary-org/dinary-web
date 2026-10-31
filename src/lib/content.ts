/**
 * 목업과 문구에 쓰는 가상의 가게 · 기록 · 사람들. 실제 가게나 사람이 아닙니다.
 * 디자인(Claude Design · DINARY Website.dc.html)의 데이터 그대로입니다.
 */

/** 사진 파일 이름 → 주소 (public/img) */
export const photo = (key: string) => `/img/${key}.jpg`;

export type Kind = "restaurant" | "cafe";
export type Category = "한식" | "중식" | "일식" | "양식" | "분식" | "술집" | "커피" | "디저트" | "베이커리";

/** 앱 캘린더 · 목록의 카테고리 색 */
export const CAT: Record<Category, string> = { 한식: "#b4552d", 중식: "#9a4a52", 일식: "#5f7a8a", 양식: "#7a6a9a", 분식: "#c07a2e", 술집: "#3f4f6a", 커피: "#7a5c42", 디저트: "#b06a86", 베이커리: "#a8853f" };
/** 지도 핀 색 */
export const PIN_C: Record<Category, string> = { ...CAT, 술집: "#5f7a8a" };

export const PLACES: { id: string; name: string; category: Category; photo: string; date: string; visits: number; kind: Kind }[] = [
  { id: "a", name: "한그릇", category: "한식", photo: "bibimbap", date: "10.22", visits: 3, kind: "restaurant" },
  { id: "b", name: "빨간냄비", category: "분식", photo: "tteokbokki-bowl", date: "10.11", visits: 5, kind: "restaurant" },
  { id: "c", name: "온기만두", category: "중식", photo: "dumplings", date: "10.03", visits: 1, kind: "restaurant" },
  { id: "e", name: "하루라멘", category: "일식", photo: "ramen", date: "10.08", visits: 2, kind: "restaurant" },
  { id: "h", name: "모닥꼬치", category: "술집", photo: "skewers", date: "10.17", visits: 4, kind: "restaurant" },
  { id: "d", name: "느린커피", category: "커피", photo: "latte", date: "10.02", visits: 7, kind: "cafe" },
  { id: "g", name: "포근당", category: "디저트", photo: "dessert", date: "09.28", visits: 2, kind: "cafe" },
  { id: "i", name: "아침빵집", category: "베이커리", photo: "french-toast", date: "09.14", visits: 3, kind: "cafe" },
];
/** 지도 위 핀 자리(가로 %, 세로 %)와 별점 */
export const PIN_XY: Record<string, [number, number, number]> = { a: [44, 47, 4.5], b: [76, 58, 4.0], c: [26, 31, 4.0], e: [28, 66, 4.0], h: [70, 30, 4.5], d: [26, 52, 4.5], g: [62, 34, 4.0], i: [72, 62, 4.5] };

export const DOW = ["일", "월", "화", "수", "목", "금", "토"];
/** 2026년 10월 캘린더에 적힌 기록: 날짜 → [가게, 분류] */
export const CAL: Record<number, [string, Category]> = { 2: ["느린커피", "커피"], 3: ["온기만두", "중식"], 8: ["하루라멘", "일식"], 10: ["오솔길", "양식"], 11: ["빨간냄비", "분식"], 17: ["모닥꼬치", "일식"], 22: ["한그릇", "한식"] };

/** 흐르는 사진 띠: 사진, 날짜, 한 줄, 기울기 */
export const STRIP = (
  [
    ["tteokbokki-bowl", "10.11", "비 오는 날엔 떡볶이", -3],
    ["latte", "10.02", "일곱 번째 플랫화이트", 2],
    ["dumplings", "10.03", "얇은 피, 꽉 찬 만두", -1.5],
    ["ramen", "10.08", "늦게 끝난 날의 라멘", 2.5],
    ["dessert", "09.28", "생일 다음 날 케이크", -2],
    ["skewers", "10.17", "오랜만에 다 같이", 1.5],
    ["french-toast", "09.14", "느지막한 토요일 아침", -2.5],
    ["kimchi", "10.22", "반찬이 정갈한 점심", 2],
    ["sushi", "09.27", "처음 가 본 오마카세", -1],
  ] as const
).map(([k, date, note, r]) => ({ src: photo(k), date, note, r }));

export const STEPS = [
  { verb: "찍고", title: "음식이 나오면, 카메라부터.", body: "앱 한가운데에는 언제나 셔터가 있어요. 수저를 들기 전, 김이 오르는 그 순간을 한 장에 담으세요.", note: "그 자리에서 찍은 사진에만 방문 인증이 붙어요." },
  { verb: "찾고", title: "여기가 어디인지는 DINARY가 기억해요.", body: "셔터를 누르는 순간 위치를 딱 한 번 읽어, 50m 안의 가게를 골라 드려요. 위시리스트에 담아 둔 곳이면 맨 위에 보여요.", note: "읽은 좌표는 가게를 찾는 데에만 쓰고, 기록에는 남기지 않아요." },
  { verb: "남기고", title: "방문이 인증되고, 도장이 하나.", body: "가게와 날짜, 시각이 사진 한 장에 묶여 기록장에 들어가요. 담아 둔 지 며칠 만에 다녀왔는지도 함께 알려 줘요.", note: "연결이 끊겨도 기기에 먼저 적어 두었다가, 연결되면 올라가요." },
  { verb: "쓴다", title: "한 줄이면 충분해요.", body: "누구와 갔는지, 무엇이 좋았는지. 메뉴와 가격, 별점, 키워드, 짧은 메모, 앨범 속 사진 몇 장을 더하면 그날이 오래 선명해요. 지금 말고 나중에 써도 괜찮아요.", note: "다시 가고 싶다면 「또 갈 예정으로 담기」 한 번." },
];

/** 캘린더 둘레 사진: 사진, 날짜, 자리, 기울기, 너비(%) */
export const JOURNAL: [string, string, string, number, number][] = [
  ["latte", "10.02", "left:2%;top:4%", -6, 22],
  ["dumplings", "10.03", "right:3%;top:0", 5, 20],
  ["ramen", "10.08", "left:0;top:42%", 4, 19],
  ["tteokbokki-bowl", "10.11", "right:0;top:36%", -4, 21],
  ["skewers", "10.17", "left:6%;bottom:2%", -3, 20],
  ["bibimbap", "10.22", "right:5%;bottom:0", 6, 22],
];

/** 분기 리캡 공유 카드 — 종이 · 먹색 · 계절색 · 쪽빛, 봄 · 여름 · 가을 · 겨울 */
export const SHARE = [
  { name: "종이", range: "MAR — MAY · 봄", season: "봄 식탁", meals: 38, reg: "아침빵집", hood: "성수", first: "12곳", bg: "#f6f3ec", ink: "#1c1a17", sub: "#6b665e", line: "rgba(28,26,23,.2)" },
  { name: "먹색", range: "JUN — AUG · 여름", season: "여름 식탁", meals: 47, reg: "느린커피", hood: "연남", first: "19곳", bg: "#1c1a17", ink: "#fbfaf6", sub: "#cdc6b8", line: "rgba(251,250,246,.35)" },
  { name: "계절색", range: "SEP — NOV · 가을", season: "가을 식탁", meals: 52, reg: "한그릇", hood: "을지로", first: "16곳", bg: "#b4552d", ink: "#fbfaf6", sub: "#f2e0d5", line: "rgba(251,250,246,.35)" },
  { name: "쪽빛", range: "DEC — FEB · 겨울", season: "겨울 식탁", meals: 41, reg: "하루라멘", hood: "용산", first: "9곳", bg: "#4f6b7a", ink: "#fbfaf6", sub: "#e6ebec", line: "rgba(251,250,246,.35)" },
];

export const POINTS: [string, string][] = [
  ["초대 코드 하나로", "6자리 코드를 보내면 둘만의 기록장이 따로 열려요. 무료예요. 각자의 개인 기록은 그대로 남아요."],
  ["사귄 날부터 세는 날들", "캘린더 머리에 D+N이 붙고, 100일과 1주년 같은 기념일엔 그날 먹은 한 끼를 함께 꺼내 봐요."],
  ["같은 한 끼, 두 개의 한 줄", "같은 자리에서 먹어도 기억은 조금씩 달라요. 둘이 각자 한 줄과 별점을 남겨요."],
  ["둘 다 쓰면 채워지는 도장", "한 사람만 쓰면 반쪽 도장. 상대가 잊었다면 「콕 찌르기」로 살짝 알려 주세요."],
];

/** 마지막 장의 사진 부채: 사진, 기울기, 자리, 날짜 */
export const FAN: [string, number, number, string][] = [
  ["kimchi", -16, -2, "09.06"],
  ["ramen", -8, -1, "10.08"],
  ["hero-table", 0, 0, "10.22"],
  ["latte", 8, 1, "10.12"],
  ["tteokbokki-bowl", 16, 2, "10.19"],
];

export const NAV_SECTIONS = (
  [
    ["capture", "기록하기"],
    ["map", "지도"],
    ["diary", "캘린더"],
    ["recommend", "추천"],
    ["labels", "라벨"],
    ["community", "커뮤니티"],
  ] as const
).map(([id, label]) => ({ href: "#" + id, label }));

export const FOOT_SECTIONS = (
  [
    ["capture", "기록하기"],
    ["map", "지도"],
    ["diary", "캘린더"],
    ["wishlist", "위시리스트"],
    ["recommend", "추천"],
    ["together", "연인 기록"],
    ["labels", "도장과 라벨"],
    ["community", "커뮤니티"],
  ] as const
).map(([id, label]) => ({ href: "#" + id, label }));

/** 추천 탭의 세 방식 (앱 app/(tabs)/recommend.tsx) */
export const REC_MODES = [
  ["now", "지금 뭐 먹지", "지금 위치와 시각으로 다섯 곳. 왜 골랐는지 한 줄씩 붙여요. 마음에 안 들면 「다시 추천」."],
  ["browse", "둘러보기", "당장이 아니라 나중에 갈 곳. 사람들이 이어서 간 코스, 도장을 모으는 투어, 다시 가는 사람이 많은 곳."],
  ["games", "랜덤 게임", "그래도 못 고르겠다면 감자튀김 · 피자 · 구슬 경주 · 줄다리기로 정해요."],
] as const;

/** 「지금 뭐 먹지」 다섯 곳 — px · py 는 추천 지도(public/map/rec.jpg) 위 핀 자리(%) */
export const PICKS = [
  { name: "한그릇", meta: "한식 · 180m", px: 32.7, py: 8, why: ["180m 거리라 가까워요", "기록에서 좋게 평가한 한식 · 2곳", "점심에 인증이 많은 곳이에요"] },
  { name: "빨간냄비", meta: "분식 · 420m", px: 85, py: 63.6, why: ["420m 거리예요", "친구 2명이 인증한 곳이에요", "자주 가는 동네 · 중구"] },
  { name: "온기만두", meta: "중식 · 650m", px: 56.9, py: 20.3, why: ["650m 거리예요", "점심에 인증이 많은 곳이에요", "아직 안 가 본 식당이에요"] },
  { name: "하루라멘", meta: "일식 · 1.2km", px: 30.6, py: 27.1, why: ["1.2km 거리예요", "기록에서 좋게 평가한 일식 · 3곳", "비 오는 날 많이 가요"] },
  { name: "오솔길", meta: "양식 · 900m", px: 12.5, py: 46.6, why: ["900m 거리예요", "다시 가는 사람이 많은 곳이에요", "기록에서 좋게 평가한 양식 · 2곳"] },
];
export const PICK_COLORS = ["#b4552d", "#c07a2e", "#9a4a52", "#5f7a8a", "#7a6a9a"];
export const REVISITS: [string, string, number][] = [
  ["든든국밥", "한식 · 450m · 인증 88명", 71],
  ["한그릇", "한식 · 180m · 인증 52명", 64],
  ["골목커피", "커피 · 220m · 인증 120명", 58],
];

/** 도장 수에 따른 라벨 단계 */
export const BOWL_NEEDS = [1, 5, 10, 30, 50, 100, 200, 300];

/** 커뮤니티 랭킹 다섯 가지: id, 이름, 기준 */
export const BOARDS: [string, string, string][] = [
  ["verified", "인증왕", "인증한 방문 수"],
  ["explorer", "탐험가", "처음 가 본 가게 수"],
  ["regular", "단골", "한 가게에 다시 간 횟수"],
  ["district", "동네 넓히기", "인증한 구(區) 수"],
  ["streak", "꾸준함", "기록을 남긴 주 연속"],
];
export const PEOPLE: [string, string][] = [
  ["보리차", "종로 보안관"],
  ["모과", "MZ맛잘알"],
  ["나", "삼고초려"],
  ["솔방울", "중구 러버"],
  ["도토리", "하루 세 끼"],
];
export const COMMUNITY = [
  { en: "FRIENDS", title: "친구 소식", body: "내 기록 하나를 골라 사진과 한 줄을 올리면 친구들에게 보여요. 공감과 댓글로 답하고, 마음에 드는 곳은 위시리스트에 바로 담아요." },
  { en: "GALLERY", title: "사진으로 둘러보기", body: "인증된 한 끼의 사진을 모아 보여 줘요. 가게나 메뉴 이름으로 찾아볼 수 있어요." },
  { en: "RANKING", title: "다섯 가지 랭킹", body: "친구끼리, 또는 전체에서. 이번 주 · 이번 달 · 이번 분기로 나눠 겨뤄요." },
  { en: "BOARD", title: "코스와 이야기", body: "다녀온 가게들을 묶어 코스로 올리면, 지도 위에 번호로 순서가 그려져요." },
];
