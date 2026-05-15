import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus, FileText, Image, BookOpen, MessageSquare, Zap, BarChart3, Sparkles, Upload, X, File } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const subject = subjectData[id || "1"] || subjectData["1"];

  return (
    <div className="h-screen flex flex-col bg-surface overflow-hidden relative">
      {/* Header */}
      <div className="px-6 pt-10 pb-4" style={{ backgroundColor: subject.color }}>
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => navigate("/home")} className="text-white/80">
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
              className={`px-4 py-3 text-sm font-medium transition-colors relative ${activeTab === tab ? "text-primary" : "text-muted-foreground"
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
      <div className="flex-1 overflow-y-auto px-6 py-4 pb-40">
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

            {/* Floating Action Elements */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none flex flex-col items-end gap-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowUploadModal(true)}
                className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg pointer-events-auto hover:shadow-xl transition-shadow"
              >
                <Plus className="h-6 w-6 text-primary-foreground" />
              </motion.button>

              <div className="w-full pointer-events-auto">
                <Button className="w-full h-12 rounded-xl text-base font-semibold gap-2 shadow-lg">
                  <Sparkles className="h-5 w-5" />
                  Analyze all files with AI
                </Button>
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

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        multiple
        onChange={handleFileChange}
      />

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center p-4"
            onClick={() => setShowUploadModal(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl w-full max-w-[400px] p-5 mb-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Upload Files</h3>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                Add exam papers, quizzes, modules, or handwritten notes to your {subject.name} folder.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFileSelect(".pdf,.doc,.docx")}
                  className="bg-surface border rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors"
                >
                  <FileText className="h-8 w-8 text-primary" />
                  <span className="text-xs font-medium">PDF / DOCX</span>
                  <span className="text-[10px] text-muted-foreground">Documents</span>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFileSelect("image/*")}
                  className="bg-surface border rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors"
                >
                  <Image className="h-8 w-8 text-emerald-500" />
                  <span className="text-xs font-medium">Images</span>
                  <span className="text-[10px] text-muted-foreground">Photos / Scans</span>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFileSelect(".ppt,.pptx,.xls,.xlsx")}
                  className="bg-surface border rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors"
                >
                  <File className="h-8 w-8 text-amber-500" />
                  <span className="text-xs font-medium">PPT / Excel</span>
                  <span className="text-[10px] text-muted-foreground">Presentations</span>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFileSelect("*")}
                  className="bg-surface border rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors"
                >
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <span className="text-xs font-medium">Any File</span>
                  <span className="text-[10px] text-muted-foreground">Browse all</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
