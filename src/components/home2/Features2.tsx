import { Link2, QrCode, Calendar, CreditCard, Users, BarChart3, Smartphone } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Smart Link Hub",
    description: "Bio links that actually convert",
    color: "primary",
    size: "large",
  },
  {
    icon: QrCode,
    title: "QR Magic",
    description: "Dynamic codes, real-time analytics",
    color: "accent",
    size: "medium",
  },
  {
    icon: Calendar,
    title: "Booking Engine",
    description: "Seamless scheduling",
    color: "primary",
    size: "medium",
  },
  {
    icon: CreditCard,
    title: "Digital Cards",
    description: "NFC-ready business cards",
    color: "accent",
    size: "small",
  },
  {
    icon: Users,
    title: "Lead Capture",
    description: "Forms that grow your list",
    color: "primary",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Deep insights",
    color: "accent",
    size: "small",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "PWA ready",
    color: "primary",
    size: "small",
  },
];

const Features2 = () => {
  return (
    <section id="features" className="py-32 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header - asymmetric */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-muted-foreground font-light">Everything</span>
              <br />
              <span className="text-foreground">you need</span>
              <span className="text-primary">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-muted-foreground border-l-2 border-primary/50 pl-6">
              Seven powerful tools, one unified platform. No more juggling subscriptions or wrestling with integrations.
            </p>
          </div>
        </div>

        {/* Bento grid - editorial asymmetric layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large feature card */}
          <div className="col-span-12 md:col-span-8 row-span-2 group">
            <div className="h-full p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <Link2 className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Smart Link Hub</h3>
                <p className="text-lg text-muted-foreground max-w-md mb-8">
                  Your complete link-in-bio solution. Custom domains, deep analytics, and conversion tracking that actually makes sense.
                </p>
                
                {/* Mini preview */}
                <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    Custom domains
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    Analytics
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    A/B Testing
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium feature cards */}
          <div className="col-span-12 md:col-span-4 group">
            <div className="h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-500">
              <QrCode className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-foreground mb-2">QR Magic</h3>
              <p className="text-muted-foreground">Dynamic QR codes with real-time destination updates and scan analytics.</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 group">
            <div className="h-full p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-500">
              <Calendar className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-foreground mb-2">Booking Engine</h3>
              <p className="text-muted-foreground">Seamless scheduling with calendar sync and automatic reminders.</p>
            </div>
          </div>

          {/* Small feature cards row */}
          <div className="col-span-6 md:col-span-3 group">
            <div className="h-full p-5 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-500">
              <CreditCard className="w-8 h-8 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-foreground">Digital Cards</h3>
              <p className="text-sm text-muted-foreground mt-1">NFC-ready</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 group">
            <div className="h-full p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500">
              <Users className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-foreground">Lead Capture</h3>
              <p className="text-sm text-muted-foreground mt-1">Smart forms</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 group">
            <div className="h-full p-5 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-500">
              <BarChart3 className="w-8 h-8 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-foreground">Analytics</h3>
              <p className="text-sm text-muted-foreground mt-1">Deep insights</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 group">
            <div className="h-full p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border hover:border-primary/40 transition-all duration-500">
              <Smartphone className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-foreground">Mobile First</h3>
              <p className="text-sm text-muted-foreground mt-1">PWA ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
