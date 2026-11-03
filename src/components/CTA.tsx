import React from 'react';
import { Phone, Navigation, Clock, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0E1A38] text-white overflow-hidden border-b border-[#1E3A8A]">
      {/* Decorative Brand Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#B22234]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#B22234]" aria-hidden="true" />
            <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              HILLCREST AUTO REPAIR · SAN DIEGO
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide mb-6 leading-tight">
            NEED HELP WITH <span className="text-[#B22234]">YOUR VEHICLE?</span>
          </h2>

          {/* Supporting Copy */}
          <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Get in touch with Hillcrest Auto Repair to discuss your automotive service needs.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold font-subheading uppercase tracking-wider text-white bg-[#B22234] hover:bg-[#931B2A] active:scale-[0.98] rounded-md transition-all shadow-lg focus:ring-2 focus:ring-[#B22234] focus:ring-offset-2 focus:ring-offset-[#0E1A38]"
            >
              <Phone className="w-5 h-5" />
              <span>CALL (619) 297-4059</span>
            </a>

            <a
              href={BUSINESS_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold font-subheading uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border-2 border-white/40 hover:border-white active:scale-[0.98] rounded-md transition-all shadow-xs"
            >
              <Navigation className="w-5 h-5 text-red-400" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

          {/* Location & Schedule Recap */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B22234]" />
              <span>3864 First Ave, San Diego, CA 92103</span>
            </div>
            <span className="hidden sm:inline text-slate-600">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Mon–Fri 8:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
