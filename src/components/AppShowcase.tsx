import appScreen from "@/assets/app-screen-1.png";
import { Check } from "lucide-react";

const benefits = [
  "Intuitive user interface designed for productivity",
  "Seamless integration with your favorite tools",
  "Offline mode - work anywhere, anytime",
  "Smart notifications that keep you informed",
  "Customizable workflows for your unique needs",
];

const AppShowcase = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative max-w-md mx-auto">
              <img 
                src={appScreen} 
                alt="Mobile app dashboard showing analytics and statistics" 
                className="w-full drop-shadow-2xl animate-fade-in"
              />
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Built for the way
                <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  you work
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Every feature is thoughtfully designed to make your mobile experience effortless and enjoyable.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Available on iOS and Android
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
