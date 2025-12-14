import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/PrimeTradeLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Ventures", path: "/ventures" },
    { name: "Studio", path: "/studio" },
    { name: "Solutions", path: "/solutions" },
    { name: "Insights", path: "/insights" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/60 backdrop-blur-xl px-6 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

          {/* ===== LOGO ===== */}
        <Link to="/" className="flex items-center gap-3"> 
        <div className="h-10 w-10 rounded-xl bg-purple-500 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.4)]"> 
        <span className="text-purple-400 text-xl font-bold"> 
          <img src={Logo} alt="PrimeTradeAI" className="h-12 w-12" /> 
          </span> </div> <span className="text-white font-semibold tracking-wide"> PrimeTradeAI </span>
           </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden md:flex items-center gap-10 text-sm text-white/70">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group transition-colors hover:text-purple-400"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-2/3 group-hover:left-1/6 rounded-full" />
              </Link>
            ))}
          </div>

          {/* ===== CTA ===== */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="rounded-full px-5 py-2 text-sm font-medium text-white/70
                         hover:text-purple-300 hover:bg-white/5 transition"
            >
              Login
            </Link>

            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center
                         rounded-full px-6 py-2.5 text-sm font-semibold
                         text-white bg-[#18102a] border border-white/10
                         transition-all duration-300
                         hover:border-purple-400/40
                         hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
                         active:scale-[0.97]"
            >
              <span className="relative z-10">Partner With Us</span>
              <span className="absolute inset-0 rounded-full opacity-0
                               bg-gradient-to-r from-purple-800/20 via-indigo-700/20 to-purple-500/20
                               blur-xl transition-opacity duration-300 hover:opacity-100" />
            </Link>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* ===== MOBILE MENU ===== */}
        {open && (
          <div className="md:hidden mt-4 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block text-white/70 hover:text-purple-400 transition py-2"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-full
                           bg-gradient-to-r from-purple-500 to-indigo-500
                           px-6 py-3 text-sm font-medium text-white
                           shadow-[0_0_25px_rgba(168,85,247,0.45)]
                           hover:shadow-[0_0_40px_rgba(168,85,247,0.65)]
                           transition mt-4"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
