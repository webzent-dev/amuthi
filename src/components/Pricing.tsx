import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Smart Link Hub (basic)",
      "5 QR codes",
      "Digital business card",
      "Basic analytics",
      "Email support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹299",
    period: "per month",
    description: "For growing professionals",
    features: [
      "Unlimited links & QR codes",
      "Smart scheduling",
      "Lead capture forms",
      "Chat integration",
      "Advanced analytics",
      "Custom themes",
      "Priority support",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Business",
    price: "₹699",
    period: "per month",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "Team access (up to 5)",
      "Bulk QR generation",
      "Lead assignment",
      "API access",
      "Custom domain",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Simple,{" "}
            <span className="text-gradient-primary">transparent</span>{" "}
            pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free. Upgrade when you're ready. No hidden fees, no ads.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-card border-primary/50 shadow-glow-primary scale-105"
                  : "bg-card border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-primary/20" : "bg-accent/20"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-primary" : "text-accent"}`} />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "accent" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
