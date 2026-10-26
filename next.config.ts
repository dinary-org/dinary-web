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
      ...(devProxyPath
        ? [{ source: `${devProxyPath}/:path*`, destination: "/:path*" }]
        : []),
    ];
  },
};

export default nextConfig;
