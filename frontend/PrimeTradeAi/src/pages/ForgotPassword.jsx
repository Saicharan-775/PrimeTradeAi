import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // TODO: call forgot-password API
    // on success -> setMessage("Reset link sent")
    // on error -> setError("Something went wrong")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white">
            Reset your password
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Enter your email address and we’ll send you a password reset link.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-sm text-white/60 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white
              placeholder-white/30 focus:outline-none focus:border-emerald-400/60
              focus:ring-1 focus:ring-emerald-400/40 transition"
            />
          </div>

          {/* Success message */}
          {message && (
            <p className="text-sm text-emerald-400">
              {message}
            </p>
          )}

          {/* Error message */}
          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full bg-emerald-400 py-3 text-sm font-medium text-black
            hover:bg-emerald-300 transition
            shadow-[0_0_30px_rgba(52,211,153,0.35)]"
          >
            Send reset link →
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-white/60 space-y-2">
          <p>
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-emerald-400 hover:text-emerald-300 transition"
            >
              Sign in
            </Link>
          </p>

          <p>
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-emerald-400 hover:text-emerald-300 transition"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
