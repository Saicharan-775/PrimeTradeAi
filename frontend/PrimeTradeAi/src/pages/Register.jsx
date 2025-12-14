import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { API_URL } from "../config/api";
export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post(`${API_URL}/api/v1/auth/register`, {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        password: form.password,
      });

      setSuccess("Account created successfully. Please login.");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] px-6">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

        {/* ===== BACK BUTTON ===== */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 flex items-center gap-1 text-sm
                     text-white/50 hover:text-purple-400 transition"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Header */}
        <div className="mb-8 mt-6">
          <h1 className="text-2xl font-semibold text-white">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Start building with PrimeTradeAI.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/60 mb-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white
                           focus:outline-none focus:border-purple-400/60"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white
                           focus:outline-none focus:border-purple-400/60"
                required
              />
            </div>
          </div>

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
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white
                         focus:outline-none focus:border-purple-400/60"
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
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white
                         focus:outline-none focus:border-purple-400/60"
              required
            />
          </div>

          {/* Messages */}
          {error && <p className="text-sm text-red-400">{error}</p>}
          {success && <p className="text-sm text-emerald-400">{success}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full cursor-pointer bg-gradient-to-r from-purple-500 to-violet-500
                       py-3 text-sm font-medium text-white
                       shadow-[0_0_30px_rgba(168,85,247,0.35)]
                       hover:brightness-110 transition"
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link to="/login" className="cursor-pointer text-purple-400 hover:text-purple-300">
            Sign in
          </Link>
        </p>

       
      </div>
    </div>
  );
}
