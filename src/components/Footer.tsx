import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand & Address Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col justify-center items-center w-8 h-8 rounded bg-[#1E3A8A] text-white p-1 border border-blue-400">
                <div className="w-full h-1 bg-[#B22234] rounded-xs mb-1" />
                <span className="font-heading text-sm leading-none font-bold">HAR</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl tracking-wider text-white leading-none">
                  HILLCREST AUTO REPAIR
                </span>
                <span className="font-subheading text-[10px] tracking-[0.25em] font-bold text-slate-400 uppercase leading-none mt-1">
                  HILLCREST SMOG &amp; REPAIR
                </span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing dependable automotive repairs, California smog checks, brake service, and clutch maintenance for drivers in Hillcrest and greater San Diego.
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B22234] shrink-0 mt-0.5" />
                <span>{BUSINESS_DATA.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B22234] shrink-0" />
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="hover:text-white font-semibold transition-colors"
                >
                  {BUSINESS_DATA.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Mon–Fri: 8:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 6-7) */}
          <div className="lg:col-span-3">
            <h4 className="font-subheading font-bold text-xs uppercase tracking-[0.2em] text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Garage Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Location
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services (Col 8-10) */}
          <div className="lg:col-span-4">
            <h4 className="font-subheading font-bold text-xs uppercase tracking-[0.2em] text-white mb-4">
              OUR SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {BUSINESS_DATA.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <span className="text-xs text-slate-500 group-hover:text-[#B22234] transition-colors">
                      Learn More &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-subheading font-bold text-[#B22234] hover:underline"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-body">
          <p>© {currentYear} Hillcrest Auto Repair. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>3864 First Ave, San Diego, CA 92103</span>
            <span>·</span>
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="hover:text-slate-300 transition-colors"
            >
              {BUSINESS_DATA.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
