import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-app.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                New features available
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The Future of
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mobile Innovation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Transform the way you work with our cutting-edge mobile app. Designed for professionals who demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
                  ))}
                </div>
                <span className="text-muted-foreground">10k+ users</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">4.9/5</span>
                <span className="text-muted-foreground">rating</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mobile app interface showcasing modern design" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
