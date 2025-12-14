import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  Zap,
  BarChart3,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export default function Features() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-28 sm:pt-36">

      {/* ===== HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 sm:mb-24 max-w-3xl"
      >
        <p className="text-xs sm:text-sm uppercase tracking-widest text-purple-400">
          PrimeTrade.ai Venture Studio
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Building the next generation of
          <br /> AI & Blockchain products
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/60">
          PrimeTrade.ai is a niche AI and blockchain venture studio where we
          incubate, build, and scale multiple high-impact products at the
          intersection of intelligence, infrastructure, and decentralization.
        </p>
      </motion.div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ===== AI PRODUCT ENGINE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 rounded-3xl border border-white/15 bg-white/4 p-6 sm:p-10 backdrop-blur-md hover:border-purple-400/40 transition"
        >
          <div className="flex flex-col sm:flex-row gap-6">

            <div className="h-14 w-14 rounded-2xl bg-purple-400/15 flex items-center justify-center shrink-0">
              <Brain className="h-7 w-7 text-purple-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold">
                AI Product & Intelligence Engine
              </h3>

              <p className="mt-4 text-sm sm:text-base text-white/60 max-w-xl">
                We design and deploy AI systems that power real-world products —
                from decision intelligence and automation to predictive systems
                and large-scale data understanding.
              </p>

              {/* Stats */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "AI Models Deployed", value: "25+" },
                  { label: "Data Points / day", value: "10M+" },
                  { label: "Avg. Model Accuracy", value: "92%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-black/40 p-4"
                  >
                    <p className="text-xs sm:text-sm text-white/50">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-semibold">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== BLOCKCHAIN INFRA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-white/15 bg-white/4 p-6 sm:p-8 backdrop-blur-md hover:border-white/30 transition"
        >
          <Layers className="h-6 w-6 text-white mb-6" />
          <h4 className="text-lg font-semibold">
            Blockchain Infrastructure
          </h4>
          <p className="mt-3 text-sm text-white/60">
            We build decentralized foundations that are secure, scalable, and
            production-ready.
          </p>

          <div className="mt-4 text-sm text-white/50 leading-relaxed">
            • Smart contract systems<br />
            • On-chain data pipelines<br />
            • Web3-native architectures
          </div>
        </motion.div>

        {/* ===== SECURITY ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-white/15 bg-white/4 p-6 sm:p-8 backdrop-blur-md hover:border-white/30 transition"
        >
          <ShieldCheck className="h-6 w-6 text-white mb-6" />
          <h4 className="text-lg font-semibold">
            Security by Architecture
          </h4>
          <p className="mt-3 text-sm text-white/60">
            Security is embedded at the protocol, model, and infrastructure level.
          </p>

          <div className="mt-4 text-sm text-white/50 leading-relaxed">
            • Zero-trust systems<br />
            • Secure AI pipelines<br />
            • Blockchain-grade integrity
          </div>
        </motion.div>

        {/* ===== SCALING STARTUPS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 rounded-3xl border border-white/15 bg-white/4 p-6 sm:p-8 backdrop-blur-md hover:border-purple-400/40 transition"
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg sm:text-xl font-semibold">
              Venture Studio Execution
            </h4>
            <BarChart3 className="h-6 w-6 text-purple-400" />
          </div>

          <p className="max-w-2xl text-sm sm:text-base text-white/60">
            From idea validation to scaling production systems, we act as a
            long-term technical and strategic partner for AI and blockchain
            startups.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-purple-400">
              <ArrowUpRight className="h-4 w-4" />
              Product incubation
            </div>
            <div className="flex items-center gap-2 text-white/50">
              Go-to-market support
            </div>
            <div className="flex items-center gap-2 text-white/50">
              Scalable architectures
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
