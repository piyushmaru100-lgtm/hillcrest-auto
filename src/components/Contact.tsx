import React from 'react';
import { MapPin, Phone, Clock, Navigation, AlertCircle } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#B22234]" aria-hidden="true" />
            <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
              FIND OUR GARAGE
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#1E3A8A] uppercase tracking-wide mb-4">
            VISIT HILLCREST AUTO REPAIR
          </h2>

          <p className="font-body text-base sm:text-lg text-[#2D3748] leading-relaxed">
            Located on First Avenue in Hillcrest, San Diego. Stop by or call ahead to plan your visit.
          </p>
        </div>

        {/* 2-Column Split: Business Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Coordinates Card */}
          <div className="lg:col-span-5 bg-[#F8F9FB] rounded-xl border border-slate-200 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Business Name Lockup */}
              <div>
                <span className="text-[11px] font-subheading font-bold uppercase tracking-wider text-[#B22234] block mb-1">
                  Automotive Repair &amp; Maintenance
                </span>
                <h3 className="font-heading text-3xl text-[#1E3A8A] tracking-wider uppercase">
                  {BUSINESS_DATA.name}
                </h3>
                <p className="text-xs text-slate-500 font-body mt-0.5">
                  Alternative Signage: {BUSINESS_DATA.signageName}
                </p>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
                <div className="w-9 h-9 rounded bg-[#E8EFF8] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#1E3A8A]" />
                </div>
                <div>
                  <h4 className="font-subheading font-bold text-xs uppercase tracking-wider text-[#1E3A8A]">
                    Street Address
                  </h4>
                  <p className="font-body text-sm text-[#2D3748] mt-0.5 font-medium">
                    {BUSINESS_DATA.address.street}
                  </p>
                  <p className="font-body text-sm text-[#2D3748]">
                    {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.state} {BUSINESS_DATA.address.zip}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Hillcrest neighborhood, San Diego
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
                <div className="w-9 h-9 rounded bg-[#FBEAEC] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#B22234]" />
                </div>
                <div>
                  <h4 className="font-subheading font-bold text-xs uppercase tracking-wider text-[#1E3A8A]">
                    Telephone
                  </h4>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="font-subheading text-lg font-bold text-[#B22234] hover:underline block mt-0.5"
                  >
                    {BUSINESS_DATA.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click to call directly from your device
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
                <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-subheading font-bold text-xs uppercase tracking-wider text-[#1E3A8A]">
                    Business Hours
                  </h4>
                  <div className="text-xs sm:text-sm text-[#2D3748] mt-1 space-y-1 font-body">
                    <p className="font-semibold text-slate-800">{BUSINESS_DATA.hours.weekdays}</p>
                    <p className="text-slate-600">{BUSINESS_DATA.hours.saturday}</p>
                    <p className="text-slate-600">{BUSINESS_DATA.hours.sunday}</p>
                  </div>

                  <div className="mt-3 p-2.5 bg-amber-50 rounded border border-amber-200 text-[11px] text-amber-900 flex items-start gap-1.5 font-body">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                    <span>{BUSINESS_DATA.hours.note}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold font-subheading uppercase tracking-wider text-white bg-[#B22234] hover:bg-[#931B2A] rounded-md transition-all shadow-xs text-center"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>

              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold font-subheading uppercase tracking-wider text-[#1E3A8A] bg-white hover:bg-slate-50 border border-[#1E3A8A] rounded-md transition-all shadow-xs text-center"
              >
                <Navigation className="w-4 h-4 text-[#1E3A8A]" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed + Street context */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col bg-slate-100">
            {/* Map Frame Header */}
            <div className="px-4 py-3 bg-[#1E3A8A] text-white flex items-center justify-between text-xs font-subheading">
              <span className="font-bold uppercase tracking-wider">
                Interactive Map · 3864 First Ave, San Diego, CA
              </span>
              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-200 font-medium"
              >
                Open in Google Maps &rarr;
              </a>
            </div>

            {/* Google Map iframe */}
            <div className="relative w-full flex-1 min-h-[360px] sm:min-h-[440px]">
              <iframe
                title="Hillcrest Auto Repair Google Maps Location"
                src="https://maps.google.com/maps?q=3864+First+Ave,+San+Diego,+CA+92103&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Map bottom bar */}
            <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 font-body">
                Located near University Ave &amp; Washington St in Hillcrest
              </span>
              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-subheading font-bold text-[#B22234] hover:underline flex items-center gap-1"
              >
                <span>Navigate With GPS</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
