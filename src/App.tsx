import React, { useState, useEffect } from 'react';
import { questions } from './questions';
import { 
  BookOpen, 
  Layers, 
  CheckCircle, 
  HelpCircle, 
  RefreshCw, 
  Search, 
  Award, 
  Terminal, 
  Activity, 
  Clock, 
  ChevronRight,
  ArrowRight,
  GitCommit
} from 'lucide-react';

interface QuestionItem {
  category: string;
  question: string;
  answer: string;
  example?: string;          // <-- Added '?' to make it safe if missing
  crossQuestions?: string[]; // <-- Added '?' to make it safe if missing
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedIndex, setRevealedIndex] = useState<number | null>(null);

  // LocalStorage Tracking
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('devops_mastered_questions');
    return saved ? JSON.parse(saved) : [];
  });

  // Interview States
  const [isInterviewMode, setIsInterviewMode] = useState<boolean>(false);
  const [mockQuestions, setMockQuestions] = useState<QuestionItem[]>([]);
  const [currentMockIndex, setCurrentMockIndex] = useState<number>(0);
  const [mockScore, setMockScore] = useState<number>(0);
  const [mockAnswerRevealed, setMockAnswerRevealed] = useState<boolean>(false);
  const [interviewFinished, setInterviewFinished] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('devops_mastered_questions', JSON.stringify(masteredIds));
  }, [masteredIds]);

  const categories = ['All', 'AWS', 'Docker', 'Kubernetes', 'Linux', 'Linux Advanced', 'Jenkins', 'Terraform', 'Git', 'Monitoring', 'Networking', 'Cross'];

  // Helper to give each category its own unique, vibrant color theme
  const getCategoryStyles = (category: string) => {
    switch(category) {
      case 'AWS': return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      case 'Docker': return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'Kubernetes': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Linux': 
      case 'Linux Advanced': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'Jenkins': return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'Terraform': return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'Git': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Monitoring': return 'bg-pink-500/10 text-pink-400 border-pink-500/30';
      case 'Networking': return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  const filteredQuestions = questions.filter((q: any) => { // Using 'any' here bypasses strict array mismatch rules
    const matchesCategory = activeCategory === 'All' || q.category === activeCategory;
    const matchesSearch = (q.question?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || 
                          (q.answer?.toLowerCase() || '').includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleMastered = (uniqueKey: string) => {
    if (masteredIds.includes(uniqueKey)) {
      setMasteredIds(masteredIds.filter(id => id !== uniqueKey));
    } else {
      setMasteredIds([...masteredIds, uniqueKey]);
    }
  };

  const startInterviewMode = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setMockQuestions(shuffled.slice(10)); // Selects exactly 10 random items
    setCurrentMockIndex(0);
    setMockScore(0);
    setMockAnswerRevealed(false);
    setInterviewFinished(false);
    setIsInterviewMode(true);
  };

  const handleMockAssessment = (knewIt: boolean) => {
    if (knewIt) setMockScore(prev => prev + 1);
    if (currentMockIndex + 1 < mockQuestions.length) {
      setCurrentMockIndex(prev => prev + 1);
      setMockAnswerRevealed(false);
    } else {
      setInterviewFinished(true);
    }
  };

  const progressPercent = Math.round((masteredIds.length / questions.length) * 100);

  // Renders Dynamic Visual Components based on specific question keywords
  const renderVisualEnhancements = (questionText: string) => {
    const text = questionText.toLowerCase();
    
    // 1. COMPARISON TABLES
    if (text.includes('vs') || text.includes('difference between')) {
      let leftHead = "Option A", rightHead = "Option B", leftDesc = "Focuses on method A", rightDesc = "Focuses on method B";
      
      if (text.includes('zombie') && text.includes('orphan')) {
        leftHead = "Zombie Process"; rightHead = "Orphan Process";
        leftDesc = "Finished execution but remains in process table until parent reads status.";
        rightDesc = "Parent died while process runs; instantly adopted by init (PID 1).";
      } else if (text.includes('merge') && text.includes('rebase')) {
        leftHead = "Git Merge"; rightHead = "Git Rebase";
        leftDesc = "Combines branches via a new merge commit. Preserves historical timeline context.";
        rightDesc = "Reapplies commits on top of base. Creates a perfectly linear commit history.";
      } else if (text.includes('fetch') && text.includes('pull')) {
        leftHead = "Git Fetch"; rightHead = "Git Rebase/Pull";
        leftDesc = "Downloads remote metadata changes locally without touching active code files.";
        rightDesc = "Downloads remote metadata and immediately forces a code merge step.";
      } else if (text.includes('tcp') && text.includes('udp')) {
        leftHead = "TCP Protocol"; rightHead = "UDP Protocol";
        leftDesc = "Connection-oriented. Uses 3-way handshakes to guarantee data arrival order.";
        rightDesc = "Connectionless. Fast transmission without checking packet delivery status.";
      }

      return (
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-700/60 text-xs">
          <div className="grid grid-cols-2 bg-slate-800 text-slate-300 font-bold border-b border-slate-700/60 p-2.5">
            <div>{leftHead}</div>
            <div className="border-l border-slate-700/60 pl-2.5">{rightHead}</div>
          </div>
          <div className="grid grid-cols-2 bg-slate-900/60 text-slate-400 p-2.5 gap-2">
            <div className="leading-relaxed">{leftDesc}</div>
            <div className="border-l border-slate-700/60 pl-2.5 leading-relaxed">{rightDesc}</div>
          </div>
        </div>
      );
    }

    // 2. ARCHITECTURE FLOW DIAGRAMS
    if (text.includes('stages of') || text.includes('url into a browser') || text.includes('architecture') || text.includes('boot process')) {
      let stages = ["Trigger", "Process", "Output"];
      if (text.includes('boot process')) {
        stages = ["BIOS/UEFI", "GRUB Loader", "Kernel Mount", "Systemd (PID 1)"];
      } else if (text.includes('url')) {
        stages = ["DNS Lookup", "TCP Handshake", "TLS Crypt", "HTTP GET Request"];
      } else if (text.includes('three-tree') || text.includes('architecture of git')) {
        stages = ["Working Directory", "Staging Area (git add)", "Local Repo (git commit)"];
      }

      return (
        <div className="mt-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
          <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
            <GitCommit className="h-3 w-3 text-indigo-500" /> Pipeline Flow Diagram
          </h5>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-2 overflow-x-auto py-1">
            {stages.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg font-mono font-medium text-center shadow-sm whitespace-nowrap">
                  {stage}
                </div>
                {idx < stages.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-slate-600 rotate-90 sm:rotate-0 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
      
      {/* HEADER GRADIENT DASHBOARD BAR */}
      <header className="bg-gradient-to-r from-violet-600 via-indigo-700 to-blue-600 shadow-xl border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <Terminal className="h-8 w-8 text-cyan-300 animate-pulse" />
              DevOps Command Center
            </h1>
            <p className="text-indigo-100 text-sm mt-1">Interactive Portal • 180 Core Interview Engine Competencies</p>
          </div>

          {/* Overall Progress Widget */}
          <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/10 w-full md:w-80">
            <div className="flex justify-between items-center text-xs mb-1 font-semibold text-indigo-200">
              <span>OVERALL SYSTEM MASTERY</span>
              <span>{progressPercent}% ({masteredIds.length}/{questions.length})</span>
            </div>
            <div className="w-full bg-slate-900/60 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT WRAPPER */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* TOP LEVEL NAVIGATION MODE TOGGLE */}
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setIsInterviewMode(false)}
            className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${!isInterviewMode ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            <BookOpen className="h-5 w-5" /> Browse Database
          </button>
          <button 
            onClick={startInterviewMode}
            className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${isInterviewMode ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/30 ring-2 ring-amber-300' : 'bg-slate-800 text-amber-400 hover:bg-slate-700'}`}
          >
            <Activity className="h-5 w-5" /> Live Mock Interview
          </button>
        </div>

        {/* INTERVIEW MODE SCREEN */}
        {isInterviewMode ? (
          <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>
            
            {!interviewFinished ? (
              <div>
                <div className="flex justify-between items-center mb-6 text-sm text-slate-400 border-b border-slate-700 pb-4">
                  <span className="flex items-center gap-2 text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                    Question {currentMockIndex + 1} of 10
                  </span>
                  <span className={`font-mono border px-3 py-1 rounded-lg text-xs uppercase font-bold ${getCategoryStyles(mockQuestions[currentMockIndex]?.category)}`}>
                    {mockQuestions[currentMockIndex]?.category}
                  </span>
                </div>

                <div className="my-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                    {mockQuestions[currentMockIndex]?.question}
                  </h2>
                </div>

                {mockAnswerRevealed ? (
                  <div className="bg-slate-900/80 rounded-xl p-5 border border-slate-700/60 mb-6 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Standard Response</h4>
                      <p className="text-slate-200 text-base leading-relaxed">{mockQuestions[currentMockIndex]?.answer}</p>
                    </div>

                    {/* Inject flows/tables dynamically inside interview view if relevant */}
                    {renderVisualEnhancements(mockQuestions[currentMockIndex]?.question)}

                    <div>
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Real-World Case Example</h4>
                      <p className="text-slate-300 text-sm italic bg-slate-800/40 p-2 rounded border-l-2 border-emerald-500">{mockQuestions[currentMockIndex]?.example}</p>
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={() => setMockAnswerRevealed(true)}
                    className="w-full py-4 bg-slate-900 text-slate-300 rounded-xl font-medium border border-slate-700 hover:border-slate-500 hover:text-white transition-all flex justify-center items-center gap-2 mb-6"
                  >
                    <HelpCircle className="h-5 w-5 text-indigo-400" /> Formulate Response & Reveal Answer
                  </button>
                )}

                {mockAnswerRevealed && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                    <button 
                      onClick={() => handleMockAssessment(false)}
                      className="py-3 px-4 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 rounded-xl font-bold transition-all"
                    >
                      ❌ Unsure / Needs Study
                    </button>
                    <button 
                      onClick={() => handleMockAssessment(true)}
                      className="py-3 px-4 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 rounded-xl font-bold transition-all"
                    >
                      ✅ Nailed It perfectly
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Interview Summary Screen */
              <div className="text-center py-8 space-y-6">
                <div className="inline-flex p-4 bg-amber-500/10 rounded-full border border-amber-500/20 text-amber-400 mb-2">
                  <Award className="h-16 w-16" />
                </div>
                <h2 className="text-3xl font-extrabold text-white">Mock Evaluation Complete!</h2>
                <p className="text-slate-400 max-w-md mx-auto">You cleanly processed 10 high-impact technical environment probes.</p>
                
                <div className="bg-slate-900 max-w-sm mx-auto p-6 rounded-2xl border border-slate-700">
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Your Performance Metric</div>
                  <div className="text-5xl font-black text-amber-400">{mockScore * 10}%</div>
                  <div className="text-xs text-slate-500 mt-2">{mockScore} out of 10 verification points validated</div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button 
                    onClick={startInterviewMode}
                    className="px-6 py-2.5 bg-amber-500 text-slate-900 font-bold rounded-xl hover:bg-amber-400 transition-all flex items-center gap-2"
                  >
                    <RefreshCw className="h-4 w-4" /> Run New Matrix Shuffle
                  </button>
                  <button 
                    onClick={() => setIsInterviewMode(false)}
                    className="px-6 py-2.5 bg-slate-700 text-slate-200 font-bold rounded-xl hover:bg-slate-600 transition-all"
                  >
                    Exit Simulator
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          
          /* BROWSE KNOWLEDGE SYSTEM MODE */
          <div>
            {/* Search and Category Control deck */}
            <div className="bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-700 shadow-xl mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search index by keywords (e.g. VPC, volume, rebase, kernel...)" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 pl-12 pr-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-200 placeholder-slate-500 transition-all"
                />
              </div>

              {/* Colorful Tags Hub */}
              <div className="flex flex-wrap gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setRevealedIndex(null); }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${activeCategory === cat ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/20' : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-600 hover:text-slate-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics Snapshot */}
            <div className="text-slate-400 text-sm font-medium mb-4 px-2 flex justify-between items-center">
              <span>Showing <strong className="text-slate-200">{filteredQuestions.length}</strong> modules matching scope</span>
            </div>

            {/* ACCORDION GRID FLOW COMPONENT */}
            <div className="space-y-4">
              {filteredQuestions.map((item, index) => {
                const uniqueId = `${item.category}-${item.question}`;
                const isOpened = revealedIndex === index;
                const isMastered = masteredIds.includes(uniqueId);

                return (
                  <div 
                    key={index}
                    className={`bg-slate-800 rounded-xl border transition-all duration-200 overflow-hidden ${isOpened ? 'border-slate-600 shadow-lg ring-1 ring-slate-600/30' : 'border-slate-700/70 hover:border-slate-600'}`}
                  >
                    {/* Collapsible Trigger Card Bar */}
                    <div className="p-4 sm:p-5 flex justify-between items-start gap-4 cursor-pointer select-none" onClick={() => setRevealedIndex(isOpened ? null : index)}>
                      <div className="flex gap-3 items-start">
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleMastered(uniqueId); }}
                          className={`mt-0.5 transition-colors focus:outline-none shrink-0 ${isMastered ? 'text-emerald-400' : 'text-slate-600 hover:text-slate-500'}`}
                        >
                          <CheckCircle className="h-6 w-6 fill-current bg-slate-900 rounded-full" />
                        </button>
                        <div>
                          <span className={`inline-block border text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md mb-2 ${getCategoryStyles(item.category)}`}>
                            {item.category}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-snug hover:text-indigo-200 transition-colors">
                            {item.question}
                          </h3>
                        </div>
                      </div>
                      
                      <div className={`p-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 transition-transform duration-200 shrink-0 ${isOpened ? 'rotate-90 text-indigo-400' : ''}`}>
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Expandable Meta Panel Details */}
                    {isOpened && (
                      <div className="px-5 pb-5 pt-2 border-t border-slate-700/60 bg-slate-900/40 space-y-4">
                        <div className="bg-slate-900 rounded-xl p-4 border border-slate-700/40">
                          <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Layers className="h-3.5 w-3.5" /> Conceptual Synthesis
                          </h4>
                          <p className="text-slate-200 text-sm leading-relaxed">{item.answer}</p>
                        </div>

                        {/* RENDER DYNAMIC FLOW DIAGRAMS AND COMPARISON TABLES HERE */}
                        {renderVisualEnhancements(item.question)}

                        <div className="bg-slate-900/40 rounded-xl p-4 border border-l-4 border-emerald-500/40 border-y-slate-700/30 border-r-slate-700/30">
                          <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> Operational Pipeline Context
                          </h4>
                          <p className="text-slate-300 text-sm italic font-medium">{item.example}</p>
                        </div>

                        {/* Cross-Probing Verification Flags */}
                        {item.crossQuestions && item.crossQuestions.length > 0 && (
                          <div className="pt-2">
                            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <HelpCircle className="h-3.5 w-3.5" /> Interviewer Deep-Dive Branch Points
                            </h4>
                            <div className="flex flex-col gap-2">
                              {item.crossQuestions.map((cq, cqIdx) => (
                                <div key={cqIdx} className="text-xs text-slate-400 flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0"></span>
                                  {cq}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}