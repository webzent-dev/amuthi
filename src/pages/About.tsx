import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/home2/Footer2";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react";
import { useState } from "react";
import { LeadFormDialog } from "@/components/LeadFormDialog";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We exist to empower small businesses and creators with enterprise-level tools at accessible prices.",
  },
  {
    icon: Heart,
    title: "User-First",
    description: "Every feature we build starts with understanding what our users truly need to succeed.",
  },
  {
    icon: Zap,
    title: "Simplicity",
    description: "Powerful doesn't mean complicated. We believe the best tools are the ones you don't have to think about.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We grow together. Your success stories fuel our innovation and drive us forward.",
  },
];

const team = [
  { name: "Founder & CEO", role: "Visionary behind Amuthi's integrated approach to business tools." },
  { name: "Head of Product", role: "Crafting seamless experiences for creators and businesses." },
  { name: "Lead Engineer", role: "Building robust, scalable solutions that just work." },
  { name: "Customer Success", role: "Ensuring every user achieves their business goals." },
];

const About = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <>
      <Helmet>
        <title>About Us - Amuthi | Our Story & Mission</title>
        <meta 
          name="description" 
          content="Learn about Amuthi's mission to empower creators and small businesses with an all-in-one digital toolkit. Discover our story, values, and the team behind the platform."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-accent font-semibold tracking-wide uppercase mb-4">About Us</p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                <span className="text-foreground">We're building the</span>
                <br />
                <span className="text-primary">future</span>
                <span className="text-muted-foreground font-light"> of</span>
                <br />
                <span className="text-accent italic font-medium">business tools</span>
                <span className="text-muted-foreground font-light">.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Amuthi was born from a simple frustration: why do small businesses need 10 different subscriptions to do what enterprises do with one platform?
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    In 2024, we noticed something broken. Freelancers and small business owners were spending more time managing their digital tools than actually running their businesses.
                  </p>
                  <p>
                    Link-in-bio tools here, scheduling software there, QR code generators somewhere else, and lead capture forms on yet another platform. The fragmentation was exhausting.
                  </p>
                  <p>
                    So we built Amuthi — a unified platform that brings together smart links, QR codes, scheduling, digital business cards, and lead capture into one seamless experience.
                  </p>
                  <p className="text-foreground font-medium">
                    Today, thousands of creators and businesses trust Amuthi to power their digital presence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl font-bold">
                  Est. 2024
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg">The principles that guide everything we do.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <value.icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">The Team</h2>
              <p className="text-muted-foreground text-lg">Passionate people building powerful tools.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to join the movement?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Start building your unified digital presence today. No credit card required.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => setShowLeadForm(true)}
            >
              Get Started Free
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

export default About;
