/**
 * 사이트 전체에서 쓰는 값.
 * 개인정보 처리방침 · 이용약관 · 계정 삭제 안내는 이 사이트의 public/{privacy,terms,delete-account} 에 있습니다.
 */
export const site = {
  name: "DINARY",
  // 정식 주소. www.dinary.app 은 Vercel 에서 이 주소로 넘겨 줍니다. 다른 주소로 바꿀 때만 NEXT_PUBLIC_SITE_URL 을 쓰세요.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dinary.app",
  title: "DINARY — 먹은 순간이, 우리의 이야기가 되도록",
  description:
    "DINARY는 사진으로 쓰는 식사 일기예요. 셔터 한 번으로 그날의 한 끼가 가게와 날짜, 지도 위의 한 점으로 남아요. 별점이 아니라 기억을 모으는 앱.",
  contactEmail: "contact.dinary@gmail.com",
  privacyUrl: "/privacy",
  termsUrl: "/terms",
  deleteAccountUrl: "/delete-account",
  /**
   * 검색 등록 확인 코드. Google Search Console · 네이버 서치어드바이저의 「HTML 태그」 방식에서
   * content="…" 안의 값만 넣으면 모든 페이지 <head> 에 확인 태그가 들어갑니다. 비어 있으면 넣지 않습니다.
   */
  googleVerification: "",
  naverVerification: "",
} as const;

/**
 * 베타 테스트 참여 안내 페이지(public/beta-ios.html · public/beta.html).
 * 정식 출시 후 스토어로 바꿀 때는 이 두 주소만 바꾸면 사이트의 모든 단추가 따라갑니다.
 */
export const betaLinks = {
  ios: "/beta/ios",
  android: "/beta/android",
};
