import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">All-in-one business toolkit</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Everything your{" "}
            <span className="text-gradient-primary">business</span>{" "}
            needs in{" "}
            <span className="text-gradient-accent">one link</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            Smart links, scheduling, QR codes, digital cards, and lead capture — 
            designed for freelancers, creators, and small businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero">
              Start for Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline">
              See How It Works
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by thousands of businesses</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["Photographers", "Designers", "Travel Agents", "Consultants", "D2C Brands"].map((item, i) => (
                <span 
                  key={item} 
                  className="text-sm font-medium text-muted-foreground/60 hover:text-foreground transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
