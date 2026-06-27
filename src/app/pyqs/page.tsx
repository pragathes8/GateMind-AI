import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PYQs | GateMind AI",
  description: "Browse and solve Previous Years Questions (PYQs) from GATE exams (2010 - 2025) with detailed AI solutions.",
};

export default function PYQsPage() {
  const pyqYears = [
    { year: "GATE 2025", subject: "Computer Science", code: "CS", solvedStatus: "Solved" },
    { year: "GATE 2024", subject: "Computer Science", code: "CS", solvedStatus: "Solved" },
    { year: "GATE 2023", subject: "Computer Science", code: "CS", solvedStatus: "Unsolved" },
    { year: "GATE 2022", subject: "Computer Science", code: "CS", solvedStatus: "Solved" },
    { year: "GATE 2021", subject: "Computer Science", code: "CS", solvedStatus: "Unsolved" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-28 pb-16 relative z-10">
        <div className="section-header animate-slide-up mb-10 text-center md:text-left">
          <span className="bg-teal-500/10 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Exam Archives
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
            Previous Year Questions (PYQs)
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Review papers from past GATE exams, complete with step-by-step mathematical derivations and conceptual explanations.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur animate-slide-up delay-100">
          <div className="p-6 border-b border-slate-800/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-base font-bold text-white">GATE CS Archive</h2>
            <div className="flex gap-2">
              <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-lg">Computer Science</span>
              <span className="bg-slate-950 border border-slate-800 text-slate-400 text-xs px-3 py-1 rounded-lg">Mechanical</span>
              <span className="bg-slate-950 border border-slate-800 text-slate-400 text-xs px-3 py-1 rounded-lg">Electrical</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/60">
            {pyqYears.map((item, index) => (
              <div 
                key={index}
                className="p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-slate-900/20 transition-all duration-200"
              >
                <div>
                  <h3 className="text-sm font-bold text-white">{item.year} Question Paper</h3>
                  <span className="text-xs text-slate-500 mt-1 block">{item.subject} • Paper Code: {item.code}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                    item.solvedStatus === "Solved" ? "bg-teal-500/10 text-teal-400" : "bg-slate-800 text-slate-500"
                  }`}>
                    {item.solvedStatus}
                  </span>
                  <button className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer">
                    Download PDF
                  </button>
                  <button className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/20 text-indigo-400 text-xs font-bold px-3.5 py-1.5 rounded-lg cursor-pointer">
                    Solve Online
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
