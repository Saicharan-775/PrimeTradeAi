import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0b0614] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* ===== TOP ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* ===== BRAND ===== */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              PrimeTrade.ai
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              A niche AI & blockchain venture studio helping
              early-stage products scale with technology,
              strategy, and execution.
            </p>
          </div>

          {/* ===== VENTURE STUDIO ===== */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Venture Studio
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  Startup Incubation
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  Product Engineering
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  AI & Blockchain R&D
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  Go-to-Market Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== PRODUCTS & SOLUTIONS ===== */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Products & Solutions
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  AI Platforms
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  Blockchain Infrastructure
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  Web3 Applications
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  Internal Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== COMPANY ===== */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  Blog & Research
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ===== BOTTOM ===== */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>
            © {new Date().getFullYear()} PrimeTrade.ai — All rights reserved.
          </span>

          <div className="flex gap-6">
            <Link to="#" className="hover:text-purple-400 transition">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-purple-400 transition">
              Terms
            </Link>
            <Link to="#" className="hover:text-purple-400 transition">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
