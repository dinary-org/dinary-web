import next from "eslint-config-next";

const config = [
  ...next,
  // 목업 사진은 디자인에서 이미 줄여 둔 파일을 고정 크기 상자에 object-fit 으로 그립니다 — <img> 를 그대로 씁니다.
  { rules: { "@next/next/no-img-element": "off" } },
  { ignores: [".next/**", "node_modules/**"] },
];

export default config;
