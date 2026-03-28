"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  emergencyName: string;
  emergencyPhone: string;
  dietary: string;
  confirmFemale: boolean;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  emergencyName: "",
  emergencyPhone: "",
  dietary: "",
  confirmFemale: false,
};

export default function RegistrationForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const val =
      target.type === "checkbox" ? target.checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: val }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.confirmFemale) {
      setError("Please confirm the female-only requirement to continue.");
      return;
    }

    setLoading(true);

    try {
      // Fire Meta Pixel Lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "She Runs Italy Trip",
          currency: "AUD",
          value: 1599,
        });
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      router.push("/deposit");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#FDF8F3" }}
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Secure your spot
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to go?
          </h2>
          <p
            className="text-gray-500 text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Fill in your details and we'll hold your spot with a $100 refundable deposit.
          </p>

          {/* Price callout */}
          <div className="mt-6 inline-flex items-center gap-3 bg-cyan-600 text-white px-6 py-3 rounded-2xl">
            <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              $1,599 AUD
            </span>
            <span className="text-cyan-200 text-sm">per person · all-inclusive</span>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-8 md:p-10"
        >
          {/* Personal details */}
          <div className="mb-8">
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  First Name <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Sarah"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Last Name <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Williams"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Email Address <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="sarah@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Phone Number <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+61 4xx xxx xxx"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Date of Birth <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>
          </div>

          {/* Emergency contact */}
          <div className="mb-8">
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Emergency Contact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Full Name <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="text"
                  name="emergencyName"
                  value={form.emergencyName}
                  onChange={handleChange}
                  required
                  placeholder="Mum / Partner"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Phone Number <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={form.emergencyPhone}
                  onChange={handleChange}
                  required
                  placeholder="+61 4xx xxx xxx"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>
          </div>

          {/* Dietary */}
          <div className="mb-8">
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Additional Info
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                Dietary Requirements{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                name="dietary"
                value={form.dietary}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. vegetarian, gluten-free, nut allergy..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition text-sm resize-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>

          {/* Female confirm */}
          <div className="mb-8">
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative mt-0.5">
                <input
                  type="checkbox"
                  name="confirmFemale"
                  checked={form.confirmFemale}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                    form.confirmFemale
                      ? "bg-cyan-500 border-cyan-500"
                      : "bg-white border-gray-300 group-hover:border-cyan-400"
                  }`}
                >
                  {form.confirmFemale && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="font-semibold text-gray-800">I confirm I identify as female.</span>{" "}
                She Runs Italy is a female-only experience. This is a requirement to join the trip.{" "}
                <span className="text-cyan-500">*</span>
              </span>
            </label>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-300 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:transform-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Processing...
              </span>
            ) : (
              "Reserve My Spot — $1,599 AUD"
            )}
          </button>

          <p
            className="text-center text-xs text-gray-400 mt-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A $100 refundable deposit is required to confirm your place. No charge now.
          </p>
        </form>
      </div>
    </section>
  );
}
