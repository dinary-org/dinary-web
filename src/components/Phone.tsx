import type { CSSProperties, ReactNode } from "react";

/**
 * 폰 목업. 410×864 프레임(화면 390×844)을 그대로 그리고 --ph(작은 폰은 --ph-sm) 배율로 줄입니다.
 * 배율은 globals.css 의 미디어 쿼리가 정합니다 — 1024px 이상 0.8 · 640px 이상 0.72 · 그 아래 0.62.
 */
export default function Phone({ small, style, screenStyle, children }: { small?: boolean; style?: CSSProperties; screenStyle?: CSSProperties; children: ReactNode }) {
  return (
    <div className={small ? "phone phone-sm" : "phone"} style={style}>
      <div className="phone-frame">
        <div className="phone-screen" style={screenStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}
