import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Shield, CheckCircle, ShieldAlert, ChevronRight, CalendarCheck, Stethoscope, Wrench, ClipboardCheck } from 'lucide-react';
import Seo from '../components/Seo';

const PROCESS_STEPS = [
  { icon: CalendarCheck, title: 'Book a Visit', desc: 'Send the form or WhatsApp us with your equipment and the issue you are facing.' },
  { icon: Stethoscope, title: 'On-Site Diagnosis', desc: 'An engineer inspects the unit at your clinic and confirms the fault and the parts needed.' },
  { icon: Wrench, title: 'Repair With Genuine Parts', desc: 'We fix the equipment using original spare parts, keeping clinic downtime to a minimum.' },
  { icon: ClipboardCheck, title: 'Calibrate & Report', desc: 'The unit is tested, calibrated and handed over with a service report for your records.' }
];

const Services: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    phone: '',
    email: '',
    equipment: '',
    serviceType: 'breakdown',
    urgency: 'routine',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const typeLabel = 
      formData.serviceType === 'breakdown' ? 'Emergency Breakdown Repair' :
      formData.serviceType === 'amc' ? 'Annual Maintenance Contract (AMC)' :
      formData.serviceType === 'calibration' ? 'ISO Calibration' :
      formData.serviceType === 'installation' ? 'Installation' : 'Spare Parts Replacement';

    const urgencyLabel = 
      formData.urgency === 'emergency' ? '🔴 CRITICAL (Immediate Surgery Halt)' :
      formData.urgency === 'medium' ? '🟡 URGENT (Next 24 Hours)' : '🟢 ROUTINE';

    const messageText = `*New Service Booking via Blue Bird Dentools*

*Service Type:* ${typeLabel}
*Urgency Level:* ${urgencyLabel}
*Name:* ${formData.name}
*Clinic:* ${formData.clinicName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Equipment Info:* ${formData.equipment}
*Description/Symptoms:* ${formData.message}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919000280015?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        clinicName: '',
        phone: '',
        email: '',
        equipment: '',
        serviceType: 'breakdown',
        urgency: 'routine',
        message: ''
      });
    }, 1000);
  };

  const offerings = [
    {
      title: 'Annual Maintenance Contracts (AMC)',
      description: 'Comprehensive preventative service agreements. Covers regular scaling inspections, vacuum pump checks, and handpiece cleaning to prevent breakdown issues.',
      specs: ['Quarterly physical inspections', 'Free emergency breakdown visits', 'Discounted spare parts catalog', 'Compliance calibration reports'],
      image: '/images/scaler_unit.webp',
      alt: 'Ultrasonic dental scaler unit covered under an annual maintenance contract'
    },
    {
      title: 'Emergency Breakdown Repair',
      description: 'Critical repair services to resolve equipment shutdowns quickly. Dedicated response teams equipped with diagnostics arrive on-site within hours.',
      specs: ['< 4-Hour response in service areas', 'On-site diagnosis & repair', 'Certified critical component replacement', 'Temporary loaner units (subject to availability)'],
      image: '/images/portable_unit.webp',
      alt: 'Portable dental unit undergoing emergency on-site breakdown repair'
    },
    {
      title: 'Spare Parts Replacement',
      description: 'Authorized component supply catalog. We source, supply, and install original spare parts with manufacturer guarantees.',
      specs: ['100% Genuine spare parts', 'Original turbine cartridges', 'High-quality O-rings and gaskets', 'O-OEM component certification'],
      image: '/images/airotor_cartridges.webp',
      alt: 'Genuine airotor turbine cartridges supplied as replacement spare parts'
    },
    {
      title: 'Equipment Calibration & Installation',
      description: 'System deployment and validation. We install heavy furniture, autoclave units, and align diagnostic imaging to state radiation specifications.',
      specs: ['ISO 13485 calibration documentation', 'Accurate pressure & temperature checks', 'Radiation shielding leakage testing', 'Staff equipment safety training'],
      image: '/images/bclass_autoclave.webp',
      alt: 'B-Class autoclave sterilizer installed and calibrated by Blue Bird Dentools'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-20 lg:py-24">
      <Seo
        title="Dental Equipment Repair & AMC Services | Guntur, AP & TS"
        description="Dental equipment repair, AMCs, calibration and genuine spare parts from Blue Bird Dentools, Guntur. On-site service across Andhra Pradesh and Telangana."
        path="/services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">Dental Repair & Maintenance Services</h1>
          <p className="mt-4 text-sm sm:text-base text-slate-500">
            We provide responsive clinical repairs, preventative maintenance contracts, and ISO-certified calibrations to keep your dental equipment fully operational.
          </p>
        </div>

        {/* Service Process slider */}
        <div className="mb-12 sm:mb-16">
          <Swiper
            modules={[Pagination, Autoplay, A11y, Keyboard]}
            pagination={{ type: 'progressbar' }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            keyboard={{ enabled: true }}
            grabCursor
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 }
            }}
            className="!pt-3 [--swiper-theme-color:#06b6d4] [--swiper-pagination-progressbar-size:3px]"
          >
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <SwiperSlide key={step.title} className="!h-auto">
                  <motion.div
                    initial={{ y: 24 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.15) }}
                    whileHover={{ y: -6 }}
                    className="relative h-full bg-white rounded-2xl border border-slate-200/60 shadow-md p-6 overflow-hidden group"
                  >
                    <span className="absolute -right-2 -top-4 text-7xl font-extrabold text-slate-100 select-none" aria-hidden="true">{idx + 1}</span>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative inline-flex p-3 bg-primary-900 text-white rounded-xl shadow-md"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="relative mt-4 text-base font-bold text-primary-900">{step.title}</h3>
                    <p className="relative mt-2 text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Content Split: Services Grid & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Services Column */}
          <div className="lg:col-span-7 space-y-8 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-900 border-b border-slate-200 pb-4">Our Service Offerings</h2>
            
            <div className="space-y-6">
              {offerings.map((offer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 24 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/60 shadow-md hover:border-cyan-500 hover:shadow-lg transition-[border-color,box-shadow] duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Visual thumbnail container */}
                    <div className="w-20 h-20 rounded-xl bg-white border border-slate-100 p-2 shrink-0 flex items-center justify-center overflow-hidden shadow-sm self-center sm:self-start">
                      <img 
                        src={offer.image} 
                        alt={offer.alt}
                        width={80}
                        height={80}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <h3 className="text-lg font-bold text-primary-900">{offer.title}</h3>
                      <p className="mt-1 text-sm text-slate-500 leading-relaxed">{offer.description}</p>
                      
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {offer.specs.map((spec, specIdx) => (
                          <div key={specIdx} className="flex items-start text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 mt-0.5 shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Info Banner */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="p-3 bg-red-100 text-red-600 rounded-xl shrink-0"
              >
                <ShieldAlert className="h-6 w-6" />
              </motion.div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-red-950 text-base">Critical Breakdown? Emergency Helpline</h3>
                <p className="mt-1 text-sm text-red-800 leading-relaxed">
                  If you are experiencing an immediate equipment failure halting surgery (e.g. air compressor shutdown, dental chair hydraulics lock), contact our emergency hotline immediately.
                </p>
                <a href="tel:+919000280015" className="mt-2 inline-flex items-center min-h-[40px] text-sm font-bold text-red-900 hover:text-red-700">
                  Call +91 9000280015
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-5">
            <div className="bg-white p-5 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xl lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-primary-900 mb-4">Book a Service / Repair</h2>
              
              {/* Regional Limitation Alert */}
              <div className="mb-6 bg-cyan-50 border border-cyan-200/80 rounded-xl p-3.5 flex items-start space-x-2.5 text-cyan-900 text-sm">
                <div className="bg-cyan-100 text-cyan-800 p-1 rounded-lg shrink-0 mt-0.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-primary-950">Notice:</span> Technical dispatches and engineering repair support are available exclusively within <strong>Andhra Pradesh</strong> and <strong>Telangana</strong>.
                </div>
              </div>
              
              <AnimatePresence mode="wait" initial={false}>
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label htmlFor="svc-name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                      <input
                        type="text"
                        id="svc-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                        placeholder="Dr. Alexander Wright"
                      />
                    </div>

                    <div>
                      <label htmlFor="svc-clinicName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Clinic / Laboratory Name</label>
                      <input
                        type="text"
                        id="svc-clinicName"
                        name="clinicName"
                        required
                        value={formData.clinicName}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                        placeholder="White Arch Dental Clinic"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="svc-phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="svc-phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                          placeholder="(555) 019-2834"
                        />
                      </div>
                      <div>
                        <label htmlFor="svc-email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                        <input
                          type="email"
                          id="svc-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                          placeholder="wright@dental.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="svc-equipment" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Equipment / Model Details</label>
                      <input
                        type="text"
                        id="svc-equipment"
                        name="equipment"
                        required
                        value={formData.equipment}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                        placeholder="B-Class Autoclave (BBD-AC23) or dental chair"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="svc-serviceType" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Service Requested</label>
                        <select
                          id="svc-serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all bg-white"
                        >
                          <option value="breakdown">Breakdown Repair</option>
                          <option value="calibration">ISO Calibration</option>
                          <option value="installation">Installation</option>
                          <option value="amc">AMC Registration</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="svc-urgency" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Urgency Level</label>
                        <select
                          id="svc-urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all bg-white"
                        >
                          <option value="routine">Routine Check</option>
                          <option value="medium">Medium Priority</option>
                          <option value="emergency">Emergency Shutdown</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="svc-message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Issue Description / Message</label>
                      <textarea
                        id="svc-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all resize-none"
                        placeholder="Describe the failure, error codes shown on the display, or alignment needs..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileTap={{ scale: 0.97 }}
                      className="w-full min-h-[44px] flex items-center justify-center py-3 text-sm font-bold text-white bg-primary-900 rounded-xl hover:bg-cyan-600 transition-colors disabled:opacity-50 shadow-lg"
                    >
                      {loading ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        'Request Support Dispatch'
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="text-center py-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring' }}
                  >
                    <div className="inline-flex p-4 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full mb-6">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900">Request Registered!</h3>
                    <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                      Our dispatch desk has registered your dental support request. A certified service engineer will contact you shortly to confirm the scheduled arrival time.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 inline-flex items-center justify-center min-h-[40px] px-4 py-2.5 text-sm font-bold rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-widest justify-center text-center">
                <Shield className="h-4 w-4 text-cyan-500" />
                <span>Encrypted Clinical Ticket Dispatch</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
