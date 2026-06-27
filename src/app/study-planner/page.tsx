"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ScheduleItem {
  time: string;
  task: string;
  topic: string;
  completed: boolean;
}

interface Goal {
  id: number;
  text: string;
  completed: boolean;
}

export default function StudyPlannerPage() {
  // Calendar interactive state: Selected Day
  const [selectedDay, setSelectedDay] = useState(27);

  // Weekly Goals Interactive state
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, text: "Complete 3 full-length Algorithms mock tests", completed: true },
    { id: 2, text: "Revise 25 compiler parser parsing table terms", completed: false },
    { id: 3, text: "Solve 15 Discrete Mathematics group theory proofs", completed: false },
    { id: 4, text: "Achieve 400+ minutes of total focused study time", completed: false },
  ]);

  // Pomodoro Timer State
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerMode, setTimerMode] = useState<"work" | "break">("work");

  // Daily Schedule state based on selected date
  const scheduleData: Record<number, ScheduleItem[]> = {
    25: [
      { time: "08:00 AM - 10:00 AM", task: "Solve Practice Set: Combinatorics", topic: "Discrete Mathematics", completed: true },
      { time: "11:30 AM - 01:00 PM", task: "Review Smart Notes: Semaphores", topic: "Operating Systems", completed: true },
      { time: "03:00 PM - 05:00 PM", task: "Attempt PYQ Module: SQL Queries", topic: "DBMS", completed: true },
    ],
    26: [
      { time: "09:00 AM - 11:00 AM", task: "AI Tutor Session: LR(1) lookaheads", topic: "Compiler Design", completed: true },
      { time: "02:00 PM - 04:00 PM", task: "Solve 10 questions: Graph Traversals", topic: "Algorithms & DS", completed: true },
      { time: "06:00 PM - 07:30 PM", task: "Math Formula card review", topic: "Linear Algebra", completed: true },
    ],
    27: [ // Today
      { time: "08:30 AM - 10:30 AM", task: "Syllabus practice: Context-Free Grammars", topic: "Theory of Computation", completed: true },
      { time: "11:30 AM - 01:00 PM", task: "Solve 5 questions: Dynamic Programming", topic: "Algorithms & DS", completed: false },
      { time: "03:00 PM - 04:30 PM", task: "Smart Notes: Cache Coherence protocols", topic: "Computer Architecture", completed: false },
      { time: "06:00 PM - 07:00 PM", task: "Weekly review: Weak topics analysis", topic: "AI Recommendations", completed: false },
    ],
    28: [
      { time: "10:00 AM - 11:30 AM", task: "Attempt Syllabus Mock Test 4", topic: "Discrete Math & Trees", completed: false },
      { time: "02:00 PM - 04:00 PM", task: "Tutor Review: Mock 4 corrections", topic: "AI Tutor Co-Pilot", completed: false },
    ],
    29: [
      { time: "08:00 AM - 10:00 AM", task: "Formula Card Spaced Repetition deck", topic: "General Engineering Math", completed: false },
      { time: "01:00 PM - 03:00 PM", task: "Smart Notes: TCP Congestion Control", topic: "Computer Networks", completed: false },
    ],
  };

  // Pomodoro Interval Timer Hook
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timerActive) {
      interval = setInterval(() => {
        if (timerSeconds === 0) {
          if (timerMinutes === 0) {
            // Mode swap
            if (timerMode === "work") {
              setTimerMode("break");
              setTimerMinutes(5);
            } else {
              setTimerMode("work");
              setTimerMinutes(25);
            }
            setTimerActive(false);
          } else {
            setTimerMinutes(timerMinutes - 1);
            setTimerSeconds(59);
          }
        } else {
          setTimerSeconds(timerSeconds - 1);
        }
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timerSeconds, timerMinutes, timerMode]);

  // Pomodoro controllers
  const handleTimerReset = () => {
    setTimerActive(false);
    setTimerMode("work");
    setTimerMinutes(25);
    setTimerSeconds(0);
  };

  // Toggle goals completed
  const handleToggleGoal = (id: number) => {
    setGoals(goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  };

  // Calculation parameters
  const completedGoalsCount = goals.filter(g => g.completed).length;
  const weeklyProgressPercent = Math.round((completedGoalsCount / goals.length) * 100);

  const activeDaySchedule = scheduleData[selectedDay] || [];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Glow overlays */}
      <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
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
        
        {/* Page Header */}
        <div className="mb-8 pb-6 border-b border-slate-800/60">
          <span className="bg-teal-500/10 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Optimized Milestones
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
            Personalized Study Planner
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Build cognitive retention and map out your syllabus pacing in real time.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Area (Left 2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Calendar Widget */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-white">Study Calendar</h2>
                  <p className="text-slate-400 text-xs mt-0.5">Click any highlighted date to inspect daily schedule slots</p>
                </div>
                <span className="text-xs bg-slate-950/60 border border-slate-800 px-3 py-1 rounded-lg text-slate-300 font-semibold">
                  June 2026
                </span>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2.5 text-center text-xs">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
                  <div key={i} className="font-bold text-slate-500 py-1 uppercase text-[10px] tracking-wider">{d}</div>
                ))}
                
                {/* 1st - 21st spacer offsets */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`spacer-${i}`} className="py-2.5 text-slate-700 opacity-25">.</div>
                ))}
                
                {/* Active calendar cells */}
                {[
                  { date: 25, hasSchedule: true, state: "completed" },
                  { date: 26, hasSchedule: true, state: "completed" },
                  { date: 27, hasSchedule: true, state: "active" }, // Today
                  { date: 28, hasSchedule: true, state: "upcoming" },
                  { date: 29, hasSchedule: true, state: "upcoming" },
                  { date: 30, hasSchedule: false, state: "idle" },
                  { date: 1, hasSchedule: false, state: "idle" },
                  { date: 2, hasSchedule: false, state: "idle" },
                  { date: 3, hasSchedule: false, state: "idle" },
                  { date: 4, hasSchedule: false, state: "idle" },
                ].map((item, idx) => {
                  const isSelected = selectedDay === item.date;
                  return (
                    <button
                      key={idx}
                      onClick={() => item.hasSchedule && setSelectedDay(item.date)}
                      disabled={!item.hasSchedule}
                      className={`py-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                        isSelected 
                          ? "bg-indigo-600 border-indigo-500 text-white scale-[1.03] shadow-md shadow-indigo-500/20" 
                          : item.state === "completed"
                          ? "bg-slate-950/40 border-slate-800/80 text-teal-400 hover:border-slate-700 cursor-pointer"
                          : item.state === "active"
                          ? "bg-slate-950/40 border-amber-500/50 text-amber-400 hover:border-amber-400 cursor-pointer"
                          : item.state === "upcoming"
                          ? "bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700 cursor-pointer"
                          : "bg-transparent border-transparent text-slate-600 opacity-40 cursor-not-allowed"
                      }`}
                    >
                      <span>{item.date}</span>
                      {item.hasSchedule && (
                        <span className={`w-1 h-1 rounded-full ${isSelected ? "bg-white" : item.state === "completed" ? "bg-teal-400" : item.state === "active" ? "bg-amber-400" : "bg-indigo-400"}`}></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Daily Schedule Slots */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  ⏱️ Schedule: June {selectedDay}
                </h2>
                <span className="text-xs bg-slate-950/60 text-slate-400 px-2.5 py-1 rounded-lg border border-slate-850">
                  {selectedDay === 27 ? "Today's Schedule" : "Selected Date Targets"}
                </span>
              </div>

              {activeDaySchedule.length > 0 ? (
                <div className="relative border-l border-slate-800 ml-3.5 pl-6 space-y-6 py-1">
                  {activeDaySchedule.map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline Dot */}
                      <span className={`absolute left-[-31px] top-1.5 w-4 h-4 rounded-full border-2 stroke-slate-900 ${
                        item.completed 
                          ? "bg-teal-400 border-slate-900" 
                          : "bg-slate-900 border-slate-700"
                      }`}></span>
                      
                      <div className={`p-4 rounded-xl border transition-all ${
                        item.completed 
                          ? "bg-slate-950/20 border-slate-850 opacity-60" 
                          : "bg-slate-950/40 border-slate-800"
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">
                              {item.time}
                            </span>
                            <h3 className={`text-xs font-bold leading-relaxed ${item.completed ? "line-through text-slate-500" : "text-slate-200"}`}>
                              {item.task}
                            </h3>
                          </div>
                          <span className="bg-slate-900 border border-slate-800 text-[10px] font-bold text-indigo-400 px-2.5 py-0.5 rounded-md self-start sm:self-center">
                            {item.topic}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500 text-xs">
                  No schedule set for this date.
                </div>
              )}
            </div>

            {/* Subject Priority Cards */}
            <div>
              <h2 className="text-xl font-bold text-white mb-5 tracking-tight flex items-center gap-2">
                📌 Exam Weightage & Subject Priorities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: "Algorithms & DS", weight: "12-15 Marks", priority: "High Priority", bg: "from-rose-500/10 to-rose-600/5 border-rose-500/20 text-rose-400", desc: "Top weightage. Major topics include Trees, Dynamic Programming, and Graph Traversals." },
                  { name: "Theory of Computation", weight: "8-10 Marks", priority: "Critical Pacing", bg: "from-amber-500/10 to-amber-600/5 border-amber-500/20 text-amber-400", desc: "High conceptual clarity required. Master Turing Machines and Decidability proofs." },
                  { name: "Operating Systems", weight: "6-8 Marks", priority: "Standard Review", bg: "from-indigo-500/10 to-indigo-600/5 border-indigo-500/20 text-indigo-400", desc: "Process Synchronization, Semaphores, and Virtual Memory are highest priority modules." },
                ].map((subj, idx) => (
                  <div key={idx} className={`bg-gradient-to-br border rounded-2xl p-5 flex flex-col justify-between h-48 ${subj.bg}`}>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xs font-bold text-white">{subj.name}</h3>
                        <span className="text-[9px] uppercase font-black tracking-widest">{subj.weight}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-2.5">
                        {subj.desc}
                      </p>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider mt-4">
                      ✦ {subj.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Area (Right Column) */}
          <div className="space-y-8">
            
            {/* Interactive Pomodoro Timer Card */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur text-center flex flex-col items-center">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-5 flex items-center gap-2 self-start">
                ⏱️ Pomodoro Focus Timer
              </h2>

              {/* Digital Clock Display */}
              <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                {/* SVG Progress Ring */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="72" cy="72" r="64" stroke="#1e293b" strokeWidth="4" fill="transparent" />
                  <circle 
                    cx="72" 
                    cy="72" 
                    r="64" 
                    stroke="var(--color-indigo)" 
                    strokeWidth="4" 
                    fill="transparent" 
                    strokeDasharray={2 * Math.PI * 64}
                    strokeDashoffset={2 * Math.PI * 64 * (1 - (timerMinutes * 60 + timerSeconds) / (timerMode === "work" ? 1500 : 300))}
                    className="transition-all duration-1000"
                  />
                </svg>

                <div className="absolute text-center">
                  <span className="text-3xl font-black text-white font-mono">
                    {String(timerMinutes).padStart(2, "0")}:{String(timerSeconds).padStart(2, "0")}
                  </span>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                    {timerMode === "work" ? "💻 Work Focus" : "☕ Break"}
                  </span>
                </div>
              </div>

              {/* Timer Controls */}
              <div className="flex gap-2 w-full">
                <button
                  onClick={() => setTimerActive(!timerActive)}
                  className={`flex-1 font-bold py-2.5 px-4 rounded-xl text-xs cursor-pointer transition-all ${
                    timerActive 
                      ? "bg-amber-600/10 hover:bg-amber-600/20 border border-amber-500/20 text-amber-400" 
                      : "bg-indigo-600 hover:bg-indigo-500 text-white"
                  }`}
                >
                  {timerActive ? "Pause Focus" : "Start Focus"}
                </button>
                <button
                  onClick={handleTimerReset}
                  className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 font-bold py-2.5 px-4 rounded-xl text-xs cursor-pointer transition-all"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Weekly Goals Progress Tracker */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                📈 Weekly Goal Progress
              </h2>
              
              <div className="mb-6">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400">Week 4 Syllabus Targets</span>
                  <span className="font-bold text-white">{weeklyProgressPercent}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-teal-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${weeklyProgressPercent}%` }}
                  ></div>
                </div>
              </div>

              {/* Goals list */}
              <div className="space-y-3">
                {goals.map((g) => (
                  <div 
                    key={g.id}
                    onClick={() => handleToggleGoal(g.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                      g.completed 
                        ? "bg-slate-950/20 border-slate-800/40 opacity-60" 
                        : "bg-slate-950/40 border-slate-800 hover:border-slate-700/80"
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      checked={g.completed} 
                      onChange={() => {}} // Handled by parent div click
                      className="w-4.5 h-4.5 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500/20 focus:ring-offset-slate-900 mt-0.5 accent-indigo-600 cursor-pointer"
                    />
                    <span className={`text-xs font-semibold leading-relaxed ${g.completed ? "line-through text-slate-500" : "text-slate-200"}`}>
                      {g.text}
                    </span>
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
