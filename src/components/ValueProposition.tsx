interface Value {
  className?: string;
  heading?: string;
  subtext?: string;
}

export default function ValueProposition({
  className = "",
  heading = "Hand crafted element",
  subtext = "Crafted for support UI/UX and Web Design it's free",
}: Value) {
  return (
    <section
      className={`w-full bg-gray-50 border-t border-gray-200 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-3 py-8 md:py-10">
          <div className=" hidden md:flex shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gray-400 border border-gray-200 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="5.5"
                  stroke="white"
                  strokeOpacity="0.4"
                  strokeWidth="1.3"
                />
                <circle cx="8" cy="8" r="2" fill="white" fillOpacity="0.3" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-center text-center gap-2 flex-1">
            <h2 className="fonr-['Plus_Jakarta_Sans',sans-serif] font-semibold text-gray-800 tracking-tight leading-[1.1] text-[24px] md:text-[32px]">
              {heading}
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-gray-600 text-[14px] md:text-[16px] leading-relaxed max-w-[480px]">
              {subtext}
            </p>
          </div>

          <div className="hidden md:flex shrink-0 opacity-0 pointer-events-none">
            <div className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
