"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/loader";
import { supabase } from "@/lib/supabase/client";

type Problem = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

export default function ProblemsPage() {
  const router = useRouter();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      const { data } = await supabase
        .from("problems")
        .select("id, title, difficulty")
        .order("id");

      if (data) setProblems(data);
      setLoading(false);
    };

    fetchProblems();
  }, []);

  const handleProblemClick = async (id: string) => {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      router.push("/auth/signin");
    } else {
      router.push(`/problems/${id}`);
    }
  };

  return (
    <>
     
      <main className="min-h-screen bg-background px-10 py-8 text-textPrimary">
        <h1 className="text-2xl font-semibold mb-6">Problems</h1>

        {loading ? (
          <Loader />
        ) : (
          <div className="rounded-lg border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-backgroundSecondary px-4 py-3 text-sm text-textSecondary">
              <span>#</span>
              <span>Title</span>
              <span>Difficulty</span>
              <span>Status</span>
            </div>

            {/* Rows */}
            {problems.map((p, index) => (
              <div
                key={p.id}
                onClick={() => handleProblemClick(p.id)}
                className="grid grid-cols-4 px-4 py-3 border-t border-border cursor-pointer hover:bg-backgroundSecondary transition"
              >
                <span>{index + 1}</span>
                <span className="font-medium">{p.title}</span>

                <span
                  className={`w-fit rounded px-2 py-1 text-xs font-semibold
                    ${
                      p.difficulty === "Easy"
                        ? "bg-green-600/20 text-green-400"
                        : p.difficulty === "Medium"
                        ? "bg-yellow-600/20 text-yellow-400"
                        : "bg-red-600/20 text-red-400"
                    }`}
                >
                  {p.difficulty}
                </span>

                <span className="text-textSecondary">—</span>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}