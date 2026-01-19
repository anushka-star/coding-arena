import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-12 bg-[#0B1F2A] flex items-center px-6">
      {/* Left: Logo */}
      <div className="text-white font-semibold text-lg uppercase">
        Coding Arena
      </div>

      {/* Right: Links */}
      <div className="ml-auto flex items-center gap-4">
        <Link
          href="/problems"
          className="text-gray-300 text-sm hover:text-white transition"
        >
          Problems
        </Link>

        <Link
          href="/auth/signin"
          className="bg-[#2EC4F1] text-[#06202B] text-sm font-medium px-4 py-1.5 rounded-md hover:opacity-90 transition"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
}