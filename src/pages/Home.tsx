import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, A11y, Keyboard, EffectFade, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
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
  ShieldAlert,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Seo from '../components/Seo';
import { PRODUCTS_DATA } from '../data/products';

const HERO_SLIDES = ['/hero_dental.webp', '/images/dental_chair.webp', '/images/wallmount_xray.webp', '/images/bclass_autoclave.webp'];

const TRUST_BADGES = ['ISO 9001 CERTIFIED', 'CE COMPLIANT', 'FDA ACCREDITED DEPT', 'AADA REGISTERED', 'GENUINE SPARE PARTS', 'AP & TELANGANA SERVICE'];

// Counts up from 0 once scrolled into view; renders the final value first so content is never empty.
const CountUp: React.FC<{ to: number; prefix?: string; suffix?: string }> = ({ to, prefix = '', suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => { node.textContent = `${prefix}${Math.round(v)}${suffix}`; },
    });
    return () => controls.stop();
  }, [inView, to, prefix, suffix]);
  return <span ref={ref}>{`${prefix}${to}${suffix}`}</span>;
};

const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Animation presets (transform-only: content is never hidden)
  const fadeInUp = {
    hidden: { y: 24 },
    visible: { y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const reveal = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } } as const;

  const categories = [
    { name: 'Furniture & Units', code: 'furniture', icon: Activity, desc: 'Dental chairs and ergonomic units' },
    { name: 'Imaging & Diagnostics', code: 'imaging', icon: Scan, desc: 'Digital Wallmount & Portable X-Ray machines' },
    { name: 'Sterilization & Hygiene', code: 'sterilization', icon: Sparkles, desc: 'B-Class autoclaves & UV chambers' },
    { name: 'Handpieces & Motors', code: 'handpieces', icon: Settings, desc: 'Straight, Contra-Angle, Airotor & Micro Motors' },
    { name: 'Essentials & Utilities', code: 'essentials', icon: ShieldAlert, desc: 'Scalers, curing lights & noiseless compressors' }
  ];

  return (
    <div className="relative overflow-hidden">
      <Seo
        path="/"
        title="Dental Equipment Sales & Repair in Guntur | Blue Bird Dentools"
        description="Guntur-based Blue Bird Dentools supplies dental chairs, X-rays, autoclaves and handpieces, plus repair and AMC service across Andhra Pradesh & Telangana."
      />

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center bg-slate-900 text-white overflow-hidden">
        {/* Background slideshow (crossfade + slow zoom) with Dark Blue Radial Overlay */}
        <motion.div style={{ scale: heroBgScale }} className="absolute inset-0 opacity-40 mix-blend-luminosity" aria-hidden="true">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={1500}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            allowTouchMove={false}
            className="h-full hero-kenburns"
          >
            {HERO_SLIDES.map((src, i) => (
              <SwiperSlide key={src}>
                <img
                  src={src}
                  alt=""
                  width={1024}
                  height={1024}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        
        {/* Decorative Light Glows */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div style={{ y: heroTextY }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
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
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:flex absolute bottom-6 left-1/2 -ml-3 z-10 h-10 w-6 rounded-full border-2 border-white/30 justify-center pt-2"
          aria-hidden="true"
        >
          <span className="h-2 w-1 rounded-full bg-cyan-400" />
        </motion.div>
      </section>

      {/* 2. Core Services Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs uppercase tracking-widest text-cyan-600 font-bold">What We Do</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary-900">Core Services For Clinics & Labs</h2>
            <p className="mt-4 text-slate-500">We offer end-to-end solutions, helping clinics source the right equipment and keeping it operational year-round.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sales Card */}
            <motion.div 
              {...reveal}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 shadow-xl overflow-hidden group"
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
              {...reveal}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-50/50 to-white border border-cyan-100/70 shadow-xl overflow-hidden group"
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

      {/* Featured Equipment Carousel */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Featured Equipment</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary-900">Popular With Clinics & Labs</h2>
            </div>
            <div className="hidden md:flex gap-3 shrink-0">
              <button type="button" aria-label="Previous products" className="featured-prev h-11 w-11 flex items-center justify-center rounded-full bg-white border border-slate-200 text-primary-900 hover:bg-primary-900 hover:text-white transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" aria-label="Next products" className="featured-next h-11 w-11 flex items-center justify-center rounded-full bg-white border border-slate-200 text-primary-900 hover:bg-primary-900 hover:text-white transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation, A11y, Keyboard]}
            loop
            autoplay={{ delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: '.featured-prev', nextEl: '.featured-next' }}
            keyboard={{ enabled: true }}
            breakpoints={{
              0: { slidesPerView: 1.15, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
              1280: { slidesPerView: 4, spaceBetween: 24 }
            }}
            className="!pt-2 !pb-12 [--swiper-theme-color:#06b6d4]"
          >
            {PRODUCTS_DATA.map((product) => (
              <SwiperSlide key={product.id} className="!h-auto">
                <motion.div whileHover={{ y: -6 }} className="h-full flex flex-col bg-white rounded-2xl border border-slate-200/60 shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                  <Link to={`/products?category=${product.category}`} className="block bg-slate-100">
                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.categoryLabel} by Blue Bird Dentools`}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-square object-cover"
                    />
                  </Link>
                  <div className="flex flex-col flex-1 p-5">
                    <p className="text-xs uppercase tracking-widest text-cyan-600 font-bold">{product.categoryLabel}</p>
                    <h3 className="mt-2 text-base font-bold text-primary-900 leading-snug">
                      <Link to={`/products?category=${product.category}`} className="hover:text-cyan-600 transition-colors">{product.name}</Link>
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">Model: {product.modelCode}</p>
                    <Link
                      to={`/contact?type=sales&product=${encodeURIComponent(product.name)}`}
                      className="mt-auto pt-4 inline-flex items-center min-h-[40px] text-sm font-bold text-primary-900 hover:text-cyan-600 group"
                    >
                      Inquire
                      <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 3. Featured Categories Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Product Categories</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary-900">Find What You Need</h2>
            <p className="mt-4 text-slate-500">Explore our comprehensive catalog structured to quickly connect you with clinical equipment.</p>
          </div>

          <Swiper
            modules={[FreeMode, Pagination, A11y]}
            freeMode={{ enabled: true, sticky: true }}
            pagination={{ clickable: true }}
            grabCursor
            breakpoints={{
              0: { slidesPerView: 1.4, spaceBetween: 16 },
              480: { slidesPerView: 2.2, spaceBetween: 16 },
              768: { slidesPerView: 3.2, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 }
            }}
            className="!pt-2 !pb-12 lg:!pb-2 [--swiper-theme-color:#06b6d4] lg:[&_.swiper-pagination]:hidden"
          >
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <SwiperSlide key={cat.code} className="!h-auto">
                  <motion.div
                    initial={{ y: 24 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: Math.min(idx * 0.04, 0.15) }}
                    whileHover={{ y: -6 }}
                    className="h-full"
                  >
                    <Link
                      to={`/products?category=${cat.code}`}
                      className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200/60 hover:border-cyan-400 hover:shadow-xl transition-all h-full group"
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="p-4 bg-slate-50 text-primary-900 rounded-2xl group-hover:bg-primary-900 group-hover:text-white transition-colors duration-300"
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="mt-4 text-base font-bold text-primary-900 group-hover:text-cyan-600 transition-colors">{cat.name}</h3>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="relative">
              {/* Decorative Card Elements */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-cyan-100 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-3xl -z-10" />
              
              <motion.div
                initial={{ rotate: -2, y: 24 }}
                whileInView={{ rotate: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 90, damping: 14 }}
                className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full translate-x-20 -translate-y-20 blur-[80px]" />
                <h3 className="text-2xl font-bold mb-6">Our Support Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-slate-400">Response Time</span>
                    <span className="text-cyan-400 font-bold text-lg"><CountUp to={4} prefix="< " suffix=" Hours" /></span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-slate-400">Spare Parts Authenticity</span>
                    <span className="text-cyan-400 font-bold text-lg"><CountUp to={100} suffix="% Genuine" /></span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-slate-400">Certified Repair Engineers</span>
                    <span className="text-cyan-400 font-bold text-lg">ISO 13485 Compliant</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Clinics Served</span>
                    <span className="text-cyan-400 font-bold text-lg"><CountUp to={500} suffix="+ Nationwide" /></span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Highlights Column */}
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Why Choose Us</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary-900 leading-tight">Uncompromising Standards In Dental Care Infrastructure</h2>
              <p className="mt-4 text-slate-500">Every piece of hardware we supply, and every service task we perform, adheres to strict medical compliance and clinic optimization guidelines.</p>

              <motion.div {...reveal} variants={staggerContainer} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                  <div className="p-2.5 bg-primary-50 rounded-lg text-primary-900 mt-1">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 text-sm">Genuine Spare Parts</h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">No generic components. We supply certified parts sourced directly from manufacturers.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                  <div className="p-2.5 bg-primary-50 rounded-lg text-primary-900 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 text-sm">Fast Turnaround</h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">Minimize patient rescheduling with our same-day diagnosis and prompt dispatch.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                  <div className="p-2.5 bg-primary-50 rounded-lg text-primary-900 mt-1">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 text-sm">Certified Engineers</h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">Highly trained technicians specialize in calibration, autoclave testing, and motors.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                  <div className="p-2.5 bg-primary-50 rounded-lg text-primary-900 mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 text-sm">Wide Selection</h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">A complete inventory of chairs, x-ray units, autoclaves, and handpieces.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials & Clinic Trust Badges */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Trusted Reviews</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary-900">What Clinic Directors Say</h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            grabCursor
            pagination={{ clickable: true }}
            autoHeight={false}
            spaceBetween={24}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pt-2 !pb-12 [--swiper-theme-color:#06b6d4]"
          >
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
              <SwiperSlide key={idx} className="!h-auto">
              <motion.div whileHover={{ y: -6 }} className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/60 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
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
              </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Trust Badges */}
          {/* Trust Badges marquee */}
          <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-slate-200/50 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              freeMode
              slidesPerView="auto"
              spaceBetween={48}
              speed={5000}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              allowTouchMove={false}
              className="[&_.swiper-wrapper]:!ease-linear"
            >
              {[...TRUST_BADGES, ...TRUST_BADGES].map((badge, i) => (
                <SwiperSlide key={i} className="!w-auto">
                  <span className="flex items-center gap-2 font-bold text-sm text-slate-400 select-none uppercase tracking-widest whitespace-nowrap">
                    <ShieldCheck className="h-4 w-4 text-cyan-500" />
                    {badge}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
