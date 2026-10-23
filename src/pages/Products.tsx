import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, ShieldCheck, HelpCircle, ZoomIn, ZoomOut, RotateCcw, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Zoom, Navigation, Keyboard, Thumbs, FreeMode, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { PRODUCTS_DATA, CATEGORIES, type Product } from '../data/products';
import Seo from '../components/Seo';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const currentCategory = searchParams.get('category') || 'all';

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.modelCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Lightbox is a Swiper gallery over the currently filtered products (zoom, swipe, arrows, keyboard, thumbs)
  const gallery = filteredProducts.filter((p) => p.image);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomScale, setZoomScale] = useState(1);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const lightboxProduct = lightboxIndex === null ? null : gallery[activeIndex] ?? null;

  const handleOpenLightbox = (product: Product) => {
    const idx = gallery.findIndex((p) => p.id === product.id);
    if (idx === -1) return;
    setLightboxIndex(idx);
    setActiveIndex(idx);
    setZoomScale(1);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
    setThumbsSwiper(null);
    setMainSwiper(null);
  };

  // Escape closes (arrow keys are handled by Swiper's Keyboard module)
  const isLightboxOpen = lightboxIndex !== null;
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Lock body scroll while the lightbox is open
  useEffect(() => {
    if (!isLightboxOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, [isLightboxOpen]);

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
      <Seo
        path="/products"
        title="Dental Equipment Catalog | Blue Bird Dentools Guntur"
        description="Browse dental chairs, autoclaves, X-ray units, handpieces and more at Blue Bird Dentools, Guntur. Delivery and service across Andhra Pradesh and Telangana."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">Dental Equipment Catalog</h1>
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
            <span className="font-bold text-primary-950">Regional Availability Notice:</span> Equipment delivery, installation, and on-site repair services are exclusively available for clinics and dental labs located in <strong>Andhra Pradesh</strong> and <strong>Telangana</strong>.
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-lg mb-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="search"
                aria-label="Search products by name, description or model"
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
            <div className="flex flex-nowrap sm:flex-wrap gap-2.5 overflow-x-auto sm:overflow-visible snap-x -mx-6 px-6 sm:mx-0 sm:px-0 pb-1 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => {
                const isActive = currentCategory === cat.code;
                return (
                  <button
                    key={cat.code}
                    onClick={() => handleCategoryChange(cat.code)}
                    aria-pressed={isActive}
                    className={`shrink-0 snap-start whitespace-nowrap min-h-[40px] px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
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
                initial={{ y: 24 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="flex flex-col bg-white rounded-2xl border border-slate-200/60 hover:border-cyan-400 hover:shadow-2xl transition-all overflow-hidden h-full"
              >
                {/* Visual Image/Gradient Box */}
                <div 
                  onClick={() => product.image && handleOpenLightbox(product)}
                  className={`h-52 relative flex items-center justify-center overflow-hidden bg-slate-100 border-b border-slate-100 ${product.image ? 'cursor-zoom-in' : ''}`}
                >
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={`${product.name} – ${product.categoryLabel}`}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-cyan-700" />
                      <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: 'url("/hero_dental.webp")' }} />
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
                    <span className="text-xs font-semibold text-slate-400 flex items-center bg-slate-50 border border-slate-200 px-2 py-1 rounded">
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
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-[100] flex flex-col justify-between p-3 sm:p-4 md:p-6"
            onClick={handleCloseLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightboxProduct.name} image viewer`}
          >
            {/* Header controls */}
            <div className="flex items-center justify-between gap-3 w-full text-white z-10" onClick={e => e.stopPropagation()}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={lightboxProduct.id}
                  initial={{ y: 8 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="min-w-0 flex-1"
                >
                  <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold truncate">{lightboxProduct.categoryLabel}</p>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold truncate">{lightboxProduct.name}</h2>
                  <p className="text-xs text-slate-400 font-semibold truncate">{lightboxProduct.modelCode} · {activeIndex + 1} / {gallery.length}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                {/* Zoom controls (Swiper Zoom module; double-tap / pinch also work) */}
                <button
                  onClick={() => mainSwiper?.zoom.in(Math.min(zoomScale + 1, 3))}
                  className="p-2.5 bg-slate-800/80 hover:bg-cyan-600 hover:text-white rounded-xl transition-all shadow-md active:scale-95"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  onClick={() => (zoomScale > 2 ? mainSwiper?.zoom.in(zoomScale - 1) : mainSwiper?.zoom.out())}
                  className="p-2.5 bg-slate-800/80 hover:bg-cyan-600 hover:text-white rounded-xl transition-all shadow-md active:scale-95"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <button
                  onClick={() => mainSwiper?.zoom.out()}
                  className="p-2.5 bg-slate-800/80 hover:bg-cyan-600 hover:text-white rounded-xl transition-all shadow-md active:scale-95"
                  title="Reset Zoom"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw className="h-5 w-5" />
                </button>

                <span className="hidden sm:block h-6 w-px bg-slate-800" />

                {/* Close Button */}
                <motion.button
                  whileHover={{ rotate: 90 }}
                  onClick={handleCloseLightbox}
                  className="p-2.5 bg-slate-800/80 hover:bg-red-600 hover:text-white rounded-xl transition-colors shadow-md"
                  title="Close (Esc)"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            {/* Main gallery */}
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="flex-grow relative w-full min-h-0 my-3 sm:my-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                aria-label="Previous product image"
                className="lightbox-prev hidden sm:flex absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-slate-900/60 hover:bg-cyan-600/90 text-white rounded-2xl transition-colors shadow-xl border border-slate-800/50 z-20"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              </button>

              <Swiper
                modules={[Zoom, Navigation, Keyboard, Thumbs, A11y]}
                initialSlide={lightboxIndex ?? 0}
                onSwiper={setMainSwiper}
                onSlideChange={(sw) => { setActiveIndex(sw.activeIndex); setZoomScale(1); }}
                onZoomChange={(_sw, scale) => setZoomScale(scale)}
                zoom={{ maxRatio: 3, toggle: true }}
                navigation={{ prevEl: '.lightbox-prev', nextEl: '.lightbox-next' }}
                keyboard={{ enabled: true }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                spaceBetween={24}
                className="h-full"
              >
                {gallery.map((product) => (
                  <SwiperSlide key={product.id} className="!flex items-center justify-center">
                    <div className="swiper-zoom-container">
                      <div className="bg-white p-3 sm:p-6 rounded-2xl shadow-2xl max-w-[92vw] sm:max-w-[80vw]">
                        <img
                          src={product.image}
                          alt={`${product.name} – ${product.categoryLabel}`}
                          width={1024}
                          height={1024}
                          decoding="async"
                          className="max-h-[48vh] sm:max-h-[55vh] w-auto h-auto object-contain select-none mix-blend-multiply"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                aria-label="Next product image"
                className="lightbox-next hidden sm:flex absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-slate-900/60 hover:bg-cyan-600/90 text-white rounded-2xl transition-colors shadow-xl border border-slate-800/50 z-20"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </button>
            </motion.div>

            {/* Bottom: description + thumbnail strip */}
            <div className="w-full z-10" onClick={e => e.stopPropagation()}>
              <p className="max-w-2xl mx-auto text-center text-slate-400 text-xs sm:text-sm line-clamp-2">{lightboxProduct.description}</p>
              <p className="mt-1 text-center text-cyan-400 text-xs font-bold">
                Zoom: {zoomScale.toFixed(1)}x <span className="text-slate-500 font-medium">· double-tap or pinch to zoom, swipe to browse</span>
              </p>
              <Swiper
                modules={[FreeMode, Thumbs]}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                freeMode
                slidesPerView="auto"
                spaceBetween={8}
                className="mt-3 max-w-3xl mx-auto"
              >
                {gallery.map((product) => (
                  <SwiperSlide key={product.id} className="!w-14 sm:!w-16 opacity-50 [&.swiper-slide-thumb-active]:opacity-100 transition-opacity cursor-pointer">
                    <img
                      src={product.image}
                      alt=""
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 sm:h-16 sm:w-16 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      </div>
    </div>
  );
};

export default Products;
