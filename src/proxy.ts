import { NextResponse, type NextRequest } from "next/server";
import { isLandingPublic } from "@/lib/visibility";

// 랜딩이 숨겨져 있을 때도 열어 두는 주소. /beta 는 next.config.ts 에서 /beta.html 로 바꿔 줍니다.
const openPaths = new Set(["/beta", "/beta/", "/beta.html", "/robots.txt"]);

// 숨김 상태의 안내. 앱 자산 없이 이 문자열만으로 그립니다(색 · 글꼴은 globals.css 의 종이 · 먹 · 벽돌).
const placeholder = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>DINARY</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=JetBrains+Mono&display=swap">
<style>
  body { margin:0; min-height:100vh; display:grid; place-items:center; padding:0 16px; box-sizing:border-box;
         background:#f6f3ec; color:#1c1a17; text-align:center; font-family:"Gowun Dodum","Noto Sans KR",sans-serif; }
  .mark { font-family:"JetBrains Mono",monospace; font-size:13px; letter-spacing:.32em; padding-left:.32em; margin:0 0 28px; }
  h1 { font-weight:400; font-size:clamp(26px,7vw,36px); line-height:1.4; margin:0; }
  .soon { display:inline-block; margin-top:28px; padding:6px 14px; border:1px solid #b4552d; border-radius:999px;
          color:#b4552d; font-size:14px; }
</style>
</head>
<body>
<main>
  <p class="mark">DINARY</p>
  <h1>찍는 순간 기록되는<br>나만의 맛집 일기</h1>
  <p class="soon">준비 중이에요</p>
</main>
</body>
</html>`;

export function proxy(request: NextRequest) {
  if (isLandingPublic() || openPaths.has(request.nextUrl.pathname)) return NextResponse.next();
  return new NextResponse(placeholder, {
    status: 404,
    headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex", "Cache-Control": "no-store" },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|beta\\.html$).*)"],
};
