import React from 'react';
import { CheckCircle, Clock, MessageCircle, Phone, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SubscriptionSuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
  userEmail: string;
  isFromPromoBanner?: boolean;
}

const SubscriptionSuccessPopup: React.FC<SubscriptionSuccessPopupProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  userEmail,
  isFromPromoBanner = false
}) => {
  const navigate = useNavigate();
  
  const handleGotIt = () => {
    onClose();
    // Redirect to community page after closing
    navigate('/community');
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative bg-gray-900 rounded-2xl border border-gray-800 max-w-md w-full mx-4 shadow-2xl">
        {/* Success Content */}
        <div className="p-8 text-center space-y-6">
          {/* Success Icon */}
          <div className="relative">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            {/* Celebration sparkles */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-orc-blue rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h2 className="font-montserrat font-bold text-2xl text-white">
              🎉 Welcome to ORC Community!
            </h2>
            
            <div className="space-y-3">
              <p className="font-aileron text-gray-300 text-lg">
                <strong className="text-white">Great news!</strong> We've received your subscription request for the{' '}
                <span className="text-orc-blue font-semibold">{selectedPlan}</span> plan.
              </p>
              
              {isFromPromoBanner && (
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-3">
                  <p className="text-orange-400 font-medium text-sm">
                    🎁 Your promotional bonus is secured! 6 months absolutely FREE.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* What happens next */}
          <div className="bg-gray-800/50 rounded-xl p-6 text-left space-y-4">
            <h3 className="font-montserrat font-bold text-lg text-white flex items-center">
              <Clock className="w-5 h-5 text-orc-blue mr-2" />
              What happens next?
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orc-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300">
                    <strong className="text-white">Within 2 hours:</strong> You'll receive a confirmation email at{' '}
                    <span className="text-orc-blue font-medium">{userEmail}</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orc-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300">
                    <strong className="text-white">Within 24 hours:</strong> Our team will contact you to schedule your interview and finalize your membership
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orc-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300">
                    <strong className="text-white">After approval:</strong> You'll get instant access to our Discord community and workshop materials
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-orc-blue/10 border border-orc-blue/30 rounded-xl p-4">
            <h4 className="font-montserrat font-bold text-white mb-3 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Need help? We're here!
            </h4>
            <div className="space-y-2 text-sm">
                              <p className="text-gray-300">
                  <Phone className="w-4 h-4 inline mr-2 text-orc-blue" />
                  Questions? Call us at <span className="text-orc-blue font-medium">+20 103 192 8810</span>
                </p>
              <p className="text-gray-300">
                <MessageCircle className="w-4 h-4 inline mr-2 text-orc-blue" />
                Email us at <span className="text-orc-blue font-medium">support@orc.com</span>
              </p>
            </div>
          </div>

          {/* Friendly closing */}
          <div className="pt-4 border-t border-gray-800">
            <p className="font-aileron text-gray-300 flex items-center justify-center">
              <Heart className="w-4 h-4 text-red-400 mr-2" />
              We're excited to have you join our robotics family!
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleGotIt}
            className="w-full bg-gradient-to-r from-orc-blue to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-orc-blue/25 transition-all duration-300 font-montserrat"
          >
            Got it! Back to Community 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccessPopup; 