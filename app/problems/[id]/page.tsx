"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Loader from "@/components/Loader";

export default function ProblemRedirectPage() {
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.replace("/auth/signin");
      } else {
        router.replace(`/editor/${id}`);
      }
    };

    checkAuth();
  }, [id, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Loader />
    </div>
  );
}