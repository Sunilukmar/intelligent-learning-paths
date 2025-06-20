
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Share, 
  BookOpen, 
  Code, 
  Brain,
  Trophy,
  Calendar,
  Search,
  Plus,
  Heart,
  Eye
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: "Best practices for training neural networks?",
      author: "Sarah Chen",
      avatar: "SC",
      category: "Deep Learning",
      replies: 24,
      likes: 18,
      views: 156,
      time: "2 hours ago",
      excerpt: "I'm struggling with overfitting in my CNN model. What are some effective regularization techniques you've used?"
    },
    {
      id: 2,
      title: "Implementing transformer architecture from scratch",
      author: "Alex Rodriguez",
      avatar: "AR",
      category: "NLP",
      replies: 31,
      likes: 42,
      views: 289,
      time: "4 hours ago",
      excerpt: "Built a transformer model following the 'Attention is All You Need' paper. Here's my implementation and lessons learned..."
    },
    {
      id: 3,
      title: "Career transition into AI/ML - advice needed",
      author: "Emma Wilson",
      avatar: "EW",
      category: "Career",
      replies: 17,
      likes: 35,
      views: 203,
      time: "1 day ago",
      excerpt: "Currently working as a software engineer and want to transition into AI/ML. What learning path would you recommend?"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Real-time Face Recognition System",
      author: "David Kim",
      avatar: "DK",
      description: "Built using OpenCV and deep learning. Achieved 95% accuracy on test dataset.",
      tags: ["Computer Vision", "Python", "OpenCV"],
      stars: 127,
      forks: 34,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Sentiment Analysis for Social Media",
      author: "Maria Garcia",
      avatar: "MG",
      description: "NLP model for analyzing sentiment in tweets and social media posts.",
      tags: ["NLP", "BERT", "Social Media"],
      stars: 89,
      forks: 22,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Stock Price Prediction using LSTM",
      author: "John Anderson",
      avatar: "JA",
      description: "Time series analysis and prediction using LSTM neural networks.",
      tags: ["Time Series", "LSTM", "Finance"],
      stars: 156,
      forks: 67,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop"
    }
  ];

  const events = [
    {
      id: 1,
      title: "AI Ethics Workshop",
      date: "Dec 25, 2024",
      time: "2:00 PM PST",
      attendees: 145,
      type: "Workshop",
      description: "Discussing ethical implications of AI in modern society"
    },
    {
      id: 2,
      title: "Deep Learning Study Group",
      date: "Dec 27, 2024",
      time: "6:00 PM PST",
      attendees: 67,
      type: "Study Group",
      description: "Weekly meetup to discuss latest papers and techniques"
    },
    {
      id: 3,
      title: "ML Project Showcase",
      date: "Dec 30, 2024",
      time: "4:00 PM PST",
      attendees: 203,
      type: "Showcase",
      description: "Present your ML projects and get feedback from peers"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'deep learning':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'nlp':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'career':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'computer vision':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">AI Learning Community</h1>
          <p className="text-white/70 text-lg">Connect, learn, and grow with fellow AI enthusiasts</p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">2,847</div>
              <div className="text-white/70">Active Members</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="pt-6">
              <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1,234</div>
              <div className="text-white/70">Discussions</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="pt-6">
              <Code className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">567</div>
              <div className="text-white/70">Projects Shared</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="pt-6">
              <Calendar className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">89</div>
              <div className="text-white/70">Events This Month</div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'discussions', label: 'Discussions', icon: MessageSquare },
            { id: 'projects', label: 'Projects', icon: Code },
            { id: 'events', label: 'Events', icon: Calendar },
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              className={`${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {/* Search and Create */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                <Input 
                  placeholder="Search discussions..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                <Plus className="w-4 h-4 mr-2" />
                New Discussion
              </Button>
            </div>

            {/* Discussions List */}
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                          {discussion.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-white font-semibold text-lg">{discussion.title}</h3>
                          <Badge className={getCategoryColor(discussion.category)}>
                            {discussion.category}
                          </Badge>
                        </div>
                        <p className="text-white/70 mb-3">{discussion.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-white/60">
                          <div className="flex items-center space-x-4">
                            <span>by {discussion.author}</span>
                            <span>{discussion.time}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {discussion.replies}
                            </div>
                            <div className="flex items-center">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {discussion.likes}
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {discussion.views}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs">
                        {project.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-white/70 text-sm">{project.author}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/70 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {project.stars}
                      </div>
                      <div className="flex items-center">
                        <Share className="w-4 h-4 mr-1" />
                        {project.forks}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-white font-semibold text-lg">{event.title}</h3>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-white/70 mb-3">{event.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-white/60">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {event.date}
                        </div>
                        <span>{event.time}</span>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {event.attendees} attending
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                      Join Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Community Leaderboard</CardTitle>
              <CardDescription className="text-white/70">
                Top contributors this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { rank: 1, name: "Sarah Chen", points: 2847, avatar: "SC", badge: "🥇" },
                  { rank: 2, name: "Alex Rodriguez", points: 2156, avatar: "AR", badge: "🥈" },
                  { rank: 3, name: "Emma Wilson", points: 1934, avatar: "EW", badge: "🥉" },
                  { rank: 4, name: "David Kim", points: 1678, avatar: "DK", badge: "" },
                  { rank: 5, name: "Maria Garcia", points: 1456, avatar: "MG", badge: "" }
                ].map((user) => (
                  <div key={user.rank} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{user.badge || `#${user.rank}`}</div>
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-white">{user.name}</h4>
                        <p className="text-sm text-white/60">Rank #{user.rank}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">{user.points.toLocaleString()}</div>
                      <div className="text-sm text-white/60">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Community;
