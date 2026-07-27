import React from 'react';
import { Heart, ShieldCheck, Users, Sparkles, Target, Award } from 'lucide-react';

const About: React.FC = () => {
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
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Core Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary-900/5 border border-primary-900/10 px-3 py-1.5 rounded-full text-primary-900 text-xs font-bold uppercase tracking-widest">
              <Award className="h-4 w-4 text-cyan-500" />
              <span>Who We Are</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight leading-tight">
              Supporting Dental Professionals With Premium Equipment & Engineering Precision
            </h1>
            <p className="text-slate-500 leading-relaxed">
              Founded on the principle of engineering excellence, Blue Bird Dentools has grown from a specialized technical repair center into a premier distributor of high-performance dental equipment and full-service clinical maintenance plans.
            </p>
            <p className="text-slate-500 leading-relaxed">
              We understand that clinical downtime translates directly to disrupted patient care. That is why our business model bridges high-quality dental chair and diagnostic instrument sales with a highly responsive, certified service department.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200/60 shadow-md">
                <Target className="h-6 w-6 text-cyan-500 mb-2" />
                <h4 className="font-bold text-primary-900 text-sm">Our Mission</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">Deliver state-of-the-art dental hardware and absolute maintenance calibration support to enable clinics to thrive.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200/60 shadow-md">
                <Award className="h-6 w-6 text-cyan-500 mb-2" />
                <h4 className="font-bold text-primary-900 text-sm">Our Vision</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">Be the nation's most trusted partner for dental clinic infrastructure, known for rapid-response servicing and quality standards.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Visual representation image of modern clinic */}
            <div className="h-64 rounded-2xl overflow-hidden relative shadow-xl border border-slate-200/60 group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: 'url("/hero_dental.png")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Active Workspace Presence</p>
                  <h4 className="text-base font-bold text-white mt-1">State-of-the-Art Clinical Care Setup</h4>
                </div>
              </div>
            </div>

            {/* Principles Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-primary-900/20 rounded-2xl transform rotate-3" />
              <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl relative z-10 space-y-6">
                <h3 className="text-xl font-bold font-sans">Our Operational Principles</h3>
                <ul className="space-y-4 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-slate-900 font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mr-3 mt-0.5 text-xs">1</span>
                    <span className="text-slate-300">Absolute compliance with local radiation and medical sterilization guidelines.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-slate-900 font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mr-3 mt-0.5 text-xs">2</span>
                    <span className="text-slate-300">Continuous technical training upgrades directly at manufacturer facilities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-slate-900 font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mr-3 mt-0.5 text-xs">3</span>
                    <span className="text-slate-300">Maintaining an extensive inventory of authentic replacement parts to guarantee fast delivery.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Our Philosophy</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-primary-900">The Values Directing Our Team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200/60 hover:border-cyan-400 hover:shadow-xl transition-all flex flex-col items-start h-full">
                  <div className="p-3 bg-slate-50 text-primary-900 rounded-xl mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-primary-900">{v.title}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Milestones Timeline */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-cyan-600 font-bold">Timeline</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-primary-900">Milestones of Operations</p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8">
                {/* Year Badge */}
                <div className="absolute -left-2 top-1.5 bg-cyan-500 border-2 border-white w-4.5 h-4.5 rounded-full" />
                <div className="absolute -left-20 top-0.5 text-right font-extrabold text-primary-900 text-lg hidden md:block w-16">
                  {m.year}
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-md max-w-2xl">
                  <span className="font-bold text-xs text-cyan-600 md:hidden block mb-1">{m.year}</span>
                  <h3 className="text-base font-bold text-primary-900">{m.title}</h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
