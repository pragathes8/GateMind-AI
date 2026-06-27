import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing | GateMind AI",
  description: "View pricing plans for GateMind AI, including our Free Starter, Premium Prep, and College/Group subscriptions.",
};

export default function PricingPage() {
  const tiers = [
    {
      name: "Free Starter",
      price: "$0",
      period: "forever",
      desc: "Perfect for exploring platform tools and reviewing basic guides.",
      features: [
        "Access to syllabus smart notes",
        "15 daily AI Tutor query credits",
        "Simple syllabus study planner",
        "1 active Spaced Repetition deck"
      ],
      popular: false,
      cta: "Start for Free"
    },
    {
      name: "Premium Prep",
      price: "$19",
      period: "per month",
      desc: "Full-featured toolkit built to secure your double-digit GATE rank.",
      features: [
        "Unlimited custom notes generation",
        "24/7 Unlimited AI Tutor query chats",
        "Adaptive mock tests & detailed solutions",
        "Spaced repetition cards analytics",
        "Predictor rank forecast reports"
      ],
      popular: true,
      cta: "Upgrade to Premium"
    },
    {
      name: "Institutional Group",
      price: "Custom",
      period: "school license",
      desc: "Tailored licenses for coaching classes, colleges, and study groups.",
      features: [
        "Everything in Premium Prep tier",
        "Bulk student enrollment configurations",
        "Faculty tracking analytics dashboard",
        "Shared mock exams and custom test banks"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-28 pb-16 relative z-10">
        <div className="section-header animate-slide-up mb-12 text-center">
          <span className="bg-teal-500/10 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Optimized Tiers
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
            Transparent Pricing Plans
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-xl mx-auto">
            Choose the preparation tier that maps to your targets and study routine. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch animate-slide-up delay-100">
          {tiers.map((t, idx) => (
            <div 
              key={idx}
              className={`bg-slate-900/60 border rounded-3xl p-8 backdrop-blur flex flex-col justify-between relative ${
                t.popular ? "border-indigo-500 shadow-xl shadow-indigo-500/5" : "border-slate-800/80"
              }`}
            >
              {t.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold text-white mb-2">{t.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">{t.desc}</p>
                
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-3xl font-black text-white">{t.price}</span>
                  <span className="text-slate-500 text-xs">/ {t.period}</span>
                </div>

                <div className="border-t border-slate-800/60 pt-6 mb-8">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block mb-4">
                    Features Included:
                  </span>
                  <ul className="space-y-3.5">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="text-teal-400 font-bold">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  t.popular 
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-500/20" 
                    : "bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300"
                }`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
