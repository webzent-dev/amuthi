import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA2 = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      
      {/* Large typography watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="text-[20rem] md:text-[30rem] font-black text-muted/5 select-none leading-none">
          GO
        </span>
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
      <div className="absolute bottom-20 right-[10%] w-48 h-48 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-8">
            <span className="text-foreground">Ready to</span>
            <br />
            <span className="text-primary">amplify</span>
            <span className="text-muted-foreground font-light">?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto">
            Join thousands of creators and businesses already growing with Amuthi.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="group text-lg px-10 py-7 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
            >
              Start building — it's free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-lg px-10 py-7 text-foreground hover:text-primary hover:bg-transparent"
            >
              Talk to sales
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm">
            <span>✓ No credit card required</span>
            <span>✓ Free forever plan</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA2;
