import React from 'react';
import { Phone, ShieldCheck, Heart } from 'lucide-react';
import { InfoModalType } from './InfoModals';

interface FooterProps {
  onOpenInfoModal?: (modal: InfoModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfoModal }) => {
  return (
    <footer className="w-full bg-[#0A0A0B] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/assets/tbh-logo-dark.png" 
                alt="TBH - Ride Beyond Limits" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's foremost luxury bike and car rental platform. Transparent hourly rates in ₹ INR, instant keyless unlock PINs, and hubs at major Indian airports.
            </p>
            <div 
              onClick={() => onOpenInfoModal && onOpenInfoModal('CONTACT')}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5C7]/40 text-xs text-slate-300 cursor-pointer transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#00E5C7]" />
              <span>SOS Helpline: <strong>1800-TBH-RIDE</strong></span>
            </div>
          </div>

          {/* Indian Cities Covered */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#00E5C7] mb-3">Key Indian Cities</h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Bengaluru (BLR Airport & Koramangala)</li>
              <li>Hyderabad (HYD Airport & Hitech City)</li>
              <li>Mumbai (BOM Airport & BKC)</li>
              <li>Delhi NCR (DEL Airport & Cyber Hub)</li>
              <li>Chennai (MAA Airport & OMR)</li>
              <li>Goa (Mopa GOX, Dabolim & Calangute)</li>
              <li>Pune & Jaipur Hubs</li>
            </ul>
          </div>

          {/* Fleet Categories */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">Fleet Portfolio</h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Royal Enfield Classic & Hunter 350</li>
              <li>KTM Duke 390 & Yamaha MT-15 V2</li>
              <li>Honda Activa 6G & TVS Jupiter 125</li>
              <li>Ola S1 Pro & Ather 450X EV</li>
              <li>Ultraviolette F77 Mach 2 Superbike</li>
              <li>Mahindra Thar 4x4 & Toyota Fortuner</li>
              <li>Tata Nexon EV Max & Swift Dzire</li>
            </ul>
          </div>

          {/* Compliance & Security */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Safety & Trust</h5>
            <div className="p-3 rounded-xl bg-[#141416] border border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#00E5C7]" />
                <span className="font-semibold">Parivahan Commercial Fleet</span>
              </div>
              <p className="text-[11px] text-slate-400">All self-drive vehicles are registered with commercial yellow plates and comprehensive insurance under the Motor Vehicles Act.</p>
            </div>
            <p className="text-[10px] text-slate-500">
              Protected by Razorpay 256-Bit SSL Payment Shield & Resend outbox queues.
            </p>
          </div>

        </div>

        {/* Automotive End-of-Journey Brand Signature Section */}
        <div className="pt-12 pb-8 border-t border-b border-white/10 my-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            {/* Left Main Signature Statement */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#00E5C7] uppercase font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5C7]" />
                <span>TBH AUTOMOTIVE SIGNATURE</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest">HKT • HKT • HKT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-none">
                BUILT FOR <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#00E5C7] to-[#D4AF37]">
                  INDIA'S ROADS.
                </span>
              </h2>

              <p className="text-xs text-slate-400 font-medium tracking-wide">
                Engineered for Indian highways, city commutes, and coastal drives. <strong className="text-white font-display uppercase tracking-widest">RIDE BEYOND LIMITS</strong>
              </p>
            </div>

            {/* Right Editorial Side Signature Element with Micro HKT Stamps */}
            <div className="flex items-center space-x-4 pl-0 md:pl-6 border-l-0 md:border-l border-white/10 flex-shrink-0">
              <div className="flex flex-col text-right font-mono text-[9px] text-slate-500 uppercase tracking-widest space-y-1 select-none">
                <span className="text-[#00E5C7] font-bold">HKT-SPEC</span>
                <span>VERIFIED • 2026</span>
                <span>IND-HUB • 500+</span>
                <span className="text-[#D4AF37] font-bold">HKT • TBH</span>
              </div>
              <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#00E5C7] via-[#D4AF37] to-transparent opacity-75" />
            </div>

          </div>
        </div>

        {/* Bottom Info Modal links (NO COPYRIGHT LINE) */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-2">
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
            <button 
              onClick={() => onOpenInfoModal && onOpenInfoModal('TERMS')}
              className="hover:text-[#00E5C7] transition"
            >
              Rental Terms
            </button>
            <button 
              onClick={() => onOpenInfoModal && onOpenInfoModal('DAMAGE')}
              className="hover:text-[#00E5C7] transition"
            >
              Damage Policy
            </button>
            <button 
              onClick={() => onOpenInfoModal && onOpenInfoModal('PRIVACY')}
              className="hover:text-[#00E5C7] transition"
            >
              Privacy
            </button>
            <button 
              onClick={() => onOpenInfoModal && onOpenInfoModal('CONTACT')}
              className="hover:text-[#00E5C7] transition"
            >
              Contact / Support
            </button>
            <button 
              onClick={() => onOpenInfoModal && onOpenInfoModal('ABOUT')}
              className="hover:text-[#00E5C7] transition"
            >
              About TBH
            </button>
          </div>

          <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
            HKT • TBH MOBILITY
          </div>
        </div>

      </div>
    </footer>
  );
};
