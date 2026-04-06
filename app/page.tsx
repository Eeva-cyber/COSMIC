import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Solution from "./components/sections/Solution";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import Visual from "./components/sections/Visual";
import Waitlist from "./components/sections/Waitlist";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import Marquee from "./components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee
          text="DISSOLVE THE ROUTINE"
          separator="✦"
        />
        <Problem />
        <Solution />
        <Marquee
          text="MAKEUP IN SECONDS"
          separator="◆"
        />
        <HowItWorks />
        <Features />
        <Visual />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
