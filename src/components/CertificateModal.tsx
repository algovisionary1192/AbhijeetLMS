import React, { useRef } from 'react';
import { Certification } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  Award,
  Sparkles,
  QrCode
} from 'lucide-react';

interface CertificateModalProps {
  cert: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  cert,
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = React.useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !cert) return null;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(cert.verificationHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        id="certificate-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[40px] max-w-4xl w-full shadow-2xl border border-black/10 overflow-hidden relative my-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Action Bar */}
          <div className="p-6 md:px-10 border-b border-black/5 bg-[#F9FAFB] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-black text-[#E6FF55] flex items-center justify-center font-black">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-geist text-[10px] font-black uppercase tracking-widest text-black/50 block">
                  Official Verification
                </span>
                <h3 className="font-hanken text-lg font-black text-[#111827]">
                  Verified Executive Credential
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-[#E6FF55] hover:text-black font-geist text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Download PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white hover:bg-black hover:text-white text-black transition-all border border-black/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Printable Canvas */}
          <div className="p-6 md:p-12 overflow-y-auto bg-[#F3F4F6]">
            <div
              ref={printRef}
              id="printable-certificate"
              className="bg-white rounded-[32px] p-8 md:p-14 border-4 border-[#111827] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[520px]"
            >
              {/* Subtle Guilloche Corner Accents */}
              <div className="absolute top-0 left-0 w-32 h-32 border-b-2 border-r-2 border-black/10 rounded-br-[40px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 border-b-2 border-l-2 border-black/10 rounded-bl-[40px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-t-2 border-r-2 border-black/10 rounded-tr-[40px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-t-2 border-l-2 border-black/10 rounded-tl-[40px] pointer-events-none" />

              {/* Top Banner */}
              <div className="text-center relative z-10 space-y-2 mb-8">
                <div className="inline-flex items-center gap-2 bg-black text-[#E6FF55] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] font-geist">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ABHIJEET ACADEMY · EXECUTIVE CREDENTIAL</span>
                </div>
                <h1 className="font-hanken text-3xl md:text-4xl font-black text-[#111827] tracking-tight">
                  Certificate of Architectural Mastery
                </h1>
                <p className="font-inter text-xs text-black/50 font-semibold uppercase tracking-widest">
                  Operational Systems & Autonomous Agent Orchestration
                </p>
              </div>

              {/* Recipient & Subject */}
              <div className="text-center relative z-10 space-y-4 my-6">
                <span className="font-inter text-xs text-black/60 font-medium italic">
                  This certifies that
                </span>
                <div className="font-hanken text-3xl md:text-5xl font-black text-[#111827] tracking-tight border-b-2 border-black/10 pb-4 max-w-xl mx-auto">
                  {cert.recipientName}
                </div>
                <p className="font-inter text-sm text-black/70 max-w-lg mx-auto leading-relaxed font-medium">
                  has rigorously demonstrated production-grade capability and completed all benchmark capstones in:
                </p>
                <div className="inline-block bg-[#E6FF55] text-black font-hanken text-xl md:text-2xl font-black px-6 py-2 rounded-2xl shadow-sm">
                  {cert.title}
                </div>
              </div>

              {/* Competencies */}
              <div className="relative z-10 my-6">
                <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="bg-[#F3F4F6] text-black font-geist text-xs font-bold px-3 py-1 rounded-full border border-black/5"
                    >
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Signatures & Verification */}
              <div className="pt-8 mt-6 border-t-2 border-black/10 grid grid-cols-1 md:grid-cols-3 items-end gap-6 relative z-10">
                {/* Principal Signature */}
                <div className="text-left space-y-1">
                  <div className="font-hanken text-lg font-black text-[#111827] italic">
                    Abhijeet Kumar
                  </div>
                  <div className="font-geist text-[10px] font-black uppercase tracking-wider text-black/40">
                    Principal AI Architect & Founder
                  </div>
                </div>

                {/* Official Seal */}
                <div className="text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black text-[#E6FF55] border-4 border-[#E6FF55] flex flex-col items-center justify-center shadow-md">
                    <Award className="w-6 h-6" />
                    <span className="text-[7px] font-black tracking-widest text-white mt-0.5">VERIFIED</span>
                  </div>
                </div>

                {/* Audit & Hash Metadata */}
                <div className="text-right space-y-1">
                  <div className="font-geist text-xs font-mono font-bold text-black">
                    ID: {cert.credentialId}
                  </div>
                  <div className="font-geist text-[10px] text-black/50 font-bold">
                    Issued: {cert.issueDate}
                  </div>
                </div>
              </div>

              {/* Cryptographic Ledger Footer */}
              <div className="mt-6 pt-4 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] font-mono text-black/50">
                <div className="truncate max-w-md">
                  HASH: {cert.verificationHash}
                </div>
                <button
                  onClick={handleCopyHash}
                  className="font-geist font-black uppercase text-black hover:underline flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Hash Copied' : 'Copy Hash'}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
