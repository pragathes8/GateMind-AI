import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Admin Panel | GateMind AI",
  description: "GateMind AI administrative console for user audits, system metrics, and AI configuration settings.",
};

export default function AdminPanelPage() {
  const adminStats = [
    { title: "Total Enrolled Users", value: "8,421", change: "+14% this week" },
    { title: "Active AI Sessions", value: "342 Live", change: "Latency: 280ms" },
    { title: "Mock Tests Graded", value: "12,940", change: "Accuracy: 99.4%" },
    { title: "Server CPU Load", value: "32%", change: "Region: ap-south-1" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-28 pb-16 relative z-10">
        <div className="section-header animate-slide-up mb-10 text-center md:text-left">
          <span className="bg-rose-500/10 text-rose-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            System Console
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
            Admin Panel
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            System performance logs, user management audit tables, and model parameters overrides.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-slide-up delay-100">
          {adminStats.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur"
            >
              <span className="text-xs text-slate-500 font-semibold">{item.title}</span>
              <div className="text-2xl font-black text-white mt-1.5 mb-1">{item.value}</div>
              <span className="text-[10px] text-teal-400 font-bold tracking-wider">{item.change}</span>
            </div>
          ))}
        </div>

        {/* Configurations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up delay-200">
          {/* Audit Log */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
            <h2 className="text-base font-bold text-white mb-4">User Audit Log</h2>
            <div className="space-y-4 text-xs">
              <div className="pb-3 border-b border-slate-800/60 flex justify-between">
                <div>
                  <span className="font-bold text-slate-200">User #8402 (CSE)</span>
                  <span className="block text-slate-500 mt-0.5">Attempted Mock Test 3</span>
                </div>
                <span className="text-slate-500">2 mins ago</span>
              </div>
              <div className="pb-3 border-b border-slate-800/60 flex justify-between">
                <div>
                  <span className="font-bold text-slate-200">User #7819 (ECE)</span>
                  <span className="block text-slate-500 mt-0.5">Generated notes: Signal Processing</span>
                </div>
                <span className="text-slate-500">12 mins ago</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-bold text-slate-200">User #9011 (ME)</span>
                  <span className="block text-slate-500 mt-0.5">Signed up via Google OAuth</span>
                </div>
                <span className="text-slate-500">1 hr ago</span>
              </div>
            </div>
          </div>

          {/* Model Tuning Parameters */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur flex flex-col justify-between">
            <div>
              <h2 className="text-base font-bold text-white mb-4">Model Tuning Configurations</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2">Model Temperature (Tutor LLM)</label>
                  <input type="range" min="0" max="100" defaultValue="20" className="w-full accent-indigo-500 bg-slate-950 rounded-lg appearance-none h-2" />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1.5">
                    <span>Deterministic (0.0)</span>
                    <span className="font-bold text-indigo-400">Current: 0.2</span>
                    <span>Creative (1.0)</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2">System Context Prompts</label>
                  <select className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 cursor-pointer">
                    <option value="gate-2026">GATE 2026 Focus Mode v1.2</option>
                    <option value="test-gen">Assessment Builder Mode v3.0</option>
                  </select>
                </div>
              </div>
            </div>
            
            <button className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold w-full py-3 rounded-xl transition-all cursor-pointer mt-6">
              Apply Configurations
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
