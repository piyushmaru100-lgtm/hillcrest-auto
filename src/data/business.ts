/**
 * Hillcrest Auto Repair - Central Business Configuration
 * All business details, service catalogs, hours, and contact coordinates
 * are centralized here for easy maintenance and verified consistency.
 */

export interface BusinessConfig {
  name: string;
  signageName: string;
  phone: string;
  phoneRaw: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
    neighborhood: string;
  };
  googleMapsUrl: string;
  googleReviewsUrl: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    note: string;
  };
  services: {
    id: string;
    title: string;
    eyebrow: string;
    description: string;
    ctaText: string;
    icon: 'gauge' | 'disc' | 'settings' | 'wrench';
    image: string;
    features: string[];
  }[];
  whyChooseUs: {
    id: string;
    number: string;
    title: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  gallery: {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
  }[];
}

export const BUSINESS_DATA: BusinessConfig = {
  name: "Hillcrest Auto Repair",
  signageName: "Hillcrest Smog & Repair",
  phone: "(619) 297-4059",
  phoneRaw: "+16192974059",
  address: {
    street: "3864 First Ave",
    city: "San Diego",
    state: "CA",
    zip: "92103",
    full: "3864 First Ave, San Diego, CA 92103",
    neighborhood: "Hillcrest, San Diego",
  },
  googleMapsUrl: "https://maps.app.goo.gl/uzgL9ePBhjgMCLCf7",
  googleReviewsUrl: "https://maps.app.goo.gl/uzgL9ePBhjgMCLCf7",
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 5:00 PM",
    saturday: "Saturday: Closed (Call shop to verify)",
    sunday: "Sunday: Closed",
    note: "Business hours are based on directory listings. Please call the shop directly to confirm current daily availability or discuss specific repair drop-offs.",
  },
  services: [
    {
      id: "smog-check",
      title: "Smog Check",
      eyebrow: "California Emissions Testing",
      description:
        "Smog testing services to help California drivers meet applicable vehicle emissions requirements.",
      ctaText: "CALL ABOUT SMOG CHECKS",
      icon: "gauge",
      image: "/images/smog-check-diagnostics.png",
      features: [
        "California emissions compliance inspection",
        "Prompt drive-in testing procedures",
        "Direct electronic submission to CA DMV",
      ],
    },
    {
      id: "brake-repair",
      title: "Brake Repair",
      eyebrow: "Pads, Rotors & Hydraulics",
      description:
        "Brake service for drivers experiencing brake-related concerns or needing their braking system inspected.",
      ctaText: "CALL FOR BRAKE SERVICE",
      icon: "disc",
      image: "/images/brake-repair-mechanic.png",
      features: [
        "Brake pad inspection and replacement",
        "Rotor condition evaluation and service",
        "Hydraulic line and fluid inspection",
      ],
    },
    {
      id: "clutch-repair",
      title: "Clutch Repair",
      eyebrow: "Manual Transmission Service",
      description:
        "Clutch-related repair services to help address shifting and clutch performance concerns.",
      ctaText: "CALL FOR CLUTCH SERVICE",
      icon: "settings",
      image: "/images/clutch-repair-mechanic.png",
      features: [
        "Slipping or hard-to-shift diagnosis",
        "Clutch disc, pressure plate & flywheel inspection",
        "Hydraulic clutch master & slave cylinder checks",
      ],
    },
    {
      id: "general-auto-repair",
      title: "General Auto Repair",
      eyebrow: "Everyday Vehicle Care",
      description:
        "Automotive repair and maintenance support for everyday vehicle issues.",
      ctaText: "DISCUSS YOUR REPAIR",
      icon: "wrench",
      image: "/images/general-auto-repair-mechanic.png",
      features: [
        "Routine preventative maintenance",
        "Engine diagnostics & warning light checks",
        "Cooling, belts, hoses & mechanical repairs",
      ],
    },
  ],
  whyChooseUs: [
    {
      id: "feature-1",
      number: "01",
      title: "LOCAL HILLCREST LOCATION",
      description:
        "Conveniently located on First Avenue in San Diego, accessible for neighborhood residents and nearby communities.",
    },
    {
      id: "feature-2",
      number: "02",
      title: "MULTIPLE AUTO SERVICES",
      description:
        "Smog checks, brake repair, clutch service, and general automotive repair handled under one roof.",
    },
    {
      id: "feature-3",
      number: "03",
      title: "DIRECT COMMUNICATION",
      description:
        "Call the shop directly to discuss your vehicle's specific symptoms, service availability, and timing.",
    },
    {
      id: "feature-4",
      number: "04",
      title: "CONVENIENT LOCATION",
      description:
        "Find the shop easily using Google Maps directions with direct access from major Hillcrest thoroughfares.",
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "GET IN TOUCH",
      description: "Call the shop and describe what your vehicle needs.",
    },
    {
      step: "02",
      title: "DISCUSS YOUR SERVICE",
      description:
        "Speak with the shop about service availability and the next steps.",
    },
    {
      step: "03",
      title: "VISIT THE GARAGE",
      description:
        "Find the location on First Avenue and bring your vehicle in.",
    },
  ],
  faqs: [
    {
      question: "Where is Hillcrest Auto Repair located?",
      answer:
        "We are located at 3864 First Ave, San Diego, CA 92103 in the Hillcrest neighborhood, easily accessible from University Ave and Washington St.",
    },
    {
      question: "What automotive services do you offer?",
      answer:
        "Our primary services include California smog checks, brake repairs and inspections, manual clutch repairs, and general automotive mechanical maintenance.",
    },
    {
      question: "Do you provide smog checks?",
      answer:
        "Yes, California smog checks are one of our core services. Please call ahead at (619) 297-4059 to confirm current daily testing hours and bay availability.",
    },
    {
      question: "Can I call to discuss a repair before visiting?",
      answer:
        "Yes, we encourage you to call (619) 297-4059 before coming in so we can discuss your car's symptoms, verify parts or bay availability, and guide you on the best time to drop by.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Our standard operating hours are Monday through Friday, 8:00 AM to 5:00 PM. Weekend hours may be closed or limited; please call ahead to confirm current weekend schedules.",
    },
    {
      question: "How do I get directions to the shop?",
      answer:
        "You can click any 'Get Directions' button on this site or search 'Hillcrest Auto Repair' on Google Maps to navigate directly to 3864 First Ave, San Diego, CA 92103.",
    },
  ],
  gallery: [
    {
      id: "exterior",
      title: "Hillcrest Garage Exterior",
      category: "Garage Facility",
      description:
        "The authentic Hillcrest Auto Repair storefront on First Avenue with signature red and blue signage, open service bays, and San Diego palm surroundings.",
      image: "/images/hillcrest-garage-exterior.png",
    },
    {
      id: "brake-repair",
      title: "Brake Repair in Progress",
      category: "Brake Service",
      description:
        "Automotive technician servicing a vehicle disc brake caliper and rotor on a hydraulic lift in the workshop.",
      image: "/images/brake-repair-mechanic.png",
    },
    {
      id: "smog-check",
      title: "Smog Check & Diagnostics",
      category: "Emissions & Inspection",
      description:
        "Vehicle emissions testing and computer diagnostics being performed with official inspection equipment connected to the vehicle exhaust.",
      image: "/images/smog-check-diagnostics.png",
    },
    {
      id: "clutch-repair",
      title: "Clutch Assembly Replacement",
      category: "Clutch Service",
      description:
        "Automotive technician installing and inspecting a manual transmission clutch disc, pressure plate, and flywheel assembly under the lift.",
      image: "/images/clutch-repair-mechanic.png",
    },
    {
      id: "general-repair",
      title: "Engine & Mechanical Diagnostics",
      category: "General Repair",
      description:
        "Automotive technician servicing engine compartment components, performing maintenance, and securing parts with precision hand tools.",
      image: "/images/general-auto-repair-mechanic.png",
    },
  ],
};
