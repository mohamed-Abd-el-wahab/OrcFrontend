import React, { useState } from 'react';
import { ArrowRight, Users, CreditCard, MessageCircle, Wrench, X, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);

  const steps = [
    {
      step: 1,
      title: "Subscribe",
      description: "Fill out our simple form and pick the plan that works best for you",
      icon: CreditCard,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Pass the interview",
      description: "Complete a brief interview to ensure you're ready to join our community",
      icon: CheckCircle,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 3,
      title: "Join Discord & pick your channel",
      description: "Connect with the community and choose your specialty areas",
      icon: MessageCircle,
      color: "from-green-500 to-green-600"
    },
    {
      step: 4,
      title: "Start building and collaborate",
      description: "Begin your robotics journey with hands-on projects and mentorship",
      icon: Wrench,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const subscriptionPlans = [
    {
      name: "Monthly",
      price: "1,400 EGP",
      period: "month",
      originalPrice: null,
      savings: null,
      features: [
        "Full access to all workshops",
        "Discord community access",
        "Premium project kits",
        "One-on-one mentorship",
        "Competition entry eligibility",
        "Career guidance & networking",
        "Industry networking events",
        "Priority support access"
      ]
    },
    {
      name: "Quarterly",
      price: "3,900 EGP",
      period: "quarter",
      originalPrice: "4,200 EGP",
      savings: "Save ~7%",
      features: [
        "Full access to all workshops",
        "Discord community access",
        "Premium project kits",
        "One-on-one mentorship",
        "Competition entry eligibility",
        "Career guidance & networking",
        "Industry networking events",
        "Priority support access"
      ],
      popular: true
    },
    {
      name: "Annual",
      price: "12,000 EGP",
      period: "year",
      originalPrice: "14,400 EGP",
      savings: "Save ~17% (3 months free)",
      features: [
        "Full access to all workshops",
        "Discord community access",
        "Premium project kits",
        "One-on-one mentorship",
        "Competition entry eligibility",
        "Career guidance & networking",
        "Industry networking events",
        "Priority support access"
      ]
    }
  ];

  const openTermsModal = () => {
    setShowTermsModal(true);
  };

  const closeTermsModal = () => {
    setShowTermsModal(false);
  };

  return (
    <section className="relative bg-orc-black overflow-hidden py-20 md:py-24">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="how-it-works-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#how-it-works-arrows)"/>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-16">
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>

          <h2 className="font-montserrat font-extrabold text-4xl lg:text-6xl leading-tight text-orc-white">
            How It{' '}
            <span className="text-orc-blue">Works</span>
          </h2>
          
          <p className="font-aileron text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Join our community in 4 simple steps and start building the future of robotics.
          </p>
        </div>

        {/* Steps Process */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-gray-900/40 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-orc-blue/50 transition-all duration-500 hover:scale-105">
                {/* Blue Glow Effect */}
                <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orc-blue rounded-full flex items-center justify-center text-white font-montserrat font-bold text-lg">
                  {step.step}
                </div>
                
                {/* Brand Accent Dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full"></div>
                
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-orc-blue/20 rounded-full flex items-center justify-center text-orc-blue group-hover:bg-orc-blue group-hover:text-white transition-all duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-montserrat font-bold text-xl text-orc-white group-hover:text-orc-blue transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="font-aileron text-gray-300 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-30">
                  <ArrowRight className="w-8 h-8 text-orc-blue" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Subscription Plans */}
        <div className="mb-16">
          <h3 className="text-center font-montserrat font-bold text-3xl text-orc-white mb-4">
            Choose Your <span className="text-orc-blue">Subscription</span>
          </h3>
          <p className="text-center font-aileron text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            One membership, full access to everything. Choose the payment plan that works best for you.
          </p>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {subscriptionPlans.map((plan, index) => (
              <div key={index} className={`relative group ${plan.popular ? 'scale-105 md:scale-110' : ''}`}>
                <div className="relative bg-gray-900/40 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-orc-blue/50 transition-all duration-500">
                  {/* Blue Glow Effect */}
                  <div className="absolute -inset-1 bg-orc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orc-blue to-purple-600 text-white px-6 py-2 rounded-full text-sm font-montserrat font-bold shadow-lg">
                      🏆 Most Popular
                    </div>
                  )}
                  
                  {/* Brand Accent Dot */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
                  
                  <div className="relative text-center space-y-4">
                    {/* Plan Name */}
                    <h4 className="font-montserrat font-bold text-xl text-orc-white">
                      {plan.name}
                    </h4>
                    
                    {/* Savings Badge */}
                    {plan.savings && (
                      <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                        💰 {plan.savings}
                      </div>
                    )}
                    
                    {/* Price */}
                    <div className="py-4">
                      {plan.originalPrice && (
                        <div className="text-gray-500 line-through text-sm font-aileron mb-1">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="font-montserrat font-extrabold text-3xl text-orc-blue">
                        {plan.price}
                      </div>
                      <div className="font-aileron text-gray-400 text-sm">
                        per {plan.period}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full bg-orc-blue text-white px-6 py-3 rounded-xl font-montserrat font-semibold hover:bg-orc-blue/90 hover:scale-105 transition-all duration-300 shadow-lg">
                      Choose {plan.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What's Included Section */}
          <div className="bg-gray-900/30 rounded-3xl p-8 border border-gray-800">
            <h4 className="text-center font-montserrat font-bold text-2xl text-orc-white mb-8">
              What's Included in <span className="text-orc-blue">Every</span> Subscription
            </h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subscriptionPlans[0].features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-orc-blue/20 rounded-full flex items-center justify-center group-hover:bg-orc-blue/30 transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-orc-blue" />
                  </div>
                  <span className="font-aileron text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* International Pricing Note */}
          <div className="text-center mt-8 p-4 bg-gradient-to-r from-orc-blue/10 to-purple-600/10 rounded-xl border border-orc-blue/20">
            <p className="font-aileron text-gray-300 text-sm">
              <span className="font-semibold text-orc-blue">🌍 International members:</span> Approximate pricing ≈ 28 USD monthly or 105 AED monthly
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="text-center space-y-6 bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
          <h3 className="font-montserrat font-bold text-2xl text-orc-white">
            Requirements
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-orc-blue" />
              <span className="font-aileron text-gray-300">Age 16+</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-orc-blue" />
              <span className="font-aileron text-gray-300">English proficiency</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-orc-blue" />
              <span className="font-aileron text-gray-300">Commitment to learning</span>
            </div>
          </div>
          
          <div className="pt-4">
            <button 
              onClick={openTermsModal}
              className="text-orc-blue font-aileron hover:text-white transition-colors duration-300 underline"
            >
              View full Terms and Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative bg-gray-900 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <h3 className="font-montserrat font-bold text-2xl text-orc-white">
                  Terms and Conditions
                </h3>
                <button
                  onClick={closeTermsModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-4 text-gray-300 font-aileron">
                <h4 className="font-montserrat font-bold text-orc-white">Membership Requirements</h4>
                <ul className="space-y-2 pl-4">
                  <li>• Minimum age of 16 years</li>
                  <li>• Intermediate English proficiency required</li>
                  <li>• Commitment to attend at least 80% of workshops</li>
                  <li>• Respectful behavior towards community members</li>
                </ul>
                
                <h4 className="font-montserrat font-bold text-orc-white">Payment Terms</h4>
                <ul className="space-y-2 pl-4">
                  <li>• Subscription fee due at start of each billing period</li>
                  <li>• 14-day money-back guarantee for first-time members</li>
                  <li>• No refunds after 14 days of membership start</li>
                  <li>• Payment plans available for students with valid ID</li>
                </ul>
                
                <h4 className="font-montserrat font-bold text-orc-white">Community Guidelines</h4>
                <ul className="space-y-2 pl-4">
                  <li>• No harassment, bullying, or discriminatory behavior</li>
                  <li>• Respect intellectual property and project ownership</li>
                  <li>• Share knowledge and help fellow members</li>
                  <li>• Follow safety protocols in all workshops</li>
                </ul>
                
                <h4 className="font-montserrat font-bold text-orc-white">Cancellation Policy</h4>
                <ul className="space-y-2 pl-4">
                  <li>• 30-day notice required for membership cancellation</li>
                  <li>• No refund for partial quarters</li>
                  <li>• Access continues until end of paid period</li>
                  <li>• Re-joining requires new membership application</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks; 