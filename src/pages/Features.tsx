import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/home2/Footer2";
import { Button } from "@/components/ui/button";
import { Link2, QrCode, Calendar, CreditCard, Users, BarChart3, Smartphone, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { LeadFormDialog } from "@/components/LeadFormDialog";

const features = [
  {
    icon: Link2,
    title: "Smart Link Hub",
    subtitle: "Your link-in-bio, supercharged",
    description: "Create stunning landing pages that convert. Track clicks, manage multiple links, and customize everything to match your brand.",
    benefits: ["Custom domains", "Click analytics", "A/B testing", "Unlimited links", "Mobile optimized"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "primary",
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    subtitle: "Dynamic codes that evolve",
    description: "Generate QR codes that you can update anytime without reprinting. Perfect for menus, business cards, and marketing materials.",
    benefits: ["Dynamic destinations", "Scan analytics", "Custom designs", "Bulk generation", "Print-ready export"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    color: "accent",
  },
  {
    icon: Calendar,
    title: "Scheduling & Booking",
    subtitle: "Let clients book you 24/7",
    description: "Seamless appointment scheduling with automatic reminders. Sync with your calendar and never double-book again.",
    benefits: ["Calendar sync", "Auto reminders", "Buffer times", "Payment integration", "Team scheduling"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
    color: "primary",
  },
  {
    icon: CreditCard,
    title: "Digital Business Cards",
    subtitle: "Networking, reimagined",
    description: "NFC-enabled cards that share your contact instantly. Update your info anytime, and track who's viewing your profile.",
    benefits: ["NFC compatible", "Instant sharing", "Profile analytics", "Custom branding", "Contact export"],
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop",
    color: "accent",
  },
  {
    icon: Users,
    title: "Lead Capture Forms",
    subtitle: "Grow your audience effortlessly",
    description: "Beautiful forms that integrate everywhere. Capture leads from your bio link, QR codes, and business cards in one place.",
    benefits: ["Custom fields", "CRM integrations", "Email notifications", "Export to CSV", "GDPR compliant"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    subtitle: "Data-driven decisions",
    description: "Understand your audience with detailed analytics across all tools. See what's working and optimize for growth.",
    benefits: ["Real-time data", "Geographic insights", "Device breakdown", "Conversion tracking", "Custom reports"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "accent",
  },
];

const Features = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <>
      <Helmet>
        <title>Features - Amuthi | Complete Business Toolkit</title>
        <meta 
          name="description" 
          content="Explore Amuthi's powerful features: Smart Links, QR Codes, Scheduling, Digital Business Cards, Lead Capture, and Analytics. Everything you need in one platform."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-accent font-semibold tracking-wide uppercase mb-4">Features</p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                <span className="text-foreground">Seven tools</span>
                <span className="text-primary">,</span>
                <br />
                <span className="text-accent italic font-medium">one platform</span>
                <span className="text-muted-foreground font-light">.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Stop juggling subscriptions. Everything you need to grow your business, beautifully integrated.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                onClick={() => setShowLeadForm(true)}
              >
                Start Free Trial
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-16 items-center py-20 ${
                  index !== features.length - 1 ? 'border-b border-border/50' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
                    feature.color === 'primary' 
                      ? 'border-primary/30 bg-primary/5 text-primary' 
                      : 'border-accent/30 bg-accent/5 text-accent'
                  }`}>
                    <feature.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{feature.subtitle}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{feature.description}</p>
                  
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-muted-foreground">
                        <Check className={`w-5 h-5 ${feature.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="text-foreground hover:text-primary px-0"
                    onClick={() => setShowLeadForm(true)}
                  >
                    Try {feature.title} free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`aspect-[4/3] rounded-3xl overflow-hidden border ${
                    feature.color === 'primary' ? 'border-primary/20' : 'border-accent/20'
                  }`}>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Smartphone className="w-16 h-16 text-primary mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-4xl font-bold text-foreground mb-6">Mobile-First Design</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access all features from any device. Our progressive web app works seamlessly on desktop, tablet, and mobile.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
                  ✓ iOS Compatible
                </div>
                <div className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
                  ✓ Android Compatible
                </div>
                <div className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
                  ✓ Offline Mode
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to get started?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands of creators already using Amuthi.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              onClick={() => setShowLeadForm(true)}
            >
              Start Building Free
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        <Footer2 />
        <LeadFormDialog open={showLeadForm} onOpenChange={setShowLeadForm} />
      </div>
    </>
  );
};

export default Features;
