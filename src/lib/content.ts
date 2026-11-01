/**
 * 목업에만 쓰는 가상의 가게 · 기록 · 문구(Claude Design 「DINARY Website」 스크립트와 같은 값). 실제 가게 · 기록이 아닙니다.
 * 사진은 public/img/<이름>.jpg 입니다.
 */
export const P = "/img/";

export type Kind = "restaurant" | "cafe";

/** 분류 색. 앱 src/lib/types.ts 의 CATEGORY_COLORS 와 같은 값. */
export const CAT: Record<string, string> = {
  한식: "#b4552d", 중식: "#9a4a52", 일식: "#5f7a8a", 양식: "#7a6a9a", 분식: "#c07a2e",
  술집: "#3f4f6a", 커피: "#7a5c42", 디저트: "#b06a86", 베이커리: "#a8853f",
};

/** 지도 핀 · 캘린더 막대 색(술집만 CAT 과 다름). 앱 src/lib/types.ts 의 CATEGORY_COLORS 기준. */
export const PIN_C: Record<string, string> = {
  한식: "#b4552d", 중식: "#9a4a52", 일식: "#5f7a8a", 양식: "#7a6a9a", 분식: "#c07a2e",
  술집: "#5f7a8a", 커피: "#7a5c42", 디저트: "#b06a86", 베이커리: "#a8853f",
};

export const PLACES: { id: string; name: string; category: string; photo: string; date: string; visits: number; kind: Kind }[] = [
  { id: "a", name: "한그릇", category: "한식", photo: "bibimbap", date: "10.22", visits: 3, kind: "restaurant" },
  { id: "b", name: "빨간냄비", category: "분식", photo: "tteokbokki-bowl", date: "10.11", visits: 5, kind: "restaurant" },
  { id: "c", name: "온기만두", category: "중식", photo: "dumplings", date: "10.03", visits: 1, kind: "restaurant" },
  { id: "e", name: "하루라멘", category: "일식", photo: "ramen", date: "10.08", visits: 2, kind: "restaurant" },
  { id: "h", name: "모닥꼬치", category: "술집", photo: "skewers", date: "10.17", visits: 4, kind: "restaurant" },
  { id: "d", name: "느린커피", category: "커피", photo: "latte", date: "10.02", visits: 7, kind: "cafe" },
  { id: "g", name: "포근당", category: "디저트", photo: "dessert", date: "09.28", visits: 2, kind: "cafe" },
  { id: "i", name: "아침빵집", category: "베이커리", photo: "french-toast", date: "09.14", visits: 3, kind: "cafe" },
];

/** 가게별 [주소, 메뉴, 체감 가격(돼지 수)] */
export const EXTRA: Record<string, [string, string, number]> = {
  a: ["서울 중구 을지로", "돌솥비빔밥", 2], b: ["서울 마포구 망원동", "떡볶이 · 튀김", 1], c: ["서울 종로구 익선동", "군만두", 2],
  e: ["서울 용산구 한강로", "돈코츠라멘", 2], h: ["서울 마포구 연남동", "닭꼬치", 3], d: ["서울 성동구 성수동", "플랫화이트", 2],
  g: ["서울 종로구 익선동", "딸기 케이크", 3], i: ["서울 성동구 성수동", "프렌치토스트", 2],
};

/** 지도 화면 위 핀 위치(%)와 별점 */
export const PIN_XY: Record<string, [number, number, number]> = {
  a: [44, 47, 4.5], b: [76, 58, 4.0], c: [26, 31, 4.0], e: [28, 66, 4.0], h: [70, 30, 4.5], d: [26, 52, 4.5], g: [62, 34, 4.0], i: [72, 62, 4.5],
};

export const DOW = ["일", "월", "화", "수", "목", "금", "토"];

/** 10월 캘린더에 찍힌 기록: 날짜 → [가게, 분류] */
export const CAL: Record<number, [string, string]> = {
  2: ["느린커피", "커피"], 3: ["온기만두", "중식"], 8: ["하루라멘", "일식"], 10: ["오솔길", "양식"],
  11: ["빨간냄비", "분식"], 17: ["모닥꼬치", "일식"], 22: ["한그릇", "한식"],
};

/** 흐르는 사진 띠: [사진, 날짜, 한 줄, 기울기] */
export const STRIP: [string, string, string, number][] = [
  ["tteokbokki-bowl", "10.11", "비 오는 날엔 떡볶이", -3], ["latte", "10.02", "일곱 번째 플랫화이트", 2], ["dumplings", "10.03", "얇은 피, 꽉 찬 만두", -1.5],
  ["ramen", "10.08", "늦게 끝난 날의 라멘", 2.5], ["dessert", "09.28", "생일 다음 날 케이크", -2], ["skewers", "10.17", "오랜만에 다 같이", 1.5],
  ["french-toast", "09.14", "느지막한 토요일 아침", -2.5], ["kimchi", "10.22", "반찬이 정갈한 점심", 2], ["sushi", "09.27", "처음 가 본 오마카세", -1],
];

export const STEPS = [
  { verb: "찍고", title: "음식이 나오면, 카메라부터.", body: "사진 한 장으로 기록을 시작하세요.", note: "그 자리에서 찍은 사진에 방문 인증이 붙어요." },
  { verb: "찾고", title: "지금 위치에서 가까운 가게를 찾아 드려요.", body: "셔터를 누르는 순간 위치를 읽어, 50m 안의 가게를 골라 드려요.", note: "" },
  { verb: "남기고", title: "방문이 인증돼요.", body: "가게와 위치, 시간이 사진 한 장에 묶여 기록장에 들어가요.", note: "" },
  { verb: "쓴다", title: "한 줄이면 충분해요.", body: "메뉴와 별점, 짧은 메모만 더하면 그날이 오래 선명해요. 나중에 써도 괜찮아요.", note: "" },
];

/** 캘린더 장 주변에 흩어진 사진: [사진, 날짜, 위치 CSS, 기울기, 폭 %] */
export const JOURNAL: [string, string, string, number, number][] = [
  ["latte", "10.02", "left:2%;top:4%", -6, 22], ["dumplings", "10.03", "right:3%;top:0", 5, 20], ["ramen", "10.08", "left:0;top:42%", 4, 19],
  ["tteokbokki-bowl", "10.11", "right:0;top:36%", -4, 21], ["skewers", "10.17", "left:6%;bottom:2%", -3, 20], ["bibimbap", "10.22", "right:5%;bottom:0", 6, 22],
];

export const SHARE = [
  { name: "종이", range: "MAR — MAY · 봄", season: "봄 식탁", meals: 38, reg: "아침빵집", hood: "성수", first: "12곳", bg: "#f6f3ec", ink: "#1c1a17", sub: "#6b665e", line: "rgba(28,26,23,.2)" },
  { name: "먹색", range: "JUN — AUG · 여름", season: "여름 식탁", meals: 47, reg: "느린커피", hood: "연남", first: "19곳", bg: "#1c1a17", ink: "#fbfaf6", sub: "#cdc6b8", line: "rgba(251,250,246,.35)" },
  { name: "계절색", range: "SEP — NOV · 가을", season: "가을 식탁", meals: 52, reg: "한그릇", hood: "을지로", first: "16곳", bg: "#b4552d", ink: "#fbfaf6", sub: "#f2e0d5", line: "rgba(251,250,246,.35)" },
  { name: "쪽빛", range: "DEC — FEB · 겨울", season: "겨울 식탁", meals: 41, reg: "하루라멘", hood: "용산", first: "9곳", bg: "#4f6b7a", ink: "#fbfaf6", sub: "#e6ebec", line: "rgba(251,250,246,.35)" },
];

export const POINTS: [string, string][] = [
  ["둘만의 기록장", "연인을 맺으면 둘만의 기록장이 따로 열려요. 각자의 개인 기록은 그대로 남아요."],
  ["사귄 날부터 세는 날들", "캘린더에 D+N이 붙고, 100일과 1주년 같은 기념일엔 그날 먹은 한 끼를 함께 꺼내 봐요."],
  ["같은 한 끼, 두 개의 한 줄", "같은 자리에서 먹어도 기억은 조금씩 달라요. 둘이 각자 한 줄과 별점을 남겨요."],
  ["둘 다 쓰면 채워지는 도장", "한 사람만 쓰면 반쪽 도장. 상대가 잊었다면 「콕 찌르기」로 살짝 알려 주세요."],
];

/** 우리의 기념일: [이름, 날짜, 사진?, 가게?, 한 줄?] — 사진이 없으면 다가오는 날 */
export const ANNIV: [string, string, string?, string?, string?][] = [
  ["600일", "27.01.03"],
  ["500일", "26.09.25", "tteokbokki-bowl", "빨간냄비", "분식 · 비 오는 날엔 역시 떡볶이"],
  ["400일", "26.06.17", "pasta", "오솔길", "양식 · 창가 자리에서 파스타 두 접시"],
  ["1주년", "26.05.14", "dessert", "포근당", "디저트 · 초 하나 꽂은 딸기 케이크"],
  ["300일", "26.03.10", "ramen", "하루라멘", "일식 · 퇴근길에 만나 국물 한 그릇"],
];

/** 마지막 장의 부채꼴 사진: [사진, 기울기, 자리, 날짜] */
export const FAN: [string, number, number, string][] = [
  ["kimchi", -16, -2, "09.06"], ["ramen", -8, -1, "10.08"], ["hero-table", 0, 0, "10.22"], ["latte", 8, 1, "10.12"], ["tteokbokki-bowl", 16, 2, "10.19"],
];

/** 위쪽 메뉴 */
export const SECTIONS: [string, string][] = [["capture", "기록하기"], ["map", "지도"], ["diary", "캘린더"], ["recommend", "추천"], ["labels", "라벨"], ["community", "커뮤니티"]];
/** 바닥글 · 모바일 메뉴 */
export const FOOT: [string, string][] = [
  ["capture", "기록하기"], ["map", "지도"], ["diary", "캘린더"], ["wishlist", "위시리스트"], ["recommend", "추천"],
  ["together", "연인 기록"], ["labels", "도장과 라벨"], ["community", "커뮤니티"],
];

export const REC_MODES: [string, string, string][] = [
  ["now", "지금 뭐 먹지", "지금 위치와 시각으로 다섯 곳. 왜 골랐는지 한 줄씩 붙여요. 마음에 안 들면 「다시 추천」."],
  ["browse", "둘러보기", "사람들이 이어서 간 코스와 도장을 모으는 투어, 다시 찾는 사람이 많은 곳을 둘러봐요."],
  ["games", "랜덤 게임", "그래도 못 고르겠다면 감자튀김 · 피자 · 구슬 경주 · 줄다리기로 정해요."],
];

export const PICKS = [
  { name: "한그릇", photo: "bibimbap", meta: "한식 · 180m", px: 36.0, py: 37.1, why: ["180m 거리라 가까워요", "기록에서 좋게 평가한 한식 · 2곳", "점심에 인증이 많은 곳이에요"] },
  { name: "빨간냄비", photo: "tteokbokki-bowl", meta: "분식 · 420m", px: 84, py: 64, why: ["420m 거리예요", "친구 2명이 인증한 곳이에요", "자주 가는 동네 · 중구"] },
  { name: "온기만두", photo: "dumplings", meta: "중식 · 650m", px: 56.5, py: 53.2, why: ["650m 거리예요", "점심에 인증이 많은 곳이에요", "아직 안 가 본 식당이에요"] },
  { name: "하루라멘", photo: "ramen", meta: "일식 · 1.2km", px: 34.4, py: 57.8, why: ["1.2km 거리예요", "기록에서 좋게 평가한 일식 · 3곳", "비 오는 날 많이 가요"] },
  { name: "오솔길", photo: "pasta", meta: "양식 · 900m", px: 19.2, py: 72.1, why: ["900m 거리예요", "다시 가는 사람이 많은 곳이에요", "기록에서 좋게 평가한 양식 · 2곳"] },
];

export const REVISITS: [string, string, number][] = [
  ["든든국밥", "한식 · 450m · 인증 88명", 71], ["한그릇", "한식 · 180m · 인증 52명", 64], ["골목커피", "커피 · 220m · 인증 120명", 58],
];

/** 도장 수가 이만큼이 되면 라벨 */
export const BOWL_NEEDS = [1, 5, 10, 30, 50, 100, 200, 300];

/** 랭킹: [id, 이름, 기준] */
export const BOARDS: [string, string, string][] = [
  ["verified", "인증왕", "인증한 방문 수"],
  ["explorer", "탐험가", "처음 가 본 가게 수"],
  ["regular", "단골", "한 가게에 다시 간 횟수"],
  ["district", "동네 넓히기", "인증한 구(區) 수"],
  ["streak", "꾸준함", "기록을 남긴 주 연속"],
];

export const PEOPLE: [string, string][] = [["보리차", "종로 보안관"], ["모과", "MZ맛잘알"], ["나", "삼고초려"], ["솔방울", "중구 러버"], ["도토리", "하루 세 끼"]];

export const COMMUNITY = [
  { id: "friends", en: "FRIENDS", title: "친구 소식", body: "내 기록 하나를 골라 사진과 한 줄을 올리면 친구들에게 보여요. 공감과 댓글로 답하고, 마음에 드는 곳은 위시리스트에 바로 담아요." },
  { id: "gallery", en: "GALLERY", title: "사진으로 둘러보기", body: "인증된 한 끼의 사진을 모아 보여 줘요. 가게나 메뉴 이름으로 찾아볼 수 있어요." },
  { id: "ranking", en: "RANKING", title: "다섯 가지 랭킹", body: "친구끼리, 또는 전체에서. 이번 주 · 이번 달 · 이번 분기로 나눠 겨뤄요." },
  { id: "board", en: "BOARD", title: "게시판", body: "맛집 · 카페 · 자유 주제로 글을 올리고 이야기를 나눠요. 다녀온 가게를 붙이면 바로 찾아갈 수 있어요." },
];
