
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Code, BookOpen, Users, Rocket, Bot, Play, Trophy, TrendingUp, Target, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { currentUser } = useAuth();

  const features = [
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
  ];

  const stats = [
    { title: "Active Learners", count: "2,847", icon: Users },
    { title: "Projects Completed", count: "12,439", icon: Rocket },
    { title: "Expert Mentors", count: "156", icon: Brain }
  ];

  const quickActions = [
    {
      title: "Start Learning",
      description: "Begin your AI journey with fundamentals",
      icon: BookOpen,
      link: "/learn",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Code Playground",
      description: "Practice with interactive coding environment",
      icon: Code,
      link: "/playground",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Take Quiz",
      description: "Test your knowledge with AI quizzes",
      icon: Trophy,
      link: "/quizzes",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Join Community",
      description: "Connect with fellow AI enthusiasts",
      icon: Users,
      link: "/community",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
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
            {currentUser ? (
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    <Play className="w-5 h-5 mr-2" />
                    Start Learning
                  </Button>
                </Link>
                <Link to="/playground">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Code className="w-5 h-5 mr-2" />
                    Try Playground
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Learning Hub?</h2>
          <p className="text-xl text-white/80">Everything you need to master artificial intelligence</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
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

      {/* Quick Actions */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get Started Today</h2>
          <p className="text-xl text-white/80">Choose your learning path</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">{action.title}</CardTitle>
                  <CardDescription className="text-white/70">
                    {action.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Modules Preview */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Learning Modules</h2>
          <p className="text-xl text-white/80">Start with these popular courses</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Fundamentals",
              description: "Learn the basics of artificial intelligence",
              level: "Beginner",
              duration: "4 hours",
              progress: 0,
              icon: Brain,
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Machine Learning Basics",
              description: "Understand supervised and unsupervised learning",
              level: "Beginner",
              duration: "6 hours",
              progress: 0,
              icon: Target,
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Deep Learning",
              description: "Dive into neural networks and deep learning",
              level: "Intermediate",
              duration: "8 hours",
              progress: 0,
              icon: Code,
              color: "from-purple-500 to-pink-500"
            }
          ].map((module, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center mb-4`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{module.title}</CardTitle>
                <CardDescription className="text-white/70">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    {module.level}
                  </Badge>
                  <div className="flex items-center text-white/60 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {module.duration}
                  </div>
                </div>
                <Link to="/learn">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Join the AI Learning Community</h2>
          <p className="text-xl text-white/80">Connect with fellow learners and share your AI journey</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardHeader>
                <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-white">{stat.count}</CardTitle>
                <CardDescription className="text-white/70">{stat.title}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/community">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
