import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText, Users, ArrowRight } from 'lucide-react';
import { designClasses, SPACING } from '../../config/design';

const ReadyToBuild = () => {
  return (
    <section className={designClasses.section}>
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="ready-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ready-arrows)"/>
        </svg>
      </div>

      <div className={designClasses.sectionContainer}>
        {/* Section Header */}
        <div className={designClasses.sectionHeader}>
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          <h2 className={designClasses.sectionHeadline}>
            Ready to <span className="text-orc-blue">Build?</span>
          </h2>
          <p className={`${designClasses.leadText} max-w-4xl mx-auto`}>
            Let's get your lab, school, or idea equipped with the right robot.
          </p>
        </div>

        {/* CTA Cards */}
        <div className={`${designClasses.grid} md:grid-cols-3 mb-12`}>
          {/* Get a Quote */}
          <div className="relative bg-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center group hover:border-orc-blue/50 transition-all duration-300">
            {/* Blue Glow Effect */}
            <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Brand Accent Dot */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orc-blue group-hover:text-white transition-all duration-300">
                <FileText className="w-8 h-8 text-orc-blue group-hover:text-white" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-orc-white mb-4 group-hover:text-orc-blue transition-colors duration-300">
                Get a Quote
              </h3>
              <p className={`${designClasses.bodyText} text-gray-400 mb-6`}>
                Receive a detailed quote tailored to your specific requirements and budget.
              </p>
              <Link 
                to="/contact"
                className={`${designClasses.button} w-full justify-center`}
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Talk to Our Engineers */}
          <div className="relative bg-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center group hover:border-green-500/50 transition-all duration-300">
            {/* Green Glow Effect */}
            <div className="absolute -inset-1 bg-green-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Brand Accent Dot */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-green-500 group-hover:text-white" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-orc-white mb-4 group-hover:text-green-500 transition-colors duration-300">
                Talk to Our Engineers
              </h3>
              <p className={`${designClasses.bodyText} text-gray-400 mb-6`}>
                Get expert advice and technical guidance from our robotics engineers.
              </p>
              <Link 
                to="/contact"
                className={`${designClasses.buttonSecondary} w-full justify-center border-green-500 text-green-500 hover:bg-green-500 hover:text-white`}
              >
                <span>Talk to Our Engineers</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Bulk Orders for Schools */}
          <div className="relative bg-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center group hover:border-purple-500/50 transition-all duration-300">
            {/* Purple Glow Effect */}
            <div className="absolute -inset-1 bg-purple-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Brand Accent Dot */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Users className="w-8 h-8 text-purple-500 group-hover:text-white" />
              </div>
              <h3 className="font-montserrat font-extrabold text-xl text-orc-white mb-4 group-hover:text-purple-500 transition-colors duration-300">
                Bulk Orders for Schools
              </h3>
              <p className={`${designClasses.bodyText} text-gray-400 mb-6`}>
                Special pricing and support packages for educational institutions.
              </p>
              <Link 
                to="/contact"
                className={`${designClasses.buttonSecondary} w-full justify-center border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white`}
              >
                <span>Bulk Orders for Schools</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center">
          <p className={`${designClasses.bodyText} text-gray-400 mb-4`}>
            Need immediate assistance? Our support team is standing by.
          </p>
          <div className={`flex flex-wrap justify-center ${SPACING.gridGap} ${designClasses.bodyText}`}>
            <a 
              href="mailto:info@orc-egypt.com" 
              className="text-orc-blue hover:text-orc-blue/80 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>📧</span>
              <span>info@orc-egypt.com</span>
            </a>
            <a 
              href="tel:+201234567890" 
              className="text-orc-blue hover:text-orc-blue/80 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>📞</span>
              <span>+20 123 456 7890</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBuild; 