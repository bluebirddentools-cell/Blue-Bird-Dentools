import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, ShieldAlert, ChevronRight } from 'lucide-react';

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
      formData.serviceType === 'calibration' ? 'Calibration / Installation' : 'Spare Parts Replacement';

    const urgencyLabel = 
      formData.urgency === 'critical' ? '🔴 CRITICAL (Immediate Surgery Halt)' :
      formData.urgency === 'urgent' ? '🟡 URGENT (Next 24 Hours)' : '🟢 ROUTINE';

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
      image: '/images/scaler_unit.png'
    },
    {
      title: 'Emergency Breakdown Repair',
      description: 'Critical repair services to resolve equipment shutdowns quickly. Dedicated response teams equipped with diagnostics arrive on-site within hours.',
      specs: ['< 4-Hour response in service areas', 'On-site diagnosis & repair', 'Certified critical component replacement', 'Temporary loaner units (subject to availability)'],
      image: '/images/portable_unit.png'
    },
    {
      title: 'Spare Parts Replacement',
      description: 'Authorized component supply catalog. We source, supply, and install original spare parts with manufacturer guarantees.',
      specs: ['100% Genuine spare parts', 'Original turbine cartridges', 'High-quality O-rings and gaskets', 'O-OEM component certification'],
      image: '/images/airotor_cartridges.png'
    },
    {
      title: 'Equipment Calibration & Installation',
      description: 'System deployment and validation. We install heavy furniture, autoclave units, and align diagnostic imaging to state radiation specifications.',
      specs: ['ISO 13485 calibration documentation', 'Accurate pressure & temperature checks', 'Radiation shielding leakage testing', 'Staff equipment safety training'],
      image: '/images/bclass_autoclave.png'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">Dental Repair & Maintenance Services</h1>
          <p className="mt-4 text-slate-500">
            We provide responsive clinical repairs, preventative maintenance contracts, and ISO-certified calibrations to keep your dental equipment fully operational.
          </p>
        </div>

        {/* Content Split: Services Grid & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Services Column */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-2xl font-bold text-primary-900 border-b border-slate-200 pb-4">Our Service Offerings</h2>
            
            <div className="space-y-6">
              {offerings.map((offer, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-md hover:border-cyan-500 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Visual thumbnail container */}
                    <div className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-100 p-2 shrink-0 flex items-center justify-center overflow-hidden shadow-inner self-center sm:self-start">
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-primary-900">{offer.title}</h3>
                      <p className="mt-1 text-sm text-slate-500 leading-relaxed">{offer.description}</p>
                      
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {offer.specs.map((spec, specIdx) => (
                          <div key={specIdx} className="flex items-center text-xs text-slate-600">
                            <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Info Banner */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-xl shrink-0">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-red-950 text-sm">Critical Breakdown? Emergency Helpline</h4>
                <p className="mt-1 text-xs text-red-800 leading-relaxed">
                  If you are experiencing an immediate equipment failure halting surgery (e.g. air compressor shutdown, dental chair hydraulics lock), contact our emergency hotline immediately.
                </p>
                <a href="tel:+919000280015" className="mt-3 inline-flex items-center text-sm font-bold text-red-900 hover:text-red-700">
                  Call +91 9000280015
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-xl sticky top-28">
              <h2 className="text-xl font-bold text-primary-900 mb-4">Book a Service / Repair</h2>
              
              {/* Regional Limitation Alert */}
              <div className="mb-6 bg-cyan-50 border border-cyan-200/80 rounded-xl p-3.5 flex items-start space-x-2.5 text-cyan-900 text-xs">
                <div className="bg-cyan-100 text-cyan-800 p-1 rounded-lg shrink-0 mt-0.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-primary-950">Notice:</span> Technical dispatches and engineering repair support are available exclusively within <strong>Andhra Pradesh</strong> and <strong>Telangana</strong>.
                </div>
              </div>
              
              <AnimatePresence mode="wait">
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
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                        placeholder="Dr. Alexander Wright"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Clinic / Laboratory Name</label>
                      <input
                        type="text"
                        name="clinicName"
                        required
                        value={formData.clinicName}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                        placeholder="White Arch Dental Clinic"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                          placeholder="(555) 019-2834"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                        <input
                          type="email"
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
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Equipment / Model Details</label>
                      <input
                        type="text"
                        name="equipment"
                        required
                        value={formData.equipment}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                        placeholder="B-Class Autoclave (BBD-AC23) or dental chair"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Service Requested</label>
                        <select
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
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Urgency Level</label>
                        <select
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
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Issue Description / Message</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all resize-none"
                        placeholder="Describe the failure, error codes shown on the display, or alignment needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center py-3 text-sm font-bold text-white bg-primary-900 rounded-xl hover:bg-cyan-600 transition-all disabled:opacity-50 active:scale-95 shadow-lg"
                    >
                      {loading ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        'Request Support Dispatch'
                      )}
                    </button>
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
                      className="mt-6 inline-flex justify-center px-4 py-2.5 text-xs font-bold rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest justify-center">
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
