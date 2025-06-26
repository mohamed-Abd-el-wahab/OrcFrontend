import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { products } from '../data/products';
import CartIcon from './cart/CartIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    { name: "Robotics Consultation", path: "/services#consultation" },
    { name: "Simulation & Optimization", path: "/services#simulation" },
    { name: "Testing & Quality Assurance", path: "/services#testing" }
  ];

  const resources = [
    { name: "Blog", path: "/blog" },
    { name: "Events", path: "/events" }
  ];

  const handleServiceClick = (path: string) => {
    if (location.pathname === '/services') {
      const sectionId = path.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsServicesOpen(false);
  };

  const handleServicesClick = () => {
    navigate('/services');
    setIsServicesOpen(false);
  };

  const handleProductsClick = () => {
    navigate('/products');
    setIsProductsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-bright-cyan/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 py-3">
            <img 
              src="/header_logo.svg" 
              alt="ORC Logo" 
              className="h-8 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 px-4 space-x-10">
            <Link 
              to="/about" 
              className="text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={handleProductsClick}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="flex items-center text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
              >
                Products
                <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
              </button>
              
              {/* Products Dropdown Menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-[600px] glass-effect rounded-2xl shadow-2xl border border-bright-cyan/20 transform transition-all duration-300 ${
                  isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="grid grid-cols-5 gap-6 p-8">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="group flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
                    >
                      <h3 className="text-secondary-text text-sm font-medium mb-4 group-hover:text-bright-cyan transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="w-28 h-28 flex items-center justify-center overflow-hidden rounded-xl glass-effect border border-bright-cyan/10 group-hover:border-bright-cyan/30 transition-all duration-300">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/competition" 
              className="text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
            >
              Competition
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link 
              to="/builder-challenge" 
              className="text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
            >
              Builder Challenge
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link 
              to="/community" 
              className="text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
            >
              Community
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Courses - Standalone */}
            <Link 
              to="/courses" 
              className="text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
            >
              Courses
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="flex items-center text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
              >
                Resources
                <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
              </button>
              
              {/* Resources Dropdown menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-64 glass-effect rounded-2xl shadow-2xl border border-bright-cyan/20 transform transition-all duration-300 ${
                  isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                {resources.map((resource, index) => (
                  <Link
                    key={resource.path}
                    to={resource.path}
                    className={`block px-6 py-4 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 transition-all duration-300 text-sm font-medium ${
                      index === 0 ? 'rounded-t-2xl' : ''
                    } ${
                      index === resources.length - 1 ? 'rounded-b-2xl' : ''
                    }`}
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={handleServicesClick}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
              >
                Services
                <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
              </button>
              
              {/* Services Dropdown menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-72 glass-effect rounded-2xl shadow-2xl border border-bright-cyan/20 transform transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service, index) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => handleServiceClick(service.path)}
                    className={`block px-6 py-4 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 transition-all duration-300 text-sm font-medium ${
                      index === 0 ? 'rounded-t-2xl' : ''
                    } ${
                      index === services.length - 1 ? 'rounded-b-2xl' : ''
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <CartIcon />
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-2.5 glass-effect border border-bright-cyan/20 text-primary-text text-sm font-medium rounded-xl hover:border-bright-cyan/40 hover:bg-bright-cyan/5 hover:scale-105 transition-all duration-300 group"
            >
              <LogIn className="w-4 h-4 mr-2 group-hover:text-bright-cyan transition-colors duration-300" />
              <span className="group-hover:text-bright-cyan transition-colors duration-300">Sign In</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 glass-effect rounded-xl border border-bright-cyan/20 text-secondary-text hover:text-bright-cyan hover:border-bright-cyan/40 transition-all duration-300"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-bright-cyan/10">
          <div className="px-4 py-6 space-y-3 glass-effect backdrop-blur-xl">
            <Link
              to="/about"
              className="block px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              About
            </Link>
            
            {/* Mobile Products Menu */}
            <div className="space-y-2">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="pl-4 space-y-2">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="block px-4 py-2 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-lg transition-all duration-300 text-sm"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/competition"
              className="block px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Competition
            </Link>

            <Link
              to="/builder-challenge"
              className="block px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Builder Challenge
            </Link>

            <Link
              to="/community"
              className="block px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Community
            </Link>

            {/* Mobile Courses - Standalone */}
            <Link
              to="/courses"
              className="block px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Courses
            </Link>

            {/* Mobile Resources Menu */}
            <div className="space-y-2">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isResourcesOpen && (
                <div className="pl-4 space-y-2">
                  {resources.map((resource) => (
                    <Link
                      key={resource.path}
                      to={resource.path}
                      className="block px-4 py-2 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-lg transition-all duration-300 text-sm"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Services Menu */}
            <div className="space-y-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => handleServiceClick(service.path)}
                      className="block px-4 py-2 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-lg transition-all duration-300 text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/login"
              className="block px-4 py-3 text-center text-primary-text glass-effect border border-bright-cyan/20 rounded-xl hover:border-bright-cyan/40 hover:bg-bright-cyan/5 transition-all duration-300 text-sm font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;