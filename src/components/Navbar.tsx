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
    <nav className="fixed w-full z-50 bg-orc-black/95 backdrop-blur-xl border-b border-orc-blue/20">
      {/* Left Blue Spine */}
      <div className="absolute left-0 top-0 w-1 h-full bg-orc-blue z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 py-3 relative z-20">
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
              className="text-gray-300 hover:text-orc-blue transition-all duration-300 text-sm tracking-wider font-medium font-aileron relative group"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orc-blue group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={handleProductsClick}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="flex items-center text-gray-300 hover:text-orc-blue transition-all duration-300 text-sm tracking-wider font-medium font-aileron relative group"
              >
                Products
                <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orc-blue group-hover:w-full transition-all duration-300"></div>
              </button>
              
              {/* Products Dropdown Menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-[400px] bg-orc-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-orc-blue/20 transform transition-all duration-300 ${
                  isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="grid grid-cols-2 gap-4 p-6">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="group flex flex-col items-center text-center hover:scale-105 transition-all duration-300 p-6 rounded-xl hover:bg-orc-blue/5 border border-transparent hover:border-orc-blue/20"
                    >
                      <div className="w-32 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 group-hover:border-orc-blue/50 transition-all duration-300 mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-orc-white text-xl font-montserrat font-bold group-hover:text-orc-blue transition-colors duration-300">
                        {product.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Competition - HIDDEN */}
            {/* <Link 
              to="/competition" 
              className="text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
            >
              Competition
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
            </Link> */}

            {/* <Link 
              to="/builder-challenge" 
              className="text-gray-300 hover:text-orc-blue transition-all duration-300 text-sm tracking-wider font-medium font-aileron relative group"
            >
              Builder Challenge
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orc-blue group-hover:w-full transition-all duration-300"></div>
            </Link> */}

            <Link 
              to="/community" 
              className="text-gray-300 hover:text-orc-blue transition-all duration-300 text-sm tracking-wider font-medium font-aileron relative group"
            >
              Community
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orc-blue group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Courses - HIDDEN */}
            {/* <Link 
              to="/courses" 
              className="text-secondary-text hover:text-bright-cyan transition-all duration-300 text-sm tracking-wider font-medium relative group"
            >
              Courses
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-cyan group-hover:w-full transition-all duration-300"></div>
            </Link> */}

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="flex items-center text-gray-300 hover:text-orc-blue transition-all duration-300 text-sm tracking-wider font-medium font-aileron relative group"
              >
                Resources
                <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orc-blue group-hover:w-full transition-all duration-300"></div>
              </button>
              
              {/* Resources Dropdown menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-64 bg-orc-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-orc-blue/20 transform transition-all duration-300 ${
                  isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                {resources.map((resource, index) => (
                  <Link
                    key={resource.path}
                    to={resource.path}
                    className={`block px-6 py-4 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 transition-all duration-300 text-sm font-medium font-aileron ${
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
                className="flex items-center text-gray-300 hover:text-orc-blue transition-all duration-300 text-sm tracking-wider font-medium font-aileron relative group"
              >
                Services
                <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orc-blue group-hover:w-full transition-all duration-300"></div>
              </button>
              
              {/* Services Dropdown menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-72 bg-orc-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-orc-blue/20 transform transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service, index) => (
                  <button
                    key={service.path}
                    onClick={() => handleServiceClick(service.path)}
                    className={`w-full text-left block px-6 py-4 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 transition-all duration-300 text-sm font-medium font-aileron ${
                      index === 0 ? 'rounded-t-2xl' : ''
                    } ${
                      index === services.length - 1 ? 'rounded-b-2xl' : ''
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <CartIcon />
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-2.5 bg-gray-900/50 border border-orc-blue/30 text-gray-300 text-sm font-medium font-aileron rounded-xl hover:border-orc-blue hover:bg-orc-blue/10 hover:scale-105 transition-all duration-300 group"
            >
              <LogIn className="w-4 h-4 mr-2 group-hover:text-orc-blue transition-colors duration-300" />
              <span className="group-hover:text-orc-blue transition-colors duration-300">Sign In</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-gray-900/50 rounded-xl border border-orc-blue/30 text-gray-300 hover:text-orc-blue hover:border-orc-blue transition-all duration-300"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-orc-blue/20">
          <div className="px-4 py-6 space-y-3 bg-orc-black/95 backdrop-blur-xl">
            <Link
              to="/about"
              className="block px-4 py-3 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 rounded-xl transition-all duration-300 text-sm font-medium font-aileron"
            >
              About
            </Link>
            
            {/* Mobile Products Menu */}
            <div className="space-y-2">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 rounded-xl transition-all duration-300 text-sm font-medium font-aileron"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="pl-4 space-y-3">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 rounded-lg transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg bg-gray-900/50 border border-gray-800 group-hover:border-orc-blue/50 transition-all duration-300">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-sm font-montserrat font-medium font-aileron group-hover:text-orc-blue transition-colors duration-300">
                        {product.name}
                      </h4>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Competition - HIDDEN */}
            {/* <Link
              to="/competition"
              className="block px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Competition
            </Link> */}

            {/* <Link
              to="/builder-challenge"
              className="block px-4 py-3 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 rounded-xl transition-all duration-300 text-sm font-medium font-aileron"
            >
              Builder Challenge
            </Link> */}

            <Link
              to="/community"
              className="block px-4 py-3 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 rounded-xl transition-all duration-300 text-sm font-medium font-aileron"
            >
              Community
            </Link>

            {/* Courses - HIDDEN */}
            {/* <Link
              to="/courses"
              className="block px-4 py-3 text-secondary-text hover:text-bright-cyan hover:bg-bright-cyan/5 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Courses
            </Link> */}

            {/* Mobile Resources Menu */}
            <div className="space-y-2">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 rounded-xl transition-all duration-300 text-sm font-medium font-aileron"
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
                      className="block px-4 py-2 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 rounded-lg transition-all duration-300 text-sm font-aileron"
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
                className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 rounded-xl transition-all duration-300 text-sm font-medium font-aileron"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => handleServiceClick(service.path)}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orc-blue hover:bg-orc-blue/5 rounded-lg transition-all duration-300 text-sm font-aileron"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/login"
              className="block px-4 py-3 text-center text-gray-300 bg-gray-900/50 border border-orc-blue/30 rounded-xl hover:border-orc-blue hover:bg-orc-blue/10 transition-all duration-300 text-sm font-medium font-aileron"
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