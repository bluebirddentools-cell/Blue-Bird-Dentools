import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

const PRODUCTS_LIST = [
  'Premium Dental Chair',
  'Portable Dental Unit',
  'Wallmount DC X-Ray',
  'Portable Handheld X-Ray',
  'B-Class Autoclave',
  'UV Instrument Chamber',
  'Straight & Contra-Angle Handpiece Set',
  'Super-Torque Airotor Handpiece',
  'Cordless Endo Motor',
  'Lab Micro Motor & Control Box',
  'Clinical Micro Motor',
  'Airotor Turbine Cartridges',
  'Ultrasonic Piezo Scaler',
  'Broad-Spectrum LED Curing Light',
  'Noiseless Air Compressor',
  'Other / General Support'
];

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    phone: '',
    email: '',
    requestType: 'sales', // 'sales' (Sales Inquiry) or 'service' (Service/Repair)
    selectedEquipment: 'Other / General Support',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill state from URL query parameters
  useEffect(() => {
    const typeParam = searchParams.get('type'); // 'sales', 'service', 'quote'
    const productParam = searchParams.get('product'); // exact product name

    let initialRequestType = 'sales';
    if (typeParam === 'service') {
      initialRequestType = 'service';
    } else if (typeParam === 'sales' || typeParam === 'quote') {
      initialRequestType = 'sales';
    }

    let initialEquipment = 'Other / General Support';
    if (productParam && PRODUCTS_LIST.includes(productParam)) {
      initialEquipment = productParam;
    } else if (typeParam === 'quote') {
      initialEquipment = PRODUCTS_LIST[0]; // default to first product for general quotes
    }

    setFormData((prev) => ({
      ...prev,
      requestType: initialRequestType,
      selectedEquipment: initialEquipment
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const typeLabel = formData.requestType === 'sales' ? 'Sales Inquiry / Quote' : 'Technical Service / Repair';
    const messageText = `*New Inquiry via Blue Bird Dentools Website*

*Request Type:* ${typeLabel}
*Name:* ${formData.name}
*Clinic:* ${formData.clinicName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Equipment:* ${formData.selectedEquipment}
*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919000280015?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Display confirmation screen
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        clinicName: '',
        phone: '',
        email: '',
        requestType: 'sales',
        selectedEquipment: 'Other / General Support',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">Contact & Quote Inquiry</h1>
          <p className="mt-4 text-slate-500">
            Submit a direct equipment sales query, request customized clinic configuration quotes, or schedule maintenance dispatches for your existing hardware.
          </p>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* 1. Contact Info Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-lg space-y-8 flex-grow">
              <h2 className="text-xl font-bold text-primary-900">Clinical Support Desk</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Connect with our service dispatcher or clinical sales representatives. Our teams respond to inquiries within 1 business day.
              </p>

              <div className="space-y-6 pt-4 border-t border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 text-primary-900 border border-slate-100 rounded-xl shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Service Hotline</p>
                    <a href="tel:+919000280015" className="text-sm font-bold text-primary-900 hover:text-cyan-600">
                      +91 9000280015
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 text-primary-900 border border-slate-100 rounded-xl shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Inquiry</p>
                    <a href="mailto:bluebirddentools@gmail.com" className="text-sm font-bold text-primary-900 hover:text-cyan-600">
                      bluebirddentools@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 text-primary-900 border border-slate-100 rounded-xl shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Office Headquarters</p>
                    <a
                      href="https://maps.app.goo.gl/6bWMvmJ5ABrzbZnaA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 hover:text-cyan-600 font-medium leading-relaxed block"
                    >
                      Blue Bird Dentools City Market Shop Number 137, Opposite Maruti Suzuki Showroom, Kakani Road, Guntur-522001, Andhra Pradesh
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full translate-x-12 -translate-y-12 blur-2xl" />
              <h3 className="text-lg font-bold flex items-center space-x-2">
                <Clock className="h-5 w-5 text-cyan-400" />
                <span>Office Hours</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Monday - Sunday</span>
                  <span className="font-semibold text-slate-200">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400 italic">
                  <span>Andhra Pradesh & Telangana</span>
                  <span>Full Technical Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Interactive Form Column */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-xl h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-primary-900 mb-2">Quote & Inquiry Form</h2>
                <p className="text-xs text-slate-400 mb-6">Please fill in clinical details to assist our sales and tech desks.</p>

                {/* Regional Limitation Alert */}
                <div className="mb-6 bg-cyan-50 border border-cyan-200/80 rounded-xl p-4 flex items-start space-x-3 text-cyan-900 text-xs">
                  <div className="bg-cyan-100 text-cyan-800 p-1.5 rounded-lg shrink-0 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-primary-950">Notice:</span> We accept service bookings, calibration audits, and delivery inquiries exclusively from clinical operators based within <strong>Andhra Pradesh</strong> and <strong>Telangana</strong>.
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                            placeholder="Dr. Samantha Cooper"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Clinic / Practice Name</label>
                          <input
                            type="text"
                            name="clinicName"
                            required
                            value={formData.clinicName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                            placeholder="Cooper Dental & Implant Center"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                            placeholder="samantha@cooperdentistry.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Request Type</label>
                          <select
                            name="requestType"
                            value={formData.requestType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all bg-white"
                          >
                            <option value="sales">Sales Inquiry / Purchase Quote</option>
                            <option value="service">Technical Service / Repair Ticket</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Select Dental Equipment</label>
                          <select
                            name="selectedEquipment"
                            value={formData.selectedEquipment}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all bg-white"
                          >
                            {PRODUCTS_LIST.map((prod, idx) => (
                              <option key={idx} value={prod}>{prod}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Inquiry Details / Message</label>
                        <textarea
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all resize-none"
                          placeholder="Provide details of your request. E.g., quantity needed, custom clinic dimensions, urgency of service dispatch, or repair symptoms..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center py-3 text-sm font-bold text-white bg-primary-900 rounded-xl hover:bg-cyan-600 transition-all disabled:opacity-50 active:scale-95 shadow-lg shadow-primary-900/10"
                      >
                        {loading ? (
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit Inquiry Ticket
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      className="text-center py-12 flex flex-col items-center justify-center h-full"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring' }}
                    >
                      <div className="inline-flex p-4 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full mb-6">
                        <CheckCircle2 className="h-12 w-12" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-900">Inquiry Received Successfully</h3>
                      <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-md">
                        Thank you for contacting Blue Bird Dentools. Your ticket has been dispatched. A clinic consultant or service coordinator will contact you by phone or email within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 inline-flex justify-center px-4 py-2.5 text-xs font-bold rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Data Compliance Info */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest justify-center">
                <ShieldCheck className="h-4 w-4 text-cyan-500 animate-pulse" />
                <span>HIPAA-Compliant & Secure Data Routing</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
