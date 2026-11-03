import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Phone, Navigation } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const Gallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems = BUSINESS_DATA.gallery;

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const activeItem = activeImageIndex !== null ? galleryItems[activeImageIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#B22234]" aria-hidden="true" />
            <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
              THE FACILITY
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#1E3A8A] uppercase tracking-wide mb-4">
            TAKE A LOOK INSIDE.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#2D3748] leading-relaxed">
            Authentic photographs of the Hillcrest Auto Repair facility, service bays, brake repair, and diagnostics.
          </p>
        </div>

        {/* 3 Photographic Gallery Cards in Exact Requested Order */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="group cursor-pointer rounded-xl overflow-hidden border border-slate-200 bg-[#F8F9FB] shadow-sm hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-[#0E1A38]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#1E3A8A] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#0E1A38]/85 backdrop-blur-xs text-white text-[10px] font-bold font-subheading uppercase tracking-widest px-2.5 py-1 rounded shadow-xs">
                  {item.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-subheading text-base font-bold text-[#1E3A8A] group-hover:text-[#B22234] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-slate-600 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400">Photo 0{index + 1}</span>
                  <span className="font-subheading text-[#B22234] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Expand &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0E1A38] rounded-xl overflow-hidden shadow-2xl border border-white/20 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-black/40 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-subheading font-bold uppercase tracking-wider text-[#B22234] bg-white/10 px-2 py-0.5 rounded">
                  {activeItem.category}
                </span>
                <h3 className="font-subheading text-base sm:text-lg font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative aspect-16/10 w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-[#0E1A38] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-300 font-body text-center sm:text-left">
                {activeItem.description}
              </p>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="px-4 py-2 bg-[#B22234] hover:bg-[#931B2A] text-white text-xs font-bold font-subheading uppercase rounded flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Shop</span>
                </a>

                <a
                  href={BUSINESS_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold font-subheading uppercase rounded flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
