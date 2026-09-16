import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  UploadCloud 
} from 'lucide-react';
import { SignIn, SignUp, useAuth as useClerkAuth } from '@clerk/clerk-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'SIGN_IN' | 'SIGN_UP' | 'LICENSE';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose,
  initialTab = 'SIGN_IN' 
}) => {
  const { user, isAuthenticated, verifyLicense } = useAuth();
  const { isSignedIn } = useClerkAuth();

  const [activeTab, setActiveTab] = useState<'SIGN_IN' | 'SIGN_UP' | 'LICENSE'>('SIGN_IN');
  const [licenseNumber, setLicenseNumber] = useState<string>(user?.drivingLicenseNumber || '');
  const [isLicenseUploading, setIsLicenseUploading] = useState<boolean>(false);
  const [licenseSuccess, setLicenseSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setErrorMessage('');
      setLicenseSuccess(false);
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Automatically close modal when Clerk authentication succeeds during sign in or sign up
  useEffect(() => {
    if (isOpen && isSignedIn && (activeTab === 'SIGN_IN' || activeTab === 'SIGN_UP')) {
      const timer = setTimeout(() => {
        onClose();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isSignedIn, activeTab, onClose]);

  if (!isOpen) return null;

  const handleVerifyLicenseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!licenseNumber || licenseNumber.trim().length < 6) {
      setErrorMessage('Please enter a valid Indian driving licence number.');
      return;
    }
    setIsLicenseUploading(true);
    try {
      await verifyLicense(licenseNumber.trim().toUpperCase());
      setIsLicenseUploading(false);
      setLicenseSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err: any) {
      setIsLicenseUploading(false);
      setLicenseSuccess(false);
      setErrorMessage(err.message || 'Driving licence verification failed on server.');
    }
  };

  const clerkAppearance = {
    variables: {
      colorPrimary: '#00E5C7',
      colorBackground: '#141416',
      colorText: '#FFFFFF',
      colorTextSecondary: '#CBD5E1',
      colorInputBackground: '#1E293B',
      colorInputText: '#FFFFFF',
      colorInputBorder: 'rgba(255, 255, 255, 0.25)',
      borderRadius: '0.75rem',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    },
    elements: {
      rootBox: 'w-full flex justify-center',
      card: 'bg-transparent border-0 shadow-none w-full p-0',
      headerTitle: 'text-white font-display text-lg font-bold',
      headerSubtitle: 'text-slate-300 text-xs',
      socialButtonsBlockButton: 'bg-[#1E293B] border border-white/20 text-white hover:bg-white/10 transition rounded-xl',
      formButtonPrimary: 'bg-[#00E5C7] text-black font-extrabold hover:bg-[#00E5C7]/90 text-xs shadow-teal-glow transition py-2.5 rounded-xl',
      formFieldInput: 'bg-[#1E293B] border border-white/25 text-white focus:border-[#00E5C7] text-xs rounded-xl font-medium',
      otpInputInput: 'bg-[#1E293B] border-2 border-[#00E5C7] text-[#00E5C7] text-xl font-extrabold text-center rounded-xl',
      footerActionLink: 'text-[#00E5C7] hover:underline text-xs font-semibold',
      identityPreview: 'bg-[#1E293B] border border-white/20 text-white rounded-xl',
      formHeaderTitle: 'text-white text-base font-bold',
      formHeaderSubtitle: 'text-slate-300 text-xs',
      dividerLine: 'bg-white/20',
      dividerText: 'text-slate-400 text-xs font-semibold'
    }
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto"
    >
      <div className="relative w-full max-w-md bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <img src="/assets/tbh-logo-dark.png" alt="TBH" className="h-10 w-auto object-contain" />
            <div>
              <h3 id="auth-modal-title" className="font-extrabold font-display text-base text-white">
                {activeTab === 'LICENSE' ? 'Driving Licence KYC' : 'Rider Authentication'}
              </h3>
              <p className="text-[11px] text-slate-200 font-medium">
                {activeTab === 'LICENSE' ? 'Motor Vehicles Act Identity Compliance' : 'Clerk Verified Account Sign In & Creation'}
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            aria-label="Close authentication modal"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        {activeTab !== 'LICENSE' && (
          <div className="grid grid-cols-2 gap-1 p-2 bg-[#0A0A0B] border-b border-white/10">
            <button
              type="button"
              onClick={() => { setActiveTab('SIGN_IN'); setErrorMessage(''); }}
              className={`py-2 text-xs font-bold rounded-lg transition ${
                activeTab === 'SIGN_IN' 
                  ? 'bg-[#141416] text-[#00E5C7] border border-[#00E5C7]/40' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('SIGN_UP'); setErrorMessage(''); }}
              className={`py-2 text-xs font-bold rounded-lg transition ${
                activeTab === 'SIGN_UP' 
                  ? 'bg-[#141416] text-[#00E5C7] border border-[#00E5C7]/40' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
              {errorMessage}
            </div>
          )}

          {/* Clerk Sign In */}
          {activeTab === 'SIGN_IN' && (
            <div className="clerk-auth-container w-full">
              <SignIn 
                key="tbh-clerk-sign-in"
                routing="virtual"
                appearance={clerkAppearance}
              />
            </div>
          )}

          {/* Clerk Sign Up */}
          {activeTab === 'SIGN_UP' && (
            <div className="clerk-auth-container w-full">
              <SignUp 
                key="tbh-clerk-sign-up"
                routing="virtual"
                appearance={clerkAppearance}
              />
            </div>
          )}

          {/* Driving Licence & KYC Verification */}
          {activeTab === 'LICENSE' && (
            <form onSubmit={handleVerifyLicenseSubmit} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-[#0A0A0B] border border-[#00E5C7]/30 flex items-center space-x-3">
                <ShieldCheck className="w-7 h-7 text-[#00E5C7]" />
                <div>
                  <h4 className="text-xs font-bold text-white">Driving Licence KYC</h4>
                  <p className="text-[10px] text-slate-400">Required by Motor Vehicles Act for self-drive rentals</p>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Driving Licence Number (DL)
                </label>
                <input
                  type="text"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value.toUpperCase())}
                  placeholder="e.g. KA-01-2023-0048192"
                  className="w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono uppercase focus:outline-none focus:border-[#00E5C7]"
                  required
                />
              </div>

              <div className="p-4 rounded-xl border-2 border-dashed border-white/15 hover:border-[#00E5C7]/50 text-center cursor-pointer bg-[#0A0A0B]/50 transition">
                <UploadCloud className="w-8 h-8 text-[#00E5C7] mx-auto mb-1" />
                <p className="text-xs font-bold text-white">Upload Driving Licence (Front & Back)</p>
                <p className="text-[10px] text-slate-400">Tesseract OCR + TBH Admin Verification</p>
              </div>

              {licenseSuccess ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Licence Verified Successfully!</span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isLicenseUploading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition"
                >
                  {isLicenseUploading ? 'Processing DL & OCR Verification...' : 'Submit DL for Verification'}
                </button>
              )}
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

