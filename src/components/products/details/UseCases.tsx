import React from 'react';
import { GraduationCap, FlaskConical, Users, Microscope } from 'lucide-react';
import { designClasses, SPACING } from '../../../config/design';

interface UseCase {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface UseCasesProps {
  productName: string;
}

const UseCases = ({ productName }: UseCasesProps) => {
  const useCases: UseCase[] = [
    {
      icon: GraduationCap,
      title: "STEM Labs",
      description: "Easily programmable and safe for students"
    },
    {
      icon: FlaskConical,
      title: "Prototyping",
      description: "Ideal for rapid indoor development"
    },
    {
      icon: Users,
      title: "Workshops & Hackathons",
      description: "Lightweight and wireless"
    },
    {
      icon: Microscope,
      title: "Research & Experiments",
      description: "Compatible with advanced sensors"
    }
  ];

  return (
    <section className={`${designClasses.section} ${SPACING.sectionPaddingY}`}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="usecases-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#usecases-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={designClasses.sectionHeader}>
          <h2 className={designClasses.sectionHeadline}>
            Where <span className="text-orc-blue">{productName}</span> Shines
          </h2>
          <p className={`${designClasses.leadText} max-w-3xl mx-auto`}>
            Discover the perfect applications for your robotics projects
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className={`${designClasses.grid} md:grid-cols-2 lg:grid-cols-4 ${SPACING.gridGap}`}>
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div 
                key={index}
                className={`${designClasses.card} text-center ${SPACING.cardPadding}`}
              >
                {/* Blue Glow Effect */}
                <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orc-blue group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-orc-blue group-hover:text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-orc-white mb-4 group-hover:text-orc-blue transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className={`${designClasses.bodyText} text-gray-300`}>
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases; 