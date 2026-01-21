"use client";

import { useState } from "react";
import Input from "@/components/input";
import Button from "@/components/button";

export default function SetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center">
      {/* Card */}
      <div className="w-full max-w-md rounded-xl bg-backgroundSecondary shadow-lg p-8">
        {/* Title */}
        <h1 className="text-center text-xl font-semibold text-textPrimary">
          Set your password
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-center text-sm text-textSecondary">
          Create a password for your account
        </p>

        {/* Inputs */}
        <div className="mt-6 space-y-4">
          <Input
            type="password"
            placeholder="Set your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <div className="mt-6">
          <Button className="w-full">
            Set Password
          </Button>
        </div>
      </div>
    </div>
  );
}