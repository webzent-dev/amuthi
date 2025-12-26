import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero2 = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Asymmetric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large diagonal accent stripe */}
        <div 
          className="absolute -top-1/2 -right-1/4 w-[150%] h-[200%] bg-gradient-to-br from-primary/5 via-transparent to-transparent rotate-12 transform-gpu"
        />
        {/* Floating shapes */}
        <div className="absolute top-32 left-[10%] w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-[15%] w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Geometric accents */}
        <div className="absolute top-40 right-[20%] w-2 h-32 bg-accent rotate-45" />
        <div className="absolute bottom-40 left-[8%] w-24 h-2 bg-primary" />
        <div className="absolute top-[60%] right-[5%] w-16 h-16 border-2 border-primary/30 rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left content - takes 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Now in public beta</span>
            </div>

            {/* Main headline - editorial style with mixed weights */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tight">
              <span className="text-foreground">Your</span>
              <br />
              <span className="text-primary">business</span>
              <span className="text-muted-foreground font-light">,</span>
              <br />
              <span className="text-accent italic font-medium">amplified</span>
              <span className="text-muted-foreground font-light">.</span>
            </h1>

            {/* Subheadline with left border accent */}
            <div className="border-l-4 border-accent pl-6 max-w-lg">
              <p className="text-xl text-muted-foreground leading-relaxed">
                One platform. Infinite possibilities. Smart links, scheduling, QR codes, and lead capture — designed for creators who demand more.
              </p>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-none">
                Start building free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg" className="text-lg px-8 py-6 rounded-none border-b-2 border-transparent hover:border-foreground hover:bg-transparent">
                Watch demo
              </Button>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-6 pt-8 border-t border-border/50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 border-2 border-background flex items-center justify-center text-xs font-bold text-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">2,847+ creators</p>
                <p className="text-sm text-muted-foreground">already building with Amuthi</p>
              </div>
            </div>
          </div>

          {/* Right side - abstract visualization */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-square">
              {/* Stacked cards with parallax-like effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Background card */}
                  <div className="absolute top-8 right-0 w-[85%] h-[85%] rounded-3xl bg-card border border-border/50 shadow-card transform rotate-6" />
                  
                  {/* Middle card */}
                  <div className="absolute top-4 right-4 w-[85%] h-[85%] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 transform rotate-3" />
                  
                  {/* Front card - main visual */}
                  <div className="absolute inset-0 w-[85%] h-[85%] rounded-3xl bg-card border border-border overflow-hidden shadow-glow-primary">
                    {/* Mock interface elements */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-destructive" />
                        <div className="w-3 h-3 rounded-full bg-accent" />
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </div>
                      
                      <div className="space-y-3 pt-4">
                        <div className="h-4 bg-muted rounded w-3/4" />
                        <div className="h-4 bg-muted rounded w-1/2" />
                        <div className="h-12 bg-primary/20 rounded-lg mt-6" />
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="h-20 bg-accent/20 rounded-lg" />
                          <div className="h-20 bg-primary/10 rounded-lg" />
                        </div>
                        <div className="h-8 bg-muted rounded w-full mt-4" />
                        <div className="h-8 bg-muted rounded w-2/3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -left-4 top-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-glow-accent z-10">
                ✨ 7 tools in 1
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero2;
