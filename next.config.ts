import type { NextConfig } from "next";

// code-server strips this prefix before forwarding requests to Next.js.
const devProxyPath = process.env.NODE_ENV === "development"
  ? process.env.NEXT_DEV_PROXY_PATH ?? ""
  : "";

const nextConfig: NextConfig = {
  assetPrefix: devProxyPath || undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    path: `${devProxyPath}/_next/image`,
  },
  async rewrites() {
    return [
      // 베타 테스터 안내 페이지. Next 레이아웃 없이 정적 HTML 그대로 내보냅니다.
      { source: "/beta", destination: "/beta.html" },
      { source: "/beta/", destination: "/beta.html" },
      { source: "/beta/android", destination: "/beta.html" },
      { source: "/beta/ios", destination: "/beta-ios.html" },
      // 개인정보 처리방침 · 이용약관 · 계정 삭제 안내. dinary-app 의 site/ 페이지를 옮겨 온 정적 HTML 입니다.
      // 앱은 끝에 / 가 붙은 주소(/privacy/)를 열어 /privacy 로 넘어옵니다.
      { source: "/privacy", destination: "/privacy/index.html" },
      { source: "/terms", destination: "/terms/index.html" },
      { source: "/delete-account", destination: "/delete-account/index.html" },
      // 친구 초대(/invite?id=…) · 모임 초대(/meetup?code=…) 링크. 앱을 dinary:// 로 열어 주는 중간 페이지입니다.
      { source: "/invite", destination: "/invite/index.html" },
      { source: "/meetup", destination: "/meetup/index.html" },
      // 기록 공유(/r?t=…) 링크 — 받은 사람의 DINARY 앱에서 그 기록 자세히 화면을 엽니다. 기록 내용은 웹에 보이지 않아요.
      { source: "/r", destination: "/r/index.html" },
      ...(devProxyPath
        ? [{ source: `${devProxyPath}/:path*`, destination: "/:path*" }]
        : []),
    ];
  },
};

export default nextConfig;
