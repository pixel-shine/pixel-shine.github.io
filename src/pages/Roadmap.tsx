
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Calendar } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q4 2023",
      status: "completed",
      items: [
        "Enhanced mobile performance",
        "Real-time collaboration features",
        "Advanced analytics dashboard"
      ]
    },
    {
      quarter: "Q1 2024",
      status: "in-progress",
      items: [
        "AI-powered recommendations",
        "Advanced security features",
        "Multi-language support"
      ]
    },
    {
      quarter: "Q2 2024",
      status: "planned",
      items: [
        "API integrations marketplace",
        "Custom workflow automation",
        "Advanced reporting tools"
      ]
    },
    {
      quarter: "Q3 2024",
      status: "planned",
      items: [
        "Enterprise SSO integration",
        "Advanced team management",
        "Custom branding options"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "in-progress":
        return <Clock className="w-6 h-6 text-yellow-500" />;
      default:
        return <Calendar className="w-6 h-6 text-blue-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Planned";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Product Roadmap</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          See what we're working on and what's coming next. We're constantly improving our platform based on your feedback.
        </p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className="border rounded-lg p-6 bg-card">
              <div className="flex items-center mb-4">
                {getStatusIcon(item.status)}
                <h3 className="text-xl font-semibold ml-3">{item.quarter}</h3>
                <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
                  item.status === "completed" ? "bg-green-100 text-green-800" :
                  item.status === "in-progress" ? "bg-yellow-100 text-yellow-800" :
                  "bg-blue-100 text-blue-800"
                }`}>
                  {getStatusText(item.status)}
                </span>
              </div>
              <ul className="space-y-2">
                {item.items.map((feature, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
