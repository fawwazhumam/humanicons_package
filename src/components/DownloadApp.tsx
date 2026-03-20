import Link from "next/link";
import {
  DevicePhoneMobileIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface DownloadSectionProps {
  className?: string;
  appIconSrc?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function DownloadApp({
  className = "",
  appIconSrc,
  title = "Official App",
  subtitle = "Available on App store and Google Play store",
  primaryLabel = "Apply Now",
  primaryHref = "#",
  secondaryLabel = "Download Now",
  secondaryHref = "#",
}: DownloadSectionProps) {
  return (
    <section
      className={`w-full bg-gray-50 border-t border-gray-100 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-[22px] md:rounded-[26px] bg-gray-200 border border-gray-400 flex items-center justify-center shadow-xl">
            {appIconSrc ? (
              <img
                src={appIconSrc}
                alt={title}
                className="w-full h-full object-cover rounded-[22px] md:rounded-[26px]"
              />
            ) : (
              <DevicePhoneMobileIcon className="w-9 h-9 md:w-10 md:h-10 text-gray-600" />
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h2
              className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-gray-800 tracking-tight
              text-[22px] md:text-[28px]">
              {title}
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-gray-600 text-[13px] md:text-[14px]">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-row items-center gap-2.5">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-[14px] font-semibold text-gray-500 hover:text-gray-600 border border-gray-400 hover:border-gray-600 rounded-lg transition-all font-['Plus_Jakarta_Sans',sans-serif] hover:bg-white/[0.04] group">
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-[14px] rounded-lg font-semibold text-gray-500 bg-gray-200 hover:bg-gray-300rounded-lg transition-all font-['Plus_Jakarta_Sans',sans-serif]">
              <ArrowDownTrayIcon className="w-4 h-4" />
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
