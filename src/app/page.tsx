import Landing from "@/components/Landing";

export default function Home() {
  return (
    <>
      <a href="#capture" className="sr-only skip-link">
        본문으로 건너뛰기
      </a>
      <Landing />
      <div aria-hidden="true" className="grain" />
    </>
  );
}
