
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Play, CheckCircle, Clock, Brain, Code, Database, Zap } from "lucide-react";

const LearningModules = () => {
  const modules = [
    {
      id: 1,
      title: "AI Fundamentals",
      description: "Start your AI journey with core concepts and terminology",
      level: "Beginner",
      duration: "4 hours",
      progress: 100,
      lessons: 8,
      completed: 8,
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      status: "completed"
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      description: "Learn supervised and unsupervised learning algorithms",
      level: "Beginner",
      duration: "6 hours",
      progress: 75,
      lessons: 12,
      completed: 9,
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      status: "in-progress"
    },
    {
      id: 3,
      title: "Deep Learning & Neural Networks",
      description: "Dive deep into neural networks and deep learning architectures",
      level: "Intermediate",
      duration: "8 hours",
      progress: 30,
      lessons: 15,
      completed: 4,
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      status: "in-progress"
    },
    {
      id: 4,
      title: "Natural Language Processing",
      description: "Process and understand human language with AI",
      level: "Intermediate",
      duration: "7 hours",
      progress: 0,
      lessons: 10,
      completed: 0,
      icon: Code,
      color: "from-orange-500 to-red-500",
      status: "locked"
    },
    {
      id: 5,
      title: "Computer Vision",
      description: "Teach machines to see and interpret visual information",
      level: "Intermediate",
      duration: "8 hours",
      progress: 0,
      lessons: 12,
      completed: 0,
      icon: Database,
      color: "from-teal-500 to-blue-500",
      status: "locked"
    },
    {
      id: 6,
      title: "AI Ethics & Responsible AI",
      description: "Understand the ethical implications of AI development",
      level: "Advanced",
      duration: "5 hours",
      progress: 0,
      lessons: 8,
      completed: 0,
      icon: Brain,
      color: "from-gray-500 to-slate-500",
      status: "locked"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Advanced":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "in-progress":
        return <Play className="w-5 h-5 text-blue-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Learning Modules</h2>
        <p className="text-white/70">Structured learning paths to master AI concepts</p>
      </div>

      {/* Learning Path Overview */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">Your Learning Path</CardTitle>
          <CardDescription className="text-white/70">
            Follow this structured path to become an AI expert
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 overflow-x-auto pb-4">
            {modules.map((module, index) => (
              <div key={module.id} className="flex items-center space-x-4 min-w-fit">
                <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-full flex items-center justify-center ${module.status === 'locked' ? 'opacity-50' : ''}`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                {index < modules.length - 1 && (
                  <div className={`w-8 h-1 ${module.status === 'completed' ? 'bg-green-500' : 'bg-white/20'} rounded`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Module Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card key={module.id} className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 ${module.status === 'locked' ? 'opacity-60' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center mb-4`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                {getStatusIcon(module.status)}
              </div>
              <CardTitle className="text-white">{module.title}</CardTitle>
              <CardDescription className="text-white/70">
                {module.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge className={getLevelColor(module.level)}>
                  {module.level}
                </Badge>
                <div className="flex items-center text-white/60 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {module.duration}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Progress</span>
                  <span className="text-white">{module.completed}/{module.lessons} lessons</span>
                </div>
                <Progress value={module.progress} className="h-2" />
              </div>

              <Button 
                className={`w-full ${module.status === 'locked' ? 'opacity-50 cursor-not-allowed' : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'}`}
                disabled={module.status === 'locked'}
              >
                {module.status === 'completed' ? 'Review' : 
                 module.status === 'in-progress' ? 'Continue' : 
                 module.status === 'locked' ? 'Locked' : 'Start'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-lg">Take a Quiz</CardTitle>
            <CardDescription className="text-white/70">
              Test your knowledge with AI quizzes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
              Start Quiz
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-lg">Join Study Group</CardTitle>
            <CardDescription className="text-white/70">
              Learn with peers in study sessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
              Find Group
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-lg">Practice Projects</CardTitle>
            <CardDescription className="text-white/70">
              Apply your skills to real projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
              Browse Projects
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearningModules;
