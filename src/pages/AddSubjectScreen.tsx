import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSubjects } from "@/contexts/SubjectsContext";
import { useToast } from "@/hooks/use-toast";
import { defaultSubjects } from "./SubjectsPage";

const folderColors = ["#534AB7", "#D85A30", "#1D9E75", "#EF9F27", "#3B82F6", "#EC4899", "#8B5CF6", "#F97316"];

export default function AddSubjectScreen() {
  const navigate = useNavigate();
  const { addSubject } = useSubjects();
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [examDate, setExamDate] = useState("");

  const handleCreateSubject = () => {
    if (!name.trim()) return; 

    // Calculate days until exam
    let daysLeft = 30; // default
    if (examDate) {
      const diffTime = new Date(examDate).getTime() - new Date().getTime();
      daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    const saved = localStorage.getItem("examind_subjects");
    const currentSubjects = saved ? JSON.parse(saved) : defaultSubjects;
    
    const newSubject = {
      id: Date.now().toString(),
      name: name,
      code: code || "No Code",
      files: 0,
      daysUntilExam: daysLeft > 0 ? daysLeft : 0, // Prevent negative days
      examDateString: examDate, 
      color: selectedColor,
      lastAccessed: "Just now"
    };

    const updatedSubjects = [...currentSubjects, newSubject];
    localStorage.setItem("examind_subjects", JSON.stringify(updatedSubjects));
    navigate("/subjects");
  };

  return (
    <div className="min-h-screen bg-background px-6 py-6">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate(-1)} className="text-muted-foreground">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">Add Subject</h1>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <Label>Subject Name</Label>
          <Input placeholder="e.g. Mathematics" className="h-12 rounded-xl" />
        </div>

        <div className="space-y-2">
          <Label>Course Code (optional)</Label>
          <Input placeholder="e.g. MATH 101" className="h-12 rounded-xl" />
        </div>

        <div className="space-y-2">
          <Label>Professor Name (optional)</Label>
          <Input
            placeholder="e.g. Dr. Santos"
            className="h-12 rounded-xl"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>Semester</Label>
            <Select value={semester} onValueChange={setSemester}>
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1st Semester</SelectItem>
                <SelectItem value="2">2nd Semester</SelectItem>
                <SelectItem value="summer">Summer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Year Level</Label>
            <Select value={yearLevel} onValueChange={setYearLevel}>
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1st Year</SelectItem>
                <SelectItem value="2">2nd Year</SelectItem>
                <SelectItem value="3">3rd Year</SelectItem>
                <SelectItem value="4">4th Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Folder Color</Label>
          <div className="flex gap-3 flex-wrap">
            {folderColors.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform"
                style={{ backgroundColor: c, transform: selectedColor === c ? "scale(1.2)" : "scale(1)" }}
              >
                {selectedColor === c && <Check className="h-5 w-5 text-white" />}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Next Exam Date</Label>
          <Input 
            type="date" 
            className="h-12 rounded-xl" 
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
          />
        </div>

        <Button className="w-full h-12 rounded-xl text-base font-semibold mt-6" onClick={() => navigate("/subjects")}>
          Create Subject
        </Button>
      </div>
    </div>
  );
}
