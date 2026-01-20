"use client";
import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

function LandingPage() {

    const router = useRouter();

    const handleGetStarted = () => {
        // CTA Intent: Direct unauthenticated users to authentication flow

        router.push("/auth/login");
    };
    return (
        <>

            <section className="h-[calc(100vh-3rem)] w-full pt-32 flex flex-col items-center overflow-hidden gap-y-6 bg-background">
                
                {/* Heading */}
                <h1 className="text-5xl font-bold text-textPrimary">
                    Practice coding, compete and improve
                </h1>

                
                <div className="flex flex-col gap-y-10 pt-10 items-center justify-center text-center max-w-md">
                    <p className="font-bold leading-relaxed text-xl text-textSecondary">
                        Solve coding problems, run code instantly, 
                        track your progress in real-time, 
                        and sharpen your skills for the next big challenge.
                    </p>
                    
                    
                    <Button variant="primary" onClick={handleGetStarted}>
                        GET STARTED
                    </Button>
                    
                </div>
            </section>
        </>
    );
}

export default LandingPage;