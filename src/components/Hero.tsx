import React from 'react';
import { Phone, Navigation, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#F8F9FB] pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Copy, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-[#B22234] rounded-xs" aria-hidden="true" />
              <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                HILLCREST, SAN DIEGO, CA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-7xl tracking-wide text-[#1E3A8A] uppercase leading-[0.95] mb-6">
              KEEP YOUR CAR{' '}
              <span className="text-[#B22234] inline-block">RUNNING</span> AT ITS BEST.
            </h1>

            {/* Supporting Description */}
            <p className="font-body text-base sm:text-lg text-[#2D3748] leading-relaxed max-w-2xl mb-8">
              From smog checks and brake repairs to clutch service and general automotive repairs, get the help your vehicle needs right here in Hillcrest.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold font-subheading uppercase tracking-wider text-white bg-[#B22234] hover:bg-[#931B2A] active:scale-[0.98] rounded-md transition-all shadow-md focus:ring-2 focus:ring-[#B22234] focus:ring-offset-2 text-center"
              >
                <Phone className="w-5 h-5" />
                <span>CALL FOR SERVICE</span>
              </a>

              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold font-subheading uppercase tracking-wider text-[#1E3A8A] bg-white hover:bg-slate-50 border-2 border-[#1E3A8A] active:scale-[0.98] rounded-md transition-all shadow-xs focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2 text-center"
              >
                <Navigation className="w-5 h-5 text-[#1E3A8A]" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

            {/* Three Compact Service Labels */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-subheading font-bold uppercase tracking-wider text-slate-700">
                <span className="hover:text-[#B22234] transition-colors">SMOG CHECK</span>
                <span className="mx-3 text-[#B22234]" aria-hidden="true">|</span>
                <span className="hover:text-[#B22234] transition-colors">BRAKE REPAIR</span>
                <span className="mx-3 text-[#B22234]" aria-hidden="true">|</span>
                <span className="hover:text-[#B22234] transition-colors">GENERAL REPAIR</span>
              </div>

              {/* Physical Address Reminder */}
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-600 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#B22234]" />
                <span>{BUSINESS_DATA.address.full}</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600">Hours: Mon–Fri 8:00 AM–5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Approved Real Garage Photograph */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#1E3A8A]/15 bg-white group">
              <div className="aspect-16/10 sm:aspect-16/11 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/hillcrest-garage-exterior.png"
                  alt="Hillcrest Auto Repair exterior storefront with original red and blue signage at 3864 First Ave, San Diego"
                  className="w-full h-full object-cover object-left-top sm:object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Bottom Quick Context Bar */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-subheading font-bold text-[#1E3A8A] uppercase tracking-wide">
                    Hillcrest Auto Repair
                  </div>
                  <div className="text-slate-500 font-body">
                    Signage: Hillcrest Smog &amp; Repair
                  </div>
                </div>

                <a
                  href={BUSINESS_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subheading font-bold text-[#B22234] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>View Map</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
