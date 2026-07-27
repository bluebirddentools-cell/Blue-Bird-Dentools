import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services & Repair', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Regional Notice Banner */}
      <div className="fixed top-0 left-0 right-0 h-9 bg-gradient-to-r from-primary-950 via-primary-900 to-cyan-950 text-white text-center flex items-center justify-center text-[10px] sm:text-xs font-semibold px-4 z-50 border-b border-cyan-500/20">
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse mr-2"></span>
        <span>Sales & Services Available Exclusively in Andhra Pradesh & Telangana</span>
      </div>

      <nav
        className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glassmorphism shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.jpg" 
                alt="Blue Bird Dentools Logo" 
                className="h-10 w-10 object-contain rounded-full shadow-md border border-slate-200/40 group-hover:scale-105 transition-all duration-300"
              />
              <div>
                <span className="font-bold text-lg sm:text-xl tracking-tight text-primary-900">
                  Blue Bird <span className="text-cyan-600 font-medium">Dentools</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative py-2 text-sm font-medium transition-colors duration-200"
                  >
                    <span className={`${isActive ? 'text-primary-900 font-semibold' : 'text-slate-600 hover:text-primary-900'}`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA & Support */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+919000280015"
                className="flex items-center space-x-2 text-slate-600 hover:text-cyan-600 transition-colors"
              >
                <Phone className="h-4 w-4 text-cyan-500" />
                <span className="text-xs font-semibold">+91 9000280015</span>
              </a>
              <Link
                to="/contact?type=quote"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg text-white bg-primary-900 hover:bg-cyan-600 active:scale-95 transition-all shadow-md hover:shadow-cyan-200"
              >
                <FileText className="h-4 w-4 mr-2" />
                Request Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <a
                href="tel:+919000280015"
                className="p-2 text-primary-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
              <button
                onClick={toggleMenu}
                className="p-2 text-primary-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Moved outside <nav> to prevent backdrop-filter containing block issues */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
                isScrolled ? 'top-[100px]' : 'top-[116px]'
              }`}
            />
            {/* Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col justify-between md:hidden transition-all duration-300 ${
                isScrolled ? 'top-[100px]' : 'top-[116px]'
              }`}
            >
              <div className="space-y-6">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={toggleMenu}
                        className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                          isActive
                            ? 'bg-primary-900 text-white border-l-4 border-cyan-400'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4 border-t border-slate-100 pt-6">
                <div className="flex items-center space-x-3 text-slate-600">
                  <Phone className="h-5 w-5 text-cyan-500" />
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Service Hotline</p>
                    <a href="tel:+919000280015" className="text-sm font-bold text-primary-900 hover:text-cyan-600">
                      +91 9000280015
                    </a>
                  </div>
                </div>
                <Link
                  to="/contact?type=quote"
                  onClick={toggleMenu}
                  className="w-full flex items-center justify-center px-4 py-3 text-base font-bold rounded-xl text-white bg-primary-900 hover:bg-cyan-600 active:scale-95 transition-all shadow-lg"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
