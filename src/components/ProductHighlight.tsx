interface Card {
  title: string;
  description: string;
  author: string;
  year?: string;
}

const defaultCards: Card[] = [
  {
    title: "Hook 1",
    description: "Simple description here, maximum 100 word can be perfect",
    author: "Fawwaz humam",
    year: "2025",
  },
  {
    title: "Hook 2",
    description: "Simple description here, maximum 100 word can be perfect",
    author: "Fawwaz humam",
    year: "2025",
  },
  {
    title: "Hook 3",
    description: "Simple description here, maximum 100 word can be perfect",
    author: "Fawwaz humam",
    year: "2025",
  },
  {
    title: "Hook 3",
    description: "Simple description here, maximum 100 word can be perfect",
    author: "Fawwaz humam",
    year: "2025",
  },
  {
    title: "Hook 1",
    description: "Simple description here, maximum 100 word can be perfect",
    author: "Fawwaz humam",
    year: "2025",
  },
  {
    title: "Hook 2",
    description: "Simple description here, maximum 100 word can be perfect",
    author: "Fawwaz humam",
    year: "2025",
  },
  {
    title: "Hook 3",
    description: "Simple description here, maximum 100 word can be perfect",
    author: "Fawwaz humam",
    year: "2025",
  },
  {
    title: "Hook 3",
    description: "Simple description here, maximum 100 word can be perfect",
    author: "Fawwaz humam",
    year: "2025",
  },
];

interface ProductProps {
  className?: string;
  cards?: Card[];
}

export default function ProductHighlight({
  className = "",
  cards = defaultCards,
}: ProductProps) {
  return (
    <section
      className={`w-full bg-gray-50 border-t border-gray-100 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-5 overflow-hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 px-2 py-1 md:py-1.5 md:px-4 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] py-2 font-semibold text-[14px] md:text-[16px] text-gray-600 group-hover:text-gray-800 transition-colors">
                {card.title}
              </h3>

              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[12px] md:text-[14px] text-gray-600 leading-relaxed flex-1">
                {card.description}
              </p>

              {/* <div className="w-7 h-7 rounded-md bg-gray-400 border border-gray-200 flex items-center justify-center">
                <svg width="12" height="12" fill="none"></svg>
              </div> */}

              <div className=" flex items-center justify-between pt-1 border-t border-gray-200">
                <div className="flex items-center gap-1.5 py-2">
                  <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-400 flex items-center justify-center shrink-0">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"></svg>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-gray-800">
                    {card.author}
                  </span>
                </div>
                {card.year && (
                  <span className="text-[12px] text-gray-800 font-mono">
                    {card.year}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
