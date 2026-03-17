interface UserComment {
  quote: string;
  name: string;
  role: string;
  featured?: boolean;
}

const defaultComments: UserComment[] = [
  {
    quote: "Simple description here, maximum 100 word can be perfect.",
    name: "Fawwaz Humam",
    role: "Head of bla",
    featured: false,
  },
  {
    quote:
      "Simple description here, maximum 100 word can be perfect and you must fillin the section with simple description here, maximum 100 word can be perfect.",
    name: "Fawwaz Humam",
    role: "Head of bla",
    featured: true,
  },
  {
    quote: "Simple description here, maximum 100 word can be perfect.",
    name: "Fawwaz Humam",
    role: "Head of bla",
    featured: false,
  },
];

interface SlideBarCommentsProps {
  className?: string;
  heading?: string;
  comments?: UserComment[];
}

export default function CommentsBar({
  className = "",
  heading = "How We Help",
  comments = defaultComments,
}: SlideBarCommentsProps) {
  return (
    <section className={`w-full bg-gray-50 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8 py-10 md:py-14">
        <h2
          className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-gray-800 text-center tracking-tight leading-[1.1] mb-8 md:mb-10
          text-[24px] md:text-[32px]">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 rounded-xl px-4 border transition-colors ${
                comment.featured
                  ? "bg-gray-50 border-gray-400"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] py-4 font-medium text-[14px] md:text-[16px] text-gray-600 leading-relaxed flex-1">
                &ldquo;{comment.quote}&ldquo;
              </p>

              <div className="flex items-center justify-between gap-3 py-4 border-t border-gray-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gray-200 border border-gray-400 shrink-0 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle
                        cx="6"
                        cy="4.5"
                        r="2"
                        fill="black"
                        fillOpacity="0.4"
                      />
                      <path
                        d="M2 10C2 8.34315 3.79086 7 6 7C8.20914 7 10 8.34315 10 10"
                        stroke="black"
                        strokeOpacity="0.4"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] text-gray-800 leading-tight">
                      {comment.name}
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-gray-600 leading-tight">
                      {comment.role}
                    </span>
                  </div>
                </div>

                <div className="w-6 h-6 rounded-md bg-gray-200 border border-gray-400 flex items-center justify-center shrink-0">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M2 5.5L4.5 8L9 3"
                      stroke="black"
                      strokeOpacity="0.35"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
