import React from 'react';
import { Users, Trophy, Clock, Star, CheckCircle, Zap, Shield, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of robotics experience"
  },
  {
    icon: Trophy,
    title: "Practical Projects",
    description: "Apply your knowledge through hands-on projects and real-world scenarios"
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with our flexible online learning platform"
  },
  {
    icon: Star,
    title: "Industry Recognition",
    description: "Earn certificates recognized by leading robotics companies"
  },
  {
    icon: CheckCircle,
    title: "Lifetime Access",
    description: "Get unlimited access to course materials and future updates"
  },
  {
    icon: Zap,
    title: "Live Sessions",
    description: "Interactive live sessions with instructors and fellow students"
  },
  {
    icon: Shield,
    title: "Career Support",
    description: "Get guidance on career paths and job opportunities"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Content",
    description: "Well-structured curriculum covering theory and practice"
  }
];

const WhyLearnWithUs = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full mb-4">
            Why Choose ORC?
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            The Best Place to Learn Robotics
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive robotics education with a focus on practical skills and industry relevance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <IconComponent className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyLearnWithUs;