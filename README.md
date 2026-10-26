# DINARY web

DINARY(사진으로 쓰는 식사 일기) 앱을 소개하는 한 페이지짜리 웹사이트입니다. 앱 저장소는 [dinary-org/dinary-app](https://github.com/dinary-org/dinary-app) 이고, 이 저장소와 따로 갑니다.

Next.js 16(App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion(애니메이션) · Lenis(부드러운 스크롤).

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
| `NEXT_PUBLIC_SITE_URL` | 정식 도메인(예: `https://dinary.app`). canonical · OG 주소에 씁니다. 없으면 Vercel 프로덕션 주소(`VERCEL_PROJECT_PRODUCTION_URL`)를 씁니다. |
| `LANDING_PUBLIC` | `true` 일 때만 프로덕션에서 랜딩을 보여 줍니다. 아래 「출시 전 공개 범위」를 보세요. |

## 출시 전 공개 범위 · `/beta`

랜딩은 아직 다듬는 중이라 **Vercel 프로덕션**에서는 숨겨 둡니다(`src/proxy.ts`, `src/lib/visibility.ts`).

- 프로덕션(`VERCEL_ENV=production`)에서 `LANDING_PUBLIC` 이 `true` 가 아니면 `/beta` 와 `/robots.txt` 말고는 모두 「준비 중이에요」 404(`X-Robots-Tag: noindex`)를 돌려줍니다. `/` · 공유 카드 · 사이트맵 · 매니페스트 · 아이콘도 포함입니다. 이때 `robots.txt` 는 `Disallow: /`, 사이트맵은 비어 있습니다.
- 프리뷰 배포와 로컬(`npm run dev`)에서는 늘 랜딩 전체가 보입니다.
- 출시할 때: Vercel → Settings → Environment Variables 에 `LANDING_PUBLIC=true` (Production)를 넣고 **다시 배포**하세요. `robots.txt` · 사이트맵은 빌드 때 만들어지므로 변수만 바꾸고 재배포하지 않으면 반영되지 않습니다.

`/beta` 는 인스타그램 스토리 → 구글 설문에서 들어오는 Android 베타 테스터 안내입니다. `public/beta.html` 한 파일로, Next 레이아웃 · 글꼴 · 스크립트 없이 그대로 나갑니다(`next.config.ts` 의 rewrite). 인스타그램 앱 내 브라우저는 구글에 로그인돼 있지 않아 그룹 가입이 막히므로, `<head>` 첫 스크립트가 `intent://` 로 Chrome 에서 다시 엽니다. 그다음 ① [테스터 그룹](https://groups.google.com/g/dinary-testers) 가입 ② [Play 테스트 참여](https://play.google.com/apps/testing/app.dinary) 순서로 안내합니다. 검색에는 나오지 않습니다(`noindex`).

## 바꿀 곳

- `src/lib/site.ts` — 문의 메일, 개인정보 처리방침 · 이용약관 주소, **스토어 주소**. `appStoreUrl` · `playStoreUrl` 을 채우면 마지막 장에 다운로드 단추가 생기고 문구가 「만날 수 있어요」로 바뀝니다. 비어 있으면 「출시 소식 묻기」(메일)만 보입니다.
- `src/lib/demo.ts` — 목업에 쓰는 가상의 가게 · 기록.
- `src/components/sections/*` — 장마다 한 파일(Hero · Story · Capture · MapSection · Diary · Wishlist · Together · More · Closing).
- `src/components/phone/*` — 폰 목업과 앱 화면 예시. 논리 크기 384×820 으로 그리고 `[--s:0.7]` 같은 클래스로 줄입니다.

## 내용의 근거

모든 문구와 화면은 dinary-app 의 실제 기능에서 가져왔습니다(`app/capture.tsx`, `app/(tabs)/calendar.tsx`, `app/(tabs)/index.tsx`, `src/features/map/*`, `src/features/couple/*`, `src/features/notify/geofence.ts`, `src/features/recap/*`, `src/theme/index.ts`).

- 색 · 글꼴: 앱 `src/theme` 토큰 그대로(종이 #F6F3EC, 카드 #FBFAF6, 먹 #1C1A17, 벽돌 #B4552D …), 제목 고운돋움 · 본문 Noto Sans KR · 라벨 JetBrains Mono. 영문 이탤릭은 Instrument Serif.
- 화면 예시: 촬영(「지금 여기」) → 가게 찾기(「여기 어디예요?」, 50m) → 인증 완료(「방문이 인증되었습니다」, 도장) → 기록, 종이톤 지도와 물방울 핀 · 시트, 캘린더(카테고리 색 막대), 위시리스트와 근처 알림(앱 알림 문구 그대로), 연인 기록장(D+N, 우리의 한 줄, 우리 도장, 콕 찌르기), 분기 리캡 공유 카드(종이 · 먹색 · 계절색 · 쪽빛).
- 앱 화면은 실제 스크린숏이 아니라 다시 그린 예시이고, 가게 이름과 기록은 가상입니다. 사이트 바닥글에도 적어 두었습니다.
- 스토어 링크, 후기, 다운로드 수, 출시일은 쓰지 않았습니다. 2026-10-22 기준 App Store(KR) · Google Play 에 `app.dinary` 가 검색되지 않습니다.
- 개인정보 처리방침 · 이용약관 · 문의 메일은 앱 저장소의 GitHub Pages(`https://dinary-org.github.io/dinary-app/…`)로 연결합니다.

## 자산

- 로고: 앱 `assets/icon.png` (`public/brand/icon.png`, 파비콘 `src/app/icon.png`).
- 음식 사진: [Unsplash 라이선스](https://unsplash.com/license) 사진을 내려받아 `src/assets/photos` 에 두었습니다. 원본은 `https://images.unsplash.com/photo-<id>`:

  | 파일 | id |
  |---|---|
  | hero-table | 1498654896293-37aacf113fd9 |
  | bibimbap | 1590301157890-4810ed352733 |
  | bibimbap-bowl | 1553163147-622ab57be1c7 |
  | tteokbokki | 1580651315530-69c8e0026377 |
  | tteokbokki-bowl | 1635363638580-c2809d049eee |
  | kimchi | 1583224964978-2257b960c3d3 |
  | ramen | 1569718212165-3a8278d5f624 |
  | noodle-soup | 1617093727343-374698b1b08d |
  | dumplings | 1534422298391-e4f8c172dddb |
  | soup-dumplings | 1563245372-f21724e3856d |
  | coffees | 1495474472287-4d71bcdd2085 |
  | latte | 1509042239860-f550ce710b93 |
  | dessert | 1488477181946-6428a0291777 |
  | sushi | 1579871494447-9811cf80d66c |
  | skewers | 1555939594-58d7cb561ad1 |
  | pasta | 1621996346565-e3dbc646d9a9 |
  | french-toast | 1484723091739-30a097e8f929 |
  | friends-table | 1466978913421-dad2ebd01d17 |
  | dining | 1414235077428-338989a2e8c0 |
  | cafe | 1554118811-1e0d58224f24 |

- 공유 카드(`src/app/opengraph-image.tsx`)는 빌드 때 그립니다. 글꼴은 그 문구의 글자만 담은 고운돋움 부분 파일(`src/assets/fonts/gowun-og.ttf`, SIL OFL)이라 문구를 바꾸면 다시 받아야 합니다:
  `https://fonts.googleapis.com/css2?family=Gowun+Dodum&text=<문구>` 를 오래된 User-Agent(예: `Mozilla/4.0`)로 열면 TTF 주소가 나옵니다.

## 접근성 · 동작

- 건너뛰기 링크, 랜드마크와 제목 구조, 단추에 이름과 `aria-pressed`, 키보드 포커스 표시, 모바일 메뉴 Esc 닫기.
- `prefers-reduced-motion` 이면 부드러운 스크롤 · 시차 · 흐르는 사진 띠를 끄고, 스크롤에 따라 채워지는 캘린더는 처음부터 다 보여 줍니다.
- 분석 도구, 쿠키, 입력 양식은 없습니다.
