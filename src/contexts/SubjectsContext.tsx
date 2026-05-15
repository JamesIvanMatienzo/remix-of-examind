import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

export interface Subject {
  id: string;
  name: string;
  code: string;
  files: number;
  daysUntilExam: number;
  color: string;
  lastAccessed?: string;
  professor?: string;
  semester?: string;
  yearLevel?: string;
  nextExamDate?: string;
}

interface SubjectsContextType {
  subjects: Subject[];
  loading: boolean;
  addSubject: (subject: Omit<Subject, "id" | "files" | "daysUntilExam" | "lastAccessed">) => Promise<boolean>;
  refreshSubjects: () => Promise<void>;
}

const defaultSubjects: Subject[] = [
  { id: "1", name: "Mathematics", code: "MATH 101", files: 12, daysUntilExam: 2, color: "#D85A30", lastAccessed: "Today" },
  { id: "2", name: "Physics", code: "PHYS 201", files: 8, daysUntilExam: 5, color: "#1D9E75", lastAccessed: "Yesterday" },
  { id: "3", name: "Filipino", code: "FIL 101", files: 6, daysUntilExam: 10, color: "#534AB7", lastAccessed: "2 days ago" },
  { id: "4", name: "History", code: "HIST 101", files: 4, daysUntilExam: 14, color: "#EF9F27", lastAccessed: "3 days ago" },
];

const SubjectsContext = createContext<SubjectsContextType | null>(null);

export function SubjectsProvider({ children }: { children: ReactNode }) {
  const [subjects, setSubjects] = useState<Subject[]>(defaultSubjects);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Try to fetch subjects from Supabase on mount
  const fetchSubjects = useCallback(async () => {
    try {
      setLoading(true);

      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        console.log("SubjectsContext: No authenticated user, using default subjects.");
        setSubjects(defaultSubjects);
        return;
      }

      const { data, error } = await supabase
        .from("subjects")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("SubjectsContext: Error fetching subjects from Supabase:", error);
        // Keep default subjects on error
        return;
      }

      if (data && data.length > 0) {
        const mapped: Subject[] = data.map((row: Record<string, unknown>) => ({
          id: String(row.id),
          name: String(row.name || ""),
          code: String(row.code || ""),
          files: Number(row.files) || 0,
          daysUntilExam: row.next_exam_date
            ? Math.max(0, Math.ceil((new Date(String(row.next_exam_date)).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
            : 30,
          color: String(row.color || "#534AB7"),
          lastAccessed: String(row.last_accessed || "Recently"),
          professor: row.professor ? String(row.professor) : undefined,
          semester: row.semester ? String(row.semester) : undefined,
          yearLevel: row.year_level ? String(row.year_level) : undefined,
          nextExamDate: row.next_exam_date ? String(row.next_exam_date) : undefined,
        }));
        setSubjects(mapped);
      } else {
        // No subjects in DB yet — keep defaults for prototype
        console.log("SubjectsContext: No subjects in DB, using defaults.");
      }
    } catch (err) {
      console.error("SubjectsContext: Unexpected error fetching subjects:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  const addSubject = useCallback(
    async (subject: Omit<Subject, "id" | "files" | "daysUntilExam" | "lastAccessed">): Promise<boolean> => {
      try {
        // Check if user is authenticated
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
          // No auth — add locally only (prototype mode)
          console.warn("SubjectsContext: No authenticated user. Adding subject to local state only.");
          const localSubject: Subject = {
            ...subject,
            id: `local-${Date.now()}`,
            files: 0,
            daysUntilExam: subject.nextExamDate
              ? Math.max(0, Math.ceil((new Date(subject.nextExamDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
              : 30,
            lastAccessed: "Just now",
          };
          setSubjects((prev) => [localSubject, ...prev]);
          toast({ title: "Subject created", description: `${subject.name} has been added (local only — sign in to sync).` });
          return true;
        }

        // Insert into Supabase
        const { data, error } = await supabase
          .from("subjects")
          .insert({
            user_id: user.id,
            name: subject.name,
            code: subject.code || null,
            professor: subject.professor || null,
            semester: subject.semester || null,
            year_level: subject.yearLevel || null,
            color: subject.color,
            next_exam_date: subject.nextExamDate || null,
          })
          .select()
          .single();

        if (error) {
          console.error("SubjectsContext: Supabase insert error:", error);
          toast({ title: "Error", description: error.message, variant: "destructive" });
          return false;
        }

        console.log("SubjectsContext: Subject inserted successfully:", data);

        // Add to local state immediately so UI updates without refresh
        const newSubject: Subject = {
          id: String(data.id),
          name: String(data.name),
          code: String(data.code || ""),
          files: 0,
          daysUntilExam: data.next_exam_date
            ? Math.max(0, Math.ceil((new Date(String(data.next_exam_date)).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
            : 30,
          color: String(data.color || "#534AB7"),
          lastAccessed: "Just now",
          professor: data.professor ? String(data.professor) : undefined,
          semester: data.semester ? String(data.semester) : undefined,
          yearLevel: data.year_level ? String(data.year_level) : undefined,
          nextExamDate: data.next_exam_date ? String(data.next_exam_date) : undefined,
        };
        setSubjects((prev) => [newSubject, ...prev]);

        toast({ title: "Subject created!", description: `${subject.name} has been added successfully.` });
        return true;
      } catch (err) {
        console.error("SubjectsContext: Unexpected error adding subject:", err);
        toast({ title: "Error", description: "An unexpected error occurred. Check console for details.", variant: "destructive" });
        return false;
      }
    },
    [toast]
  );

  return (
    <SubjectsContext.Provider value={{ subjects, loading, addSubject, refreshSubjects: fetchSubjects }}>
      {children}
    </SubjectsContext.Provider>
  );
}

export function useSubjects() {
  const context = useContext(SubjectsContext);
  if (!context) {
    throw new Error("useSubjects must be used within a SubjectsProvider");
  }
  return context;
}
