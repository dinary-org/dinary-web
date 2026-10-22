import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "DINARY — 먹은 순간이, 우리의 이야기가 되도록.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* 글꼴은 이 그림에 쓰는 글자만 담은 고운돋움 부분 파일입니다(src/assets/fonts). 문구를 바꾸면 다시 받아야 합니다 — README 참고. */
export default async function OpenGraphImage() {
  const assets = path.join(process.cwd(), "src/assets");
  const [font, photo] = await Promise.all([readFile(path.join(assets, "fonts/gowun-og.ttf")), readFile(path.join(assets, "og-photo.jpg"))]);
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f6f3ec", fontFamily: "Gowun", color: "#1c1a17" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 0 72px 80px", width: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 8, color: "#b4552d" }}>
            <div style={{ width: 40, height: 2, background: "#b4552d" }} />
            DINARY
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.2, letterSpacing: -2 }}>
            <span>먹은 순간이,</span>
            <span>우리의 이야기가</span>
            <span>되도록.</span>
          </div>
          <div style={{ fontSize: 28, color: "#6b665e" }}>사진으로 쓰는 식사 일기</div>
        </div>
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#fbfaf6",
              padding: "14px 14px 52px",
              transform: "rotate(4deg)",
              boxShadow: "0 30px 60px -20px rgba(28,26,23,.45)",
            }}
          >
            <img src={src} width={340} height={425} alt="" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Gowun", data: font, style: "normal", weight: 400 }] },
  );
}
