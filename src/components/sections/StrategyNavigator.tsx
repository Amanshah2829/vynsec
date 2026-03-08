"use client";

import { useState } from "react";
import { generateCustomSolutionBrief, type GenerateCustomSolutionBriefOutput } from "@/ai/flows/generate-custom-solution-brief";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, ShieldCheck, Rocket, LayoutDashboard, Loader2, ArrowRight, CheckCircle, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const commonGoals = [
  {
    id: "secure-data",
    title: "Protect My Business Data",
    icon: ShieldCheck,
    description: "I want to make sure hackers can't steal my customer or financial info.",
    prompt: "A small business in India needs to secure customer data and prevent hacking. Suggest VAPT and Cyber Safety training.",
  },
  {
    id: "custom-software",
    title: "Build My Own Software",
    icon: Rocket,
    description: "I need a custom PWA or SaaS app to grow my business and reach more clients.",
    prompt: "A growing company needs a custom PWA/SaaS platform to manage their unique business process. Suggest Web/App Development with 24/7 support.",
  },
  {
    id: "automate-office",
    title: "Automate My Office",
    icon: LayoutDashboard,
    description: "I want to move away from Excel and paper to a custom ERP or CMS system.",
    prompt: "An office needs to automate workflows using a custom ERP/CMS and reliable cloud storage. Suggest ERP development and Cloud solutions.",
  }
];

export function StrategyNavigator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateCustomSolutionBriefOutput | null>(null);
  const [activeGoal, setActiveGoal] = useState<string | null>(null);

  const handleSelectGoal = async (goalPrompt: string, goalId: string) => {
    setActiveGoal(goalId);
    setLoading(true);
    try {
      const output = await generateCustomSolutionBrief({ itChallenges: goalPrompt });
      setResult(output);
    } catch (error) {
      console.error("Failed to generate brief", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="strategy" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-accent border-accent/30 gap-2 mb-4 uppercase tracking-widest text-[10px] font-bold">
            <Lightbulb className="h-3 w-3" /> Growth Insights
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">What is your next goal?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose a goal below, and our AI will immediately show you the best way to achieve it using Vynsec's expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {commonGoals.map((goal) => (
            <Card 
              key={goal.id}
              className={`glass cursor-pointer transition-all duration-300 border-border/50 hover:border-accent/50 group ${activeGoal === goal.id ? 'ring-2 ring-accent border-accent' : ''}`}
              onClick={() => handleSelectGoal(goal.prompt, goal.id)}
            >
              <CardHeader>
                <div className={`p-3 rounded-xl w-fit transition-colors ${activeGoal === goal.id ? 'bg-accent text-accent-foreground' : 'bg-secondary text-primary group-hover:bg-accent group-hover:text-accent-foreground'}`}>
                  <goal.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4 text-xl">{goal.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{goal.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="relative min-h-[400px]">
          {!result && !loading && (
            <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-border rounded-3xl opacity-50 bg-secondary/20">
              <Sparkles className="h-10 w-10 text-muted-foreground mb-4 animate-pulse" />
              <h4 className="font-headline font-bold text-xl">Select a goal above to see your roadmap</h4>
              <p className="text-sm text-muted-foreground mt-2">Get a simple, clear plan for your business growth.</p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center text-center p-12 glass rounded-3xl border border-accent/20 h-full min-h-[400px]">
              <Loader2 className="h-12 w-12 text-accent animate-spin mb-6" />
              <h4 className="font-headline font-bold text-2xl animate-pulse">Building Your Strategy...</h4>
              <p className="text-muted-foreground">Checking security needs and growth paths...</p>
            </div>
          )}

          {result && !loading && (
            <div className="animate-in fade-in zoom-in duration-500 glass p-8 md:p-12 rounded-3xl border-border/50 shadow-2xl space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest">
                    <CheckCircle className="h-4 w-4" /> Vynsec Strategy Brief
                  </div>
                  <h3 className="font-headline text-3xl font-bold">{result.solutionTitle}</h3>
                </div>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 font-bold" asChild>
                  <a href="#contact">Contact Us About This Plan</a>
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-headline font-bold border-b pb-2 text-primary flex items-center gap-2">
                   Our Simple Approach
                </h4>
                <p className="text-muted-foreground leading-relaxed text-lg">{result.solutionOverview}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-sm uppercase text-accent tracking-widest">What we will do</h4>
                  <ul className="space-y-3">
                    {result.vynsecServices.map((s, i) => (
                      <li key={i} className="text-base flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" /> 
                        <span className="text-foreground/80 font-medium">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-sm uppercase text-primary tracking-widest">Benefits for you</h4>
                  <ul className="space-y-3">
                    {result.keyBenefits.map((b, i) => (
                      <li key={i} className="text-base flex items-start gap-3 italic">
                        <div className="h-1 w-3 bg-primary mt-2.5 shrink-0" /> 
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20 space-y-3">
                <h4 className="font-headline font-bold text-sm uppercase text-primary">Strategic Next Step</h4>
                <p className="text-lg text-foreground leading-relaxed italic font-medium">
                  "{result.nextSteps}"
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm mt-4">
                   Vynsec creations provides 24/7 support for all solutions.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
