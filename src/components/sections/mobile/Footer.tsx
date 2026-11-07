// Claude Design 「Dinary Website - Mobile」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import { Fragment } from "react";
import { site } from "@/lib/site";
import type { MobileVals } from "@/components/Landing";

export default function Footer({ v }: { v: MobileVals }) {
  return (
<>
<footer style={{ background: "#f6f3ec" }}>
  <div style={{ padding: "56px 20px 112px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "9px" }}><img src="/brand/icon.png" alt="" width="28" height="28" style={{ borderRadius: "7px", boxShadow: "0 0 0 1px #d8d3c8" }} loading="lazy" decoding="async" /><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", letterSpacing: ".3em" }}>DINARY</span></div>
    <p style={{ margin: "18px 0 0", fontFamily: "var(--site-serif)", fontSize: "20px", lineHeight: "1.5" }}>먹은 순간이, 우리의 이야기가 되도록.</p>
    <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "32px 20px" }}>
      <nav aria-label="사이트 안내">
        <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: ".22em", color: "#8a8377" }}>DINARY</div>
        <ul style={{ listStyle: "none", margin: "14px 0 0", padding: "0", display: "flex", flexDirection: "column" }}>
          {v.footSections.map((s, sIdx) => (<Fragment key={sIdx}><li><a href={s.href} style={{ display: "block", padding: "7px 0", fontSize: "14px", color: "#6b665e" }} className="hv-link">{s.label}</a></li></Fragment>))}
        </ul>
      </nav>
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <div>
          <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: ".22em", color: "#8a8377" }}>베타 테스트</div>
          <ul style={{ listStyle: "none", margin: "14px 0 0", padding: "0", display: "flex", flexDirection: "column" }}>
            <li><a href={v.iosBetaUrl} style={{ display: "block", padding: "7px 0", fontSize: "14px", color: "#6b665e" }} className="hv-link">iPhone 베타 참여</a></li>
            <li><a href={v.androidBetaUrl} style={{ display: "block", padding: "7px 0", fontSize: "14px", color: "#6b665e" }} className="hv-link">Android 베타 참여</a></li>
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "10px", letterSpacing: ".22em", color: "#8a8377" }}>안내</div>
          <ul style={{ listStyle: "none", margin: "14px 0 0", padding: "0", display: "flex", flexDirection: "column" }}>
            <li><a href={site.privacyUrl} style={{ display: "block", padding: "7px 0", fontSize: "14px", color: "#6b665e" }} className="hv-link">개인정보 처리방침</a></li>
            <li><a href={site.termsUrl} style={{ display: "block", padding: "7px 0", fontSize: "14px", color: "#6b665e" }} className="hv-link">이용약관</a></li>
            <li><a href={site.deleteAccountUrl} style={{ display: "block", padding: "7px 0", fontSize: "14px", color: "#6b665e" }} className="hv-link">계정 삭제 안내</a></li>
          </ul>
        </div>
      </div>
    </div>
    <a href={`mailto:${site.contactEmail}`} style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "52px", padding: "0 18px", borderRadius: "16px", border: "1px solid #d8d3c8", background: "#fbfaf6", fontSize: "14px", color: "#1c1a17" }}><span>문의</span><span style={{ fontFamily: "var(--dinary-font-mono)", fontSize: "12px", color: "#6b665e" }}>{site.contactEmail}</span></a>
    <div style={{ marginTop: "36px", paddingTop: "20px", borderTop: "1px solid #d8d3c8", display: "flex", flexDirection: "column", gap: "8px", fontSize: "11.5px", lineHeight: "1.7", color: "#8a8377" }}>
      <p style={{ margin: "0" }}>© 2026 DINARY 다이너리. All rights reserved.</p>
      <p style={{ margin: "0" }}>사이트의 앱 화면은 실제 앱을 바탕으로 다시 그린 예시이며, 가게 이름과 기록은 가상입니다. 음식 사진은 Unsplash 라이선스 사진입니다.</p>
    </div>
  </div>
</footer>
</>
  );
}
