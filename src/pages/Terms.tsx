
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
              Terms & Conditions
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using StuBud AI ("the Service"), you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  StuBud AI is an educational platform that uses artificial intelligence to generate answers for 
                  Anna University examination questions. The service provides:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI-powered answer generation for 2-mark, 13-mark, and 15-mark questions</li>
                  <li>Educational content tailored to Anna University curriculum</li>
                  <li>Study assistance and reference materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="mb-4">As a user of StuBud AI, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service for educational and learning purposes only</li>
                  <li>Provide your own valid Gemini API key for service functionality</li>
                  <li>Not attempt to reverse engineer or compromise the service</li>
                  <li>Respect intellectual property rights</li>
                  <li>Use generated content as reference material, not as final submissions</li>
                  <li>Verify information with official academic sources</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Academic Integrity</h2>
                <p className="mb-4">
                  StuBud AI is designed to assist learning and understanding. Users must:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use generated answers as study guides and reference materials</li>
                  <li>Develop their own understanding of concepts</li>
                  <li>Comply with their institution's academic integrity policies</li>
                  <li>Not submit AI-generated content as their own original work</li>
                  <li>Understand that academic dishonesty may result in serious consequences</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. API Key Usage</h2>
                <p className="mb-4">
                  Users are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Obtaining and maintaining their own Gemini API key</li>
                  <li>Complying with Google's API terms of service</li>
                  <li>Managing their API usage and associated costs</li>
                  <li>Keeping their API key secure and not sharing it</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitations and Disclaimers</h2>
                <p className="mb-4">
                  StuBud AI provides information "as is" and:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Does not guarantee the accuracy or completeness of generated content</li>
                  <li>Is not responsible for academic outcomes or decisions based on generated content</li>
                  <li>May experience service interruptions or technical issues</li>
                  <li>Cannot replace proper study, understanding, and academic guidance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Prohibited Uses</h2>
                <p className="mb-4">Users may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service for illegal activities</li>
                  <li>Attempt to abuse or overload the service</li>
                  <li>Share or redistribute API keys</li>
                  <li>Reverse engineer the service</li>
                  <li>Use the service to generate harmful or inappropriate content</li>
                  <li>Violate academic integrity policies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
                <p>
                  The StuBud AI platform, its design, code, and original content are protected by intellectual 
                  property laws. Generated content using AI is provided for educational use and should be 
                  treated as reference material.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy and Data</h2>
                <p>
                  Your use of StuBud AI is also governed by our Privacy Policy. Please review our Privacy Policy, 
                  which also governs the Site and informs users of our data collection practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Service Availability</h2>
                <p>
                  We strive to maintain service availability but do not guarantee uninterrupted access. 
                  The service may be temporarily unavailable due to maintenance, updates, or technical issues.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
                <p>
                  StuBud AI shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use of the service, including but not limited to 
                  academic outcomes, loss of data, or service interruptions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of the service 
                  after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Termination</h2>
                <p>
                  We may terminate or suspend access to our service immediately, without prior notice, 
                  for any reason, including breach of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
                <p>
                  If you have any questions about these Terms & Conditions, please contact us at:
                </p>
                <ul className="list-none mt-4 space-y-1">
                  <li>Email: legal@stubudai.com</li>
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

export default Terms;
