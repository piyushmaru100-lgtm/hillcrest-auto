import React from 'react';
import { PhoneCall, ClipboardCheck, Car, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const Process: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <PhoneCall className="w-6 h-6 text-[#B22234]" />;
      case 1:
        return <ClipboardCheck className="w-6 h-6 text-[#1E3A8A]" />;
      case 2:
      default:
        return <Car className="w-6 h-6 text-[#B22234]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F8F9FB] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#B22234]" aria-hidden="true" />
            <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#1E3A8A] uppercase tracking-wide mb-4">
            SIMPLE, DIRECT AUTO CARE.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#2D3748] leading-relaxed">
            Getting your vehicle checked or repaired is a direct, straightforward 3-step process.
          </p>
        </div>

        {/* Timeline Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 h-0.5 bg-slate-300 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {BUSINESS_DATA.processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs flex flex-col items-center text-center relative group hover:border-[#1E3A8A] transition-colors"
              >
                {/* Step badge pill on card */}
                <div className="w-16 h-16 rounded-full bg-[#E8EFF8] border-2 border-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getStepIcon(idx)}
                </div>

                <span className="font-heading text-xl text-[#B22234] font-bold tracking-wider mb-2">
                  STEP {step.step}
                </span>

                <h3 className="font-subheading text-lg font-bold text-[#1E3A8A] mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>

                <p className="font-body text-sm text-[#2D3748] leading-relaxed">
                  {step.description}
                </p>

                {idx === 0 && (
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold font-subheading uppercase text-[#B22234] hover:underline"
                  >
                    <span>Call (619) 297-4059</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {idx === 2 && (
                  <a
                    href={BUSINESS_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold font-subheading uppercase text-[#1E3A8A] hover:underline"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
