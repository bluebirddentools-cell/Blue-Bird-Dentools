import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppSticky from './WhatsAppSticky';

const Layout: React.FC = () => {
  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => setShowTop(y > 600));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-primary-700 origin-left z-[60]"
        aria-hidden="true"
      />

      {/* Sticky Header */}
      <Navbar />

      {/* Spacer = banner 36px + nav (py-5 40px + 40px row) = 116px; drawer offsets in Navbar use the same numbers */}
      <div className="h-[116px]" />

      {/* Main Routing Area - content is never hidden; only a short slide-in on route change */}
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="page-container"
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 20 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="fixed left-4 sm:left-6 z-50 h-11 w-11 flex items-center justify-center rounded-full bg-primary-900 text-white shadow-xl hover:bg-cyan-600 transition-colors"
            style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Widget */}
      <WhatsAppSticky />
    </div>
  );
};

export default Layout;
