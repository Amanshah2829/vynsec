
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isPending, setIsPending] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        toast({
          title: "Transmission Sent",
          description: "Your message has been received. We will contact you shortly.",
        });
        formRef.current?.reset();
      } else {
        throw new Error("Failed to deliver");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Communication Failure",
        description: "We encountered an error processing your request. Please try again or contact us directly.",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row glass rounded-[2.5rem] overflow-hidden border-border/50">
          <div className="lg:w-2/5 bg-primary p-12 text-primary-foreground space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="space-y-4 relative z-10">
              <h3 className="font-headline text-3xl font-bold">Contact Intelligence</h3>
              <p className="opacity-80 text-lg leading-relaxed">
                Connect with our team to explore how Vynsec Creations can transform your IT infrastructure.
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm opacity-60">Email Us</p>
                  <p className="font-headline font-bold text-base md:text-lg">info@vynsec.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm opacity-60">Direct Support</p>
                  <p className="font-headline font-bold text-base md:text-lg">+91 8780473363</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm opacity-60">HQ Location</p>
                  <p className="font-headline font-bold text-base md:text-lg">Gandhinagar, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-12 bg-card">
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <Input name="name" required placeholder="John Doe" className="h-12 glass border-border focus:border-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <Input name="email" type="email" required placeholder="john@enterprise.com" className="h-12 glass border-border focus:border-primary transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input name="subject" required placeholder="Inquiry about Cyber Defense" className="h-12 glass border-border focus:border-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea name="message" required placeholder="Tell us about your project..." className="min-h-[150px] glass border-border focus:border-primary transition-all" />
              </div>
              <Button type="submit" disabled={isPending} className="w-full h-14 font-headline text-lg gap-2 shadow-xl shadow-primary/20 transition-all hover:scale-[1.01]">
                {isPending ? (
                  <>Processing... <Loader2 className="h-5 w-5 animate-spin" /></>
                ) : (
                  <>Send Transmission <Send className="h-5 w-5" /></>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
