"use client";

import { useState } from "react";
import Link from "next/link";

interface Category {
  label: string;
  description?: string;
  learnMore?: string;
  imageSrc?: string;
}

const defaultCategories: Category[] = [
  {
    label: "Category 1",
    description:
      "Simple description here, maximum 100 word can be perfect and Simple description here, maximum 100 word can be okay.",
    learnMore: "#",
  },
  {
    label: "Category 2",
    description:
      "Simple description here, maximum 100 word can be perfect and Simple description here, maximum 100 word can be okay.",
    learnMore: "#",
  },
  {
    label: "Category 3",
    description:
      "Simple description here, maximum 100 word can be perfect and Simple description here, maximum 100 word can be okay.",
    learnMore: "#",
  },
];

interface OverviewProps {
  className?: string;
  categories?: Category[];
  defaultImageSrc?: string;
}

export default function Overview({
  className = "",
  categories = defaultCategories,
  defaultImageSrc,
}: OverviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = categories[activeIndex];
  const others = categories.filter((_, i) => i !== activeIndex);

  return (
    <section
      className={`w-full bg-gray-50 border-t border-gray-100 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="flex flex-col gap-5 md:justify-between flex-1 h-full w-full min-h-[400px]">
            <div className="flex flex-col gap-3">
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-gray-800 tracking-tight leading-[1.1] text-[20px] md:text-[24px] transition-all duration-200">
                {active.label}
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-gray-600 text-[14px] md:text-[16px] leading-relaxed">
                {active.description}
              </p>
              <Link
                href={active.learnMore ?? "#"}
                className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-semibold text-gray-800 hover:text-gray-600 transition-colors w-fit group mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
                Learn More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover:translate-x-0.5 transition-transform"></svg>
              </Link>
            </div>

            <div className="flex flex-col gap-2 mt-2 ">
              {others.map((cat, i) => {
                const originalIndex = categories.findIndex(
                  (c) => c.label === cat.label,
                );
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveIndex(originalIndex)}
                    className={`flex items-center justify-between rounded-xl border border-gray-400 p-4 text-[14px] md:text-[16px] font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-all text-left`}>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif]">
                      {cat.label}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 2V12M2 7H12"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full md:w-[48%] shrink-0 order-first md:order-0">
            <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-100 aspect-[4/3] flex items-center justify-center">
              {active.imageSrc || defaultImageSrc ? (
                <img
                  src={active.imageSrc ?? defaultImageSrc}
                  alt={active.label}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              ) : (
                <div className="flex flex-col items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-gray-400 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect
                        x="2"
                        y="3"
                        width="14"
                        height="12"
                        rx="2"
                        stroke="white"
                        strokeOpacity="0.3"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M7 8L11 10L7 12V8Z"
                        fill="white"
                        fillOpacity="0.3"
                      />
                    </svg>
                  </div>
                  <p className="text-[12px] text-gray-600 font-['Plus_Jakarta_Sans',sans-serif]">
                    Image Placeholder
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
