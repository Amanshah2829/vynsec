import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyVynsec } from "@/components/sections/WhyVynsec";
import { Expertise } from "@/components/sections/Expertise";
import { Approach } from "@/components/sections/Approach";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Preloader />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyVynsec />
        <Expertise />
        <CaseStudies />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
