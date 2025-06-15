import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <Header />
      
      {/* Mobile Ad Section - Top */}
      <div className="block md:hidden bg-gray-100 border-y border-gray-200 py-2 px-4">
        <div className="bg-white rounded-lg p-3 text-center shadow-sm">
          <p className="text-xs text-gray-500 mb-1">Advertisement</p>
          <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-4 rounded">
            <p className="text-sm font-medium text-gray-700">Mobile Ad Space</p>
            <p className="text-xs text-gray-500">320x100 Banner</p>
          </div>
        </div>
      </div>
      
      <div className="pt-16 md:pt-24 pb-8 md:pb-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-6 md:mb-8">
              Disclaimer
            </h1>
            
            {/* Mobile Ad Section - Middle */}
            <div className="block md:hidden bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 mb-6">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Advertisement</p>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Mobile Ad Space</p>
                  <p className="text-xs text-gray-500">320x250 Medium Rectangle</p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xs sm:text-sm text-gray-500 mb-6 md:mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Educational Purpose Only</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  StuBud AI is designed exclusively for educational purposes to assist Anna University students 
                  in understanding concepts and improving their answer-writing skills. The generated content should 
                  be used as study material and reference only, not as final submissions for examinations or assignments.
                </p>
              </section>

              {/* Mobile Ad Section - Between sections */}
              <div className="block md:hidden bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 mb-6 text-center">
                <p className="text-xs text-gray-500 mb-2">Advertisement</p>
                <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Mobile Ad Space</p>
                  <p className="text-xs text-gray-500">320x100 Banner</p>
                </div>
              </div>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">No Guarantee of Accuracy</h2>
                <p className="mb-3 md:mb-4 text-sm sm:text-base leading-relaxed">
                  While StuBud AI strives to provide accurate and relevant information:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm sm:text-base">
                  <li>We do not guarantee the accuracy, completeness, or reliability of generated answers</li>
                  <li>AI-generated content may contain errors, omissions, or outdated information</li>
                  <li>Users should verify all information with official academic sources</li>
                  <li>The service is based on AI technology which may have limitations</li>
                </ul>
              </section>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Academic Responsibility</h2>
                <p className="mb-3 md:mb-4 text-sm sm:text-base leading-relaxed">
                  Students using StuBud AI are responsible for:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm sm:text-base">
                  <li>Understanding their institution's academic integrity policies</li>
                  <li>Using generated content ethically and responsibly</li>
                  <li>Developing their own knowledge and understanding</li>
                  <li>Consulting with professors and academic advisors when needed</li>
                  <li>Ensuring compliance with examination and assignment guidelines</li>
                </ul>
              </section>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Not a Substitute for Learning</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3 md:mb-4">
                  StuBud AI is a learning aid and cannot replace:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm sm:text-base">
                  <li>Proper study and understanding of course materials</li>
                  <li>Attendance in classes and tutorials</li>
                  <li>Consultation with instructors and peers</li>
                  <li>Critical thinking and analysis skills</li>
                  <li>Official textbooks and academic resources</li>
                </ul>
              </section>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Third-Party Services</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3 md:mb-4">
                  StuBud AI uses Google's Gemini API for generating content. We are not responsible for:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm sm:text-base">
                  <li>The availability or performance of third-party services</li>
                  <li>Changes to third-party terms of service or pricing</li>
                  <li>Content generated by third-party AI systems</li>
                  <li>API key management and associated costs</li>
                </ul>
              </section>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">No Professional Advice</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3 md:mb-4">
                  The information provided by StuBud AI does not constitute:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm sm:text-base">
                  <li>Professional academic advice</li>
                  <li>Official university guidance</li>
                  <li>Career counseling or educational planning</li>
                  <li>Technical or professional consultation</li>
                </ul>
              </section>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Service Limitations</h2>
                <p className="mb-3 md:mb-4 text-sm sm:text-base leading-relaxed">
                  Users should be aware that:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm sm:text-base">
                  <li>The service may experience downtime or technical issues</li>
                  <li>Generated content quality may vary</li>
                  <li>Service features may change without notice</li>
                  <li>User data and generated content are not backed up or guaranteed</li>
                </ul>
              </section>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Liability Limitation</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3 md:mb-4">
                  StuBud AI and its creators are not liable for:
                </p>
                <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm sm:text-base">
                  <li>Academic outcomes or performance</li>
                  <li>Decisions made based on generated content</li>
                  <li>Consequences of academic integrity violations</li>
                  <li>Loss of data or service interruptions</li>
                  <li>Any direct, indirect, or consequential damages</li>
                </ul>
              </section>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Anna University Affiliation</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  StuBud AI is an independent educational tool and is not officially affiliated with, 
                  endorsed by, or connected to Anna University. All references to Anna University 
                  are for descriptive purposes only.
                </p>
              </section>

              <section className="mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Content Sources</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  Generated answers are based on AI training data and general knowledge. They may not 
                  reflect the most current curriculum changes, specific professor preferences, or 
                  recent updates to Anna University syllabi.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Contact for Clarifications</h2>
                <p className="text-sm sm:text-base leading-relaxed mb-3 md:mb-4">
                  If you have questions about this disclaimer or need clarification about the appropriate 
                  use of StuBud AI, please contact us at:
                </p>
                <ul className="list-none mt-3 md:mt-4 space-y-1 text-sm sm:text-base">
                  <li>Email: support@stubudai.com</li>
                  <li>Subject: Disclaimer Inquiry</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Ad Section - Bottom */}
      <div className="block md:hidden bg-gray-100 border-t border-gray-200 py-3 px-4">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Advertisement</p>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-700">Mobile Ad Space</p>
            <p className="text-xs text-gray-500">320x100 Banner</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;
