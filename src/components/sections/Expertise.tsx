
"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

const expertiseAreas = [
  {
    category: "Advanced Security",
    items: ["Security Audits", "Incident Response", "VAPT Testing", "Endpoint Protection"],
    insight: "We provide comprehensive security oversight. From performing deep security audits to acting as a 24/7 rapid response team during a breach, we ensure your organization's digital resilience.",
  },
  {
    category: "Infrastructure",
    items: ["Network Assessment", "4K Surveillance", "Biomatrix Systems", "Secure Wi-Fi"],
    insight: "Our team evaluates and builds high-performance infrastructure. We optimize your office networks for speed while securing your physical premises with advanced biometric and camera systems.",
  },
  {
    category: "Digital Solutions",
    items: ["PWA Development", "SaaS Platforms", "Custom ERP", "Cloud Migration"],
    insight: "We build secure, scalable software solutions. Whether it's moving your business to the cloud or building a custom ERP to automate operations, we focus on engineering quality.",
  },
  {
    category: "Global Support",
    items: ["24/7 Help Desk", "Server Management", "Incident Recovery", "Hardware Maintenance"],
    insight: "Vynsec offers round-the-clock technical support. We act as your extended IT department, ensuring your servers and endpoints are healthy and your team is never without technical assistance.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-accent/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-sm font-bold text-primary tracking-[0.2em] uppercase">Why Choose Us</h2>
              <h3 className="font-headline text-4xl md:text-5xl font-bold">Enterprise-Grade Technical Mastery</h3>
              <p className="text-lg text-muted-foreground max-w-xl">
                Vynsec Creations doesn't just provide IT support; we engineer secure, resilient systems designed for the future of global business.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 glass rounded-xl border-l-4 border-accent">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline font-bold text-lg">Security-First Focus</h4>
                  <p className="text-sm text-muted-foreground">Every network assessment and software build has deep security protocols integrated from day one.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 glass rounded-xl border-l-4 border-primary">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline font-bold text-lg">24/7 Global Readiness</h4>
                  <p className="text-sm text-muted-foreground">Our incident response and help-desk teams operate around the clock to support clients worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {expertiseAreas.map((area, idx) => (
              <Dialog key={idx}>
                <DialogTrigger asChild>
                  <div className="glass p-6 rounded-2xl border border-white/5 space-y-4 hover:border-primary/30 transition-all group cursor-pointer hover:bg-white/[0.02]">
                    <div className="flex justify-between items-start">
                      <h4 className="font-headline font-bold text-xl text-foreground group-hover:text-primary transition-colors">{area.category}</h4>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {area.items.slice(0, 3).map((item, itemIdx) => (
                        <Badge key={itemIdx} variant="secondary" className="bg-muted text-[10px] pointer-events-none">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl bg-background/95 backdrop-blur-lg border-primary/20 max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl md:text-3xl font-headline font-bold text-primary flex items-center gap-3">
                      <Zap className="h-6 w-6 text-accent" />
                      Our {area.category} Expertise
                    </DialogTitle>
                    <DialogDescription className="text-base md:text-lg leading-relaxed pt-4 text-foreground font-medium">
                      {area.insight}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 pt-6">
                    <div className="space-y-3">
                      <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground">Specialized Solutions</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.items.map((item, i) => (
                          <Badge key={i} className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors font-bold">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
