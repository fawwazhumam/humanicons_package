interface HookItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultHooks: HookItem[] = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 1.5L1.5 5.25L9 9L16.5 5.25L9 1.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 12.75L9 16.5L16.5 12.75"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 9L9 12.75L16.5 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Hook 1",
    description: "Simple description here, maximum 100 word can be perfect",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 1.5L1.5 5.25L9 9L16.5 5.25L9 1.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 12.75L9 16.5L16.5 12.75"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 9L9 12.75L16.5 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Hook 2",
    description: "Simple description here, maximum 100 word can be perfect",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 1.5L1.5 5.25L9 9L16.5 5.25L9 1.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 12.75L9 16.5L16.5 12.75"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 9L9 12.75L16.5 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Hook 3",
    description: "Simple description here, maximum 100 word can be perfect",
  },
];

export default function TrustBar({
  className = "",
  items = defaultHooks,
}: {
  className?: string;
  items?: HookItem[];
}) {
  return (
    <section className={`w-full border-t border-gray-50 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 p-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2.5 py-7 md:py-8 px-0 md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="w-8 h-8 rounded-lg bg-gray-400 border border-gray-200 flex items-center justify-center text-gray-50 mb-0.5">
                {item.icon}
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-gray-800">
                {item.title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px] text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
