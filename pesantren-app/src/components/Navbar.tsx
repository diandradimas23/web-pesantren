import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, BookOpen, LogOut, Globe } from 'lucide-react';
import { useAuth } from '../AuthContext';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-sage-600" />
              <span className="text-xl font-bold text-sage-800">
                Pesantren Modern Fadlulloh
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sage-600 transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/programs" className="text-gray-700 hover:text-sage-600 transition-colors">
              {t('nav.programs')}
            </Link>
            <Link to="/admissions" className="text-gray-700 hover:text-sage-600 transition-colors">
              {t('nav.admissions')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-sage-600 transition-colors"
              title="Change Language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm">{language.toUpperCase()}</span>
            </button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-sage-600 transition-colors"
                >
                  Dashboard
                </Link>
                <span className="text-sm text-gray-600">{user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-700"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Keluar</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition-colors"
              >
                {t('nav.login')}
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-sage-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-sage-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-sage-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </Link>
            <Link
              to="/programs"
              className="block px-3 py-2 text-gray-700 hover:bg-sage-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Program
            </Link>
            <Link
              to="/admissions"
              className="block px-3 py-2 text-gray-700 hover:bg-sage-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Pendaftaran
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-gray-700 hover:bg-sage-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
                >
                  Keluar
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 bg-sage-600 text-white rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
