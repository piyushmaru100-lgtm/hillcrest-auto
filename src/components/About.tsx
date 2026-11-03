import React from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F8F9FB] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Approved Real Garage Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#1E3A8A]/15 bg-white group">
              <div className="aspect-16/10 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/hillcrest-garage-exterior.png"
                  alt="Hillcrest Auto Repair garage storefront on First Avenue in San Diego"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-[#1E3A8A]">Hillcrest Garage Facility</span>
                <span>3864 First Ave, San Diego, CA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#B22234]" aria-hidden="true" />
              <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                ABOUT HILLCREST AUTO REPAIR
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-5xl text-[#1E3A8A] uppercase tracking-wide leading-tight mb-6">
              LOCAL AUTO CARE.{' '}
              <span className="text-[#B22234]">RIGHT HERE IN HILLCREST.</span>
            </h2>

            {/* Description Copy */}
            <div className="space-y-4 font-body text-base text-[#2D3748] leading-relaxed mb-8">
              <p>
                Looking for an automotive repair shop in San Diego? Hillcrest Auto Repair provides automotive services for local drivers, including smog checks, brake repair, clutch service, and general vehicle repairs.
              </p>
              <p>
                Located on First Avenue in the Hillcrest neighborhood, we&apos;re a convenient local destination for drivers looking for automotive service.
              </p>
            </div>

            {/* Factual Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#E8EFF8] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#1E3A8A]" />
                </div>
                <div>
                  <h4 className="font-subheading font-bold text-xs uppercase text-[#1E3A8A] tracking-wider">
                    Neighborhood Location
                  </h4>
                  <p className="text-xs text-slate-600 font-body mt-0.5">
                    3864 First Ave, San Diego, CA 92103
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#FBEAEC] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#B22234]" />
                </div>
                <div>
                  <h4 className="font-subheading font-bold text-xs uppercase text-[#1E3A8A] tracking-wider">
                    Direct Phone Line
                  </h4>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="text-xs text-[#B22234] font-bold font-body mt-0.5 hover:underline block"
                  >
                    (619) 297-4059
                  </a>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold font-subheading uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-[#14285E] active:scale-[0.98] rounded-md transition-all shadow-xs"
              >
                <span>CONTACT OUR SHOP</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold font-subheading uppercase tracking-wider text-[#B22234] bg-white border border-[#B22234] hover:bg-[#FBEAEC] rounded-md transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call (619) 297-4059</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
