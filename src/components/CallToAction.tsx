import { Head } from "next/document";
import Link from "next/link";

interface HeadButtonProps {
  className?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonLink?: string;
}

export default function CallToAction({
  className = "",
  heading = "Header 1",
  description = "Simple description here, maximum 100 word can be perfect",
  buttonLabel = "Button",
  buttonLink = "#",
}: HeadButtonProps) {
  return (
    <section
      className={`w-full bg-gray-50 border-t border-gray-100 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 py-9 md:py-10">
          <div className="flex flex-col gap-1">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-gray-800 tracking-tight leading-[1.1] text-[24px] md:text-[32px]">
              {heading}
            </h2>
            <div className="flex flex-col gap-0.5">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-gray-600 text-[14px] md:text-[16px] leading-relaxed">
                {description}
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-gray-600 text-[14px] md:text-[16px] leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href={buttonLink}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-[14px] md:text-[16px] font-semibold text-gray-200 hover:text-white bg-gray-800 border border-gray-400 rounded-lg transition-all font-['Plus_Jakarta_Sans',sans-serif] group">
              {buttonLabel}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover:translate-x-0.5 transition-transform"></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
