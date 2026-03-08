
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Code2, Settings2, Cloud, Network, Plus, ArrowRight, Cctv, ShieldAlert, Zap, MonitorSmartphone, Activity } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Cyber Security & VAPT",
    description: "Deep vulnerability testing for your digital assets to find and fix security holes before hackers do.",
    icon: ShieldCheck,
    accent: "text-primary",
    details: {
      whatWeDo: [
        "Penetration Testing for Web & Mobile Apps.",
        "Vulnerability Assessment (VA) of internal servers.",
        "Detailed security reports with remediation steps.",
        "Compliance-driven testing for enterprise standards."
      ],
      value: "Proactive defense against modern cyber threats."
    }
  },
  {
    title: "Security Audits",
    description: "Comprehensive review of your entire digital landscape, policies, and data handling protocols.",
    icon: ShieldAlert,
    accent: "text-accent",
    details: {
      whatWeDo: [
        "Full IT infrastructure security review.",
        "Data privacy and handling policy audits.",
        "Compliance checks (ISO/SOC2 standards).",
        "Risk identification and management strategy."
      ],
      value: "Ensuring your business meets global security standards."
    }
  },
  {
    title: "Incident Response",
    description: "24/7 emergency support to contain threats, recover data, and minimize damage during a breach.",
    icon: Zap,
    accent: "text-primary",
    details: {
      whatWeDo: [
        "Emergency containment of active cyber attacks.",
        "Post-breach data recovery and system cleanup.",
        "Root cause analysis and forensic investigation.",
        "24/7 readiness team for immediate mobilization."
      ],
      value: "A dedicated fire-brigade for your digital enterprise."
    }
  },
  {
    title: "Endpoint Protection",
    description: "Advanced defense for laptops, mobile devices, and servers against malware and ransomware.",
    icon: MonitorSmartphone,
    accent: "text-accent",
    details: {
      whatWeDo: [
        "Centrally managed Anti-virus and Anti-malware.",
        "Mobile Device Management (MDM) for remote teams.",
        "Real-time threat detection and automated blocking.",
        "Device encryption and data loss prevention."
      ],
      value: "Securing every door to your business network."
    }
  },
  {
    title: "Network Assessment",
    description: "Expert evaluation of your network infrastructure to identify bottlenecks and security gaps.",
    icon: Activity,
    accent: "text-primary",
    details: {
      whatWeDo: [
        "Network performance and latency analysis.",
        "Hardware health and lifecycle assessment.",
        "Bandwidth optimization for remote/local work.",
        "Security-first network redesign proposals."
      ],
      value: "Building a rock-solid foundation for your IT operations."
    }
  },
  {
    title: "Surveillance & Biomatrix",
    description: "Secure your physical premises with 4K IP CCTV and advanced biometric access control systems.",
    icon: Cctv,
    accent: "text-accent",
    details: {
      whatWeDo: [
        "4K HD IP Camera setups with remote AI tracking.",
        "Fingerprint, Face ID, and Iris entry systems.",
        "Cloud-based premises monitoring and alerting.",
        "Centralized access management for global offices."
      ],
      value: "Unmatched physical security for your assets."
    }
  },
  {
    title: "Web & App Development",
    description: "Bespoke PWAs, SaaS platforms, and enterprise ERP/CMS systems with built-in security.",
    icon: Code2,
    accent: "text-primary",
    details: {
      whatWeDo: [
        "Secure Progressive Web App (PWA) development.",
        "Scalable SaaS architecture and deployment.",
        "Custom ERP systems for operational automation.",
        "Maintenance with 24/7 technical oversight."
      ],
      value: "Digital tools that grow with your business goals."
    }
  },
  {
    title: "IT Management",
    description: "Daily technical support and proactive hardware maintenance to keep your office running 24/7.",
    icon: Settings2,
    accent: "text-accent",
    details: {
      whatWeDo: [
        "Proactive server and workstation maintenance.",
        "24/7 employee help-desk for tech issues.",
        "Inventory and hardware lifecycle management.",
        "Regular software updates and patching."
      ],
      value: "Zero-friction IT for your entire organization."
    }
  },
  {
    title: "Cloud & Networking",
    description: "Seamless Google/M365 migration and secure office Wi-Fi setups for high-speed connectivity.",
    icon: Network,
    accent: "text-primary",
    details: {
      whatWeDo: [
        "Enterprise-grade Wi-Fi and wired cabling.",
        "Google Workspace and Microsoft 365 setup.",
        "Secure Cloud storage and automated backups.",
        "Firewall and secure VPN configuration."
      ],
      value: "Stable and secure connectivity, anywhere you work."
    }
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="font-headline text-sm font-bold text-accent tracking-[0.2em] uppercase mb-4">Our Services</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Expert Solutions for Enterprise Stability</h3>
          <p className="text-lg text-muted-foreground">
            From deep security audits to rapid incident response, Vynsec Creations provides the technical backbone required for modern business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card 
                  className="glass border-border/50 hover:border-accent/50 transition-all duration-500 group relative overflow-hidden cursor-pointer hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3 ${service.accent}`}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="font-headline text-xl group-hover:text-accent transition-colors flex items-center justify-between">
                      {service.title}
                      <Plus className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl bg-background/95 backdrop-blur-lg border-accent/20 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 ${service.accent}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <DialogTitle className="text-3xl font-headline font-bold">{service.title}</DialogTitle>
                  <DialogDescription className="text-lg text-muted-foreground pt-2">
                    {service.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 pt-6">
                  <div className="space-y-4">
                    <h4 className="font-headline font-bold text-primary uppercase text-sm tracking-widest">Technical Scope</h4>
                    <ul className="grid gap-3">
                      {service.details.whatWeDo.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          <span className="text-sm md:text-base leading-relaxed font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 italic text-primary font-bold">
                    "{service.details.value}"
                  </div>
                  <Button className="w-full h-12 gap-2 text-base font-headline" asChild>
                    <a href="#contact">Request {service.title} Brief <ArrowRight className="h-4 w-4" /></a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
