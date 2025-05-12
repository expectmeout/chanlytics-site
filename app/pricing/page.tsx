'use client'

import React from 'react';
import { HeroHeader } from '@/components/hero5-header';
import { Pricing } from '@/components/ui/pricing-section-with-comparison';
import CallToActionPricing from '@/components/pricing-hero';
export default function PricingPage() {
  return (
    <main className="flex flex-col">
      <HeroHeader />
      <div className="mt-16">
      <Pricing />
      </div>
      {/* You can add more sections here like FAQs or Testimonials */}
    </main>
  );
} 