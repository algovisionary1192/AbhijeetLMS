import React, { useState } from 'react';
import { X, User, Sparkles, Shield, ArrowRight, Check } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLogin
}) => {
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('Executive Pro');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
    onClose();
  };

  const presetProfiles = [
    {
      role: 'Executive Pro',
      desc: 'Full sandbox access, live code runners, and verified credential export',
      badge: 'Recommended'
    },
    {
      role: 'Enterprise Team Lead',
      desc: 'Multi-seat cohort management, telemetry analytics, and curriculum audits',
      badge: 'Corporate Tier'
    },
    {
      role: 'Guest Auditor',
      desc: 'Read-only view of syllabus, case studies, and public verification hashes',
      badge: 'Public'
    }
  ];

  return (
    <div
      id="auth-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="auth-modal-container"
        className="bg-white border border-black/5 rounded-[40px] max-w-md w-full p-8 md:p-10 shadow-2xl relative overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-[#F3F4F6] text-black hover:bg-black hover:text-white transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-black text-[#E6FF55] flex items-center justify-center mx-auto mb-3">
            <User className="w-6 h-6" />
          </div>
          <h2 className="font-hanken text-2xl md:text-3xl font-black text-[#111827]">
            Executive Portal Access
          </h2>
          <p className="font-inter text-xs text-black/60 mt-1 font-medium">
            Sign in to access your Command Center, sandboxes, and certificates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-geist text-[10px] font-black uppercase tracking-wider text-black/60 mb-1.5">
              Corporate Email / Student ID
            </label>
            <input
              type="text"
              required
              placeholder="abhijeet.kumar@enterprise.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F3F4F6] border border-black/10 rounded-full px-4 py-2.5 text-xs text-black font-inter font-medium placeholder-black/30 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block font-geist text-[10px] font-black uppercase tracking-wider text-black/60 mb-2">
              Select Profile Role:
            </label>
            <div className="space-y-2">
              {presetProfiles.map((p) => {
                const isSelected = selectedRole === p.role;
                return (
                  <div
                    key={p.role}
                    onClick={() => setSelectedRole(p.role)}
                    className={`p-4 rounded-[24px] border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-[#F9FAFB] border-black/10 hover:border-black/30 text-black'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-hanken text-xs font-black">
                        {p.role}
                      </span>
                      <span
                        className={`font-geist text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-[#E6FF55] text-black font-mono'
                            : 'bg-black/5 text-black/60'
                        }`}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <p
                      className={`font-inter text-[11px] font-medium ${
                        isSelected ? 'text-white/70' : 'text-black/50'
                      }`}
                    >
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-[#E6FF55] hover:bg-[#E6FF55] hover:text-black py-4 rounded-full font-geist text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 mt-2"
          >
            <span>Enter Command Center</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
