import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  variant?: "default" | "minimal";
}

const Navbar = ({ variant = "default" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome2 = location.pathname === "/home2";

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Text only */}
          <Link to={isHome2 ? "/" : "/"} className="flex items-center">
            <span className="font-display font-extrabold text-2xl tracking-tight">
              <span className="text-primary">a</span>
              <span className="text-foreground">muthi</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            {/* Switch between home versions */}
            <Link
              to={isHome2 ? "/" : "/home2"}
              className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium flex items-center gap-1"
            >
              {isHome2 ? "Classic View" : "New Design"}
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Log in</Button>
            <Button variant="accent" size="sm">Get Started Free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Link
                to={isHome2 ? "/" : "/home2"}
                className="text-primary font-medium py-2 flex items-center gap-1"
                onClick={() => setIsOpen(false)}
              >
                {isHome2 ? "Classic View" : "New Design"}
                <ArrowRight size={14} />
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="w-full justify-start">Log in</Button>
                <Button variant="accent" className="w-full">Get Started Free</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
