import React, { useState } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  User as UserIcon, 
  Layers, 
  Globe, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  LogOut,
  ChevronDown,
  Sun,
  Moon,
  Sparkles,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { City } from '../types';
import { api } from '../services/api';

interface NavbarProps {
  cities: City[];
  selectedCity: string;
  onSelectCity: (cityName: string) => void;
  compareCount: number;
  onOpenCompare: () => void;
  onOpenBookings: () => void;
  onOpenAuth: () => void;
  onOpenAdmin: () => void;
  onOpenKyc?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cities,
  selectedCity,
  onSelectCity,
  compareCount,
  onOpenCompare,
  onOpenBookings,
  onOpenAuth,
  onOpenAdmin,
  onOpenKyc
}) => {
  const { user, isAuthenticated, isClerkSignedIn, isTbhUserLoading, tbhUserError, refreshUser, logout, updateUser } = useAuth();
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editNameInput, setEditNameInput] = useState('');

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/assets/tbh-logo-dark.png" 
            alt="TBH - Ride Beyond Limits" 
            className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-200 drop-shadow-[0_0_12px_rgba(0,229,199,0.3)]" 
          />
        </div>

        {/* Center: City Hub Selector */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="relative">
            <button 
              onClick={() => setShowCityDropdown(!showCityDropdown)}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-[#00E5C7]/50 text-sm font-medium transition"
            >
              <MapPin className="w-4 h-4 text-[#00E5C7]" />
              <span>{selectedCity}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showCityDropdown && (
              <div className="absolute top-12 left-0 w-64 rounded-xl bg-[#141416] border border-white/10 shadow-2xl p-2 z-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">Select Indian City</p>
                <div className="max-h-60 overflow-y-auto space-y-1">
                  {cities.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onSelectCity(c.name);
                        setShowCityDropdown(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition ${
                        selectedCity === c.name ? 'bg-[#00E5C7]/15 text-[#00E5C7]' : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="font-semibold">{c.name} {c.stateCode ? `(${c.stateCode})` : ''}</span>
                      <span className="text-[10px] text-slate-400">{c.hubs?.length || 2} Hubs</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-400 bg-[#141416] px-3 py-2 rounded-xl border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All Rates in <strong className="text-white font-mono">₹ INR</strong></span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">

          {/* Driving Licence KYC Status Button */}
          <button
            onClick={() => {
              if (!isAuthenticated) {
                onOpenAuth();
              } else if (onOpenKyc) {
                onOpenKyc();
              }
            }}
            className={`hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition ${
              user?.drivingLicenseVerified
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20'
            }`}
            title="Driving Licence verification under Motor Vehicles Act"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{user?.drivingLicenseVerified ? 'DL Verified' : 'Verify DL'}</span>
          </button>

          {/* Language Switcher */}
          <button 
            onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-[#141416] border border-white/10 hover:border-white/20 text-xs font-semibold text-slate-300 transition"
          >
            <Globe className="w-3.5 h-3.5 text-[#00E5C7]" />
            <span>{lang}</span>
          </button>

          {/* Vehicle Compare Counter */}
          <button 
            onClick={onOpenCompare}
            className="relative flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-[#00E5C7]/40 text-xs font-medium text-slate-200 transition"
          >
            <Layers className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden sm:inline">{t('compare')}</span>
            {compareCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#00E5C7] text-black font-extrabold text-[10px] flex items-center justify-center">
                {compareCount}
              </span>
            )}
          </button>

          {/* My Bookings */}
          <button 
            onClick={() => {
              if (!isAuthenticated) {
                onOpenAuth();
              } else {
                onOpenBookings();
              }
            }}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-white/20 text-xs font-medium text-slate-200 transition"
          >
            <Calendar className="w-4 h-4 text-[#00E5C7]" />
            <span>{t('myBookings')}</span>
          </button>

          {/* Admin Panel Toggle - Strictly for verified ROLE_ADMIN */}
          {(user?.role === 'ROLE_ADMIN' || user?.email?.toLowerCase() === 'tupakulahemanth828@gmail.com') && (
            <button 
              onClick={onOpenAdmin}
              className="hidden md:flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 hover:text-white hover:border-amber-400/50 transition"
              title="TBH Operations Control Center"
            >
              <span>{t('adminDashboard')}</span>
            </button>
          )}

          {/* Auth Button or User Menu */}
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#141416] to-[#1F1F24] border border-[#00E5C7]/30 hover:border-[#00E5C7] transition"
              >
                <div className="w-7 h-7 rounded-full bg-[#00E5C7]/20 border border-[#00E5C7]/50 flex items-center justify-center text-xs font-bold text-[#00E5C7]">
                  {user.fullName ? user.fullName.charAt(0) : 'U'}
                </div>
                <div className="text-left hidden lg:block">
                  <p className="text-xs font-semibold text-white leading-tight">{user.fullName ? user.fullName.split(' ')[0] : 'Rider'}</p>
                  <p className="text-[10px] text-[#00E5C7] flex items-center space-x-0.5">
                    <ShieldCheck className="w-2.5 h-2.5" />
                    <span>{user.drivingLicenseVerified ? 'Verified DL' : 'Upload DL'}</span>
                  </p>
                </div>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showUserDropdown && (
                <div className="absolute right-0 top-12 w-72 rounded-xl bg-[#141416] border border-white/10 shadow-2xl p-3 z-50">
                  <div className="border-b border-white/10 pb-2.5 mb-2.5">
                    {/* User Name Edit Section */}
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rider Profile Name</p>
                      {isEditingName ? (
                        <button
                          type="button"
                          onClick={async () => {
                            if (editNameInput.trim()) {
                              try {
                                const res = await api.updateProfile(editNameInput.trim());
                                if (res && res.fullName) {
                                  updateUser({ fullName: res.fullName });
                                } else {
                                  updateUser({ fullName: editNameInput.trim() });
                                }
                                await refreshUser();
                              } catch {
                                updateUser({ fullName: editNameInput.trim() });
                              }
                            }
                            setIsEditingName(false);
                          }}
                          className="text-[10px] font-bold text-[#00E5C7] hover:underline"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setEditNameInput(user.fullName || '');
                            setIsEditingName(true);
                          }}
                          className="text-[10px] font-bold text-slate-400 hover:text-white"
                        >
                          Edit
                        </button>
                      )}
                    </div>

                    {isEditingName ? (
                      <div className="mt-1 flex items-center space-x-1.5">
                        <input
                          type="text"
                          value={editNameInput}
                          onChange={(e) => setEditNameInput(e.target.value)}
                          onKeyDown={async (e) => {
                            if (e.key === 'Enter') {
                              if (editNameInput.trim()) {
                                try {
                                  const res = await api.updateProfile(editNameInput.trim());
                                  if (res && res.fullName) {
                                    updateUser({ fullName: res.fullName });
                                  } else {
                                    updateUser({ fullName: editNameInput.trim() });
                                  }
                                  await refreshUser();
                                } catch {
                                  updateUser({ fullName: editNameInput.trim() });
                                }
                              }
                              setIsEditingName(false);
                            }
                          }}
                          placeholder="Enter display name"
                          className="w-full bg-[#0A0A0B] border border-[#00E5C7]/50 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none"
                          autoFocus
                        />
                      </div>
                    ) : (
                      <p className="text-xs font-bold text-white mt-0.5">{user.fullName}</p>
                    )}

                    <p className="text-[11px] text-slate-400 truncate mt-0.5">{user.email || user.phoneNumber}</p>
                    <div className="mt-1.5 flex items-center justify-between">
                      <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{user.drivingLicenseVerified ? `DL: ${user.drivingLicenseNumber || 'Verified'}` : 'DL Pending'}</span>
                      </div>
                      {user.drivingLicenseVerified && !isEditingName && (
                        <button
                          type="button"
                          onClick={() => {
                            if (user.fullName) {
                              updateUser({ fullName: user.fullName });
                            }
                          }}
                          className="text-[9px] text-[#00E5C7] hover:underline"
                          title="Use verified KYC name for pass"
                        >
                          KYC Name Verified
                        </button>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => { onOpenBookings(); setShowUserDropdown(false); }}
                    className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/5 transition flex items-center space-x-2"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#00E5C7]" />
                    <span>My Rental Passes</span>
                  </button>
                  <button 
                    onClick={() => { if (onOpenKyc) onOpenKyc(); else onOpenAuth(); setShowUserDropdown(false); }}
                    className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/5 transition flex items-center space-x-2"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Driving License & KYC</span>
                  </button>
                  {(user?.role === 'ROLE_ADMIN' || user?.email?.toLowerCase() === 'tupakulahemanth828@gmail.com') && (
                    <button 
                      onClick={() => { onOpenAdmin(); setShowUserDropdown(false); }}
                      className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-bold text-amber-400 hover:bg-amber-500/10 transition flex items-center space-x-2"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>Admin Operations</span>
                    </button>
                  )}
                  <button 
                    onClick={() => { logout(); setShowUserDropdown(false); }}
                    className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition flex items-center space-x-2 mt-1"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : isClerkSignedIn && isTbhUserLoading ? (
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#141416] border border-[#00E5C7]/40 text-xs text-slate-300 animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 text-[#00E5C7] animate-spin" />
              <span className="font-semibold text-white">Syncing Profile...</span>
            </div>
          ) : isClerkSignedIn && tbhUserError ? (
            <button 
              onClick={refreshUser}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 transition"
              title="Click to retry backend rider profile synchronization"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Retry Sync</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button 
                onClick={onOpenAuth}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-bold text-xs shadow-teal-glow hover:opacity-95 transition"
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>Login / Sign Up</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};
