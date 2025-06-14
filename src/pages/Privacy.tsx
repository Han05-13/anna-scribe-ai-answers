
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  StuBud AI ("we," "our," or "us") collects the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Usage Data:</strong> Questions you input, generated answers, and interaction patterns</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and access times</li>
                  <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies for analytics and user experience</li>
                  <li><strong>API Keys:</strong> Your Gemini API keys are stored locally in your browser and never transmitted to our servers</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cookies and Tracking Technologies</h2>
                <p className="mb-4">We use various cookies and tracking technologies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                  <li><strong>Analytics Cookies:</strong> Google Analytics to understand user behavior</li>
                  <li><strong>Advertising Cookies:</strong> Google AdSense and DoubleClick for targeted advertising</li>
                  <li><strong>Performance Cookies:</strong> To optimize site performance and user experience</li>
                </ul>
                <p className="mt-4">
                  You can control cookie preferences through our cookie consent banner or your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Google AdSense and DoubleClick</h2>
                <p className="mb-4">
                  We use Google AdSense and DoubleClick for advertising. These services may:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use cookies to serve ads based on your interests</li>
                  <li>Collect data about your visits to this and other websites</li>
                  <li>Use the DoubleClick cookie to enable targeted advertising</li>
                  <li>Allow third-party vendors to show our ads across the internet</li>
                </ul>
                <p className="mt-4">
                  You can opt out of personalized advertising by visiting 
                  <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> Google Ad Settings</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
                <p className="mb-4">We use collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our AI answer generation service</li>
                  <li>Analyze usage patterns and optimize user experience</li>
                  <li>Display relevant advertisements through Google AdSense</li>
                  <li>Ensure security and prevent fraudulent activities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Third Parties</h2>
                <p className="mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Services:</strong> Analytics, AdSense, and DoubleClick for advertising</li>
                  <li><strong>Service Providers:</strong> Hosting, analytics, and technical service providers</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. GDPR Compliance (EU Users)</h2>
                <p className="mb-4">
                  If you are located in the European Union, you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Transfer your data to another service</li>
                  <li><strong>Right to Object:</strong> Object to processing for direct marketing</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at privacy@stubudai.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information. 
                  However, no method of transmission over the internet is 100% secure. Your API keys are stored 
                  locally in your browser and are never transmitted to our servers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
                <p>
                  We retain your information for as long as necessary to provide our services and comply with 
                  legal obligations. Analytics data is typically retained for 26 months as per Google Analytics standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p>
                  Our service is not intended for children under 13. We do not knowingly collect personal 
                  information from children under 13. If you believe we have collected information from a 
                  child under 13, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none mt-4 space-y-1">
                  <li>Email: privacy@stubudai.com</li>
                  <li>Website: Contact form on StuBud AI</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
