import React, { useState } from 'react';
import { Check, Clock, Gift, Shield, User, Mail, Phone, MapPin, CreditCard, AlertCircle, Send } from 'lucide-react';
import SubscriptionSuccessPopup from './SubscriptionSuccessPopup';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  discount?: string;
  badge?: string;
  features: string[];
  popular?: boolean;
}

const SubscriptionForm = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('annual');
  
  // Check if user came from promotional banner
  const isFromPromoBanner = new URLSearchParams(window.location.search).get('promo') === 'banner';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    school: '',
    age: '',
    experience: '',
    goals: '',
    agreeToTerms: false,
    newsletter: true
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const plans: SubscriptionPlan[] = [
    {
      id: 'monthly',
      name: isFromPromoBanner ? 'Monthly + 6 FREE Months' : 'Monthly',
      price: '1,400 EGP',
      period: 'per month',
      discount: isFromPromoBanner ? '6 FREE Months from Promo!' : undefined,
      badge: isFromPromoBanner ? 'Promo Bonus' : undefined,
      features: [
        'Access to all robotics workshops',
        'Discord community access',
        'Technical support',
        'Monthly project challenges',
        'Resource downloads',
        'Certificate of completion',
        ...(isFromPromoBanner ? ['🎉 6 BONUS months absolutely FREE'] : [])
      ]
    },
    {
      id: 'quarterly',
      name: isFromPromoBanner ? 'Quarterly + 6 FREE Months' : 'Quarterly',
      price: '3,900 EGP',
      originalPrice: '4,200 EGP',
      period: 'per 3 months',
      discount: isFromPromoBanner ? 'Save 7% + 6 FREE Months!' : 'Save 7%',
      badge: isFromPromoBanner ? 'Promo Bonus' : 'Good Value',
      features: [
        'All Monthly features',
        'Quarterly intensive workshops',
        'Priority technical support',
        'Advanced project materials',
        'Quarterly progress reviews',
        'Extended certificate validity',
        ...(isFromPromoBanner ? ['🎉 6 BONUS months absolutely FREE'] : [])
      ]
    },
    {
      id: 'annual',
      name: isFromPromoBanner ? 'Annual + 6 FREE Months' : 'Annual + 3 FREE Months',
      price: '12,000 EGP',
      originalPrice: isFromPromoBanner ? '16,800 EGP' : '14,400 EGP',
      period: 'per year',
      discount: isFromPromoBanner ? 'Save 29% + 6 FREE Months!' : 'Save 17% + 3 FREE Months',
      badge: 'Best Value',
      popular: true,
      features: [
        'All Quarterly features',
        isFromPromoBanner ? '🎉 6 BONUS months absolutely FREE' : '🎁 3 BONUS months absolutely FREE',
        'Annual bootcamp access',
        'One-on-one mentorship sessions',
        'Competition entry privileges',
        'Lifetime alumni network access',
        'Advanced certification program'
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessPopup(true);
    }, 2000);
  };

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  return (
    <div className="min-h-screen bg-orc-black">
      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-orc-black to-gray-900/50 pt-24 pb-16 px-4">
        {/* Left Blue Spine */}
        <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="header-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
                <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
                <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#header-arrows)"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>
          
          <h1 className="font-montserrat font-extrabold text-4xl lg:text-6xl text-orc-white mb-6">
            Join <span className="text-orc-blue">ORC Community</span>
          </h1>
          <p className="font-aileron text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Start your robotics journey with Egypt's premier community
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>14-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift className="w-4 h-4 text-orange-400" />
              <span>
                {isFromPromoBanner 
                  ? '6 Months FREE with ANY Plan!' 
                  : '3 Months FREE with Annual Plan'
                }
              </span>
            </div>
          </div>
          
          {/* Promo Alert */}
          {isFromPromoBanner && (
            <div className="mt-6 max-w-md mx-auto bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2">
                <Gift className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-bold">
                  🎉 PROMO ACTIVE: 6 Months FREE on ANY Plan!
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Plan Selection */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-6">
                Choose Your Plan
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative cursor-pointer rounded-xl p-6 border-2 transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'border-orc-blue bg-orc-blue/10'
                        : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                    } ${plan.popular ? 'ring-2 ring-orc-blue/50' : ''}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.badge && (
                      <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold ${
                        plan.popular ? 'bg-orc-blue text-white' : 'bg-green-500 text-white'
                      }`}>
                        {plan.badge}
                      </div>
                    )}
                    
                    <div className="text-center space-y-3">
                      <h3 className="font-montserrat font-bold text-lg text-white">
                        {plan.name}
                      </h3>
                      
                      <div className="space-y-1">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="font-montserrat font-extrabold text-2xl text-orc-blue">
                            {plan.price}
                          </span>
                          {plan.originalPrice && (
                            <span className="text-gray-400 line-through text-sm">
                              {plan.originalPrice}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{plan.period}</p>
                        {plan.discount && (
                          <p className="text-green-400 text-sm font-medium">{plan.discount}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-left">
                        {plan.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-orc-blue flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                        {plan.features.length > 3 && (
                          <p className="text-gray-400 text-xs">
                            +{plan.features.length - 3} more features
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-6">
                Your Information
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orc-blue ${
                          errors.firstName ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="Enter your first name"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orc-blue ${
                          errors.lastName ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="Enter your last name"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orc-blue ${
                          errors.email ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orc-blue ${
                          errors.phone ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="+20 103 192 8810"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orc-blue ${
                        errors.age ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="18"
                      min="10"
                      max="99"
                    />
                    {errors.age && (
                      <p className="text-red-400 text-sm mt-1">{errors.age}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      School/University
                    </label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orc-blue"
                      placeholder="Your school or university"
                    />
                  </div>
                </div>

                {/* Experience and Goals */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Robotics Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orc-blue"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="some">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Goals & Expectations
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orc-blue"
                    placeholder="Tell us about your robotics goals and what you hope to achieve..."
                  />
                </div>

                {/* Agreement Checkboxes */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-orc-blue bg-gray-800 border-gray-700 rounded focus:ring-orc-blue"
                    />
                    <label htmlFor="terms" className="text-gray-300 text-sm">
                      I agree to the{' '}
                      <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-orc-blue hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-orc-blue hover:underline">
                        Privacy Policy
                      </a>
                      *
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>
                  )}
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-orc-blue bg-gray-800 border-gray-700 rounded focus:ring-orc-blue"
                    />
                    <label htmlFor="newsletter" className="text-gray-300 text-sm">
                      Subscribe to our newsletter for updates and robotics tips
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orc-blue to-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Submit Application</span>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 sticky top-8">
              <h3 className="font-montserrat font-bold text-xl text-white mb-6">
                Order Summary
              </h3>
              
              {selectedPlanData && (
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-white">{selectedPlanData.name}</h4>
                      <p className="text-gray-400 text-sm">{selectedPlanData.period}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orc-blue">{selectedPlanData.price}</p>
                      {selectedPlanData.originalPrice && (
                        <p className="text-gray-400 line-through text-sm">
                          {selectedPlanData.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {selectedPlanData.discount && (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Gift className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium text-sm">
                          {selectedPlanData.discount}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">Total</span>
                      <span className="font-bold text-xl text-orc-blue">
                        {selectedPlanData.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span>14-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Instant access after payment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Popup */}
      <SubscriptionSuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        selectedPlan={selectedPlanData?.name || 'Selected Plan'}
        userEmail={formData.email}
        isFromPromoBanner={isFromPromoBanner}
      />
    </div>
  );
};

export default SubscriptionForm; 