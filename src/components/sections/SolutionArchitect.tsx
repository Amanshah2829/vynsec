"use client";

import { useState } from "react";
import { generateCustomSolutionBrief, type GenerateCustomSolutionBriefOutput } from "@/ai/flows/generate-custom-solution-brief";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, BrainCircuit, Loader2, ArrowRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SolutionArchitect() {
  const [challenges, setChallenges] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateCustomSolutionBriefOutput | null>(null);

  const handleGenerate = async () => {
    if (!challenges.trim()) return;
    setLoading(true);
    try {
      const output = await generateCustomSolutionBrief({ itChallenges: challenges });
      setResult(output);
    } catch (error) {
      console.error("Failed to generate brief", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="architect" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-accent border-accent/30 gap-2 mb-4">
            <Sparkles className="h-3 w-3" /> GenAI Powered
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Custom Solution Architect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Describe your current IT infrastructure challenges, and the Vynsec Creations AI-driven architect will craft a bespoke solution brief.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="glass border-border shadow-2xl">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-accent" />
                  Define Your Challenges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="E.g., Our current network experiences frequent latency spikes during peak hours, and we're concerned about data vulnerability in our hybrid cloud setup..."
                  className="min-h-[200px] glass focus:ring-accent border-border/50 text-base"
                  value={challenges}
                  onChange={(e) => setChallenges(e.target.value)}
                />
                <Button 
                  onClick={handleGenerate} 
                  disabled={loading || !challenges.trim()} 
                  className="w-full h-14 font-headline text-lg cyber-glow bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  ) : (
                    <Sparkles className="h-5 w-5 mr-2" />
                  )}
                  {loading ? "Analyzing Architecting..." : "Generate Solution Brief"}
                </Button>
              </CardContent>
            </Card>

            <div className="p-6 glass rounded-2xl border-l-4 border-primary">
              <h4 className="font-headline font-bold mb-2">How it works</h4>
              <p className="text-sm text-muted-foreground">
                Our model analyzes your input against our service catalog and expertise database to suggest a tailored strategic roadmap, including specific services and projected benefits.
              </p>
            </div>
          </div>

          <div className="relative min-h-[500px]">
            {!result && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-border rounded-3xl opacity-50">
                <div className="p-4 rounded-full bg-secondary mb-4">
                  <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 lg:rotate-0" />
                </div>
                <h4 className="font-headline font-bold text-xl">Waiting for Input</h4>
                <p className="text-sm text-muted-foreground">Your customized architectural brief will appear here once generated.</p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 glass rounded-3xl border border-accent/20">
                <Loader2 className="h-12 w-12 text-accent animate-spin mb-6" />
                <h4 className="font-headline font-bold text-2xl animate-pulse">Processing Analysis...</h4>
                <p className="text-muted-foreground">Running architectural simulations and security audits...</p>
              </div>
            )}

            {result && !loading && (
              <div className="animate-in fade-in zoom-in duration-500 glass p-8 rounded-3xl border-border/50 shadow-2xl space-y-8 h-full">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest">
                    <CheckCircle className="h-4 w-4" /> Proposed Architecture
                  </div>
                  <h3 className="font-headline text-3xl font-bold">{result.solutionTitle}</h3>
                </div>

                <div className="space-y-4">
                  <h4 className="font-headline font-bold border-b pb-2 text-primary">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">{result.solutionOverview}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-headline font-bold text-sm uppercase text-accent">Selected Services</h4>
                    <ul className="space-y-2">
                      {result.vynsecServices.map((s, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-headline font-bold text-sm uppercase text-primary">Key Benefits</h4>
                    <ul className="space-y-2">
                      {result.keyBenefits.map((b, i) => (
                        <li key={i} className="text-sm flex items-center gap-2 italic">
                          <div className="h-1 w-3 bg-primary" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-secondary/50 p-6 rounded-2xl border border-white/5 space-y-3">
                  <h4 className="font-headline font-bold text-sm uppercase text-foreground">Strategic Next Steps</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{result.nextSteps}"
                  </p>
                  <Button variant="link" className="p-0 h-auto text-accent font-headline">
                    Schedule a review with an architect →
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
