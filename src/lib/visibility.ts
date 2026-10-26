/**
 * 랜딩을 공개할지. Vercel 프로덕션에서는 LANDING_PUBLIC=true 일 때만 보이고,
 * 프리뷰 배포 · 로컬에서는 늘 보입니다. 숨겨져 있으면 /beta 만 열립니다(src/proxy.ts).
 */
export function isLandingPublic(): boolean {
  return process.env.VERCEL_ENV !== "production" || process.env.LANDING_PUBLIC === "true";
}
