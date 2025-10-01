
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Features</h1>
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
