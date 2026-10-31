import Capture from "@/components/sections/Capture";
import Closing from "@/components/sections/Closing";
import Community from "@/components/sections/Community";
import Diary from "@/components/sections/Diary";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Labels from "@/components/sections/Labels";
import MapSection from "@/components/sections/MapSection";
import MobileBar from "@/components/sections/MobileBar";
import Nav from "@/components/sections/Nav";
import Recommend from "@/components/sections/Recommend";
import Story from "@/components/sections/Story";
import Together from "@/components/sections/Together";
import Wishlist from "@/components/sections/Wishlist";

export default function Home() {
  return (
    <div style={{ position: "relative", background: "var(--dinary-paper)", overflowX: "hidden", minHeight: "100vh" }}>
      <a href="#capture" className="sr-only skip-link">
        본문으로 건너뛰기
      </a>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Capture />
        <MapSection />
        <Diary />
        <Wishlist />
        <Recommend />
        <Together />
        <Labels />
        <Community />
        <Closing />
      </main>
      <Footer />
      <MobileBar />
      <div aria-hidden="true" className="grain" />
    </div>
  );
}
