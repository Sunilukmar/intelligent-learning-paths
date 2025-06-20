
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Clock, Target } from "lucide-react";

const ProgressDashboard = () => {
  const stats = [
    { label: "Courses Completed", value: 8, total: 15, percentage: 53 },
    { label: "Coding Challenges", value: 24, total: 40, percentage: 60 },
    { label: "AI Concepts Mastered", value: 12, total: 20, percentage: 60 },
    { label: "Project Portfolio", value: 3, total: 5, percentage: 60 }
  ];

  const achievements = [
    { title: "First Steps in AI", description: "Completed your first AI module", icon: "🎯" },
    { title: "Code Warrior", description: "Solved 10 coding challenges", icon: "⚔️" },
    { title: "Neural Network Explorer", description: "Built your first neural network", icon: "🧠" },
    { title: "Community Helper", description: "Helped 5 fellow learners", icon: "🤝" }
  ];

  const recentActivity = [
    { action: "Completed", item: "Introduction to Machine Learning", time: "2 hours ago" },
    { action: "Started", item: "Deep Learning Fundamentals", time: "1 day ago" },
    { action: "Achieved", item: "Code Warrior Badge", time: "2 days ago" },
    { action: "Submitted", item: "Image Classification Project", time: "3 days ago" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Your Learning Journey</h2>
        <p className="text-white/70">Track your progress and celebrate achievements</p>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="pb-2">
              <CardDescription className="text-white/70">{stat.label}</CardDescription>
              <CardTitle className="text-2xl text-white">
                {stat.value}/{stat.total}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={stat.percentage} className="h-2" />
              <p className="text-sm text-white/60 mt-2">{stat.percentage}% Complete</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Achievements */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{achievement.title}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  New
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-400" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex-1">
                  <p className="text-white">
                    <span className="text-purple-400 font-semibold">{activity.action}</span>{" "}
                    {activity.item}
                  </p>
                  <p className="text-sm text-white/60">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Learning Streak */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
            Learning Streak
          </CardTitle>
          <CardDescription className="text-white/70">
            Keep up the momentum! You're on a 7-day learning streak.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div
                key={day}
                className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
              >
                {day}
              </div>
            ))}
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 text-sm">
              8
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressDashboard;
