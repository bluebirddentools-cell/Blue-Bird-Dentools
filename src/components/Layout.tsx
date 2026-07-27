import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppSticky from './WhatsAppSticky';

const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Sticky Header */}
      <Navbar />
      
      {/* Spacer matching fixed navbar height + top banner */}
      <div className="h-[112px] sm:h-[120px]" />
      
      {/* Main Animated Routing Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="page-container"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <WhatsAppSticky />
    </div>
  );
};

export default Layout;
