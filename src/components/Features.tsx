import { Link2, QrCode, Calendar, UserCircle, MessageCircle, FileText, Receipt, Star, Share2, Image } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Smart Link Hub",
    description: "One link for your portfolio, services, and social media with custom themes and analytics.",
    color: "primary",
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    description: "Dynamic & static QR codes for offline promotions, reviews, WhatsApp, and events.",
    color: "accent",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Appointment booking with availability management, calendar sync, and timezone support.",
    color: "primary",
  },
  {
    icon: UserCircle,
    title: "Digital Business Card",
    description: "Contact info, social links, and portfolio in one tap. Works offline, shareable via QR.",
    color: "accent",
  },
  {
    icon: FileText,
    title: "Lead Capture Forms",
    description: "Collect enquiries, bookings, or quotes with WhatsApp and email notifications.",
    color: "primary",
  },
  {
    icon: Receipt,
    title: "Invoice & Payments",
    description: "Create professional invoices, accept online payments, and track your income effortlessly.",
    color: "accent",
  },
  {
    icon: Star,
    title: "Review Collection",
    description: "Automatically collect and showcase customer reviews to build trust and credibility.",
    color: "primary",
  },
  {
    icon: Share2,
    title: "Social Media Scheduler",
    description: "Plan and schedule posts across platforms to maintain consistent social presence.",
    color: "accent",
  },
  {
    icon: Image,
    title: "Portfolio Gallery",
    description: "Stunning galleries to showcase your work with download protection and watermarking.",
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "Chat Integration",
    description: "WhatsApp, Messenger, and Telegram integration for instant customer engagement.",
    color: "accent",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            All the tools you need,{" "}
            <span className="text-gradient-primary">unified</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stop juggling multiple platforms. Amuthi brings everything together 
            so you can focus on growing your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                feature.color === "primary" 
                  ? "bg-primary/20 text-primary" 
                  : "bg-accent/20 text-accent"
              }`}>
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                feature.color === "primary"
                  ? "shadow-glow-primary"
                  : "shadow-glow-accent"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
