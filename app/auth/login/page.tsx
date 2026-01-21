"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = () => {
    // TEMP mock logic
    // Backend will replace this
    const isFirstTimeUser = false;

    if (isFirstTimeUser) {
      router.push("/auth/set-password");
    } else {
      router.push("/problems");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1220]">
      <div className="w-full max-w-md bg-[#0E1628] rounded-xl p-8 text-center shadow-lg">

        {/* Title */}
        <h1 className="text-xl font-semibold text-white">
          Sign into Coding Arena
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 mt-2">
          Use your college Google account to continue
        </p>

        {/* CTA */}
        <div className="mt-6">
          <Button
            onClick={handleGoogleLogin}
            className="w-full h-12 flex items-center justify-center gap-3 bg-white hover:bg-gray-100"
          >
            <img
              src="/icons/google-icon.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-800">
              Continue with Google
            </span>
          </Button>
        </div>

      </div>
    </div>
  );
}