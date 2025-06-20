
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Trophy, 
  Play, 
  RotateCcw,
  BookOpen,
  Target
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topic: string;
}

const Quizzes = () => {
  const [currentQuiz, setCurrentQuiz] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const quizzes = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals',
      description: 'Test your understanding of basic AI concepts',
      difficulty: 'Beginner',
      questions: 10,
      time: 15,
      icon: Brain,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Basics',
      description: 'Evaluate your ML knowledge and algorithms',
      difficulty: 'Intermediate',
      questions: 15,
      time: 20,
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning & Neural Networks',
      description: 'Challenge yourself with advanced DL concepts',
      difficulty: 'Advanced',
      questions: 20,
      time: 30,
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const sampleQuestions: Question[] = [
    {
      id: 1,
      question: "What does AI stand for?",
      options: ["Artificial Intelligence", "Automated Intelligence", "Advanced Intelligence", "Algorithmic Intelligence"],
      correct: 0,
      explanation: "AI stands for Artificial Intelligence, which refers to machine systems that can perform tasks typically requiring human intelligence.",
      difficulty: "Beginner",
      topic: "AI Fundamentals"
    },
    {
      id: 2,
      question: "Which of the following is a supervised learning algorithm?",
      options: ["K-means clustering", "Linear Regression", "DBSCAN", "Principal Component Analysis"],
      correct: 1,
      explanation: "Linear Regression is a supervised learning algorithm that learns from labeled training data to predict continuous values.",
      difficulty: "Intermediate",
      topic: "Machine Learning"
    },
    {
      id: 3,
      question: "What is the purpose of an activation function in neural networks?",
      options: [
        "To initialize weights",
        "To introduce non-linearity",
        "To calculate gradients",
        "To prevent overfitting"
      ],
      correct: 1,
      explanation: "Activation functions introduce non-linearity to neural networks, allowing them to learn complex patterns and relationships in data.",
      difficulty: "Advanced",
      topic: "Deep Learning"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Advanced':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const startQuiz = (quizId: string) => {
    setCurrentQuiz(quizId);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers(new Array(sampleQuestions.length).fill(null));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      if (selectedAnswer === sampleQuestions[currentQuestion].correct) {
        setScore(score + 1);
      }

      if (currentQuestion < sampleQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  if (showResult) {
    const percentage = Math.round((score / sampleQuestions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-white text-3xl">Quiz Complete!</CardTitle>
                <CardDescription className="text-white/70 text-lg">
                  Here are your results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">{percentage}%</div>
                  <p className="text-white/70">
                    You scored {score} out of {sampleQuestions.length} questions correctly
                  </p>
                </div>

                <Progress value={percentage} className="h-4" />

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{score}</div>
                    <div className="text-sm text-white/70">Correct</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-red-400">{sampleQuestions.length - score}</div>
                    <div className="text-sm text-white/70">Incorrect</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{sampleQuestions.length}</div>
                    <div className="text-sm text-white/70">Total</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    onClick={resetQuiz}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Another Quiz
                  </Button>
                  <Button 
                    onClick={() => setShowResult(false)}
                    variant="outline" 
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    Review Answers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (currentQuiz) {
    const question = sampleQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Progress Header */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/70">Question {currentQuestion + 1} of {sampleQuestions.length}</span>
                <Badge className={getDifficultyColor(question.difficulty)}>
                  {question.difficulty}
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  {question.question}
                </CardTitle>
                <CardDescription className="text-white/70">
                  Topic: {question.topic}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedAnswer === index
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-white/20 bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-white/40'
                      }`}>
                        {selectedAnswer === index && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="text-white">{option}</span>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center pt-4">
                  <Button
                    variant="outline"
                    onClick={resetQuiz}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Exit Quiz
                  </Button>
                  <Button
                    onClick={nextQuestion}
                    disabled={selectedAnswer === null}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:opacity-50"
                  >
                    {currentQuestion === sampleQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">AI Knowledge Quizzes</h1>
          <p className="text-white/70 text-lg">Test your understanding of AI concepts and track your progress</p>
        </div>

        {/* Quiz Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-r ${quiz.color} rounded-lg flex items-center justify-center mb-4`}>
                  <quiz.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{quiz.title}</CardTitle>
                <CardDescription className="text-white/70">
                  {quiz.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={getDifficultyColor(quiz.difficulty)}>
                    {quiz.difficulty}
                  </Badge>
                  <div className="flex items-center text-white/60 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {quiz.time} min
                  </div>
                </div>
                
                <div className="text-white/70 text-sm">
                  {quiz.questions} questions • Multiple choice
                </div>

                <Button 
                  onClick={() => startQuiz(quiz.id)}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Scores */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Recent Quiz Results</CardTitle>
            <CardDescription className="text-white/70">
              Your performance history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { quiz: 'AI Fundamentals', score: 85, date: '2 days ago', questions: 10 },
                { quiz: 'Machine Learning Basics', score: 72, date: '1 week ago', questions: 15 },
                { quiz: 'Deep Learning', score: 68, date: '2 weeks ago', questions: 20 }
              ].map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">{result.quiz}</h4>
                    <p className="text-sm text-white/60">{result.date} • {result.questions} questions</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{result.score}%</div>
                    <div className="flex items-center text-sm">
                      {result.score >= 80 ? (
                        <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400 mr-1" />
                      )}
                      <span className={result.score >= 80 ? 'text-green-400' : 'text-red-400'}>
                        {result.score >= 80 ? 'Passed' : 'Review'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quizzes;
