"use client";

import { useState } from "react";

const days = [
  {
    day: "Day 1",
    title: "Arrive in Rome",
    location: "Rome 🇮🇹",
    description:
      "Touch down in the Eternal City. Check into your accommodation and meet your squad over a welcome dinner. Rooftop drinks under the Roman sky, then a sunset stroll to explore the Vatican City neighbourhood.",
    highlights: ["Welcome dinner", "Rooftop drinks", "Vatican City area"],
  },
  {
    day: "Day 2",
    title: "Rome in Full",
    location: "Rome",
    description:
      "The full Rome experience. Morning walking tour through the Spanish Steps, Trevi Fountain, and the Pantheon — then the big one: guided entry to the Colosseum, Roman Forum, and Palatine Hill. Evenings are yours.",
    highlights: ["Spanish Steps", "Trevi Fountain", "Colosseum + Roman Forum"],
  },
  {
    day: "Day 3",
    title: "Rome → Naples",
    location: "Naples",
    description:
      "High-speed train south to Naples — Italy's wildest, most underrated city. Afternoon Naples street food tour: deep-fried pizza, fresh mozzarella, pasta, and yes, limoncello shots included.",
    highlights: ["Train to Naples", "Street food tour", "Deep-fried pizza"],
  },
  {
    day: "Day 4",
    title: "Pompeii & Vesuvius",
    location: "Pompeii",
    description:
      "Step back 2,000 years. Guided walking tour through the ancient ruins of Pompeii with Mount Vesuvius looming in the background. One of the most extraordinary places on earth.",
    highlights: ["Pompeii guided tour", "Mount Vesuvius views", "Ancient ruins"],
  },
  {
    day: "Day 5",
    title: "Herculaneum, Wine & Sorrento",
    location: "Sorrento",
    description:
      "Morning guided tour of Herculaneum — even better-preserved than Pompeii. Then head up to the slopes of Mount Vesuvius for a wine tasting. End the day in gorgeous Sorrento for sunset drinks.",
    highlights: ["Herculaneum tour", "Vesuvius wine tasting", "Sorrento sunset"],
  },
  {
    day: "Day 6",
    title: "Path of the Gods",
    location: "Positano",
    description:
      "The hike everyone talks about. 4 hours along the clifftops of the Amalfi Coast with views that will make your jaw drop. Stop for a lemon slushy halfway, then descend into the dreamscape village of Positano.",
    highlights: ["Path of the Gods hike", "Lemon slushy stop", "Positano arrival"],
  },
  {
    day: "Day 7",
    title: "Capri",
    location: "Capri 💙",
    description:
      "The island of islands. Chairlift to the top for panoramic views, wander the botanical gardens, explore the winding lanes and boutiques. Farewell dinner together to toast to an incredible week.",
    highlights: ["Capri chairlift", "Botanical gardens", "Farewell dinner"],
  },
  {
    day: "Day 8",
    title: "Fly Home",
    location: "Departures ✈️",
    description:
      "Hugs at the airport. You'll leave with a full camera roll, a group chat you'll never mute, and memories of a trip you'll talk about for years. Arrivederci, Italy.",
    highlights: ["Transfer to airport", "Fly home", "New best friends for life"],
  },
];

export default function Itinerary() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The trip
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            8 days, zero regrets.
          </h2>
          <p
            className="mt-4 text-gray-500 text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Rome → Naples → Pompeii → Sorrento → Positano → Capri
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {days.map((d, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-cyan-300 shadow-md shadow-cyan-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest w-10 flex-shrink-0 ${
                      open === i ? "text-cyan-600" : "text-gray-400"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {d.day}
                  </span>
                  <div>
                    <p
                      className="font-semibold text-gray-900 text-base leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {d.title}
                    </p>
                    <p
                      className="text-xs text-gray-400 mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {d.location}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180 text-cyan-500" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Content */}
              {open === i && (
                <div className="px-5 pb-5">
                  <div
                    className="w-full h-px bg-gray-100 mb-4"
                    aria-hidden="true"
                  />
                  <p
                    className="text-gray-600 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {d.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {d.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-cyan-50 text-cyan-700 text-xs font-medium px-3 py-1 rounded-full border border-cyan-100"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
