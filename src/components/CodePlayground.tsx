
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Play, Save, Share, RotateCcw, Code, Terminal, FileText } from "lucide-react";

const CodePlayground = () => {
  const [code, setCode] = useState(`# Welcome to AI Learning Hub Code Playground!
# Let's start with a simple neural network example

import numpy as np
import matplotlib.pyplot as plt

class SimpleNeuralNetwork:
    def __init__(self, input_size, hidden_size, output_size):
        # Initialize weights randomly
        self.W1 = np.random.randn(input_size, hidden_size) * 0.01
        self.b1 = np.zeros((1, hidden_size))
        self.W2 = np.random.randn(hidden_size, output_size) * 0.01
        self.b2 = np.zeros((1, output_size))
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-np.clip(x, -250, 250)))
    
    def forward(self, X):
        # Forward propagation
        self.z1 = np.dot(X, self.W1) + self.b1
        self.a1 = self.sigmoid(self.z1)
        self.z2 = np.dot(self.a1, self.W2) + self.b2
        self.a2 = self.sigmoid(self.z2)
        return self.a2

# Create a simple dataset (XOR problem)
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])

# Initialize neural network
nn = SimpleNeuralNetwork(2, 4, 1)

# Make predictions
predictions = nn.forward(X)
print("Initial predictions:")
print(predictions)

print("\\nTarget values:")
print(y)`);

  const [output, setOutput] = useState(`Initial predictions:
[[0.52341847]
 [0.48293851]
 [0.51847293]
 [0.47582934]]

Target values:
[[0]
 [1]
 [1]
 [0]]

Code executed successfully! 🎉
Your neural network is initialized and making predictions.`);

  const examples = [
    {
      title: "Linear Regression",
      description: "Implement gradient descent for linear regression",
      difficulty: "Beginner",
      code: `import numpy as np
import matplotlib.pyplot as plt

# Simple linear regression example
X = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])

# Add bias term
X_with_bias = np.column_stack([np.ones(len(X)), X])

# Calculate weights using normal equation
weights = np.linalg.inv(X_with_bias.T @ X_with_bias) @ X_with_bias.T @ y
print(f"Weights: {weights}")

# Make predictions
predictions = X_with_bias @ weights
print(f"Predictions: {predictions}")`,
    },
    {
      title: "K-Means Clustering",
      description: "Implement K-means clustering algorithm",
      difficulty: "Intermediate",
      code: `import numpy as np
import matplotlib.pyplot as plt

def kmeans(X, k, max_iters=100):
    # Initialize centroids randomly
    centroids = X[np.random.choice(X.shape[0], k, replace=False)]
    
    for _ in range(max_iters):
        # Assign points to closest centroid
        distances = np.sqrt(((X - centroids[:, np.newaxis])**2).sum(axis=2))
        closest_cluster = np.argmin(distances, axis=0)
        
        # Update centroids
        new_centroids = np.array([X[closest_cluster == i].mean(axis=0) for i in range(k)])
        
        # Check for convergence
        if np.allclose(centroids, new_centroids):
            break
            
        centroids = new_centroids
    
    return centroids, closest_cluster

# Generate sample data
np.random.seed(42)
X = np.random.randn(100, 2)

# Run K-means
centroids, labels = kmeans(X, 3)
print(f"Final centroids: {centroids}")`,
    },
    {
      title: "Convolutional Layer",
      description: "Build a simple CNN layer from scratch",
      difficulty: "Advanced",
      code: `import numpy as np

def conv2d(input_img, kernel, stride=1, padding=0):
    """
    Implement 2D convolution operation
    """
    # Add padding if specified
    if padding > 0:
        input_img = np.pad(input_img, ((padding, padding), (padding, padding)), mode='constant')
    
    input_h, input_w = input_img.shape
    kernel_h, kernel_w = kernel.shape
    
    # Calculate output dimensions
    output_h = (input_h - kernel_h) // stride + 1
    output_w = (input_w - kernel_w) // stride + 1
    
    # Initialize output
    output = np.zeros((output_h, output_w))
    
    # Perform convolution
    for i in range(0, output_h * stride, stride):
        for j in range(0, output_w * stride, stride):
            output[i//stride, j//stride] = np.sum(
                input_img[i:i+kernel_h, j:j+kernel_w] * kernel
            )
    
    return output

# Example usage
input_image = np.random.randn(28, 28)
edge_kernel = np.array([[-1, -1, -1], [-1, 8, -1], [-1, -1, -1]])

result = conv2d(input_image, edge_kernel, padding=1)
print(f"Input shape: {input_image.shape}")
print(f"Output shape: {result.shape}")`,
    },
  ];

  const runCode = () => {
    // Simulate code execution
    setOutput(`Code executed successfully! 🎉

Output:
${code.includes('predictions') ? 'Neural network predictions calculated!' : 
  code.includes('kmeans') ? 'K-means clustering completed!' :
  code.includes('conv2d') ? 'Convolution operation performed!' :
  'Code executed without errors!'}

Execution time: ${Math.random() * 2 + 0.5}s`);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">AI Code Playground</h2>
        <p className="text-white/70">Practice AI concepts with interactive coding environment</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Code Examples */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Code Examples</CardTitle>
              <CardDescription className="text-white/70">
                Try these AI implementations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => setCode(example.code)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{example.title}</h4>
                    <Badge className={`text-xs ${
                      example.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                      example.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                      'bg-red-500/20 text-red-300 border-red-500/30'
                    }`}>
                      {example.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-white/70">{example.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Code Editor & Output */}
        <div className="lg:col-span-2">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Python Code Editor
                </CardTitle>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Save className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="editor" className="space-y-4">
                <TabsList className="bg-white/10">
                  <TabsTrigger value="editor" className="data-[state=active]:bg-purple-500">
                    <FileText className="w-4 h-4 mr-2" />
                    Editor
                  </TabsTrigger>
                  <TabsTrigger value="output" className="data-[state=active]:bg-purple-500">
                    <Terminal className="w-4 h-4 mr-2" />
                    Output
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="editor" className="space-y-4">
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="min-h-[400px] font-mono text-sm bg-gray-900 border-white/20 text-white resize-none"
                    placeholder="Write your AI code here..."
                  />
                  <Button 
                    onClick={runCode}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Run Code
                  </Button>
                </TabsContent>

                <TabsContent value="output" className="space-y-4">
                  <div className="min-h-[400px] p-4 bg-gray-900 rounded-lg border border-white/20">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                      {output}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">Code Challenges</h4>
            <p className="text-sm text-white/70 mb-4">Solve AI coding problems</p>
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              Start Challenge
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">Templates</h4>
            <p className="text-sm text-white/70 mb-4">Pre-built AI project templates</p>
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              Browse
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Share className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">Community</h4>
            <p className="text-sm text-white/70 mb-4">Share your code with others</p>
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              Join
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">Notebooks</h4>
            <p className="text-sm text-white/70 mb-4">Interactive Jupyter-style coding</p>
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              Create
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CodePlayground;
