import Hero from "@/components/Hero";
import WhyThisTrip from "@/components/WhyThisTrip";
import WhatsIncluded from "@/components/WhatsIncluded";
import Itinerary from "@/components/Itinerary";
import RegistrationForm from "@/components/RegistrationForm";
import ViewContentPixel from "@/components/ViewContentPixel";

export default function Home() {
  return (
    <main>
      <ViewContentPixel />
      <Hero />
      <WhyThisTrip />
      <WhatsIncluded />
      <Itinerary />
      <RegistrationForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            She Runs Italy
          </p>
          <p
            className="text-gray-400 text-sm mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            18–25 July 2026 · Southern Italy · Women Only
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
            <a
              href="https://sheruns.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              sheruns.com.au
            </a>
            <span>·</span>
            <a
              href="https://instagram.com/she_runs_club"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              @she_runs_club
            </a>
          </div>
          <p
            className="text-gray-600 text-xs mt-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 She Runs. A trip built for women, by women.
          </p>
        </div>
      </footer>
    </main>
  );
}
