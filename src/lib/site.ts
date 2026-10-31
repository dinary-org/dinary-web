/**
 * 사이트 전체에서 쓰는 값.
 * 개인정보 처리방침 · 이용약관 · 계정 삭제 안내 · 문의 메일은 dinary-app 저장소의 site/ 페이지와 같은 값입니다.
 */
export const site = {
  name: "DINARY",
  // 정식 도메인이 생기면 NEXT_PUBLIC_SITE_URL 로 정하세요. 없으면 Vercel 프로덕션 주소를 씁니다.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  title: "DINARY — 먹은 순간이, 우리의 이야기가 되도록",
  description:
    "DINARY는 사진으로 쓰는 식사 일기예요. 셔터 한 번으로 그날의 한 끼가 가게와 날짜, 지도 위의 한 점으로 남아요. 별점이 아니라 기억을 모으는 앱.",
  contactEmail: "contact.dinary@gmail.com",
  privacyUrl: "https://dinary-org.github.io/dinary-app/privacy/",
  termsUrl: "https://dinary-org.github.io/dinary-app/terms/",
  deleteAccountUrl: "https://dinary-org.github.io/dinary-app/delete-account/",
  /** 공개되면 채우세요. 비어 있으면 App Store 단추는 출시 소식 메일로 이어집니다. */
  appStoreUrl: null as string | null,
  /** 공개되면 스토어 주소로 바꾸세요. 비어 있으면 Google Play 단추는 베타 테스터 안내(/beta)로 이어집니다. */
  playStoreUrl: null as string | null,
} as const;

export const newsMailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent("DINARY 출시 소식이 궁금해요")}`;

/** 다운로드 단추가 실제로 가리키는 곳. */
export const storeLinks = {
  appStore: site.appStoreUrl ?? newsMailto,
  playStore: site.playStoreUrl ?? "/beta",
};
