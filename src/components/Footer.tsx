import Logo from "@/components/Logo";
import { SECTIONS } from "@/lib/sections";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 pt-16 pb-10 md:px-10 md:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-[22em] font-serif text-[22px] leading-[1.5] text-ink">먹은 순간이, 우리의 이야기가 되도록.</p>
          </div>
          <nav aria-label="사이트 안내" className="md:col-span-3">
            <div className="font-mono text-[10.5px] tracking-[0.24em] text-faint">DINARY</div>
            <ul className="mt-5 space-y-3">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="font-sans text-[14.5px] text-muted transition-colors hover:text-brick">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-4">
            <div className="font-mono text-[10.5px] tracking-[0.24em] text-faint">안내</div>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={site.privacyUrl} className="font-sans text-[14.5px] text-muted transition-colors hover:text-brick">
                  개인정보 처리방침 ↗
                </a>
              </li>
              <li>
                <a href={site.termsUrl} className="font-sans text-[14.5px] text-muted transition-colors hover:text-brick">
                  이용약관 ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contactEmail}`} className="font-sans text-[14.5px] text-muted transition-colors hover:text-brick">
                  문의 · {site.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 font-sans text-[12px] leading-[1.7] text-faint md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} DINARY. All rights reserved.</p>
          <p className="max-w-[44em] md:text-right">
            사이트의 앱 화면은 실제 앱을 바탕으로 다시 그린 예시이며, 가게 이름과 기록은 가상입니다. 음식 사진은 Unsplash 라이선스 사진입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
