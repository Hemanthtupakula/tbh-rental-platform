import React, { useState } from 'react';
import { X, Phone, ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, Loader2, MessageSquare } from 'lucide-react';
import { api } from '../services/api';

interface PhoneVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerificationSuccess: (phone: string) => void;
}

export const PhoneVerificationModal: React.FC<PhoneVerificationModalProps> = ({
  isOpen,
  onClose,
  onVerificationSuccess,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'INPUT' | 'VERIFY' | 'SUCCESS'>('INPUT');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(0);

  if (!isOpen) return null;

  // Format phone to E.164 (+91XXXXXXXXXX)
  const formatPhone = (raw: string): string => {
    const digits = raw.replace(/\D/g, '');
    if (digits.length === 10) return `+91${digits}`;
    if (digits.startsWith('91') && digits.length === 12) return `+${digits}`;
    if (digits.startsWith('0') && digits.length === 11) return `+91${digits.slice(1)}`;
    return `+${digits}`;
  };

  const startCountdown = (seconds: number) => {
    setCountdown(seconds);
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) { clearInterval(interval); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const raw = phoneNumber.trim();
    if (!raw) { setError('Please enter your mobile number.'); return; }
    const digits = raw.replace(/\D/g, '');
    if (digits.length < 10) { setError('Enter a valid 10-digit Indian mobile number.'); return; }

    setLoading(true);
    setError(null);

    try {
      const formatted = formatPhone(raw);
      await api.sendMobileOtp(formatted);
      setStep('VERIFY');
      startCountdown(300); // 5-minute expiry countdown
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP via WhatsApp. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim() || otp.trim().length < 4) {
      setError('Please enter the 6-digit OTP from your WhatsApp.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formatted = formatPhone(phoneNumber.trim());
      await api.verifyMobileOtp(formatted, otp.trim());
      setStep('SUCCESS');
      setTimeout(() => {
        onVerificationSuccess(formatted);
        onClose();
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'Invalid OTP. Please check your WhatsApp and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (countdown > 0) return;
    setLoading(true);
    setError(null);
    try {
      const formatted = formatPhone(phoneNumber.trim());
      await api.sendMobileOtp(formatted);
      startCountdown(300);
      setOtp('');
    } catch (err: any) {
      setError(err.message || 'Failed to resend OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-[#141416] border border-white/10 p-6 shadow-2xl text-white">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ── SUCCESS ── */}
        {step === 'SUCCESS' && (
          <div className="flex flex-col items-center py-8 space-y-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Mobile Verified!</h2>
            <p className="text-slate-400 text-sm">Your WhatsApp number has been verified. Redirecting to booking…</p>
          </div>
        )}

        {/* ── STEP 1: Enter Phone ── */}
        {step === 'INPUT' && (
          <>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center border border-[#25D366]/30">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">WhatsApp Verification</h2>
                <p className="text-slate-400 text-xs">We'll send a one-time code via WhatsApp</p>
              </div>
            </div>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Mobile Number
                </label>
                <div className="flex items-center rounded-xl border border-white/10 bg-white/5 focus-within:border-[#25D366]/50 transition-colors">
                  <span className="pl-4 pr-2 text-slate-400 font-mono text-sm select-none">+91</span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={e => { setPhoneNumber(e.target.value); setError(null); }}
                    placeholder="98765 43210"
                    maxLength={12}
                    className="flex-1 bg-transparent py-3 pr-4 text-white placeholder-slate-600 outline-none text-sm font-mono"
                    autoFocus
                  />
                </div>
                <p className="mt-1.5 text-[11px] text-slate-500">Enter the WhatsApp-registered mobile number</p>
              </div>

              {error && (
                <div className="flex items-start space-x-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-rose-300">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-black font-bold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Send OTP via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </>
        )}

        {/* ── STEP 2: Enter OTP ── */}
        {step === 'VERIFY' && (
          <>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#00E5C7]/15 flex items-center justify-center border border-[#00E5C7]/30">
                <ShieldCheck className="w-5 h-5 text-[#00E5C7]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Enter WhatsApp OTP</h2>
                <p className="text-slate-400 text-xs">
                  Sent to <span className="text-white font-mono">+91 {phoneNumber.replace(/\D/g, '').slice(-10)}</span>
                </p>
              </div>
            </div>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  6-Digit OTP
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={e => { setOtp(e.target.value.replace(/\D/g, '').slice(0, 6)); setError(null); }}
                  placeholder="• • • • • •"
                  maxLength={6}
                  className="w-full rounded-xl border border-white/10 bg-white/5 focus:border-[#00E5C7]/50 py-3.5 px-4 text-white text-center text-xl font-mono tracking-[0.5em] placeholder-slate-700 outline-none transition-colors"
                  autoFocus
                />
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[11px] text-slate-500">Open WhatsApp to get your code</p>
                  {countdown > 0 ? (
                    <p className="text-[11px] text-slate-500 font-mono">
                      Expires in {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={loading}
                      className="text-[11px] text-[#25D366] hover:underline disabled:opacity-50"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              </div>

              {error && (
                <div className="flex items-start space-x-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-rose-300">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || otp.length < 4}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#00E5C7] hover:bg-[#00cdb5] text-black font-bold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Verify &amp; Continue</span>
                    <ShieldCheck className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => { setStep('INPUT'); setOtp(''); setError(null); }}
                className="w-full py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                ← Change Number
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
