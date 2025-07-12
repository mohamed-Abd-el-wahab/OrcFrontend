import React, { useState } from 'react';
import { Calendar, Clock, Trophy, Users, Code, FileText, Video, Download, ChevronRight, ChevronLeft, ChevronDown, Mail, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  teamName: string;
  memberNames: string;
  category: string;
  email: string;
  projectRepo: string;
  videoLink: string;
  additionalInfo: string;
}

const BuilderChallenge = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    memberNames: '',
    category: '',
    email: '',
    projectRepo: '',
    videoLink: '',
    additionalInfo: ''
  });

  const totalSteps = 3;

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      caption: "Advanced autonomous navigation system with LIDAR integration"
    },
    {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      caption: "Multi-robot coordination for warehouse automation"
    },
    {
      url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
      caption: "AI-powered object recognition and manipulation system"
    }
  ];

  const faqData = [
    {
      question: "Can I participate as an individual?",
      answer: "Yes! While teams of up to 4 members are allowed, individual participants are welcome. Solo builders often bring unique perspectives and innovative solutions."
    },
    {
      question: "Do I need to own a ROVER to participate?",
      answer: "No, you can use simulation environments or alternative hardware. However, ROVER users get access to exclusive tutorials and direct hardware support."
    },
    {
      question: "What if I'm new to robotics?",
      answer: "Perfect! The Beginner category is designed for newcomers. We provide comprehensive learning materials, mentorship, and step-by-step guidance."
    },
    {
      question: "Are there any costs to participate?",
      answer: "The challenge is completely free to enter. All learning materials, mentorship, and judging are provided at no cost."
    },
    {
      question: "Can I submit multiple projects?",
      answer: "Each team can submit one primary project, but you're encouraged to document your learning journey and iterations throughout the challenge period."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setFormData({
        teamName: '',
        memberNames: '',
        category: '',
        email: '',
        projectRepo: '',
        videoLink: '',
        additionalInfo: ''
      });
      setCurrentStep(1);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"
            alt="Robots in action"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Join the ORC Builder Challenge
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-8">
            Put your skills to the test—design, build, and compete!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Showcase your robotics expertise in our most exciting challenge yet. From beginners to experts, everyone has a chance to shine.
          </p>
          
          <a
            href="#registration"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-lg font-semibold"
          >
            Register Now
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* What Is the Builder Challenge */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What Is the Builder Challenge?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The ORC Builder Challenge is a comprehensive robotics competition designed to test your skills across multiple domains. 
              Whether you're just starting or you're a seasoned engineer, we have a category that will push your boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Beginner</h3>
              <p className="text-gray-300 mb-4">
                Perfect for newcomers to robotics and programming.
              </p>
              <p className="text-green-400 font-medium">
                Learn fundamental robotics concepts through hands-on projects and guided tutorials.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Intermediate</h3>
              <p className="text-gray-300 mb-4">
                For builders with some experience in robotics or programming.
              </p>
              <p className="text-yellow-400 font-medium">
                Master advanced control systems and implement complex autonomous behaviors.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-red-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Advanced</h3>
              <p className="text-gray-300 mb-4">
                For experienced engineers and robotics professionals.
              </p>
              <p className="text-red-400 font-medium">
                Push the boundaries of robotics with cutting-edge AI and multi-robot coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Modules Table */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Categories & Key Modules</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-lg font-semibold text-white">Level</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-white">Description</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-white">Key Modules</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700/50">
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full font-medium">
                      Beginner
                    </span>
                  </td>
                  <td className="px-6 py-6 text-gray-300">
                    Introduction to robotics fundamentals, basic programming, and simple automation tasks.
                  </td>
                  <td className="px-6 py-6 text-gray-300">
                    <ul className="space-y-1">
                      <li>• Robot Assembly & Setup</li>
                      <li>• Basic Movement Control</li>
                      <li>• Sensor Integration</li>
                      <li>• Simple Automation</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full font-medium">
                      Intermediate
                    </span>
                  </td>
                  <td className="px-6 py-6 text-gray-300">
                    Advanced control systems, computer vision, and autonomous navigation challenges.
                  </td>
                  <td className="px-6 py-6 text-gray-300">
                    <ul className="space-y-1">
                      <li>• Computer Vision</li>
                      <li>• Path Planning</li>
                      <li>• ROS2 Integration</li>
                      <li>• Autonomous Navigation</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full font-medium">
                      Advanced
                    </span>
                  </td>
                  <td className="px-6 py-6 text-gray-300">
                    Cutting-edge AI implementation, multi-robot systems, and complex problem-solving.
                  </td>
                  <td className="px-6 py-6 text-gray-300">
                    <ul className="space-y-1">
                      <li>• Machine Learning</li>
                      <li>• Multi-Robot Coordination</li>
                      <li>• Advanced AI Algorithms</li>
                      <li>• Custom Hardware Integration</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline & Milestones */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Timeline & Milestones</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 transform -translate-y-1/2"></div>
            
            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Registration Opens</h3>
                <p className="text-2xl font-bold text-blue-400 mb-2">June 15, 2025</p>
                <p className="text-gray-300">Sign up and choose your category</p>
              </div>

              <div className="relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Submission Deadline</h3>
                <p className="text-2xl font-bold text-yellow-400 mb-2">August 1, 2025</p>
                <p className="text-gray-300">Final project submissions due</p>
              </div>

              <div className="relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Final Judging</h3>
                <p className="text-2xl font-bold text-green-400 mb-2">Aug 15-20, 2025</p>
                <p className="text-gray-300">Winners announced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Judging Criteria */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Rules & Judging Criteria</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Rules */}
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Competition Rules</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Team Size</h4>
                    <p className="text-gray-300">Maximum 4 members per team (individuals welcome)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Hardware</h4>
                    <p className="text-gray-300">ROVER platform recommended, alternatives accepted</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Software</h4>
                    <p className="text-gray-300">ROS2 Humble, Python, open-source libraries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Deliverables</h4>
                    <p className="text-gray-300">Demo video, architecture diagram, code & documentation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Judging Criteria */}
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Judging Rubric</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Technical Innovation</span>
                  <span className="text-blue-400 font-bold">30%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white">Implementation Quality</span>
                  <span className="text-green-400 font-bold">25%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white">Problem Solving</span>
                  <span className="text-yellow-400 font-bold">20%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white">Documentation</span>
                  <span className="text-purple-400 font-bold">15%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white">Presentation</span>
                  <span className="text-red-400 font-bold">10%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes & Recognition */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Prizes & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Grand Prize</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-4">$5,000</p>
                <p className="text-gray-300">
                  Cash prize, ORC mentorship program, and featured showcase at our next major event
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-500/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Runner-up</h3>
                <p className="text-3xl font-bold text-gray-400 mb-4">$2,000</p>
                <p className="text-gray-300">
                  Cash prize, advanced course access, and priority consideration for internships
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">People's Choice</h3>
                <p className="text-3xl font-bold text-blue-400 mb-4">$1,000</p>
                <p className="text-gray-300">
                  Community-voted award, social media feature, and exclusive ORC merchandise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Register for the Challenge</h2>
            <p className="text-xl text-gray-300">
              Ready to showcase your skills? Join the ORC Builder Challenge today!
            </p>
          </div>

          {showSuccess ? (
            <div className="bg-gray-800/50 rounded-xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Registration Successful!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for registering! Check your email for confirmation and next steps.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Register Another Team
              </button>
            </div>
          ) : (
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {[...Array(totalSteps)].map((_, index) => (
                    <div key={index} className="flex-1 px-2">
                      <div
                        className={`h-2 rounded-full ${
                          index + 1 <= currentStep ? 'bg-blue-500' : 'bg-gray-700'
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center text-gray-400">
                  Step {currentStep} of {totalSteps}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white mb-6">Team Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Team Name *
                      </label>
                      <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="Enter your team name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Team Member Names *
                      </label>
                      <textarea
                        name="memberNames"
                        value={formData.memberNames}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="List all team members (one per line)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      >
                        <option value="">Select a category</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white mb-6">Contact & Project Details</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="team@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Repository URL
                      </label>
                      <input
                        type="url"
                        name="projectRepo"
                        value={formData.projectRepo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="https://github.com/yourteam/project"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Demo Video Link
                      </label>
                      <input
                        type="url"
                        name="videoLink"
                        value={formData.videoLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="https://youtube.com/watch?v=..."
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white mb-6">Additional Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your project idea or experience
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="Share your project concept, previous experience, or any questions you have..."
                      />
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-400 font-medium mb-2">What happens next?</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• You'll receive a confirmation email with challenge details</li>
                        <li>• Access to exclusive learning materials and resources</li>
                        <li>• Invitation to our Discord community for support</li>
                        <li>• Regular updates and milestone reminders</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      Previous
                    </button>
                  )}
                  
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ml-auto"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ml-auto flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        'Complete Registration'
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Resources & Support */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Resources & Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <FileText className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Course Materials</h3>
              <p className="text-gray-300 mb-4">Access Level 0-2 comprehensive learning materials</p>
              <a href="/courses" className="text-blue-400 hover:text-blue-300 flex items-center">
                View Courses <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <Video className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Tutorial Videos</h3>
              <p className="text-gray-300 mb-4">Step-by-step video guides for all skill levels</p>
              <a href="https://www.youtube.com/@OpenRobotCombat" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 flex items-center">
                Watch Now <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <Download className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Downloads</h3>
              <p className="text-gray-300 mb-4">CAD files, sample code, and project templates</p>
              <a href="/products" className="text-yellow-400 hover:text-yellow-300 flex items-center">
                Download <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Mentorship</h3>
              <p className="text-gray-300 mb-4">Weekly office hours and expert guidance</p>
              <a href="/contact" className="text-purple-400 hover:text-purple-300 flex items-center">
                Get Support <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Project Gallery</h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">{galleryImages[currentImageIndex].caption}</p>
              </div>
            </div>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-gray-700/50 transition-colors duration-200 rounded-xl"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 border-t border-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img 
                src="/header_logo.svg" 
                alt="ORC Logo" 
                className="h-8 w-auto"
              />
              <p className="text-gray-400">
                A Place for Builders
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/courses" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:challenge@openrobotcombat.com" className="hover:text-blue-500 transition-colors">
                    challenge@openrobotcombat.com
                  </a>
                </li>
                <li>Phone: +20 103 192 8810</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/openrobotcombat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@OpenRobotCombat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://discord.gg/openrobotcombat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ORC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BuilderChallenge;