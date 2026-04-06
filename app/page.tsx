import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Solution from "./components/sections/Solution";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import Visual from "./components/sections/Visual";
import Waitlist from "./components/sections/Waitlist";
import Footer from "./components/sections/Footer";
import { ShaderBackground } from "./components/ui/shader-background";

const cardClass =
  "bg-white/80 backdrop-blur-2xl rounded-[2rem] border border-white/40";

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6 pb-6">
          <div className={cardClass}>
            <Problem />
          </div>
          <div className={cardClass}>
            <Solution />
          </div>
          <div className={cardClass}>
            <HowItWorks />
          </div>
          <div className={cardClass}>
            <Features />
          </div>
          <div className={cardClass}>
            <Visual />
          </div>
          <div className={cardClass}>
            <Waitlist />
          </div>
          <div className={cardClass}>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
