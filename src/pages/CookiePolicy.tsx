
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Cookie Policy</h1>
        <div className="max-w-4xl mx-auto prose prose-gray">
          <p className="text-muted-foreground mb-8">Last updated: March 1, 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
              They allow us to remember your preferences and provide you with a better user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground mb-4">We use cookies for several purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground mb-2">
                These cookies are necessary for the website to function and cannot be switched off.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                <li>Authentication cookies</li>
                <li>Security cookies</li>
                <li>Session management</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
              <p className="text-muted-foreground mb-2">
                These help us understand how visitors use our website.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                <li>Google Analytics</li>
                <li>Usage statistics</li>
                <li>Performance metrics</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
              <p className="text-muted-foreground mb-2">
                These cookies remember your preferences and settings.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                <li>Language preferences</li>
                <li>Theme settings</li>
                <li>User interface preferences</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Browser settings: Most browsers allow you to block or delete cookies</li>
              <li>Cookie preferences: Use our cookie consent tool to manage your preferences</li>
              <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Some cookies are placed by third-party services that appear on our pages:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Google Analytics for website analytics</li>
              <li>Social media widgets</li>
              <li>Advertising networks</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our use of cookies, please contact us at privacy@mobileapp.com
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
