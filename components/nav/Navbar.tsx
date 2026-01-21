"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Page checks
  const isLoginPage = pathname === "/auth/login";
  const isSetPasswordPage = pathname === "/auth/set-password";
  const isProblemsPage = pathname === "/problems";

  const hideSignIn = isLoginPage || isSetPasswordPage;
  const hideProblems = isProblemsPage;

  return (
    <nav className="w-full h-12 bg-[#0B1F2A] flex items-center px-6">
      {/* Logo */}
      <div className="text-white font-semibold text-lg uppercase">
        Coding Arena
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-4">
        {!hideProblems && (
          <Link
            href="/problems"
            className="text-gray-300 text-sm hover:text-white transition"
          >
            Problems
          </Link>
        )}

        {!hideSignIn && (
          <Link
            href="/auth/login"
            className="bg-[#2EC4F1] text-[#06202B] text-sm font-medium px-4 py-1.5 rounded-md hover:opacity-90 transition"
          >
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}