
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            We are dedicated to creating innovative mobile solutions that transform the way people work and interact with technology.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Our team of experienced developers and designers work tirelessly to deliver cutting-edge mobile applications that meet the highest standards of quality and user experience.
          </p>
          <p className="text-lg text-muted-foreground">
            Founded with the vision of making mobile technology more accessible and powerful, we continue to push the boundaries of what's possible in the mobile app ecosystem.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
