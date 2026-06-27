"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Decorative Glow Backdrops */}
      <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, #000 70%, transparent 100%)'
        }}
      ></div>

      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-24 relative z-10">
        <div className="w-full max-w-md bg-slate-900/65 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl transition-all duration-300">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Start Preparing Free
            </h1>
            <p className="text-slate-400 text-sm">
              Get instant access to AI notes, tutoring, and mock quizzes.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label 
                htmlFor="name" 
                className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Full Name
              </label>
              <input 
                type="text" 
                id="name" 
                placeholder="Pragatheswar S"
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="name@university.edu"
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
                required
              />
            </div>

            {/* GATE Stream Selection */}
            <div>
              <label 
                htmlFor="stream" 
                className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Target GATE Discipline
              </label>
              <select
                id="stream"
                className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 cursor-pointer"
                required
              >
                <option value="CS">Computer Science & IT (CS)</option>
                <option value="EC">Electronics & Communication (EC)</option>
                <option value="EE">Electrical Engineering (EE)</option>
                <option value="ME">Mechanical Engineering (ME)</option>
                <option value="CE">Civil Engineering (CE)</option>
              </select>
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  placeholder="Minimum 8 characters"
                  className="w-full bg-slate-950/40 border border-slate-800 rounded-xl pl-4 pr-12 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
                  required
                />
                
                {/* Visibility Toggle Button */}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 focus:outline-none p-1 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Terms and Privacy policy Checkbox */}
            <div className="flex items-start pt-1">
              <input 
                type="checkbox" 
                id="terms" 
                className="w-4 h-4 rounded border-slate-800 bg-slate-950/40 text-indigo-600 focus:ring-indigo-500/20 focus:ring-offset-slate-900 accent-indigo-600 cursor-pointer mt-0.5" 
                required 
              />
              <label 
                htmlFor="terms" 
                className="ml-2.5 text-xs text-slate-400 select-none cursor-pointer leading-normal"
              >
                I agree to the{" "}
                <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-sm cursor-pointer mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-slate-800/80"></div>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-4">Or register with</span>
            <div className="flex-1 h-px bg-slate-800/80"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full bg-slate-950/20 hover:bg-slate-950/40 border border-slate-800 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-200 hover:text-white flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.73 0 3.3.62 4.51 1.66l2.45-2.45C17.46 1.76 15.02 1 12.24 1c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.77 0 9.61-4.06 9.61-9.77 0-.66-.06-1.29-.17-1.945H12.24z"/>
            </svg>
            Google OAuth
          </button>

          {/* Footer Link */}
          <div className="text-center mt-8 text-xs text-slate-400">
            Already have an account?{" "}
            <Link href="/login" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors ml-1">
              Sign In
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
