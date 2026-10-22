/** 음식 사진 — Unsplash 라이선스 사진을 내려받아 둔 것(README 참고). 정적 import 라 빌드가 크기와 흐린 미리보기를 만들어 줍니다. */
import bibimbapBowl from "@/assets/photos/bibimbap-bowl.jpg";
import bibimbap from "@/assets/photos/bibimbap.jpg";
import cafe from "@/assets/photos/cafe.jpg";
import coffees from "@/assets/photos/coffees.jpg";
import dessert from "@/assets/photos/dessert.jpg";
import dining from "@/assets/photos/dining.jpg";
import dumplings from "@/assets/photos/dumplings.jpg";
import frenchToast from "@/assets/photos/french-toast.jpg";
import friendsTable from "@/assets/photos/friends-table.jpg";
import heroTable from "@/assets/photos/hero-table.jpg";
import kimchi from "@/assets/photos/kimchi.jpg";
import latte from "@/assets/photos/latte.jpg";
import noodleSoup from "@/assets/photos/noodle-soup.jpg";
import pasta from "@/assets/photos/pasta.jpg";
import ramen from "@/assets/photos/ramen.jpg";
import skewers from "@/assets/photos/skewers.jpg";
import soupDumplings from "@/assets/photos/soup-dumplings.jpg";
import sushi from "@/assets/photos/sushi.jpg";
import tteokbokkiBowl from "@/assets/photos/tteokbokki-bowl.jpg";
import tteokbokki from "@/assets/photos/tteokbokki.jpg";

export const photos = {
  bibimbapBowl,
  bibimbap,
  cafe,
  coffees,
  dessert,
  dining,
  dumplings,
  frenchToast,
  friendsTable,
  heroTable,
  kimchi,
  latte,
  noodleSoup,
  pasta,
  ramen,
  skewers,
  soupDumplings,
  sushi,
  tteokbokkiBowl,
  tteokbokki,
};

export type PhotoKey = keyof typeof photos;
