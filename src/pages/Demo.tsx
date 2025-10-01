
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Video } from "lucide-react";

const Demo = () => {
  const demoFeatures = [
    {
      icon: Video,
      title: "Live Demo Session",
      description: "30-minute personalized demo with our product expert"
    },
    {
      icon: Users,
      title: "Team Discussion",
      description: "Bring your team members to ask questions"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for you"
    },
    {
      icon: Clock,
      title: "No Commitment",
      description: "Learn about features with no pressure to buy"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule Your Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See MobileApp in action with a personalized demo tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Demo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Email</label>
                  <Input placeholder="john@company.com" type="email" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input placeholder="Your company name" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Size</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Time</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9-12 PM EST)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12-5 PM EST)</SelectItem>
                      <SelectItem value="evening">Evening (5-7 PM EST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">What would you like to see? (Optional)</label>
                  <Textarea placeholder="Tell us about your specific use case or questions" rows={3} />
                </div>
                
                <Button className="w-full" size="lg">
                  Schedule Demo
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We'll send you a calendar invite with video call details
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">What to expect:</h3>
                <div className="space-y-6">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Popular Demo Topics:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mobile app features and capabilities</li>
                  <li>• Integration with existing tools</li>
                  <li>• Security and compliance features</li>
                  <li>• Team collaboration workflows</li>
                  <li>• Pricing and implementation timeline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Demo;
