import React from 'react';
import { MapPin, Wrench, PhoneCall, Navigation } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MapPin className="w-6 h-6 text-[#1E3A8A]" />;
      case 1:
        return <Wrench className="w-6 h-6 text-[#B22234]" />;
      case 2:
        return <PhoneCall className="w-6 h-6 text-[#1E3A8A]" />;
      case 3:
      default:
        return <Navigation className="w-6 h-6 text-[#B22234]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#B22234]" aria-hidden="true" />
            <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
              PRACTICAL AUTO SERVICE
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#1E3A8A] uppercase tracking-wide mb-4">
            YOUR VEHICLE DESERVES ATTENTION.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#2D3748] leading-relaxed">
            Reliable vehicle maintenance begins with straightforward communication, convenient local access, and direct service for your car.
          </p>
        </div>

        {/* 4 Clean Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_DATA.whyChooseUs.map((feature, idx) => (
            <div
              key={feature.id}
              className="bg-[#F8F9FB] rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#1E3A8A] transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getFeatureIcon(idx)}
                  </div>
                  <span className="font-heading text-xl text-slate-300 font-bold group-hover:text-[#B22234] transition-colors">
                    {feature.number}
                  </span>
                </div>

                <h3 className="font-subheading text-base font-bold text-[#1E3A8A] mb-3 uppercase tracking-wide group-hover:text-[#B22234] transition-colors">
                  {feature.title}
                </h3>

                <p className="font-body text-sm text-[#2D3748] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-500">
                <span>Hillcrest Auto Repair</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
