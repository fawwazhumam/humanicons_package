"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const footerLinks = {
  product: {
    label: "Product",
    links: [{ label: "Download", href: "#" }],
  },
  resource: {
    label: "Resource",
    links: [
      { label: "FAQ", href: "#" },
      { label: "CLI", href: "#" },
      { label: "Community", href: "#" },
      { label: "Subscribe", href: "#" },
      { label: "QNA", href: "#" },
    ],
  },
  aboutUs: {
    label: "About Us",
    links: [
      { label: "Blog", href: "#" },
      { label: "About", href: "#" },
      { label: "Values", href: "#" },
      { label: "Team", href: "#" },
      { label: "Merch", href: "#" },
    ],
  },
  social: {
    label: "Social",
    links: [
      { label: "Twitter", href: "#" },
      { label: "Medium", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Tiktok", href: "#" },
    ],
  },
};

interface AccordionColumnProps {
  label: string;
  links: { label: string; href: string }[];
}

function AccordionColumn({ label, links }: AccordionColumnProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-400">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-[14px] font-semibold text-white/60 hover:text-white transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
        {label}
        <ChevronDownIcon
          className={`w-4 h-4 text-white/30 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="flex flex-col gap-1 pb-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-[14px] font-medium text-white/35 hover:text-white/70 transition-colors font-['Plus_Jakarta_Sans',sans-serif] py-0.5 group">
              {link.label}
              <ArrowRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

interface FooterProps {
  className?: string;
  year?: number;
}

export default function Footer({ className = "", year = 2026 }: FooterProps) {
  return (
    <footer
      className={`w-full bg-[#0d0d0d] border-t border-white/[0.06] ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8 pb-20 pt-12 md:pt-18 md:pb-48">
        <div className="hidden md:grid md:grid-cols-5 gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" fill="black" />
                  <circle cx="9" cy="9" r="7" fill="black" />
                </svg>
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] text-gray-50">
                Humanicons © {year}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: "Sign Up", href: "#" },
                { label: "Have an account? Sign In", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Attributions", href: "#" },
                { label: "Manage Site Cookies", href: "#" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium text-gray-400 hover:text-gray-100 transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((col) => (
            <div key={col.label} className="flex flex-col gap-4">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-gray-200">
                {col.label}
              </p>
              <div className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-gray-400 hover:text-white/65 transition-colors font-['Plus_Jakarta_Sans',sans-serif] group">
                    {link.label}
                    <ArrowRightIcon className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-0">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shrink-0">
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="5.5" fill="#0d0d0d" />
              </svg>
            </div>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-gray-100">
              Humanicons © {year}
            </span>
          </div>

          <div className="flex flex-col gap-1.5 mb-5 pb-5 border-b border-gray-200">
            {[
              { label: "Sign Up | Have an account? Sign In", href: "#" },
              { label: "Terms of Service | Attributions", href: "#" },
              { label: "Manage Site Cookies", href: "#" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-gray-200 hover:text-gray-400 transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                {link.label}
              </Link>
            ))}
          </div>

          {Object.values(footerLinks).map((col) => (
            <AccordionColumn
              key={col.label}
              label={col.label}
              links={col.links}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
