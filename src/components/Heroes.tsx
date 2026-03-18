import { stat } from "fs";
import Link from "next/link";

export default function Heroes({ className = " " }: { className?: string }) {
  return (
    <section className="w-full bg-gray-200 ${className}">
      <div className="max-w-[1216px] mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center pt-24 md:pt-32 pb-14 md:pb-20 gap-5 md:gap-6">
          <h1 className="font-['Plus_Jakarta_Sans, sans-serif] font-semibold text-gray-800 leading-[1.08] tracking-[-0.03em] mx-w-[680px] text-[40px] sm:text-[52px] md:text-[60px]">
            Hand crafted <span className="text-gray-600">elements</span>
          </h1>

          <p className="font-['Plus_Jakarta_Sans,sans-serif] font-medium text-gray-500 leading-relaxed max-w-[480px]">
            Humanicons is a free icons and 3D eements cafted for support UI/UX
            and Web Design it &apos;s Free to use
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-[16px] font-semibold rounded-lg hover:bg-gray-100 transition-all font-['Plus-Jakarta_Sans,sans-serif]">
              Explore Icons
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-[16px] font-semibold rounded-lg hover:bg-gray-100 transition-all font-['Plus-Jakarta_Sans,sans-serif]">
              Figma Library
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-3 border-t border-gray-300 w-full max-w-[360px] justify-center">
            {[
              { value: "2,400+", label: "Icons" },
              { value: "180+", label: "3D elements" },
              { value: "Free", label: "TBA" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-0.5">
                <span className="text-[16px] font-semibold text-gray-600 font-['Plus-Jakarta_Sans',sans-serif]">
                  {stat.value}
                </span>
                <span className="text-[12px] font-medium text-gray-600 font-['Plus-Jakarta_Sans',sans-serif]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
