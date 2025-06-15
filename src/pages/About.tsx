
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Target, Users, Lightbulb, Award, BookOpen, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            About StuBud AI
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Empowering Anna University students with AI-driven academic excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              StuBud AI is dedicated to revolutionizing the way Anna University students prepare for their examinations. 
              We leverage cutting-edge artificial intelligence technology, specifically Google's Gemini 2.0 Flash model, 
              to generate comprehensive, accurate, and well-structured answers for various question formats.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our platform is designed to help students understand complex concepts, improve their writing skills, 
              and achieve academic success by providing them with high-quality reference answers that follow 
              Anna University's examination patterns and standards.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Students Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-semibold">For Students</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                We understand the challenges faced by Anna University students in preparing comprehensive answers 
                within time constraints. Our AI-powered solution provides instant, well-structured responses 
                that serve as excellent study references.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-semibold">AI Technology</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Powered by Google's advanced Gemini 2.0 Flash model, our platform ensures accurate, 
                contextually relevant answers that align with academic standards and examination requirements 
                specific to Anna University curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-8 flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              What We Offer
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  2-Mark Questions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Concise, precise answers perfect for short-answer questions with key concepts clearly highlighted.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  13-Mark Questions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed explanations with examples, structured formatting, and comprehensive coverage of topics.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  15-Mark Questions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In-depth analysis with multiple approaches, real-world applications, and examination strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-3xl font-semibold mb-6">Our Commitment</h2>
            <p className="text-xl leading-relaxed mb-6 opacity-90">
              We are committed to maintaining the highest standards of academic integrity while providing valuable 
              learning resources. Our generated answers are intended to serve as study guides and reference material 
              to help students better understand concepts and improve their own answer-writing skills.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              StuBud AI continuously evolves to meet the changing needs of Anna University students, incorporating 
              feedback and updates to ensure our platform remains relevant, accurate, and beneficial for academic success.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
