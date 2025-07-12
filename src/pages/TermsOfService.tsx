import React from 'react';
import { Shield, Users, Book, AlertTriangle, Clock, Mail } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "January 2025";

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
              <pattern id="terms-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
                <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
                <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#terms-arrows)"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Brand Geometric Accent */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
            <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-orc-blue mr-4" />
            <h1 className="font-montserrat font-extrabold text-4xl lg:text-5xl text-orc-white">
              Terms of <span className="text-orc-blue">Service</span>
            </h1>
          </div>
          
          <p className="font-aileron text-xl text-gray-300 mb-4">
            ORC Robotics Community - Membership Terms & Conditions
          </p>
          <p className="font-aileron text-gray-400">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 space-y-8">
          
          {/* Quick Navigation */}
          <div className="bg-orc-blue/10 border border-orc-blue/30 rounded-lg p-6">
            <h3 className="font-montserrat font-bold text-lg text-white mb-4 flex items-center">
              <Book className="w-5 h-5 text-orc-blue mr-2" />
              Quick Navigation
            </h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <a href="#acceptance" className="text-orc-blue hover:underline">1. Acceptance of Terms</a>
              <a href="#membership" className="text-orc-blue hover:underline">2. Membership & Subscriptions</a>
              <a href="#community" className="text-orc-blue hover:underline">3. Community Guidelines</a>
              <a href="#payment" className="text-orc-blue hover:underline">4. Payment & Refunds</a>
              <a href="#content" className="text-orc-blue hover:underline">5. Content & Intellectual Property</a>
              <a href="#conduct" className="text-orc-blue hover:underline">6. User Conduct</a>
              <a href="#privacy" className="text-orc-blue hover:underline">7. Privacy & Data</a>
              <a href="#termination" className="text-orc-blue hover:underline">8. Termination</a>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-8 text-gray-300">
            
            {/* Section 1 */}
            <section id="acceptance">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                Acceptance of Terms
              </h2>
              <div className="space-y-4 pl-11">
                <p>
                  By accessing or using ORC (Open Robotics Community) services, including our website, workshops, Discord community, and any related materials, you agree to be bound by these Terms of Service ("Terms").
                </p>
                <p>
                  If you do not agree to these Terms, you may not access or use our services. These Terms apply to all users, including members, visitors, and participants in our programs.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="membership">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                Membership & Subscriptions
              </h2>
              <div className="space-y-4 pl-11">
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Subscription Plans</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Monthly Membership: 1,400 EGP per month</li>
                  <li>Quarterly Membership: 3,900 EGP per quarter (Save ~7%)</li>
                  <li>Annual Membership: 12,000 EGP per year (Save ~17% + 3 FREE months)</li>
                </ul>
                
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Membership Process</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Complete application form with accurate information</li>
                  <li>Pass interview assessment with our team</li>
                  <li>Join Discord community upon approval</li>
                  <li>Access workshops and resources immediately</li>
                </ol>
                
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Included Services</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to all robotics workshops and training sessions</li>
                  <li>Discord community access with 24/7 support</li>
                  <li>Premium project kits and materials</li>
                  <li>One-on-one mentorship sessions</li>
                  <li>Competition entry eligibility</li>
                  <li>Career guidance and networking opportunities</li>
                  <li>Certificate of completion</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="community">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                Community Guidelines
              </h2>
              <div className="space-y-4 pl-11">
                <p>
                  Our Discord community and workshops are designed to foster learning, collaboration, and innovation. All members must:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Treat all community members with respect and professionalism</li>
                  <li>Share knowledge and help fellow learners</li>
                  <li>Use appropriate language and maintain a positive environment</li>
                  <li>Respect intellectual property and project ownership</li>
                  <li>Follow workshop schedules and participation guidelines</li>
                  <li>Report any inappropriate behavior to moderators</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="payment">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
                Payment & Refunds
              </h2>
              <div className="space-y-4 pl-11">
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All subscription fees are due in advance</li>
                  <li>Payments are processed securely through our payment providers</li>
                  <li>Subscriptions auto-renew unless cancelled</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                </ul>
                
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Refund Policy</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>14-Day Money-Back Guarantee:</strong> Full refund within 14 days of initial payment</li>
                  <li>Refunds processed within 5-7 business days</li>
                  <li>Keep any downloaded resources even after refund</li>
                  <li>Promotional bonuses (free months) are non-refundable separately</li>
                  <li>No refunds for partial month usage after 14-day period</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="content">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">5</div>
                Content & Intellectual Property
              </h2>
              <div className="space-y-4 pl-11">
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">ORC Content</h3>
                <p>
                  All workshop materials, tutorials, project guides, and educational content provided by ORC are proprietary and protected by copyright. Members may:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use content for personal learning and projects</li>
                  <li>Share knowledge within the ORC community</li>
                  <li>Reference ORC materials with proper attribution</li>
                </ul>
                
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">User Content</h3>
                <p>
                  By sharing projects, code, or other content in our community, you grant ORC a non-exclusive license to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Display your content within the community</li>
                  <li>Use your projects as educational examples (with attribution)</li>
                  <li>Feature outstanding work in our promotional materials</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section id="conduct">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">6</div>
                User Conduct
              </h2>
              <div className="space-y-4 pl-11">
                <p>Users are prohibited from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sharing login credentials or account access</li>
                  <li>Distributing ORC proprietary content outside the community</li>
                  <li>Engaging in harassment, discrimination, or offensive behavior</li>
                  <li>Spamming or posting irrelevant commercial content</li>
                  <li>Attempting to hack, disrupt, or damage our systems</li>
                  <li>Creating multiple accounts to circumvent restrictions</li>
                </ul>
                
                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mt-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-montserrat font-semibold text-yellow-500 mb-2">Violation Consequences</h4>
                      <p className="text-gray-300 text-sm">
                        Violations may result in warnings, temporary suspension, or permanent account termination without refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="privacy">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">7</div>
                Privacy & Data Protection
              </h2>
              <div className="space-y-4 pl-11">
                <p>
                  We collect and process personal information as outlined in our Privacy Policy. Key points:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal information is used only for membership management and service delivery</li>
                  <li>We never sell or share your data with third parties for marketing</li>
                  <li>You can request data deletion upon account termination</li>
                  <li>Communication data (Discord messages) may be monitored for community safety</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section id="termination">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">8</div>
                Termination
              </h2>
              <div className="space-y-4 pl-11">
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Cancellation by User</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancel anytime through your account settings or by contacting support</li>
                  <li>Access continues until the end of your current billing period</li>
                  <li>No partial refunds for unused time (except 14-day guarantee)</li>
                </ul>
                
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Termination by ORC</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may terminate accounts for Terms violations</li>
                  <li>30-day notice for service discontinuation (except for violations)</li>
                  <li>Immediate termination for serious violations or illegal activity</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Contact Information */}
          <div className="bg-orc-blue/10 border border-orc-blue/30 rounded-lg p-6 mt-8">
            <h3 className="font-montserrat font-bold text-lg text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 text-orc-blue mr-2" />
              Questions About These Terms?
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email: <span className="text-orc-blue">legal@orc.com</span></li>
                <li>Phone: <span className="text-orc-blue">+20 123 456 7890</span></li>
                <li>Address: ORC Headquarters, Cairo, Egypt</li>
              </ul>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-gray-800">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="font-aileron text-sm">
                Last updated: {lastUpdated} | Effective immediately upon posting
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 