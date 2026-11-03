/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#2D3748] font-body selection:bg-[#B22234] selection:text-white">
      {/* SECTION 1: Top Contact Bar */}
      <TopBar />

      {/* SECTION 2: Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* SECTION 3: Hero Section */}
        <Hero />

        {/* SECTION 4: Services */}
        <Services />

        {/* SECTION 5: About The Garage */}
        <About />

        {/* SECTION 6: Why Choose Us */}
        <WhyChooseUs />

        {/* SECTION 7: How It Works */}
        <Process />

        {/* SECTION 8: Garage Gallery */}
        <Gallery />

        {/* SECTION 9: Customer Reviews */}
        <Reviews />

        {/* SECTION 10: Location & Contact */}
        <Contact />

        {/* SECTION 11: FAQ */}
        <FAQ />

        {/* SECTION 12: Final CTA */}
        <CTA />
      </main>

      {/* SECTION 13: Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar />
    </div>
  );
}
