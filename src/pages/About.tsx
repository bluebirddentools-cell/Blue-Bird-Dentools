import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Heart, ShieldCheck, Users, Sparkles, Target, Award } from 'lucide-react';
import Seo from '../components/Seo';

const GALLERY = [
  { src: '/hero_dental.webp', alt: 'Modern dental clinic with treatment chair and equipment serviced by Blue Bird Dentools', label: 'Active Workspace Presence', caption: 'State-of-the-Art Clinical Care Setup' },
  { src: '/images/dental_chair.webp', alt: 'Premium dental chair supplied by Blue Bird Dentools', label: 'Furniture & Units', caption: 'Ergonomic Dental Chairs' },
  { src: '/images/bclass_autoclave.webp', alt: 'B-Class autoclave for clinic sterilization', label: 'Sterilization & Hygiene', caption: 'B-Class Autoclaves & UV Chambers' },
  { src: '/images/airotor_handpiece.webp', alt: 'Airotor dental handpiece', label: 'Handpieces & Motors', caption: 'Precision Handpieces & Genuine Parts' }
];

const About: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 80%', 'end 60%'] });
  const timelineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  const values = [
    {
      icon: Heart,
      title: 'Dentist-Centric Support',
      desc: 'Our work focuses on enabling dental practitioners to concentrate on patient care, knowing their infrastructure is flawless.'
    },
    {
      icon: ShieldCheck,
      title: 'Medical Grade Calibration',
      desc: 'We do not compromise. All calibrations and tests adhere strictly to ISO 13485 and manufacturer specifications.'
    },
    {
      icon: Users,
      title: 'Certified Expert Team',
      desc: 'Every team member undergoes manufacturer training programs and holds certifications for complex dental machinery repairs.'
    },
    {
      icon: Sparkles,
      title: '100% Genuine Supplies',
      desc: 'We refuse generic components. We believe that genuine parts extend equipment lifespan and ensure patient safety.'
    }
  ];

  const milestones = [
    { year: '2016', title: 'Founding Year', desc: 'Blue Bird Dentools was established as a localized handpiece repair workshop.' },
    { year: '2018', title: 'Catalog Expansion', desc: 'Formed partnerships with dental chair and high-frequency autoclave suppliers.' },
    { year: '2021', title: 'ISO 13485 Certification', desc: 'Our engineering department was officially certified for ISO medical device calibration standard compliance.' },
    { year: '2024', title: 'Digital Diagnostic Launch', desc: 'Introduced high-frequency handheld X-Rays and digital intraoral sensor product lines.' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-20 lg:py-24 overflow-hidden">
      <Seo
        title="About Blue Bird Dentools | Dental Equipment Experts Guntur"
        description="Blue Bird Dentools supplies genuine dental equipment and certified repair and calibration services to clinics in Guntur, Andhra Pradesh and Telangana since 2016."
        path="/about"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Core Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary-900/5 border border-primary-900/10 px-3 py-1.5 rounded-full text-primary-900 text-xs font-bold uppercase tracking-widest">
              <Award className="h-4 w-4 text-cyan-500" />
              <span>Who We Are</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight leading-tight">
              Supporting Dental Professionals With Premium Equipment & Engineering Precision
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Founded on the principle of engineering excellence, Blue Bird Dentools has grown from a specialized technical repair center into a premier distributor of high-performance dental equipment and full-service clinical maintenance plans.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              We understand that clinical downtime translates directly to disrupted patient care. That is why our business model bridges high-quality dental chair and diagnostic instrument sales with a highly responsive, certified service department.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
              <div className="p-5 bg-white rounded-xl border border-slate-200/60 shadow-md">
                <Target className="h-6 w-6 text-cyan-500 mb-2" />
                <h2 className="font-bold text-primary-900 text-sm">Our Mission</h2>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">Deliver state-of-the-art dental hardware and absolute maintenance calibration support to enable clinics to thrive.</p>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200/60 shadow-md">
                <Award className="h-6 w-6 text-cyan-500 mb-2" />
                <h2 className="font-bold text-primary-900 text-sm">Our Vision</h2>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">Be the nation's most trusted partner for dental clinic infrastructure, known for rapid-response servicing and quality standards.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Visual representation image of modern clinic */}
            <div className="h-56 sm:h-64 rounded-2xl overflow-hidden relative shadow-xl border border-slate-200/60">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination, A11y]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop
                speed={900}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="h-full [--swiper-theme-color:#22d3ee] [--swiper-pagination-bottom:12px] [--swiper-pagination-bullet-inactive-color:#fff]"
              >
                {GALLERY.map((g) => (
                  <SwiperSlide key={g.src} className="group">
                    <img
                      src={g.src}
                      alt={g.alt}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5 sm:p-6 pb-9">
                      <div>
                        <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{g.label}</p>
                        <p className="text-base font-bold text-white mt-1">{g.caption}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Principles Card */}
            <div className="relative">
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 3 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 80, damping: 12 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-primary-900/20 rounded-2xl"
              />
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl relative z-10 space-y-6">
                <h2 className="text-lg sm:text-xl font-bold font-sans">Our Operational Principles</h2>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-slate-900 font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mr-3 mt-0.5 text-xs">1</span>
                    <span className="text-slate-200">Absolute compliance with local radiation and medical sterilization guidelines.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-slate-900 font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mr-3 mt-0.5 text-xs">2</span>
                    <span className="text-slate-200">Continuous technical training upgrades directly at manufacturer facilities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-slate-900 font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mr-3 mt-0.5 text-xs">3</span>
                    <span className="text-slate-200">Maintaining an extensive inventory of authentic replacement parts to guarantee fast delivery.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Core Values */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <p className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Our Philosophy</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-primary-900">The Values Directing Our Team</h2>
          </div>

          {/* Slider on phones/tablets, 4-up on desktop (pagination auto-hides when all fit) */}
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 }
            }}
            className="!pb-10 [--swiper-theme-color:#06b6d4]"
          >
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <SwiperSlide key={idx} className="!h-auto">
                  <motion.div
                    initial={{ y: 24 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.15) }}
                    whileHover={{ y: -6 }}
                    className="p-6 bg-white rounded-2xl border border-slate-200/60 hover:border-cyan-400 hover:shadow-xl transition-[border-color,box-shadow] flex flex-col items-start h-full group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -8 }}
                      className="p-3 bg-slate-50 text-primary-900 rounded-xl mb-4 group-hover:bg-primary-900 group-hover:text-white transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="text-base font-bold text-primary-900">{v.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Section 3: Milestones Timeline */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <p className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Timeline</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-primary-900">Milestones of Operations</h2>
          </div>

          <div ref={timelineRef} className="relative border-l-2 border-slate-200 ml-2 sm:ml-4 md:ml-32 space-y-8 sm:space-y-12">
            {/* Progress line that draws as you scroll through the timeline */}
            <motion.div
              style={{ scaleY: timelineProgress }}
              className="absolute -left-[2px] top-0 bottom-0 w-0.5 bg-cyan-500 origin-top"
              aria-hidden="true"
            />
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                className="relative pl-6 sm:pl-8"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Year Badge */}
                <motion.div
                  initial={{ scale: 0.4 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                  className="absolute -left-[9px] top-1.5 bg-cyan-500 border-2 border-white w-4 h-4 rounded-full ring-4 ring-cyan-500/20"
                />
                <div className="absolute -left-20 top-0.5 text-right font-extrabold text-primary-900 text-lg hidden md:block w-16">
                  {m.year}
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/60 shadow-md max-w-2xl">
                  <span className="font-bold text-xs text-cyan-600 md:hidden block mb-1">{m.year}</span>
                  <h3 className="text-base font-bold text-primary-900">{m.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
