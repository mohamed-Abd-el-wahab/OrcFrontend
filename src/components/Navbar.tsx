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
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/header_logo.svg" 
              alt="ORC Logo" 
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 px-4 space-x-8">
            <Link 
              to="/about" 
              className="text-gray-400 hover:text-white transition-all duration-200 text-sm tracking-wider font-medium"
            >
              About
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={handleProductsClick}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="flex items-center text-gray-400 hover:text-white transition-all duration-200 text-sm tracking-wider font-medium"
              >
                Products
                <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Products Dropdown Menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 transform transition-all duration-200 ${
                  isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="grid grid-cols-5 gap-6 p-6">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="group flex flex-col items-center text-center"
                    >
                      <h3 className="text-gray-400 text-sm font-medium mb-3 group-hover:text-white transition-colors duration-200">
                        {product.name}
                      </h3>
                      <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-200">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain transform transition-transform duration-200 group-hover:scale-110"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/competition" 
              className="text-gray-400 hover:text-white transition-all duration-200 text-sm tracking-wider font-medium"
            >
              Competition
            </Link>

            {/* Courses - Standalone */}
            <Link 
              to="/courses" 
              className="text-gray-400 hover:text-white transition-all duration-200 text-sm tracking-wider font-medium"
            >
              Courses
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="flex items-center text-gray-400 hover:text-white transition-all duration-200 text-sm tracking-wider font-medium"
              >
                Resources
                <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Resources Dropdown menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-56 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 transform transition-all duration-200 ${
                  isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                }`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                {resources.map((resource) => (
                  <Link
                    key={resource.path}
                    to={resource.path}
                    className="block px-4 py-2 text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200 text-sm"
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
                className="flex items-center text-gray-400 hover:text-white transition-all duration-200 text-sm tracking-wider font-medium"
              >
                Services
                <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Services Dropdown menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-56 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 transform transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => handleServiceClick(service.path)}
                    className="block px-4 py-2 text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200 text-sm"
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
              className="inline-flex items-center px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-2 space-y-1 bg-black/95 backdrop-blur-md">
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
            >
              About
            </Link>
            
            {/* Mobile Products Menu */}
            <div className="space-y-1">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
              >
                Products
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="pl-4 space-y-1">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/competition"
              className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
            >
              Competition
            </Link>

            {/* Mobile Courses - Standalone */}
            <Link
              to="/courses"
              className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
            >
              Courses
            </Link>

            {/* Mobile Resources Menu */}
            <div className="space-y-1">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
              >
                Resources
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isResourcesOpen && (
                <div className="pl-4 space-y-1">
                  {resources.map((resource) => (
                    <Link
                      key={resource.path}
                      to={resource.path}
                      className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Services Menu */}
            <div className="space-y-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => handleServiceClick(service.path)}
                      className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/login"
              className="block px-3 py-2 text-center text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 text-sm"
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