import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Award, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Scan, 
  Settings, 
  ShieldAlert 
} from 'lucide-react';

const Home: React.FC = () => {
  // Animation presets
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categories = [
    { name: 'Furniture & Units', code: 'furniture', icon: Activity, desc: 'Dental chairs and ergonomic units' },
    { name: 'Imaging & Diagnostics', code: 'imaging', icon: Scan, desc: 'Digital Wallmount & Portable X-Ray machines' },
    { name: 'Sterilization & Hygiene', code: 'sterilization', icon: Sparkles, desc: 'B-Class autoclaves & UV chambers' },
    { name: 'Handpieces & Motors', code: 'handpieces', icon: Settings, desc: 'Straight, Contra-Angle, Airotor & Micro Motors' },
    { name: 'Essentials & Utilities', code: 'essentials', icon: ShieldAlert, desc: 'Scalers, curing lights & noiseless compressors' }
  ];

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 text-white">
        {/* Background Image with Dark Blue Radial Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" 
          style={{ backgroundImage: 'url("/hero_dental.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        
        {/* Decorative Light Glows */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Award className="h-4 w-4" />
              <span>Certified Dental Solutions</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Dental Equipment</span> & Reliable Service Support
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Empowering dental practitioners across Andhra Pradesh and Telangana with world-class dental machinery, authorized spare parts, and prompt calibration and breakdown maintenance.
            </motion.p>

            {/* Regional Notice Alert */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 flex items-start space-x-3 bg-cyan-950/60 border border-cyan-500/30 p-4 rounded-xl text-slate-200 text-xs sm:text-sm font-semibold max-w-2xl"
            >
              <span className="flex-shrink-0 inline-block w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse mt-1.5" />
              <span>Regional Coverage Notice: Our equipment sales, installations, and technical repair services are available exclusively for dental clinics and laboratories in <strong>Andhra Pradesh</strong> and <strong>Telangana</strong>.</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl text-slate-900 bg-cyan-400 hover:bg-cyan-300 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
              >
                Explore Products Catalog
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl text-white bg-slate-800 hover:bg-slate-700 active:scale-95 border border-slate-700 transition-all"
              >
                Book Breakdown Repair
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-cyan-600 font-bold">What We Do</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary-900">Core Services For Clinics & Labs</p>
            <p className="mt-4 text-slate-500">We offer end-to-end solutions, helping clinics source the right equipment and keeping it operational year-round.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sales Card */}
            <motion.div 
              viewport={{ once: true }}
              initial="visible"
              animate="visible"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 shadow-xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-500 opacity-50" />
              <div className="p-4 bg-primary-900 text-white rounded-xl inline-block mb-6 shadow-md shadow-primary-900/10">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">Equipment Sales</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Source top-tier certified dental equipment from industry leaders. We stock premium chairs, high-frequency diagnostic imaging systems, and precise handpieces designed to elevate treatment quality.
              </p>
              <ul className="mt-6 space-y-2 text-slate-500 text-sm">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-cyan-500 mr-2 shrink-0" /> Official Manufacturer Warranty</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-cyan-500 mr-2 shrink-0" /> Free Installation Support</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-cyan-500 mr-2 shrink-0" /> Custom Clinic Furnishing Consultation</li>
              </ul>
              <Link to="/products" className="mt-8 inline-flex items-center text-sm font-bold text-primary-900 hover:text-cyan-600 group">
                Browse Catalog
                <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Repair & Servicing Card */}
            <motion.div 
              viewport={{ once: true }}
              initial="visible"
              animate="visible"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-50/50 to-white border border-cyan-100/70 shadow-xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-500 opacity-40" />
              <div className="p-4 bg-cyan-500 text-white rounded-xl inline-block mb-6 shadow-md shadow-cyan-500/10">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">Maintenance & Repair</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Protect your clinic from costly breakdowns. Our ISO-certified engineers provide responsive emergency breakdown repairs, regular calibration, and preventative Annual Maintenance Contracts (AMC).
              </p>
              <ul className="mt-6 space-y-2 text-slate-500 text-sm">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-cyan-500 mr-2 shrink-0" /> ISO-Compliant Device Calibration</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-cyan-500 mr-2 shrink-0" /> 24-Hour Emergency Response</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-cyan-500 mr-2 shrink-0" /> 100% Genuine Spare Parts</li>
              </ul>
              <Link to="/services" className="mt-8 inline-flex items-center text-sm font-bold text-primary-900 hover:text-cyan-600 group">
                Request Maintenance
                <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories Preview */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Product Categories</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary-900">Find What You Need</p>
            <p className="mt-4 text-slate-500">Explore our comprehensive catalog structured to quickly connect you with clinical equipment.</p>
          </div>

          <motion.div 
            viewport={{ once: true }}
            initial="visible"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div key={idx} variants={fadeInUp}>
                  <Link
                    to={`/products?category=${cat.code}`}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200/60 hover:border-cyan-400 hover:shadow-xl transition-all h-full group"
                  >
                    <div className="p-4 bg-slate-50 text-primary-900 rounded-2xl group-hover:bg-primary-900 group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-primary-900 group-hover:text-cyan-600 transition-colors">{cat.name}</h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Column */}
            <div className="relative">
              {/* Decorative Card Elements */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-cyan-100 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-3xl -z-10" />
              
              <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full translate-x-20 -translate-y-20 blur-[80px]" />
                <h3 className="text-2xl font-bold mb-6">Our Support Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-slate-400">Response Time</span>
                    <span className="text-cyan-400 font-bold text-lg">&lt; 4 Hours</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-slate-400">Spare Parts Authenticity</span>
                    <span className="text-cyan-400 font-bold text-lg">100% Genuine</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-slate-400">Certified Repair Engineers</span>
                    <span className="text-cyan-400 font-bold text-lg">ISO 13485 Compliant</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Clinics Served</span>
                    <span className="text-cyan-400 font-bold text-lg">500+ Nationwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Column */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Why Choose Us</h2>
              <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary-900 leading-tight">Uncompromising Standards In Dental Care Infrastructure</p>
              <p className="mt-4 text-slate-500">Every piece of hardware we supply, and every service task we perform, adheres to strict medical compliance and clinic optimization guidelines.</p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-primary-50 rounded-lg text-primary-900 mt-1">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-sm">Genuine Spare Parts</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">No generic components. We supply certified parts sourced directly from manufacturers.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-primary-50 rounded-lg text-primary-900 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-sm">Fast Turnaround</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">Minimize patient rescheduling with our same-day diagnosis and prompt dispatch.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-primary-50 rounded-lg text-primary-900 mt-1">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-sm">Certified Engineers</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">Highly trained technicians specialize in calibration, autoclave testing, and motors.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-primary-50 rounded-lg text-primary-900 mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-sm">Wide Selection</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">A complete inventory of chairs, x-ray units, autoclaves, and handpieces.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials & Clinic Trust Badges */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Trusted Reviews</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary-900">What Clinic Directors Say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Blue Bird Dentools saved our practice from a major issue when our autoclave shut down. Their technician arrived within 3 hours, replaced the pressure gasket, and calibrated the unit. A lifesaver!",
                author: "Dr. Sarah Mitchell",
                title: "Clinical Director, Apex Dental Care"
              },
              {
                text: "We sourced all 5 of our portable dental units and wallmount x-rays from them. Excellent consultation process, transparent pricing, and the initial calibration report was fully compliant.",
                author: "Dr. Robert Chen",
                title: "Owner, Oakridge Dental Group"
              },
              {
                text: "Our dental group uses their AMC contract. Regular calibration and parts replacement has increased our equipment life and eliminated unexpected clinic downtime. Highly recommend their service team.",
                author: "Dr. Elena Rostova",
                title: "Senior Partner, Metro Dental Clinics"
              }
            ].map((t, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-200/60 shadow-lg flex flex-col justify-between h-full">
                <div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-cyan-500 fill-cyan-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">"{t.text}"</p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="font-bold text-primary-900 text-sm">{t.author}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-12 border-t border-slate-200/50 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-sm text-slate-400 select-none uppercase tracking-widest">ISO 9001 CERTIFIED</span>
            <span className="font-bold text-sm text-slate-400 select-none uppercase tracking-widest">CE COMPLIANT</span>
            <span className="font-bold text-sm text-slate-400 select-none uppercase tracking-widest">FDA ACCREDITED DEPT</span>
            <span className="font-bold text-sm text-slate-400 select-none uppercase tracking-widest">AADA REGISTERED</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
