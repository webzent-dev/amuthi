import { Camera, Briefcase, Plane, Store, Scissors, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: Camera,
    title: "Photographers & Videographers",
    description: "Showcase your portfolio, book shoots, and manage client scheduling all in one place.",
    highlight: "Portfolio + Booking + Lead Capture",
  },
  {
    icon: Briefcase,
    title: "Freelancers & Consultants",
    description: "Share your services, collect leads, and let clients book time with you effortlessly.",
    highlight: "Services + Calendar + Chat",
  },
  {
    icon: Plane,
    title: "Travel Agents & Agencies",
    description: "Display tour packages, share itineraries, and enable instant bookings via chat.",
    highlight: "Packages + QR Brochures + Booking",
  },
  {
    icon: Store,
    title: "D2C Brands",
    description: "Showcase products, run campaigns, and capture leads with seamless chat integration.",
    highlight: "Products + Campaigns + Lead Gen",
  },
  {
    icon: Scissors,
    title: "Local Service Providers",
    description: "Salons, gyms, tutors — let customers discover, book, and connect with you easily.",
    highlight: "Discovery + Scheduling + Reviews",
  },
  {
    icon: GraduationCap,
    title: "Educators & Coaches",
    description: "Share courses, manage appointments, and build your personal brand online.",
    highlight: "Courses + Booking + Digital Card",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary to-transparent" />
      <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="text-gradient-accent">every business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a solo freelancer or a growing team, Amuthi adapts to your workflow.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative"
            >
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <audience.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {audience.description}
                </p>

                {/* Highlight Tag */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <span className="text-xs font-medium text-accent">
                    {audience.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
