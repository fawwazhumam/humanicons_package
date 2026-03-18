interface SlideCard {
  title: string;
  description: string;
  author: string;
  year?: string;
  imageSrc?: string;
}

const defaultCards: SlideCard[] = [
  {
    title: "Hook 1",
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
    title: "Hook 1",
    description: "Simple description here, maximum 100 word can be perfect",
    author: "Fawwaz humam",
    year: "2025",
  },
];

interface SlideCardProps {
  className?: string;
  cards?: SlideCard[];
}

export default function ProjectShowcase({
  className = "",
  cards = defaultCards,
}: SlideCardProps) {
  return (
    <section
      className={`w-full bg-gray-50 border-t border-gray-100 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-xl border border-gray-400 bg-gray-50 overflow-hidden hover:bg-gray-100 transition-colors group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-gray-100 border-b border-gray-400 flex items-center justify-center">
                {card.imageSrc ? (
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="black"></svg>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2.5 px-4 pb-4">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] text-gray-600 group-hover:text-gray-800 transition-colors">
                  {card.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px] text-gray-600 leading-relaxed">
                  {card.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 border border-gray-400 flex items-center justify-center shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="white"></svg>
                    </div>
                    <span className="font-['PLus-Jakarta_Sans',sans-serif] text-[14px] text-gray-800">
                      {card.author}
                    </span>
                  </div>
                  {card.year && (
                    <span className="text-[14px] text-gray-800 font-mono">
                      {card.year}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
