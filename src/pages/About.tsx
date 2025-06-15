
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Target, Users, Lightbulb, Award, BookOpen, Zap } from "lucide-react";

const About = () => {
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
      
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            About StuBud AI
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed px-2">
            Empowering Anna University students with AI-driven academic excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg mb-6 md:mb-8">
            <div className="flex items-center mb-4 md:mb-6">
              <Target className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mr-2 md:mr-3" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
              StuBud AI is dedicated to revolutionizing the way Anna University students prepare for their examinations. 
              We leverage cutting-edge artificial intelligence technology, specifically Google's Gemini 2.0 Flash model, 
              to generate comprehensive, accurate, and well-structured answers for various question formats.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              Our platform is designed to help students understand complex concepts, improve their writing skills, 
              and achieve academic success by providing them with high-quality reference answers that follow 
              Anna University's examination patterns and standards.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Ad Section - Middle */}
      <div className="block md:hidden bg-white border-y border-gray-200 py-3 px-4 mb-6">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Advertisement</p>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <p className="text-sm font-medium text-gray-700">Mobile Ad Space</p>
            <p className="text-xs text-gray-500">320x250 Medium Rectangle</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Why Students Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-4 md:mb-6">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mr-2 md:mr-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">For Students</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                We understand the challenges faced by Anna University students in preparing comprehensive answers 
                within time constraints. Our AI-powered solution provides instant, well-structured responses 
                that serve as excellent study references.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-4 md:mb-6">
                <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-violet-600 mr-2 md:mr-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">AI Technology</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                Powered by Google's advanced Gemini 2.0 Flash model, our platform ensures accurate, 
                contextually relevant answers that align with academic standards and examination requirements 
                specific to Anna University curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mr-2 md:mr-3" />
              What We Offer
            </h2>
            <div className="space-y-6 md:space-y-8">
              <div className="border-l-4 border-purple-500 pl-4 md:pl-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-purple-600 mb-2 md:mb-3 flex items-center">
                  <Award className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                  2-Mark Questions
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Concise, precise answers perfect for short-answer questions with key concepts clearly highlighted.
                </p>
              </div>
              <div className="border-l-4 border-violet-500 pl-4 md:pl-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-violet-600 mb-2 md:mb-3 flex items-center">
                  <BookOpen className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                  13-Mark Questions
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Detailed explanations with examples, structured formatting, and comprehensive coverage of topics.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4 md:pl-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-indigo-600 mb-2 md:mb-3 flex items-center">
                  <Zap className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                  15-Mark Questions (1500 tokens)
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  In-depth analysis with multiple approaches, real-world applications, and examination strategies with extended output.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Ad Section - Before Commitment */}
      <div className="block md:hidden bg-gray-50 border-y border-gray-200 py-3 px-4 mb-6">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Advertisement</p>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-700">Mobile Ad Space</p>
            <p className="text-xs text-gray-500">320x100 Banner</p>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <section className="py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Our Commitment</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6 opacity-90">
              We are committed to maintaining the highest standards of academic integrity while providing valuable 
              learning resources. Our generated answers are intended to serve as study guides and reference material 
              to help students better understand concepts and improve their own answer-writing skills.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
              StuBud AI continuously evolves to meet the changing needs of Anna University students, incorporating 
              feedback and updates to ensure our platform remains relevant, accurate, and beneficial for academic success.
            </p>
          </div>
        </div>
      </section>

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

export default About;
