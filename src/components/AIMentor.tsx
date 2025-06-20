
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, Lightbulb, Book, Code, HelpCircle, Sparkles } from "lucide-react";

const AIMentor = () => {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "👋 Hello! I'm your AI Learning Mentor. I'm here to guide you through your AI journey, answer questions, and provide personalized learning recommendations. What would you like to learn about today?",
      timestamp: "Just now"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickQuestions = [
    "What is machine learning?",
    "How do neural networks work?",
    "What's the difference between AI and ML?",
    "How do I start with deep learning?",
    "What are the best AI programming languages?",
    "Explain gradient descent simply"
  ];

  const mentorFeatures = [
    {
      icon: Lightbulb,
      title: "Concept Explanation",
      description: "Get clear explanations of complex AI concepts"
    },
    {
      icon: Code,
      title: "Code Review",
      description: "Share your code for feedback and improvements"
    },
    {
      icon: Book,
      title: "Learning Path",
      description: "Personalized recommendations for your skill level"
    },
    {
      icon: HelpCircle,
      title: "Problem Solving",
      description: "Get help debugging and solving AI challenges"
    }
  ];

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: "user",
      content: inputMessage,
      timestamp: "Just now"
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = getAIResponse(inputMessage);
      setMessages(prev => [...prev, {
        type: "ai",
        content: aiResponse,
        timestamp: "Just now"
      }]);
    }, 1000);

    setInputMessage("");
  };

  const getAIResponse = (question: string) => {
    const responses = {
      "machine learning": "Machine Learning is a subset of AI that enables computers to learn and improve from data without being explicitly programmed. Think of it like teaching a computer to recognize patterns - just like how you learned to recognize faces or handwriting! 🧠\n\nThere are three main types:\n• **Supervised Learning**: Learning with labeled examples (like showing a child pictures labeled 'cat' or 'dog')\n• **Unsupervised Learning**: Finding hidden patterns in data without labels\n• **Reinforcement Learning**: Learning through trial and error with rewards\n\nWould you like me to explain any of these types in more detail?",
      
      "neural networks": "Neural networks are inspired by how our brain works! 🧠✨\n\nImagine a network of interconnected neurons (brain cells) that pass signals to each other. In artificial neural networks:\n\n• **Neurons** = Simple processing units that receive inputs and produce outputs\n• **Weights** = The strength of connections between neurons\n• **Layers** = Groups of neurons working together\n\n**How they learn:**\n1. Data flows through the network (forward pass)\n2. The network makes a prediction\n3. We compare it to the correct answer\n4. We adjust the weights to improve (backpropagation)\n\nIt's like learning to play guitar - you start making mistakes, but with practice, your muscle memory (weights) improves!\n\nWant to try building a simple neural network in our code playground?",
      
      "ai vs ml": "Great question! Let me break this down simply:\n\n🤖 **Artificial Intelligence (AI)**\n- The broader goal of making machines smart\n- Like wanting to create a robot that can think and act like humans\n- Includes everything from game-playing AI to voice assistants\n\n🧠 **Machine Learning (ML)**\n- A specific approach to achieve AI\n- Teaching machines to learn from data\n- Like training a computer to recognize your voice\n\n**Think of it like this:**\n- AI is like wanting to create a 'smart car'\n- ML is the method where the car learns from millions of driving examples\n\n**The relationship:**\nAI ⊃ ML ⊃ Deep Learning ⊃ Neural Networks\n\nAI is the goal, ML is the method, and neural networks are one of the tools!\n\nDoes this help clarify the difference?",
      
      "default": "That's a great question! 🤔 I'd love to help you explore that topic further. \n\nHere are some ways I can assist:\n• Break down complex concepts into simple terms\n• Provide code examples and explanations\n• Suggest learning resources and next steps\n• Help with specific problems you're facing\n\nCould you tell me more about what specific aspect you'd like to understand better? The more details you share, the better I can tailor my explanation to your learning style! 🚀"
    };

    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("machine learning") || lowerQuestion.includes("what is ml")) {
      return responses["machine learning"];
    } else if (lowerQuestion.includes("neural network")) {
      return responses["neural networks"];
    } else if (lowerQuestion.includes("ai") && lowerQuestion.includes("ml")) {
      return responses["ai vs ml"];
    } else {
      return responses["default"];
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">AI Learning Mentor</h2>
        <p className="text-white/70">Your personal AI guide for mastering artificial intelligence</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Mentor Features */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                Mentor Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mentorFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                    <p className="text-xs text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">Quick Questions</CardTitle>
              <CardDescription className="text-white/70">
                Try these common AI questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left h-auto p-3 text-white/80 hover:text-white hover:bg-white/10"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bot className="w-5 h-5 mr-2 text-blue-400" />
                Chat with Your AI Mentor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Chat Messages */}
              <ScrollArea className="h-[400px] w-full p-4 bg-gray-900/50 rounded-lg">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-4 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-white/10 text-white border border-white/20'
                      }`}>
                        {message.type === 'ai' && (
                          <div className="flex items-center mb-2">
                            <Bot className="w-4 h-4 mr-2 text-blue-400" />
                            <Badge className="bg-blue-500/20 text-blue-300 text-xs">AI Mentor</Badge>
                          </div>
                        )}
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        <div className="text-xs opacity-60 mt-2">{message.timestamp}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything about AI..."
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button 
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Learning Suggestions */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">Personalized Learning Suggestions</CardTitle>
          <CardDescription className="text-white/70">
            Based on your current progress and interests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/10 rounded-lg">
              <h4 className="font-semibold text-white mb-2">📚 Next Module</h4>
              <p className="text-sm text-white/70 mb-3">Deep Learning Fundamentals - Continue your neural network journey</p>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Start Learning
              </Button>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <h4 className="font-semibold text-white mb-2">💻 Practice Project</h4>
              <p className="text-sm text-white/70 mb-3">Build an image classifier using CNNs</p>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Try Project
              </Button>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <h4 className="font-semibold text-white mb-2">🎯 Skill Gap</h4>
              <p className="text-sm text-white/70 mb-3">Strengthen your linear algebra fundamentals</p>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Review Math
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIMentor;
