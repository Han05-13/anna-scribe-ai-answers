
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:hariharan05@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened",
      description: "Your email client should open with the pre-filled message. Please send the email from there.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Have questions? We're here to help you succeed
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3" />
                    <h3 className="text-base sm:text-lg font-semibold">Email Support</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">Get help with technical issues</p>
                  <a href="mailto:support@stubudai.com" className="text-sm sm:text-base text-blue-600 hover:underline break-all">
                    support@stubudai.com
                  </a>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mr-3" />
                    <h3 className="text-base sm:text-lg font-semibold">General Inquiries</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">Questions about our service</p>
                  <a href="mailto:info@stubudai.com" className="text-sm sm:text-base text-purple-600 hover:underline break-all">
                    info@stubudai.com
                  </a>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 mr-3" />
                    <h3 className="text-base sm:text-lg font-semibold">Response Time</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    We typically respond within 24 hours during business days
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-4 sm:p-6 lg:p-8 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        className="min-h-[100px] sm:min-h-[120px] w-full"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-blue-600">
                    How do I get a Gemini API key?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Visit Google AI Studio, create an account, and generate your free API key. 
                    Follow the setup instructions provided on their platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-purple-600">
                    Is the service free to use?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    StuBud AI is free to use. You only need your own Gemini API key, 
                    which comes with free usage credits from Google.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-indigo-600">
                    How accurate are the generated answers?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Our AI generates highly accurate answers based on Anna University patterns, 
                    but we recommend using them as study references and verifying with official materials.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-green-600">
                    Can I use this for all subjects?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Yes! StuBud AI can generate answers for any Anna University subject. 
                    The AI adapts to different domains and maintains academic standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
