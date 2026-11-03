import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8F9FB] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#B22234]" aria-hidden="true" />
            <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
              VERIFIED FEEDBACK
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-5xl text-[#1E3A8A] uppercase tracking-wide mb-4">
            WHAT LOCAL DRIVERS SAY
          </h2>

          {/* Authentic Description */}
          <p className="font-body text-base text-[#2D3748] max-w-2xl mx-auto leading-relaxed mb-8">
            We value genuine feedback from San Diego car owners and Hillcrest neighbors who have visited our garage for smog testing, brake work, and mechanical repairs. Read real customer experiences directly on our Google Business listing.
          </p>

          {/* Google Emblem Trust Element */}
          <div className="flex items-center justify-center gap-1.5 mb-8 text-[#B22234]">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <span className="ml-2 font-subheading text-xs font-bold text-slate-600 uppercase tracking-wider">
              Google Maps Verified Listing
            </span>
          </div>

          {/* Primary CTA: READ OUR GOOGLE REVIEWS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS_DATA.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold font-subheading uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-[#14285E] active:scale-[0.98] rounded-md transition-all shadow-md focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2"
            >
              <span>READ OUR GOOGLE REVIEWS</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold font-subheading uppercase tracking-wider text-[#B22234] hover:bg-[#FBEAEC] rounded-md transition-all"
            >
              <span>Or Call Our Shop</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 font-body mt-6">
            Listing: Hillcrest Auto Repair · 3864 First Ave, San Diego, CA 92103
          </p>
        </div>
      </div>
    </section>
  );
};
