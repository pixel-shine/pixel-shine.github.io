import { Smartphone, Zap, Shield, Users, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Native Experience",
    description: "Lightning-fast performance with a beautiful, intuitive interface designed for mobile-first users.",
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Instant synchronization across all your devices. Your data, always up to date, everywhere.",
  },
  {
    icon: Shield,
    title: "Bank-level Security",
    description: "Enterprise-grade encryption and security protocols to keep your data safe and private.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team with real-time collaboration tools and instant notifications.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain insights with powerful analytics and reporting tools built right into the app.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to help you succeed, anytime, anywhere.",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need to
            <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              succeed on mobile
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help you work smarter and faster, wherever you are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
