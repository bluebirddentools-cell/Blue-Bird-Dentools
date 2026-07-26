import React from 'react';

const WhatsAppSticky: React.FC = () => {
  const whatsappUrl = "https://wa.me/919000280015?text=Hello!%20I%20have%20an%20inquiry%20regarding%20your%20dental%20equipment%20and%20services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-slate-800">
        Chat on WhatsApp
      </div>
      
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:animate-none scale-105 pointer-events-none" />

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.028 14.024.992 11.4 1c-5.433 0-9.858 4.37-9.862 9.8.001 1.905.513 3.76 1.482 5.393L2.008 22.04l6.002-1.572c-.89-.487-1.36-.747-1.36-.747zM17.91 14.86c-.324-.162-1.92-.949-2.217-1.055-.297-.108-.513-.162-.73.162-.216.324-.837 1.055-1.026 1.271-.189.216-.378.243-.702.08-.324-.162-1.37-.505-2.61-1.611-.963-.859-1.613-1.92-1.802-2.244-.189-.324-.02-.5-.181-.661-.146-.145-.324-.378-.486-.568-.162-.189-.216-.324-.324-.54-.108-.216-.054-.405-.027-.567.027-.162.216-.513.324-.675.108-.162.146-.27.216-.405.07-.135.034-.253-.014-.351-.048-.098-.513-1.236-.703-1.695-.185-.445-.37-.384-.513-.391-.132-.007-.284-.008-.436-.008-.152 0-.401.057-.611.284-.21.227-.8.781-.8 1.905s.817 2.21 1.03 2.508c.214.297 1.607 2.453 3.893 3.441.544.235.969.375 1.3.481.547.174 1.045.15 1.439.09.439-.067 1.92-.785 2.19-1.543.27-.757.27-1.405.189-1.542-.08-.137-.297-.216-.621-.378z"/>
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppSticky;
