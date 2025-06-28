import React from 'react';
import { FileText, BookOpen, Play, Github, Phone } from 'lucide-react';
import { designClasses, SPACING } from '../../../config/design';

interface Resource {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
}

interface ResourcesProps {
  productName: string;
}

const Resources = ({ productName }: ResourcesProps) => {
  const resources: Resource[] = [
    {
      icon: FileText,
      title: "PDF Datasheet",
      description: "Complete technical specifications",
      link: "#"
    },
    {
      icon: BookOpen,
      title: "Documentation Portal",
      description: "Comprehensive guides and tutorials",
      link: "#"
    },
    {
      icon: Play,
      title: "Setup Tutorial",
      description: "Step-by-step installation guide",
      link: "#"
    },
    {
      icon: Github,
      title: "Github Firmware Repo",
      description: "Open source firmware and examples",
      link: "#"
    },
    {
      icon: Phone,
      title: "Technical Support",
      description: "Get help from our experts",
      link: "#"
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
            <pattern id="resources-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#resources-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={designClasses.sectionHeader}>
          <h2 className={designClasses.sectionHeadline}>
            <span className="text-orc-blue">Resources</span> & Support
          </h2>
          <p className={`${designClasses.leadText} max-w-3xl mx-auto`}>
            Everything you need to succeed with {productName}
          </p>
        </div>

        {/* Resources Grid - responsive auto wrap */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${SPACING.gridGap}`}>
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <a
                key={resource.title}
                href={resource.link}
                className={`${designClasses.card} text-left group cursor-pointer`}
              >
                {/* Blue Glow Effect */}
                <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-orc-blue group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-orc-blue group-hover:text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-orc-white mb-4 group-hover:text-orc-blue transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className={`${designClasses.bodyText} text-gray-300`}>
                    {resource.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources; 