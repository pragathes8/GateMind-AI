import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Smart Notes | GateMind AI",
  description: "Access structured, AI-generated engineering study notes, summaries, and formula sheets.",
};

export default function NotesPage() {
  const notesSubjects = [
    { title: "Binary Search Trees & AVL Rotations", subject: "Algorithms", modulesCount: 4, readTime: "15 mins read" },
    { title: "LR(1) Parsing Table Construction", subject: "Compiler Design", modulesCount: 6, readTime: "25 mins read" },
    { title: "Paging & Segmentation Implementations", subject: "Operating Systems", modulesCount: 3, readTime: "12 mins read" },
    { title: "First-Order Logic & Predicates", subject: "Discrete Mathematics", modulesCount: 5, readTime: "18 mins read" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-28 pb-16 relative z-10">
        <div className="section-header animate-slide-up mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="bg-teal-500/10 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Smart Notes Library
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
              Study Notes & Guides
            </h1>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Access structured learning content generated directly from standard text books and reference syllabi.
            </p>
          </div>

          <button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-lg transition-all cursor-pointer">
            ✨ Generate Custom Notes
          </button>
        </div>

        {/* Search Mockup */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 mb-8 flex gap-3 backdrop-blur animate-slide-up delay-100">
          <input 
            type="text" 
            placeholder="Search notes by keywords (e.g., Semaphores, AVL tree)..."
            className="flex-1 bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <button className="bg-slate-950 border border-slate-800 text-slate-300 text-sm font-semibold px-5 py-2.5 rounded-xl cursor-pointer">
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up delay-200">
          {notesSubjects.map((note, index) => (
            <div 
              key={index}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-wider block mb-1">
                  {note.subject}
                </span>
                <h3 className="text-base font-bold text-white leading-tight">
                  {note.title}
                </h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Includes detailed proofs, transition state maps, derivation worksheets, and standard formulas.
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/40">
                <span className="text-xs text-slate-500">
                  {note.modulesCount} sub-modules • {note.readTime}
                </span>
                <button className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/20 text-indigo-400 text-xs font-bold px-4 py-2 rounded-xl cursor-pointer transition-colors">
                  Open Guide
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
