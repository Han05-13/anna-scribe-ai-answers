
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Lightbulb, GraduationCap, Star, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <CookieConsent />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Star className="h-4 w-4 mr-2" />
            Powered by Gemini 2.0 Flash AI
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8 leading-tight animate-fade-in">
            StuBud AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto animate-fade-in">
            Generate Perfect Answers for Anna University Questions
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in">
            Get structured, comprehensive answers for 2-mark, 13-mark, and 15-mark questions 
            tailored specifically for Anna University exam patterns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link to="/generate">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Generating Answers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose StuBud AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed specifically for Anna University students with AI-powered precision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">2-Mark Questions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Concise, precise answers perfect for short-answer questions with key points highlighted.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-purple-50 to-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">13-Mark Questions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed explanations with examples, diagrams suggestions, and structured formatting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-indigo-50 to-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">15-Mark Questions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive answers with in-depth analysis, multiple approaches, and exam strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">10K+</span>
              </div>
              <p className="text-xl opacity-90">Students Helped</p>
            </div>
            
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">50K+</span>
              </div>
              <p className="text-xl opacity-90">Answers Generated</p>
            </div>
            
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">95%</span>
              </div>
              <p className="text-xl opacity-90">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Ace Your Anna University Exams?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using StuBud AI to generate 
            perfect answers and improve their exam performance.
          </p>
          
          <Link to="/generate">
            <Button size="lg" className="px-12 py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
