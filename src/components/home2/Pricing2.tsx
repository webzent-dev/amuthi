import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["1 Smart Link page", "Basic QR codes", "5 scheduled meetings/mo", "Amuthi branding"],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    description: "For serious creators",
    features: [
      "Unlimited Smart Links",
      "Dynamic QR codes",
      "Unlimited scheduling",
      "Lead capture forms",
      "Custom domain",
      "Remove branding",
      "Priority support",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Business",
    price: "₹1,499",
    period: "/month",
    description: "For teams & agencies",
    features: [
      "Everything in Pro",
      "5 team members",
      "White-label solution",
      "API access",
      "Advanced analytics",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const Pricing2 = () => {
  return (
    <section id="pricing" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase mb-4">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Simple pricing<span className="text-primary">.</span>
            <br />
            <span className="text-muted-foreground font-light">No surprises.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Start free, upgrade when you're ready. Cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-card border-primary/30 scale-105 shadow-glow-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl py-6 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          All prices in INR. GST applicable. Need a custom plan? <span className="text-primary cursor-pointer hover:underline">Let's talk</span>
        </p>
      </div>
    </section>
  );
};

export default Pricing2;
