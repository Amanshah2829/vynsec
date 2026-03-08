
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12 space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-headline text-sm font-semibold mb-4 backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              Data Protection
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-tight">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2.5rem] border-border/50 space-y-12 leading-relaxed text-muted-foreground">
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold">Introduction</h2>
              </div>
              <p>
                At Vynsec Creations, we take your privacy seriously. As a cybersecurity and IT solutions provider, protecting data is at the core of what we do. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold">Information We Collect</h2>
              </div>
              <p>
                We may collect personal information that you provide directly to us, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email address, phone number).</li>
                <li>Professional information (company name, job title).</li>
                <li>Project details and IT challenges shared via our contact forms.</li>
                <li>Communication history between you and Vynsec Creations.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <p>
                The information we collect is used primarily to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide requested IT solutions.</li>
                <li>Deliver cybersecurity audits, VAPT services, and technical support.</li>
                <li>Send professional communications regarding your projects.</li>
                <li>Improve our website performance and user experience.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-2xl font-bold">Data Security</h2>
              </div>
              <p>
                We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or destruction. Our systems are regularly audited, and we follow a "security-first" architecture in all our digital operations.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <h2 className="font-headline text-2xl font-bold">Contact Us</h2>
              </div>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact our security team:
              </p>
              <div className="bg-secondary/20 p-6 rounded-2xl border border-border/50">
                <p className="font-bold text-foreground">Vynsec Creations</p>
                <p>Email: info@vynsec.com</p>
                <p>Phone: +91 8780473363</p>
                <p>HQ: Gandhinagar, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
