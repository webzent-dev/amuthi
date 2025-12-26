import { ArrowUpRight } from "lucide-react";

const audiences = [
  {
    title: "Freelancers",
    description: "One link for all your services. Professional presence without the overhead.",
    stat: "47%",
    statLabel: "more client inquiries",
  },
  {
    title: "Small Businesses",
    description: "Complete digital toolkit. From storefront to scheduling, all unified.",
    stat: "3x",
    statLabel: "faster growth",
  },
  {
    title: "Content Creators",
    description: "Monetize your audience. Link everything, track everything, grow everything.",
    stat: "89%",
    statLabel: "engagement increase",
  },
];

const Showcase2 = () => {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      {/* Dramatic diagonal background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with large typography */}
        <div className="mb-20">
          <p className="text-primary font-semibold tracking-wide uppercase mb-4">Who it's for</p>
          <h2 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[0.95]">
            Built for
            <br />
            <span className="text-muted-foreground font-light italic">those who</span>
            <br />
            <span className="text-accent">build</span>
            <span className="text-muted-foreground font-light">.</span>
          </h2>
        </div>

        {/* Audience cards - horizontal scroll on mobile, grid on desktop */}
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Number indicator */}
              <span className="absolute top-6 right-6 text-6xl font-black text-muted/30 group-hover:text-primary/20 transition-colors">
                0{index + 1}
              </span>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {audience.description}
                </p>

                {/* Stat highlight */}
                <div className="pt-6 border-t border-border">
                  <span className="text-4xl font-extrabold text-accent">{audience.stat}</span>
                  <p className="text-sm text-muted-foreground mt-1">{audience.statLabel}</p>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent text */}
        <div className="mt-20 flex justify-center">
          <p className="text-center text-muted-foreground max-w-xl">
            <span className="text-foreground font-semibold">2,847+ businesses</span> trust Amuthi to power their digital presence. 
            From solo creators to growing teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Showcase2;
