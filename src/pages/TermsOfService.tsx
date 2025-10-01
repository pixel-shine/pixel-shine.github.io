
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
        <div className="max-w-4xl mx-auto prose prose-gray">
          <p className="text-muted-foreground mb-8">Last updated: March 1, 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using MobileApp, you accept and agree to be bound by the terms and 
              provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily use MobileApp for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-muted-foreground mb-4">Under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for commercial purposes</li>
              <li>Attempt to reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              You are responsible for maintaining the confidentiality of your account and password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Prohibited Uses</h2>
            <p className="text-muted-foreground mb-4">You may not use our service:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>For any unlawful purpose</li>
              <li>To transmit viruses or malicious code</li>
              <li>To harass or abuse others</li>
              <li>To violate intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              The materials on MobileApp are provided on an 'as is' basis. MobileApp makes no warranties, 
              expressed or implied, and hereby disclaims all other warranties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitations</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall MobileApp or its suppliers be liable for any damages arising out of 
              the use or inability to use the materials on MobileApp.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at legal@mobileapp.com
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
