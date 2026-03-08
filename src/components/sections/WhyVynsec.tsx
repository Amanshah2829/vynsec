"use client";

import { ShieldCheck, Zap, Server, Network, Banknote, CheckCircle2 } from "lucide-react";

const valueProps = [
  {
    title: "Enterprise-Grade Infrastructure",
    description: "We design systems built for reliability and scale, ensuring your business stays online 24/7.",
    icon: Server,
  },
  {
    title: "Rapid Remote Support",
    description: "Our team responds quickly to tech issues, minimizing downtime with expert troubleshooting.",
    icon: Zap,
  },
  {
    title: "Security-First Architecture",
    description: "Security isn't an afterthought. We build every solution with VAPT-level protection from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Networking",
    description: "Future-proof office Wi-Fi and wired networks that grow as your business expands.",
    icon: Network,
  },
  {
    title: "Cost-Efficient Deployments",
    description: "High-impact IT solutions that fit your budget, focusing on ROI and long-term stability.",
    icon: Banknote,
  }
];

export function WhyVynsec() {
  return (
    <section id="why-vynsec" className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-sm font-bold text-accent tracking-[0.2em] uppercase">Decision Maker's Choice</h2>
              <h3 className="font-headline text-4xl md:text-5xl font-bold">Why Vynsec Creations?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We bridge the gap between complex technology and simple business results. Our focus is on making your IT infrastructure a competitive advantage, not a headache.
              </p>
            </div>

            <div className="p-8 glass rounded-3xl border-l-4 border-primary bg-primary/5">
              <h4 className="font-headline font-bold text-xl mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Global Reliability
              </h4>
              <p className="text-muted-foreground">
                Providing 24/7 monitoring and support for small and mid-sized businesses worldwide from our HQ in Gandhinagar, India.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl flex items-start gap-6 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <prop.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-headline font-bold text-xl">{prop.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
