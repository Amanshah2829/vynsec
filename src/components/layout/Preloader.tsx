"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Preloader() {
  const [shouldRender, setShouldRender] = React.useState(true);
  const [isExiting, setIsExiting] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // Faster simulated boot-up progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 25; // Faster increments
      });
    }, 80); // Shorter interval

    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setShouldRender(false), 800);
    }, 1800); // Total wait time reduced to 1.8s

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050810] transition-all duration-700",
        isExiting && "opacity-0 scale-105 blur-lg pointer-events-none"
      )}
    >
      {/* Deep Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)]" />
      
      <div className="relative flex flex-col items-center w-full max-w-xl px-6">
        {/* Large Logo with Digital Pulse */}
        <div className="relative h-56 w-56 md:h-72 md:w-72 mb-10 animate-logo-glitch">
          <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full animate-pulse-slow" />
          <Image
            src="/logo.png"
            alt="Vynsec Logo"
            fill
            className="object-contain relative z-10 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            priority
          />
        </div>
        
        {/* Brand Text with System Reveal */}
        <div className="text-center space-y-6 w-full">
          <div className="overflow-hidden">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-[0.25em] text-foreground uppercase animate-reveal-up">
              VYNSEC <span className="text-primary">CREATIONS</span>
            </h2>
          </div>
          
          {/* System Status Line */}
          <div className="flex items-center justify-between text-[10px] md:text-xs font-code text-primary/60 tracking-widest uppercase mb-2">
            <span className="animate-pulse">Initializing Security...</span>
            <span>{Math.round(progress)}%</span>
          </div>

          {/* Precision Progress Bar */}
          <div className="relative h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
            <div 
              className="absolute inset-y-0 left-0 bg-primary transition-all duration-200 ease-out shadow-[0_0_10px_#2563eb]"
              style={{ width: `${progress}%` }}
            />
            <div 
              className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent animate-scan-fast"
              style={{ left: `${progress - 10}%` }}
            />
          </div>

          <p className="text-[10px] font-code text-muted-foreground/40 uppercase tracking-[0.4em] animate-fade-in-slow">
            Enterprise Grade Systems
          </p>
        </div>
      </div>
    </div>
  );
}
