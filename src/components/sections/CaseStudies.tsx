"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, ShieldAlert, Globe } from "lucide-react";

const cases = [
  {
    title: "Securing a Regional Retail Chain",
    challenge: "Persistent phishing attacks targeting staff and old network hardware.",
    solution: "Vynsec performed a full VAPT, replaced office networking, and conducted Cyber Safety workshops.",
    impact: "90% reduction in security incidents and 100% network uptime.",
    icon: TrendingUp,
    color: "text-accent",
  },
  {
    title: "Custom SaaS for Global Logistics",
    challenge: "Manual paper-based tracking leading to frequent delivery delays.",
    solution: "Built a high-performance PWA for real-time tracking with 24/7 technical support.",
    impact: "40% increase in operational efficiency and 24/7 global availability.",
    icon: Globe,
    color: "text-primary",
  },
  {
    title: "Financial Services Audit",
    challenge: "Compliance requirements for custom ERP system were not being met.",
    solution: "Performed deep security audits and hardened the custom CMS used for client data.",
    impact: "Achieved full security compliance and hardened data privacy protocols.",
    icon: ShieldAlert,
    color: "text-destructive",
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-sm font-bold text-accent tracking-[0.2em] uppercase">Success Stories</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold">Vynsec in Action</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world examples of how we help businesses solve complex problems with simple, secure solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="glass p-8 rounded-3xl border-border/50 hover:border-accent/30 transition-all flex flex-col h-full group">
              <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="font-headline text-xl font-bold mb-4">{item.title}</h4>
              
              <div className="space-y-4 flex-grow">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Challenge</p>
                  <p className="text-sm text-foreground/80">{item.challenge}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Vynsec Solution</p>
                  <p className="text-sm text-foreground/80">{item.solution}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center gap-2 text-accent font-bold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-sm">{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
