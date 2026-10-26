import { NextResponse, type NextRequest } from "next/server";
import { isLandingPublic } from "@/lib/visibility";

// 랜딩이 숨겨져 있을 때도 열어 두는 주소. /beta 는 next.config.ts 에서 /beta.html 로 바꿔 줍니다.
const openPaths = new Set(["/beta", "/beta/", "/beta.html", "/robots.txt"]);

const placeholder = `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>준비 중이에요</title></head><body style="margin:0;display:grid;place-items:center;min-height:100vh;font-family:-apple-system,sans-serif"><p>준비 중이에요</p></body></html>`;

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
