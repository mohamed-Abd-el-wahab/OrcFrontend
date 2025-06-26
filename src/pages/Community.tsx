import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronDown, 
  ChevronLeft, 
  Users, 
  Wrench, 
  Calendar, 
  BookOpen, 
  Briefcase, 
  ShoppingCart,
  Clock,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';

// Types
interface FAQItem {
  question: string;
  answer: string;
}

interface SuccessStory {
  id: number;
  name: string;
  level: string;
  achievement: string;
  quote: string;
  image: string;
}

interface JoinStep {
  step: number;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
}

const Community = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [joinSteps, setJoinSteps] = useState<JoinStep[]>([
    { step: 1, title: "Application", description: "Complete your profile", isActive: true, isCompleted: false },
    { step: 2, title: "Review", description: "24-hour evaluation", isActive: false, isCompleted: false },
    { step: 3, title: "Payment", description: "Secure checkout", isActive: false, isCompleted: false }
  ]);

  // Scroll tracking for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowStickyCTA(scrollPercent > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play success stories
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Benefits data
  const benefits = [
    {
      icon: Users,
      title: "Direct Access",
      description: "Connect directly with industry professionals and mentors",
      blurb: "Get personalized guidance from robotics experts and accelerate your learning journey with one-on-one mentorship opportunities."
    },
    {
      icon: Wrench,
      title: "Hands-On Projects",
      description: "Build real robots with cutting-edge technology",
      blurb: "Work on actual robotics projects using professional-grade equipment and tools in our state-of-the-art facilities."
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Access to workshops, competitions, and networking",
      blurb: "Attend member-only events including advanced workshops, competition previews, and networking sessions with industry leaders."
    },
    {
      icon: BookOpen,
      title: "Learning Path",
      description: "Structured curriculum from beginner to advanced",
      blurb: "Follow our proven learning pathway designed by experts to take you from robotics novice to competition-ready builder."
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Job placement assistance and internships",
      blurb: "Access exclusive job opportunities, internship programs, and career guidance to launch your robotics career."
    },
    {
      icon: ShoppingCart,
      title: "Kit Discounts",
      description: "Special pricing on robotics components and kits",
      blurb: "Save up to 30% on robotics parts, kits, and equipment through our exclusive member discount program."
    }
  ];

  // Level journey data
  const levelJourney = [
    {
      level: "Level 0",
      title: "Foundation",
      benefit: "Master basic electronics and programming fundamentals",
      color: "from-green-500 to-green-600"
    },
    {
      level: "Level 1",
      title: "Builder",
      benefit: "Create your first autonomous robot with sensors",
      color: "from-blue-500 to-blue-600"
    },
    {
      level: "Level 2",
      title: "Advanced",
      benefit: "Develop complex AI-powered robotic systems",
      color: "from-purple-500 to-purple-600"
    },
    {
      level: "Pro Projects",
      title: "Expert",
      benefit: "Lead real-world robotics projects and competitions",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Success stories data
  const successStories: SuccessStory[] = [
    {
      id: 1,
      name: "Ahmed Hassan",
      level: "Level 2 Graduate",
      achievement: "Won National Robotics Championship",
      quote: "ORC transformed my passion into expertise. The hands-on approach and mentorship helped me win the national championship.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      name: "Fatima Al-Zahra",
      level: "Pro Projects Member",
      achievement: "Landed internship at Tesla",
      quote: "The career opportunities through ORC are incredible. I'm now interning at Tesla thanks to the connections I made here.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      name: "Omar Mahmoud",
      level: "Level 1 Graduate",
      achievement: "Started robotics startup",
      quote: "ORC gave me the confidence and skills to start my own robotics company. The community support is unmatched.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  // FAQ data
  const faqData: FAQItem[] = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and installment plans. Payment is processed securely through Stripe."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 14-day money-back guarantee. If you're not satisfied within the first two weeks, we'll provide a full refund."
    },
    {
      question: "How much time commitment is required?",
      answer: "We recommend 8-12 hours per week for optimal progress. This includes workshops, project work, and self-study time."
    },
    {
      question: "Do you offer sponsorship opportunities?",
      answer: "Yes! We have scholarship programs for exceptional students and partnerships with companies for sponsored memberships."
    },
    {
      question: "Is English proficiency required?",
      answer: "Yes, all courses and materials are in English. We recommend intermediate English level for full participation."
    },
    {
      question: "What equipment do I need?",
      answer: "Basic laptop required. All robotics equipment and tools are provided in our labs. Members get discounts on personal kits."
    }
  ];

  // Partners data
  const partners = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "RoboTech", logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "FutureLabs", logo: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "InnovateCorp", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&h=100&q=80" }
  ];

  const handleJoinNow = () => {
    // Track analytics event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Join Now Button'
      });
    }
    
    // Simulate form progression
    setJoinSteps(prev => prev.map((step, index) => 
      index === 0 ? { ...step, isActive: false, isCompleted: true } : 
      index === 1 ? { ...step, isActive: true } : step
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Aileron',sans-serif]">
      {/* Sticky CTA */}
      {showStickyCTA && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0000F2] py-3 px-4 shadow-lg animate-slide-down">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-white font-medium">Ready to join Egypt's leading robotics community?</span>
            <button 
              onClick={handleJoinNow}
              className="bg-white text-[#0000F2] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}

      {/* A. Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070"
            alt="Students working on robotics projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0000F2] opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-['Montserrat',sans-serif] font-bold mb-6 leading-tight">
            Build the Future—Together.
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto">
            Join Egypt's fastest-growing robotics community and level-up your skills.
          </p>
          <button 
            onClick={handleJoinNow}
            className="bg-white text-[#0000F2] px-12 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* B. Why Join ORC? */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold text-center mb-16">
            Why Join ORC?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#0000F2] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-['Montserrat',sans-serif] font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-gray-400">{benefit.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. Level Journey Timeline */}
      <section className="py-16 md:py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold text-center mb-16">
            Your Learning Journey
          </h2>
          
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 h-1 bg-[#0000F2] -translate-y-1/2 w-full transform origin-left scale-x-0 animate-pulse"></div>
              
              {levelJourney.map((level, index) => (
                <div key={index} className="relative z-10 text-center max-w-xs">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] font-semibold text-lg mb-2">{level.level}</h3>
                  <h4 className="text-[#0000F2] font-medium mb-2">{level.title}</h4>
                  <p className="text-sm text-gray-400">{level.benefit}</p>
                </div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {levelJourney.map((level, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-['Montserrat',sans-serif] font-semibold text-lg">{level.level}</h3>
                    <h4 className="text-[#0000F2] font-medium mb-2">{level.title}</h4>
                    <p className="text-sm text-gray-400">{level.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D. Membership Details */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold text-center mb-16">
            Membership Details
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="text-8xl md:text-9xl font-['Montserrat',sans-serif] font-bold text-[#0000F2] mb-4">
                5K
              </div>
              <div className="text-2xl text-gray-300 mb-2">EGP / 3 months</div>
              <div className="text-lg text-gray-400">Investment in your future</div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-[#0000F2] flex-shrink-0" />
                <span className="text-lg">Age 16+ required</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-[#0000F2] flex-shrink-0" />
                <span className="text-lg">English proficiency needed</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-[#0000F2] flex-shrink-0" />
                <span className="text-lg">Active participation expected</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-[#0000F2] flex-shrink-0" />
                <span className="text-lg">Access to all facilities and events</span>
              </div>
              
              <button 
                onClick={() => setShowTermsModal(true)}
                className="text-[#0000F2] hover:underline text-sm"
              >
                Read full Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* E. Success Stories */}
      <section className="py-16 md:py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold text-center mb-16">
            Success Stories
          </h2>
          
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={successStories[currentStoryIndex].image}
                    alt={successStories[currentStoryIndex].name}
                    className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-xl md:text-2xl text-gray-200 mb-6 italic">
                    "{successStories[currentStoryIndex].quote}"
                  </blockquote>
                  <div>
                    <div className="font-['Montserrat',sans-serif] font-semibold text-lg">
                      {successStories[currentStoryIndex].name}
                    </div>
                    <div className="text-[#0000F2] font-medium">
                      {successStories[currentStoryIndex].level}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {successStories[currentStoryIndex].achievement}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length)}
                className="p-2 bg-gray-700 rounded-full hover:bg-[#0000F2] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentStoryIndex((prev) => (prev + 1) % successStories.length)}
                className="p-2 bg-gray-700 rounded-full hover:bg-[#0000F2] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStoryIndex ? 'bg-[#0000F2]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* F. Join Form */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold text-center mb-16">
            Join ORC Today
          </h2>
          
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {joinSteps.map((step, index) => (
                <React.Fragment key={step.step}>
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                      step.isCompleted ? 'bg-green-500' : 
                      step.isActive ? 'bg-[#0000F2]' : 'bg-gray-600'
                    }`}>
                      {step.isCompleted ? <CheckCircle className="w-6 h-6" /> : step.step}
                    </div>
                    <div className="text-sm mt-2 text-center">
                      <div className="font-medium">{step.title}</div>
                      <div className="text-gray-400 text-xs">{step.description}</div>
                    </div>
                  </div>
                  {index < joinSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Form Embed Placeholder */}
          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <Users className="w-16 h-16 text-[#0000F2] mx-auto mb-4" />
              <h3 className="text-2xl font-['Montserrat',sans-serif] font-semibold mb-2">Ready to Start?</h3>
              <p className="text-gray-400">Complete your application to join ORC</p>
            </div>
            
            {/* Typeform Embed Placeholder */}
            <div className="bg-gray-800 rounded-lg p-8 mb-6">
              <p className="text-gray-400 mb-4">Typeform embed will be placed here</p>
              <p className="text-sm text-gray-500">Integration ID: XYZ</p>
            </div>
            
            <button 
              onClick={handleJoinNow}
              className="bg-[#0000F2] text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Application
            </button>
          </div>
        </div>
      </section>

      {/* G. FAQ Accordion */}
      <section className="py-16 md:py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                >
                  <span className="font-['Montserrat',sans-serif] font-medium text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 border-t border-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H. Partners & Sponsors */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold text-center mb-16">
            Our Partners
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I. Bottom CTA Banner */}
      <section className="py-16 md:py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold mb-8">
            Ready to build the next generation of robots?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of students who are already shaping the future of robotics in Egypt.
          </p>
          <button 
            onClick={handleJoinNow}
            className="bg-[#0000F2] text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl glow-effect"
          >
            Join ORC
          </button>
        </div>
      </section>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700 flex items-center justify-between">
              <h3 className="text-2xl font-['Montserrat',sans-serif] font-bold">Terms & Conditions</h3>
              <button 
                onClick={() => setShowTermsModal(false)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-gray-300">
              <h4 className="font-semibold text-white">Membership Requirements</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Minimum age of 16 years</li>
                <li>Intermediate English proficiency</li>
                <li>Commitment to active participation</li>
                <li>Respect for community guidelines</li>
              </ul>
              
              <h4 className="font-semibold text-white">Payment Terms</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Membership fee: 5,000 EGP per 3-month period</li>
                <li>Payment due upon acceptance</li>
                <li>14-day money-back guarantee</li>
                <li>No refunds after 14 days</li>
              </ul>
              
              <h4 className="font-semibold text-white">Community Guidelines</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Respectful behavior towards all members</li>
                <li>No sharing of proprietary information</li>
                <li>Active participation in community events</li>
                <li>Compliance with safety protocols</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;