import Navbar from "../components/sections/Navbar";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/sections/Footer";

export const metadata = {
  title: "FAQ — COSMIC",
  description:
    "Common questions about COSMIC — the single-use dissolvable makeup mask that replaces your entire routine in under two minutes.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
