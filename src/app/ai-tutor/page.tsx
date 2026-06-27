"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export default function AITutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am your GateMind AI Tutor. Select one of the suggested prompts below or ask me any technical question, equation, or proof from the GATE syllabus.",
      timestamp: "10:30 AM",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested Prompts data
  const suggestedPrompts = [
    "Explain SLR(1) vs LALR(1) parsing tables.",
    "Show proof that the Halting Problem is undecidable.",
    "Calculate subnet masks for 5 subnets from 192.168.1.0/24.",
    "Explain Dijkstra's vs Bellman-Ford complexity.",
  ];

  // Saved Chats sidebar mock data
  const savedChats = [
    { id: "chat-1", title: "Theory of Computation", active: true },
    { id: "chat-2", title: "Compiler Parser Trees", active: false },
    { id: "chat-3", title: "Subnetting Computations", active: false },
    { id: "chat-4", title: "Graph Dijkstra Proofs", active: false },
  ];

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle Form Submit
  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // 1. Add User Message
    const userMsg: Message = {
      id: Date.now(),
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // 2. Trigger Mock AI Response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      let aiText = "I've analyzed your query. Let's break it down mathematically: \n\n";

      if (text.toLowerCase().includes("parser") || text.toLowerCase().includes("slr")) {
        aiText += `**LR Parsing Comparison Table:**
        
*   **SLR(1):** Simple LR. Uses LR(0) state machines and references **Follow sets** of the LHS non-terminals to decide on reduce actions. It is smaller but less powerful.
*   **LALR(1):** Look-Ahead LR. Merges states in LR(1) that share the same core items but differ in look-aheads. It is highly efficient and maps directly to Yacc/Bison parser compilers.
*   **CLR(1):** Canonical LR. Keeps all look-aheads split, leading to massive state tables (potentially thousands of states).

Let me know if you want me to draw a transition state table!`;
      } else if (text.toLowerCase().includes("halting") || text.toLowerCase().includes("undecidable")) {
        aiText += `**Halting Problem Undecidability Proof (by Diagonalization):**

Assume there exists a decider Turing Machine $H$ that decides halting for any program $P$ and input $I$:
$$H(P, I) = \\begin{cases} \\text{Accept} & \\text{if } P \\text{ halts on } I \\\\ \\text{Reject} & \\text{if } P \\text{ loops on } I \\end{cases}$$

Now, construct a new machine $D$ that takes a description of a machine $M$ as input:
1. $D$ runs $H$ on $(M, M)$.
2. If $H$ says "halts" (Accept), $D$ enters an infinite loop.
3. If $H$ says "loops" (Reject), $D$ halts (Accept).

What happens when we run $D(D)$?
* If $D$ halts on $D$, then $H(D, D)$ accepts. By definition of $D$, it will loop infinitely. Contradiction!
* If $D$ loops infinitely on $D$, then $H(D, D)$ rejects. By definition of $D$, it halts. Contradiction!

Thus, the decider $H$ cannot exist. The Halting Problem is **undecidable**.`;
      } else if (text.toLowerCase().includes("subnet") || text.toLowerCase().includes("192.168")) {
        aiText += `To split **192.168.1.0/24** into 5 distinct subnets, we need to borrow host bits for the network prefix:

1.  **Bit Borrowing:** We need $2^b \\ge 5$. Thus, we must borrow $b = 3$ bits.
2.  **New Prefix:** $/24 + 3 = /27$. The new subnet mask is $255.255.255.224$ (since $128+64+32 = 224$).
3.  **Subnet Increments:** $2^{8-3} = 32$. The subnets increment by blocks of 32:
    *   **Subnet 1:** \`192.168.1.0/27\` (Hosts: .1 to .30, Broadcast: .31)
    *   **Subnet 2:** \`192.168.1.32/27\` (Hosts: .33 to .62, Broadcast: .63)
    *   **Subnet 3:** \`192.168.1.64/27\` (Hosts: .65 to .94, Broadcast: .95)
    *   **Subnet 4:** \`192.168.1.96/27\` (Hosts: .97 to .126, Broadcast: .127)
    *   **Subnet 5:** \`192.168.1.128/27\` (Hosts: .129 to .158, Broadcast: .159)`;
      } else {
        aiText += `That is a standard question in the GATE syllabus. 

Here are the key points to study:
1.  Verify the standard **pre-conditions** or definitions of the theorems involved.
2.  Check the **complexity bounds** (worst-case vs average-case).
3.  Trace past GATE questions from 2021-2025 to see how this topic was evaluated.

Would you like me to generate a 5-question practice test on this topic?`;
      }

      const aiMsg: Message = {
        id: Date.now(),
        sender: "ai",
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(inputText);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Glow overlays */}
      <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
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

      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-24 pb-12 flex relative z-10 h-[calc(100vh-80px)]">
        
        {/* ChatGPT Style Workspace Box */}
        <div className="w-full flex bg-slate-900/60 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl h-[560px] md:h-[620px] mt-4">
          
          {/* Chat Sidebar (Hidden on mobile) */}
          <div className="hidden md:flex flex-col w-64 bg-slate-950/40 border-r border-slate-800/80 p-4 justify-between">
            <div className="space-y-6">
              {/* New Chat Button */}
              <button 
                onClick={() => setMessages([
                  {
                    id: Date.now(),
                    sender: "ai",
                    text: "Conversation reset. Select a prompt or ask a new question.",
                    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                  }
                ])}
                className="w-full flex items-center justify-center gap-2 border border-slate-700/50 hover:border-slate-600 rounded-xl py-2 px-4 text-xs font-bold text-slate-200 hover:text-white bg-slate-950/20 hover:bg-slate-950/50 transition-all cursor-pointer"
              >
                <span>➕</span> New Chat
              </button>

              {/* Chat History Mock */}
              <div>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block mb-3 px-2">
                  Recent Topics
                </span>
                <div className="space-y-1">
                  {savedChats.map((c) => (
                    <button
                      key={c.id}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-semibold transition-all ${
                        c.active 
                          ? "bg-indigo-600/15 border border-indigo-500/25 text-indigo-300" 
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/20 border border-transparent"
                      }`}
                    >
                      <span>💬</span>
                      <span className="truncate">{c.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile widget at sidebar bottom */}
            <div className="flex items-center gap-3 p-2 border-t border-slate-800/60 pt-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                PS
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs font-bold text-white truncate">Pragatheswar S</span>
                <span className="block text-[10px] text-slate-500 truncate">GATE CS Track</span>
              </div>
            </div>
          </div>

          {/* Chat Workspace (Main area) */}
          <div className="flex-1 flex flex-col justify-between h-full bg-slate-900/10">
            
            {/* Workspace Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <div>
                  <h2 className="text-sm font-bold text-white leading-tight">GATE Co-Pilot AI</h2>
                  <span className="text-[10px] text-slate-500">Trained on reference literature</span>
                </div>
              </div>
              <div className="text-xs bg-slate-950/40 border border-slate-850 px-2.5 py-1 rounded-lg text-slate-400 font-semibold">
                Computer Science
              </div>
            </div>

            {/* Message Thread */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 shadow ${
                    msg.sender === "ai" 
                      ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white" 
                      : "bg-slate-800 border border-slate-700 text-slate-200"
                  }`}>
                    {msg.sender === "ai" ? "🤖" : "👨‍🎓"}
                  </div>

                  {/* Bubble */}
                  <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed border whitespace-pre-line ${
                    msg.sender === "ai"
                      ? "bg-slate-950/30 border-slate-850 text-slate-200"
                      : "bg-indigo-600/10 border-indigo-500/20 text-slate-100"
                  }`}>
                    {msg.text}
                    <span className="block text-[9px] text-slate-500 text-right mt-1.5 font-medium">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Animation Placeholder */}
              {isTyping && (
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm flex-shrink-0">
                    🤖
                  </div>
                  <div className="bg-slate-950/30 border border-slate-850 rounded-2xl px-4 py-3 flex items-center gap-1.5 h-10">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts Panel (Shown only when welcome message is alone) */}
            {messages.length === 1 && !isTyping && (
              <div className="px-6 mb-4">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block mb-2.5">
                  Suggested Prompts
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {suggestedPrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(p)}
                      className="bg-slate-950/20 hover:bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 text-[11px] font-semibold text-slate-300 hover:text-white text-left transition-all hover:scale-[1.01] cursor-pointer"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Box Panel */}
            <div className="px-6 pb-6 pt-2 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-slate-950/40 border border-slate-800 rounded-2xl p-2 focus-within:border-indigo-500/50 transition-all duration-200">
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask your AI Tutor about equations, proofs, or parsers..."
                  className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder-slate-500 text-sm px-3 py-2"
                  disabled={isTyping}
                />
                <button 
                  type="submit"
                  disabled={isTyping || !inputText.trim()}
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl w-9 h-9 flex items-center justify-center transition-colors disabled:opacity-40 disabled:scale-100 cursor-pointer hover:scale-[1.03] active:scale-[0.97]"
                >
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
