import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const read = (p) => readFileSync(p, "utf8");
const id = "G-0VZ8V5KKRM";
const layout = read("src/app/layout.tsx");
assert.match(layout, /next\/script/);
assert.equal((layout.match(/googletagmanager\.com\/gtag\/js/g) || []).length, 1);
assert.ok(layout.includes(`gtag('config', '${id}')`));
for (const path of ["public/beta.html", "public/beta-ios.html"]) {
  const html = read(path);
  assert.equal((html.match(/googletagmanager\.com\/gtag\/js/g) || []).length, 1, path);
  assert.ok(html.includes(`gtag('config', '${id}')`), path);
}
assert.ok(read("public/beta.js").includes("beta_step_clicked"));
const privacy = read("public/privacy/index.html");
assert.ok(privacy.includes("Google Analytics 4"));
for (const path of ["public/r/index.html", "public/f/index.html", "public/invite/index.html", "public/meetup/index.html"]) {
  assert.ok(!read(path).includes(id), `GA4 must not be embedded on token-bearing share page ${path}`);
}
console.log("GA4 wiring verified: Next.js root, beta pages, privacy, and share-page exclusion");
