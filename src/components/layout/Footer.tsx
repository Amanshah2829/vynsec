
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Vynsec Creations Logo" 
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-headline text-lg font-bold tracking-tight uppercase">
              VYNSEC <span className="text-primary font-extrabold">CREATIONS</span>
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-8">
            <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/#expertise" className="text-sm text-muted-foreground hover:text-primary transition-colors">Expertise</Link>
            <Link href="/#approach" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Process</Link>
            <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Privacy Policy</Link>
          </nav>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vynsec Creations. All rights reserved.</p>
          <p>Building secure and simple futures for businesses worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
