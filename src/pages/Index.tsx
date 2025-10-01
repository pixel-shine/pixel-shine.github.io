import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <AppShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
