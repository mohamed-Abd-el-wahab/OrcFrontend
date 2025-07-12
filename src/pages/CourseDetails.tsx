import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Phone, MapIcon as WhatsappIcon } from 'lucide-react';

const courses = [
  {
    id: 'intro-robotics',
    title: "Introduction to Robotics",
    description: "Perfect starting point for beginners. Learn fundamental concepts, basic electronics, and programming.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    duration: "200+ Hours",
    level: "Beginner",
    startDate: "2025-04-14",
    isAvailable: true,
    features: [
      "14+ Interactive Workshops",
      "6 Weeks",
      "9+ Tasks",
      "4 Projects",
      "Employability Impact",
      "English & Arabic Support"
    ],
    modules: [
      {
        title: "Robotics Live Sessions",
        description: "Interactive live sessions covering robotics fundamentals",
        topics: [
          "Introduction to Robot Components",
          "Basic Electronics and Circuits",
          "Safety Protocols and Best Practices",
          "Robot Control Systems Overview"
        ],
        expanded: true
      },
      {
        title: "Robot Foundation",
        description: "Core concepts and basic robot building",
        topics: [
          "Mechanical Design Principles",
          "Sensor Integration",
          "Motor Control Systems",
          "Power Management"
        ],
        expanded: false
      },
      {
        title: "The Programming Journey",
        description: "Learn to program and control your robot",
        topics: [
          "Introduction to Arduino",
          "Basic Programming Concepts",
          "Sensor Data Processing",
          "Motor Control Programming"
        ],
        expanded: false
      }
    ]
  },
  {
    id: 'combat-robotics',
    title: "Combat Robotics Masterclass",
    description: "Advanced course covering combat robot design, weapon systems, and competition strategies.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c2f54?auto=format&fit=crop&q=80&w=800",
    duration: "300+ Hours",
    level: "Advanced",
    startDate: "2025-05-01",
    isAvailable: false,
    features: [
      "20+ Interactive Workshops",
      "12 Weeks",
      "15+ Tasks",
      "6 Projects",
      "Competition Ready",
      "Industry Mentorship"
    ],
    modules: [
      {
        title: "Combat Robot Design",
        description: "Learn advanced combat robot design principles",
        topics: [
          "Structural Analysis",
          "Material Selection",
          "CAD Design Fundamentals",
          "Weight Distribution"
        ],
        expanded: true
      },
      {
        title: "Weapon Systems",
        description: "Design and implementation of various weapon systems",
        topics: [
          "Weapon Types Overview",
          "Power Systems",
          "Safety Mechanisms",
          "Weapon Control Systems"
        ],
        expanded: false
      },
      {
        title: "Competition Strategy",
        description: "Learn effective competition strategies",
        topics: [
          "Tournament Preparation",
          "Match Analysis",
          "Tactical Planning",
          "Maintenance and Repairs"
        ],
        expanded: false
      }
    ]
  },
  {
    id: 'embedded-systems',
    title: "Embedded Systems Bootcamp",
    description: "Comprehensive training in embedded systems programming and hardware integration.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
    duration: "250+ Hours",
    level: "Intermediate",
    startDate: "2025-06-15",
    isAvailable: true,
    features: [
      "16+ Interactive Workshops",
      "8 Weeks",
      "12+ Tasks",
      "5 Projects",
      "Hardware Kit Included",
      "Career Support"
    ],
    modules: [
      {
        title: "Embedded Systems Fundamentals",
        description: "Core concepts of embedded systems",
        topics: [
          "Microcontroller Architecture",
          "Development Environment Setup",
          "Basic Input/Output",
          "Interrupts and Timers"
        ],
        expanded: true
      },
      {
        title: "Hardware Integration",
        description: "Working with various hardware components",
        topics: [
          "Sensor Interfacing",
          "Communication Protocols",
          "Motor Control",
          "Display Systems"
        ],
        expanded: false
      },
      {
        title: "Real-time Systems",
        description: "Real-time operating systems and applications",
        topics: [
          "RTOS Fundamentals",
          "Task Management",
          "Inter-task Communication",
          "Resource Management"
        ],
        expanded: false
      }
    ]
  }
];

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = React.useState(0);
  const [showNotifyForm, setShowNotifyForm] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  
  const course = courses.find(c => c.id === courseId);

  const handleApply = () => {
    // Direct WhatsApp link with pre-filled message
    const message = `Hi, I'm interested in applying for the ${course?.title} course.`;
    const whatsappUrl = `https://wa.me/+201031928810?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log('Notification requested for:', email);
    alert('Thank you! We will notify you when the course becomes available.');
    setShowNotifyForm(false);
    setEmail('');
  };

  const handlePhoneRequest = () => {
    // Open WhatsApp with a different message for callback request
    const message = `Hi, I would like to request a phone call about the ${course?.title} course.`;
    const whatsappUrl = `https://wa.me/+201031928810?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Course not found</h2>
          <button
            onClick={() => navigate('/courses')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/courses')}
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Courses
          </button>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{course.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{course.description}</p>
            
            <div className="flex items-center space-x-4 mb-8">
              <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                {course.level}
              </span>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <span>Start on: {course.startDate}</span>
              </div>
              <span className={`px-3 py-1 ${course.isAvailable ? 'bg-green-500' : 'bg-yellow-500'} text-white text-sm font-medium rounded-full`}>
                {course.isAvailable ? 'Available' : 'Coming Soon'}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {course.isAvailable ? (
                <>
                  <button 
                    onClick={handleApply}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 text-lg font-medium"
                  >
                    Apply Now
                  </button>
                  <a
                    href={`https://wa.me/+201031928810?text=${encodeURIComponent(`Hi, I'm interested in the ${course.title} course.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-transparent border border-green-500/50 text-white rounded-lg hover:bg-green-500/10 transition-all duration-300 text-lg font-medium"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setShowNotifyForm(true)}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-lg font-medium"
                  >
                    Notify once available!
                  </button>
                  <button 
                    onClick={handlePhoneRequest}
                    className="inline-flex items-center px-8 py-4 bg-transparent border border-blue-500/50 text-white rounded-lg hover:bg-blue-500/10 transition-all duration-300 text-lg font-medium group"
                  >
                    <Phone className="w-5 h-5 mr-2 text-blue-500 group-hover:text-blue-400" />
                    Request a phone call
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Programs Details</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Course Modules */}
            <div className="lg:col-span-2 space-y-4">
              {course.modules.map((module, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedModule(expandedModule === index ? -1 : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <span className="font-medium">{module.title}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-200 ${
                        expandedModule === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedModule === index && (
                    <div className="px-6 py-4 border-t border-gray-700">
                      <p className="text-gray-300 mb-4">{module.description}</p>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Course Features */}
            <div className="space-y-4">
              {course.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] mix-blend-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl font-bold text-white">Ready for your future?</h3>
          {course.isAvailable ? (
            <button 
              onClick={handleApply}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium"
            >
              Apply Now
            </button>
          ) : (
            <button 
              onClick={() => setShowNotifyForm(true)}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium"
            >
              Notify once available!
            </button>
          )}
        </div>
      </div>

      {/* Notification Form Modal */}
      {showNotifyForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Get Notified</h3>
            <form onSubmit={handleNotifySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowNotifyForm(false)}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;