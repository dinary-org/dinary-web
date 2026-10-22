import type { PhotoKey } from "./photos";

/** 앱 src/lib/types.ts 의 CATEGORY_COLORS 와 같은 값. */
export const CATEGORY_COLORS = {
  한식: "#b4552d",
  중식: "#9a4a52",
  일식: "#5f7a8a",
  양식: "#7a6a9a",
  분식: "#c07a2e",
  술집: "#3f4f6a",
  커피: "#7a5c42",
  디저트: "#b06a86",
  베이커리: "#a8853f",
} as const;

export type Category = keyof typeof CATEGORY_COLORS;

/** 목업에만 쓰는 가상의 가게들 — 실제 가게·기록이 아닙니다. x, y 는 지도 화면(360×796) 위 위치. */
export type DemoPlace = {
  id: string;
  name: string;
  category: Category;
  area: string;
  photo: PhotoKey;
  date: string;
  visits: number;
  rating: number;
  x: number;
  y: number;
  kind: "restaurant" | "cafe";
};

export const PLACES: DemoPlace[] = [
  { id: "a", name: "을지로 골목집", category: "한식", area: "을지로", photo: "bibimbap", date: "10.22", visits: 3, rating: 4.5, x: 196, y: 262, kind: "restaurant" },
  { id: "b", name: "신당 떡볶이", category: "분식", area: "신당", photo: "tteokbokkiBowl", date: "10.19", visits: 5, rating: 4, x: 286, y: 318, kind: "restaurant" },
  { id: "c", name: "서촌 만둣집", category: "중식", area: "서촌", photo: "dumplings", date: "10.15", visits: 1, rating: 4.5, x: 92, y: 172, kind: "restaurant" },
  { id: "d", name: "연남 커피", category: "커피", area: "연남", photo: "latte", date: "10.12", visits: 7, rating: 5, x: 58, y: 300, kind: "cafe" },
  { id: "e", name: "해방촌 라멘", category: "일식", area: "해방촌", photo: "ramen", date: "10.08", visits: 2, rating: 4, x: 214, y: 392, kind: "restaurant" },
  { id: "f", name: "한남 파스타", category: "양식", area: "한남", photo: "pasta", date: "10.04", visits: 1, rating: 3.5, x: 300, y: 176, kind: "restaurant" },
  { id: "g", name: "익선 디저트", category: "디저트", area: "익선", photo: "dessert", date: "09.28", visits: 2, rating: 4.5, x: 150, y: 120, kind: "cafe" },
  { id: "h", name: "종로 꼬치", category: "술집", area: "종로", photo: "skewers", date: "09.21", visits: 4, rating: 4, x: 128, y: 356, kind: "restaurant" },
  { id: "i", name: "성수 베이커리", category: "베이커리", area: "성수", photo: "frenchToast", date: "09.14", visits: 3, rating: 4.5, x: 322, y: 248, kind: "cafe" },
];

export const placeById = (id: string) => PLACES.find((p) => p.id === id)!;
