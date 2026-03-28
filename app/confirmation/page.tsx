import type { Metadata } from "next";
import PurchasePixel from "@/components/PurchasePixel";

export const metadata: Metadata = {
  title: "You're Confirmed! — She Runs Italy",
  description: "Your spot on She Runs Italy is confirmed. We'll be in touch within 24 hours.",
};

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDF8F3" }}>
      <PurchasePixel />

      {/* Header */}
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

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center">
          {/* Confetti/celebration */}
          <div className="text-7xl mb-6 animate-bounce">🇮🇹</div>

          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            You're in the
            <span className="italic text-cyan-600 block">group chat!</span>
          </h1>

          <p
            className="text-xl text-gray-500 mb-8 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We'll be in touch within 24 hours with next steps, trip details, and everything you need to start counting down to Italy.
          </p>

          {/* What's next */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md shadow-gray-50 p-6 mb-8 text-left space-y-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              What happens next
            </p>
            {[
              { icon: "📧", text: "Confirmation email on its way to your inbox" },
              { icon: "💬", text: "We'll add you to the She Runs Italy WhatsApp group" },
              { icon: "📋", text: "Full trip pack with packing list, flight tips, and what to expect" },
              { icon: "🗓️", text: "Balance payment due closer to departure" },
            ].map((step) => (
              <div key={step.text} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{step.icon}</span>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Share / Social */}
          <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-6 mb-8">
            <p
              className="text-sm font-semibold text-cyan-800 mb-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Got a friend who'd love this trip?
            </p>
            <p
              className="text-sm text-cyan-600 mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Send them the link — spots are limited.
            </p>
            <a
              href="https://instagram.com/she_runs_club"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-cyan-500 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Follow @she_runs_club for updates
            </a>
          </div>

          {/* Back to site */}
          <a
            href="https://sheruns.com.au"
            className="text-sm text-gray-400 hover:text-cyan-600 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ← Back to sheruns.com.au
          </a>
        </div>
      </div>
    </main>
  );
}
