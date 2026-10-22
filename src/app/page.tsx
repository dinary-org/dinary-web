import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Capture from "@/components/sections/Capture";
import Closing from "@/components/sections/Closing";
import Diary from "@/components/sections/Diary";
import Hero from "@/components/sections/Hero";
import MapSection from "@/components/sections/MapSection";
import More from "@/components/sections/More";
import Story from "@/components/sections/Story";
import Together from "@/components/sections/Together";
import Wishlist from "@/components/sections/Wishlist";

export default function Home() {
  return (
    <>
      <a href="#capture" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-card">
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
        <Together />
        <More />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
