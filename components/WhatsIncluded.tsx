const included = [
  { icon: "🏨", label: "All accommodation", sub: "Twin/triple rooms throughout" },
  { icon: "🍳", label: "7 breakfasts + 2 dinners", sub: "Welcome & farewell dinners" },
  { icon: "🚂", label: "All transfers", sub: "Trains + private transfers" },
  { icon: "👩‍✈️", label: "Female tour leader", sub: "Expert guide throughout" },
  { icon: "🏛️", label: "Colosseum + Roman Forum", sub: "Guided entry included" },
  { icon: "🍕", label: "Naples street food tour", sub: "Pizza, mozzarella, limoncello" },
  { icon: "🌋", label: "Pompeii guided tour", sub: "Ancient ruins + Vesuvius" },
  { icon: "🏺", label: "Herculaneum tour", sub: "Guided archaeological site" },
  { icon: "🍷", label: "Wine tasting", sub: "At Mount Vesuvius" },
  { icon: "🥾", label: "Path of the Gods hike", sub: "4hrs, epic Amalfi views" },
  { icon: "🚡", label: "Capri chairlift", sub: "Botanical gardens included" },
  { icon: "🤝", label: "Women-only community", sub: "Travel with your people" },
];

const notIncluded = [
  "International flights",
  "Travel insurance",
  "Personal spending money",
];

export default function WhatsIncluded() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "#FDF8F3" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What's included
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Almost everything.
          </h2>
          <p
            className="mt-4 text-gray-500 text-lg max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Just book your flights. We handle the rest.
          </p>
        </div>

        {/* Included grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {included.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-cyan-200 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p
                className="text-sm font-semibold text-gray-900 mb-1 leading-snug"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </p>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Not included */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-lg mx-auto">
          <p
            className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Not included
          </p>
          <ul className="space-y-2">
            {notIncluded.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-500 text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="w-4 h-4 rounded-full border-2 border-gray-200 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
