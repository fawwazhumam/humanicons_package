interface Logo {
  name: string;
  icon?: React.ReactNode;
}

const defaultLogos: Logo[] = [
  { name: "Logo A" },
  { name: "Logo B" },
  { name: "Logo C" },
  { name: "Logo D" },
];

interface Stats {
  className?: string;
  logos?: Logo[];
}

export default function Collaborator({
  className = "",
  logos = defaultLogos,
}: Stats) {
  return (
    <section className={`w-full bg-gray-50 border-t border-gray-50 ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x devide-y md:divide-y-0 divide-gray-100">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 py-6 md:py-8 px-4 group cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="4"
                    height="4"
                    rx="1"
                    fill="gray"
                    fillOpacity="0.4"
                  />
                  <rect
                    x="8"
                    y="2"
                    width="4"
                    height="4"
                    rx="1"
                    fill="gray"
                    fillOpacity="0.4"
                  />
                  <rect
                    x="2"
                    y="8"
                    width="4"
                    height="4"
                    rx="1"
                    fill="gray"
                    fillOpacity="0.4"
                  />
                  <rect
                    x="8"
                    y="8"
                    width="4"
                    height="4"
                    rx="1"
                    fill="gray"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
