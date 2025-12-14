import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0b2e] via-[#0b0614] to-black text-white px-6">

      <div className="relative text-center max-w-xl">

        {/* Glow */}
        <div className="absolute inset-0 -z-10 rounded-full bg-purple-500/20 blur-3xl" />

        {/* Title */}
        <p className="text-lg text-white/60 mb-2">Oops…</p>

        {/* 404 */}
        <h1 className="text-8xl font-bold tracking-widest text-white/90">
          4<span className="text-purple-400">0</span>4
        </h1>

        {/* Message */}
        <p className="mt-6 text-white/60 text-lg">
          Looks like this page doesn’t exist.
        </p>

        {/* Action */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-10 rounded-full
                     bg-gradient-to-r from-purple-500 to-violet-900
                     px-8 py-3 text-sm font-medium text-white
                     shadow-[0_0_40px_rgba(168,85,247,0.4)]
                     hover:brightness-110 hover:scale-[1.03]
                     transition-all duration-300"
        >
          ← Go Home
        </Link>
      </div>
    </div>
  );
}
