import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Analytics | GateMind AI",
  description: "Monitor your GATE preparation analytics, syllabus coverage progress, and mock accuracy logs.",
};

export default function AnalyticsPage() {
  const metrics = [
    { title: "Syllabus Completed", value: "58%", desc: "Computer Science Track" },
    { title: "Avg. Accuracy Index", value: "78%", desc: "Target 85% for AIR < 100" },
    { title: "Mock Tests Attempted", value: "14 Exams", desc: "4 Full length, 10 Subject" },
    { title: "Total Focused Hours", value: "240 hrs", desc: "5.5 hrs daily average" },
  ];

  const categories = [
    { name: "Algorithms & Data Structures", progress: 84, status: "Outstanding" },
    { name: "Discrete Mathematics", progress: 78, status: "Strong" },
    { name: "Operating Systems", progress: 68, status: "Optimal" },
    { name: "Theory of Computation", progress: 54, status: "Critical" },
    { name: "Database Systems", progress: 42, status: "Weak" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-28 pb-16 relative z-10">
        <div className="section-header animate-slide-up mb-10 text-center md:text-left">
          <span className="bg-teal-500/10 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Preparation Metrics
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
            Performance Analytics
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Detailed tracking of study metrics, subject mastery indices, and progress compared against baseline toppers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-slide-up delay-100">
          {metrics.map((m, index) => (
            <div 
              key={index}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur"
            >
              <span className="text-xs text-slate-500 font-semibold">{m.title}</span>
              <div className="text-2xl font-black text-white mt-1.5 mb-1">{m.value}</div>
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">{m.desc}</span>
            </div>
          ))}
        </div>

        {/* Subject progress bar layout */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 backdrop-blur animate-slide-up delay-200">
          <h2 className="text-base font-bold text-white mb-6">Subject Mastery Progress</h2>
          <div className="space-y-6">
            {categories.map((c, index) => (
              <div key={index}>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-bold">{c.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                      c.status === "Outstanding" ? "bg-teal-500/10 text-teal-400" : c.status === "Strong" ? "bg-indigo-500/10 text-indigo-400" : c.status === "Optimal" ? "bg-violet-500/10 text-violet-400" : "bg-rose-500/10 text-rose-400"
                    }`}>
                      {c.status}
                    </span>
                    <span className="text-white font-extrabold">{c.progress}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${c.progress}%` }}
                  ></div>
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
