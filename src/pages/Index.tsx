import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Amuthi - All-in-One Business Toolkit for Freelancers & Small Businesses</title>
        <meta 
          name="description" 
          content="Smart links, scheduling, QR codes, digital business cards, and lead capture — everything your business needs in one platform. Start free today."
        />
        <meta name="keywords" content="smart links, link in bio, QR codes, scheduling, digital business card, lead capture, freelancer tools" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Features />
        <Solutions />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;
