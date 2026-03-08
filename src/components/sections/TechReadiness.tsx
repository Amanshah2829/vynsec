"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Activity, ShieldAlert, CheckCircle2, Loader2, ArrowRight, Smartphone, GraduationCap, ShieldCheck } from "lucide-react";
import { generateTechStrategy, type TechStrategyOutput } from "@/ai/flows/generate-tech-strategy";

export function TechReadiness() {
  const [businessType, setBusinessType] = useState("");
  const [problems, setProblems] = useState("");
  const [hasWebsite, setHasWebsite] = useState(false);
  const [hasTraining, setHasTraining] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TechStrategyOutput | null>(null);

  const handleAssessment = async () => {
    if (!businessType) return;
    setLoading(true);
    try {
      const output = await generateTechStrategy({
        businessType,
        currentProblems: problems,
        digitalStatus: {
          hasWebsite,
          hasStaffTraining: hasTraining,
          isConcernedAboutSecurity: true,
        },
      });
      setResult(output);
    } catch (error) {
      console.error("Assessment failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="readiness" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-accent border-accent/30 gap-2 mb-4">
            <Activity className="h-3 w-3" /> Digital Health Check
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Digital Readiness Lab</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find out how safe and ready your business is for the digital age. Answer 3 simple questions to get your personalized tech roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="glass border-border shadow-2xl overflow-hidden">
            <CardHeader className="bg-muted/30 pb-8">
              <CardTitle className="font-headline flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                Quick Assessment
              </CardTitle>
              <CardDescription>Tell us about your business setup</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">What is your business type?</label>
                <Input 
                  placeholder="e.g. Retail Shop, Dental Clinic, Small Office" 
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="h-12 glass"
                />
              </div>

              <div className="space-y-4 pt-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Current Setup</label>
                <div className="flex items-center space-x-3 p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors cursor-pointer" onClick={() => setHasWebsite(!hasWebsite)}>
                  <Checkbox checked={hasWebsite} />
                  <span className="text-sm">We have a business website or app</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors cursor-pointer" onClick={() => setHasTraining(!hasTraining)}>
                  <Checkbox checked={hasTraining} />
                  <span className="text-sm">We train our staff on cyber safety</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Main Tech Worry?</label>
                <Input 
                  placeholder="e.g. Slow computers, hacking fears, old software" 
                  value={problems}
                  onChange={(e) => setProblems(e.target.value)}
                  className="h-12 glass"
                />
              </div>

              <Button 
                onClick={handleAssessment} 
                disabled={loading || !businessType} 
                className="w-full h-14 font-headline text-lg cyber-glow bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <ShieldCheck className="h-5 w-5 mr-2" />}
                {loading ? "Analyzing..." : "Get My Tech Roadmap"}
              </Button>
            </CardContent>
          </Card>

          <div className="relative min-h-[500px]">
            {!result && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-border rounded-3xl opacity-50">
                <div className="p-4 rounded-full bg-secondary mb-4">
                  <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 lg:rotate-0" />
                </div>
                <h4 className="font-headline font-bold text-xl">Waiting for Your Input</h4>
                <p className="text-sm text-muted-foreground">Your personalized roadmap will appear here after analysis.</p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 glass rounded-3xl border border-accent/20">
                <Loader2 className="h-12 w-12 text-accent animate-spin mb-6" />
                <h4 className="font-headline font-bold text-2xl animate-pulse">Running Lab Audit...</h4>
                <p className="text-muted-foreground">Checking security benchmarks and digital trends...</p>
              </div>
            )}

            {result && !loading && (
              <div className="animate-in fade-in zoom-in duration-500 glass p-8 rounded-3xl border-border/50 shadow-2xl space-y-8 h-full">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <Badge variant={result.riskLevel === 'High' ? 'destructive' : result.riskLevel === 'Medium' ? 'default' : 'secondary'} className="mb-2">
                      {result.riskLevel} Risk Profile
                    </Badge>
                    <h3 className="font-headline text-3xl font-bold">Your Success Roadmap</h3>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Activity className="h-6 w-6 text-accent" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-sm uppercase text-accent border-b border-white/10 pb-2">Top Priorities</h4>
                  <div className="grid gap-3">
                    {result.topPriorities.map((p, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-sm uppercase text-primary border-b border-white/10 pb-2">Suggested Solutions</h4>
                  <div className="grid gap-4">
                    {result.suggestedSolutions.map((sol, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                        <h5 className="font-bold text-foreground text-sm flex items-center gap-2">
                          {sol.service.includes('Security') ? <ShieldAlert className="h-3 w-3 text-accent" /> : <Smartphone className="h-3 w-3 text-primary" />}
                          {sol.service}
                        </h5>
                        <p className="text-xs text-muted-foreground italic">{sol.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary">
                    <span className="font-bold uppercase text-[10px] tracking-widest block mb-1 opacity-60">Advisor's Note:</span>
                    "{result.simpleAdvice}"
                  </p>
                </div>

                <Button className="w-full h-12 gap-2" variant="outline" asChild>
                  <a href="#contact">Discuss This Roadmap with Us <ArrowRight className="h-4 w-4" /></a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
