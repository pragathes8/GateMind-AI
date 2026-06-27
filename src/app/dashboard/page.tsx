"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Task {
  id: number;
  text: string;
  duration: string;
  completed: boolean;
}

interface Subject {
  name: string;
  completedPercent: number;
  strength: "Strong" | "Medium" | "Critical";
  topicsCount: number;
  icon: string;
  color: string;
}

export default function DashboardPage() {
  // Target Stream Selection State
  const [stream, setStream] = useState("CS");

  // Today's Tasks Interactive State
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Revise LL(1) Parsing Tables & Algorithms", duration: "1.5 hrs", completed: false },
    { id: 2, text: "Solve 10 practice questions on AVL Trees", duration: "1.0 hr", completed: true },
    { id: 3, text: "Read Smart Notes on Group Theory isomorphism", duration: "30 mins", completed: false },
    { id: 4, text: "Attempt daily 5-question quick assessment", duration: "15 mins", completed: false },
  ]);

  // Subject cards data
  const subjects: Subject[] = [
    { name: "Data Structures & Algorithms", completedPercent: 82, strength: "Strong", topicsCount: 24, icon: "💻", color: "from-teal-500 to-cyan-500" },
    { name: "Discrete Mathematics", completedPercent: 74, strength: "Strong", topicsCount: 18, icon: "📐", color: "from-indigo-500 to-purple-500" },
    { name: "Operating Systems", completedPercent: 65, strength: "Medium", topicsCount: 15, icon: "⚙️", color: "from-violet-500 to-fuchsia-500" },
    { name: "Theory of Computation", completedPercent: 52, strength: "Critical", topicsCount: 12, icon: "🧠", color: "from-amber-500 to-orange-500" },
    { name: "Database Management Systems", completedPercent: 40, strength: "Critical", topicsCount: 10, icon: "🗄️", color: "from-pink-500 to-rose-500" },
    { name: "Computer Organization & Architecture", completedPercent: 30, strength: "Critical", topicsCount: 14, icon: "🔌", color: "from-blue-500 to-sky-500" },
  ];

  // Upcoming Tests data
  const tests = [
    { title: "Syllabus Mock Test 4", subject: "Discrete Mathematics & Trees", date: "June 28, 10:00 AM", duration: "90 mins", questions: 35 },
    { title: "National Level GATE Full Test", subject: "All CS Subjects", date: "July 05, 02:00 PM", duration: "180 mins", questions: 65 },
  ];

  // AI recommendations
  const recommendations = [
    {
      id: "rec-1",
      type: "weakness",
      label: "Weakness Alert",
      text: "Your average score on Compiler parsing questions dropped by 18%. Revise bottom-up parsers using the AI Tutor and take a quick 5-question quiz.",
      action: "Start Revision Quiz",
      color: "border-amber-500/30 text-amber-400 bg-amber-500/5"
    },
    {
      id: "rec-2",
      type: "retention",
      label: "Syllabus Decay Alert",
      text: "Discrete Math formulas for 'Group Theory' are reaching cognitive recall limits. Run a 10-card Spaced Repetition deck to secure your active retention score.",
      action: "Review Flashcards",
      color: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5"
    }
  ];

  // Calculate stats based on interactive tasks
  const completedTasksCount = tasks.filter(t => t.completed).length;
  const taskProgressPercent = Math.round((completedTasksCount / tasks.length) * 100);

  // Toggle task complete handler
  const handleToggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Glow overlays */}
      <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-28 pb-16 relative z-10">
        
        {/* Welcome Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-teal-500/10 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Active Prep Stream
              </span>
              <div className="flex gap-1 text-xs bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                {["CS", "ME", "EE", "EC"].map((st) => (
                  <button 
                    key={st}
                    onClick={() => setStream(st)}
                    className={`px-2 py-0.5 rounded ${stream === st ? "bg-indigo-600 text-white font-semibold" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Welcome back, Pragatheswar
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Your AI-Guided study syllabus readiness is at <span className="text-teal-400 font-semibold">58%</span>. Keep pushing!
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 bg-slate-900/40 backdrop-blur border border-slate-800 rounded-2xl p-4">
            <div className="text-center px-4 border-r border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Study Streak</span>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <span className="text-orange-500 text-xl">🔥</span>
                <span className="text-xl font-black text-white">12 Days</span>
              </div>
            </div>
            <div className="text-center px-4">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Daily Goal</span>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="w-12 bg-slate-950 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-500 to-indigo-500 h-full rounded-full transition-all duration-300" style={{ width: `${taskProgressPercent}%` }}></div>
                </div>
                <span className="text-xs font-bold text-slate-200">{taskProgressPercent}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Panel (Left 2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Weekly Progress Graph Placeholder (Premium SVG Graph) */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-white">Weekly Performance Index</h2>
                  <p className="text-slate-400 text-xs mt-0.5">Average mock test scores & quiz accuracy over time</p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-indigo-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> Current Week
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span> Baseline target (75%)
                  </span>
                </div>
              </div>

              {/* Custom SVG Graph */}
              <div className="relative w-full h-56">
                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#1e293b" strokeDasharray="3,3" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#1e293b" strokeDasharray="3,3" />
                  <line x1="0" y1="120" x2="600" y2="120" stroke="#1e293b" strokeDasharray="3,3" />
                  <line x1="0" y1="160" x2="600" y2="160" stroke="#1e293b" strokeDasharray="3,3" />
                  
                  {/* Baseline Target Reference line */}
                  <line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                  
                  {/* Gradient Area under line */}
                  <defs>
                    <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 10 160 Q 100 120 190 140 T 370 70 T 550 45 L 550 200 L 10 200 Z" 
                    fill="url(#graphGradient)" 
                  />

                  {/* Graph Trend Line */}
                  <path 
                    d="M 10 160 Q 100 120 190 140 T 370 70 T 550 45" 
                    fill="none" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                  />
                  
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#818CF8" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#14B8A6" />
                    </linearGradient>
                  </defs>

                  {/* Marker Nodes */}
                  <circle cx="10" cy="160" r="5" className="fill-indigo-500 stroke-slate-900 stroke-2" />
                  <circle cx="100" cy="120" r="5" className="fill-indigo-500 stroke-slate-900 stroke-2" />
                  <circle cx="190" cy="140" r="5" className="fill-indigo-400 stroke-slate-900 stroke-2" />
                  <circle cx="280" cy="105" r="5" className="fill-indigo-400 stroke-slate-900 stroke-2" />
                  <circle cx="370" cy="70" r="5" className="fill-indigo-500 stroke-slate-900 stroke-2" />
                  <circle cx="460" cy="55" r="5" className="fill-teal-400 stroke-slate-900 stroke-2" />
                  <circle cx="550" cy="45" r="6" className="fill-teal-400 stroke-slate-900 stroke-2" />
                </svg>

                {/* Day Labels */}
                <div className="flex justify-between mt-4 px-1 text-[11px] font-bold text-slate-500">
                  <span>Mon (62%)</span>
                  <span>Tue (70%)</span>
                  <span>Wed (66%)</span>
                  <span>Thu (74%)</span>
                  <span>Fri (82%)</span>
                  <span>Sat (86%)</span>
                  <span>Sun (88%)</span>
                </div>
              </div>
            </div>

            {/* Subject Cards Section */}
            <div>
              <h2 className="text-xl font-bold text-white mb-5 tracking-tight flex items-center gap-2">
                📂 Syllabus & Topic Mastery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects.map((subj, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between h-44 group"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{subj.icon}</span>
                          <h3 className="text-sm font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors">
                            {subj.name}
                          </h3>
                        </div>
                        {/* Strength Indicator Badge */}
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                          subj.strength === "Strong" 
                            ? "bg-teal-500/10 text-teal-400" 
                            : subj.strength === "Medium"
                            ? "bg-violet-500/10 text-violet-400"
                            : "bg-rose-500/10 text-rose-400"
                        }`}>
                          {subj.strength}
                        </span>
                      </div>
                      <span className="block text-slate-500 text-xs mt-2.5">
                        {subj.topicsCount} core modules mapped
                      </span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400">Coverage Completed</span>
                        <span className="font-bold text-white">{subj.completedPercent}%</span>
                      </div>
                      <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${subj.color} h-full rounded-full transition-all duration-500`}
                          style={{ width: `${subj.completedPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Panel (Right Column) */}
          <div className="space-y-8">
            
            {/* Daily Streak & Cal logs */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                📅 Streak Calendar
              </h2>
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-400">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={i} className="text-[10px] uppercase text-slate-500">{d}</div>
                ))}
                {/* Visual streak day log */}
                {[
                  { day: 15, active: true },
                  { day: 16, active: true },
                  { day: 17, active: true },
                  { day: 18, active: true },
                  { day: 19, active: true },
                  { day: 20, active: true },
                  { day: 21, active: false } // Today (not finished yet)
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`h-9 flex items-center justify-center rounded-lg border transition-all ${
                      item.active 
                        ? "bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-orange-500/40 text-orange-400 font-extrabold shadow-inner" 
                        : "bg-slate-950/40 border-slate-800 text-slate-500"
                    }`}
                  >
                    {item.day}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-4 leading-normal">
                Finish today's remaining tasks to light up <span className="text-orange-400 font-bold">Day 13</span>!
              </p>
            </div>

            {/* Today's Tasks (Interactive Checkbox List) */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  📝 Today's Tasks
                </h2>
                <span className="text-xs bg-slate-850 text-slate-300 px-2 py-0.5 rounded-md font-semibold">
                  {completedTasksCount}/{tasks.length}
                </span>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <div 
                    key={task.id}
                    onClick={() => handleToggleTask(task.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                      task.completed 
                        ? "bg-slate-950/20 border-slate-800/40 opacity-60" 
                        : "bg-slate-950/40 border-slate-800 hover:border-slate-700/80"
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      checked={task.completed} 
                      onChange={() => {}} // Toggle handled by parent div click
                      className="w-4.5 h-4.5 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500/20 focus:ring-offset-slate-900 mt-0.5 accent-indigo-600 cursor-pointer"
                    />
                    <div className="flex-1">
                      <span className={`text-xs font-semibold leading-relaxed block ${task.completed ? "line-through text-slate-500" : "text-slate-200"}`}>
                        {task.text}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                        ⏱️ Est: {task.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommendations Alerts */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 px-1">
                🤖 AI Recommendations
              </h2>
              {recommendations.map((rec) => (
                <div 
                  key={rec.id}
                  className={`border rounded-2xl p-5 ${rec.color} transition-all duration-300`}
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-widest block mb-1">
                    ✦ {rec.label}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed mb-4">
                    {rec.text}
                  </p>
                  <button 
                    className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs font-bold text-white transition-all cursor-pointer text-center"
                  >
                    {rec.action}
                  </button>
                </div>
              ))}
            </div>

            {/* Upcoming Tests */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                🏆 Upcoming Practice Tests
              </h2>
              <div className="space-y-4">
                {tests.map((test, index) => (
                  <div key={index} className="border-b border-slate-800/60 last:border-b-0 pb-4 last:pb-0">
                    <h3 className="text-xs font-extrabold text-white leading-tight">
                      {test.title}
                    </h3>
                    <span className="block text-[11px] text-slate-400 mt-1">
                      {test.subject}
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">
                      📅 {test.date}
                    </span>
                    <div className="flex items-center justify-between gap-4 mt-3">
                      <span className="text-[10px] text-slate-500 font-bold">
                        {test.questions} MCQs • {test.duration}
                      </span>
                      <button className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/20 text-indigo-400 text-[10px] font-extrabold px-3 py-1.5 rounded-lg cursor-pointer transition-colors">
                        Start Test
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
        </div>

      </main>

      <Footer />
    </div>
  );
}
