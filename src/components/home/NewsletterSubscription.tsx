import React, { useState } from 'react';
import { Mail, CheckCircle, Users, Gift, Bell } from 'lucide-react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15),transparent_50%)]"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.4
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
          
          {/* Main Container */}
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-6">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Latest Courses & Offers
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join our community and be the first to know about new courses, exclusive discounts, and robotics industry insights.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center md:justify-start">
                <Gift className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">10% off your first course</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Bell className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Early access to new courses</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Users className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Exclusive community access</span>
              </div>
            </div>

            {/* Subscription Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Subscribing...
                      </div>
                    ) : (
                      'Subscribe Now'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-2xl mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-300">
                  Welcome to our community! Check your email for your 10% discount code.
                </p>
              </div>
            )}

            {/* Social Proof */}
            <div className="text-center mt-8">
              <div className="flex items-center justify-center text-gray-400 text-sm">
                <Users className="w-4 h-4 mr-2" />
                <span>Join 10,000+ subscribers already learning with us</span>
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-center text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;