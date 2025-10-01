
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle, Book, Phone } from "lucide-react";

const HelpCenter = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        "How do I create an account?",
        "What are the system requirements?",
        "How do I download the mobile app?",
        "How do I verify my email address?"
      ]
    },
    {
      title: "Account & Billing",
      questions: [
        "How do I upgrade my plan?",
        "How do I cancel my subscription?",
        "What payment methods do you accept?",
        "How do I update my billing information?"
      ]
    },
    {
      title: "Features & Usage",
      questions: [
        "How do I sync data across devices?",
        "How do I share content with my team?",
        "How do I export my data?",
        "How do I customize my workspace?"
      ]
    },
    {
      title: "Troubleshooting",
      questions: [
        "Why can't I log in?",
        "The app is running slowly, what should I do?",
        "I'm not receiving notifications",
        "How do I report a bug?"
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      availability: "Available 24/7"
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Browse our comprehensive guides and tutorials",
      availability: "Always available"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri, 9AM-6PM EST"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Help Center</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Find answers to your questions and get the support you need.
        </p>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search for help articles..." 
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Contact Support</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{option.description}</p>
                    <p className="text-sm text-primary font-medium">{option.availability}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.questions.map((question, i) => (
                      <li key={i}>
                        <a href="#" className="text-sm hover:text-primary transition-colors">
                          {question}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
