import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';
import { InfoModalType } from './InfoModals';

interface FooterProps {
  onOpenInfoModal?: (modal: InfoModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfoModal }) => {
  return (
    <footer className="w-full bg-[#0A0A0B] border-t border-white/10 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-3.5">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/assets/tbh-logo-dark.png" 
                alt="TBH - Ride Beyond Limits" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's premier self-drive motorcycle and luxury car rental platform. Transparent hourly rates in ₹ INR, instant keyless PIN access, and dedicated airport hub pick-ups.
            </p>
            <div 
              onClick={() => onOpenInfoModal && onOpenInfoModal('CONTACT')}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5C7]/40 text-xs text-slate-300 cursor-pointer transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#00E5C7]" />
              <span>SOS Helpline: <strong>1800-TBH-RIDE</strong></span>
            </div>
          </div>

          {/* Key Cities */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#00E5C7] mb-3">Key Indian Hubs</h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Bengaluru (BLR Airport & Koramangala)</li>
              <li>Hyderabad (HYD Airport & Hitech City)</li>
              <li>Mumbai (BOM Airport & BKC)</li>
              <li>Delhi NCR (DEL Airport & Cyber Hub)</li>
              <li>Chennai (MAA Airport & OMR)</li>
              <li>Goa (Mopa GOX, Dabolim & Calangute)</li>
              <li>Pune, Jaipur & Ahmedabad Hubs</li>
            </ul>
          </div>

          {/* Fleet Categories */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">Fleet Portfolio</h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Royal Enfield Classic 350 & Hunter 350</li>
              <li>KTM Duke 390 & Yamaha MT-15 V2</li>
              <li>Honda Activa 6G & TVS Jupiter 125</li>
              <li>Ola S1 Pro & Ather 450X EV</li>
              <li>Ultraviolette F77 Mach 2 Superbike</li>
              <li>Mahindra Thar 4x4 & Toyota Fortuner</li>
              <li>Tata Nexon EV & Swift Dzire</li>
            </ul>
          </div>

          {/* Safety & Trust */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Safety & Trust</h5>
            <div className="p-3 rounded-xl bg-[#141416] border border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#00E5C7]" />
                <span className="font-semibold">Parivahan Commercial Fleet</span>
              </div>
              <p className="text-[11px] text-slate-400">All self-drive rentals feature commercial yellow plates and comprehensive insurance under the Motor Vehicles Act.</p>
            </div>
            <p className="text-[10px] text-slate-500">
              Protected by Razorpay 256-Bit SSL Payment Shield & verified KYC authentication.
            </p>
          </div>

        </div>

        {/* Brand Statement Banner */}
        <div className="pt-8 pb-6 border-t border-b border-white/10 my-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#00E5C7] uppercase font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5C7]" />
                <span>PAN-INDIA PREMIUM MOBILITY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white uppercase leading-none">
                BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5C7] to-[#D4AF37]">INDIA'S ROADS.</span>
              </h2>

              <p className="text-xs text-slate-400 font-medium tracking-wide">
                Engineered for Indian highways, city commutes, and coastal drives. <strong className="text-white uppercase tracking-wider font-semibold">RIDE BEYOND LIMITS</strong>
              </p>
            </div>

          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-300">
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

        {/* Bottom Legal & Signature Row */}
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center space-x-3">
            <span className="text-[11px] text-slate-400">© 2026 TBH Mobility Technologies Pvt. Ltd.</span>
            <span className="text-slate-700">•</span>
            {/* EXACTLY ONE SMALL HKT STAMP */}
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-white/5 text-[#00E5C7] border border-[#00E5C7]/30 tracking-widest">
              HKT
            </span>
          </div>

          <div className="text-[10px] text-slate-500 font-mono tracking-tight self-start md:self-auto">
            Made with caffeine & energy by <span className="text-slate-400 font-semibold">Marlboro Debbugers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

