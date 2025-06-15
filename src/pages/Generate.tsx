
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Send, Copy, RefreshCw, Clock, Key, Target } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";

// Rate limiting configuration
const RATE_LIMITS = {
  REQUESTS_PER_MINUTE: 28,
  TOKENS_PER_MINUTE: 80000, // Updated to 80,000
  REQUESTS_PER_DAY: 1400,
  COOLDOWN_SECONDS: 15
};

interface RateLimitState {
  requestsThisMinute: number;
  tokensThisMinute: number;
  requestsToday: number;
  lastMinuteReset: number;
  lastDayReset: number;
  cooldownUntil: number;
}

const Generate = () => {
  const [question, setQuestion] = useState("");
  const [markType, setMarkType] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);

  // Rate limiting state
  const [rateLimitState, setRateLimitState] = useState<RateLimitState>(() => {
    const stored = localStorage.getItem('apiRateLimit');
    const now = Date.now();
    
    if (stored) {
      const parsed = JSON.parse(stored);
      // Reset counters if time periods have passed
      const minutesPassed = Math.floor((now - parsed.lastMinuteReset) / 60000);
      const daysPassed = Math.floor((now - parsed.lastDayReset) / 86400000);
      
      return {
        requestsThisMinute: minutesPassed > 0 ? 0 : parsed.requestsThisMinute,
        tokensThisMinute: minutesPassed > 0 ? 0 : parsed.tokensThisMinute,
        requestsToday: daysPassed > 0 ? 0 : parsed.requestsToday,
        lastMinuteReset: minutesPassed > 0 ? now : parsed.lastMinuteReset,
        lastDayReset: daysPassed > 0 ? now : parsed.lastDayReset,
        cooldownUntil: parsed.cooldownUntil || 0
      };
    }
    
    return {
      requestsThisMinute: 0,
      tokensThisMinute: 0,
      requestsToday: 0,
      lastMinuteReset: now,
      lastDayReset: now,
      cooldownUntil: 0
    };
  });

  // Use the provided API key directly
  const apiKey = "AIzaSyDkbEjn21-DvyI795K4fR1N5irLt1Is2H0";

  // Update localStorage whenever rate limit state changes
  useEffect(() => {
    localStorage.setItem('apiRateLimit', JSON.stringify(rateLimitState));
  }, [rateLimitState]);

  // Handle cooldown timer
  useEffect(() => {
    if (cooldownSeconds > 0) {
      const timer = setInterval(() => {
        setCooldownSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldownSeconds]);

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    
    // Check if still in cooldown
    if (now < rateLimitState.cooldownUntil) {
      const remainingCooldown = Math.ceil((rateLimitState.cooldownUntil - now) / 1000);
      setCooldownSeconds(remainingCooldown);
      toast({
        title: "Rate Limited",
        description: `Please wait ${remainingCooldown} seconds before making another request`,
        variant: "destructive",
      });
      return false;
    }

    // Reset counters if time periods have passed
    const minutesPassed = Math.floor((now - rateLimitState.lastMinuteReset) / 60000);
    const daysPassed = Math.floor((now - rateLimitState.lastDayReset) / 86400000);
    
    let newState = { ...rateLimitState };
    
    if (minutesPassed > 0) {
      newState.requestsThisMinute = 0;
      newState.tokensThisMinute = 0;
      newState.lastMinuteReset = now;
    }
    
    if (daysPassed > 0) {
      newState.requestsToday = 0;
      newState.lastDayReset = now;
    }

    // Check limits
    if (newState.requestsThisMinute >= RATE_LIMITS.REQUESTS_PER_MINUTE) {
      newState.cooldownUntil = now + (RATE_LIMITS.COOLDOWN_SECONDS * 1000);
      setRateLimitState(newState);
      setCooldownSeconds(RATE_LIMITS.COOLDOWN_SECONDS);
      toast({
        title: "Rate Limited",
        description: `Exceeded ${RATE_LIMITS.REQUESTS_PER_MINUTE} requests per minute. Please wait ${RATE_LIMITS.COOLDOWN_SECONDS} seconds.`,
        variant: "destructive",
      });
      return false;
    }

    if (newState.tokensThisMinute >= RATE_LIMITS.TOKENS_PER_MINUTE) {
      newState.cooldownUntil = now + (RATE_LIMITS.COOLDOWN_SECONDS * 1000);
      setRateLimitState(newState);
      setCooldownSeconds(RATE_LIMITS.COOLDOWN_SECONDS);
      toast({
        title: "Rate Limited",
        description: `Exceeded ${RATE_LIMITS.TOKENS_PER_MINUTE} tokens per minute. Please wait ${RATE_LIMITS.COOLDOWN_SECONDS} seconds.`,
        variant: "destructive",
      });
      return false;
    }

    if (newState.requestsToday >= RATE_LIMITS.REQUESTS_PER_DAY) {
      newState.cooldownUntil = now + (RATE_LIMITS.COOLDOWN_SECONDS * 1000);
      setRateLimitState(newState);
      setCooldownSeconds(RATE_LIMITS.COOLDOWN_SECONDS);
      toast({
        title: "Daily Limit Reached",
        description: `Exceeded ${RATE_LIMITS.REQUESTS_PER_DAY} requests per day. Please wait ${RATE_LIMITS.COOLDOWN_SECONDS} seconds.`,
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const updateRateLimit = (tokensUsed: number) => {
    setRateLimitState(prev => ({
      ...prev,
      requestsThisMinute: prev.requestsThisMinute + 1,
      tokensThisMinute: prev.tokensThisMinute + tokensUsed,
      requestsToday: prev.requestsToday + 1
    }));
  };

  const generateAnswer = async () => {
    if (!question.trim()) {
      toast({
        title: "Error",
        description: "Please enter a question",
        variant: "destructive",
      });
      return;
    }

    if (!markType) {
      toast({
        title: "Error", 
        description: "Please select the mark type",
        variant: "destructive",
      });
      return;
    }

    if (cooldownSeconds > 0) {
      toast({
        title: "Please wait",
        description: `Please wait ${cooldownSeconds} seconds before generating another answer`,
        variant: "destructive",
      });
      return;
    }

    // Check rate limits before making request
    if (!checkRateLimit()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const prompt = generatePrompt(question, markType);
      
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=' + apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate answer');
      }

      const data = await response.json();
      const generatedAnswer = data.candidates[0].content.parts[0].text;
      
      // Update rate limiting with actual tokens used
      const tokensUsed = data.usageMetadata?.totalTokenCount || 1000; // Fallback estimate
      updateRateLimit(tokensUsed);
      
      setAnswer(generatedAnswer);
      
      toast({
        title: "Success",
        description: "Answer generated successfully!",
      });
    } catch (error) {
      console.error('Error generating answer:', error);
      toast({
        title: "Error",
        description: "Failed to generate answer. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generatePrompt = (question: string, markType: string) => {
    const basePrompt = `You are an expert assistant for Anna University students. Generate a comprehensive, well-structured answer with key insights and essential points for the following question in the ${markType} format:

Question: ${question}

`;

    switch (markType) {
      case "2-mark":
        return basePrompt + `
Please provide a concise answer suitable for a 2-mark question with these requirements:
- **Key Insights**: Focus on the most critical 1-2 concepts
- **Essential Points**: Maximum 2-3 sentences with precise definitions
- **Format**: Direct, to-the-point explanation
- **Content**: Include key terms, definitions, and core concepts
- **Structure**: Brief but complete answer that covers the question fully

Ensure the answer contains the most important information a student needs to score full marks.

Answer:`;

      case "13-mark":
        return basePrompt + `
Please provide a detailed answer suitable for a 13-mark question with these requirements:
- **Key Insights**: Identify and explain 4-5 major concepts or points
- **Essential Points**: Include introduction, main content with subheadings, and conclusion
- **Structure**: Use proper headings, bullet points, and clear organization
- **Content**: Step-by-step explanations, relevant examples, and practical applications
- **Critical Elements**: Include advantages, disadvantages, and real-world relevance
- **Visual Aids**: Suggest diagrams or flowcharts where applicable
- **Anna University Standards**: Follow exam pattern and marking scheme

Focus on providing comprehensive coverage while highlighting the most important aspects that examiners look for.

Answer:`;

      case "15-mark":
        return basePrompt + `
Please provide a comprehensive answer suitable for a 15-mark question with these requirements:
- **Key Insights**: Develop 6-8 major concepts with deep analysis
- **Essential Points**: Detailed introduction, multiple well-structured sections, comprehensive conclusion
- **Structure**: Clear headings, subheadings, numbered points, and logical flow
- **Content**: In-depth explanations, multiple examples, case studies, and comparative analysis
- **Critical Analysis**: Include advantages, disadvantages, applications, limitations, and future scope
- **Technical Details**: Mathematical formulations, algorithms, or technical specifications where relevant
- **Visual Elements**: Suggest multiple diagrams, flowcharts, tables, or graphs
- **Real-world Application**: Include industry examples, current trends, and practical implementations
- **Conclusion**: Summarize key takeaways and important points for easy revision

Provide university-level depth while ensuring all critical points are covered for maximum marks.

Answer:`;

      default:
        return basePrompt + "Please provide an appropriate answer with key insights and essential points for this question.";
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(answer);
    toast({
      title: "Copied",
      description: "Answer copied to clipboard!",
    });
  };

  const clearAll = () => {
    setQuestion("");
    setAnswer("");
    setMarkType("");
  };

  // Function to format text with bold markers and highlight key answers
  const formatText = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const content = part.slice(2, -2);
        // Check if this is a key answer or important point
        const isKeyAnswer = content.toLowerCase().includes('key') || 
                           content.toLowerCase().includes('important') ||
                           content.toLowerCase().includes('essential') ||
                           content.toLowerCase().includes('critical');
        
        return (
          <strong 
            key={index} 
            className={`font-semibold ${isKeyAnswer ? 'text-blue-700 bg-blue-50 px-1 rounded' : 'text-gray-900'}`}
          >
            {isKeyAnswer && <Key className="inline w-3 h-3 mr-1" />}
            {content}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            AI Answer Generator
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 max-w-3xl mx-auto">
            Generate perfect, well-structured answers for Anna University questions with AI-powered insights
          </p>
          
          {/* Enhanced Rate limit status */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-500">
            <div className="bg-white px-3 py-1 rounded-full shadow-sm">
              <Target className="inline w-4 h-4 mr-1" />
              Daily: {rateLimitState.requestsToday}/{RATE_LIMITS.REQUESTS_PER_DAY}
            </div>
            <div className="bg-white px-3 py-1 rounded-full shadow-sm">
              Per minute: {rateLimitState.requestsThisMinute}/{RATE_LIMITS.REQUESTS_PER_MINUTE}
            </div>
            <div className="bg-white px-3 py-1 rounded-full shadow-sm">
              Tokens today: {rateLimitState.tokensThisMinute.toLocaleString()}/80,000
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Input Section */}
            <div className="order-2 lg:order-1">
              <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Send className="h-6 w-6 text-blue-600 mr-2" />
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Question Input</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Question Type
                      </label>
                      <Select value={markType} onValueChange={setMarkType}>
                        <SelectTrigger className="w-full h-12">
                          <SelectValue placeholder="Select question type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-mark">2 Marks - Quick Answer</SelectItem>
                          <SelectItem value="13-mark">13 Marks - Detailed</SelectItem>
                          <SelectItem value="15-mark">15 Marks - Comprehensive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Question
                      </label>
                      <Textarea
                        placeholder="Enter your Anna University question here..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="min-h-[120px] sm:min-h-[140px] w-full text-base"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <Button 
                        onClick={generateAnswer}
                        disabled={isLoading || cooldownSeconds > 0}
                        className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-base"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Generating...
                          </>
                        ) : cooldownSeconds > 0 ? (
                          <>
                            <Clock className="mr-2 h-5 w-5" />
                            Wait {cooldownSeconds}s
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Generate Answer
                          </>
                        )}
                      </Button>
                      
                      <Button variant="outline" onClick={clearAll} className="sm:w-auto h-12">
                        <RefreshCw className="mr-2 h-5 w-5" />
                        Clear
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Answer Section */}
            <div className="order-1 lg:order-2">
              <Card className="p-4 sm:p-6 shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                    <div className="flex items-center">
                      <Target className="h-6 w-6 text-green-600 mr-2" />
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Generated Answer</h2>
                    </div>
                    {answer && (
                      <Button variant="outline" size="sm" onClick={copyToClipboard} className="self-start sm:self-auto">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                    )}
                  </div>
                  
                  <div className="h-[350px] sm:h-[450px] p-4 sm:p-6 bg-gray-50 rounded-lg border">
                    {answer ? (
                      <ScrollArea className="h-full w-full">
                        <div className="prose prose-sm max-w-none pr-4">
                          <div className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
                            {formatText(answer)}
                          </div>
                        </div>
                      </ScrollArea>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        <div className="text-center px-4">
                          <Target className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 opacity-50" />
                          <p className="text-sm sm:text-base font-medium mb-2">Your AI-generated answer will appear here</p>
                          <p className="text-xs sm:text-sm">Complete with key insights and important points highlighted</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Our AI Generator?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Key className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Key Insights</h3>
              <p className="text-gray-600 text-sm">Automatically highlights important concepts and key answers for better understanding</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Target className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Structured Format</h3>
              <p className="text-gray-600 text-sm">Follows Anna University exam patterns with proper formatting and organization</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Send className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm">Generate comprehensive answers in seconds with AI-powered technology</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Generate;
