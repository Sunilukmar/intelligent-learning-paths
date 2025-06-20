
import { Brain, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">AI Learning Hub</span>
            </div>
            <p className="text-white/70 text-sm">
              Making AI education accessible, interactive, and fun for everyone. 
              Join thousands of learners on their AI journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-white/70 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/learn" className="block text-white/70 hover:text-white transition-colors text-sm">
                Learning Modules
              </Link>
              <Link to="/playground" className="block text-white/70 hover:text-white transition-colors text-sm">
                Code Playground
              </Link>
              <Link to="/quizzes" className="block text-white/70 hover:text-white transition-colors text-sm">
                Quizzes
              </Link>
              <Link to="/community" className="block text-white/70 hover:text-white transition-colors text-sm">
                Community
              </Link>
            </div>
          </div>

          {/* Learning Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Learning</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                AI Fundamentals
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Machine Learning
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Deep Learning
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Computer Vision
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                NLP
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-white/70 text-sm">support@ailearninghub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-white/70 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-white/70 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © 2024 AI Learning Hub. All rights reserved. Built for Hackathon 2024.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
