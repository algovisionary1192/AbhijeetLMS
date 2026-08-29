import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { Menu, X, Terminal, Shield, LogOut, UserCheck, Sparkles } from 'lucide-react';

interface TopNavBarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onOpenLogin: () => void;
  onOpenGetStarted: () => void;
  isLoggedIn: boolean;
  userRole: string;
  onLogout: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeTab,
  setActiveTab,
  onOpenLogin,
  onOpenGetStarted,
  isLoggedIn,
  userRole,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { key: NavigationTab; label: string }[] = [
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'academy', label: 'Academy' },
    { key: 'case-studies', label: 'Case Studies' },
    { key: 'dashboard', label: 'Dashboard' }
  ];

  return (
    <header
      id="top-navbar"
      className="bg-[#F3F4F6]/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-black/5 transition-all"
    >
      <div className="flex justify-between items-center h-18 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-10">
          <div
            id="brand-logo"
            onClick={() => setActiveTab('academy')}
            className="flex items-center gap-3 cursor-pointer active:scale-95 transition-transform group"
          >
            <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center text-white font-black text-lg group-hover:bg-[#E6FF55] group-hover:text-black transition-colors shadow-sm">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-hanken text-sm font-black tracking-tight leading-none text-[#111827]">
                ABHIJEET
              </span>
              <span className="font-geist text-[9px] font-bold text-black/40 tracking-[0.2em] uppercase">
                AI ACADEMY
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-black/50">
            {navItems.map((item) => {
              const isActive = activeTab === item.key;
              return (
                <button
                  key={item.key}
                  id={`nav-link-${item.key}`}
                  onClick={() => setActiveTab(item.key)}
                  className={`transition-all cursor-pointer py-1 ${
                    isActive
                      ? 'text-black border-b-2 border-black pb-1 font-black'
                      : 'hover:text-black font-bold'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-full border border-black/5 shadow-sm">
              <div className="flex flex-col items-end mr-1">
                <span className="text-xs font-black text-[#111827]">Abhijeet Kumar</span>
                <span className="text-[9px] text-black/40 font-bold tracking-wider uppercase font-geist">
                  {userRole}
                </span>
              </div>
              <div
                onClick={() => setActiveTab('dashboard')}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-rose-400 border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform"
                title="Open Dashboard"
              />
              <button
                id="logout-btn"
                onClick={onLogout}
                title="Log Out"
                className="p-1.5 rounded-full text-black/40 hover:text-black hover:bg-black/5 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              id="login-header-btn"
              onClick={onOpenLogin}
              className="px-5 py-2 text-xs font-black uppercase tracking-wider text-black bg-white rounded-full border border-black/10 hover:bg-black hover:text-white transition-all cursor-pointer active:scale-95 shadow-sm"
            >
              Log In
            </button>
          )}

          <button
            id="get-started-header-btn"
            onClick={onOpenGetStarted}
            className="bg-black text-white hover:bg-[#E6FF55] hover:text-black px-6 py-2.5 rounded-full font-inter text-xs font-black uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <span>Get Started</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:bg-black/5 rounded-xl transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b border-black/5 px-6 py-5 space-y-3 shadow-lg"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2.5 px-4 rounded-2xl font-inter text-sm font-bold uppercase tracking-wider ${
                  isActive
                    ? 'bg-black text-white font-black'
                    : 'text-black/60 hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-black/5 flex flex-col gap-2.5">
            {!isLoggedIn ? (
              <button
                onClick={() => {
                  onOpenLogin();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-xs font-black uppercase tracking-wider text-black border border-black/10 rounded-full hover:bg-black/5"
              >
                Log In
              </button>
            ) : (
              <button
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-xs font-black uppercase tracking-wider text-red-600 border border-red-200 rounded-full hover:bg-red-50"
              >
                Log Out ({userRole})
              </button>
            )}
            <button
              onClick={() => {
                onOpenGetStarted();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center bg-black text-white hover:bg-[#E6FF55] hover:text-black text-xs font-black uppercase tracking-wider rounded-full shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
