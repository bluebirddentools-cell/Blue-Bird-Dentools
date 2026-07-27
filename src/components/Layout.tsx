import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
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
      
      {/* Main Routing Area - Instant Content Render */}
      <main className="flex-grow">
        <div className="page-container">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <WhatsAppSticky />
    </div>
  );
};

export default Layout;
