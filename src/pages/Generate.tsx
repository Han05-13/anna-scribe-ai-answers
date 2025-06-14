import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Send, Copy, RefreshCw, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Generate = () => {
  const [question, setQuestion] = useState("");
  const [markType, setMarkType] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);

  // Use the provided API key directly
  const apiKey = "AIzaSyDkbEjn21-DvyI795K4fR1N5irLt1Is2H0";

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
      
      setAnswer(generatedAnswer);
      
      // Start cooldown timer
      setCooldownSeconds(10);
      const timer = setInterval(() => {
        setCooldownSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
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
    const basePrompt = `You are an expert assistant for Anna University students. Generate a comprehensive answer for the following question in the ${markType} format:

Question: ${question}

`;

    switch (markType) {
      case "2-mark":
        return basePrompt + `
Please provide a concise answer suitable for a 2-mark question:
- Maximum 2-3 sentences
- Direct and to the point
- Include key terms and definitions
- Format as a brief explanation

Answer:`;

      case "13-mark":
        return basePrompt + `
Please provide a detailed answer suitable for a 13-mark question:
- Include introduction, main content, and conclusion
- Use proper headings and subheadings
- Include examples where relevant
- Explain concepts step by step
- Add diagrams suggestions if applicable
- Maintain Anna University exam standards

Answer:`;

      case "15-mark":
        return basePrompt + `
Please provide a comprehensive answer suitable for a 15-mark question:
- Detailed introduction with context
- Multiple sections with clear headings
- In-depth explanations with examples
- Include advantages, disadvantages, applications
- Add mathematical formulations if relevant
- Suggest diagrams and flowcharts where needed
- Include case studies or real-world examples
- Proper conclusion summarizing key points
- Follow Anna University exam pattern and standards

Answer:`;

      default:
        return basePrompt + "Please provide an appropriate answer for this question.";
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

  // Function to format text with bold markers
  const formatText = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold text-gray-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Answer Generator
            </h1>
            <p className="text-lg text-gray-600">
              Generate perfect answers for Anna University questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Question Input</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question Type
                    </label>
                    <Select value={markType} onValueChange={setMarkType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select question type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2-mark">2 Marks</SelectItem>
                        <SelectItem value="13-mark">13 Marks</SelectItem>
                        <SelectItem value="15-mark">15 Marks</SelectItem>
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
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      onClick={generateAnswer}
                      disabled={isLoading || cooldownSeconds > 0}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : cooldownSeconds > 0 ? (
                        <>
                          <Clock className="mr-2 h-4 w-4" />
                          Wait {cooldownSeconds}s
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Generate Answer
                        </>
                      )}
                    </Button>
                    
                    <Button variant="outline" onClick={clearAll}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Clear
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Answer Section */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Generated Answer</h2>
                  {answer && (
                    <Button variant="outline" size="sm" onClick={copyToClipboard}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                  )}
                </div>
                
                <div className="min-h-[400px] p-4 bg-gray-50 rounded-lg border">
                  {answer ? (
                    <div className="prose prose-sm max-w-none">
                      <div className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed text-justify">
                        {formatText(answer)}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <Send className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Your generated answer will appear here</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
