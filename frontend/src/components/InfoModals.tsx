import React from 'react';
import { X, ShieldCheck, FileText, Phone, Info, Lock } from 'lucide-react';

export type InfoModalType = 'TERMS' | 'DAMAGE' | 'PRIVACY' | 'CONTACT' | 'ABOUT' | null;

interface InfoModalsProps {
  activeModal: InfoModalType;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#141416] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0A0B]/80">
          <div className="flex items-center space-x-2.5">
            {activeModal === 'TERMS' && <FileText className="w-5 h-5 text-[#00E5C7]" />}
            {activeModal === 'DAMAGE' && <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />}
            {activeModal === 'PRIVACY' && <Lock className="w-5 h-5 text-teal-400" />}
            {activeModal === 'CONTACT' && <Phone className="w-5 h-5 text-emerald-400" />}
            {activeModal === 'ABOUT' && <Info className="w-5 h-5 text-[#00E5C7]" />}

            <h3 className="text-base font-extrabold uppercase tracking-wide text-white">
              {activeModal === 'TERMS' && 'TBH Self-Drive Rental Terms'}
              {activeModal === 'DAMAGE' && 'TBH Vehicle Damage & Insurance Policy'}
              {activeModal === 'PRIVACY' && 'TBH Data Protection & Privacy Standard'}
              {activeModal === 'CONTACT' && '24/7 Rider Support & City Hub Directory'}
              {activeModal === 'ABOUT' && 'About TBH Mobility — Ride Beyond Limits'}
            </h3>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs leading-relaxed text-slate-300">
          {activeModal === 'TERMS' && (
            <>
              <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 font-medium">
                Official Motor Vehicles Act compliant self-drive rental contract terms for all TBH bikes and vehicles across Indian hubs.
              </div>
              <h4 className="text-sm font-bold text-white">1. Rider Eligibility</h4>
              <p>Riders must be at least 18 years of age (21 for superbike and SUV fleet tiers) and possess a valid, unexpired Indian Driving Licence or recognized International Driving Permit (IDP).</p>

              <h4 className="text-sm font-bold text-white">2. Speed Limits & Safety Telemetry</h4>
              <p>All TBH fleet units are equipped with real-time GPS speed telemetry. City speed limit is 60 km/h; highway limit is 80 km/h for 2-wheelers and 100 km/h for 4-wheelers. Helmets are strictly mandatory for both rider and pillion.</p>

              <h4 className="text-sm font-bold text-white">3. Fuel & Charging Policy</h4>
              <p>Petrol vehicles are provided with sufficient fuel to reach the nearest fuel station and must be returned with equal fuel level. Electric vehicles are delivered at minimum 80% state-of-charge (SoC).</p>

              <h4 className="text-sm font-bold text-white">4. Unlock PIN & Hub Handover</h4>
              <p>Keys are accessed via the 4-digit unlock PIN generated on your official TBH Digital Rental Pass upon verified payment. Handover inspections are logged digitally at pickup.</p>
            </>
          )}

          {activeModal === 'DAMAGE' && (
            <>
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium">
                Transparent liability capping protected by commercial self-drive vehicle insurance.
              </div>
              <h4 className="text-sm font-bold text-white">1. Maximum Liability Cap</h4>
              <p>In case of accidental damage, the customer's maximum out-of-pocket liability is strictly capped at the refundable security deposit amount (e.g. ₹1,000 for bikes, ₹5,000 for cars), provided terms were not breached.</p>

              <h4 className="text-sm font-bold text-white">2. Zero Liability for Normal Wear</h4>
              <p>Normal mechanical wear, tire age degradation, and minor surface dust are zero-liability events and fully covered by TBH maintenance.</p>

              <h4 className="text-sm font-bold text-white">3. Mandatory Reporting Procedure</h4>
              <p>Any accident or damage event must be reported within 1 hour via the 1800-TBH-RIDE emergency helpline before moving the vehicle, to maintain valid insurance coverage.</p>
            </>
          )}

          {activeModal === 'PRIVACY' && (
            <>
              <div className="p-3 rounded-xl bg-[#00E5C7]/10 border border-[#00E5C7]/30 text-[#00E5C7] font-medium">
                Bank-grade data security standard protecting customer identity, KYC records, and payments.
              </div>
              <h4 className="text-sm font-bold text-white">1. Aadhaar Identity Privacy</h4>
              <p>Your 12-digit Aadhaar number is encrypted server-side in Aiven MySQL database tables. Frontend APIs, public web pages, passes, and staff dashboards display ONLY masked identifiers (•••• •••• XXXX). Raw Aadhaar numbers are never logged or exposed.</p>

              <h4 className="text-sm font-bold text-white">2. Driving Licence KYC Documents</h4>
              <p>Uploaded Driving Licence images are processed by automated OCR engines and stored in encrypted media repositories. Documents are used exclusively for Motor Vehicles Act identity verification.</p>

              <h4 className="text-sm font-bold text-white">3. Payment Security & Notifications</h4>
              <p>Online payments are processed directly through Razorpay 256-Bit SSL gateways. Transactional notifications and booking receipts are dispatched securely via Resend outbox queues.</p>
            </>
          )}

          {activeModal === 'CONTACT' && (
            <>
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium">
                Concierge customer support active 24 hours a day, 7 days a week.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Toll-Free SOS Helpline</p>
                  <p className="text-sm font-mono font-bold text-[#00E5C7] mt-1">1800-TBH-RIDE (1800-824-7433)</p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Support Desk Email</p>
                  <p className="text-sm font-mono font-bold text-[#00E5C7] mt-1">support@tbhrentals.in</p>
                </div>
              </div>

              <h4 className="text-sm font-bold text-white pt-2">Primary Airport & City Hubs</h4>
              <ul className="space-y-1 text-slate-300">
                <li>• <strong>Bengaluru:</strong> Kempegowda International Airport (BLR T1/T2) & Koramangala Hub</li>
                <li>• <strong>Hyderabad:</strong> Rajiv Gandhi International Airport (HYD) & Hitech City Hub</li>
                <li>• <strong>Mumbai:</strong> Chhatrapati Shivaji Maharaj Airport (BOM T2) & BKC Hub</li>
                <li>• <strong>Delhi NCR:</strong> Indira Gandhi International Airport (DEL T3) & Gurgaon Cyber Hub</li>
                <li>• <strong>Chennai:</strong> Chennai International Airport (MAA) & OMR Hub</li>
                <li>• <strong>Goa:</strong> Manohar International Airport Mopa (GOX) & Dabolim Airport</li>
              </ul>
            </>
          )}

          {activeModal === 'ABOUT' && (
            <>
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#00E5C7]/15 to-[#00B4D8]/15 border border-[#00E5C7]/30 text-white font-medium">
                TBH Mobility — Engineering India's premium self-drive rental experience.
              </div>
              <p>TBH Mobility Technologies is built to empower travelers and commuters across India with instant access to luxury two-wheelers, high-performance electric vehicles, and premium SUVs.</p>
              <p>Featuring transparent hourly INR pricing, automated Driving Licence KYC validation, Wakit WhatsApp mobile OTP verification, instant keyless unlock PINs, and full commercial yellow-plate compliance, TBH sets the benchmark for Indian mobility.</p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#0A0A0B] flex justify-between items-center text-[11px] text-slate-400">
          <span>TBH Mobility — BUILT FOR INDIA'S ROADS</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#00E5C7] text-black font-bold hover:bg-[#00C4AA] transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
