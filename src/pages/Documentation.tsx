
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Code, Zap, Settings } from "lucide-react";

const Documentation = () => {
  const docSections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Quick start guide to get you up and running in minutes",
      topics: ["Installation", "First Steps", "Basic Configuration", "Quick Tutorial"]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation with examples and code samples",
      topics: ["Authentication", "Endpoints", "Rate Limits", "Error Handling"]
    },
    {
      icon: Zap,
      title: "Advanced Features",
      description: "Learn about our powerful features and how to use them",
      topics: ["Automation", "Integrations", "Custom Workflows", "Analytics"]
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Detailed configuration options and customization guides",
      topics: ["Settings", "Permissions", "Security", "Performance"]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Documentation</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Everything you need to know to get the most out of our platform.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {docSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.topics.map((topic, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <a href="#" className="hover:text-primary transition-colors">{topic}</a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Contact Support
            </a>
            <a href="/community" className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              Join Community
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
