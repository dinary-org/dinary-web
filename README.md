# DINARY web

DINARY(사진으로 쓰는 식사 일기) 앱을 소개하는 한 페이지짜리 웹사이트입니다. 앱 저장소는 [dinary-org/dinary-app](https://github.com/dinary-org/dinary-app) 이고, 이 저장소와 따로 갑니다.

Next.js 16(App Router) · React 19 · TypeScript. 화면은 Claude Design 의 「DINARY Website」 디자인을 그대로 옮긴 것이라, 스타일은 디자인 값 그대로 인라인으로 적고 공통 값만 `src/app/globals.css` 에 둡니다(리셋 CSS 없음).

## 시작

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 프로덕션 빌드
npm run lint && npm run typecheck
```

## Vercel 에 올리기

Vercel 에서 이 저장소를 가져오면 Next.js 로 알아서 잡힙니다. `vercel.json` 이나 정적 내보내기(`output: "export"`)는 쓰지 않습니다 — `next/image` 최적화(AVIF/WebP, 크기별 이미지)를 쓰기 때문입니다.

환경 변수(선택):

| 이름 | 설명 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 정식 주소를 바꿀 때만. 기본값은 `https://dinary.app` 이고 canonical · OG · 사이트맵 주소에 씁니다. |

## 주소 · 검색 등록

- 정식 주소는 **https://dinary.app** (Vercel 에서 구입, DNS 도 Vercel). `www.dinary.app` 은 `dinary.app` 으로 308 넘김, `dinary-web.vercel.app` 도 그대로 열립니다(canonical 은 dinary.app).
- 검색 등록: Google Search Console · 네이버 서치어드바이저의 「HTML 태그」 확인 코드를 `src/lib/site.ts` 의 `googleVerification` · `naverVerification` 에 넣고 배포한 뒤 각 콘솔에서 「확인」, 사이트맵 `https://dinary.app/sitemap.xml` 을 제출합니다.

## 베타 참여 안내 · `/beta/ios` · `/beta/android`

랜딩은 프로덕션에서도 그대로 공개됩니다(예전의 「준비 중이에요」 화면과 `LANDING_PUBLIC` 변수는 없앴습니다). 사이트의 「베타 테스트 참여하기」 단추는 플랫폼별 안내로 이어집니다. 두 페이지 모두 Next 레이아웃 없이 나가는 정적 HTML 이고(`next.config.ts` 의 rewrite), 모양은 `public/beta.css`, 단계 완료 표시 · 링크 복사는 `public/beta.js` 입니다.

- **iOS** `/beta/ios` (`public/beta-ios.html`): ① [TestFlight 설치](https://apps.apple.com/app/testflight/id899247664) ② [베타 참여](https://testflight.apple.com/join/UwXMQ3Xq). 인스타그램 같은 앱 안 브라우저면 Safari 로 열라고, iPhone 이 아니면 iPhone 에서 열라고 안내합니다.
- **Android** `/beta/android` = `/beta` (`public/beta.html`, 인스타그램 스토리 링크): 인스타그램 앱 내 브라우저는 구글에 로그인돼 있지 않아 그룹 가입이 막히므로, `<head>` 첫 스크립트가 `intent://` 로 Chrome 에서 다시 엽니다. 그다음 ① [테스터 그룹](https://groups.google.com/g/dinary-testers) 가입 ② [Play 테스트 참여](https://play.google.com/apps/testing/app.dinary) ③ [Play 스토어에서 설치](https://play.google.com/store/apps/details?id=app.dinary).
- 두 페이지 모두 의견 보내는 곳(앱 안 프로필 → 문의, 인스타 DM @rlaxogus_31 · @yoon_yeahjun, contact.dinary@gmail.com)을 적어 두었습니다. 검색에는 나오지 않습니다(`noindex`).

## 바꿀 곳

- `src/lib/site.ts` — 문의 메일(contact.dinary@gmail.com), 개인정보 처리방침 · 이용약관 · 계정 삭제 안내 주소, **베타 참여 주소**(`betaLinks`). 사이트의 iPhone · Android 단추는 모두 여기를 가리킵니다. 정식 출시 후 스토어 주소로 바꾸면 됩니다.
- `src/lib/content.ts` — 목업에 쓰는 가상의 가게 · 기록 · 추천 · 랭킹 · 사람들.
- `src/components/sections/*` — 장마다 한 파일: Nav · Hero · Story · Capture(기록하기) · MapSection(지도) · Diary(캘린더 · 계절의 식탁) · Wishlist · Recommend(지금 뭐 먹지 · 둘러보기 · 랜덤 게임) · Together(연인 기록) · Labels(도장과 라벨) · Community(친구 · 갤러리 · 랭킹 · 게시판) · Closing · Footer · MobileBar(좁은 화면 다운로드 띠).
- `src/components/Phone.tsx` · `TabBar.tsx` · `RecordScreen.tsx` — 폰 목업(410×864 를 `--ph` 배율로 줄임), 앱 하단 탭 바, 기록 상세 화면.
- 화면 너비에 따른 값(폰 배율, 첫 화면 높이 등)은 `globals.css` 의 미디어 쿼리에 있습니다.

## 내용의 근거

모든 문구와 화면은 dinary-app 의 실제 기능에서 가져왔습니다(`app/capture.tsx`, `app/(tabs)/calendar.tsx`, `app/(tabs)/index.tsx`, `src/features/map/*`, `src/features/couple/*`, `src/features/notify/geofence.ts`, `src/features/recap/*`, `src/theme/index.ts`).

- 색 · 글꼴: 앱 `src/theme` 토큰 그대로(종이 #F6F3EC, 카드 #FBFAF6, 먹 #1C1A17, 벽돌 #B4552D …), 제목 고운바탕 Bold · 본문 Noto Sans KR · 라벨 JetBrains Mono.
- 화면 예시: 촬영(「지금 여기」) → 가게 찾기(「여기 어디예요?」, 50m) → 인증 완료(「방문이 인증되었습니다」, 도장) → 기록, 종이톤 지도와 물방울 핀 · 시트, 캘린더(카테고리 색 막대), 위시리스트와 근처 알림(앱 알림 문구 그대로), 연인 기록장(D+N, 우리의 한 줄, 우리 도장, 콕 찌르기), 분기 리캡 공유 카드(종이 · 먹색 · 계절색 · 쪽빛).
- 앱 화면은 실제 스크린숏이 아니라 다시 그린 예시이고, 가게 이름과 기록은 가상입니다. 사이트 바닥글에도 적어 두었습니다.
- 스토어 링크, 후기, 다운로드 수, 출시일은 쓰지 않았습니다. 2026-10-22 기준 App Store(KR) · Google Play 에 `app.dinary` 가 검색되지 않습니다.
- 개인정보 처리방침 · 이용약관 · 계정 삭제 안내는 dinary-app 의 `site/` 페이지를 옮겨 와 이 사이트에서 냅니다: `public/{privacy,terms,delete-account}/index.html` + `public/legal.css`, 주소는 `/privacy` · `/terms` · `/delete-account` (`next.config.ts` 의 rewrite).

## 자산

- 로고: 앱 `assets/icon.png` (`public/brand/icon.png`, 파비콘 `src/app/icon.png`).
- 음식 사진: [Unsplash 라이선스](https://unsplash.com/license) 사진을 디자인에서 줄인 파일 그대로 `public/img` 에 두었습니다. 지도 배경은 `public/map`(seoul.jpg · rec.jpg), 체감가격 돼지는 앱의 금색 돼지 저금통(`public/piggy.png`, 64px 로 줄임).
- 공유 카드(`src/app/opengraph-image.tsx`)는 빌드 때 그립니다. 글꼴은 그 문구의 글자만 담은 고운돋움 부분 파일(`src/assets/fonts/gowun-og.ttf`, SIL OFL)이라 문구를 바꾸면 다시 받아야 합니다:
  `https://fonts.googleapis.com/css2?family=Gowun+Dodum&text=<문구>` 를 오래된 User-Agent(예: `Mozilla/4.0`)로 열면 TTF 주소가 나옵니다.

## 접근성 · 동작

- 건너뛰기 링크, 랜드마크와 제목 구조, 탭 단추에 `role="tab"` · `aria-selected`, 키보드 포커스 표시.
- `prefers-reduced-motion` 이면 흐르는 사진 띠 · 등장 애니메이션 · 「기록하기」 자동 넘김을 끕니다.
- 분석 도구, 쿠키, 입력 양식은 없습니다.
