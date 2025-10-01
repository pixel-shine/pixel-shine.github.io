
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Server } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All your data is encrypted using industry-standard AES-256 encryption"
    },
    {
      icon: Lock,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security with 2FA support"
    },
    {
      icon: Eye,
      title: "Privacy Controls",
      description: "Granular privacy settings to control who sees your data"
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Hosted on enterprise-grade secure cloud infrastructure"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Security & Privacy</h1>
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground text-center mb-8">
            Your security and privacy are our top priorities. Learn about our comprehensive security measures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 rounded-lg border bg-card">
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Security Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-muted-foreground">Independently audited security controls</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">ISO 27001</h3>
              <p className="text-sm text-muted-foreground">International security management standard</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">GDPR Compliant</h3>
              <p className="text-sm text-muted-foreground">Full compliance with data protection regulations</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Security;
