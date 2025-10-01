import testimonialImage from "@/assets/testimonial-1.jpg";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager, Tech Corp",
    image: testimonialImage,
    content: "This app has completely transformed how our team collaborates. The mobile experience is seamless, and the features are exactly what we needed.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, StartupXYZ",
    content: "I've tried dozens of apps in this category, but this one stands out. The attention to detail and user experience is outstanding.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Designer, Creative Studio",
    content: "Finally, an app that understands mobile-first design. It's beautiful, fast, and incredibly intuitive to use.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by
            <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              thousands worldwide
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our users have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl space-y-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-4">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} profile picture`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                  />
                )}
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
