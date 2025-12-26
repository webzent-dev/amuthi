import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero2 from "@/components/home2/Hero2";
import Features2 from "@/components/home2/Features2";
import Showcase2 from "@/components/home2/Showcase2";
import Pricing2 from "@/components/home2/Pricing2";
import CTA2 from "@/components/home2/CTA2";
import Footer2 from "@/components/home2/Footer2";

const Home2 = () => {
  return (
    <>
      <Helmet>
        <title>Amuthi - Your Business, Amplified</title>
        <meta 
          name="description" 
          content="One platform. Infinite possibilities. Smart links, scheduling, QR codes, and more — designed for creators who demand more."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-hidden">
        <Navbar />
        <Hero2 />
        <Features2 />
        <Showcase2 />
        <Pricing2 />
        <CTA2 />
        <Footer2 />
      </div>
    </>
  );
};

export default Home2;
