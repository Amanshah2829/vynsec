"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, ShieldCheck, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay to coordinate with preloader exit
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className={`space-y-6 md:space-y-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-headline text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2 md:mb-4 backdrop-blur-sm">
            RELIABLE IT INFRASTRUCTURE
          </div>
          
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground max-w-5xl mx-auto leading-[1.1]">
            Engineering Secure Systems for <br className="hidden md:block" />
            <span className="text-primary">Modern Businesses</span>
          </h1>
          
          <p className="font-body text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Design, deploy, and manage enterprise-grade IT infrastructure, secure networks, and scalable systems that keep your organization running 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 md:pt-10">
            <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-10 text-base md:text-lg font-headline gap-2 transition-all hover:scale-105" asChild>
              <a href="#services">
                Explore Services <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-10 text-base md:text-lg font-headline border-2 transition-all hover:bg-primary/5" asChild>
              <a href="#contact">Contact Us Today</a>
            </Button>
          </div>
        </div>

        {/* Feature badges */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-24 max-w-4xl mx-auto transition-all duration-1000 delay-[2800ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass p-5 md:p-6 rounded-2xl flex flex-col items-center gap-2 md:gap-3 group transition-all hover:-translate-y-1">
            <div className="p-2 md:p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <Smartphone className="h-5 md:h-6 w-5 md:w-6" />
            </div>
            <h3 className="font-headline font-bold text-sm md:text-base">Custom Web & Apps</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">Fast PWA and SaaS apps built for your specific needs.</p>
          </div>
          <div className="glass p-5 md:p-6 rounded-2xl flex flex-col items-center gap-2 md:gap-3 group transition-all hover:-translate-y-1">
            <div className="p-2 md:p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <ShieldCheck className="h-5 md:h-6 w-5 md:w-6" />
            </div>
            <h3 className="font-headline font-bold text-sm md:text-base">Cyber Security</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">Testing for hacks (VAPT) and staff safety training.</p>
          </div>
          <div className="glass p-5 md:p-6 rounded-2xl flex flex-col items-center gap-2 md:gap-3 group transition-all hover:-translate-y-1">
            <div className="p-2 md:p-3 rounded-xl bg-secondary/10 text-secondary-foreground group-hover:bg-secondary transition-all">
              <Cpu className="h-5 md:h-6 w-5 md:w-6" />
            </div>
            <h3 className="font-headline font-bold text-sm md:text-base">24/7 Support</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">Daily tech help to keep your office running smoothly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
