"use client";

import { CheckCircle2, MessageSquare, Code, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "1. Listen & Plan",
    icon: MessageSquare,
    description: "We talk to you to understand your business goals and what tech issues you're facing. We keep it simple and avoid jargon.",
  },
  {
    title: "2. Build & Secure",
    icon: Code,
    description: "Our team builds your custom software (PWA/SaaS) or performs deep security audits (VAPT) to lock down your business.",
  },
  {
    title: "3. 24/7 Support",
    icon: ShieldCheck,
    description: "Once everything is running, we stay by your side. We provide around-the-clock help for any tech problems that arise.",
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-sm font-bold text-accent tracking-[0.2em] uppercase mb-4">Our Simple Process</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold">How We Help You Grow</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Working with Vynsec Creations is straightforward. We focus on getting results for your business quickly and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="glass p-8 rounded-3xl border-border/50 hover:border-accent/30 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4">{step.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 glass rounded-[2.5rem] border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h4 className="font-headline text-2xl font-bold text-primary flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" /> Always Connected
            </h4>
            <p className="text-muted-foreground">
              Vynsec Creations provides 24/7 monitoring and support for our clients worldwide.
            </p>
          </div>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-headline font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
