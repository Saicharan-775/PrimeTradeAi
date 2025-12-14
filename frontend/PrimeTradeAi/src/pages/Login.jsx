import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../slices/authSlice";
import { ArrowLeft } from "lucide-react";
import { API_URL } from "../config/api";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        `${API_URL}/api/v1/auth/login`,
        {
          email: form.email,
          password: form.password,
        }
      );

      dispatch(
        loginSuccess({
          user: res.data.user,
          token: res.data.token,
        })
      );

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] px-6">
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

        {/* ===== BACK BUTTON (INSIDE CARD) ===== */}
        <Link
          to="/"
          className="absolute top-5 left-5 inline-flex items-center gap-2
                     text-sm text-white/60 hover:text-purple-400 transition"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        {/* Header */}
        <div className="mb-8 mt-4">
          <h1 className="text-2xl font-semibold text-white">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Sign in to continue to PrimeTradeAI.
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
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white
                         placeholder-white/30 focus:outline-none
                         focus:border-purple-400/60 focus:ring-1
                         focus:ring-purple-400/40 transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-white/60 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white
                         placeholder-white/30 focus:outline-none
                         focus:border-purple-400/60 focus:ring-1
                         focus:ring-purple-400/40 transition"
              required
            />
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-white/50 hover:text-purple-400 transition"
            >
              Forgot password?
            </Link>
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full
                       bg-gradient-to-r from-purple-500 to-violet-500
                       py-3 text-sm font-medium text-white
                       shadow-[0_0_30px_rgba(168,85,247,0.35)]
                       hover:brightness-110 transition cursor-pointer"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-white/60">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-400 hover:text-purple-300 transition"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
