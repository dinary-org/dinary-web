// Claude Design 「DINARY Website」에서 옮긴 마크업입니다. 앞으로는 이 파일을 직접 고칩니다.
import type { MobileVals } from "@/components/Landing";

export default function Story({ v }: { v: MobileVals }) {
  return (
<>
<section id="story" aria-label="DINARY 이야기">
  <div style={{ padding: "72px 20px 24px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "var(--dinary-font-mono)", fontSize: "12px", letterSpacing: ".18em", color: "#6b665e" }}><span style={{ width: "28px", height: "1px", background: "#b4552d" }}></span>WHY DINARY</div>
    <p style={{ margin: "26px 0 0", fontFamily: "var(--dinary-font-serif)", fontSize: "24px", lineHeight: "1.6", letterSpacing: "-.02em", color: "#1c1a17", textWrap: "pretty" }}>맛집을 평가하는 앱은 이미 많아요. DINARY는 그날 <span style={{ color: "#b4552d" }}>누구와, 어떤 기분으로</span> 먹었는지를 남겨요. 시간이 지나 다시 펼쳤을 때, 그 한 끼가 <span style={{ color: "#b4552d" }}>다시 따뜻해지도록.</span></p>
  </div>
</section>
</>
  );
}
