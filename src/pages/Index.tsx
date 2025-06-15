
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Lightbulb, GraduationCap, Star, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <Header />
      <CookieConsent />
      
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
      <section className="pt-16 md:pt-32 pb-12 md:pb-20 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-6 md:mb-8 leading-tight animate-fade-in">
            StuBud AI
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-3 md:mb-4 max-w-3xl mx-auto animate-fade-in">
            Generate Perfect Answers for Anna University Questions
          </p>
          
          <p className="text-base sm:text-lg text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto animate-fade-in px-2">
            Get structured, comprehensive answers for 2-mark, 13-mark, and 15-mark questions 
            tailored specifically for Anna University exam patterns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in px-4">
            <Link to="/generate">
              <Button size="lg" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Generating Answers
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 transform hover:scale-105 transition-all duration-200">
                <BookOpen className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Learn More
              </Button>
            </Link>
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
      <section className="py-12 md:py-20 px-3 sm:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose StuBud AI?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Designed specifically for Anna University students with AI-powered precision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-purple-50 to-white">
              <CardContent className="p-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">2-Mark Questions</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Concise, precise answers perfect for short-answer questions with key points highlighted.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-violet-50 to-white">
              <CardContent className="p-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-violet-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">13-Mark Questions</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Detailed explanations with examples, diagrams suggestions, and structured formatting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-indigo-50 to-white">
              <CardContent className="p-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">15-Mark Questions</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Comprehensive answers with in-depth analysis, multiple approaches, and exam strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile Ad Section - Before Stats */}
      <div className="block md:hidden bg-gray-50 border-y border-gray-200 py-3 px-4">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Advertisement</p>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-700">Mobile Ad Space</p>
            <p className="text-xs text-gray-500">320x100 Banner</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-3 sm:px-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Users className="h-6 w-6 md:h-8 md:w-8 mr-2" />
                <span className="text-3xl md:text-4xl font-bold">10K+</span>
              </div>
              <p className="text-lg md:text-xl opacity-90">Students Helped</p>
            </div>
            
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 mr-2" />
                <span className="text-3xl md:text-4xl font-bold">50K+</span>
              </div>
              <p className="text-lg md:text-xl opacity-90">Answers Generated</p>
            </div>
            
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Trophy className="h-6 w-6 md:h-8 md:w-8 mr-2" />
                <span className="text-3xl md:text-4xl font-bold">95%</span>
              </div>
              <p className="text-lg md:text-xl opacity-90">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Ad Section - Before CTA */}
      <div className="block md:hidden bg-white border-y border-gray-200 py-3 px-4">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Advertisement</p>
          <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-700">Mobile Ad Space</p>
            <p className="text-xs text-gray-500">320x100 Banner</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-3 sm:px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
            Ready to Ace Your Anna University Exams?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Join thousands of students who are already using StuBud AI to generate 
            perfect answers and improve their exam performance.
          </p>
          
          <Link to="/generate">
            <Button size="lg" className="px-8 md:px-12 py-3 md:py-4 text-base md:text-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
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

export default Index;
