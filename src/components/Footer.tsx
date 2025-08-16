import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
            // { name: 'Builder Challenge', path: '/builder-challenge' },
    { name: 'Community', path: '/community' },
    { name: 'Services', path: '/services' }
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Register', path: '/register' },
    { name: 'Contact', path: '/contact' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <footer className="relative bg-orc-black overflow-hidden border-t border-orc-blue/20">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      {/* Background Pattern - Diagonal Arrows */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="footer-diagonal-arrows" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M10,0 L20,10 M20,0 L10,10" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
              <path d="M0,10 L10,20 M10,10 L0,20" stroke="#0000F2" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-diagonal-arrows)"/>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="block group">
              <img 
                src="/header_logo.svg" 
                alt="ORC Logo" 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div>
              <p className="text-xl font-montserrat font-semibold text-orc-white mb-2">
                A Place for Builders
              </p>
              <p className="text-gray-300 font-aileron font-light leading-relaxed">
                Empowering the next generation of robotic innovators through cutting-edge competitions and collaborative learning.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-orc-white font-montserrat font-semibold mb-4 flex items-center">
                <div className="w-1 h-6 bg-orc-blue mr-3 rounded-full"></div>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/OpenRobotCommunity/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-900/50 rounded-xl border border-orc-blue/30 text-gray-300 hover:text-orc-blue hover:border-orc-blue hover:scale-110 transition-all duration-300 group"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://x.com/OpenRobotCombat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-900/50 rounded-xl border border-orc-blue/30 text-gray-300 hover:text-orc-blue hover:border-orc-blue hover:scale-110 transition-all duration-300 group"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/openrobotcommunity/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-900/50 rounded-xl border border-orc-blue/30 text-gray-300 hover:text-orc-blue hover:border-orc-blue hover:scale-110 transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@OpenRobotCombat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-900/50 rounded-xl border border-orc-blue/30 text-gray-300 hover:text-orc-blue hover:border-orc-blue hover:scale-110 transition-all duration-300 group"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-orc-white font-montserrat font-semibold text-lg flex items-center">
              <div className="w-1 h-6 bg-orc-blue mr-3 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-gray-300 hover:text-orc-blue transition-all duration-300 font-aileron"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-orc-white font-montserrat font-semibold text-lg flex items-center">
              <div className="w-1 h-6 bg-orc-blue mr-3 rounded-full"></div>
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link 
                    to={resource.path} 
                    className="group flex items-center text-gray-300 hover:text-orc-blue transition-all duration-300 font-aileron"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-orc-white font-montserrat font-semibold text-lg flex items-center">
              <div className="w-1 h-6 bg-orc-blue mr-3 rounded-full"></div>
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gray-900/50 rounded-lg border border-orc-blue/30 group-hover:border-orc-blue transition-colors duration-300">
                  <Mail className="w-4 h-4 text-orc-blue" />
                </div>
                <div>
                  <p className="text-gray-300 font-montserrat font-medium">Email</p>
                  <a 
                    href="mailto:info@openrobotcombat.com" 
                    className="text-gray-300 hover:text-orc-blue transition-colors duration-300 font-aileron font-light"
                  >
                    info@openrobotcombat.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gray-900/50 rounded-lg border border-orc-blue/30 group-hover:border-orc-blue transition-colors duration-300">
                  <Phone className="w-4 h-4 text-orc-blue" />
                </div>
                <div>
                  <p className="text-gray-300 font-montserrat font-medium">Phone</p>
                  <a 
                    href="tel:+201031928810" 
                    className="text-gray-300 hover:text-orc-blue transition-colors duration-300 font-aileron font-light"
                  >
                    +20 103 192 8810
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-900/50 rounded-xl p-4 border border-orc-blue/30 hover:border-orc-blue transition-colors duration-300">
              <h4 className="text-orc-white font-montserrat font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm font-aileron font-light mb-3">
                Get the latest news and updates from ORC.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-orc-blue hover:text-blue-400 transition-colors duration-300 text-sm font-medium font-aileron group"
              >
                <span>Subscribe</span>
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orc-blue/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-300 text-sm font-aileron font-light">
                &copy; {new Date().getFullYear()} Open Robot Combat. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-300 hover:text-orc-blue transition-colors duration-300 text-sm font-aileron font-light"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-300 hover:text-orc-blue transition-colors duration-300 text-sm font-aileron font-light"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;