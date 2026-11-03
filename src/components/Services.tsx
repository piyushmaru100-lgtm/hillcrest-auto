import React from 'react';
import { Gauge, Disc, Cog, Wrench, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'gauge':
        return <Gauge className="w-6 h-6 text-[#1E3A8A]" />;
      case 'disc':
        return <Disc className="w-6 h-6 text-[#1E3A8A]" />;
      case 'settings':
        return <Cog className="w-8 h-8 text-[#1E3A8A]" />;
      case 'wrench':
      default:
        return <Wrench className="w-8 h-8 text-[#1E3A8A]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#B22234]" aria-hidden="true" />
            <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
              WHAT WE DO
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#1E3A8A] uppercase tracking-wide mb-4">
            AUTO CARE FOR EVERY MILE.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#2D3748] leading-relaxed">
            From essential maintenance to important repairs, explore the automotive services available at Hillcrest Auto Repair.
          </p>
        </div>

        {/* 4 Premium Service Cards with Approved Photography & Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BUSINESS_DATA.services.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#F8F9FB] rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-[#1E3A8A] hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Visual Header: Approved Real Photo or Clean Icon Badge */}
                {service.image ? (
                  <div className="aspect-16/10 w-full rounded-lg overflow-hidden border border-slate-200/90 mb-5 relative bg-slate-100 shadow-xs">
                    <img
                      src={service.image}
                      alt={`${service.title} at Hillcrest Auto Repair`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#0E1A38]/85 backdrop-blur-xs text-white text-[10px] font-subheading font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                      Photo · {service.title}
                    </div>
                  </div>
                ) : (
                  <div className="aspect-16/10 w-full rounded-lg bg-gradient-to-br from-[#E8EFF8] to-slate-100 border border-slate-200/90 mb-5 flex flex-col items-center justify-center p-4 relative shadow-xs">
                    <div className="w-14 h-14 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[10px] font-subheading font-bold uppercase tracking-wider text-slate-500 mt-2">
                      Professional Service
                    </span>
                  </div>
                )}

                {/* Numbering + Eyebrow */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-subheading font-bold uppercase tracking-wider text-[#B22234]">
                    {service.eyebrow}
                  </span>
                  <span className="font-heading text-xl text-slate-300 font-bold group-hover:text-[#B22234] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-subheading text-lg font-bold text-[#1E3A8A] mb-2.5 group-hover:text-[#B22234] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="font-body text-xs sm:text-sm text-[#2D3748] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Bullet Features */}
                <ul className="space-y-1.5 mb-6 pt-3 border-t border-slate-200/80">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-[#B22234] font-bold mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button linking to phone */}
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold font-subheading uppercase tracking-wider text-white bg-[#1E3A8A] group-hover:bg-[#B22234] rounded-md transition-colors shadow-xs active:scale-[0.98] text-center"
                title={`${service.ctaText} - ${BUSINESS_DATA.phone}`}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{service.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-lg bg-[#E8EFF8] border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-subheading font-bold text-sm text-[#1E3A8A] uppercase tracking-wide">
              Have questions about your vehicle?
            </h4>
            <p className="text-xs sm:text-sm text-[#2D3748] mt-0.5 font-body">
              Call our shop directly at <strong className="text-[#B22234]">{BUSINESS_DATA.phone}</strong> to confirm testing hours, part availability, and drop-off times.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="shrink-0 px-5 py-2.5 bg-[#B22234] hover:bg-[#931B2A] text-white text-xs font-bold font-subheading uppercase tracking-wider rounded-md transition-colors"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};
