import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Your Deposit — She Runs Italy",
  description: "Secure your spot on She Runs Italy with a $100 refundable deposit.",
};

export default function DepositPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDF8F3" }}>
      {/* Header bar */}
      <header className="bg-white border-b border-gray-100 py-5 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p
            className="text-gray-900 font-bold text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            She Runs Italy
          </p>
          <span
            className="text-xs font-medium text-gray-400 uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            18–25 July 2026
          </span>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full">
          {/* Step indicator */}
          <div className="flex items-center gap-2 justify-center mb-10">
            <div className="flex items-center gap-1.5">
              <span className="w-7 h-7 rounded-full bg-cyan-500 text-white text-xs font-bold flex items-center justify-center">✓</span>
              <span className="text-xs text-gray-400 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Details</span>
            </div>
            <div className="w-8 h-px bg-cyan-300" />
            <div className="flex items-center gap-1.5">
              <span className="w-7 h-7 rounded-full bg-cyan-500 text-white text-xs font-bold flex items-center justify-center">2</span>
              <span className="text-xs text-cyan-700 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Deposit</span>
            </div>
            <div className="w-8 h-px bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <span className="w-7 h-7 rounded-full bg-gray-200 text-gray-400 text-xs font-bold flex items-center justify-center">3</span>
              <span className="text-xs text-gray-400 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Confirmed</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-8 md:p-10 text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-cyan-50 border-2 border-cyan-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🇮🇹
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              You're almost in!
            </h1>

            <p
              className="text-gray-500 text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Secure your spot on She Runs Italy with a{" "}
              <strong className="text-gray-800">$100 refundable deposit.</strong>
            </p>

            {/* What you're paying */}
            <div className="bg-gray-50 rounded-2xl p-5 mb-8 text-left space-y-3">
              <div className="flex justify-between items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="text-sm text-gray-500">Trip price</span>
                <span className="text-sm font-semibold text-gray-900">$1,599 AUD</span>
              </div>
              <div className="flex justify-between items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="text-sm text-gray-500">Due today (deposit)</span>
                <span className="text-sm font-bold text-cyan-600">$100 AUD</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="text-sm text-gray-500">Balance due later</span>
                <span className="text-sm font-semibold text-gray-900">$1,499 AUD</span>
              </div>
            </div>

            {/* Stripe CTA */}
            <a
              href="https://buy.stripe.com/PLACEHOLDER"
              className="block w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Pay $100 Deposit Now
            </a>

            {/* Note about Stripe link */}
            <p
              className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ⚠️ <strong>Stripe link placeholder.</strong> Replace <code>https://buy.stripe.com/PLACEHOLDER</code> with your real Stripe payment link before going live.
            </p>

            {/* Refund notice */}
            <div className="mt-6 flex items-start gap-3 text-left">
              <span className="text-xl mt-0.5">🔒</span>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <strong className="text-gray-700">Your deposit is 100% refundable</strong> if the trip doesn't go ahead for any reason. We'll be in touch within 24 hours to confirm your place.
              </p>
            </div>
          </div>

          {/* Footer link */}
          <p
            className="text-center text-sm text-gray-400 mt-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Questions?{" "}
            <a
              href="https://sheruns.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Visit sheruns.com.au
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
