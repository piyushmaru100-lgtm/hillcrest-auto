import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_DATA.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-[#B22234] text-white font-subheading font-bold text-xs uppercase tracking-wider shadow-sm active:scale-[0.98] transition-transform text-center min-h-[44px]"
          aria-label="Call Hillcrest Auto Repair"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span className="truncate">CALL NOW</span>
        </a>

        <a
          href={BUSINESS_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-[#1E3A8A] text-white font-subheading font-bold text-xs uppercase tracking-wider shadow-sm active:scale-[0.98] transition-transform text-center min-h-[44px]"
          aria-label="Get Directions to Hillcrest Auto Repair"
        >
          <Navigation className="w-4 h-4 shrink-0" />
          <span className="truncate">DIRECTIONS</span>
        </a>
      </div>
    </div>
  );
};
