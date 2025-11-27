import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (path.startsWith('#') && location.pathname === '/') {
      // If on home page, scroll to section
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path.startsWith('#')) {
      // If not on home page but trying to scroll to section, navigate to home first
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Navigate to route
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors duration-200"
            >
              Professional Road Bikes
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('/features')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => navigate('/products')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavigation('/specifications')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Specifications
            </button>
            <button 
              onClick={() => navigate('/blog')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/features')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-left"
              >
                Features
              </button>
              <button 
                onClick={() => navigate('/products')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-left"
              >
                Products
              </button>
              <button 
                onClick={() => handleNavigation('/specifications')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-left"
              >
                Specifications
              </button>
              <button 
                onClick={() => navigate('/blog')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-left"
              >
                Contact
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium text-left">
                Configure Bike
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;