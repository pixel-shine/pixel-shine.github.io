
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Star } from "lucide-react";

const Trial = () => {
  const benefits = [
    "Full access to all premium features",
    "14-day free trial period",
    "No credit card required",
    "Cancel anytime",
    "24/7 customer support",
    "Access to mobile app"
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your Free Trial
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience the full power of MobileApp with no commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Create Your Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company (Optional)</label>
                  <Input placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input placeholder="Your phone number" type="tel" />
                </div>
                <Button className="w-full" size="lg">
                  Start Free Trial
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">What's included:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "MobileApp has transformed how our team works. The mobile experience is exceptional!"
                </p>
                <p className="text-sm font-medium mt-2">- Sarah Johnson, Tech Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trial;
