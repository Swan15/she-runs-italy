const reasons = [
  {
    icon: "👯‍♀️",
    title: "Your people, your pace",
    body: "Travel with a crew of like-minded women. The She Runs community comes to life — from the group chat to the group hike. You'll leave with new best friends.",
  },
  {
    icon: "🗺️",
    title: "Real adventure, zero stress",
    body: "From ancient ruins to clifftop hikes to hidden trattorias — every day is an experience. Our expert female tour leader handles the logistics so you just show up.",
  },
  {
    icon: "🙋‍♀️",
    title: "Built by women, for women",
    body: "Female-only means you can be fully yourself. Solo-friendly, safety-first, and designed around how women travel — no compromises.",
  },
  {
    icon: "✅",
    title: "Almost everything included",
    body: "Accommodation, most meals, all transfers, guided tours, activities — it's all in the price. Just book your flights and bring spending money.",
  },
];

export default function WhyThisTrip() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Why this trip
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Travelling with your
            <span className="italic text-cyan-600"> best friends.</span>
          </h2>
          <p
            className="mt-5 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            This isn't a solo holiday. It's 8 days with a crew of women who get it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-50 transition-all duration-300 group"
            >
              <div className="text-4xl flex-shrink-0 mt-1">{r.icon}</div>
              <div>
                <h3
                  className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {r.title}
                </h3>
                <p
                  className="text-gray-500 leading-relaxed text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
