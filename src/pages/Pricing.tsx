import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/home2/Footer2";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { useState } from "react";
import { LeadFormDialog } from "@/components/LeadFormDialog";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Free",
    monthlyPrice: "₹0",
    yearlyPrice: "₹0",
    period: "forever",
    description: "Perfect for getting started and testing the waters.",
    features: [
      "1 Smart Link page",
      "5 QR codes",
      "5 scheduled meetings/month",
      "Basic analytics",
      "Amuthi branding",
      "Email support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: "₹499",
    yearlyPrice: "₹399",
    period: "/month",
    description: "For creators and freelancers who mean business.",
    features: [
      "Unlimited Smart Links",
      "Unlimited QR codes",
      "Unlimited scheduling",
      "Lead capture forms",
      "Custom domain",
      "Remove branding",
      "Advanced analytics",
      "Priority support",
      "API access",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Business",
    monthlyPrice: "₹1,499",
    yearlyPrice: "₹1,199",
    period: "/month",
    description: "For teams and agencies managing multiple clients.",
    features: [
      "Everything in Pro",
      "5 team members",
      "White-label solution",
      "Custom integrations",
      "Advanced API access",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remaining time. When downgrading, the change takes effect at your next billing cycle.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "We offer a 14-day free trial for Pro and Business plans. No credit card required to start. You'll get full access to all features during the trial.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, Amex), UPI, net banking, and popular wallets. For Business plans, we also offer invoice-based billing.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time, and you'll continue to have access until the end of your billing period.",
  },
  {
    question: "Do you offer discounts for nonprofits or education?",
    answer: "Yes! We offer special pricing for registered nonprofits, educational institutions, and students. Contact our team with proof of eligibility for up to 50% off.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains accessible for 30 days after cancellation. You can export everything during this period. After 30 days, data is permanently deleted per our privacy policy.",
  },
];

const Pricing = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Helmet>
        <title>Pricing - Amuthi | Simple, Transparent Plans</title>
        <meta 
          name="description" 
          content="Choose the perfect Amuthi plan for your needs. Free forever plan available. Pro and Business plans for serious creators and teams. No hidden fees."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-accent font-semibold tracking-wide uppercase mb-4">Pricing</p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                <span className="text-foreground">Simple pricing</span>
                <span className="text-primary">.</span>
                <br />
                <span className="text-muted-foreground font-light">No surprises</span>
                <span className="text-muted-foreground font-light">.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start free, upgrade when you're ready. All plans include core features.
              </p>
            </div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="pb-8">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4">
              <span className={`font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch 
                checked={isYearly} 
                onCheckedChange={setIsYearly}
              />
              <span className={`font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-6">
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
                    <span className="text-5xl font-extrabold text-foreground">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
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
                    onClick={() => setShowLeadForm(true)}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12 text-sm">
              All prices in INR. GST applicable. Need a custom plan?{" "}
              <span 
                className="text-primary cursor-pointer hover:underline"
                onClick={() => setShowLeadForm(true)}
              >
                Let's talk
              </span>
            </p>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Compare Plans</h2>
              <p className="text-muted-foreground text-lg">
                All the details to help you choose the right plan.
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Free</th>
                    <th className="text-center py-4 px-4 text-primary font-semibold">Pro</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Business</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Smart Link Pages", "1", "Unlimited", "Unlimited"],
                    ["QR Codes", "5", "Unlimited", "Unlimited"],
                    ["Scheduled Meetings", "5/month", "Unlimited", "Unlimited"],
                    ["Custom Domain", "—", "✓", "✓"],
                    ["Remove Branding", "—", "✓", "✓"],
                    ["Team Members", "—", "1", "5"],
                    ["API Access", "—", "Basic", "Advanced"],
                    ["White Label", "—", "—", "✓"],
                    ["Support", "Email", "Priority", "Dedicated"],
                  ].map(([feature, free, pro, business], idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="py-4 px-4 text-muted-foreground">{feature}</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">{free}</td>
                      <td className="text-center py-4 px-4 text-primary">{pro}</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">{business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-foreground mb-4">Questions? We've got answers.</h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`}
                    className="bg-card border border-border rounded-2xl px-6"
                  >
                    <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Still have questions?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Our team is here to help. Book a demo and we'll walk you through everything.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => setShowLeadForm(true)}
            >
              Book a Demo
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        <Footer2 />
        <LeadFormDialog 
          open={showLeadForm} 
          onOpenChange={setShowLeadForm}
          title="Let's Talk"
          description="Tell us about your needs and we'll help you find the perfect plan."
        />
      </div>
    </>
  );
};

export default Pricing;
