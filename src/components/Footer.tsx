import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3.5 group">
              <img 
                src="/logo.jpg" 
                alt="Blue Bird Dentools Logo" 
                className="h-11 w-11 object-contain rounded-full shadow-lg border border-slate-800 group-hover:scale-105 transition-all duration-300"
              />
              <span className="font-bold text-xl text-white tracking-tight">
                Blue Bird <span className="text-cyan-500 font-medium">Dentools</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              We empower dental clinics and laboratories with cutting-edge dental equipment sales, coupled with highly certified calibration, breakdown repair, and preventative maintenance services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61592497318341" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-cyan-550 hover:text-white rounded-lg transition-all" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/bluebird.dentools/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-cyan-550 hover:text-white rounded-lg transition-all" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://wa.me/919000280015" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-cyan-550 hover:text-white rounded-lg transition-all" aria-label="WhatsApp">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.028 14.024.992 11.4 1c-5.433 0-9.858 4.37-9.862 9.8.001 1.905.513 3.76 1.482 5.393L2.008 22.04l6.002-1.572c-.89-.487-1.36-.747-1.36-.747z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Equipment Catalog</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Repair & Maintenance</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">About Company</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Request a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base tracking-wider uppercase mb-6">Contact & Support</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 font-semibold">Toll-Free Support</p>
                  <a href="tel:+919000280015" className="hover:text-cyan-400 transition-colors font-bold text-white">
                    +91 9000280015
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 font-semibold">Emergency Breakdown Line</p>
                  <a href="tel:+919000280015" className="hover:text-red-400 transition-colors font-bold text-white">
                    +91 9000280015
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 font-semibold">Email Us</p>
                  <a href="mailto:bluebirddentools@gmail.com" className="hover:text-cyan-400 transition-colors text-white font-medium">
                    bluebirddentools@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="text-white font-bold text-base tracking-wider uppercase mb-6">Clinic Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/6bWMvmJ5ABrzbZnaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors leading-relaxed"
                >
                  Blue Bird Dentools City Market Shop Number 137, Opposite Maruti Suzuki Showroom, Kakani Road, Guntur-522001, Andhra Pradesh
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                <div className="text-slate-400">
                  <p className="font-semibold text-white">Business Hours</p>
                  <p className="text-xs">Mon - Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer section */}
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Blue Bird Dentools. All rights reserved. Equipment sales and maintenance services are available exclusively in Andhra Pradesh and Telangana.
          </p>
          <div className="flex items-center space-x-4 text-xs text-slate-500">
            <span className="flex items-center space-x-1">
              <Shield className="h-3 w-3 text-cyan-500" />
              <span>Certified ISO 13485 Engineers</span>
            </span>
            <span className="text-slate-700">|</span>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">|</span>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">Service Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
