import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Layers,
  Cpu,
  BarChart3,
  Settings,
  Users,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

/* ===== SIDEBAR ITEMS ===== */
const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Layers, label: "Ventures" },
  { icon: Cpu, label: "AI Systems" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Team" },
  { icon: Settings, label: "Settings" },
];

/* ===== PRODUCT METRICS ===== */
const ventures = [
  { name: "AI Research Engine", percentage: 38, color: "bg-purple-500" },
  { name: "Blockchain Infra", percentage: 26, color: "bg-indigo-500" },
  { name: "SaaS Platform", percentage: 22, color: "bg-emerald-500" },
  { name: "R&D Labs", percentage: 14, color: "bg-pink-500" },
];

export default function DashboardPreview() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest text-white/50 uppercase">
            Platform Preview
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            A unified dashboard for building the future
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/60">
            Monitor ventures, track growth, and manage AI-driven products
            from a single intelligent workspace.
          </p>
        </motion.div>

        {/* ===== DASHBOARD CONTAINER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/15 bg-white/4 backdrop-blur-xl overflow-hidden"
        >
          <div className="flex">

            {/* ===== SIDEBAR ===== */}
            <aside className="hidden md:block w-64 border-r border-white/10 bg-[#0e0e0e] p-4">
              <div className="flex items-center gap-3 mb-8 px-2">
                <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Cpu className="h-4 w-4 text-purple-400" />
                </div>
                <span className="font-semibold">PrimeTrade.ai</span>
              </div>

              <div className="space-y-1">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm cursor-pointer transition
                      ${
                        item.active
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:bg-white/5"
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </div>
                ))}
              </div>
            </aside>

            {/* ===== MAIN CONTENT ===== */}
            <div className="flex-1 p-6">

              {/* Welcome */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">
                  Welcome back 👋
                </h3>
                <p className="text-sm text-white/60">
                  Here’s an overview of your venture ecosystem today.
                </p>
              </div>

              {/* ===== METRICS ===== */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Metric
                  title="Active Ventures"
                  value="12"
                  change="+3 this quarter"
                  positive
                />
                <Metric
                  title="Total Users"
                  value="248,000+"
                  change="+18.6% growth"
                  positive
                />
                <Metric
                  title="R&D Spend"
                  value="$1.8M"
                  change="-5.2% vs last cycle"
                />
              </div>

              {/* ===== CHART + DISTRIBUTION ===== */}
              <div className="grid md:grid-cols-3 gap-4">

                {/* Growth Chart */}
                <div className="md:col-span-2 rounded-2xl bg-[#111111] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Venture Growth Trend</span>
                    <div className="flex gap-2 text-xs">
                      <span className="rounded-full bg-purple-500/20 text-purple-400 px-3 py-1">
                        Q1
                      </span>
                      <span className="px-3 py-1 text-white/50">Q2</span>
                      <span className="px-3 py-1 text-white/50">Q3</span>
                      <span className="px-3 py-1 text-white/50">Q4</span>
                    </div>
                  </div>

                  {/* Bars */}
                  <div className="flex items-end gap-1 h-40">
                    {Array.from({ length: 24 }).map((_, i) => {
                      const height = 25 + Math.random() * 70;
                      const positive = Math.random() > 0.35;
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm transition-all duration-500
                            ${
                              positive
                                ? "bg-purple-500/70"
                                : "bg-rose-500/70"
                            }
                          `}
                          style={{ height: `${height}%` }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Distribution */}
                <div className="rounded-2xl bg-[#111111] p-4">
                  <p className="font-medium mb-4">Resource Allocation</p>
                  <div className="space-y-4">
                    {ventures.map((v) => (
                      <div key={v.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white/60">{v.name}</span>
                          <span>{v.percentage}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${v.color}`}
                            style={{ width: `${v.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== METRIC CARD ===== */
function Metric({ title, value, change, positive }) {
  return (
    <div className="rounded-2xl bg-[#111111] p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-white/60">{title}</span>
        {positive ? (
          <TrendingUp className="h-4 w-4 text-emerald-400" />
        ) : (
          <TrendingDown className="h-4 w-4 text-rose-400" />
        )}
      </div>
      <div className="text-2xl font-semibold">{value}</div>
      <span
        className={`text-xs ${
          positive ? "text-emerald-400" : "text-rose-400"
        }`}
      >
        {change}
      </span>
    </div>
  );
}
