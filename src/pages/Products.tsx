import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, ShieldCheck, HelpCircle, ZoomIn, ZoomOut, RotateCcw, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'furniture' | 'imaging' | 'sterilization' | 'handpieces' | 'essentials';
  categoryLabel: string;
  description: string;
  specs: string[];
  inStock: boolean;
  modelCode: string;
  image?: string;
}

const PRODUCTS_DATA: Product[] = [
  // Furniture & Units
  {
    id: 'dental-chair',
    name: 'Premium Dental Chair',
    category: 'furniture',
    categoryLabel: 'Furniture & Units',
    description: 'Premium dental chair engineered for maximum operator comfort and superior patient support with memory positioning.',
    specs: ['Ergonomic high-density foam upholstery', 'Quiet electro-pneumatic motor control', 'Double-articulating headrest', 'Programmable positions (4 preset + auto-return)'],
    inStock: true,
    modelCode: 'BBD-CH800',
    image: '/images/dental_chair.png'
  },
  {
    id: 'portable-unit',
    name: 'Portable Dental Unit',
    category: 'furniture',
    categoryLabel: 'Furniture & Units',
    description: 'Fully mobile dental cabinet system designed for field work, mobile clinics, and emergency hospital services.',
    specs: ['Self-contained system with silent air compressor', 'Clean water bottle supply system', 'High and low speed handpiece connections', 'Saliva ejector and 3-way syringe'],
    inStock: true,
    modelCode: 'BBD-PU40',
    image: '/images/portable_unit.png'
  },
  // Imaging & Diagnostics
  {
    id: 'wallmount-xray',
    name: 'Wallmount DC X-Ray',
    category: 'imaging',
    categoryLabel: 'Imaging & Diagnostics',
    description: 'Robust clinical intraoral x-ray machine delivering crisp, high-definition digital radiography diagnostics with minimal dose.',
    specs: ['High-frequency DC generator (70kV)', 'Microprocessor-controlled exposure panel', 'Scissors-type arm with smooth fluid movement', 'Zero-radiation leakage design'],
    inStock: true,
    modelCode: 'BBD-WX70',
    image: '/images/wallmount_xray.png'
  },
  {
    id: 'portable-xray',
    name: 'Portable Handheld X-Ray',
    category: 'imaging',
    categoryLabel: 'Imaging & Diagnostics',
    description: 'Ultra-portable dental X-Ray device for chairside radiographic exposures without moving the patient.',
    specs: ['Lightweight hand-held design (2.1 kg)', 'Double lead-shielded radiation protection', 'Long-lasting rechargeable Li-ion battery', 'High contrast LCD screen interface'],
    inStock: true,
    modelCode: 'BBD-PX22',
    image: '/images/portable_xray.png'
  },
  // Sterilization & Hygiene
  {
    id: 'bclass-autoclave',
    name: 'B-Class Autoclave',
    category: 'sterilization',
    categoryLabel: 'Sterilization & Hygiene',
    description: 'Medical-grade steam sterilizer offering absolute decontamination protocols for wrapped and unwrapped tools.',
    specs: ['Fractionated vacuum sterilization (Class B)', 'Built-in microprinter and USB data logging', 'Triple safety lock chamber door', 'Advanced bacteriological filter'],
    inStock: true,
    modelCode: 'BBD-AC23',
    image: '/images/bclass_autoclave.png'
  },
  {
    id: 'uv-chamber',
    name: 'UV Instrument Chamber',
    category: 'sterilization',
    categoryLabel: 'Sterilization & Hygiene',
    description: 'Reliable dry storage chamber designed to preserve sterile instruments after autoclaving.',
    specs: ['High-output germicidal UV-C tube (15W)', 'Stainless steel non-magnetic rustless trays', 'Safety door auto-cutoff switch', 'Microprocessor timer controller'],
    inStock: true,
    modelCode: 'BBD-UV18',
    image: '/images/uv_chamber.png'
  },
  // Handpieces & Motors
  {
    id: 'straight-contra-angle',
    name: 'Straight & Contra-Angle Handpiece Set',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Precision dental handpieces offering ultra-low vibration and high reliability for standard clinical routines.',
    specs: ['Internal water spray systems', '1:1 direct transmission speed ratio', 'Stainless steel lightweight sleeve design', 'Autoclavable up to 135°C'],
    inStock: true,
    modelCode: 'BBD-HP200',
    image: '/images/straight_contra_angle.png'
  },
  {
    id: 'airotor-handpiece',
    name: 'Super-Torque Airotor Handpiece',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Advanced turbine speed handpiece providing exceptional torque and cooling safety for tooth preparation.',
    specs: ['High-speed ceramic ball bearings (350k RPM)', 'Super-torque triple-port water spray', 'Push-button bur chuck system', 'Fiber optic light integration option'],
    inStock: true,
    modelCode: 'BBD-AH90',
    image: '/images/airotor_handpiece.png'
  },
  {
    id: 'cordless-endo-motor',
    name: 'Cordless Endo Motor',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Smart cordless endodontic motor with precise speed control and built-in apex locator compatibility.',
    specs: ['Continuous rotation & reciprocating modes', 'Pre-set file systems library (10 programs)', 'Auto-torque reverse and stop trigger', 'Miniature 16:1 contra-angle head'],
    inStock: true,
    modelCode: 'BBD-EM15',
    image: '/images/cordless_endo_motor.png'
  },
  {
    id: 'lab-micro-motor',
    name: 'Lab Micro Motor & Control Box',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Heavy-duty laboratory motor and benchtop console for precise model finishing, grinding, and polishing.',
    specs: ['High torque speed up to 50,000 RPM', 'Foot speed control pedal included', 'Forward/Reverse rotation directions', 'Overload protection mechanism'],
    inStock: true,
    modelCode: 'BBD-LM50',
    image: '/images/lab_micro_motor.png'
  },
  {
    id: 'micro-motor-handpiece',
    name: 'Clinical Micro Motor',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Standard clinic dental micro motor delivering reliable power for low-speed dental operations.',
    specs: ['E-type ISO connection fitting', 'Speed range 2,000 - 35,000 RPM', 'Low noise, carbon-brush motor system', 'Compatible with straight/contra-angle heads'],
    inStock: true,
    modelCode: 'BBD-MM35',
    image: '/images/micro_motor_handpiece.png'
  },
  {
    id: 'airotor-cartridges',
    name: 'Airotor Turbine Cartridges',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Direct replacement high-speed cartridge units for servicing standard dental turbine handpieces.',
    specs: ['High grade balanced turbine impellers', 'Heat-treated stainless steel spindle', 'Premium ceramic bearings', 'Anti-retraction system compatible'],
    inStock: true,
    modelCode: 'BBD-ATC08',
    image: '/images/airotor_cartridges.png'
  },
  // Essentials & Utilities
  {
    id: 'scaler-unit',
    name: 'Ultrasonic Piezo Scaler',
    category: 'essentials',
    categoryLabel: 'Essentials & Utilities',
    description: 'Advanced scaling unit for plaque and calculus removal with comfortable clinical performance.',
    specs: ['Piezoelectric ultrasonic vibration system', 'Autoclavable handpiece sleeve', 'Feedback control tracking frequency', 'Includes 5 scaler tips + wrench'],
    inStock: true,
    modelCode: 'BBD-SC12',
    image: '/images/scaler_unit.png'
  },
  {
    id: 'curing-light',
    name: 'Broad-Spectrum LED Curing Light',
    category: 'essentials',
    categoryLabel: 'Essentials & Utilities',
    description: 'High-power ergonomic curing light for fast polymerization of composites, sealants, and adhesives.',
    specs: ['Broad-spectrum blue LED (1200mW/cm²)', 'Multiple modes (Fast, Ramp, Pulse)', 'Cordless design with charging base', 'Long-lasting battery (up to 200 cycles)'],
    inStock: true,
    modelCode: 'BBD-CL10',
    image: '/images/curing_light.png'
  },
  {
    id: 'noiseless-compressor',
    name: 'Noiseless Air Compressor',
    category: 'essentials',
    categoryLabel: 'Essentials & Utilities',
    description: 'Medical air compressor supplying clean, dry, oil-free compressed air for up to two dental chairs.',
    specs: ['Oil-free clean air delivery', 'Low noise profile (55 dB)', 'Epoxy-coated internal tank (35L)', 'Dual auto-pressure shutoff switch'],
    inStock: true,
    modelCode: 'BBD-AC35',
    image: '/images/noiseless_compressor.png'
  }
];

const CATEGORIES = [
  { code: 'all', label: 'All Equipment' },
  { code: 'furniture', label: 'Furniture & Units' },
  { code: 'imaging', label: 'Imaging & Diagnostics' },
  { code: 'sterilization', label: 'Sterilization & Hygiene' },
  { code: 'handpieces', label: 'Handpieces & Motors' },
  { code: 'essentials', label: 'Essentials & Utilities' }
];

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxProduct, setLightboxProduct] = useState<Product | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  
  const currentCategory = searchParams.get('category') || 'all';

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.modelCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenLightbox = (product: Product) => {
    setLightboxProduct(product);
    setZoomScale(1);
  };

  const handleCloseLightbox = () => {
    setLightboxProduct(null);
    setZoomScale(1);
  };

  const handleNextLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxProduct) return;
    const activeList = filteredProducts.filter(p => p.image);
    if (activeList.length === 0) return;
    const currentIndex = activeList.findIndex(p => p.id === lightboxProduct.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % activeList.length;
    setLightboxProduct(activeList[nextIndex]);
    setZoomScale(1);
  };

  const handlePrevLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxProduct) return;
    const activeList = filteredProducts.filter(p => p.image);
    if (activeList.length === 0) return;
    const currentIndex = activeList.findIndex(p => p.id === lightboxProduct.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    setLightboxProduct(activeList[prevIndex]);
    setZoomScale(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxProduct) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNextLightbox();
      if (e.key === 'ArrowLeft') handlePrevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxProduct, filteredProducts]);

  const handleCategoryChange = (categoryCode: string) => {
    if (categoryCode === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryCode);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-extrabold text-primary-900 tracking-tight">Dental Equipment Catalog</h1>
          <p className="mt-4 text-slate-500">
            Browse our clinical inventory of genuine, certified equipment. All hardware includes standard warranties and is backed by our expert repair team.
          </p>
        </div>

        {/* Regional Notice Alert */}
        <div className="max-w-3xl mx-auto mb-10 bg-cyan-50 border border-cyan-200/80 rounded-xl p-4 flex items-start space-x-3 text-cyan-900 text-xs sm:text-sm">
          <div className="bg-cyan-100 text-cyan-800 p-1.5 rounded-lg shrink-0 mt-0.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-primary-950">Regional Availability Notice:</span> Equipment delivery, installation, and on-site repair services are exclusively available for clinics and dental labs located in <strong>Telangana</strong> and <strong>Andhra Pradesh</strong>.
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-lg mb-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by product name, description or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Active Counter */}
            <div className="text-sm text-slate-400 font-semibold flex items-center bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 self-start md:self-auto">
              <Filter className="h-4 w-4 text-cyan-500 mr-2" />
              Showing {filteredProducts.length} Products
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="border-t border-slate-100 pt-6">
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((cat) => {
                const isActive = currentCategory === cat.code;
                return (
                  <button
                    key={cat.code}
                    onClick={() => handleCategoryChange(cat.code)}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                      isActive
                        ? 'bg-primary-900 text-white shadow-md shadow-primary-900/10'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-primary-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Products Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="flex flex-col bg-white rounded-2xl border border-slate-200/60 hover:border-cyan-400 hover:shadow-2xl transition-all overflow-hidden h-full"
              >
                {/* Visual Image/Gradient Box */}
                <div 
                  onClick={() => product.image && handleOpenLightbox(product)}
                  className={`h-48 relative flex items-center justify-center overflow-hidden bg-slate-50 border-b border-slate-100 ${product.image ? 'cursor-zoom-in' : ''}`}
                >
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-cyan-700" />
                      <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: 'url("/hero_dental.png")' }} />
                      <div className="text-center z-10 text-white p-6">
                        <p className="text-xs uppercase tracking-widest text-cyan-300 font-bold mb-1">{product.categoryLabel}</p>
                        <h3 className="text-xl font-bold font-sans line-clamp-1">{product.name}</h3>
                      </div>
                    </>
                  )}

                  {/* Model Code tag */}
                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/50 text-xs font-semibold tracking-wider text-cyan-400">
                    {product.modelCode}
                  </div>
                  
                  {/* Stock tag */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-lg text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Certified Stock</span>
                  </div>
                </div>

                {/* Details Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-sm text-slate-500 leading-relaxed min-h-[40px] line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Bullet Points */}
                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Specifications:</p>
                      <ul className="space-y-1.5">
                        {product.specs.slice(0, 3).map((spec, idx) => (
                          <li key={idx} className="flex items-start text-xs text-slate-600">
                            <ShieldCheck className="h-3.5 w-3.5 text-cyan-500 shrink-0 mr-2 mt-0.5" />
                            <span className="line-clamp-1">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold text-slate-400 flex items-center bg-slate-50 border border-slate-150 px-2 py-1 rounded">
                      <HelpCircle className="h-3.5 w-3.5 mr-1 text-cyan-500" />
                      Inquire Price
                    </span>
                    <Link
                      to={`/contact?type=sales&product=${encodeURIComponent(product.name)}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold rounded-xl text-white bg-primary-900 hover:bg-cyan-600 active:scale-95 transition-all shadow-md"
                    >
                      Inquire Now
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200/60 shadow-lg">
            <p className="text-lg font-bold text-primary-900">No products found</p>
            <p className="text-sm text-slate-400 mt-2">Try adjusting your search query or switching categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('all');
              }}
              className="mt-6 inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold rounded-xl text-white bg-primary-900 hover:bg-cyan-600 transition-all shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-[100] flex flex-col justify-between p-4 md:p-6"
            onClick={handleCloseLightbox}
          >
            {/* Header controls */}
            <div className="flex items-center justify-between w-full text-white z-10" onClick={e => e.stopPropagation()}>
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">{lightboxProduct.categoryLabel}</p>
                <h3 className="text-lg md:text-xl font-bold">{lightboxProduct.name}</h3>
                <p className="text-xs text-slate-400 font-semibold">{lightboxProduct.modelCode}</p>
              </div>

              <div className="flex items-center space-x-2.5">
                {/* Zoom controls */}
                <button
                  onClick={() => setZoomScale(s => Math.min(s + 0.25, 3.5))}
                  className="p-2.5 bg-slate-800/80 hover:bg-cyan-600 hover:text-white rounded-xl transition-all shadow-md active:scale-95"
                  title="Zoom In"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setZoomScale(s => Math.max(s - 0.25, 1))}
                  className="p-2.5 bg-slate-800/80 hover:bg-cyan-600 hover:text-white rounded-xl transition-all shadow-md active:scale-95"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setZoomScale(1)}
                  className="p-2.5 bg-slate-800/80 hover:bg-cyan-600 hover:text-white rounded-xl transition-all shadow-md active:scale-95"
                  title="Reset Zoom"
                >
                  <RotateCcw className="h-5 w-5" />
                </button>
                
                <span className="h-6 w-px bg-slate-800" />

                {/* Close Button */}
                <button
                  onClick={handleCloseLightbox}
                  className="p-2.5 bg-slate-800/80 hover:bg-red-650 hover:text-white rounded-xl transition-all shadow-md active:scale-95"
                  title="Close (Esc)"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Central area with arrows and image */}
            <div className="flex-grow flex items-center justify-between relative w-full h-full overflow-hidden my-4">
              {/* Prev Button */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 md:left-6 p-3 bg-slate-900/60 hover:bg-cyan-600/90 text-white rounded-2xl transition-all shadow-xl hover:scale-105 border border-slate-800/50 z-20"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              </button>

              {/* Image viewport */}
              <div 
                className="w-full h-[70vh] flex items-center justify-center overflow-auto pointer-events-auto"
                onClick={e => e.stopPropagation()}
              >
                <div 
                  className="flex items-center justify-center p-4 max-w-full max-h-full cursor-grab active:cursor-grabbing transition-transform duration-200"
                  style={{ transform: `scale(${zoomScale})` }}
                >
                  <img
                    src={lightboxProduct.image}
                    alt={lightboxProduct.name}
                    className="max-w-[90vw] max-h-[65vh] object-contain select-none pointer-events-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
                  />
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-2 md:right-6 p-3 bg-slate-900/60 hover:bg-cyan-600/90 text-white rounded-2xl transition-all shadow-xl hover:scale-105 border border-slate-800/50 z-20"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </button>
            </div>

            {/* Bottom info bar */}
            <div className="text-center w-full text-slate-400 text-xs sm:text-sm py-2 z-10" onClick={e => e.stopPropagation()}>
              <p className="max-w-2xl mx-auto line-clamp-2">{lightboxProduct.description}</p>
              <div className="mt-2 text-cyan-400 font-bold">
                Zoom: {zoomScale.toFixed(2)}x
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      </div>
    </div>
  );
};

export default Products;
