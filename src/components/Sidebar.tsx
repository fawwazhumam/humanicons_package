interface HookItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultHooks: HookItem[] = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1.5L1.5 5.25L9 9L16.5 5.25L9 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 12.75L9 16.5L16.5 12.75" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 9L9 12.75L16.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Hook 1",
    description: "Simple description here, maximum 100 word can be perfect",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 5.5V9.5L11.5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Hook 2",
    description: "Simple description here, maximum 100 word can be perfect",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.5 9L8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Hook 3",
    description: "Simple description here, maximum 100 word can be perfect",
  },
];

export default function SlideBar({
  className = "",
  items = defaultHooks,
}: {
  className?: string;
  items?: HookItem[];
}) {
  return (
    <section className={`w-full bg-gray-100 border-t border-gray-200 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2.5 py-7 md:py-8 px-0 md:px-8 first:md:pl-0 last:md:pr-0"
            >
              {/* Icon */}
              <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-400 flex items-center justify-center text-gray-800 mb-0.5">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-gray-800">
                {item.title}
              </h3>
              {/* Description */}
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
