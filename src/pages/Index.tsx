
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Code, BookOpen, Users, Rocket, ChevronRight, Bot, Play, Trophy, TrendingUp } from "lucide-react";
import AIMentor from "@/components/AIMentor";
import CodePlayground from "@/components/CodePlayground";
import ProgressDashboard from "@/components/ProgressDashboard";
import LearningModules from "@/components/LearningModules";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-md bg-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">AI Learning Hub</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-white/80 hover:text-white transition-colors">Learn</button>
              <button className="text-white/80 hover:text-white transition-colors">Practice</button>
              <button className="text-white/80 hover:text-white transition-colors">Community</button>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            🚀 Hackathon Project 2024
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master AI with
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Interactive Learning
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Your personalized AI education platform with hands-on tutorials, coding labs, 
            and an AI mentor to guide your journey from beginner to expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              <Play className="w-5 h-5 mr-2" />
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Code className="w-5 h-5 mr-2" />
              Try Playground
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Bot,
              title: "AI Mentor Bot",
              description: "Get personalized guidance from your AI learning companion",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: BookOpen,
              title: "Structured Modules",
              description: "Curated learning paths from beginner to advanced levels",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Code,
              title: "Live Coding Labs",
              description: "Practice in real-time with interactive coding environments",
              color: "from-green-500 to-teal-500"
            },
            {
              icon: TrendingUp,
              title: "Progress Tracking",
              description: "Visualize your learning journey with detailed analytics",
              color: "from-orange-500 to-red-500"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
                <CardDescription className="text-white/70">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-white/10">
              <TabsTrigger value="overview" className="data-[state=active]:bg-purple-500">
                <Trophy className="w-4 h-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="learn" className="data-[state=active]:bg-purple-500">
                <BookOpen className="w-4 h-4 mr-2" />
                Learn
              </TabsTrigger>
              <TabsTrigger value="code" className="data-[state=active]:bg-purple-500">
                <Code className="w-4 h-4 mr-2" />
                Code Lab
              </TabsTrigger>
              <TabsTrigger value="mentor" className="data-[state=active]:bg-purple-500">
                <Bot className="w-4 h-4 mr-2" />
                AI Mentor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <ProgressDashboard />
            </TabsContent>

            <TabsContent value="learn" className="space-y-8">
              <LearningModules />
            </TabsContent>

            <TabsContent value="code" className="space-y-8">
              <CodePlayground />
            </TabsContent>

            <TabsContent value="mentor" className="space-y-8">
              <AIMentor />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Join the AI Learning Community</h2>
          <p className="text-xl text-white/80">Connect with fellow learners and share your AI journey</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Active Learners", count: "2,847", icon: Users },
            { title: "Projects Completed", count: "12,439", icon: Rocket },
            { title: "Expert Mentors", count: "156", icon: Brain }
          ].map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardHeader>
                <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-white">{stat.count}</CardTitle>
                <CardDescription className="text-white/70">{stat.title}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-md mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">AI Learning Hub</span>
            </div>
            <p className="text-white/60 text-sm">
              © 2024 AI Learning Hub - Hackathon Project. Making AI accessible for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
