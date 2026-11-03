import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#14285E] text-white/90 text-xs py-2 px-4 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left Notice */}
        <div className="flex items-center gap-2 text-center sm:text-left font-medium text-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B22234]" aria-hidden="true" />
          <span>Your Local Auto Repair Shop in Hillcrest, San Diego</span>
        </div>

        {/* Right Contact Details */}
        <div className="flex items-center gap-4 sm:gap-6 text-slate-300">
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors font-semibold group"
            title="Call Hillcrest Auto Repair"
          >
            <Phone className="w-3.5 h-3.5 text-[#B22234] group-hover:scale-110 transition-transform" />
            <span>{BUSINESS_DATA.phone}</span>
          </a>

          <span className="text-white/20 hidden sm:inline" aria-hidden="true">|</span>

          <a
            href={BUSINESS_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="View on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-blue-300" />
            <span>San Diego, CA</span>
          </a>
        </div>
      </div>
    </div>
  );
};
