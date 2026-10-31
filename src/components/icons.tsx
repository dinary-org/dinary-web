/** 앱 디자인 시스템(dinary-mobile)의 아이콘 — 24×24, 선 1.6 */
type P = { size?: number; stroke?: string; strokeWidth?: number };
const base = (size: number, stroke: string, strokeWidth: number) =>
  ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" }) as const;

export const FlashIcon = ({ size = 19, stroke = "#fbfaf6", strokeWidth = 1.6 }: P) => (
  <svg {...base(size, stroke, strokeWidth)} aria-hidden><path d="M13 2.8 5.5 13.2h5.3L10 21.2l8-10.8h-5.4L13 2.8Z" /></svg>
);
export const FlipIcon = ({ size = 20, stroke = "#fbfaf6", strokeWidth = 1.6 }: P) => (
  <svg {...base(size, stroke, strokeWidth)} aria-hidden>
    <path d="M20 11a8 8 0 0 0-14.4-4.2L4 8.6M4 4v4.6h4.6" />
    <path d="M4 13a8 8 0 0 0 14.4 4.2L20 15.4M20 20v-4.6h-4.6" />
  </svg>
);
export const MapPinIcon = ({ size = 21, stroke = "#000", strokeWidth = 1.6 }: P) => (
  <svg {...base(size, stroke, strokeWidth)} aria-hidden>
    <path d="M12 21s7-6.3 7-11.3A7 7 0 005 9.7C5 14.7 12 21 12 21z" />
    <circle cx="12" cy="9.7" r="2.4" />
  </svg>
);
