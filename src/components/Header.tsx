import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/originstack-logo.png";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "glass-strong border-b border-border py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="OriginStack Technologies"
            className="h-10 md:h-12 w-auto transition-smooth group-hover:scale-105"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <a href="#contact">Schedule Consultation</a>
          </Button>
          <Button variant="brand" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border mt-3 animate-fade-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-2 hover:text-primary transition-smooth"
              >
                {n.label}
              </a>
            ))}
            <Button variant="brand" className="mt-2" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
