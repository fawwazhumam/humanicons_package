"use client";
import { useState } from "react";
import Link from "next/link";
import { Fascinate } from "next/font/google";
import { useEffect } from "react";

interface NavbarProps {
  className?: string;
}

const navLinks = [
  { label: "Elements", hasDropdown: true },
  { label: "Docs", hasDropdown: false },
  { label: "Labs", hasDropdown: false },
];

export default function Navbar({ className = " " }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`w-full backdrop-blur-lg bg-white border-b border-gray-100 sticky top-0 z-50 ${className}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-14 md:h-[58px]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="7" fill="white" opacity="0.9" />
                    <circle cx="9" cy="9" r="7" fill="white" />
                  </svg>
                </div>
                <span className="font-semibold text-[18px] text-gray-900 hidden sm:block font-['Plus_Jakarta_Sans',sans-serif]">
                  Humanicons
                </span>
              </div>

              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    className="flex items-center gap-1 px-3 py-2 text-[16px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="mt-0.5">
                        <path
                          d="M3.5 5.25L7 8.75L10.5 5.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                ))}
                {/* <button className="px-3 py-2 text-[16px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                Docs
              </button>
              <button className="px-3 py-2 text-[16px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                Labs
              </button> */}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-[16px] font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                Sign Up
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 6H17M3 10H17M3 14H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-[60] bg-gray-50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-40 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-[70] bg-white border-t border-gray-200 rounded-t-[24px] shadow-2xl transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}>
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-16 h-1 rounded-full bg-black/12" />
        </div>

        <div className="px-4 pt-2 pb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="5.5" fill="#ffffff" />
                </svg>
              </div>
              <span className="text-[16px] font-semibold text-black font-['Plus_Jakarta_Sans',sans-serif]">
                Humanicons
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-7 h-7 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1.5 1.5L11.5 11.5M11.5 1.5L1.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="space-7-0.5 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between px-3 py-3.5 text-[16px] font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-xl transition-all font-['Plus_Jakarta_Sans',sans-serif]">
                <span>{link.label}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="opacity-24">
                  <path
                    d="M5 2.5L9.5 7L5 11.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>

          <div className="h-px bg-gray-50 mb-4">
            <div className="gridgrid-cols-2 gap-2">
              <Link
                href="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center py-3.5 text-[14px] font-semibold text-gray-700 border border-gray-50 rounded-xl hover:bg-gray-50 transition-all font-['Plus-Jakarta_Sans',sans-serif]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
