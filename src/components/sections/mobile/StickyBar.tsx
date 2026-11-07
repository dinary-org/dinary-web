// Claude Design 「Dinary Website - Mobile」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import type { MobileVals } from "@/components/Landing";

export default function StickyBar({ v }: { v: MobileVals }) {
  return (
<>
{v.showBar && (<>
  <div style={{ position: "fixed", left: "0", right: "0", bottom: "12px", zIndex: "55", display: "flex", justifyContent: "center", padding: "0 12px", pointerEvents: "none" }}>
    <div style={{ pointerEvents: "auto", width: "100%", maxWidth: "416px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "12px", padding: "10px 10px 10px 14px", borderRadius: "20px", background: "rgba(28,26,23,.96)", color: "#fbfaf6", boxShadow: "0 20px 40px -16px rgba(28,26,23,.6)", animation: "fadeUp .5s cubic-bezier(.22,1,.36,1) both" }}>
      <img src="/brand/icon.png" alt="" width="36" height="36" style={{ borderRadius: "9px", flex: "none" }} loading="lazy" decoding="async" />
      <div style={{ flex: "1", minWidth: "0" }}><div style={{ fontSize: "14px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500" }}>DINARY</div><div style={{ fontSize: "12px", color: "#cdc6b8" }}>지금 베타 테스트 중이에요</div></div>
      <a href={v.storeUrl} style={{ flex: "none", display: "inline-flex", alignItems: "center", height: "44px", padding: "0 18px", borderRadius: "14px", background: "#b4552d", color: "#fbfaf6", fontSize: "14px", fontFamily: "var(--dinary-font-sans-md)", fontWeight: "500" }} className="hv-keep">베타 참여</a>
    </div>
  </div>
</>)}
</>
  );
}
