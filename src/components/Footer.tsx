import React, { useState } from 'react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenContact
}) => {
  const [modalType, setModalType] = useState<string | null>(null);

  return (
    <>
      <footer
        id="app-footer"
        className="w-full py-12 border-t border-black/5 mt-16 bg-transparent"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black text-[#E6FF55] flex items-center justify-center font-black text-xs font-hanken">
              AK
            </div>
            <div className="font-hanken text-[#111827] font-black text-base tracking-tight">
              Abhijeet Kumar
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="font-geist text-xs font-bold uppercase tracking-wider text-black/50 hover:text-black transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="font-geist text-xs font-bold uppercase tracking-wider text-black/50 hover:text-black transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setModalType('contact')}
              className="font-geist text-xs font-bold uppercase tracking-wider text-black/50 hover:text-black transition-colors cursor-pointer"
            >
              Contact
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="font-geist text-xs font-bold uppercase tracking-wider text-black/50 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="font-geist text-xs font-bold text-black/40 text-center md:text-right">
            © 2024 Abhijeet Kumar. Operational Mastery through AI.
          </div>
        </div>
      </footer>

      {/* Simple Information Modal for Footer Links Bento */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-white border border-black/5 rounded-[36px] max-w-md w-full p-8 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-hanken text-xl font-black text-[#111827] capitalize">
              {modalType === 'privacy' && 'Privacy Policy'}
              {modalType === 'terms' && 'Terms of Service'}
              {modalType === 'contact' && 'Executive Contact & Office'}
            </h3>
            <p className="font-inter text-xs text-black/70 leading-relaxed font-medium">
              {modalType === 'privacy' &&
                'Abhijeet Academy and advisory services maintain strict data isolation standards. No client telemetry, code snippets, or proprietary prompts are retained or used for external model training.'}
              {modalType === 'terms' &&
                'All curriculum content, architectural blueprints, and sandbox code patterns provided in Abhijeet Academy are licensed for internal enterprise application by registered cohorts.'}
              {modalType === 'contact' &&
                'Direct correspondence: office@abhijeet.ai. Advisory inquiries are reviewed within one business day.'}
            </p>
            <button
              onClick={() => setModalType(null)}
              className="w-full py-3 bg-black hover:bg-[#E6FF55] hover:text-black text-white rounded-full text-xs font-geist font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
