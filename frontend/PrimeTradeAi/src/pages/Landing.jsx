import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Navbar from "./Navbar";
import DashboardPreview from "./DashboardPreview";
import Features from "./Features";
import Footer from "./Footer";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-[#0b0614] text-[#e6e1f0] overflow-x-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#0b0614] to-black" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.08] sm:opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* glow */}
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 h-[500px] w-[500px] sm:h-[900px] sm:w-[900px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.25),transparent_65%)] blur-3xl" />
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-36 text-center">

        {/* badge */}
        <div className="mx-auto mb-8 sm:mb-10 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-xs sm:text-sm text-purple-300 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          AI & Blockchain Venture Studio
        </div>

        {/* heading */}
        <h1 className="font-semibold tracking-tight leading-tight text-3xl sm:text-5xl lg:text-7xl">
          <span className="block text-white/80">
            We Build & Scale
          </span>
          <span className="block bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">
            AI & Blockchain Products
          </span>
        </h1>

        {/* subtitle */}
        <p className="mx-auto mt-4 sm:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-white/60 leading-relaxed">
          PrimeTrade.ai is a niche AI & blockchain venture studio.
          We partner with founders, incubate ideas, and turn cutting-edge
          technology into scalable real-world products.
        </p>

        {/* actions */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/register"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-6 sm:px-8 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:brightness-110 transition"
          >
            Build With Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <button className="inline-flex items-center cursor-pointer gap-2 rounded-full border border-white/20 bg-white/5 px-6 sm:px-8 py-3 text-sm text-white/80 hover:bg-white/10 transition">
            <Play className="h-4 w-4" />
            Explore Ventures
          </button>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-16 sm:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "10+", label: "Products Built" },
            { value: "AI + Web3", label: "Core Focus" },
            { value: "Global", label: "Founders Network" },
            { value: "End-to-End", label: "Venture Support" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-6 py-5 sm:py-8 backdrop-blur hover:border-purple-400/30 transition"
            >
              <div className="text-lg sm:text-2xl font-semibold text-white">
                {item.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-white/60">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <Features />

      {/* ================= PLATFORM PREVIEW ================= */}
      <DashboardPreview />
      {/* ================= CTA ================= */}
     {/* ================= CTA ================= */}
<section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-40 pb-24 sm:pb-32 text-center">
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
    Building the next generation of AI & blockchain products
  </h2>

  <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base text-white/60">
    PrimeTrade.ai partners with founders to design, engineer, and scale
    category-defining products — from early concept to real-world adoption.
  </p>

  <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4">
    <Link
      to="/register"
      className="rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-8 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:brightness-110 transition"
    >
      Work With Us
    </Link>

    <button className=" cursor-pointer  rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm hover:bg-white/10 transition">
      Talk to the Team
    </button>
  </div>
</section>


      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
