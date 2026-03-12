"use client";
import { useState } from "react";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = " " }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full bg-white border-b border-gray-100 sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
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
            <span className="font-semibold text-[15px] text-gray-900 hidden sm:block font-['Plus_Jakarta_Sans',sans-serif]">
              Humanicons
            </span>
          </div>

          <div>
            <button>Icos</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
