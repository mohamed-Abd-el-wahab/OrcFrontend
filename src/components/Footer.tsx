import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Competition', path: '/competition' },
    { name: 'Courses', path: '/courses' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' }
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Register', path: '/register' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-dark-navy to-deep-charcoal border-t border-bright-cyan/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(79, 125, 243, 0.08) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              <p className="text-xl font-semibold text-primary-text mb-2">
                A Place for Builders
              </p>
              <p className="text-secondary-text font-light leading-relaxed">
                Empowering the next generation of robotic innovators through cutting-edge competitions and collaborative learning.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-primary-text font-semibold mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-bright-cyan to-electric-blue mr-3 rounded-full"></div>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/share/18kuQMcVnw/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass-effect rounded-xl border border-bright-cyan/20 text-secondary-text hover:text-bright-cyan hover:border-bright-cyan/40 hover:scale-110 transition-all duration-300 group"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://x.com/OpenRobotCombat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass-effect rounded-xl border border-bright-cyan/20 text-secondary-text hover:text-bright-cyan hover:border-bright-cyan/40 hover:scale-110 transition-all duration-300 group"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@OpenRobotCombat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass-effect rounded-xl border border-bright-cyan/20 text-secondary-text hover:text-bright-cyan hover:border-bright-cyan/40 hover:scale-110 transition-all duration-300 group"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-primary-text font-semibold text-lg flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-bright-cyan to-electric-blue mr-3 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-secondary-text hover:text-bright-cyan transition-all duration-300"
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
            <h3 className="text-primary-text font-semibold text-lg flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-bright-cyan to-electric-blue mr-3 rounded-full"></div>
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link 
                    to={resource.path} 
                    className="group flex items-center text-secondary-text hover:text-bright-cyan transition-all duration-300"
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
            <h3 className="text-primary-text font-semibold text-lg flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-bright-cyan to-electric-blue mr-3 rounded-full"></div>
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 glass-effect rounded-lg border border-bright-cyan/20 group-hover:border-bright-cyan/40 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-bright-cyan" />
                </div>
                <div>
                  <p className="text-secondary-text font-medium">Email</p>
                  <a 
                    href="mailto:info@openrobotcombat.com" 
                    className="text-secondary-text hover:text-bright-cyan transition-colors duration-300 font-light"
                  >
                    info@openrobotcombat.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="p-2 glass-effect rounded-lg border border-bright-cyan/20 group-hover:border-bright-cyan/40 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-bright-cyan" />
                </div>
                <div>
                  <p className="text-secondary-text font-medium">Phone</p>
                  <a 
                    href="tel:+4915730223392" 
                    className="text-secondary-text hover:text-bright-cyan transition-colors duration-300 font-light"
                  >
                    +49 157 3022 3392
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="glass-effect rounded-xl p-4 border border-bright-cyan/20 hover:border-bright-cyan/30 transition-colors duration-300">
              <h4 className="text-primary-text font-semibold mb-2">Stay Updated</h4>
              <p className="text-secondary-text text-sm font-light mb-3">
                Get the latest news and updates from ORC.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-bright-cyan hover:text-electric-blue transition-colors duration-300 text-sm font-medium group"
              >
                <span>Subscribe</span>
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-bright-cyan/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-secondary-text text-sm font-light">
                &copy; {new Date().getFullYear()} Open Robot Combat. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-secondary-text hover:text-bright-cyan transition-colors duration-300 text-sm font-light"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-secondary-text hover:text-bright-cyan transition-colors duration-300 text-sm font-light"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-bright-cyan rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-bright-cyan to-transparent"></div>
              <div className="w-3 h-3 border border-bright-cyan/40 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-bright-cyan to-transparent"></div>
              <div className="w-2 h-2 bg-bright-cyan rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;