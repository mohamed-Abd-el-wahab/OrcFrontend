import React from 'react';
import { Shield, Eye, Lock, Database, Users, Mail, Clock, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
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
              <pattern id="privacy-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
                <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
                <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#privacy-arrows)"/>
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
            <Lock className="w-12 h-12 text-orc-blue mr-4" />
            <h1 className="font-montserrat font-extrabold text-4xl lg:text-5xl text-orc-white">
              Privacy <span className="text-orc-blue">Policy</span>
            </h1>
          </div>
          
          <p className="font-aileron text-xl text-gray-300 mb-4">
            How ORC Protects and Uses Your Personal Information
          </p>
          <p className="font-aileron text-gray-400">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 space-y-8">
          
          {/* Privacy Promise */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-montserrat font-bold text-xl text-white mb-3">Our Privacy Promise</h2>
                <p className="text-gray-300 leading-relaxed">
                  At ORC (Open Robotics Community), we are committed to protecting your privacy and personal information. 
                  We collect only what we need to provide excellent robotics education and community services, 
                  and we never sell your data to third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-gray-300">
            
            {/* Section 1: Information We Collect */}
            <section>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                Information We Collect
              </h2>
              <div className="space-y-4 pl-11">
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Personal Information
                </h3>
                <p>When you register for ORC membership, we collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number</li>
                  <li><strong>Demographics:</strong> Age, location (city/country)</li>
                  <li><strong>Educational Background:</strong> School/university, experience level</li>
                  <li><strong>Goals:</strong> Your robotics learning objectives and expectations</li>
                  <li><strong>Payment Information:</strong> Billing details (processed securely by payment providers)</li>
                </ul>
                
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Automatic Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Website Usage:</strong> Pages visited, time spent, browser information</li>
                  <li><strong>Discord Activity:</strong> Messages, participation in channels, voice chat usage</li>
                  <li><strong>Workshop Attendance:</strong> Session participation, project submissions</li>
                  <li><strong>Technical Data:</strong> IP address, device type, operating system</li>
                </ul>
              </div>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                How We Use Your Information
              </h2>
              <div className="space-y-4 pl-11">
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Service Delivery</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Manage your membership and subscription</li>
                  <li>Provide access to workshops, Discord, and educational materials</li>
                  <li>Schedule interviews and mentorship sessions</li>
                  <li>Send important service updates and notifications</li>
                  <li>Issue certificates and track progress</li>
                </ul>
                
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Communication</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Send welcome messages and onboarding information</li>
                  <li>Provide technical support and customer service</li>
                  <li>Share workshop schedules and community updates</li>
                  <li>Send optional newsletters (you can unsubscribe anytime)</li>
                </ul>
                
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Improvement & Analytics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analyze website and platform usage to improve services</li>
                  <li>Understand learning preferences to enhance curriculum</li>
                  <li>Monitor community health and engagement</li>
                  <li>Develop new features and educational content</li>
                </ul>
              </div>
            </section>

            {/* Section 3: Information Sharing */}
            <section>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                Information Sharing & Disclosure
              </h2>
              <div className="space-y-4 pl-11">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="font-montserrat font-semibold text-lg text-red-400 mb-2">We DO NOT Sell Your Data</h3>
                  <p className="text-gray-300">
                    ORC never sells, rents, or trades your personal information to third parties for marketing purposes.
                  </p>
                </div>
                
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Limited Sharing</h3>
                <p>We may share information only in these specific cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Payment processors, email services, hosting providers (under strict contracts)</li>
                  <li><strong>Community Features:</strong> Your name and projects may be visible to other members in Discord</li>
                  <li><strong>Legal Requirements:</strong> If required by law or to protect rights and safety</li>
                  <li><strong>Business Transfer:</strong> In case of merger or acquisition (with notice to users)</li>
                </ul>
              </div>
            </section>

            {/* Section 4: Data Security */}
            <section>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
                Data Security & Protection
              </h2>
              <div className="space-y-4 pl-11">
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Security Measures</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encryption:</strong> All data transmitted using SSL/TLS encryption</li>
                  <li><strong>Secure Storage:</strong> Personal data stored on protected servers</li>
                  <li><strong>Access Controls:</strong> Limited access to authorized personnel only</li>
                  <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                  <li><strong>Payment Security:</strong> PCI-compliant payment processing</li>
                </ul>
                
                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-montserrat font-semibold text-yellow-500 mb-2">Data Breach Protocol</h4>
                      <p className="text-gray-300 text-sm">
                        In the unlikely event of a data breach, we will notify affected users within 72 hours 
                        and provide details about the incident and our response measures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Your Rights */}
            <section>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">5</div>
                Your Privacy Rights
              </h2>
              <div className="space-y-4 pl-11">
                <p>You have the following rights regarding your personal information:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-montserrat font-semibold text-orc-blue mb-2">Access & Portability</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Request a copy of your data</li>
                      <li>• Export your information</li>
                      <li>• View what data we have</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-montserrat font-semibold text-orc-blue mb-2">Correction & Updates</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Update your profile information</li>
                      <li>• Correct inaccurate data</li>
                      <li>• Modify preferences</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-montserrat font-semibold text-orc-blue mb-2">Deletion</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Request account deletion</li>
                      <li>• Remove personal information</li>
                      <li>• Cancel subscriptions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-montserrat font-semibold text-orc-blue mb-2">Communication Control</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unsubscribe from emails</li>
                      <li>• Opt out of notifications</li>
                      <li>• Control marketing messages</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-orc-blue/10 border border-orc-blue/30 rounded-lg p-4 mt-4">
                  <p className="text-gray-300">
                    <strong>To exercise your rights:</strong> Contact us at{' '}
                    <span className="text-orc-blue">privacy@orc.com</span> or through your account settings. 
                    We will respond within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Data Retention */}
            <section>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">6</div>
                Data Retention
              </h2>
              <div className="space-y-4 pl-11">
                <h3 className="font-montserrat font-semibold text-lg text-orc-blue">Retention Periods</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Active Members:</strong> Data retained while membership is active</li>
                  <li><strong>Cancelled Accounts:</strong> Personal data deleted within 90 days (unless legally required)</li>
                  <li><strong>Payment Records:</strong> Financial data kept for 7 years (legal requirement)</li>
                  <li><strong>Communication Logs:</strong> Discord messages deleted after 2 years</li>
                  <li><strong>Anonymous Analytics:</strong> Aggregated data may be retained indefinitely</li>
                </ul>
              </div>
            </section>

            {/* Section 7: Cookies & Tracking */}
            <section>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">7</div>
                Cookies & Tracking Technologies
              </h2>
              <div className="space-y-4 pl-11">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Keep you logged in and maintain session state</li>
                  <li><strong>Analytics Cookies:</strong> Understand website usage and improve performance</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and customizations</li>
                </ul>
                
                <p className="text-sm bg-gray-800/50 rounded p-3">
                  <strong>Cookie Control:</strong> You can manage cookies through your browser settings. 
                  Note that disabling essential cookies may affect website functionality.
                </p>
              </div>
            </section>

            {/* Section 8: International Users */}
            <section>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">8</div>
                International Users & Data Transfers
              </h2>
              <div className="space-y-4 pl-11">
                <p>
                  ORC is based in Egypt, but we serve users globally. If you're outside Egypt:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your data may be transferred to and processed in Egypt or other countries</li>
                  <li>We ensure adequate protection through contractual safeguards</li>
                  <li>EU residents: We provide GDPR-level protections for all users</li>
                  <li>You consent to international data transfers by using our services</li>
                </ul>
              </div>
            </section>

            {/* Section 9: Children's Privacy */}
            <section>
              <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-orc-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">9</div>
                Children's Privacy (Under 18)
              </h2>
              <div className="space-y-4 pl-11">
                <p>
                  We welcome young robotics enthusiasts, but take special care with minors' data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Parental Consent:</strong> Required for users under 16</li>
                  <li><strong>Limited Data:</strong> We collect minimal information from minors</li>
                  <li><strong>Safe Environment:</strong> Discord channels are moderated for safety</li>
                  <li><strong>No Marketing:</strong> We don't send promotional content to minors</li>
                  <li><strong>Parent Rights:</strong> Parents can request access or deletion of their child's data</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Contact Information */}
          <div className="bg-orc-blue/10 border border-orc-blue/30 rounded-lg p-6 mt-8">
            <h3 className="font-montserrat font-bold text-lg text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 text-orc-blue mr-2" />
              Privacy Questions & Concerns
            </h3>
            <div className="space-y-3 text-gray-300">
              <p>
                If you have questions about this Privacy Policy or how we handle your data:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">General Privacy Questions</h4>
                  <ul className="text-sm space-y-1">
                    <li>Email: <span className="text-orc-blue">privacy@orc.com</span></li>
                    <li>Phone: <span className="text-orc-blue">+20 123 456 7890</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Data Protection Officer</h4>
                  <ul className="text-sm space-y-1">
                    <li>Email: <span className="text-orc-blue">dpo@orc.com</span></li>
                    <li>Response time: Within 30 days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Updates Notice */}
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="font-montserrat font-bold text-lg text-white mb-3 flex items-center">
              <Clock className="w-5 h-5 text-orc-blue mr-2" />
              Policy Updates
            </h3>
            <p className="text-gray-300 text-sm">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
              Material changes will be announced via email and highlighted on our website. 
              Your continued use of our services after updates constitutes acceptance of the revised policy.
            </p>
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

export default PrivacyPolicy; 