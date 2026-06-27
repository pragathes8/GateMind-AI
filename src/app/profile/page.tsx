"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 max-w-4xl pt-28 pb-16 relative z-10">
        <div className="section-header animate-slide-up mb-10 text-center md:text-left">
          <span className="bg-teal-500/10 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            User Workspace
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
            Profile Settings
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage your personal profile, credentials, target stream disciplines, and workspace subscriptions.
          </p>
        </div>

        {/* Profile Form Mockup */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 backdrop-blur animate-slide-up delay-100">
          <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  defaultValue="Pragatheswar S"
                  className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500/50"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  defaultValue="name@university.edu"
                  className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500/50"
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Target GATE Stream
                </label>
                <select 
                  defaultValue="CS"
                  className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500/50 cursor-pointer"
                >
                  <option value="CS">Computer Science & IT (CS)</option>
                  <option value="ME">Mechanical Engineering (ME)</option>
                  <option value="EE">Electrical Engineering (EE)</option>
                  <option value="EC">Electronics & Communication (EC)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Subscription Tier
                </label>
                <input 
                  type="text" 
                  defaultValue="Premium Prep (Expires June 2027)"
                  className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-3 text-sm text-teal-400 font-bold focus:outline-none"
                  disabled
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4 pt-6 border-t border-slate-800/60">
              <button 
                type="button"
                className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-300 text-xs font-bold px-5 py-3 rounded-xl cursor-pointer"
              >
                Sign Out
              </button>
              <button 
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
