import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mock Tests | GateMind AI",
  description: "Test your engineering skills with adaptive, timed mock tests tailored for GATE preparation.",
};

export default function MockTestsPage() {
  const practiceTests = [
    { name: "Full Syllabus Mock Test 1", subject: "All Subjects", questions: 65, duration: "180 mins", rating: "Hard" },
    { name: "Algorithms & Logic Quiz", subject: "Computer Science", questions: 20, duration: "45 mins", rating: "Medium" },
    { name: "Linear Algebra & Calculus Practice", subject: "Engineering Mathematics", questions: 15, duration: "30 mins", rating: "Easy" },
    { name: "Process Scheduling Drill", subject: "Operating Systems", questions: 10, duration: "20 mins", rating: "Medium" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <Navbar />

      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-28 pb-16 relative z-10">
        <div className="section-header animate-slide-up mb-10 text-center md:text-left">
          <span className="bg-teal-500/10 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Mock Examinations
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
            Adaptive Mock Tests
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Attempt timed practice tests compiled by our AI engine to match current IIT patterns and grading benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up delay-100">
          {practiceTests.map((test, index) => (
            <div 
              key={index}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-base font-bold text-white leading-tight">
                    {test.name}
                  </h3>
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                    test.rating === "Hard" ? "bg-rose-500/10 text-rose-400" : test.rating === "Medium" ? "bg-violet-500/10 text-violet-400" : "bg-teal-500/10 text-teal-400"
                  }`}>
                    {test.rating}
                  </span>
                </div>
                <span className="block text-xs text-indigo-400 font-semibold mt-1">
                  {test.subject}
                </span>
                <p className="text-slate-500 text-xs mt-3">
                  Contains MCQ, MSQ, and NAT type questions evaluated using standard negative marking rules.
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/40">
                <span className="text-xs text-slate-400 font-medium">
                  {test.questions} Questions • {test.duration}
                </span>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer">
                  Start Test
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
