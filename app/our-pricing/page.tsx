'use client'

import React from 'react';
import { HeroHeader } from '@/components/hero5-header';
import { Pricing } from '@/components/ui/pricing-section-with-comparison';
import OnboardingFAQs from '@/components/onboarding-faqs';
import BookingCalendar from '@/components/booking-calendar';
import { Badge } from '@/components/ui/badge';

export default function PricingPage() {
  return (
    <main className="flex flex-col">
      <HeroHeader />
      <div className="mt-16">
        <Pricing />
      </div>
      
      {/* Onboarding FAQs Section */}
      <OnboardingFAQs />
      
      {/* Booking Calendar Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Badge variant="outline" className="mb-4">Schedule a Consultation</Badge>
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Amazon Business?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book a free 25-minute consultation to discuss your specific needs and learn how our specialized VA teams and ChatGPT plugin can help you achieve your business goals.
          </p>
          <BookingCalendar />
        </div>
      </section>
    </main>
  );
} 