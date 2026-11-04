// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import { site } from "@/lib/site";
import type { DesktopVals } from "@/components/Landing";

export default function Footer({ v }: { v: DesktopVals }) {
  return (
<>
<footer style={{ background: "#f6f3ec" }}>
  <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "72px clamp(20px,4vw,40px) 40px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "48px" }}>
      <div style={{ gridColumn: "span 1" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src="/brand/icon.png" alt="" width="30" height="30" style={{ borderRadius: "8px", boxShadow: "0 0 0 1px #d8d3c8" }} loading="lazy" decoding="async" /><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "13px", letterSpacing: ".32em" }}>DINARY</span></div>
        <p style={{ margin: "24px 0 0", maxWidth: "14em", fontFamily: "var(--site-serif)", fontSize: "22px", lineHeight: "1.5" }}>먹은 순간이, 우리의 이야기가 되도록.</p>
      </div>
      <nav aria-label="사이트 안내">
        <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: ".24em", color: "#8a8377" }}>DINARY</div>
        <ul style={{ listStyle: "none", margin: "20px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
          {v.footSections.map((s, sIdx) => (<Fragment key={sIdx}><li><a href={s.href} style={{ fontSize: "14.5px", color: "#6b665e" }} className="hv-link">{s.label}</a></li></Fragment>))}
        </ul>
      </nav>
      <div>
        <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: ".24em", color: "#8a8377" }}>베타 테스트</div>
        <ul style={{ listStyle: "none", margin: "20px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
          <li><a href={v.iosBetaUrl} style={{ fontSize: "14.5px", color: "#6b665e" }} className="hv-link">iPhone 베타 참여</a></li>
          <li><a href={v.androidBetaUrl} style={{ fontSize: "14.5px", color: "#6b665e" }} className="hv-link">Android 베타 참여</a></li>
        </ul>
      </div>
      <div>
        <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10.5px", letterSpacing: ".24em", color: "#8a8377" }}>안내</div>
        <ul style={{ listStyle: "none", margin: "20px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
          <li><a href={site.privacyUrl} style={{ fontSize: "14.5px", color: "#6b665e" }} className="hv-link">개인정보 처리방침</a></li>
          <li><a href={site.termsUrl} style={{ fontSize: "14.5px", color: "#6b665e" }} className="hv-link">이용약관</a></li>
          <li><a href={site.deleteAccountUrl} style={{ fontSize: "14.5px", color: "#6b665e" }} className="hv-link">계정 삭제 안내</a></li>
          <li><a href={`mailto:${site.contactEmail}`} style={{ fontSize: "14.5px", color: "#6b665e" }} className="hv-link">문의 · {site.contactEmail}</a></li>
        </ul>
      </div>
    </div>
    <div style={{ marginTop: "64px", paddingTop: "24px", borderTop: "1px solid #d8d3c8", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "12px", lineHeight: "1.7", color: "#8a8377" }}>
      <p style={{ margin: "0" }}>© 2026 DINARY 다이너리. All rights reserved.</p>
      <p style={{ margin: "0", maxWidth: "44em" }}>사이트의 앱 화면은 실제 앱을 바탕으로 다시 그린 예시이며, 가게 이름과 기록은 가상입니다. 음식 사진은 Unsplash 라이선스 사진입니다.</p>
    </div>
  </div>
</footer>
</>
  );
}
