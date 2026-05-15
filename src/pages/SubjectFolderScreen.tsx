import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus, FileText, Image, BookOpen, MessageSquare, Zap, BarChart3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { defaultSubjects } from "./SubjectsPage";

const files = [
  { name: "Midterm Exam 2024.pdf", type: "Exam", date: "Mar 15, 2024", icon: FileText },
  { name: "Quiz 3 - Derivatives.jpg", type: "Quiz", date: "Mar 10, 2024", icon: Image },
  { name: "Module 5 - Integration.pdf", type: "Module", date: "Mar 5, 2024", icon: BookOpen },
  { name: "Handwritten Notes Ch.3.jpg", type: "Notes", date: "Feb 28, 2024", icon: Image },
];

const typeColors: Record<string, string> = {
  Exam: "bg-primary text-primary-foreground",
  Quiz: "bg-blue-100 text-blue-700",
  Module: "bg-emerald-100 text-emerald-700",
  Notes: "bg-amber-100 text-amber-700",
};

const tabs = ["Files", "AI Tutor", "Practice", "Insights"];

export default function SubjectFolderScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Files");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  
  const [subjects] = useState(() => {
    const saved = localStorage.getItem("examind_subjects");
    return saved ? JSON.parse(saved) : defaultSubjects;
  });

  const subject = subjects.find((s: any) => s.id === id) || subjects[0];

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="px-6 pt-10 pb-4" style={{ backgroundColor: subject.color }}>
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => navigate(-1)} className="text-white/80">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-white">{subject.name}</h1>
            <p className="text-white/70 text-xs">{subject.professor}</p>
          </div>
          <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
            {subject.daysUntilExam}d left
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-card border-b px-4">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 py-4">
        {activeTab === "Files" && (
          <div className="space-y-3">
            {/* Quick Stats */}
            <div className="flex gap-3 mb-4">
              <div className="bg-card border rounded-lg px-3 py-2 flex-1 text-center">
                <p className="text-lg font-bold">{files.length}</p>
                <p className="text-[10px] text-muted-foreground">Files</p>
              </div>
              <div className="bg-card border rounded-lg px-3 py-2 flex-1 text-center">
                <p className="text-lg font-bold">2</p>
                <p className="text-[10px] text-muted-foreground">Analyzed</p>
              </div>
              <div className="bg-card border rounded-lg px-3 py-2 flex-1 text-center">
                <p className="text-lg font-bold">24</p>
                <p className="text-[10px] text-muted-foreground">Questions</p>
              </div>
            </div>

            {files.map((file, i) => (
              <div key={i} className="bg-card border rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
                  <file.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.date}</p>
                </div>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${typeColors[file.type]}`}>
                  {file.type}
                </span>
              </div>
            ))}

            {/* UX FIX: Hidden Native File Input */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              className="hidden" 
              accept=".pdf,.docx,.png,.jpg,.jpeg" 
            />

            {/* Combined Bottom Action Dock */}
            <div className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-0 right-0 px-6 pb-4 bg-gradient-to-t from-surface via-surface/95 to-transparent pt-12 z-20">
              <div className="flex items-center gap-3">
                
                {/* 80% Width: Analyze Button */}
                <Button className="flex-1 h-14 rounded-2xl text-base font-semibold gap-2 shadow-lg">
                  <Sparkles className="h-5 w-5" />
                  <span className="truncate">Analyze files with AI</span>
                </Button>
                
                {/* 20% Width: Upload Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-14 h-14 shrink-0 rounded-2xl bg-primary flex items-center justify-center shadow-lg hover:bg-primary/90 active:scale-95 transition-all"
                  aria-label="Upload File"
                >
                  <Plus className="h-6 w-6 text-primary-foreground" />
                </motion.button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "AI Tutor" && (
          <div className="space-y-4 mt-2">
            <h2 className="text-lg font-bold">Choose your study mode</h2>
            {[
              { icon: BarChart3, title: "Strategy & Schedule", desc: "Build a smart study plan for your exam", color: "#1D9E75", key: "strategy" },
              { icon: MessageSquare, title: "Guided Learning", desc: "Learn topic by topic with your AI tutor", color: "#534AB7", key: "guided" },
              { icon: Zap, title: "Practice Exam", desc: "Take a full AI-generated exam", color: "#D85A30", key: "practice" },
            ].map((mode, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-card border rounded-xl p-5 flex items-center gap-4 text-left hover:border-primary transition-colors"
                onClick={() => navigate(`/subjects/${id}/chat?mode=${mode.key}`, { replace: true })}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: mode.color + "15" }}>
                  <mode.icon className="h-6 w-6" style={{ color: mode.color }} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{mode.title}</p>
                  <p className="text-xs text-muted-foreground">{mode.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {activeTab === "Practice" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Zap className="h-12 w-12 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-sm">No practice sessions yet</p>
            <p className="text-muted-foreground text-xs mt-1">Go to AI Tutor → Practice Exam to generate one</p>
          </div>
        )}

        {activeTab === "Insights" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <BarChart3 className="h-12 w-12 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-sm">Not enough data yet</p>
            <p className="text-muted-foreground text-xs mt-1">Upload at least 2 files and run analysis to see insights</p>
          </div>
        )}
      </div>
    </div>
  );
}
