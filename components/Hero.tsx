"use client";

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("register");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1600')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-24">
        {/* Female-only badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="text-base">♀</span>
          <span>Female Only Experience</span>
        </div>

        {/* Trip name */}
        <h1
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          She Runs
          <span className="block italic font-normal text-cyan-300">Italy</span>
        </h1>

        {/* Subhead */}
        <p
          className="text-xl md:text-2xl font-light tracking-widest uppercase mb-6 text-white/90"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.2em" }}
        >
          8 Days. Southern Italy. Women Only.
        </p>

        {/* Route */}
        <p
          className="text-base md:text-lg text-white/75 mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Rome → Naples → Pompeii → Positano → Capri
        </p>

        {/* Date + Price pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="bg-white/15 backdrop-blur-sm border border-white/25 text-white px-5 py-2.5 rounded-full text-sm font-medium">
            📅 18–25 July 2026
          </span>
          <span className="bg-cyan-500/80 backdrop-blur-sm border border-cyan-400/50 text-white px-5 py-2.5 rounded-full text-sm font-semibold">
            From $1,599 AUD
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToForm}
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-200 shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Reserve My Spot
        </button>

        <p className="mt-5 text-white/55 text-sm">
          $100 refundable deposit to secure your place
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
