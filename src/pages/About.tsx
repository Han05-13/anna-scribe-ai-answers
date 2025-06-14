
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              About StuBud AI
            </h1>
            <p className="text-xl text-gray-600">
              Empowering Anna University students with AI-driven academic excellence
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                StuBud AI is dedicated to revolutionizing the way Anna University students prepare for their examinations. 
                We leverage cutting-edge artificial intelligence technology, specifically Google's Gemini 2.0 Flash model, 
                to generate comprehensive, accurate, and well-structured answers for various question formats.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform is designed to help students understand complex concepts, improve their writing skills, 
                and achieve academic success by providing them with high-quality reference answers that follow 
                Anna University's examination patterns and standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold">For Students</h3>
                </div>
                <p className="text-gray-600">
                  We understand the challenges faced by Anna University students in preparing comprehensive answers 
                  within time constraints. Our AI-powered solution provides instant, well-structured responses 
                  that serve as excellent study references.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-semibold">AI Technology</h3>
                </div>
                <p className="text-gray-600">
                  Powered by Google's advanced Gemini 2.0 Flash model, our platform ensures accurate, 
                  contextually relevant answers that align with academic standards and examination requirements 
                  specific to Anna University curriculum.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="h-7 w-7 text-blue-600 mr-3" />
                What We Offer
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">2-Mark Questions</h3>
                  <p className="text-gray-600">
                    Concise, precise answers perfect for short-answer questions with key concepts clearly highlighted.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">13-Mark Questions</h3>
                  <p className="text-gray-600">
                    Detailed explanations with examples, structured formatting, and comprehensive coverage of topics.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">15-Mark Questions</h3>
                  <p className="text-gray-600">
                    In-depth analysis with multiple approaches, real-world applications, and examination strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to maintaining the highest standards of academic integrity while providing valuable 
                learning resources. Our generated answers are intended to serve as study guides and reference material 
                to help students better understand concepts and improve their own answer-writing skills.
              </p>
              <p className="text-gray-600 leading-relaxed">
                StuBud AI continuously evolves to meet the changing needs of Anna University students, incorporating 
                feedback and updates to ensure our platform remains relevant, accurate, and beneficial for academic success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
