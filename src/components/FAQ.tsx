import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F8F9FB] border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#B22234]" aria-hidden="true" />
            <span className="font-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
              COMMON INQUIRIES
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#1E3A8A] uppercase tracking-wide mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="font-body text-base text-[#2D3748] leading-relaxed">
            Find answers to practical questions regarding our Hillcrest shop, smog inspections, and auto services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {BUSINESS_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1E3A8A]"
                  aria-expanded={isOpen}
                >
                  <span className="font-subheading text-base sm:text-lg font-bold text-[#1E3A8A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-[#1E3A8A] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#E8EFF8]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#2D3748] font-body leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Call Card */}
        <div className="mt-12 text-center p-6 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-subheading font-bold text-sm text-[#1E3A8A] uppercase tracking-wide">
              Have another question about your vehicle?
            </h4>
            <p className="text-xs text-slate-600 font-body mt-0.5">
              Speak directly with a mechanic during shop hours.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B22234] hover:bg-[#931B2A] text-white text-xs font-bold font-subheading uppercase tracking-wider rounded-md transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call (619) 297-4059</span>
          </a>
        </div>
      </div>
    </section>
  );
};
