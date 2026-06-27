import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Flashcards | GateMind AI",
  description: "Leverage spaced repetition algorithms to memorize standard formulas, equations, and constants for the GATE exam.",
};

export default function FlashcardsPage() {
  const cardDecks = [
    { title: "Group Theory & Logic Formulas", subject: "Discrete Mathematics", dueCount: 12, totalCards: 45 },
    { title: "Big-O Complexities & Master Theorem", subject: "Algorithms", dueCount: 8, totalCards: 30 },
    { title: "CPU Scheduling & Page Replacement Math", subject: "Operating Systems", dueCount: 0, totalCards: 28 },
    { title: "Finite Automata & Turing Limits", subject: "Theory of Computation", dueCount: 15, totalCards: 35 },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-28 pb-16 relative z-10">
        <div className="section-header animate-slide-up mb-10 text-center md:text-left">
          <span className="bg-teal-500/10 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Active Recall Decks
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
            Spaced Repetition Flashcards
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Optimize your long-term memory. Our scheduler calculates exactly when a formula is fading from your recall, prompting timely reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up delay-100">
          {cardDecks.map((deck, index) => (
            <div 
              key={index}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-wider block mb-1">
                      {deck.subject}
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {deck.title}
                    </h3>
                  </div>
                  {deck.dueCount > 0 ? (
                    <span className="bg-orange-500/15 text-orange-400 border border-orange-500/20 text-xs font-bold px-2.5 py-1 rounded-md">
                      {deck.dueCount} Due
                    </span>
                  ) : (
                    <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-bold px-2.5 py-1 rounded-md">
                      Mastered
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Includes mathematical identities, limits, time complexity bounds, and architecture characteristics.
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/40">
                <span className="text-xs text-slate-500">
                  {deck.totalCards} total cards in deck
                </span>
                <button 
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                    deck.dueCount > 0 
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white" 
                      : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-300"
                  }`}
                >
                  {deck.dueCount > 0 ? "Review Cards" : "Practice Deck"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
