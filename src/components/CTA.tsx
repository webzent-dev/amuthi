import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/25 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-8">
            <Zap className="w-8 h-8 text-accent" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to grow your{" "}
            <span className="text-gradient-accent">business</span>?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of freelancers and small businesses who have simplified 
            their digital presence with Amuthi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline">
              Schedule a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <p className="mt-8 text-sm text-muted-foreground">
            No credit card required • Free forever plan • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
