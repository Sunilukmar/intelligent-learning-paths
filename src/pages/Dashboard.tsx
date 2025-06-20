
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, BookOpen, Code, Trophy, TrendingUp, Target, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const { currentUser } = useAuth();

  const progressData = [
    { month: 'Jan', progress: 12 },
    { month: 'Feb', progress: 19 },
    { month: 'Mar', progress: 25 },
    { month: 'Apr', progress: 32 },
    { month: 'May', progress: 45 },
    { month: 'Jun', progress: 60 },
  ];

  const skillsData = [
    { name: 'AI Fundamentals', value: 85, color: '#9333ea' },
    { name: 'Machine Learning', value: 70, color: '#3b82f6' },
    { name: 'Deep Learning', value: 60, color: '#10b981' },
    { name: 'Computer Vision', value: 45, color: '#f59e0b' },
    { name: 'NLP', value: 30, color: '#ef4444' },
  ];

  const stats = [
    { title: 'Courses Completed', value: '8', total: '15', icon: BookOpen, color: 'from-green-500 to-emerald-500', progress: 53 },
    { title: 'Coding Challenges', value: '24', total: '40', icon: Code, color: 'from-blue-500 to-cyan-500', progress: 60 },
    { title: 'AI Concepts', value: '12', total: '20', icon: Brain, color: 'from-purple-500 to-pink-500', progress: 60 },
    { title: 'Achievements', value: '6', total: '10', icon: Trophy, color: 'from-orange-500 to-red-500', progress: 60 }
  ];

  const recentActivities = [
    { action: 'Completed', item: 'Introduction to Neural Networks', time: '2 hours ago', type: 'course' },
    { action: 'Started', item: 'Computer Vision Project', time: '1 day ago', type: 'project' },
    { action: 'Achieved', item: 'ML Expert Badge', time: '2 days ago', type: 'achievement' },
    { action: 'Submitted', item: 'Linear Regression Quiz', time: '3 days ago', type: 'quiz' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {currentUser?.email?.split('@')[0]}! 👋
          </h1>
          <p className="text-white/70 text-lg">
            Ready to continue your AI learning journey? Let's see your progress.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    {stat.progress}%
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-white/60">/ {stat.total}</span>
                </div>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Learning Progress Chart */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Learning Progress
              </CardTitle>
              <CardDescription className="text-white/70">
                Your learning journey over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                    <YAxis stroke="rgba(255,255,255,0.7)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="progress" 
                      stroke="#9333ea" 
                      strokeWidth={3}
                      dot={{ fill: '#9333ea', strokeWidth: 2, r: 6 }}
                      name="Learning Progress"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Skills Breakdown */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-400" />
                Skills Breakdown
              </CardTitle>
              <CardDescription className="text-white/70">
                Your proficiency across different AI domains
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={skillsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {skillsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                Recent Activity
              </CardTitle>
              <CardDescription className="text-white/70">
                Your latest learning activities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    {activity.type === 'course' && <BookOpen className="w-5 h-5 text-white" />}
                    {activity.type === 'project' && <Code className="w-5 h-5 text-white" />}
                    {activity.type === 'achievement' && <Trophy className="w-5 h-5 text-white" />}
                    {activity.type === 'quiz' && <Brain className="w-5 h-5 text-white" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-white">
                      <span className="text-purple-400 font-semibold">{activity.action}</span>{' '}
                      {activity.item}
                    </p>
                    <p className="text-sm text-white/60">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription className="text-white/70">
                Continue your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/learn">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </Link>
              <Link to="/playground">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <Code className="w-4 h-4 mr-2" />
                  Code Playground
                </Button>
              </Link>
              <Link to="/quizzes">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <Brain className="w-4 h-4 mr-2" />
                  Take Quiz
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
