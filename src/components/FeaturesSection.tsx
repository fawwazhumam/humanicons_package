interface Features {
  className?: string;
  mediaSrc?: string;
  mediaAlt?: string;
}

export default function FeaturesSection({
  className = "",
  mediaSrc,
  mediaAlt = "Preview",
}: Features) {
  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-[1216px] mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="relative w-full rounded-xl overflow-hidden border border-gray-100">
          {mediaSrc ? (
            <img
              src={mediaSrc}
              alt={mediaAlt}
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="w-full aspect-video flex flex-col items-center justify-center gap-3 bg-gray-200">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="2"
                    y="4"
                    width="16"
                    height="12"
                    rx="2"
                    stroke="gray"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                  />
                  <path d="M8 8L13 10L8 12V8Z" fill="white" fillOpacity="0.3" />
                </svg>
              </div>
              <p className="text-[14px] font-medium text-gray-800 font-['Plus_Jakarta_Sans',sans-serif]">
                Image or Video
              </p>
              <p className="text-[14px] font-medium text-gray-600 font-['Plus_Jakarta_Sans',sans-serif]">
                Replace here 1920 x 1080
              </p>
            </div>
          )}

          <div className="absolute bottom-4 left-4">
            <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 backdrop-blur-sm flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="6"
                  stroke="gray"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="8" cy="8" r="2.5" fill="white" fillOpacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
